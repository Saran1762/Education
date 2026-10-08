Add-Type -AssemblyName System.Drawing

$srcPath = "d:\project stages\Education\public\news\news-hero.png"
$destPath = "d:\project stages\Education\public\news\hero-students.png"

$src = [System.Drawing.Bitmap]::FromFile($srcPath)
# Crop the students portion (x from 150 to end, full height)
$rect = New-Object System.Drawing.Rectangle(140, 0, ($src.Width - 140), $src.Height)
$bmp = $src.Clone($rect, $src.PixelFormat)
$bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$src.Dispose()
Write-Host "Created hero-students.png successfully"
