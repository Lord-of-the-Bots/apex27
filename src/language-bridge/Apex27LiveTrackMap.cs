using System;
using System.Collections.Generic;
using System.Windows;
using GameReaderCommon;
using Newtonsoft.Json.Linq;
using SimHub.Plugins.OutputPlugins.GraphicalDash.Models;
using MapMarker = SimHub.Plugins.OutputPlugins.GraphicalDash.Models.Opponent;
using TelemetryOpponent = GameReaderCommon.Opponent;

// Uses SimHub's recorded map and rendering with current per-car race data.
// Changes are confined to this component's markers.
public sealed class Apex27LiveTrackMap : GeneratedStaticMapItem, IWeb
{
    public string LivePositionsJson { get; set; }

    public override string ComponentTypeName { get { return "APEX 27 live track map"; } }

    // Keep the native map-image protocol, but send current markers on every
    // host render frame instead of inheriting the map's 30 ms web throttle.
    public new object GetWebData(object previous, bool visible)
    {
        var update = base.GetWebData(previous, visible);
        if (update != null || !visible || ImageData == null) return update;
        return new { PT = "opponnents", Opponents = Opponents };
    }

    public override void UpdateData(GameData livedata, Action<IBindable> postAction)
    {
        base.UpdateData(livedata, postAction);
        if (!Visible || livedata == null || !livedata.GameRunning ||
            String.IsNullOrEmpty(LivePositionsJson)) return;

        double now = (DateTime.UtcNow - new DateTime(1970, 1, 1)).TotalMilliseconds;
        var snapshot = ReadSnapshot(LivePositionsJson, now);
        var source = livedata.NewData == null ? null : livedata.NewData.Opponents;
        if (source == null) return;

        var matched = ApplyPositions(Opponents, source, snapshot == null ?
            new Dictionary<string, int>() : snapshot.Positions);
        if (snapshot == null)
        {
            foreach (var marker in Opponents) marker.Visibility = Visibility.Collapsed;
            return;
        }
        if (snapshot.Progress == null) return;
        foreach (var marker in Opponents)
        {
            string number;
            double? fraction;
            double[] coordinates = null;
            if (matched.TryGetValue(marker, out number) && snapshot.Progress.TryGetValue(number, out fraction))
                coordinates = ProjectProgress(loadedrecord, fraction);
            if (coordinates == null || renderer == null) marker.Visibility = Visibility.Collapsed;
            else SetCoordinates(coordinates, marker);
        }
    }

    private static IDictionary<MapMarker, string> ApplyPositions(IEnumerable<MapMarker> markers,
        IEnumerable<TelemetryOpponent> source, IDictionary<string, int> positions)
    {
        var byId = new Dictionary<string, TelemetryOpponent>(StringComparer.Ordinal);
        var matched = new Dictionary<MapMarker, string>();
        TelemetryOpponent player = null;
        int playerCount = 0;
        foreach (var opponent in source)
        {
            if (opponent.IsPlayer) { player = opponent; playerCount++; }
            if (opponent.Id != null)
            {
                // Duplicate IDs are ambiguous even when their numbers match.
                if (byId.ContainsKey(opponent.Id)) byId[opponent.Id] = null;
                else byId.Add(opponent.Id, opponent);
            }
        }

        var ordered = new List<MapMarker>();
        foreach (var marker in markers)
        {
            TelemetryOpponent opponent = null;
            if (marker.IsPlayer) opponent = playerCount == 1 ? player : null;
            else if (marker.OpponentID != null) byId.TryGetValue(marker.OpponentID, out opponent);
            int? position = null;
            if (opponent != null)
            {
                int value;
                string number = "$" + opponent.CarNumber;
                matched[marker] = number;
                if (positions.TryGetValue(number, out value)) position = value;
            }
            // A missing or stale snapshot must not restore a timing-line label.
            marker.RacePosition = position.HasValue && position.Value >= 1 && position.Value <= 512 ? position.Value : 0;
            ordered.Add(marker);
        }

        // The base map sorted its layers before these live labels were applied.
        // Reapply the same descending-position order, including the player.
        ordered.Sort(delegate(MapMarker a, MapMarker b)
        {
            double ar = a.RacePosition > 0 ? a.RacePosition : 99999;
            double br = b.RacePosition > 0 ? b.RacePosition : 99999;
            int order = br.CompareTo(ar);
            return order != 0 ? order : a.Id.CompareTo(b.Id);
        });
        for (int i = 0; i < ordered.Count; i++)
        {
            if (ordered[i].ZIndex != i + 1) ordered[i].ZIndex = i + 1;
        }
        return matched;
    }

    private static double[] ProjectProgress(DataRecordBase record, double? fraction)
    {
        if (record == null || !fraction.HasValue || Double.IsNaN(fraction.Value) ||
            Double.IsInfinity(fraction.Value) || fraction.Value < 0 || fraction.Value > 1 ||
            record.CarCoordinates == null || record.CarCoordinates.Count < 2) return null;
        // A partially learned map must not extrapolate an unrecorded section.
        var first = record.CarCoordinates[0];
        var last = record.CarCoordinates[record.CarCoordinates.Count - 1];
        if (fraction.Value < first.TrackPositionPercent || fraction.Value > last.TrackPositionPercent ||
            !record.IsInBounds(fraction.Value)) return null;
        var coordinates = record.GetRelativeCoordinates(fraction.Value);
        if (coordinates == null || coordinates.Length < 3) return null;
        for (int i = 0; i < 3; i++) if (Double.IsNaN(coordinates[i]) || Double.IsInfinity(coordinates[i])) return null;
        return coordinates;
    }

    private sealed class MapSnapshot
    {
        public readonly IDictionary<string, int> Positions = new Dictionary<string, int>(StringComparer.Ordinal);
        public IDictionary<string, double?> Progress;
    }

    private static MapSnapshot ReadSnapshot(string json, double now)
    {
        try
        {
            var data = JObject.Parse(json);
            double? stamp = (double?)data["stamp"];
            if (!stamp.HasValue || Double.IsNaN(stamp.Value) || Double.IsInfinity(stamp.Value) ||
                now < stamp.Value || now - stamp.Value > 1500) return null;
            var result = new MapSnapshot();
            var positions = data["positions"] as JObject;
            if (positions != null) foreach (var entry in positions.Properties())
            {
                if (entry.Value.Type != JTokenType.Integer) continue;
                int value = (int)entry.Value;
                if (value >= 1 && value <= 512) result.Positions[entry.Name] = value;
            }
            var progress = data["progress"] as JObject;
            if (progress != null)
            {
                result.Progress = new Dictionary<string, double?>(StringComparer.Ordinal);
                foreach (var entry in progress.Properties())
                {
                    double? value = null;
                    if (entry.Value.Type == JTokenType.Float || entry.Value.Type == JTokenType.Integer)
                    {
                        double number = (double)entry.Value;
                        if (!Double.IsNaN(number) && !Double.IsInfinity(number) && number >= 0 && number <= 1) value = number;
                    }
                    result.Progress[entry.Name] = value;
                }
            }
            return result;
        }
        catch { return null; }
    }
}
