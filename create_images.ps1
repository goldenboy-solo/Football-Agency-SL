# PowerShell script to create placeholder images
$imagePath = "assets\images"

# Ensure directory exists
if (-not (Test-Path $imagePath)) {
    New-Item -ItemType Directory -Path $imagePath -Force
}

# Function to create a simple placeholder image
function Create-PlaceholderImage {
    param(
        [string]$FilePath,
        [int]$Width,
        [int]$Height,
        [string]$Color,
        [string]$Text
    )
    
    # Create a bitmap
    $bitmap = New-Object System.Drawing.Bitmap($Width, $Height)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    
    # Parse color
    $colorObj = [System.Drawing.ColorTranslator]::FromHtml($Color)
    
    # Fill background
    $brush = New-Object System.Drawing.SolidBrush($colorObj)
    $graphics.FillRectangle($brush, 0, 0, $Width, $Height)
    
    # Draw text
    $fontSize = [Math]::Min($Width, $Height) / 8
    $font = New-Object System.Drawing.Font("Arial", $fontSize, [System.Drawing.FontStyle]::Bold)
    $textBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $stringFormat = New-Object System.Drawing.StringFormat
    $stringFormat.Alignment = [System.Drawing.StringAlignment]::Center
    $stringFormat.LineAlignment = [System.Drawing.StringAlignment]::Center
    
    $graphics.DrawString($Text, $font, $textBrush, $Width / 2, $Height / 2, $stringFormat)
    
    # Save image
    $bitmap.Save($FilePath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    
    # Cleanup
    $graphics.Dispose()
    $bitmap.Dispose()
    $brush.Dispose()
    $textBrush.Dispose()
    $font.Dispose()
    
    Write-Host "Created: $FilePath"
}

# Add System.Drawing assembly
Add-Type -AssemblyName System.Drawing

# Create placeholder images
Create-PlaceholderImage -FilePath "$imagePath\hero-football.jpg" -Width 500 -Height 300 -Color "#1a1a2e" -Text "Hero Image"
Create-PlaceholderImage -FilePath "$imagePath\latest-news.jpg" -Width 300 -Height 200 -Color "#16213e" -Text "Latest News"
Create-PlaceholderImage -FilePath "$imagePath\featured-player.jpg" -Width 300 -Height 200 -Color "#0f3460" -Text "Featured Player"
Create-PlaceholderImage -FilePath "$imagePath\upcoming-match.jpg" -Width 300 -Height 200 -Color "#533483" -Text "Upcoming Match"
Create-PlaceholderImage -FilePath "$imagePath\player1.jpg" -Width 260 -Height 200 -Color "#1EB53A" -Text "Mohamed Kallon"
Create-PlaceholderImage -FilePath "$imagePath\player2.jpg" -Width 260 -Height 200 -Color "#0072C6" -Text "Kei Kamara"
Create-PlaceholderImage -FilePath "$imagePath\player3.jpg" -Width 260 -Height 200 -Color "#1EB53A" -Text "Trevoh Chalobah"
Create-PlaceholderImage -FilePath "$imagePath\player4.jpg" -Width 260 -Height 200 -Color "#0072C6" -Text "Umaru Bangura"
Create-PlaceholderImage -FilePath "$imagePath\vision-image.jpg" -Width 300 -Height 200 -Color "#3d1e3d" -Text "Vision"

Write-Host "`nAll placeholder images created successfully!"
Write-Host "Note: Replace these with actual football-related images when available."

