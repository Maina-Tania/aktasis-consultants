# Firebase Deployment Guide for Aktasis Consultancy

This guide will help you deploy your Aktasis Consultancy website to Firebase Hosting.

## Prerequisites

1. **Node.js** (version 18 or higher)
2. **npm** (comes with Node.js)
3. **Firebase CLI** (will be installed via npm)

## Step 1: Install Dependencies

First, install all the project dependencies:

```bash
npm install
```

## Step 2: Install Firebase CLI

Install Firebase CLI globally:

```bash
npm install -g firebase-tools
```

## Step 3: Login to Firebase

Login to your Firebase account:

```bash
npm run firebase:login
```

Or directly:

```bash
firebase login
```

This will open a browser window where you can authenticate with your Google account.

## Step 4: Build the Project

Build the project for production:

```bash
npm run build
```

This will create a `dist` folder with the optimized production build.

## Step 5: Deploy to Firebase

### Option A: Deploy Everything
```bash
npm run deploy
```

### Option B: Deploy Only Hosting
```bash
npm run deploy:hosting
```

Or directly:
```bash
firebase deploy --only hosting
```

## Step 6: Verify Deployment

After deployment, Firebase will provide you with a URL where your site is live. It will look something like:
- `https://aktasis-b3364.web.app`
- `https://aktasis-b3364.firebaseapp.com`

## Configuration Files

### firebase.json
This file configures Firebase Hosting with:
- **Public directory**: `dist` (Vite build output)
- **SPA routing**: All routes redirect to `index.html`
- **Caching headers**: Optimized for performance
- **Ignore patterns**: Excludes unnecessary files

### .firebaserc
This file specifies the Firebase project ID: `aktasis-b3364`

## Performance Optimizations

The deployment includes several performance optimizations:

1. **Code Splitting**: Vendor libraries are split into separate chunks
2. **Caching**: Static assets are cached for 1 year
3. **Compression**: Assets are automatically compressed
4. **CDN**: Firebase Hosting uses Google's global CDN

## Environment Variables

The Firebase configuration is already set up in `src/firebase.ts` with your project credentials:

- **Project ID**: `aktasis-b3364`
- **Domain**: `aktasis-b3364.firebaseapp.com`
- **Analytics**: Enabled with measurement ID

## Custom Domain (Optional)

To use a custom domain:

1. Go to Firebase Console
2. Navigate to Hosting
3. Click "Add custom domain"
4. Follow the DNS configuration instructions

## Continuous Deployment

For automatic deployments, you can set up GitHub Actions:

1. Create `.github/workflows/deploy.yml`
2. Configure secrets for Firebase token
3. Deploy on push to main branch

## Troubleshooting

### Common Issues

1. **Build fails**: Check for TypeScript errors
   ```bash
   npm run type-check
   ```

2. **Deployment fails**: Ensure you're logged in
   ```bash
   firebase login
   ```

3. **404 errors**: Check that `firebase.json` has the correct rewrite rules

4. **Performance issues**: Verify caching headers are set correctly

### Useful Commands

```bash
# Check Firebase project
firebase projects:list

# View hosting status
firebase hosting:channel:list

# Clear cache and redeploy
npm run clean && npm run build && firebase deploy

# Preview locally
npm run preview
```

## Monitoring

After deployment, you can monitor your site using:

1. **Firebase Analytics**: Built-in analytics
2. **Firebase Performance**: Monitor loading times
3. **Firebase Crashlytics**: Error tracking

## Security

The deployment includes security best practices:

- HTTPS enforced
- Security headers configured
- CSP (Content Security Policy) ready
- No sensitive data in client-side code

## Support

If you encounter issues:

1. Check Firebase Console for error logs
2. Verify build output in `dist` folder
3. Test locally with `npm run preview`
4. Check Firebase documentation

## Next Steps

After successful deployment:

1. **Set up custom domain** (optional)
2. **Configure analytics** in Firebase Console
3. **Set up monitoring** for performance
4. **Configure CI/CD** for automatic deployments
5. **Set up staging environment** for testing

Your Aktasis Consultancy website is now live and ready for visitors! 