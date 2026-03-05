# Setup Instructions

## 1. Create GitHub Repository
Create a new repo at: https://github.com/new
- Name: `fleuriste-lautre`
- Public
- Don't initialize with README

## 2. Initialize and Push
```bash
cd fleuriste-lautre
git init
git add .
git commit -m "Initial commit"
git branch -M master
git remote add origin https://github.com/Fleetiqo/fleuriste-lautre.git
git push -u origin master
```

## 3. Enable GitHub Pages
1. Go to: https://github.com/Fleetiqo/fleuriste-lautre/settings/pages
2. Under "Build and deployment" → Source: **GitHub Actions**
3. Save

## 4. Done!
The workflow will auto-deploy on every push to master.
Site will be live at: https://fleetiqo.github.io/fleuriste-lautre/
