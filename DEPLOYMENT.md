# Deploying AOK Design System Storybook to Netlify

This guide explains how to deploy the AOK Design System Storybook to Netlify using GitHub integration.

## 🚀 Quick Setup (Recommended)

### 1. Connect GitHub Repository to Netlify

1. **Go to [Netlify](https://app.netlify.com/)** and sign in with your GitHub account
2. **Click "New site from Git"**
3. **Choose GitHub** as your Git provider
4. **Select your repository** (`aok-design-system`)
5. **Configure build settings:**
   - **Branch to deploy:** `main` (or `master`)
   - **Build command:** `yarn build-storybook`
   - **Publish directory:** `storybook-static`
6. **Click "Deploy site"**

### 2. Configure Custom Domain (Optional)

1. In your Netlify site dashboard, go to **"Domain settings"**
2. **Add custom domain:** `aok-design-system.netlify.app` or your own domain
3. **Configure DNS** if using a custom domain

## 🔧 Manual Deployment

If you prefer to deploy manually:

```bash
# Build the Storybook
yarn build-storybook

# Install Netlify CLI (if not already installed)
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to Netlify
netlify deploy --prod --dir=storybook-static
```

## 🤖 Automated Deployment with GitHub Actions

We've included a GitHub Actions workflow (`.github/workflows/deploy-storybook.yml`) that automatically deploys your Storybook when you push to the main branch.

### Setup GitHub Secrets

To use the automated workflow, you need to add these secrets to your GitHub repository:

1. **Go to your GitHub repository**
2. **Navigate to Settings → Secrets and variables → Actions**
3. **Add the following secrets:**

```
NETLIFY_AUTH_TOKEN=your_netlify_personal_access_token
NETLIFY_SITE_ID=your_netlify_site_id
```

### Getting Your Netlify Credentials

**Netlify Auth Token:**
1. Go to [Netlify User Settings](https://app.netlify.com/user/applications)
2. Click "New access token"
3. Copy the generated token

**Netlify Site ID:**
1. Go to your site dashboard on Netlify
2. Navigate to "Site settings" → "General"
3. Copy the "Site ID" from the site information section

## 📁 Project Structure for Deployment

```
aok-design-system/
├── .github/workflows/
│   └── deploy-storybook.yml     # GitHub Actions workflow
├── .storybook/                  # Storybook configuration
├── src/                         # Components and stories
├── netlify.toml                 # Netlify configuration
├── package.json                 # Build scripts
└── DEPLOYMENT.md               # This file
```

## 🔧 Build Configuration

### package.json Scripts
```json
{
  "scripts": {
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  }
}
```

### netlify.toml Configuration
The `netlify.toml` file includes:
- Build commands and publish directory
- Node.js version specification
- Redirect rules for Storybook routing
- Security headers
- Caching configuration for static assets

## 🌐 Deployment Environments

### Production
- **Branch:** `main`
- **URL:** Your Netlify domain (e.g., `https://aok-design-system.netlify.app`)
- **Auto-deploy:** Enabled on push to main

### Preview Deployments
- **Trigger:** Pull requests
- **URL:** Auto-generated preview URLs
- **Purpose:** Review changes before merging

## 📊 Monitoring Deployments

### Netlify Dashboard
- **Build logs:** View detailed build information
- **Deploy notifications:** Get notified of successful/failed deploys
- **Analytics:** Monitor site performance and usage

### GitHub Actions
- **Workflow runs:** Monitor deployment status in the Actions tab
- **PR comments:** Automatic preview links in pull requests

## 🐛 Troubleshooting

### Common Issues

**Build Fails:**
```bash
# Check your build locally
yarn build-storybook

# Ensure all dependencies are installed
yarn install
```

**Missing Files:**
- Verify `storybook-static` is in `.gitignore`
- Check that all story files are properly exported

**TypeScript Errors:**
```bash
# Run type checking
yarn tsc --noEmit

# Fix any TypeScript errors before deployment
```

### Build Environment

**Node.js Version:** 18.x (specified in `netlify.toml`)
**Package Manager:** Yarn 1.22.22
**Build Time:** ~2-3 minutes for full Storybook build

## 📝 Deployment Checklist

Before deploying:

- [ ] All components have stories
- [ ] Documentation pages are complete
- [ ] TypeScript compiles without errors
- [ ] Build command works locally (`yarn build-storybook`)
- [ ] No sensitive information in code
- [ ] Custom domain configured (if needed)
- [ ] GitHub secrets configured (for automated deployment)

## 🎯 Post-Deployment

After successful deployment:

1. **Test the live site** to ensure all features work
2. **Share the URL** with your team for the "Hausfrauentest"
3. **Set up monitoring** for uptime and performance
4. **Configure branch protection** rules if using automated deployment

## 📧 Support

For deployment issues:
- **Netlify Docs:** https://docs.netlify.com/
- **GitHub Actions:** https://docs.github.com/en/actions
- **Storybook Deployment:** https://storybook.js.org/docs/react/sharing/publish-storybook

---

**Your AOK Design System Storybook is now ready for deployment! 🚀** 