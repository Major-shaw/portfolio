# Case Study Plan: Puzzle Screen UX Optimization

## The Narrative Arc

**"How micro-level UI refinements on a single game screen drove macro-level business impact"**

This case study tells the story of thoughtful, research-backed UI surgery on the most-used screen in the game — the puzzle board — and how small, intentional changes compounded into meaningful engagement and retention gains.

**Figma Source:** https://www.figma.com/design/jXjWlAk6CQtQUECcx2aSOM/Document-2?node-id=54-7

---

## SECTION 1: Hero / Opening

### Content
- Case study title (e.g., *"Redesigning the Puzzle Experience"* or *"Small Changes, Big Plays"*)
- Your role, company (anonymized if needed), timeline, platform (mobile/casual gaming)
- One-line impact statement teaser (e.g., *"A series of UI refinements that improved session length by X% and ad views by Y%"*)

### Visual Treatment
- Full-bleed hero with a polished "After" screenshot of the game board, slightly rotated with soft depth-of-field blur on the edges
- Subtle parallax scroll on the phone mockup
- **Micro-interaction:** Title text fades up with a staggered word-by-word reveal on load. Impact numbers count up from 0 when they enter viewport.

---

## SECTION 2: Context & My Role

### Content
- Brief about the game (casual tile-matching puzzle game)
- Your role — Senior UI/UX Designer owning the puzzle screen experience
- Team structure (who you collaborated with — PM, game designers, engineers, data analysts)
- Platform & audience (casual mobile gamers, broad age range including older players)

### Visual Treatment
- Clean role/team card layout
- **Micro-interaction:** Cards slide in gently from bottom on scroll

---

## SECTION 3: The Problem Space

### Content
- The puzzle screen is where players spend 80%+ of their time — every friction point multiplies
- Key problems identified (grouped into themes):
  1. **Readability & Tap Accuracy** — Tiles were too small, rack was undersized, causing mistaps especially for older players
  2. **Visual Hierarchy Breakdown** — Power-ups blended with tiles (both squarish), rack lacked distinction from the board, w2e icon was visually inconsistent
  3. **Lack of Gameplay Feedback** — No gratification on matches, no rack fill feedback, silent interactions
  4. **UI Inconsistency** — Extra slot looked nothing like other power-ups, jewel notifications were oversized, color palettes clashed
- Support with user complaints/tickets referenced (e.g., "multiple tickets on smaller tile size")

### Visual Treatment
- Annotated "Before" screenshot with numbered callouts pointing to each problem area
- Problem themes displayed as cards with icons
- **Micro-interaction:** On hover/scroll, each callout on the screenshot pulses with a soft red glow, drawing attention to the pain points. Cards fade in sequentially.

---

## SECTION 4: Research & UX Reasoning

### Content
Group by design principle:
- **Fitts's Law** — Bigger tiles = fewer mistaps; power-ups closer to the board = better discoverability
- **Jakob's Law** — Players from competing games expect bigger tile sizes; match mental models
- **Recognition over Recall** — w2e icon on puzzle screen should match the homescreen version
- **Law of Uniform Connectedness** — Extra slot should look like other power-ups since it functions as one
- **Gestalt Principles** — Circular power-ups vs. square tiles creates clear visual grouping
- **Feedback Heuristic (Nielsen)** — Every match deserves acknowledgement; rack fill should be visible
- Reference competitor analysis (comp games having bigger tiles, optimized power-up layouts)

### Visual Treatment
- Two-column layout: principle name + icon on left, your application of it on right
- Small inline before/after thumbnails next to each principle
- **Micro-interaction:** Each principle card has a subtle left-border accent that fills downward as you scroll into it. Hovering a principle highlights the corresponding area on a sticky phone mockup.

---

## SECTION 5: The Changes — Deep Dive (Solution)

Present each change cluster as its own sub-section with a consistent structure: **What changed -> Why -> Before/After**

### 5A. Tile & Rack System

| Change | Detail |
|---|---|
| Bigger tile size | Improved clarity, reduced mistaps, matches competitor expectations |
| Reduced gutter spacing | Created space for bigger tiles without increasing board size |
| Bigger rack size | Better "snap into place" feel, simulates real-world interaction |
| Tint behind rack | Clear visual distinction of empty slots |
| Rack moved above tile set | Creates hierarchy: Rack -> Board -> Controls; encourages calculative play |
| Rack holder introduced | Physical container feel; prevents tiles from blending with board |

**Figma Frames:** Rack size (54:1263), Rack Position (58:12435), Rack holder (58:18006)

**Reasoning from Figma:**
- Bigger rack: Slightly increasing the rack's size enhances the feel of tiles 'snapping' into place, simulating real-world interactions.
- Tint behind rack: Improves visual distinction of empty slots so players clearly recognise them.
- Rack at top: Becomes the first focal point, making players take more calculative decisions. Clear visual hierarchy: rack -> Board -> controls. More exploratory tapping as the eye naturally scans downward.
- Rack holder: Currently tiles on rack completely cover rack slots, reducing visual distinction between rack tiles & board tiles (especially in levels with higher vertical height). Introducing a rack holder improves usability and creates a real-world feel (stacking tiles into a container vs floating on-screen).
- Bigger tiles: Multiple tickets on smaller tile size. Bigger tiles improve icon clarity and recognisability. Larger tiles make it easier to scan, recognise, and decide. Jakob's law — players play other games with bigger tiles. Reduces mistap probability (especially for older players).
- Reduced gutter: By reducing the gutter spacing we create extra space to increase tile size.

**Visual Treatment:**
- Side-by-side Before/After phone mockups with a draggable slider (swipe to compare)
- **Micro-interaction:** The slider has a subtle bounce animation inviting interaction. On mobile, swipe gesture with haptic-like visual pulse.

### 5B. Power-Up Redesign

| Change | Detail |
|---|---|
| Circular holders | Visual differentiation from square tiles |
| Aligned color scheme | Harmonized with game's UI palette |
| Extra slot redesigned | Now matches other power-ups (uniform connectedness) |
| Jewel notifications refined | Smaller, red, repositioned to bottom-right, less dominant |
| Bigger power-up size | Better visibility, Fitts's Law compliance |
| Neutral-toned power-ups | Separate visual lane from multi-colored puzzle tiles |
| Moved closer to tile set | Fitts's Law — reduced distance improves usage |

**Figma Frames:** Circular power ups (54:1277), Extra slot (57:6840), Jewel notifs (57:6854)

**Reasoning from Figma:**
- Circular shape: Almost all elements on the board are squarish. Very little visual distinction between tiles and power-ups. Differentiation is important for UI clarity.
- Color scheme: Current power-up (interactive element) designs blend too closely with tile (passive game element) aesthetics.
- Extra slot: Functionally acts as a power-up but visual treatment is very different (law of uniform connectedness). Uses a distinct purple-gold palette disconnected from the rest of the UI.
- Jewel notifications: Compared to comp games, jewel notifs are noticeably larger and dominate the icon space. Badge should be subtle and secondary to the power-up itself.
- Bigger power-ups: Fitts's Law — placing power-ups closer to tiles makes them feel connected, improving discoverability & usage. Comp game screens are optimised for power-up discovery & usage.
- Neutral tones: Neutral tones strengthen visual separation from puzzle tiles. Multi-colored tiles + neutral power-ups = each UI element occupies distinct visual space.

**Visual Treatment:**
- Zoom-in detail shots comparing old vs. new power-up area
- Component breakdown showing anatomy of the new power-up design
- **Micro-interaction:** Power-up icons do a gentle "breathe" scale animation (1.0 -> 1.03 -> 1.0) on scroll-in, mimicking their in-game feel.

### 5C. W2E Icon Cleanup

| Change | Detail |
|---|---|
| Removed circular holder | Cleaner, aligned with toolbar rhythm |
| Text changed to "Free" | "Free" converts better than "+60 coins" |
| Visual alignment with toolbar | Consistent padding/spacing with adjacent buttons |

**Figma Frame:** W2e icon (54:1270)

**Reasoning from Figma:**
- Visuals: w2e icon on game board is visually different from homescreen version (recognition over recall). Too many tones in the same colour family. Bottom section has multiple buttons using different shades of similar tones — visually overwhelms users.
- Alignment: w2e icon lacks visual alignment with adjacent UI buttons, disrupting balance and layout harmony. Padding & spacing differs from surrounding buttons, breaking rhythm.
- Text change: "Free" text leads to better conversions than "+60 coins".

**Visual Treatment:**
- Close-up comparison of the bottom toolbar before and after
- **Micro-interaction:** Smooth crossfade transition between before/after states on scroll.

### 5D. Gameplay Feedback

| Change | Detail |
|---|---|
| Match gratification text | "On a Roll!", "Awesome!", "Amazing!" text animations on consecutive matches |
| Rack fill feedback | Visual cue when tiles land in the rack |

**Figma Frame:** Gratification text (54:1291)

**Reasoning from Figma:**
- All about adding feedback to the gameplay experience
- Feedback visibility & avoid overlapping with other UI elements

**Visual Treatment:**
- Animated GIF or short embedded video showing the gratification text in action
- **Micro-interaction:** The gratification text ("On a Roll!") plays its actual pop-in animation within the case study itself — scales up from 0 with slight overshoot bounce + sparkle particles.

---

## SECTION 6: The Final Design

### Content
- Full polished "After" screen shown in a device mockup
- Annotated version highlighting all changes in one unified view
- Show how all changes work together as a system, not isolated fixes

### Visual Treatment
- Large centered phone mockup with a clean shadow
- Numbered annotation dots that expand on hover to show the change description
- **Micro-interaction:** The phone mockup tilts slightly following the cursor (3D perspective tilt). Annotation dots pulse gently in sequence like a heartbeat.

---

## SECTION 7: Impact & Results

### Content
- Metrics improvements (fill in actual data):
  - Session length increase
  - Retention improvement (D1, D7, D30)
  - Ad views uplift
  - Engagement metrics (matches per session, power-up usage rate)
  - Reduction in mistap-related complaints
- If A/B test data exists, mention the methodology briefly

### Visual Treatment
- Large metric cards with numbers front and center
- Before/After metric comparison bars
- **Micro-interaction:** Numbers animate counting up from 0 to final value when scrolled into view. Metric bars grow from left to right with an easing curve. Subtle confetti burst when the biggest metric finishes counting.

---

## SECTION 8: Learnings & Reflections

### Content
- Key takeaways:
  - "Small, principled UI changes can compound into significant business impact"
  - "In casual gaming, the puzzle screen IS the product — every pixel matters"
  - "UX principles from web/app design (Fitts's, Jakob's, Gestalt) translate powerfully to game UI"
- What you'd do differently / what's next

### Visual Treatment
- Quote-style pull-out for the key insight
- **Micro-interaction:** A gentle typewriter effect on the key quote as it enters the viewport.

---

## SECTION 9: Footer / Next Case Study

### Content
- Link to other case studies (e.g., the Quest System case study in Case_study01)
- Contact/portfolio links

### Visual Treatment
- Clean, minimal footer
- **Micro-interaction:** "Next case study" card with a peek/slide animation on hover

---

## Global Visual & Interaction Design Notes

### Typography & Color
- Clean sans-serif (Poppins — consistent with Case_study01)
- Minimal palette: dark text, white/light gray backgrounds, one accent color pulled from the game's UI
- Section dividers: subtle gradient lines or soft geometric shapes, not harsh rules

### Global Micro-Interactions
- **Scroll-triggered fade-ins** — All content blocks fade up + translate 20px as they enter viewport (use `IntersectionObserver`)
- **Smooth scroll** between nav sections
- **Sticky nav** that shrinks on scroll with a frosted glass backdrop
- **Progress bar** at the very top of the page showing reading progress
- **Image lazy loading** with a soft blur-to-sharp transition
- **Cursor trail** — optional, very subtle dot trail on desktop for premium feel (use sparingly)

### Device Mockups
- All phone screenshots should be in realistic device frames (iPhone or generic)
- Consistent shadow and angle across all mockups
- Before screenshots slightly desaturated/dimmed; After screenshots full vibrancy

---

## Summary of All Changes from Figma

### Changes on Tile Rack
1. Bigger rack size + tint behind rack
2. Rack position moved above tile set
3. Rack holder introduced (with darker slot colors)

### Changes of Tile Size
1. Bigger tile size
2. Reduced gutter spacing (supporting change)

### Changes on W2E Icon
1. Removed circular holder
2. Updated purple banner with "Free" text
3. Visual alignment with adjacent buttons

### Changes on Power Ups
1. Circular power-up holders
2. Color scheme aligned with game UI
3. Extra slot redesigned to match power-ups
4. Jewel notification refinement (smaller, red, bottom-right)
5. Bigger power-up size + closer to tile set
6. Neutral-toned power-ups on game board
7. Improvised power-up holder UI (thicker bottom, thinner top)
8. Removed level number holder and hard level tagging

### Changes on Gameplay Feedback
1. Text gratification on making matches ("On a Roll!", "Awesome!", "Amazing!")
2. Rack fill feedback
