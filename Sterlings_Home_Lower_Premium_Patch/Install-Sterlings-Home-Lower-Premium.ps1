param(
  [string]$ProjectRoot = "."
)

$ErrorActionPreference = "Stop"

$Root = (Resolve-Path $ProjectRoot).Path
$Source = Join-Path $PSScriptRoot "patch\src\pages\Home.jsx"
$Target = Join-Path $Root "src\pages\Home.jsx"
$Stamp = Get-Date -Format "yyyyMMdd-HHmmss"
$Backup = Join-Path $Root "src\pages\Home.jsx.backup-$Stamp"

if (!(Test-Path $Source)) {
  throw "Patch Home.jsx not found: $Source"
}

if (Test-Path $Target) {
  Copy-Item $Target $Backup -Force
  Write-Host "Backup created: $Backup" -ForegroundColor DarkGray
}

Copy-Item $Source $Target -Force

Write-Host ""
Write-Host "Sterlings homepage lower-section premium patch installed." -ForegroundColor Green
Write-Host "Top hero and positioning were preserved." -ForegroundColor Cyan
Write-Host "Run: npm run build" -ForegroundColor Yellow
Write-Host ""
