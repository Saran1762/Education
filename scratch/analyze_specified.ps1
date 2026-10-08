Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\saran\.gemini\antigravity-ide\brain\03eb583b-a2a4-4b7f-9199-fa389aafd002\.user_uploaded\media_1790854628155.png"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

Write-Host "Width: $($bmp.Width), Height: $($bmp.Height)"

# Inspect vertical line down the middle of column 1 (X=50) to find the photo rows
for ($y = 150; $y -lt 580; $y++) {
    $c = $bmp.GetPixel(50, $y)
    # Check if not white
    $isWhite = ($c.R -gt 245 -and $c.G -gt 245 -and $c.B -gt 245)
    if (!$isWhite) {
        # Found content
    }
}

# Let's find horizontal boundaries of each of the 3 columns
# and vertical boundaries of each of the 4 rows in the area between y=230 and y=560
$bmp.Dispose()
