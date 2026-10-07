using System;
using SimHub.Plugins;
using WoteverLocalization;

// Optional read-only bridge. No game/device control, timers, network, settings,
// or file access. SimHub calls the delegate whenever its property is evaluated.
[PluginName("APEX 27 language bridge")]
[PluginAuthor("Lord-of-the-Bots")]
[PluginDescription("Exposes the selected SimHub interface language for APEX 27 automatic translation.")]
public sealed class Apex27LanguagePlugin : IPlugin
{
    public PluginManager PluginManager { get; set; }

    public void Init(PluginManager pluginManager)
    {
        PluginManager = pluginManager;
        pluginManager.AttachDelegate("Code", GetType(), new Func<string>(ReadCode));
    }

    public void End(PluginManager pluginManager)
    {
        // No event subscription or background work to release.
        PluginManager = null;
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
