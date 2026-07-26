/**
 * End-to-end regression suite.
 *
 *   npm run dev          # in one terminal (must be on :5173)
 *   npm run test:e2e     # in another
 *
 * Covers the bugs this site has actually shipped:
 *   - double-scroll on the hero hint (`??` on a void-returning scrollTo)
 *   - background scrolling behind the modal / lightbox
 *   - overlays escaping the viewport when an ancestor gains containment
 *   - navigation dying under prefers-reduced-motion (Lenis is skipped there)
 */
import puppeteer from 'puppeteer';

const URL = process.env.E2E_URL || 'http://localhost:5173/Portfolio/';
const results = [];
const check = (name, pass, detail = '') => results.push({ name, pass, detail });
const wait = ms => new Promise(r => setTimeout(r, ms));

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required'],
});

/** Assert a fixed overlay actually covers the viewport. */
function checkGeometry(prefix, g) {
  const { viewport: v } = g;
  for (const [name, r] of Object.entries(g.rects)) {
    if (!r) { check(`${prefix}: ${name} exists`, false, 'element not found'); continue; }
    const originOk = r.l === 0 && r.t === 0;
    const sizeOk = Math.abs(r.w - v.w) <= 1 && Math.abs(r.h - v.h) <= 1;
    check(
      `${prefix}: ${name} covers viewport`,
      originOk && sizeOk,
      `rect=(${r.l},${r.t}) ${r.w}x${r.h} vs viewport ${v.w}x${v.h}`
    );
  }
}

const rectProbe = `(sel) => { const e=document.querySelector(sel); if(!e) return null;
  const b=e.getBoundingClientRect();
  return {l:Math.round(b.left),t:Math.round(b.top),w:Math.round(b.width),h:Math.round(b.height)}; }`;

// ───────────────────────────── NORMAL MOTION ─────────────────────────────
{
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(URL, { waitUntil: 'networkidle2' });
  await wait(1200);

  check('Lenis initialises (normal motion)',
    await page.evaluate(() => document.documentElement.classList.contains('lenis')));

  // a11y + lazy on a CLEAN page (the lightbox later injects a deliberately eager image)
  const a11y = await page.evaluate(async () => {
    const sl = document.querySelector('.skip-link');
    sl.focus();
    await new Promise(r => setTimeout(r, 500)); // let the reveal transition finish
    const rect = sl.getBoundingClientRect();
    sl.blur();
    return {
      skipVisible: rect.top >= 0 && rect.height > 0,
      nonLazy: [...document.images].filter(i => i.loading !== 'lazy').length,
      total: document.images.length,
    };
  });
  check('Skip link reveals on focus', a11y.skipVisible);
  check('All content images lazy-loaded', a11y.nonLazy === 0 && a11y.total > 0,
    `${a11y.total - a11y.nonLazy}/${a11y.total}`);

  // hero hint must fire exactly one scroll
  await page.evaluate(() => {
    window.__siv = 0;
    const o = Element.prototype.scrollIntoView;
    Element.prototype.scrollIntoView = function (...a) { window.__siv++; return o.apply(this, a); };
  });
  await page.evaluate(() => document.querySelector('.scroll-hint').click());
  await wait(2200);
  const hint = await page.evaluate(() => ({
    siv: window.__siv,
    y: Math.round(window.scrollY),
    target: Math.round(document.getElementById('projects').getBoundingClientRect().top + window.scrollY),
  }));
  check('Scroll hint: no double-scroll', hint.siv === 0, `scrollIntoView calls=${hint.siv}`);
  check('Scroll hint: lands on #projects', Math.abs(hint.y - hint.target) < 3, `y=${hint.y} target=${hint.target}`);

  // ---- project modal ----
  await page.evaluate(() => document.querySelectorAll('.project-card')[1].click());
  await wait(1000);

  // GEOMETRY: the regression that a behaviour-only suite missed
  checkGeometry('Modal', await page.evaluate((probe) => {
    const r = eval(probe);
    return { viewport: { w: innerWidth, h: innerHeight },
             rects: { backdrop: r('.modal-backdrop'), overlay: r('.modal-overlay') } };
  }, rectProbe));

  const locked = await page.evaluate(async () => {
    const before = Math.round(window.scrollY);
    const el = document.querySelector('.modal-overlay');
    for (let i = 0; i < 6; i++) el.dispatchEvent(new WheelEvent('wheel', { deltaY: 120, bubbles: true, cancelable: true }));
    await new Promise(r => setTimeout(r, 1000));
    return { stopped: document.documentElement.classList.contains('lenis-stopped'), moved: Math.round(window.scrollY) - before };
  });
  check('Modal: Lenis stopped', locked.stopped);
  check('Modal: background does not scroll', locked.moved === 0, `moved=${locked.moved}px`);

  const inner = await page.evaluate(() => {
    const sa = document.querySelector('.modal-scroll-area');
    const y0 = Math.round(window.scrollY), t0 = sa.scrollTop;
    sa.scrollTop = 400;
    return { internal: sa.scrollTop - t0, bg: Math.round(window.scrollY) - y0 };
  });
  check('Modal: internal scroll still works', inner.internal > 0 && inner.bg === 0, `inner=+${inner.internal} bg=${inner.bg}`);

  await page.evaluate(() => document.querySelector('.close-btn').click());
  await wait(900);
  const released = await page.evaluate(() => ({
    cls: document.documentElement.className.trim(), ov: document.body.style.overflow || '(empty)',
  }));
  check('Modal: lock released on close', !released.cls.includes('stopped') && released.ov === '(empty)', JSON.stringify(released));

  // ---- Baba Casino coins ----
  const coins = await page.evaluate(async () => {
    const count = () => [...document.querySelectorAll('svg')]
      .filter(s => s.getAttribute('viewBox') === '0 0 100 100' && s.querySelector('#coinFace')).length;
    document.querySelectorAll('.project-card')[0].click();
    const seen = [];
    for (let i = 0; i < 22; i++) { await new Promise(r => setTimeout(r, 150)); seen.push(count()); }
    return { peak: Math.max(...seen), heroIsWebp: !!document.querySelector('.modal-hero-image')?.getAttribute('src')?.includes('.webp') };
  });
  check('Baba Casino: coins fire on open', coins.peak > 0, `peak=${coins.peak}`);
  check('Baba Casino: hero image is webp', coins.heroIsWebp);
  await page.evaluate(() => document.querySelector('.close-btn')?.click());
  await wait(800);

  // ---- certificate lightbox ----
  await page.evaluate(() => document.querySelectorAll('.cert-frame')[0].click());
  await wait(1000);

  checkGeometry('Lightbox', await page.evaluate((probe) => {
    const r = eval(probe);
    return { viewport: { w: innerWidth, h: innerHeight },
             rects: { backdrop: r('.lightbox-backdrop'), wrapper: r('.lightbox-content-wrapper') } };
  }, rectProbe));

  const lb = await page.evaluate(async () => {
    const before = Math.round(window.scrollY);
    const el = document.querySelector('.lightbox-content-wrapper');
    for (let i = 0; i < 6; i++) el.dispatchEvent(new WheelEvent('wheel', { deltaY: 120, bubbles: true, cancelable: true }));
    await new Promise(r => setTimeout(r, 1000));
    const out = { stopped: document.documentElement.classList.contains('lenis-stopped'), moved: Math.round(window.scrollY) - before };
    document.querySelector('.lightbox-close').click();
    await new Promise(r => setTimeout(r, 800));
    out.releasedCls = document.documentElement.className.trim();
    return out;
  });
  check('Lightbox: Lenis stopped', lb.stopped);
  check('Lightbox: background does not scroll', lb.moved === 0, `moved=${lb.moved}px`);
  check('Lightbox: released on close', !lb.releasedCls.includes('stopped'));

  const focusRing = await page.evaluate(() => {
    const el = document.querySelector('.nav-link');
    el.focus();
    const st = getComputedStyle(el);
    return { width: st.outlineWidth, style: st.outlineStyle };
  });
  check('Focus-visible ring present', parseFloat(focusRing.width) >= 2 && focusRing.style !== 'none', JSON.stringify(focusRing));

  await page.close();
}

// ───────────────────────────── MOBILE GEOMETRY ─────────────────────────────
{
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto(URL, { waitUntil: 'networkidle2' });
  await wait(1200);
  await page.evaluate(() => document.querySelectorAll('.project-card')[1].click());
  await wait(1000);
  checkGeometry('[mobile] Modal', await page.evaluate((probe) => {
    const r = eval(probe);
    return { viewport: { w: innerWidth, h: innerHeight },
             rects: { backdrop: r('.modal-backdrop'), overlay: r('.modal-overlay') } };
  }, rectProbe));
  await page.close();
}

// ───────────────────────────── REDUCED MOTION ─────────────────────────────
{
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  await page.goto(URL, { waitUntil: 'networkidle2' });
  await wait(1200);

  check('[RM] Lenis skipped under reduced motion',
    await page.evaluate(() => !document.documentElement.classList.contains('lenis')));

  const nav = await page.evaluate(async () => {
    const before = Math.round(window.scrollY);
    document.querySelector('a[title="Projects"]').click();
    await new Promise(r => setTimeout(r, 900));
    return { before, after: Math.round(window.scrollY),
             target: Math.round(document.getElementById('projects').getBoundingClientRect().top + window.scrollY) };
  });
  check('[RM] Sidebar navigation still scrolls', nav.after !== nav.before, `y ${nav.before} -> ${nav.after}`);
  check('[RM] Navigation lands on target', Math.abs(nav.after - nav.target) < 5, `after=${nav.after} target=${nav.target}`);

  const rmLock = await page.evaluate(async () => {
    document.querySelectorAll('.project-card')[1].click();
    await new Promise(r => setTimeout(r, 700));
    const ov = document.body.style.overflow;
    document.querySelector('.close-btn').click();
    await new Promise(r => setTimeout(r, 700));
    return { lockedOverflow: ov, releasedOverflow: document.body.style.overflow || '(empty)' };
  });
  check('[RM] Modal still locks scroll', rmLock.lockedOverflow === 'hidden', JSON.stringify(rmLock));
  check('[RM] Modal lock released', rmLock.releasedOverflow === '(empty)');

  await page.close();
}

await browser.close();

const passed = results.filter(r => r.pass).length;
console.log('');
for (const r of results) console.log(`${r.pass ? 'PASS' : 'FAIL'}  ${r.name}${r.detail ? '   [' + r.detail + ']' : ''}`);
console.log(`\n${passed}/${results.length} passed`);
process.exit(passed === results.length ? 0 : 1);
