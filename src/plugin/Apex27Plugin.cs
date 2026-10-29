using System;
using System.Reflection;
using SimHub.Plugins;
using WoteverLocalization;

[assembly: AssemblyVersion("1.1.14.0")]
[assembly: AssemblyFileVersion("1.1.14.0")]

// Reads simulator telemetry without sending commands. New observed clean
// records are saved to the plugin's local history outside the display thread.
[PluginName("APEX 27 bridge")]
[PluginAuthor("Lord-of-the-Bots")]
[PluginDescription("Provides APEX 27 live iRacing telemetry, map markers, clean lap records and automatic language selection.")]
public sealed class Apex27Plugin : IPlugin
{
    private Apex27IRacingTelemetry telemetry;
    private Apex27CleanLapStore cleanLaps;
    public PluginManager PluginManager { get; set; }

    public void Init(PluginManager pluginManager)
    {
        PluginManager = pluginManager;
        telemetry = new Apex27IRacingTelemetry();
        cleanLaps = new Apex27CleanLapStore(System.IO.Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "PluginsData", "APEX27", "clean-laps.json"));
        pluginManager.AttachDelegate("CleanLapRecordsJson", GetType(), new Func<string>(ReadCleanLaps));
        pluginManager.AttachDelegate("Code", GetType(), new Func<string>(ReadCode));
        pluginManager.AttachDelegate("LiveTelemetry", GetType(), new Func<object>(ReadLiveTelemetry));
        pluginManager.AttachDelegate("LiveTelemetryJson", GetType(), new Func<string>(ReadLiveTelemetryJson));
        pluginManager.AttachDelegate("LiveTelemetryStatus", GetType(), new Func<string>(ReadTelemetryStatus));
    }

    public void End(PluginManager pluginManager)
    {
        ReadCleanLaps();
        if (cleanLaps != null) cleanLaps.Flush();
        cleanLaps = null;
        if (telemetry != null) telemetry.Dispose();
        telemetry = null;
        PluginManager = null;
    }

    private string ReadCleanLaps()
    {
        var store = cleanLaps;
        if (store == null) return "{}";
        var shared = SimHub.Plugins.OutputPlugins.Dash.TemplatingCommon.NCalcEngineBase.SharedStorage;
        var offer = shared == null ? null : Convert.ToString(shared.GetOrDefault("APEX27", "clean-best-offer-v1", ""));
        return store.Read(offer);
    }

    private object ReadLiveTelemetry()
    {
        var reader = telemetry;
        return reader == null ? null : reader.Read();
    }

    private string ReadTelemetryStatus()
    {
        var reader = telemetry;
        return reader == null ? "Stopped" : reader.Status;
    }

    private string ReadLiveTelemetryJson()
    {
        var reader = telemetry;
        return reader == null ? null : reader.ReadJson();
    }

    internal static string ReadCode()
    {
        try
        {
            var provider = LocalizationProvider.Instance;
            var language = provider == null ? null : provider.CurrentLanguage;
            return language == null || String.IsNullOrWhiteSpace(language.Code) ? "" : language.Code;
        }
        catch
        {
            // An unavailable host language is unknown, not the Windows culture.
            return "";
        }
    }
}
