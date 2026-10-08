Add-Type -AssemblyName System.Drawing

$srcDir = "C:\Users\saran\.gemini\antigravity-ide\brain\03eb583b-a2a4-4b7f-9199-fa389aafd002\.user_uploaded"
$outDir = "d:\project stages\Education\public\news"

if (!(Test-Path $outDir)) {
    New-Item -ItemType Directory -Force -Path $outDir | Out-Null
}

function Crop-Image {
    param($srcFile, $destFile, [int]$x, [int]$y, [int]$w, [int]$h)
    $srcPath = Join-Path $srcDir $srcFile
    $destPath = Join-Path $outDir $destFile
    $src = [System.Drawing.Bitmap]::FromFile($srcPath)
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $bmp = $src.Clone($rect, $src.PixelFormat)
    $bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    $src.Dispose()
    Write-Host ("Cropped " + $destFile + " from " + $srcFile + " : " + $w + "x" + $h)
}

# Copy full hero banner
Copy-Item (Join-Path $srcDir "media_1790852748848.png") (Join-Path $outDir "news-hero.png") -Force
Write-Host "Copied news-hero.png"

# Inspect the 4 images to find where the non-white card boundaries are
$articles = @(
    @{ file="media_1790852763315.png"; name="art-craft" },
    @{ file="media_1790852780998.png"; name="pongal" },
    @{ file="media_1790852793572.png"; name="oer-seminar" },
    @{ file="media_1790852806291.png"; name="maths-day" }
)

foreach ($item in $articles) {
    $srcPath = Join-Path $srcDir $item.file
    $bmp = [System.Drawing.Bitmap]::FromFile($srcPath)
    Write-Host ("`nAnalyzing " + $item.file + " (" + $bmp.Width + "x" + $bmp.Height + ")")
    
    # Let's find the bounding box of non-white pixels on the left side (x < bmp.Width * 0.45)
    $minX = 9999; $minY = 9999; $maxX = 0; $maxY = 0;
    for ($y = 0; $y -lt $bmp.Height; $y++) {
        for ($x = 0; $x -lt ($bmp.Width * 0.45); $x++) {
            $c = $bmp.GetPixel($x, $y)
            # Check if not pure white or near white (e.g. background is #ffffff)
            if ($c.R -lt 250 -or $c.G -lt 250 -or $c.B -lt 250) {
                if ($x -lt $minX) { $minX = $x }
                if ($y -lt $minY) { $minY = $y }
                if ($x -gt $maxX) { $maxX = $x }
                if ($y -gt $maxY) { $maxY = $y }
            }
        }
    }
    Write-Host ("Left card bounding box: X=" + $minX + ", Y=" + $minY + ", W=" + ($maxX - $minX + 1) + ", H=" + ($maxY - $minY + 1))
    $bmp.Dispose()
    
    # Now let's crop with this exact bounding box!
    $w = $maxX - $minX + 1
    $h = $maxY - $minY + 1
    Crop-Image -srcFile $item.file -destFile ($item.name + ".png") -x $minX -y $minY -w $w -h $h
}
