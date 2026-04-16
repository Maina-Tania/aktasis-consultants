# Custom Domain Setup Guide for www.aktasis.com

This guide provides step-by-step instructions to connect your custom domain **www.aktasis.com** to Firebase Hosting.

## Prerequisites

- **GoDaddy Account**: Username: `aktasis`, Password: `MarthaEr1975`
- **Firebase Project**: `aktasis-consultancy`
- **Firebase Account**: Ensure you're logged in as `tatsmaina@gmail.com`

---

## Part 1: Firebase Console Setup

### Step 1: Verify Firebase Account
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Check if you're logged in as **tatsmaina@gmail.com** (top-right corner)
3. If not, sign out and sign in with `tatsmaina@gmail.com`
4. Open the **aktasis-consultancy** project

### Step 2: Add Custom Domains in Firebase
1. In Firebase Console, navigate to **Hosting** (left sidebar)
2. Click on the **Add custom domain** button
3. Add the **apex domain** first:
   - Enter: `aktasis.com`
   - Click **Continue**
   - Firebase will provide a **TXT verification record** - **COPY THIS VALUE**
   - Keep this window open (you'll need the A records later)

4. After verifying the apex domain, add the **www subdomain**:
   - Click **Add custom domain** again
   - Enter: `www.aktasis.com`
   - Click **Continue**
   - Firebase will provide DNS records - **COPY THESE VALUES**

### Step 3: Note the DNS Records Firebase Provides

Firebase will provide these records (exact values will be shown in your console):

**For aktasis.com (apex domain):**
- **TXT Record** for verification (format: `firebase=<verification-code>`)
- **Two A Records**: 
  - `151.101.1.195`
  - `151.101.65.195`

**For www.aktasis.com:**
- **CNAME Record** pointing to: `aktasis-consultancy.web.app`

---

## Part 2: GoDaddy DNS Configuration

### Step 1: Access GoDaddy DNS Management
1. Go to [GoDaddy.com](https://www.godaddy.com/)
2. Click **Sign In** (top-right)
3. Enter credentials:
   - Username: `aktasis`
   - Password: `MarthaEr1975`
4. After login, go to **My Products**
5. Find **aktasis.com** in your domain list
6. Click the **DNS** button next to the domain (or click the three dots → **Manage DNS**)

### Step 2: Add TXT Verification Record
1. Scroll to the **DNS Records** section
2. Click **Add** (or **Add New Record**)
3. Select **TXT** from the Type dropdown
4. Configure:
   - **Name**: `@` (represents the root domain)
   - **Value**: Paste the Firebase verification code (e.g., `firebase=1234567890abcdef...`)
   - **TTL**: `1 Hour` (default is fine)
5. Click **Save**

### Step 3: Add A Records for Apex Domain
You need to add **TWO** A records pointing to Firebase's IP addresses.

**First A Record:**
1. Click **Add** (or **Add New Record**)
2. Select **A** from the Type dropdown
3. Configure:
   - **Name**: `@` (represents aktasis.com)
   - **Value**: `151.101.1.195`
   - **TTL**: `1 Hour`
4. Click **Save**

**Second A Record:**
1. Click **Add** again
2. Select **A** from the Type dropdown
3. Configure:
   - **Name**: `@`
   - **Value**: `151.101.65.195`
   - **TTL**: `1 Hour`
4. Click **Save**

### Step 4: Add CNAME Record for www Subdomain
1. Click **Add** (or **Add New Record**)
2. Select **CNAME** from the Type dropdown
3. Configure:
   - **Name**: `www`
   - **Value**: `aktasis-consultancy.web.app` (or the exact value Firebase provided)
   - **TTL**: `1 Hour`
4. Click **Save**

### Step 5: Remove Conflicting Records (If Any)
⚠️ **Important**: GoDaddy may have default records that conflict with your new ones.

1. Look for existing records with:
   - Type **A** with Name `@` pointing to GoDaddy's parking page
   - Type **CNAME** with Name `www` pointing to GoDaddy's parking page
2. **Delete** these conflicting records by clicking the trash/delete icon
3. Keep only the Firebase records you just added

### Final DNS Records Summary
After completing the above steps, your GoDaddy DNS should have:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| TXT | @ | firebase=<your-verification-code> | 1 Hour |
| A | @ | 151.101.1.195 | 1 Hour |
| A | @ | 151.101.65.195 | 1 Hour |
| CNAME | www | aktasis-consultancy.web.app | 1 Hour |

---

## Part 3: Complete Firebase Verification

### Step 1: Verify Domain Ownership
1. Return to the Firebase Console (the window you kept open)
2. After adding the TXT record in GoDaddy, click **Verify** in Firebase
3. Firebase will check for the TXT record (this may take a few minutes)
4. If verification fails, wait 10-15 minutes for DNS propagation and try again

### Step 2: Wait for SSL Certificate Provisioning
1. After verification, Firebase will automatically provision an SSL certificate
2. This process can take **24-48 hours** (usually faster, often within a few hours)
3. You'll see the status in Firebase Console:
   - **Pending**: Certificate is being provisioned
   - **Connected**: Domain is live with HTTPS

---

## Part 4: DNS Propagation & Testing

### DNS Propagation Time
- DNS changes can take **15 minutes to 48 hours** to propagate globally
- Typically, changes are visible within **1-2 hours**

### Testing Your Domain
After DNS propagation, test your domains:

1. **Check DNS Records**:
   ```bash
   nslookup aktasis.com
   nslookup www.aktasis.com
   ```

2. **Test in Browser**:
   - Visit `http://aktasis.com` → Should redirect to `https://www.aktasis.com`
   - Visit `https://aktasis.com` → Should redirect to `https://www.aktasis.com`
   - Visit `https://www.aktasis.com` → Should load your site

3. **Online DNS Checker**:
   - Use [whatsmydns.net](https://www.whatsmydns.net/) to check global DNS propagation
   - Enter `aktasis.com` and check A records
   - Enter `www.aktasis.com` and check CNAME records

---

## Troubleshooting

### Issue: "Domain verification failed"
**Solution**: 
- Wait 15-30 minutes for DNS propagation
- Verify the TXT record is correctly entered in GoDaddy (no extra spaces)
- Use `nslookup -type=TXT aktasis.com` to check if the TXT record is visible

### Issue: "www.aktasis.com not resolving"
**Solution**:
- Verify the CNAME record points to `aktasis-consultancy.web.app`
- Check for conflicting CNAME records in GoDaddy
- Wait for DNS propagation (up to 48 hours)

### Issue: "SSL certificate pending for too long"
**Solution**:
- Ensure all DNS records are correct
- Wait up to 48 hours for automatic provisioning
- If still pending after 48 hours, contact Firebase Support

### Issue: "Not redirecting to www"
**Solution**:
- Verify `firebase.json` has the correct redirect configuration (see Part 5)
- Redeploy your site: `firebase deploy --only hosting`

---

## Part 5: Firebase Configuration (Already Completed)

The `firebase.json` file has been updated with:
- HTTP to HTTPS redirect (automatic via Firebase)
- Apex domain (aktasis.com) to www subdomain redirect
- SPA routing (all routes serve index.html)
- Static asset caching headers

No additional configuration needed - the updated `firebase.json` handles all redirects automatically.

---

## Important Notes

1. **Domain Status**: Verify your domain is active and not expired in GoDaddy
2. **Firebase Account**: Always use `tatsmaina@gmail.com` for this project
3. **Canonical URL**: The site will use `https://www.aktasis.com` as the primary URL
4. **Redeploy**: After updating `firebase.json`, run `firebase deploy --only hosting`

---

## Quick Reference Commands

```bash
# Check DNS records
nslookup aktasis.com
nslookup www.aktasis.com

# Check TXT record
nslookup -type=TXT aktasis.com

# Deploy to Firebase
firebase deploy --only hosting

# Check Firebase login
firebase login:list
```

---

## Support Resources

- **Firebase Hosting Docs**: https://firebase.google.com/docs/hosting/custom-domain
- **GoDaddy DNS Help**: https://www.godaddy.com/help/manage-dns-records-680
- **DNS Propagation Checker**: https://www.whatsmydns.net/

---

**Last Updated**: 2026-04-14