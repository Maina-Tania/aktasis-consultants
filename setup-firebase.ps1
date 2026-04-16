# Firebase Project Setup Script
# This script helps you set up and deploy your website to Firebase

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Firebase Project Setup for Aktasis" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Check Firebase login
Write-Host "Step 1: Checking Firebase login..." -ForegroundColor Yellow
firebase login:list

Write-Host ""
Write-Host "Are you logged in to the correct account? (Y/N)" -ForegroundColor Green
$loginCheck = Read-Host

if ($loginCheck -ne "Y" -and $loginCheck -ne "y") {
    Write-Host "Please run: firebase login" -ForegroundColor Red
    Write-Host "Then run this script again." -ForegroundColor Red
    exit
}

# Step 2: Check/Update Firebase project
Write-Host ""
Write-Host "Step 2: Checking Firebase project configuration..." -ForegroundColor Yellow
Write-Host ""
Write-Host "What is your Firebase project name?" -ForegroundColor Green
Write-Host "(Default: aktasis-consultancy)" -ForegroundColor Gray
$projectName = Read-Host

if ([string]::IsNullOrWhiteSpace($projectName)) {
    $projectName = "aktasis-consultancy"
}

Write-Host ""
Write-Host "Updating .firebaserc with project: $projectName" -ForegroundColor Yellow

$firebaserc = @"
{
  "projects": {
    "default": "$projectName"
  }
}
"@

$firebaserc | Out-File -FilePath ".firebaserc" -Encoding UTF8
Write-Host "✓ .firebaserc updated" -ForegroundColor Green

# Step 3: Set Firebase project
Write-Host ""
Write-Host "Step 3: Setting Firebase project..." -ForegroundColor Yellow
firebase use default

# Step 4: Install dependencies
Write-Host ""
Write-Host "Step 4: Installing dependencies..." -ForegroundColor Yellow
Write-Host "This may take a few minutes..." -ForegroundColor Gray
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ npm install failed" -ForegroundColor Red
    exit
}
Write-Host "✓ Dependencies installed" -ForegroundColor Green

# Step 5: Build project
Write-Host ""
Write-Host "Step 5: Building project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ Build failed" -ForegroundColor Red
    exit
}
Write-Host "✓ Project built successfully" -ForegroundColor Green

# Step 6: Deploy to Firebase
Write-Host ""
Write-Host "Step 6: Deploying to Firebase Hosting..." -ForegroundColor Yellow
firebase deploy --only hosting

if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ Deployment failed" -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "✓ Deployment Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host "1. Copy your Firebase Hosting URL from above" -ForegroundColor White
Write-Host "2. Follow FIREBASE_PROJECT_SETUP.md Part 4 to add custom domain" -ForegroundColor White
Write-Host "3. Configure DNS records in GoDaddy" -ForegroundColor White
Write-Host ""
Write-Host "Documentation: FIREBASE_PROJECT_SETUP.md" -ForegroundColor Cyan
Write-Host ""

# Made with Bob
