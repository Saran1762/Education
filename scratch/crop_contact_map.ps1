Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\saran\.gemini\antigravity-ide\brain\03eb583b-a2a4-4b7f-9199-fa389aafd002\.user_uploaded\media_1790855142727.png"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

$outDir = "d:\project stages\Education\public\contact"
if (!(Test-Path $outDir)) {
    New-Item -ItemType Directory -Force -Path $outDir | Out-Null
}

# Find map bounding box on right side:
# Start from X=240, Y=70
$minX = 999; $minY = 999; $maxX = 0; $maxY = 0;
for ($x = 240; $x -lt $bmp.Width; $x++) {
    for ($y = 70; $y -lt $bmp.Height; $y++) {
        $c = $bmp.GetPixel($x, $y)
        # Map pixels are colored (not pure white)
        if ($c.R -lt 250 -or $c.G -lt 250 -or $c.B -lt 250) {
            if ($x -lt $minX) { $minX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

Write-Host "Map bounding box: X=$minX, Y=$minY, W=$($maxX - $minX + 1), H=$($maxY - $minY + 1)"

$w = $maxX - $minX + 1
$h = $maxY - $minY + 1
$rect = New-Object System.Drawing.Rectangle($minX, $minY, $w, $h)
$mapBmp = $bmp.Clone($rect, $bmp.PixelFormat)
$mapBmp.Save((Join-Path $outDir "map.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$mapBmp.Dispose()
$bmp.Dispose()
Write-Host "Saved public/contact/map.png"
