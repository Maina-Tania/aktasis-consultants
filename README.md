# AKTASIS CONSULTANTS - Professional Architectural Services

A modern, responsive website for AKTASIS CONSULTANTS, built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Deploy to Firebase

### Option 1: One-Command Deployment

```bash
# Make the deployment script executable
chmod +x deploy.sh

# Run the deployment script
./deploy.sh
```

### Option 2: Manual Deployment

```bash
# Install dependencies
npm install

# Install Firebase CLI globally
npm install -g firebase-tools

# Login to Firebase
firebase login

# Build the project
npm run build

# Deploy to Firebase
firebase deploy --only hosting
```

## 📋 Prerequisites

- Node.js (version 18 or higher)
- npm (comes with Node.js)
- Firebase account

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components (Header, Footer)
│   ├── home/           # Home page sections
│   └── ui/             # UI components (buttons, forms, etc.)
├── pages/              # Page components
├── utils/              # Utility functions
└── firebase.ts         # Firebase configuration
```

## 🎨 Features

- **Modern Design**: Clean, professional architectural aesthetic
- **Responsive**: Works perfectly on all devices
- **Performance Optimized**: Fast loading with code splitting
- **SEO Ready**: Complete meta tags and structured data
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Error Handling**: Comprehensive error boundaries
- **Analytics**: Firebase Analytics integration

## 🔧 Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better DX
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **React Router** - Client-side routing
- **Firebase** - Hosting and analytics
- **Radix UI** - Accessible UI components

## 📱 Pages

- **Home** - Landing page with hero section
- **About Us** - Company information and team
- **Projects** - Showcase of architectural work
- **Services** - Detailed service offerings
- **Portfolio** - Interactive project gallery
- **Contact** - Contact form and information

## 🚀 Deployment

The project is configured for Firebase Hosting with:

- **Automatic builds** on deployment
- **CDN distribution** for global performance
- **HTTPS enforcement** for security
- **Caching optimization** for static assets
- **SPA routing** support

### Deployment URLs

After deployment, your site will be available at:
- `https://aktasis-consultancy.web.app`
- `https://aktasis-consultancy.firebaseapp.com`

## 🔍 SEO & Performance

- **Meta tags** for all pages
- **Open Graph** for social sharing
- **Structured data** for search engines
- **Image optimization** with lazy loading
- **Code splitting** for faster loading
- **Service Worker** ready for PWA

## 🛡️ Security

- **HTTPS only** deployment
- **Content Security Policy** ready
- **No sensitive data** in client code
- **Firebase security rules** configured

## 📊 Analytics

Firebase Analytics is integrated to track:
- Page views and user behavior
- Performance metrics
- Error tracking
- User demographics

## 🔧 Scripts

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix linting issues
npm run type-check       # TypeScript check
npm run format           # Format code with Prettier

# Testing
npm run test             # Run tests
npm run test:coverage    # Run tests with coverage

# Deployment
npm run deploy           # Build and deploy to Firebase
npm run deploy:hosting   # Deploy only hosting
```

## 📝 Configuration Files

- `firebase.json` - Firebase hosting configuration
- `.firebaserc` - Firebase project settings
- `vite.config.ts` - Vite build configuration
- `tailwind.config.ts` - Tailwind CSS configuration

## 🐛 Troubleshooting

### Common Issues

1. **Build fails**: Check TypeScript errors
   ```bash
   npm run type-check
   ```

2. **Deployment fails**: Ensure Firebase login
   ```bash
   firebase login
   ```

3. **404 errors**: Verify SPA routing in `firebase.json`

### Useful Commands

```bash
# Check Firebase project
firebase projects:list

# View hosting status
firebase hosting:channel:list

# Clear cache and redeploy
npm run clean && npm run build && firebase deploy
```

## 📚 Documentation

- [Firebase Hosting](https://firebase.google.com/docs/hosting)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 📞 Support

For support or questions:
- Email: hello@aktasisconsultancy.com
- Website: https://aktasisconsultancy.com

---

**Built with ❤️ for AKTASIS CONSULTANTS**
