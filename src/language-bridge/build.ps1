param(
    [Parameter(Mandatory = $true)]
    [string]$SimHubDir
)
$ErrorActionPreference = 'Stop'
$runtimeDir = (Resolve-Path -LiteralPath $SimHubDir).Path
$compiler = Join-Path $env:WINDIR 'Microsoft.NET\Framework64\v4.0.30319\csc.exe'
$references = @('SimHub.Plugins.dll', 'SimHub.Plugins.Dashstudio.Behaviors.Core.dll', 'WoteverLocalization.dll', 'WoteverCommon.dll', 'GameReaderCommon.dll', 'Newtonsoft.Json.dll') | ForEach-Object { Join-Path $runtimeDir $_ }
$frameworkDir = Join-Path $env:WINDIR 'Microsoft.NET\Framework64\v4.0.30319'
$references += @('WindowsBase.dll', 'PresentationCore.dll', 'PresentationFramework.dll') | ForEach-Object { Join-Path (Join-Path $frameworkDir 'WPF') $_ }
foreach ($requiredFile in @($compiler) + $references) {
    if (-not (Test-Path -LiteralPath $requiredFile -PathType Leaf)) {
        throw "Required local build dependency is missing: $requiredFile"
    }
}
$binaryDir = Join-Path $PSScriptRoot 'bin'
New-Item -ItemType Directory -Path $binaryDir -Force | Out-Null
$plugin = Join-Path $binaryDir 'Apex27LanguagePlugin.dll'
$source = Join-Path $PSScriptRoot 'Apex27LanguagePlugin.cs'
$mapSource = Join-Path $PSScriptRoot 'Apex27LiveTrackMap.cs'
$telemetrySource = Join-Path $PSScriptRoot 'Apex27IRacingTelemetry.cs'
$cleanLapSource = Join-Path $PSScriptRoot 'Apex27CleanLapStore.cs'
$referenceArgs = $references | ForEach-Object { "/reference:$_" }
& $compiler /nologo /target:library /optimize+ "/out:$plugin" $referenceArgs $source $mapSource $telemetrySource $cleanLapSource
if ($LASTEXITCODE -ne 0) { throw "Language bridge compilation failed: $LASTEXITCODE" }
Write-Output "Built $plugin (not installed)"
