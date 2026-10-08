Add-Type -AssemblyName System.Drawing

$srcDir = "C:\Users\saran\.gemini\antigravity-ide\brain\03eb583b-a2a4-4b7f-9199-fa389aafd002\.user_uploaded"
$outDir = "d:\project stages\Education\public\news"

if (!(Test-Path $outDir)) {
    New-Item -ItemType Directory -Force -Path $outDir | Out-Null
}

$files = @(
    "media_1790852748848.png",
    "media_1790852763315.png",
    "media_1790852780998.png",
    "media_1790852793572.png",
    "media_1790852806291.png"
)

foreach ($f in $files) {
    $fullPath = Join-Path $srcDir $f
    $img = [System.Drawing.Bitmap]::FromFile($fullPath)
    Write-Host "File $f : $($img.Width) x $($img.Height)"
    $img.Dispose()
}
