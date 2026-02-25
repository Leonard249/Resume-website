# deploy.ps1
$RPI_IP = "192.168.0.23" 

Write-Host "🚀 Step 1: Building React Project..." -ForegroundColor Cyan
pnpm run build

if ($LASTEXITCODE -ne 0) { 
    Write-Host "❌ Build failed. Deployment aborted." -ForegroundColor Red
    exit 
}

Write-Host "📦 Step 2: Transferring files to Pi..." -ForegroundColor Cyan
scp -r .\dist leonard@$RPI_IP:~/

Write-Host "📂 Step 3: Updating Nginx web root..." -ForegroundColor Cyan
ssh leonard@$RPI_IP "sudo rm -rf /var/www/html/* && sudo cp -r ~/dist/* /var/www/html/"

Write-Host "✅ Done! Visit leonardongportfolio.com" -ForegroundColor Green