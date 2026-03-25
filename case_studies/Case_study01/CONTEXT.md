# Case Study 01: Daily/Weekly Quest System — Tile Match

## What This Is
A UX/UI case study portfolio page for a Daily/Weekly Quest System designed for **Tile Match**, a casual, ad-based mobile puzzle game. The goal of the feature was to increase multi-day player retention through daily goals and weekly progression.

## Source
- **Figma file**: https://www.figma.com/design/1KtQXb5Lf0gTSpIG98Zffm/Document?node-id=629-20915
- **Frame**: "Case study 1.1" (node `629:20920`, 1920x23977px)

---

## Project Structure

```
Case_study01/
├── index.html    # All 23 sections with <!-- SECTION: Name --> comments
├── styles.css    # CSS variables, section-labeled styles, responsive breakpoints
├── script.js     # Scroll reveal, sticky nav, progress bar, flow tabs
└── CONTEXT.md    # This file
```

## Design Tokens

### Colors (CSS custom properties in styles.css)
| Variable | Value | Usage |
|----------|-------|-------|
| `--color-text-primary` | `#242424` | Titles, headings |
| `--color-text-accent` | `#013761` | Subtitles, metric numbers (dark navy) |
| `--color-text-body` | `#676767` | Body text, descriptions |
| `--color-text-label` | `#585858` | Metric labels |
| `--color-bg-page` | `#ffffff` | Page background |
| `--color-bg-card` | `#f5f5f5` | Cards, light sections |
| `--color-success` | `#22c55e` | Checkmarks, positive impact numbers |
| `--color-accent-red` | `#ef4444` | Problem indicators |
| `--color-accent-blue` | `#3b82f6` | Links |

### Typography
- **Font**: Poppins (Google Fonts) — weights 300, 400, 500, 600, 700
- **Scale**: `--fs-hero-title` (2.25rem) down to `--fs-xs` (0.75rem)
- Sizes are scaled ~50-60% from the 1920px Figma canvas

### Spacing
- Max-width: 1200px centered
- Section padding: `--space-section` (5rem desktop, 4rem tablet, 3rem mobile)
- Card border-radius: 24px (large), 16px, 12px, 8px

---

## Page Sections (in order)

1. **Hero** — Title, date (June-July 2025), tagline "Lighthouse for Retention", description
2. **About Tile Match** — Game description, 4 metric cards ($70K revenue, 500K+ DAU, 50L+ downloads, 4.9 rating)
3. **Overview** — Retention drop context, analysis approach
4. **Setting the Scene** — Engagement/retention patterns chart, playtest analysis
5. **Key Insights & What We Analysed** — 4 insight cards + 2 design need cards (2-column grid)
6. **User Research** — Demographics table (7-8 players, 45+ yrs, US/Canada/UK)
7. **Retention Data** — 3 metric cards, cohort funnel (Day 1→7), engagement tiers, key insight box
8. **The Problem** — 3 player quotes, retention drop context
9. **Digging Deeper** — 3 root cause cards (Boredom, Broken Value Exchange, Progression Opacity)
10. **Hypothesis** — Hypothesis statement block with left border accent
11. **Asking the Right Questions** — 3 HMW cards with strategic goals
12. **Brainstorming** — 12 idea cards in 3-col grid, Quest Centre highlighted as selected
13. **Choosing the Right Bet** — 5-criteria evaluation table, feature mechanics description, reward mechanics
14. **Quest Popup Iterations** — 6 design principles, iteration placeholder
15. **Quest Card States** — Active/Claim/Completed states + HS icon states (3-col grid)
16. **Feature Mechanics (UI Details)** — UI notes, quest popup mockup placeholder
17. **UX Metrics** — 4 numbered success metrics
18. **User Flows** — 3-phase tabbed interface (FTUE, Regular, Reward Grant) with step lists
19. **Final Mocks** — 8 mobile mockup placeholders in 4-col grid
20. **Reward Grant Flow** — 6 reward step cards + video placeholder
21. **Final Impact** — 3 impact cards (6% Level View, 5% D7 Retention, 2% Session Time)
22. **Learnings** — Personal takeaways
23. **Footer** — Name (Gurleen Kaur), placeholder links

---

## Image Placeholders
All images use placeholder divs with descriptive labels and correct aspect ratios. Classes:
- `.placeholder--landscape` (16:9)
- `.placeholder--portrait` (9:16)
- `.placeholder--mockup` (9:19, max-width 200px)
- `.placeholder--chart` (16:10, min-height 300px)
- `.placeholder--flow` (16:7, min-height 250px)
- `.placeholder--wide` (21:9)

To replace: swap the placeholder `<div>` with an `<img>` tag.

## Interactive Features
- **Scroll reveal**: Elements with `.reveal` class animate in via IntersectionObserver
- **Sticky nav**: Blur backdrop, shadow on scroll, active section highlighting
- **Scroll progress bar**: Fixed bar below nav showing page scroll position
- **Flow tabs**: Phase 1/2/3 tabs in User Flows section (JS in script.js)
- **Mobile nav**: Hamburger toggle at <=768px

## Responsive Breakpoints
- Desktop: >1024px (full layout)
- Tablet: <=1024px (2-col grids collapse, reduced sizes)
- Mobile: <=768px (single column, hamburger nav, smaller type)

---

## Editing Guide
- **Change colors/fonts/spacing**: Edit CSS variables in `:root` at top of `styles.css`
- **Add/remove sections**: Each section is clearly marked with `<!-- SECTION -->` comments in HTML and `/* ===== SECTION ===== */` comments in CSS
- **Replace image placeholders**: Find placeholder divs by their label text, replace with `<img src="..." alt="...">`
- **Update nav**: Add/remove links in `.site-nav__links` in `index.html`; section highlighting is automatic via IntersectionObserver
- **Add new sections**: Copy an existing section block, update id/classes, add matching CSS
