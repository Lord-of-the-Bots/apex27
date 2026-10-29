using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.IO.MemoryMappedFiles;
using System.Text;
using Newtonsoft.Json;

// Reads the public iRacing telemetry mapping. No simulator commands are sent.
internal sealed class Apex27IRacingTelemetry : IDisposable
{
    private const string MappingName = "Local\\IRSDKMemMapFileName";
    private static readonly HashSet<string> DashboardChannels = new HashSet<string>("Brake,BrakeABSactive,CarIdxBestLapTime,CarIdxClassPosition,CarIdxEstTime,CarIdxF2Time,CarIdxLap,CarIdxLapCompleted,CarIdxLapDistPct,CarIdxLastLapTime,CarIdxOnPitRoad,CarIdxPosition,CarIdxSessionFlags,CarIdxTrackSurface,Clutch,EngineWarnings,FuelLevel,FuelLevelPct,Gear,IsOnTrack,IsReplayPlaying,Lap,LapBestLapTime,LapCompleted,LapCurrentLapTime,LapDeltaToBestLap,LapDeltaToBestLap_OK,LapDeltaToSessionBestLap,LapDeltaToSessionBestLap_OK,LapDeltaToSessionLastlLap_OK,LapDistPct,LapLastLapTime,OnPitRoad,PlayerCarClassPosition,PlayerCarIdx,PlayerCarMyIncidentCount,PlayerCarPosition,PlayerCarTowTime,PlayerTrackSurface,RPM,ReplaySessionNum,ReplaySessionTime,SessionFlags,SessionLapsRemainEx,SessionLapsTotal,SessionNum,SessionState,SessionTick,SessionTime,SessionTimeRemain,SessionUniqueID,Speed,Throttle,TickCount,dcBrakeBias".Split(','), StringComparer.Ordinal);
    private const int HeaderSize = 112;
    private const int VariableHeaderSize = 144;
    private const int MaximumVariables = 4096;
    private const int MaximumRowBytes = 1048576;
    private const int MaximumElements = 8192;
    private readonly object gate = new object();
    private readonly string mappingName;
    private readonly Stopwatch clock = Stopwatch.StartNew();
    private MemoryMappedFile mapping;
    private MemoryMappedViewAccessor view;
    private Variable[] variables;
    private Header variableLayout;
    private byte[] row;
    private Dictionary<string, object> snapshot;
    private Dictionary<string, object> jsonSnapshot;
    private string json;
    private long nextRead;
    private long lastAdvance;
    private int lastTick;
    private bool hasTick;
    private bool hasConnected;
    private bool disposed;
    private string status = "Unavailable";

    internal Apex27IRacingTelemetry() : this(MappingName) { }

    internal Apex27IRacingTelemetry(string mappingName)
    {
        if (String.IsNullOrEmpty(mappingName)) throw new ArgumentException("A mapping name is required.", "mappingName");
        this.mappingName = mappingName;
    }

    internal string Status { get { lock (gate) { return status; } } }

    internal string ReadJson()
    {
        lock (gate)
        {
            var current = Read();
            if (current == null)
            {
                jsonSnapshot = null;
                json = null;
            }
            else if (!Object.ReferenceEquals(current, jsonSnapshot))
            {
                var channels = new Dictionary<string, object>(DashboardChannels.Count);
                foreach (var entry in current) if (DashboardChannels.Contains(entry.Key)) channels.Add(entry.Key, entry.Value);
                json = JsonConvert.SerializeObject(channels);
                jsonSnapshot = current;
            }
            return json;
        }
    }

    internal Dictionary<string, object> Read()
    {
        lock (gate)
        {
            if (disposed) return null;
            long now = clock.ElapsedMilliseconds;
            if (now < nextRead) return snapshot;
            nextRead = now + 1;
            try
            {
                if (view == null)
                {
                    mapping = MemoryMappedFile.OpenExisting(mappingName, MemoryMappedFileRights.Read);
                    view = mapping.CreateViewAccessor(0, 0, MemoryMappedFileAccess.Read);
                }
                bool canRetain = snapshot != null;
                for (int attempt = 0; attempt < 3; attempt++)
                {
                    Header header = ReadHeader();
                    if ((header.Status & 1) == 0) return Unavailable("Disconnected", now, true);
                    ValidateHeader(header);
                    if (variables == null || !SameLayout(header, variableLayout) || header.SessionUpdate != variableLayout.SessionUpdate)
                    {
                        canRetain = false;
                        variables = ReadVariables(header);
                        variableLayout = header;
                        row = new byte[header.RowLength];
                        hasTick = false;
                    }
                    int selected = 0;
                    for (int i = 1; i < header.BufferCount; i++)
                    {
                        if (unchecked(header.Ticks[i] - header.Ticks[selected]) > 0) selected = i;
                    }
                    int tick = header.Ticks[selected];
                    int offset = header.Offsets[selected];
                    view.ReadArray(offset, row, 0, row.Length);
                    Header after = ReadHeader();
                    if ((after.Status & 1) == 0) return Unavailable("Disconnected", now, true);
                    if (!SameLayout(header, after) || header.SessionUpdate != after.SessionUpdate)
                    {
                        canRetain = false;
                        continue;
                    }
                    if (after.Ticks[selected] != tick || after.Offsets[selected] != offset) continue;
                    if (hasTick && tick == lastTick)
                    {
                        if (now - lastAdvance >= 2000) return Unavailable("Stale", now, false);
                        if (snapshot != null)
                        {
                            status = "Connected";
                            return snapshot;
                        }
                    }
                    var current = new Dictionary<string, object>(variables.Length + 2, StringComparer.Ordinal);
                    foreach (Variable variable in variables) current.Add(variable.Name, Decode(variable, row));
                    // The buffer tick also exists as TickCount in SimHub's iRacing adapter.
                    current["TickCount"] = tick;
                    if (!current.ContainsKey("SessionTick")) current["SessionTick"] = tick;
                    snapshot = current;
                    hasConnected = true;
                    lastTick = tick;
                    hasTick = true;
                    lastAdvance = now;
                    status = "Connected";
                    return snapshot;
                }
                if (canRetain && now - lastAdvance < 2000)
                {
                    status = "Updating";
                    return snapshot;
                }
                return Unavailable("Updating", now, false);
            }
            catch (FileNotFoundException) { return Unavailable("Unavailable", now, true); }
            catch (UnauthorizedAccessException) { return Unavailable("Unavailable", now, true); }
            catch (System.Security.SecurityException) { return Unavailable("Unavailable", now, true); }
            catch (IOException) { return Unavailable("Unavailable", now, true); }
            catch (ArgumentException) { return Unavailable("Invalid data", now, true); }
            catch (InvalidDataException) { return Unavailable("Invalid data", now, true); }
            catch (ObjectDisposedException) { return Unavailable("Unavailable", now, true); }
        }
    }

    private Dictionary<string, object> Unavailable(string reason, long now, bool close)
    {
        snapshot = null;
        status = reason == "Unavailable" && hasConnected ? "Disconnected" : reason;
        if (close)
        {
            CloseMapping();
            nextRead = now + 500;
        }
        return null;
    }

    private Header ReadHeader()
    {
        if (view.Capacity < HeaderSize) throw new InvalidDataException();
        var header = new Header();
        header.Version = view.ReadInt32(0);
        header.Status = view.ReadInt32(4);
        header.SessionUpdate = view.ReadInt32(12);
        header.VariableCount = view.ReadInt32(24);
        header.VariableOffset = view.ReadInt32(28);
        header.BufferCount = view.ReadInt32(32);
        header.RowLength = view.ReadInt32(36);
        header.Ticks = new int[4];
        header.Offsets = new int[4];
        for (int i = 0; i < 4; i++)
        {
            header.Ticks[i] = view.ReadInt32(48 + i * 16);
            header.Offsets[i] = view.ReadInt32(52 + i * 16);
        }
        return header;
    }

    private void ValidateHeader(Header header)
    {
        if (header.Version < 1 || header.Version > 2 || header.VariableCount < 1 || header.VariableCount > MaximumVariables ||
            header.BufferCount < 1 || header.BufferCount > 4 || header.RowLength < 1 || header.RowLength > MaximumRowBytes)
            throw new InvalidDataException();
        ValidateRange(header.VariableOffset, (long)header.VariableCount * VariableHeaderSize);
        for (int i = 0; i < header.BufferCount; i++) ValidateRange(header.Offsets[i], header.RowLength);
    }

    private void ValidateRange(int offset, long length)
    {
        if (offset < HeaderSize || length < 1 || offset > view.Capacity - length) throw new InvalidDataException();
    }

    private Variable[] ReadVariables(Header header)
    {
        var data = new byte[header.VariableCount * VariableHeaderSize];
        view.ReadArray(header.VariableOffset, data, 0, data.Length);
        var result = new Variable[header.VariableCount];
        var names = new HashSet<string>(StringComparer.Ordinal);
        long decodedBytes = 0;
        int[] sizes = { 1, 1, 4, 4, 4, 8 };
        for (int i = 0; i < result.Length; i++)
        {
            int descriptor = i * VariableHeaderSize;
            int type = BitConverter.ToInt32(data, descriptor);
            int offset = BitConverter.ToInt32(data, descriptor + 4);
            int count = BitConverter.ToInt32(data, descriptor + 8);
            if (type < 0 || type >= sizes.Length || count < 1 || count > MaximumElements || offset < 0)
                throw new InvalidDataException();
            long length = (long)count * sizes[type];
            decodedBytes += length;
            if (offset > header.RowLength - length || decodedBytes > MaximumRowBytes) throw new InvalidDataException();
            int nameLength = 0;
            while (nameLength < 32 && data[descriptor + 16 + nameLength] != 0) nameLength++;
            if (nameLength == 0 || nameLength == 32) throw new InvalidDataException();
            string name = Encoding.ASCII.GetString(data, descriptor + 16, nameLength);
            if (!names.Add(name)) throw new InvalidDataException();
            result[i] = new Variable { Name = name, Type = type, Offset = offset, Count = count, Bytes = (int)length };
        }
        return result;
    }

    private static object Decode(Variable variable, byte[] data)
    {
        int offset = variable.Offset;
        if (variable.Type == 0)
        {
            int length = 0;
            while (length < variable.Count && data[offset + length] != 0) length++;
            return Encoding.UTF8.GetString(data, offset, length);
        }
        if (variable.Count == 1)
        {
            switch (variable.Type)
            {
                case 1: return data[offset] != 0;
                case 2: case 3: return BitConverter.ToInt32(data, offset);
                case 4: return BitConverter.ToSingle(data, offset);
                case 5: return BitConverter.ToDouble(data, offset);
            }
        }
        Array values;
        switch (variable.Type)
        {
            case 1:
                var booleans = new bool[variable.Count];
                for (int i = 0; i < booleans.Length; i++) booleans[i] = data[offset + i] != 0;
                return booleans;
            case 2: case 3: values = new int[variable.Count]; break;
            case 4: values = new float[variable.Count]; break;
            case 5: values = new double[variable.Count]; break;
            default: throw new InvalidDataException();
        }
        Buffer.BlockCopy(data, offset, values, 0, variable.Bytes);
        return values;
    }

    private static bool SameLayout(Header left, Header right)
    {
        return left.Version == right.Version && left.VariableCount == right.VariableCount && left.VariableOffset == right.VariableOffset &&
            left.BufferCount == right.BufferCount && left.RowLength == right.RowLength;
    }

    private void CloseMapping()
    {
        if (view != null) view.Dispose();
        if (mapping != null) mapping.Dispose();
        view = null;
        mapping = null;
        variables = null;
        row = null;
        hasTick = false;
    }

    public void Dispose()
    {
        lock (gate)
        {
            disposed = true;
            snapshot = null;
            jsonSnapshot = null;
            json = null;
            status = "Stopped";
            CloseMapping();
        }
    }

    private struct Header
    {
        internal int Version, Status, SessionUpdate, VariableCount, VariableOffset, BufferCount, RowLength;
        internal int[] Ticks, Offsets;
    }

    private sealed class Variable
    {
        internal string Name;
        internal int Type, Offset, Count, Bytes;
    }
}
