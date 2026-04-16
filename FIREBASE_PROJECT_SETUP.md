# Complete Firebase Project Setup & Custom Domain Guide

This guide will help you create a NEW Firebase project under your account (tatsmaina@gmail.com) and connect the custom domain www.aktasis.com.

---

## IMPORTANT: Current Situation

- **Current Firebase Project**: `aktasis-consultancy` (owned by someone else)
- **Your Firebase Account**: tatsmaina@gmail.com
- **Issue**: You don't have access to the existing project
- **Solution**: Create a NEW Firebase project under your account

---

## Part 1: Create New Firebase Project

### Step 1: Access Firebase Console
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Verify you're logged in as **tatsmaina@gmail.com** (check top-right corner)
3. If not, sign out and sign in with `tatsmaina@gmail.com`

### Step 2: Create New Project
1. Click **"Add project"** or **"Create a project"** button
2. **Project name**: Enter `aktasis-consultancy` (or `aktasis-website` if the name is taken)
3. Click **Continue**
4. **Google Analytics**: 
   - Toggle OFF if you don't need it (simpler setup)
   - Or toggle ON and select/create an Analytics account
5. Click **Create project**
6. Wait for project creation (takes 30-60 seconds)
7. Click **Continue** when ready

### Step 3: Enable Firebase Hosting
1. In your new project, click **Hosting** in the left sidebar (under "Build")
2. Click **Get started**
3. You'll see setup instructions - **keep this window open**

---

## Part 2: Update Local Project Configuration

### Step 1: Update .firebaserc File
You need to update your local project to point to the NEW Firebase project.

1. Open your project in VS Code (already open at `c:/Users/tatsm/Desktop/aktasis`)
2. Open the file `.firebaserc`
3. Update the project name to match your NEW Firebase project:

**If you named it `aktasis-consultancy`:**
```json
{
  "projects": {
    "default": "aktasis-consultancy"
  }
}
```

**If you named it something else (e.g., `aktasis-website`):**
```json
{
  "projects": {
    "default": "aktasis-website"
  }
}
```

4. Save the file

### Step 2: Verify Firebase CLI Login
Open terminal in VS Code and run:
```bash
firebase login:list
```

You should see: `Logged in as tatsmaina@gmail.com`

If not logged in, run:
```bash
firebase login
```

### Step 3: Initialize Firebase Hosting (if needed)
Run this command to ensure everything is connected:
```bash
firebase use default
```

This should show your new project name.

---

## Part 3: Build and Deploy Your Website

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Build the Project
```bash
npm run build
```

This creates the `dist` folder with your production-ready website.

### Step 3: Deploy to Firebase Hosting
```bash
firebase deploy --only hosting
```

**Expected Output:**
```
✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/aktasis-consultancy/overview
Hosting URL: https://aktasis-consultancy.web.app
```

**Copy the Hosting URL** - you'll need it for DNS configuration!

### Step 4: Test Your Deployment
1. Open the Hosting URL in your browser (e.g., `https://aktasis-consultancy.web.app`)
2. Verify your website loads correctly
3. Test navigation and all pages

---

## Part 4: Add Custom Domain in Firebase

### Step 1: Navigate to Custom Domain Settings
1. In Firebase Console, go to **Hosting** (left sidebar)
2. Click on the **"Add custom domain"** button
3. You'll see a dialog to add your domain

### Step 2: Add Apex Domain (aktasis.com)
1. In the "Add custom domain" dialog, enter: `aktasis.com`
2. Click **Continue**
3. **Ownership Verification** screen appears
4. Firebase will show a **TXT record** like this:
   ```
   Name: @
   Type: TXT
   Value: firebase=1234567890abcdefghijklmnopqrstuvwxyz
   ```
5. **COPY THIS VALUE** - you'll add it to GoDaddy
6. **Keep this window open** - don't close it yet!

### Step 3: Add TXT Record in GoDaddy
1. Open a new browser tab
2. Go to [GoDaddy.com](https://www.godaddy.com/)
3. Click **Sign In**
4. Enter credentials:
   - Username: `aktasis`
   - Password: `MarthaEr1975`
5. Go to **My Products**
6. Find **aktasis.com** and click **DNS** (or three dots → **Manage DNS**)
7. Scroll to **DNS Records** section
8. Click **Add** (or **Add New Record**)
9. Configure:
   - **Type**: Select **TXT**
   - **Name**: Enter `@`
   - **Value**: Paste the Firebase verification code (e.g., `firebase=1234567890...`)
   - **TTL**: Leave as `1 Hour` (default)
10. Click **Save**

### Step 4: Verify Domain in Firebase
1. Return to the Firebase Console window
2. Wait 2-3 minutes for DNS propagation
3. Click **Verify** button
4. If verification fails:
   - Wait another 5-10 minutes
   - Click **Verify** again
   - DNS can take up to 30 minutes to propagate

### Step 5: Add DNS Records for Apex Domain
After verification succeeds, Firebase will show DNS records to add:

**Two A Records:**
```
Name: @
Type: A
Value: 151.101.1.195

Name: @
Type: A
Value: 151.101.65.195
```

**Add these in GoDaddy:**
1. In GoDaddy DNS Management, click **Add**
2. **First A Record**:
   - Type: **A**
   - Name: `@`
   - Value: `151.101.1.195`
   - TTL: `1 Hour`
   - Click **Save**
3. Click **Add** again
4. **Second A Record**:
   - Type: **A**
   - Name: `@`
   - Value: `151.101.65.195`
   - TTL: `1 Hour`
   - Click **Save**

### Step 6: Add www Subdomain
1. In Firebase Console, click **"Add custom domain"** again
2. Enter: `www.aktasis.com`
3. Click **Continue**
4. Firebase will show a **CNAME record**:
   ```
   Name: www
   Type: CNAME
   Value: aktasis-consultancy.web.app (or your project name)
   ```

**Add CNAME in GoDaddy:**
1. In GoDaddy DNS Management, click **Add**
2. Configure:
   - Type: **CNAME**
   - Name: `www`
   - Value: `aktasis-consultancy.web.app` (use YOUR actual Firebase hosting URL)
   - TTL: `1 Hour`
3. Click **Save**

### Step 7: Remove Conflicting DNS Records
⚠️ **IMPORTANT**: GoDaddy may have default parking page records that conflict.

1. In GoDaddy DNS Management, look for:
   - **A records** with Name `@` pointing to GoDaddy IPs (NOT the Firebase IPs)
   - **CNAME records** with Name `www` pointing to GoDaddy parking pages
2. **Delete these conflicting records** (click trash icon)
3. Keep ONLY the Firebase records you just added

---

## Part 5: Final DNS Configuration Summary

After completing all steps, your GoDaddy DNS should have these records:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| TXT | @ | firebase=<your-verification-code> | 1 Hour |
| A | @ | 151.101.1.195 | 1 Hour |
| A | @ | 151.101.65.195 | 1 Hour |
| CNAME | www | aktasis-consultancy.web.app | 1 Hour |

**Delete any other A or CNAME records for @ or www that point to GoDaddy.**

---

## Part 6: Wait for SSL Certificate

### What Happens Next
1. Firebase automatically provisions an SSL certificate for your domain
2. This process takes **24-48 hours** (usually 2-6 hours)
3. You'll see the status in Firebase Console under Hosting:
   - **Pending**: Certificate is being provisioned
   - **Connected**: Domain is live with HTTPS ✓

### Check Status
1. Go to Firebase Console → Hosting
2. Under "Domains", you'll see:
   - `aktasis.com` - Status: Pending/Connected
   - `www.aktasis.com` - Status: Pending/Connected

---

## Part 7: Testing Your Domain

### Wait for DNS Propagation
- DNS changes take **15 minutes to 48 hours** to propagate globally
- Typically visible within **1-2 hours**

### Test Commands (in Terminal)
```bash
# Check if A records are set
nslookup aktasis.com

# Check if CNAME is set
nslookup www.aktasis.com

# Check TXT record
nslookup -type=TXT aktasis.com
```

### Test in Browser
After SSL certificate is provisioned:

1. Visit `http://aktasis.com` → Should redirect to `https://www.aktasis.com`
2. Visit `https://aktasis.com` → Should redirect to `https://www.aktasis.com`
3. Visit `https://www.aktasis.com` → Should load your website

### Online DNS Checker
Use [whatsmydns.net](https://www.whatsmydns.net/) to check global DNS propagation:
1. Enter `aktasis.com` and select **A** record type
2. Should show: `151.101.1.195` and `151.101.65.195`
3. Enter `www.aktasis.com` and select **CNAME** record type
4. Should show: `aktasis-consultancy.web.app`

---

## Part 8: Troubleshooting

### Issue: "Project not found" when deploying
**Solution:**
```bash
# Check which project you're using
firebase use

# List all projects
firebase projects:list

# Switch to your project
firebase use aktasis-consultancy
```

### Issue: "Domain verification failed"
**Solution:**
- Wait 15-30 minutes for DNS propagation
- Verify TXT record in GoDaddy (no extra spaces)
- Check with: `nslookup -type=TXT aktasis.com`
- Try verification again in Firebase Console

### Issue: "www.aktasis.com not resolving"
**Solution:**
- Verify CNAME points to correct Firebase URL
- Check for conflicting CNAME records in GoDaddy
- Wait up to 48 hours for DNS propagation

### Issue: "SSL certificate pending for too long"
**Solution:**
- Ensure all DNS records are correct
- Wait up to 48 hours for automatic provisioning
- If still pending after 48 hours, contact Firebase Support

### Issue: "Not redirecting to www"
**Solution:**
- Verify `firebase.json` has redirect configuration (already done)
- Redeploy: `firebase deploy --only hosting`
- Clear browser cache and test in incognito mode

### Issue: "Build fails"
**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

---

## Complete Command Reference

```bash
# Check Firebase login
firebase login:list

# Login to Firebase (if needed)
firebase login

# Check current project
firebase use

# List all projects
firebase projects:list

# Switch project
firebase use aktasis-consultancy

# Install dependencies
npm install

# Build project
npm run build

# Deploy to Firebase
firebase deploy --only hosting

# Check DNS records
nslookup aktasis.com
nslookup www.aktasis.com
nslookup -type=TXT aktasis.com
```

---

## Summary Checklist

- [ ] Create new Firebase project as tatsmaina@gmail.com
- [ ] Update `.firebaserc` with new project name
- [ ] Build project: `npm run build`
- [ ] Deploy to Firebase: `firebase deploy --only hosting`
- [ ] Add `aktasis.com` in Firebase Console
- [ ] Add TXT record in GoDaddy for verification
- [ ] Verify domain in Firebase
- [ ] Add two A records in GoDaddy (151.101.1.195, 151.101.65.195)
- [ ] Add `www.aktasis.com` in Firebase Console
- [ ] Add CNAME record in GoDaddy (www → aktasis-consultancy.web.app)
- [ ] Remove conflicting GoDaddy parking page records
- [ ] Wait for SSL certificate (24-48 hours)
- [ ] Test domain: https://www.aktasis.com

---

## Important Notes

1. **Project Name**: Use the exact name you created in Firebase Console
2. **Firebase URL**: Use YOUR actual Firebase hosting URL (shown after deployment)
3. **DNS Propagation**: Can take up to 48 hours, be patient
4. **SSL Certificate**: Automatic, but takes 24-48 hours
5. **Canonical URL**: Site will use `https://www.aktasis.com` as primary URL

---

## Support Resources

- **Firebase Hosting Docs**: https://firebase.google.com/docs/hosting/custom-domain
- **Firebase Console**: https://console.firebase.google.com/
- **GoDaddy DNS Help**: https://www.godaddy.com/help/manage-dns-records-680
- **DNS Checker**: https://www.whatsmydns.net/

---

**Created**: 2026-04-14  
**For**: tatsmaina@gmail.com  
**Domain**: www.aktasis.com