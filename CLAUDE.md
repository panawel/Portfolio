# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML/CSS/JS portfolio website for Idan Pnuel (QA Engineer). No build system, bundler, or package manager — open `index.html` directly in a browser or serve with any static file server.

```bash
# Serve locally (pick any available tool)
python3 -m http.server 8000
# or
npx serve .
```

## File Structure

```
index.html                  # Main portfolio page (single-page with anchor sections)
projects/                   # 8 individual project detail pages
  babaCasino.html, paybox.html, signal.html, smart-crm.html,
  planet.html, leumi-goodies.html, carrefour.html, bigi.html
css/
  style.css                 # Global styles, sidebar, glassmorphism theme, CSS variables
  projects.css              # Project card grid + project-detail-hero layout
  about_enhancement.css     # About section enhancements
  carousel.css              # Carousel component styles
js/
  main.js                   # Shared JS loaded only on project pages (NOT index.html)
  carousel.js               # Carousel component
media/                      # Images, videos, SVG logos per project subfolder
```

## Architecture

### Two Distinct JS Contexts

**`index.html`** has all its logic **inlined** in a `<script>` tag at the bottom. It does NOT load `js/main.js`. Key functions: `initSidebarNavigation()`, `initProjectsSubmenu()`, `initExperienceCounter()`, `initFireworksTrigger()`, `initScrollHint()`, `initAnimateOnScroll()`.

**Project pages** (`projects/*.html`) each have their own inline `<script>` block with page-specific logic (casino coins, planet parallax, etc.), plus shared functions inlined per-page: `initSidebarNavigation()`, `initProjectsSubmenu()`, `initOtherProjectsGallery()`. They do NOT load `js/main.js` either — `main.js` is effectively unused dead code.

### Sidebar Navigation

The sidebar (`<nav class="sidebar" id="sidebar">`) is duplicated in all 9 HTML files. Key behaviors:
- **Desktop (>1024px)**: Fixed 260px left column. Scroll spy marks active nav item.
- **Mobile/tablet (≤1024px)**: Becomes a floating island pill at the top, horizontal layout.
- **Projects submenu**: The "Projects" nav item (`#nav-projects-toggle`) has a chevron and an adjacent `#nav-projects-submenu` div with links to all 8 project pages. On project pages it auto-opens and highlights the current project. `initProjectsSubmenu()` handles this — it is inlined in every HTML file.

### CSS Variables (in `style.css` `:root`)

```css
--bg-dark, --bg-card, --bg-glass, --glass-border, --glass-border-light
--text-main, --text-muted
--accent-primary (#38bdf8), --accent-secondary (#818cf8), --accent-tertiary (#c084fc)
--accent-gradient: linear-gradient(135deg, primary, secondary, tertiary)
--transition-fast: 0.3s cubic-bezier(0.3, 0, 0.2, 1)
--glass-shadow, --glass-inset
```

### Responsive Breakpoints

- `> 1024px`: Desktop — sidebar on left, `main-content` has `margin-left: 260px`
- `≤ 1024px`: Mobile/tablet — sidebar becomes floating top island, `main-content` has no left margin
- `≤ 768px`: Mobile — additional overrides (font sizes, orb sizes, etc.)

### Project Detail Hero Padding

`projects.css` sets `.project-detail-hero` padding-top:
- Desktop (default): `2.5rem` (no top nav)
- Tablet (`≤1024px`): `13rem` (floating island nav overlaps)
- Mobile (`≤768px`): `7rem`

`babaCasino.html` overrides this with its own inline `<style>` block — any changes to the hero padding for that page must be made there, not just in `projects.css`.

### No Shared HTML Components

The sidebar HTML is copy-pasted across all 9 files. When modifying the sidebar (nav items, submenu links, footer), **all 9 files must be updated**: `index.html` + all 8 `projects/*.html`.

- `index.html` submenu links use `projects/babaCasino.html` (relative from root)
- Project page submenu links use `babaCasino.html` (relative, same directory)
- Project page media references use `../media/...`

### Body Class

Project pages have `<body class="is-project-page">`. CSS uses this for the amber-colored active "Projects" back-button style on mobile.
