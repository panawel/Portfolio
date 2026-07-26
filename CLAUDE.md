# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # dev server at localhost:5173/Portfolio/
npm run build      # tsc -b && vite build (must pass before deploy)
npm run deploy     # build + push dist/ to gh-pages branch → goes live
npm run lint       # eslint
npm run test:e2e   # Puppeteer regression suite — needs `npm run dev` running first
```

`test:e2e` (`scripts/regression.mjs`) covers the bugs this site has actually
shipped: hero double-scroll, background scrolling behind the modal/lightbox,
overlays escaping the viewport, and navigation under `prefers-reduced-motion`.
It asserts **geometry as well as behaviour** — an earlier behaviour-only suite
passed 20/20 while the modal was visually broken.

**Live URL:** `https://panawel.github.io/Portfolio/` — Vite base is `/Portfolio/` (vite.config.ts).

**Deploying: pushing to `main` does NOT update the live site.** There are no GitHub Actions in this repo. `main` holds source only; GitHub Pages serves the **`gh-pages`** branch, which is written solely by `npm run deploy` (`predeploy` builds first). Publishing is therefore always an explicit, separate step after pushing.

To confirm a deploy actually landed, compare the hashed bundle name the live site serves against the local build output — Pages can also cache for a minute or two:

```bash
curl -s https://panawel.github.io/Portfolio/ | grep -oE 'assets/index-[A-Za-z0-9_-]+\.js'
```

## Architecture

### Data Flow

All content lives in `src/data/` — components are purely presentational.

- `homeData.ts` — hero copy, about text, stack categories, certificates list
- `projectsData.ts` — `ProjectData[]` (8 projects, in order: `babaCasino`, `bigi`, `carrefour`, `leumi-goodies`, `paybox`, `planet`, `signal`, `smart-crm`). Each has: `id`, `title`, `subtitle`, `logo`, `heroImage`, `overviewText`, `techStack[]`, `sections[]`, `resultsList[]`, `brandColor`.

**`sections[].contentHtml` is raw HTML.** Rendered via `dangerouslySetInnerHTML` in `ProjectModal.tsx`. Every CSS class used in that HTML must be defined in ProjectModal's inline `<style>` block (~25 rules already there).

### Asset Paths

Paths in `projectsData.ts` use `"../media/..."`. At runtime, resolved via:
```ts
project.logo.replace('../', import.meta.env.BASE_URL)
```
Always follow this pattern when adding new asset references.

**Weight matters here — `public/` is ~31 MB and ships wholesale to `dist/`.** Anything placed in `public/` is deployed, so keep backups and working files outside it (see `media-originals/`). Known outstanding: the Signal and Paybox GIFs are ~16 MB combined (single files of 9.4 MB and 6.1 MB) and load when those project modals open. The fix is GIF→MP4/WebM, which needs `ffmpeg` (not currently installed). Icons should be a few KB — one was previously a 2.3 MB SVG wrapping 10 base64 rasters.

### Styling — Three Layers

1. **`src/index.css`** — CSS variables (`:root`), resets, global utilities: `.card`, `.badge`, `.btn-primary`, `.glass`, `.container`, `.section-padding`, `.text-gradient`, `.mono`, `.blink`
2. **Inline `<style>` JSX blocks** — component-scoped CSS injected at render time (Layout, Hero, Projects, ProjectModal, Certificates, Contact)
3. **Inline `style={}` props** — one-off per-element overrides

No CSS Modules, no Tailwind, no styled-components.

### CSS Variables (`src/index.css :root`)

```
--bg-main: #0d0f14              --accent-cyan: #00f3ff
--bg-surface: rgba(28,32,41,.65)  --accent-green: #00ff88
--text-main: #ffffff            --border-color: rgba(255,255,255,0.12)
--text-secondary: #e2e8f0       --font-sans: 'Outfit', sans-serif
--text-muted: #b0bac7           --font-mono: 'JetBrains Mono', monospace

Elevation:  --surface-1/2/3  +  --shadow-1/2/3  +  --edge-highlight
```

### Background scrim — do not use `mix-blend-mode: multiply`

`.video-overlay` sits over the background video. It previously used
`rgba(8,12,20,0.85)` + `mix-blend-mode: multiply`, which collapsed the video
from **16.2% to 0.76% luminance (21×)** — the cause of the site reading as
near-black. It is now two normal-blend gradients:

1. **Left→right scrim** protecting the hero text column. Without it the green
   terminal line measures **3.61:1** against bright video patches — below AA.
2. **Top→bottom scrim**, brighter mid-frame so the video stays visible.

Alpha compounds across stacked layers as `1-(1-a1)(1-a2)` — a third layer will
darken the page far more than its number suggests. **Re-measure after any change:**
screenshot with text hidden, then check the brightest 98th-percentile background
behind each text zone. Targets: small text ≥ 4.5:1, large text ≥ 3:1.

`--text-muted` is tied to this. At the current background, the old `#9ca3af`
measured **4.43:1 (fails AA)**; `#b0bac7` measures 5.73:1. Brightening the
background further requires lifting muted text again.

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

**Critical:** `getLenis()?.scrollTo(target)` returns `void`. Never chain it with `??` as a fallback — the fallback always runs, firing a second competing scroll animation. Branch on the instance instead (see `Hero.tsx`).

### Scroll Locking — `useScrollLock`

`src/lib/useScrollLock.ts` is the single way to lock page scroll behind an overlay. `body { overflow: hidden }` alone is **not** enough: Lenis scrolls the window programmatically, which `overflow: hidden` does not block — so Lenis must be stopped too.

```ts
useScrollLock(isLocked);   // stops Lenis + sets body overflow, restores both on unlock
```

Used by `ProjectModal` (`useScrollLock(true)` — mounted only while open) and `Certificates` (`useScrollLock(!!selectedCert)`).

Safe to combine with `prevent`: Lenis checks `prevent` *before* `isStopped`, so `.modal-scroll-area` keeps scrolling natively while the rest of the page is locked.

### Magnetic Buttons — `MagneticWrapper`

`src/components/MagneticWrapper.tsx` wraps any element to make it drift toward the cursor on hover (Framer Motion springs). Auto-disabled on touch devices (`pointer: coarse` → renders children directly with no wrapper). Applied to: sidebar nav icons (`strength: 0.35`), Hero CTA (`strength: 0.4`), Contact buttons (`strength: 0.3`).

### Reduced Motion

`@media (prefers-reduced-motion: reduce)` in `index.css` neutralises transitions,
the blink cursor, and the bouncing chevron, and hides the background video.
`App.tsx` **skips Lenis initialisation entirely** in that case — so every
`getLenis()` call site must branch (`if (lenis) … else scrollIntoView`), never
`getLenis()?.scrollTo(...) ?? fallback`. `Hero.tsx` and `Layout.tsx` both do this.
Under reduced motion `useScrollLock` falls back to `body overflow` alone, which is
sufficient because Lenis is not running.

### Entrance Animations

All `whileInView` sections use: `initial={{ opacity: 0, y: 8 }}`, `duration: 0.25`, `viewport={{ once: true, margin: '0px 0px -30px 0px' }}`. Project cards stagger at `delay: index * 0.05`.

### ⚠️ Never give a section `content-visibility` or `contain`

`ProjectModal` and the `Certificates` lightbox are `position: fixed` **descendants
of their `<section>`**. Any ancestor with `content-visibility`, `contain`, or a
`transform`/`filter`/`backdrop-filter` becomes their containing block, and the
overlay gets trapped inside the section box instead of covering the viewport.

This shipped once: `content-visibility: auto` on `.section-padding` put the modal
backdrop at `(160, 2563)` and shrank the lightbox to `1200×814`. It also measured
*slower* (layout 15.6ms vs 6.2ms). `scripts/regression.mjs` now asserts both
overlays' rects equal the viewport, on desktop and mobile.

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

`Projects.tsx` hardcodes `index === 0 || index === 3` as `.featured` (spans 2 columns at `≥ 768px`) — currently **Baba Casino** and **Leumi Goodies**. This is positional, not tied to project `id`, so reordering `projects[]` silently moves the featured treatment onto different projects.

## File Structure (non-obvious parts)

```
src/
  lib/
    lenisInstance.ts     # module-level Lenis instance store (setLenis / getLenis)
    useScrollLock.ts     # overlay scroll lock — stops Lenis + body overflow
media-originals/         # pre-optimization asset backups; OUTSIDE public/ so
                         # Vite does not copy them into dist/. Gitignored.
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
