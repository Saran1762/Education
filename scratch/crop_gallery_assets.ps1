Add-Type -AssemblyName System.Drawing

$srcDir = "C:\Users\saran\.gemini\antigravity-ide\brain\03eb583b-a2a4-4b7f-9199-fa389aafd002\.user_uploaded"
$outDir = "d:\project stages\Education\public\gallery"

if (!(Test-Path $outDir)) {
    New-Item -ItemType Directory -Force -Path $outDir | Out-Null
}

function Crop-Rect {
    param($srcPath, $destPath, [int]$x, [int]$y, [int]$w, [int]$h)
    $src = [System.Drawing.Bitmap]::FromFile($srcPath)
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $bmp = $src.Clone($rect, $src.PixelFormat)
    $bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    $src.Dispose()
    Write-Host ("Saved " + $destPath + " (" + $w + "x" + $h + ")")
}

# 1. Hero assets
$heroSrc = Join-Path $srcDir "media_1790854025341.png"
Copy-Item $heroSrc (Join-Path $outDir "gallery-hero.png") -Force
Write-Host "Copied gallery-hero.png"

# Crop right half student for crisp HTML overlay
Crop-Rect -srcPath $heroSrc -destPath (Join-Path $outDir "hero-microscope.png") -x 140 -y 0 -w (967 - 140) -h 467

# 2. Grid cards (206 x 147)
$gridSrc = Join-Path $srcDir "media_1790854049691.png"

$items = @(
    @{ name="pongal-celebration.png"; x=49;  y=54;  w=206; h=147 },
    @{ name="ece-lab.png";            x=268; y=54;  w=206; h=147 },
    @{ name="polytechnic-lab.png";    x=486; y=54;  w=206; h=147 },
    @{ name="medical-lab.png";        x=705; y=54;  w=206; h=147 },
    @{ name="health-inspection.png";  x=49;  y=214; w=206; h=147 },
    @{ name="events.png";             x=268; y=214; w=206; h=147 },
    @{ name="agriculture-campus.png"; x=486; y=214; w=206; h=147 },
    @{ name="law-campus.png";         x=705; y=214; w=206; h=147 }
)

foreach ($item in $items) {
    $dest = Join-Path $outDir $item.name
    Crop-Rect -srcPath $gridSrc -destPath $dest -x $item.x -y $item.y -w $item.w -h $item.h
}

Write-Host "All gallery assets cropped successfully!"
