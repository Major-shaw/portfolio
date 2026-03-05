# AGENTS.md — Portfolio Project Context

## Project Overview

This is **Gurleen's product designer portfolio** — a single-page static HTML site deployed on Vercel.

## Key Rules

- **No frameworks.** This is intentionally a static HTML/CSS/JS project. Do not convert to React, Next.js, or any framework unless explicitly asked.
- **Single source of truth:** `index.html` is the live file. All edits go here.
- **Old versions** live in `drafts/` and are git-ignored. Never modify files in `drafts/`.
- **Images** are in `images/`. Some assets are hosted externally on `framerusercontent.com` and `unsplash.com`.

## Architecture

| File | Purpose |
|------|---------|
| `index.html` | Entire portfolio — HTML structure, embedded CSS, embedded JS |
| `images/` | Local screenshots for phone mockup case studies |
| `drafts/` | Archived old versions (not tracked by git) |

## Design Tokens & Style

- **Font:** Poppins (Google Fonts)
- **Background:** `#f9f8f5` with sage/olive ambient glow blobs
- **Color palette:** Monochromatic sage/olive tones for background; blue, orange, green, purple card accents
- **Border radius:** 8px (sm), 12px (md), 20px (lg), 32px (xl)

## Sections (in order)

1. **Nav** — sticky, right-aligned (Work / Process / Contact)
2. **Hero** — avatar, name, title, description, CTA buttons
3. **Work** — 4 sticky-scroll case study cards with phone mockups and metrics
4. **Process** — 4-step grid (Discover → Define → Develop → Deliver)
5. **Hobbies** — "When I'm not designing" collage with animated card entrance
6. **Footer** — dark green gradient with social links and star dots

## Interactive Elements

- Canvas-based constellation network (mouse-reactive)
- Ambient glow orbs with drift + morph animations
- Click ripple effect
- Hobby cards: scroll-triggered entrance animation
- Case study cards: sticky scroll stacking, hover effects on mockups

## Deployment

- **Host:** Vercel
- **Repo:** `git@github-majorShaw:Major-Shaw/portfolio.git`
- **Branch:** `master`
- **SSH alias:** Uses `github-majorShaw` host (second GitHub account)
- **Auto-deploy:** Push to `master` triggers production deploy
