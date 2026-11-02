# Deployment Guide — GitHub Pages (free)

Site goes live at: **https://pratik0820.github.io/portfolio/** (default GitHub Pages URL, no custom domain needed).

## One-time setup (≈5 minutes)

1. **Create the repository**
   - Go to https://github.com/new
   - Repository name: `portfolio` (exact — the Vite `base` path is set to this)
   - Public repo (free accounts require public repos for GitHub Pages)
   - Do **not** initialize with README (we already have files)
   - Click **Create repository**

2. **Initialize git in the portfolio folder and push**

   Run from the `portfolio/` directory:

   ```bash
   git init
   git add .
   git commit -m "Portfolio: React + Vite single-page site"
   git branch -M main
   git remote add origin https://github.com/pratik0820/portfolio.git
   git push -u origin main
   ```

   > If git asks for a password/token, GitHub now requires a Personal Access Token (PAT)
   > or the browser-based `gh auth login` (GitHub CLI) instead of a password.

3. **Enable GitHub Pages with the Actions source**
   - Repo page → **Settings** → left sidebar **Pages**
   - Under **Build and deployment**: Source = **GitHub Actions**
   - That's it — the included workflow (`.github/workflows/deploy.yml`) built and deployed
     the site on the push from step 2 (and deploys again on every future push to `main`).

4. **Confirm the deploy ran**
   - Repo → **Actions** tab → workflow "Deploy to GitHub Pages" should show ✅ green
   - If it passed, the live URL is `https://pratik0820.github.io/portfolio/`
   - First deploy can take ~1 minute to propagate; hard-refresh with Ctrl+Shift+R if you see a 404.

## Changing the repo name?

If you ever name the repo something other than `portfolio`, three places must change:

1. `vite.config.js` → `base: '/<repo-name>/'`
2. `index.html` → the absolute URLs (`og:url`, `og:image`, favicon href, JSON-LD `url`)
3. `src/data/portfolio.js` → `resumePath`

## Local pre-flight (optional)

```bash
cd portfolio
npm install
npm run build     # must exit 0
npm run preview   # check http://localhost:4173
```

## Updating the site later

Edit files → then:

```bash
git add .
git commit -m "describe the change"
git push
```

The Actions workflow redeploys automatically in ~1 minute.

## Troubleshooting

| Symptom | Fix |
|---|---|
| 404 after deploy | Wait ~1 min, hard refresh; check Steps 3's Source is "GitHub Actions" |
| Blank page | Repo renamed but `base` not updated (see "Changing the repo name") |
| Resume download 404 | Confirm `public/Pratik-Gole-Backend-Developer.pdf` exists in the repo |
| Actions workflow failing | Repo → Actions tab → open the failed run and read the error; usually `npm ci` needing an up-to-date `package-lock.json` (commit it) |
