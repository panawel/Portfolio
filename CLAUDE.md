# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # dev server at localhost:5173/Portfolio/
npm run build      # tsc -b && vite build (must pass before deploy)
npm run deploy     # build + push dist/ to gh-pages branch → goes live
npm run lint       # eslint
```

**Live URL:** `https://panawel.github.io/Portfolio/` — Vite base is `/Portfolio/` (vite.config.ts).

## Architecture

### Data Flow

All content lives in `src/data/` — components are purely presentational.

- `homeData.ts` — hero copy, about text, stack categories, certificates list
- `projectsData.ts` — `ProjectData[]` (7 projects). Each has: `id`, `title`, `subtitle`, `logo`, `heroImage`, `overviewText`, `techStack[]`, `sections[]`, `resultsList[]`, `brandColor`.

**`sections[].contentHtml` is raw HTML.** Rendered via `dangerouslySetInnerHTML` in `ProjectModal.tsx`. Every CSS class used in that HTML must be defined in ProjectModal's inline `<style>` block (~25 rules already there).

### Asset Paths

Paths in `projectsData.ts` use `"../media/..."`. At runtime, resolved via:
```ts
project.logo.replace('../', import.meta.env.BASE_URL)
```
Always follow this pattern when adding new asset references.

### Styling — Three Layers

1. **`src/index.css`** — CSS variables (`:root`), resets, global utilities: `.card`, `.badge`, `.btn-primary`, `.glass`, `.container`, `.section-padding`, `.text-gradient`, `.mono`, `.blink`
2. **Inline `<style>` JSX blocks** — component-scoped CSS injected at render time (Layout, Hero, Projects, ProjectModal, Certificates, Contact)
3. **Inline `style={}` props** — one-off per-element overrides

No CSS Modules, no Tailwind, no styled-components.

### CSS Variables (`src/index.css :root`)

```
--bg-main: #060608              --accent-cyan: #00f3ff
--bg-surface: rgba(15,15,19,0.6)  --accent-green: #00ff88
--text-main: #ffffff            --border-color: rgba(255,255,255,0.08)
--text-secondary: #e2e8f0       --font-sans: 'Outfit', sans-serif
--text-muted: #9ca3af           --font-mono: 'JetBrains Mono', monospace
```

### Responsive Breakpoints

- `> 768px` — sidebar is 80px fixed left; `main` has `margin-left: 80px`
- `≤ 768px` — sidebar becomes 60px fixed bottom bar; `main` has `padding-bottom: 80px`

**Viewport height:** All `position: fixed` full-screen elements use both `height: 100vh` (fallback) and `height: 100dvh` (override) to handle iOS/Android browser chrome correctly. The modal scroll area also has `padding-bottom: env(safe-area-inset-bottom, 0px)` for the iPhone home indicator.

### Smooth Scroll — Lenis

Lenis is initialised in `App.tsx` via a RAF loop (`smoothWheel: true`, `syncTouch: false`). The instance is stored in `src/lib/lenisInstance.ts` and accessed anywhere via `getLenis()`.

```ts
import { getLenis } from '../lib/lenisInstance';
getLenis()?.scrollTo('#section-id');
```

**Critical:** Lenis uses `prevent` to exempt `.modal-scroll-area` and `.modal-content` from its wheel capture — this is what allows the project modal to scroll internally. Do not remove this option.

### Magnetic Buttons — `MagneticWrapper`

`src/components/MagneticWrapper.tsx` wraps any element to make it drift toward the cursor on hover (Framer Motion springs). Auto-disabled on touch devices (`pointer: coarse` → renders children directly with no wrapper). Applied to: sidebar nav icons (`strength: 0.35`), Hero CTA (`strength: 0.4`), Contact buttons (`strength: 0.3`).

### Entrance Animations

All `whileInView` sections use: `initial={{ opacity: 0, y: 8 }}`, `duration: 0.25`, `viewport={{ once: true, margin: '0px 0px -30px 0px' }}`. Project cards stagger at `delay: index * 0.05`.

### ProjectModal

Slide-in right panel (`exit={{ x: '100%' }}`, spring). Two separate layers:
- `motion.div.modal-backdrop` — fades in/out independently (`opacity: 0↔1`, `duration: 0.35s`)
- `div.modal-overlay` — transparent positioning container only

At `≥ 900px`: two-column — 35% sticky sidebar + 65% scrolling body.
At `< 900px`: single column stacked.

### Special Interactions

- **Baba Casino modal** — fires 14–19 SVG gold coins on open (1s delay) and on hero image click. Typed as `Coin[]` interface.
- **Hero experience counter** — animates 0 → total months, renders as "X yrs Y mo". Start date: `2023-09-01`.
- **Confetti fireworks** — `canvas-confetti`, triggered by clicking the experience counter badge.
- **Press feedback** — `whileTap` on project cards, cert frames, contact buttons; CSS `button:active, a:active { transform: scale(0.94) }` for all others.
- **Tap highlight** — `* { -webkit-tap-highlight-color: transparent }` removes blue flash on mobile/tablet.

### Projects Grid

Index 0 (Baba Casino) and index 3 (Paybox) are `.featured` — span 2 columns at `≥ 768px`.

## File Structure (non-obvious parts)

```
src/
  lib/
    lenisInstance.ts     # module-level Lenis instance store (setLenis / getLenis)
  components/
    MagneticWrapper.tsx  # magnetic hover effect, auto-disabled on touch
    Contact.tsx          # section 05 — inline SVG icons for LinkedIn/GitHub (lucide has none)
public/
  media/
    Match Mania/         # assets exist but NO projectsData.ts entry yet (future project)
```

## Dependencies

```
lenis ^1.3.23            smooth scroll
framer-motion ^12.40.0   all animation (whileInView, whileTap, springs, layoutId)
canvas-confetti ^1.9.4   fireworks in Hero
lucide-react ^1.17.0     icons — no Linkedin/Github icons, Contact uses inline SVGs
```
