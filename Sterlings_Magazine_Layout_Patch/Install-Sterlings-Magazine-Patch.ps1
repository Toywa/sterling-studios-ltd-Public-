param(
  [string]$ProjectRoot = "."
)

$ErrorActionPreference = "Stop"

$Root = (Resolve-Path $ProjectRoot).Path
$Stamp = Get-Date -Format "yyyyMMdd-HHmmss"
$Backup = Join-Path $Root "sterlings-backup-$Stamp"
$PatchRoot = Join-Path $PSScriptRoot "patch"

Write-Host ""
Write-Host "Sterlings Studio Magazine Layout Patch" -ForegroundColor Cyan
Write-Host "Project root: $Root"
Write-Host "Backup:      $Backup"
Write-Host ""

$files = @(
  "src\pages\Testimonials.jsx",
  "src\pages\About.jsx",
  "src\pages\Pricing.jsx",
  "src\pages\Process.jsx",
  "src\pages\Work.jsx"
)

New-Item -ItemType Directory -Force -Path $Backup | Out-Null

foreach ($relative in $files) {
  $existing = Join-Path $Root $relative
  if (Test-Path $existing) {
    $backupPath = Join-Path $Backup $relative
    New-Item -ItemType Directory -Force -Path (Split-Path $backupPath) | Out-Null
    Copy-Item $existing $backupPath -Force
    Write-Host "Backed up: $relative" -ForegroundColor DarkGray
  }
}

foreach ($relative in $files) {
  $source = Join-Path $PatchRoot $relative
  $dest = Join-Path $Root $relative

  if (!(Test-Path $source)) {
    throw "Patch file missing: $source"
  }

  New-Item -ItemType Directory -Force -Path (Split-Path $dest) | Out-Null
  Copy-Item $source $dest -Force
  Write-Host "Updated:   $relative" -ForegroundColor Green
}

Write-Host ""
Write-Host "Patch installed." -ForegroundColor Green
Write-Host "Next run: npm run build" -ForegroundColor Yellow
Write-Host ""
