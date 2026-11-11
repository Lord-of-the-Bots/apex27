# Install APEX 27 · v1.1.18

Requires **SimHub 9.13.3 or newer** on Windows, the included bridge DLL and a working telemetry connection to the game.

This update changes the dashboards only. It uses the existing **Apex27Plugin.dll 1.1.14.0**. If that DLL is already installed, keep it, import the updated dashboard and restart SimHub. The version shown in the dashboard corner should be **v1.1.18**.

APEX 27 focuses on **iRacing**. Other games have not received the same refinement in this release cycle. Their existing integrations may work with suitable telemetry, but their current behaviour is unverified.

## Import and open

1. Open the release folder; if supplied as a ZIP, extract it first. For a dashboard-only update with DLL 1.1.14.0 already installed, skip the DLL steps below.
   Close SimHub. For an upgrade, remove the former `Apex27LanguagePlugin.dll` from beside `SimHubWPF.exe`. Copy `plugins/Apex27Plugin.dll` beside `SimHubWPF.exe`, replacing an earlier copy of that same filename if present. Do not leave both plugin DLLs installed. Restart SimHub and enable **APEX 27 bridge**. Install this DLL before importing a dashboard: it supplies the live map component.
2. Open either dashboard file and confirm the import in SimHub:
   - `APEX 27.simhubdash` — companion layout for wheel or external RPM, gear and flag displays. Includes a large track map, wide pedal graphs and compact fuel information; omits RPM, gear and the general flag panel in every session mode.
   - `APEX 27 Full.simhubdash` — for rigs that need driving instruments on screen, with an analogue tachometer, speed, gear and top-row flags.
3. Open the dashboard on the intended display. The layout is **1920 × 1080, 16:9**.
4. Choose a language in **Language** and adjust the dashboard settings.
5. Start the game and enter a driving session. Panels follow the session type and telemetry supplied by the game.

Both variants retain automatic session views, lap prediction, traffic, the field ribbon, ratings and individual opponent flags when available. You may install both variants. Each keeps its own settings. Reimporting a dashboard file updates the matching dashboard. After an update, close and reopen the running dashboard to reload its scripts.

## What the required plugin does

`Apex27Plugin.dll` has four roles:

- Read current iRacing telemetry from its local shared-memory feed for the dashboard's live race data.
- Supply the map component, including current position labels and marker locations.
- Save observed clean lap records separately for each car and track configuration.
- Read SimHub's interface language for **Auto — SimHub**.

It sends no driving or pit commands to the simulator. The plugin is required by both dashboard variants even when language selection is manual or another game is used. Only automatic language selection is optional.

The former name, `Apex27LanguagePlugin.dll`, described its original translation role. Since version 1.1.14 the plugin uses `Apex27Plugin.dll` and appears as **APEX 27 bridge** in SimHub. When upgrading from a version before 1.1.14, update the DLL and dashboard together: older dashboard packages reference the old assembly and property names. Do not merely rename the old DLL. Existing clean records in `PluginsData/APEX27/clean-laps.json` are retained. Dashboard and DLL versions are independent: dashboard 1.1.18 uses DLL 1.1.14.0.

1. Close SimHub.
2. Remove `Apex27LanguagePlugin.dll` if present, then copy only `Apex27Plugin.dll` from the release's `plugins` folder into the SimHub installation folder, beside `SimHubWPF.exe`. Do not copy the entire `plugins` folder.
3. Restart SimHub and enable **APEX 27 bridge** in SimHub's plugin settings.
4. Import the updated dashboard. Select **Auto — SimHub** in its **Language** setting if you want automatic language selection; otherwise choose a language manually.

Auto uses English if the bridge is unavailable or SimHub's language is not included. Manual selection always takes priority. The standard and Full dashboards have separate language settings.

## Display settings

- **Traffic:** eleven compact rows, seven rows or five rows with larger text. The bottom field ribbon remains in place.
- **Practice / warmup panel:** driver table with compact lap timing, or the detailed lap and sector timing view.
- **Palette:** standard or dim colours.
- **Lower right:** pedal history and ABS, or **Car / tyres** information.

Pedal colours are green for throttle, red for brake and blue for clutch. The ABS indicator shows current activity. **ABS —** means unavailable; **ABS ≈** identifies an estimated signal.

In circuit views, both variants give pedal history an 800-pixel-wide panel below the map and fuel information. The graph uses the original 4thMonitor chart: three overlaid native SimHub traces with 400 points per channel and a scale in 20% steps. It reads SimHub’s Throttle, Brake and Clutch properties. Its time span depends on the incoming update rate. The colours follow the APEX palette; ABS remains a separate current-state indicator.

Practice and qualifying automatically replace race-focused information with lap and sector timing. Race and practice views show three separate records: **ALL-TIME BEST · CLEAN**, **SESSION · ALL LAPS**, and **SESSION · CLEAN**. The inclusive session best may come from game timing or an observed completed lap, including a lap with detected errors. In iRacing, completed session records are retained through a temporary telemetry interruption and restored when the same session resumes. A new session or a session-time rewind starts a new session history.

For iRacing, clean records require a complete continuously observed lap with no detected incident or invalidation; pit laps and interrupted observations are excluded. Clean records use this observation-based classification, not an official iRacing validity verdict. A 0x contact can invalidate a lap without increasing the incident counter. Historical SimHub times without validity evidence are not imported as clean records. Personal clean records are kept separately per car and track configuration in `PluginsData/APEX27/clean-laps.json`; the bridge saves a new record in the background. A personal record stays blank until a suitable clean completion has been observed. Replays do not update this personal history.

The main iRacing delta compares against the all-time best, using the valid game delta or a paired all-time reference and delta from SimHub. A session-best delta is not substituted when this reference is unavailable. **PREDICTED LAP** uses an available reference trace or a paired reference and delta from SimHub. It can use a record from a previous session. If these are unavailable, a valid iRacing session-best delta and its matching session-best time supply the prediction. If no usable pair exists, prediction stays blank; an absolute predicted time is not calculated by adding an iRacing delta to an unrelated record. Prediction and the all-time delta may use different references.

## Missing information

- Check the game's telemetry connection in SimHub if the dashboard stays in its waiting state.
- A track map needs geometry saved, loaded or generated by SimHub. An unknown or unsupported track can show tyre information or lap progress instead. Assetto Corsa EVO uses an available-telemetry card.
- Fuel predictions need usable consumption data. Forza shows fuel as a percentage without refuelling-volume or per-lap consumption estimates.
- Sector timing depends on the game's data. Sector deltas compare each sector with its own fastest valid sector in the current session. Live sector delta needs the matching reference trace recorded while the dashboard is open; its first-sector timer starts at the lap start. A dash is shown until that reference is available. Missing times and deltas appear as a dash.
- The field ribbon and nearby traffic need opponent data. Individual flags need participant-specific telemetry; a missing flag is left blank.
- iRacing positions in the header, driver table, map labels and field ribbon use one classification based on completed laps and current track progress. Before the race, positions fall back to the starting results when live ranks are unavailable. The grid table shows cars located on the grid, keeping their assigned grid numbers; cars still in the pits or absent from the track remain in lobby totals. After green, starters still waiting in the pits are ranked behind the active field, with their assigned grid order used within the waiting group. Once they exit, their live distance determines their position. When the leader finishes, cars still racing keep their live positions. Individual finishers retain their finish-line distance and use supplied finishing results as those become available. Cooldown movement and cars leaving the track do not renumber known finishing positions. During a reported player tow, the last observed race distance is retained and other cars can pass it. A stale supplied rank cannot override that observed order. If the dashboard first opens during a tow and has no observed distance, the supplied rank is a fallback; an exact live rank cannot be reconstructed from an unknown location. Cars which leave the world retain their last observed distance and remain in the race roster. A car ahead which retires does not immediately disappear from the classification; you still need to pass its recorded race distance. If iRacing Extra Properties is installed, its iRating estimate can be used, matched by car number. Red rows identify cars a lap ahead or approaching to lap you; blue rows identify cars a lap behind or approaching to be lapped. The colour and row contents use the same table snapshot. Lap-relative row labels use **+1 lap** for a car one lap ahead and **−1 lap** for a car one lap behind, with **laps** for larger differences. After your finish, colours and lap differences use completed laps from the current race results: cars a lap ahead are red, cars a lap behind are blue, and cars on the same lap use their normal colours. A recorded finish crossing supplies a fallback while results arrive; cooldown movement never changes the comparison. Unknown final lap counts remain uncoloured. Opponents still racing are compared once they finish or the session enters cooldown. While you are still racing, live lapping colours remain active even if the leader has finished. Other classes remain dimmed. The ribbon keeps every received track location at its actual horizontal coordinate. The ribbon uses numbered circles on a single rail. Opponents are drawn from last to first place, and your larger blue marker is drawn on top.
- Nearby iRacing intervals use the SDK's estimated time at each car's track location. Valid pit coordinates remain usable during tow, keeping the nearby-traffic view. When the player has no valid track location, the table shows race order instead. Missing race timing can use an approximate race-distance gap, marked **≈**, only when both distances and a reference lap are available. This estimate is not the game's Relative interval. Cross-class intervals and the fallback calculation are marked **≈**. In multiclass races, the fixed outer rows show the nearest classified rivals in your class, with race gaps; the inner rows show physical traffic intervals.
- ΔiR estimates the change for the current class finishing order. It is hidden when the supplied official/unofficial flags do not identify an official race, or the class has only one entrant. This relies on the session flags; the dashboard does not independently determine the minimum field size of each series. This also applies to estimates supplied by iRacing Extra Properties. Non-starters and disconnected cars remain in the class roster. Replays use their recorded running order when participant ratings are available. The built-in calculation does not calculate team-race splits. It is not an official result or an SR prediction.
- iRacing field size and mean iRating use all entries in the SDK roster, including cars in the garage, pits and entries no longer on track. Spectators and the pace car are excluded. Mean iRating is hidden when participant ratings are incomplete.
- The footer uses a supplied countdown for the current phase. Lap-limited races show laps and an approximate time based on the leader's last lap when no timer is supplied. Gridding and formation show a supplied pre-start countdown when available. Without a supplied countdown, GRID shows **WAITING FOR START**. The native iRacing grid countdown may be unavailable through telemetry; elapsed waiting time is not used as a substitute. A recorded countdown is labelled **REPLAY**; unavailable replay timing stays blank.
- The current lap clock is hidden after leaving the car or returning to the menu; in iRacing it is also hidden during tow, replay or unavailable telemetry. While the car is on track, an explicit pause or a stopped simulation clock/tick holds the last observed lap time. On resuming, simulation time advances the clock without adding the observed pause duration. A stationary car is still timed while the simulation runs.
- Race classification and session timing continue while the session is running. The dashboard checks for current telemetry on a 16 ms cadence and builds the table from one packet, keeping its rows and rating estimates together. Table rows, map data and field ribbon refresh every 500 ms. Gap text refreshes every 100 ms for the car assigned to each cached row, without rebuilding the whole table at that rate. This is the binding cadence, not a guarantee that incoming telemetry matches the in-game display at every tenth of a second. Speed, RPM, gear and pedal bindings have no added refresh delay; their actual frame rate depends on SimHub, the incoming feed and rendering workload. A stalled or mismatched direct stream is not replaced with an older retained packet.
- After the finish, the current SDK session countdown takes priority over a retained race clock in SimHub. The remaining session time is shown in the header and footer when supplied by iRacing. Without a positive SDK countdown after the finish, the dashboard shows waiting for finishers or session end; it never falls back to laps remaining or a stale race clock.
- The ribbon shows sector boundaries and S1/S2/S3 labels at the supplied iRacing SplitTimeInfo positions, with the original overlay's optional IRacingExtraProperties sector data as a fallback. No evenly spaced sectors are invented when neither source is available. Ribbon circles stay at their track coordinates. Closely spaced cars overlap in race-position order; no artificial horizontal spacing is added. Opponent circles are 28 px and your blue circle is 33 px, matching the map markers; pit circles are amber.
- The driver table shows cars ahead with a positive unsigned gap and cars behind with a minus sign. It has one main gap field; the secondary grey interval is removed. Lap differences remain visible as signed lap counts.

[Report technical issues on GitHub](https://github.com/Lord-of-the-Bots/apex27/issues) so they can be investigated and fixed. Include the game, SimHub version, dashboard variant and steps to reproduce. Suggestions for information, layout and element sizes are welcome on GitHub, Reddit or in the comments.

[APEX 27](https://github.com/Lord-of-the-Bots/apex27)
