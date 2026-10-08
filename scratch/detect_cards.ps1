Add-Type -AssemblyName System.Drawing

$srcDir = "C:\Users\saran\.gemini\antigravity-ide\brain\03eb583b-a2a4-4b7f-9199-fa389aafd002\.user_uploaded"
$gridFile = Join-Path $srcDir "media_1790854049691.png"
$bmp = [System.Drawing.Bitmap]::FromFile($gridFile)

Write-Host "Width: $($bmp.Width), Height: $($bmp.Height)"

# Find horizontal projections of non-white pixels
$rowHasContent = New-Object bool[] $bmp.Height
for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.R -lt 250 -or $c.G -lt 250 -or $c.B -lt 250) {
            $rowHasContent[$y] = $true
            break
        }
    }
}

# Find vertical spans for the 2 rows
$rowSpans = @()
$inSpan = $false
$startY = 0
for ($y = 0; $y -lt $bmp.Height; $y++) {
    if ($rowHasContent[$y] -and !$inSpan) {
        $inSpan = $true
        $startY = $y
    } elseif (!$rowHasContent[$y] -and $inSpan) {
        $inSpan = $false
        $rowSpans += ,@($startY, ($y - 1))
    }
}
if ($inSpan) {
    $rowSpans += ,@($startY, ($bmp.Height - 1))
}

Write-Host "Detected $($rowSpans.Count) rows:"
foreach ($r in $rowSpans) {
    Write-Host "  Row Y: $($r[0]) to $($r[1]) (height: $($r[1] - $r[0] + 1))"
}

# Now for each row, find the 4 card horizontal spans
$rowIdx = 0
$cards = @()
foreach ($r in $rowSpans) {
    $y1 = $r[0]
    $y2 = $r[1]
    
    $colHasContent = New-Object bool[] $bmp.Width
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        for ($y = $y1; $y -le $y2; $y++) {
            $c = $bmp.GetPixel($x, $y)
            if ($c.R -lt 250 -or $c.G -lt 250 -or $c.B -lt 250) {
                $colHasContent[$x] = $true
                break
            }
        }
    }
    
    $colSpans = @()
    $inCol = $false
    $startX = 0
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        if ($colHasContent[$x] -and !$inCol) {
            $inCol = $true
            $startX = $x
        } elseif (!$colHasContent[$x] -and $inCol) {
            $inCol = $false
            $colSpans += ,@($startX, ($x - 1))
        }
    }
    if ($inCol) {
        $colSpans += ,@($startX, ($bmp.Width - 1))
    }
    
    Write-Host "Row $rowIdx has $($colSpans.Count) cards:"
    $colIdx = 0
    foreach ($c in $colSpans) {
        Write-Host "  Card: X=$($c[0]) to $($c[1]) (width: $($c[1] - $c[0] + 1))"
        $cards += @{
            row = $rowIdx
            col = $colIdx
            x = $c[0]
            y = $y1
            w = ($c[1] - $c[0] + 1)
            h = ($y2 - $y1 + 1)
        }
        $colIdx++
    }
    $rowIdx++
}

$bmp.Dispose()
