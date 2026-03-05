# GitHub Pages Deployment Guide

This project is now configured for GitHub Pages deployment.

## Setup Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Build and deployment":
     - Source: Select "GitHub Actions"
   - The workflow will automatically deploy on push to main

3. **Access Your Site**
   - Your site will be available at: `https://[username].github.io/fleuriste-lautre/`
   - The deployment typically takes 1-2 minutes

## Configuration Details

- **Base Path**: `/fleuriste-lautre/` (configured in vite.config.js)
- **Build Output**: `dist/` directory
- **Workflow**: `.github/workflows/deploy.yml`
- **Node Version**: 20.x

## Manual Deployment

To manually trigger a deployment:
1. Go to Actions tab in your GitHub repository
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

## Local Testing

Test the production build locally:
```bash
npm run build
npm run preview
```

## Troubleshooting

If images or assets don't load:
- Verify the base path in vite.config.js matches your repository name
- Check that all asset paths in HTML start with `/` (e.g., `/src/style.css`)
- Ensure the workflow completed successfully in the Actions tab
