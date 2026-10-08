Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\saran\.gemini\antigravity-ide\brain\03eb583b-a2a4-4b7f-9199-fa389aafd002\.user_uploaded\media_1790854628155.png"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

$outDir = "d:\project stages\Education\public\gallery\pongal"
if (!(Test-Path $outDir)) {
    New-Item -ItemType Directory -Force -Path $outDir | Out-Null
}

# The photo grid is located roughly from Y=230 to Y=550
# Let's inspect rows by scanning Y from 220 to 560
# For each Y, check if there is non-white pixel in X from 20 to 350
$rowContent = New-Object bool[] $bmp.Height
for ($y = 220; $y -lt 560; $y++) {
    for ($x = 20; $x -lt 350; $x++) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.R -lt 245 -or $c.G -lt 245 -or $c.B -lt 245) {
            $rowContent[$y] = $true
            break
        }
    }
}

$rows = @()
$inSpan = $false
$startY = 0
for ($y = 220; $y -lt 560; $y++) {
    if ($rowContent[$y] -and !$inSpan) {
        $inSpan = $true
        $startY = $y
    } elseif (!$rowContent[$y] -and $inSpan) {
        $inSpan = $false
        if (($y - $startY) -gt 20) { # filter noise
            $rows += ,@($startY, ($y - 1))
        }
    }
}
if ($inSpan) {
    $rows += ,@($startY, 559)
}

Write-Host "Detected $($rows.Count) rows of photos:"
foreach ($r in $rows) {
    Write-Host "  Row Y: $($r[0]) to $($r[1]) (height: $($r[1] - $r[0] + 1))"
}

# Now for each row, detect the 3 columns
$photoNum = 1
foreach ($r in $rows) {
    $y1 = $r[0]
    $y2 = $r[1]
    
    $colContent = New-Object bool[] $bmp.Width
    for ($x = 10; $x -lt 360; $x++) {
        for ($y = $y1; $y -le $y2; $y++) {
            $c = $bmp.GetPixel($x, $y)
            if ($c.R -lt 245 -or $c.G -lt 245 -or $c.B -lt 245) {
                $colContent[$x] = $true
                break
            }
        }
    }
    
    $cols = @()
    $inCol = $false
    $startX = 0
    for ($x = 10; $x -lt 360; $x++) {
        if ($colContent[$x] -and !$inCol) {
            $inCol = $true
            $startX = $x
        } elseif (!$colContent[$x] -and $inCol) {
            $inCol = $false
            if (($x - $startX) -gt 30) {
                $cols += ,@($startX, ($x - 1))
            }
        }
    }
    if ($inCol) {
        $cols += ,@($startX, 359)
    }
    
    Write-Host "  Found $($cols.Count) columns in row Y=$y1..$y2"
    foreach ($col in $cols) {
        $x1 = $col[0]
        $x2 = $col[1]
        $w = $x2 - $x1 + 1
        $h = $y2 - $y1 + 1
        
        $rect = New-Object System.Drawing.Rectangle($x1, $y1, $w, $h)
        $cropped = $bmp.Clone($rect, $bmp.PixelFormat)
        $dest = Join-Path $outDir ("pongal_$photoNum.png")
        $cropped.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
        $cropped.Dispose()
        Write-Host "    Cropped pongal_$photoNum.png : X=$x1, Y=$y1, W=$w, H=$h"
        $photoNum++
    }
}

$bmp.Dispose()
Write-Host "Total photos cropped: $($photoNum - 1)"
