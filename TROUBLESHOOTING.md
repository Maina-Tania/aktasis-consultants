# Troubleshooting Guide for www.aktasis.com

## Current Status
- ✅ Firebase Hosting URL (aktasis-consultancy.web.app) - **Working**
- ✅ Apex domain (aktasis.com) - **Working**
- ⚠️ WWW subdomain (www.aktasis.com) - **Connection Timeout**

## DNS Verification
Both domains are correctly configured:
- `aktasis.com` → 23.235.199.147 (Firebase IP)
- `www.aktasis.com` → aktasis-consultancy.web.app → 23.235.199.147

## Issue Analysis
The ERR_CONNECTION_TIMED_OUT error for www.aktasis.com is likely caused by:

1. **Browser Cache**: Your browser cached the old redirect configuration
2. **DNS Cache**: Your local DNS resolver cached old records
3. **SSL Certificate Propagation**: Firebase SSL certificates can take time to propagate globally

## Solutions to Try (In Order)

### Solution 1: Clear Browser Cache and DNS Cache
**Windows PowerShell (Run as Administrator):**
```powershell
# Clear DNS cache
ipconfig /flushdns

# Clear browser cache in Chrome/Edge
# Press Ctrl+Shift+Delete, select "Cached images and files", then Clear data
```

**After clearing cache:**
1. Close all browser windows completely
2. Open a new incognito/private window
3. Try accessing https://www.aktasis.com

### Solution 2: Test with Different Tools
```powershell
# Test with curl (if available)
curl -I https://www.aktasis.com

# Test DNS propagation globally
# Visit: https://www.whatsmydns.net/
# Enter: www.aktasis.com
# Type: CNAME
```

### Solution 3: Wait for SSL Certificate Propagation
Firebase SSL certificates can take up to 24-48 hours to fully propagate. Since both domains show "Connected" in Firebase Console, the certificates are provisioned but may still be propagating.

**Check SSL Certificate:**
```powershell
# Using OpenSSL (if installed)
openssl s_client -connect www.aktasis.com:443 -servername www.aktasis.com

# Or visit in browser and check certificate details
```

### Solution 4: Verify GoDaddy DNS Records
Log into GoDaddy and verify these records exist:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 151.101.1.195 | 1 Hour |
| A | @ | 151.101.65.195 | 1 Hour |
| CNAME | www | aktasis-consultancy.web.app | 1 Hour |
| TXT | @ | firebase=<verification-code> | 1 Hour |

**Important:** Ensure there are NO conflicting records (old A or CNAME records for www).

### Solution 5: Test from Different Network
Try accessing www.aktasis.com from:
- Mobile data (different network)
- Different WiFi network
- VPN connection
- Different device

This helps determine if it's a local cache issue or a broader problem.

### Solution 6: Force HTTPS
Try accessing with explicit HTTPS:
```
https://www.aktasis.com
```

Some browsers may try HTTP first, which could cause issues.

## Expected Behavior
Once fully propagated:
- `http://aktasis.com` → redirects to `https://aktasis.com`
- `https://aktasis.com` → loads website
- `http://www.aktasis.com` → redirects to `https://www.aktasis.com`
- `https://www.aktasis.com` → loads website
- `https://aktasis-consultancy.web.app` → loads website

## Verification Commands

### Check DNS Resolution
```powershell
# Check CNAME for www
nslookup -type=CNAME www.aktasis.com

# Check A records for apex
nslookup -type=A aktasis.com

# Check TXT record
nslookup -type=TXT aktasis.com
```

### Check HTTP Response
```powershell
# Using PowerShell
Invoke-WebRequest -Uri "https://www.aktasis.com" -Method Head
```

## Timeline
- **Immediate**: Firebase hosting URL working
- **0-2 hours**: DNS changes propagate (usually)
- **2-24 hours**: SSL certificates fully propagate
- **24-48 hours**: Maximum time for global propagation

## Current Configuration Files

### firebase.json
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [...]
  }
}
```

**Note:** Redirects have been removed. Firebase automatically handles:
- HTTP → HTTPS redirects
- Apex domain can be accessed directly (no forced redirect to www)

## If Problem Persists After 48 Hours

1. **Check Firebase Console:**
   - Go to Hosting section
   - Verify both domains show "Connected" status
   - Check for any error messages

2. **Contact Firebase Support:**
   - Provide domain names
   - Mention SSL certificate status
   - Include DNS verification results

3. **Verify GoDaddy Configuration:**
   - Ensure domain is not expired
   - Check for any domain locks or holds
   - Verify nameservers are correct

## Quick Test Script
Save this as `test-domains.ps1` and run in PowerShell:

```powershell
Write-Host "Testing aktasis.com domains..." -ForegroundColor Cyan

Write-Host "`nDNS Resolution:" -ForegroundColor Yellow
nslookup aktasis.com
nslookup www.aktasis.com

Write-Host "`nTesting HTTP Access:" -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "https://aktasis.com" -Method Head -TimeoutSec 10
    Write-Host "aktasis.com: $($response.StatusCode) - OK" -ForegroundColor Green
} catch {
    Write-Host "aktasis.com: FAILED - $($_.Exception.Message)" -ForegroundColor Red
}

try {
    $response = Invoke-WebRequest -Uri "https://www.aktasis.com" -Method Head -TimeoutSec 10
    Write-Host "www.aktasis.com: $($response.StatusCode) - OK" -ForegroundColor Green
} catch {
    Write-Host "www.aktasis.com: FAILED - $($_.Exception.Message)" -ForegroundColor Red
}

try {
    $response = Invoke-WebRequest -Uri "https://aktasis-consultancy.web.app" -Method Head -TimeoutSec 10
    Write-Host "aktasis-consultancy.web.app: $($response.StatusCode) - OK" -ForegroundColor Green
} catch {
    Write-Host "aktasis-consultancy.web.app: FAILED - $($_.Exception.Message)" -ForegroundColor Red
}
```

## Most Likely Solution
Based on the symptoms (DNS resolving correctly, Firebase shows "Connected", but connection times out), this is **almost certainly a local cache issue**.

**Recommended immediate action:**
1. Clear DNS cache: `ipconfig /flushdns`
2. Clear browser cache completely
3. Restart browser
4. Try in incognito mode
5. If still failing, wait 1-2 hours for SSL propagation

The fact that aktasis.com works but www.aktasis.com doesn't, despite both having correct DNS and Firebase showing "Connected", strongly suggests cached redirect rules or SSL certificate propagation delay.