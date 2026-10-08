Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\saran\.gemini\antigravity-ide\brain\03eb583b-a2a4-4b7f-9199-fa389aafd002\.user_uploaded\media_1790855142727.png"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)
Write-Host "Contact Main Image: $($bmp.Width) x $($bmp.Height)"
$bmp.Dispose()
