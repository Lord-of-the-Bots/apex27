using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Newtonsoft.Json;

// Stores only clean laps observed by APEX, separately from unqualified host records.
internal sealed class Apex27CleanLapStore
{
    internal sealed class Record { public double seconds; public bool estimated; }
    private readonly object gate = new object();
    private readonly string path;
    private Dictionary<string, Record> records = new Dictionary<string, Record>();
    private string json = "{}", lastOffer;
    private long revision, saved;
    private Task writer;
    private bool writing;
    public Apex27CleanLapStore(string path)
    {
        this.path = path;
        try {
            if (File.Exists(path) && new FileInfo(path).Length <= 1048576) {
                var loaded = JsonConvert.DeserializeObject<Dictionary<string, Record>>(File.ReadAllText(path));
                if (loaded != null) foreach (var pair in loaded)
                    if (records.Count < 512 && Valid(pair.Key, pair.Value)) records[pair.Key] = pair.Value;
            }
        } catch { }
        json = JsonConvert.SerializeObject(records);
    }
    private static bool Valid(string key, Record value)
    {
        return !String.IsNullOrEmpty(key) && key.Length <= 1024 && value != null &&
            !Double.IsNaN(value.seconds) && !Double.IsInfinity(value.seconds) && value.seconds > 5 && value.seconds < 86400;
    }
    public string Read(string offer)
    {
        lock (gate) {
            if (!String.IsNullOrEmpty(offer) && offer.Length <= 2048 && offer != lastOffer) {
                lastOffer = offer;
                try {
                    var data = Newtonsoft.Json.Linq.JObject.Parse(offer);
                    string key = (string)data["key"];
                    var record = new Record { seconds = (double)data["seconds"], estimated = (bool?)data["estimated"] ?? true };
                    Record previous;
                    if (Valid(key, record) && (records.TryGetValue(key, out previous) ? record.seconds < previous.seconds : records.Count < 512)) {
                        records[key] = record;
                        json = JsonConvert.SerializeObject(records);
                        revision++;
                        if (!writing) { writing = true; writer = Task.Run((Action)SavePending); }
                    }
                } catch { }
            }
            return json;
        }
    }
    private void SavePending()
    {
        while (true) {
            string content; long version;
            lock (gate) { content = json; version = revision; }
            // Disk IO never holds the lock used by display-property reads.
            try {
                Directory.CreateDirectory(Path.GetDirectoryName(path));
                string pending = path + ".pending";
                File.WriteAllText(pending, content);
                if (File.Exists(path)) File.Replace(pending, path, null);
                else File.Move(pending, path);
            } catch { lock (gate) writing = false; return; }
            lock (gate) {
                saved = version;
                if (revision == saved) { writing = false; return; }
            }
        }
    }
    public void Flush()
    {
        Task task; lock (gate) task = writer;
        if (task != null) try { task.Wait(2000); } catch { }
        bool retry; lock (gate) { retry = revision != saved && !writing; if (retry) writing = true; }
        if (retry) SavePending();
    }
}
