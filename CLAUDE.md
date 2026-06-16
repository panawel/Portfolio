# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

React 19 + TypeScript + Vite single-page QA portfolio for Idan Pnuel. Deployed to GitHub Pages.

```bash
npm run dev        # dev server
npm run build      # tsc + vite build
npm run deploy     # build + push to gh-pages branch
```

**Live URL:** `<username>.github.io/Portfolio/` — Vite base is `/Portfolio/` (set in `vite.config.ts`).

## File Structure

```
src/
  main.tsx                   # StrictMode entry
  index.css                  # CSS variables, global resets, utility classes, .blink animation
  App.tsx                    # video background (responsive: mobile/tablet/desktop sources) + Layout + all sections
  components/
    Layout.tsx               # 80px fixed left sidebar (6 icons: Home/About/Stack/Projects/Certs/Contact); bottom bar on mobile ≤768px
    Hero.tsx                 # terminal typing effect, experience counter ("X yrs Y mo"), confetti fireworks, scroll hint
    About.tsx                # glass card with AI tools icons (Gemini, Antigravity, ChatGPT, Claude)
    Stack.tsx                # 4 category cards with SVG icons from public/media/symbols/myStack/
    Projects.tsx             # card grid with mouse-tracking glow → opens ProjectModal
    ProjectModal.tsx         # slide-in right panel; sticky left sidebar + scrolling right body
    Certificates.tsx         # lightbox gallery with carousel, Framer layoutId transitions
    Contact.tsx              # section 05 — glass card with LinkedIn / Email / GitHub buttons
  data/
    homeData.ts              # hero copy, about paragraphs, stack categories, certificates media list
    projectsData.ts          # 7 projects as ProjectData[]; section content stored as HTML strings
public/
  favicon.svg                # QA-themed cyan checkmark on dark background
  og-image.svg               # 1200×630 branded social share image
  icons.svg
  media/
    desktop.mp4              # background video for desktop (≥1024px)
    tablet.mp4               # background video for tablet (769px–1024px)
    mobile.mp4               # background video for mobile (≤768px)
    symbols/                 # PNG icons for testing types (E2E, Functional, API, CRUD, etc.)
    symbols/myStack/         # SVG icons for tech stack (Playwright, Python, Jira, Claude, Gemini, etc.)
    certificates/            # "QA Engineer Certification" (6 images + 1 video) + "Certificate of Excellence" (7 images)
    Baba Casino/             # 400x400ia-75.webp (logo), Baba_Wild_Slot_image.png
    Singal/                  # signal-on-phone-handheld-hero-smaller.jpg, logo.png, 2 GIFs
    BIGI/                    # screenshots, logo, hfjon...png (used as both logo and heroImage)
    Carrefour/               # Capture.JPG, logo.png
    Leumi Goodies/           # Body_13.jpg, 1200x600wa (1).png
    Paybox/                  # logo.png, 2 GIFs (InShot..., unnamed...), unnamed (1).gif
    PLANET/                  # Sala_kinowa_2.jpg, logo.png, site.JPG, 3 others
    SMART CRM/               # 2023-07-03 01_02_19.067+0300.jpg, logo.png
    Match Mania/             # Match_Mania_image.png, image.jpg — NO project entry yet (future project)
```

## Architecture

### Data Flow

All content lives in `src/data/`. Components are purely presentational.

- `homeData.ts` — hero, about, stack, certificates
- `projectsData.ts` — array of `ProjectData` objects. Each project has: `id`, `title`, `subtitle`, `logo`, `heroImage`, `overviewText`, `techStack[]`, `sections[]`, `resultsList[]`, `brandColor`.

**Sections content is raw HTML strings** stored in `sections[].contentHtml`. Rendered via `dangerouslySetInnerHTML` in `ProjectModal.tsx`. The HTML uses CSS class names that must be defined in ProjectModal's inline `<style>` block to render correctly.

### Asset Path Convention

Project logo/hero paths in `projectsData.ts` are written as `"../media/..."`. At runtime they are resolved with:
```ts
project.logo.replace('../', import.meta.env.BASE_URL)
```
When adding new asset references, follow this same `../media/...` pattern.

### Styling Architecture

Three layers, all co-existing:
1. **`src/index.css`** — global CSS variables, resets, utility classes (`.card`, `.badge`, `.btn-primary`, `.glass`, `.container`, `.section-padding`, `.text-gradient`, `.mono`)
2. **Inline `<style>` JSX blocks** — component-scoped styles injected as `<style>` tags at render time. Used in Layout, Hero, Stack, Projects, ProjectModal, Certificates.
3. **Inline `style={}` props** — one-off overrides on individual elements.

No CSS Modules, no Tailwind, no styled-components.

### CSS Variables (defined in `index.css` `:root`)

```css
--bg-main: #060608
--bg-surface: rgba(15, 15, 19, 0.6)
--accent-cyan: #00f3ff
--accent-green: #00ff88
--text-main: #ffffff
--text-secondary: #e2e8f0
--text-muted: #9ca3af
--border-color: rgba(255, 255, 255, 0.08)
--font-sans: 'Outfit', sans-serif
--font-mono: 'JetBrains Mono', monospace
```

### Responsive Breakpoints

- `> 768px`: Sidebar is 80px fixed left column; `main` has `margin-left: 80px`
- `≤ 768px`: Sidebar becomes 60px bottom bar; `main` has no left margin, `padding-bottom: 80px`

### ProjectModal Layout

At `≥ 900px`: two-column flex row — 35% sticky left sidebar (logo, title, badges, overview) + 65% scrolling right body (hero image, sections).  
At `< 900px`: single column stacked.

### Projects Grid

`Projects.tsx` marks index 0 and index 3 as `.featured` — these span 2 columns on `≥ 768px`. Currently: Baba Casino (index 0) and Paybox (index 3) are featured.

### Special Interactions

- **Baba Casino modal** — fires 14–19 animated SVG gold coins on open (1s delay) and on hero image click.
- **Hero experience counter** — animates from 0 to current total months, displays as "X yrs Y mo". Start date hardcoded as `new Date('2023-09-01')`.
- **Confetti fireworks** — triggered by clicking the experience counter badge.

## Known Issues / TODOs

| Issue | Status | Notes |
|-------|--------|-------|
| `.blink` class undefined | ✅ Fixed | Added `@keyframes blink` + `.blink` rule to `index.css` |
| Unstyled modal classes | ✅ Fixed | Added all ~25 missing CSS rules to `ProjectModal.tsx` `<style>` block |
| Experience counter math | ✅ Fixed | Replaced float format with "X yrs Y mo" using total-months counter |
| Mobile/tablet video unused | ✅ Fixed | `App.tsx` uses responsive `<source media>` for all three video files |
| No contact section | ✅ Fixed | Added `Contact.tsx` (section 05) + `Mail` icon to sidebar |
| No OG/meta tags | ✅ Fixed | Full og/twitter tags in `index.html`; `public/og-image.svg` created |
| Favicon was Claude branding | ✅ Fixed | Replaced with QA cyan checkmark SVG |
| `recharts` unused | ✅ Fixed | Removed from `package.json` |
| `any[]` type for coins | ✅ Fixed | Replaced with typed `Coin` interface in `ProjectModal.tsx` |
| Match Mania | 🔜 Future | Assets in `public/media/Match Mania/` — no `projectsData.ts` entry yet |

## Dependencies

```json
"dependencies": {
  "@types/canvas-confetti": "^1.9.0",
  "canvas-confetti": "^1.9.4",    // fireworks in Hero
  "framer-motion": "^12.40.0",    // all animation
  "lucide-react": "^1.17.0",      // icons (note: no Linkedin/Github icons — Contact uses inline SVGs)
  "react": "^19.2.6",
  "react-dom": "^19.2.6"
}
```
