Add-Type -AssemblyName System.Drawing

$srcDir = "C:\Users\saran\.gemini\antigravity-ide\brain\03eb583b-a2a4-4b7f-9199-fa389aafd002\.user_uploaded"
$outDir = "d:\project stages\Education\public\gallery"

if (!(Test-Path $outDir)) {
    New-Item -ItemType Directory -Force -Path $outDir | Out-Null
}

$heroFile = Join-Path $srcDir "media_1790854025341.png"
$gridFile = Join-Path $srcDir "media_1790854049691.png"

$heroImg = [System.Drawing.Bitmap]::FromFile($heroFile)
Write-Host "Hero Image: $($heroImg.Width) x $($heroImg.Height)"
$heroImg.Dispose()

$gridImg = [System.Drawing.Bitmap]::FromFile($gridFile)
Write-Host "Grid Image: $($gridImg.Width) x $($gridImg.Height)"
$gridImg.Dispose()
