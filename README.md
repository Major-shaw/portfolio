# Gurleen — Product Designer Portfolio

A minimal, static portfolio site showcasing UX/UI case studies, design process, and personal interests.

## 🌐 Live Site

Deployed on Vercel — auto-deploys on push to `master`.

## 📁 Project Structure

```
├── index.html        ← Live portfolio (single-page, static)
├── images/           ← Local image assets
├── drafts/           ← Old versions & templates (git-ignored)
├── AGENTS.md         ← AI agent context & rules
└── .gitignore
```

## 🛠 Tech Stack

- **Pure HTML/CSS/JS** — no frameworks, no build step
- **Google Fonts** — Poppins
- **Canvas API** — constellation network background animation
- **CSS animations** — ambient glow blobs, card hover effects, hobby card entrance animations

## 🚀 Deployment

- **Hosting:** [Vercel](https://vercel.com)
- **Version Control:** GitHub ([Major-shaw/portfolio](https://github.com/Major-shaw/portfolio))
- **Deploy command:** Push to `master` or run `vercel --prod`

## ✏️ Making Changes

1. Edit `index.html` directly
2. Commit and push:
   ```bash
   git add . && git commit -m "Update portfolio" && git push
   ```
3. Vercel auto-deploys from `master`

## 📝 Notes

- Old design iterations are archived in `drafts/` and excluded from version control.
- All images used in case study mockups are in `images/`.
- The site is fully responsive (desktop + mobile).
