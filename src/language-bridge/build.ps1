param(
    [Parameter(Mandatory = $true)]
    [string]$SimHubDir
)
$ErrorActionPreference = 'Stop'
$runtimeDir = (Resolve-Path -LiteralPath $SimHubDir).Path
$compiler = Join-Path $env:WINDIR 'Microsoft.NET\Framework64\v4.0.30319\csc.exe'
$pluginReference = Join-Path $runtimeDir 'SimHub.Plugins.dll'
$localizationReference = Join-Path $runtimeDir 'WoteverLocalization.dll'
foreach ($requiredFile in @($compiler, $pluginReference, $localizationReference)) {
    if (-not (Test-Path -LiteralPath $requiredFile -PathType Leaf)) {
        throw "Required local build dependency is missing: $requiredFile"
    }
}
$binaryDir = Join-Path $PSScriptRoot 'bin'
New-Item -ItemType Directory -Path $binaryDir -Force | Out-Null
$plugin = Join-Path $binaryDir 'Apex27LanguagePlugin.dll'
$source = Join-Path $PSScriptRoot 'Apex27LanguagePlugin.cs'
& $compiler /nologo /target:library /optimize+ "/out:$plugin" "/reference:$pluginReference" "/reference:$localizationReference" $source
if ($LASTEXITCODE -ne 0) { throw "Language bridge compilation failed: $LASTEXITCODE" }
Write-Output "Built $plugin (not installed)"
