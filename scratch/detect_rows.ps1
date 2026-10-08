Add-Type -AssemblyName System.Drawing

$srcDir = "C:\Users\saran\.gemini\antigravity-ide\brain\03eb583b-a2a4-4b7f-9199-fa389aafd002\.user_uploaded"
$gridFile = Join-Path $srcDir "media_1790854049691.png"
$bmp = [System.Drawing.Bitmap]::FromFile($gridFile)

# Inspect Y column at X=100
for ($y = 0; $y -lt $bmp.Height; $y += 2) {
    $c = $bmp.GetPixel(100, $y)
    $isWhite = ($c.R -gt 245 -and $c.G -gt 245 -and $c.B -gt 245)
    if ($isWhite) {
        Write-Host "Y=$y is WHITE (R=$($c.R), G=$($c.G), B=$($c.B))"
    }
}

$bmp.Dispose()
