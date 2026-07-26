import { useEffect } from 'react';
import Lenis from 'lenis';
import { setLenis } from './lib/lenisInstance';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stack } from './components/Stack';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
function App() {
  useEffect(() => {
    // Respect reduced-motion: skip Lenis entirely and leave native scrolling in place.
    // Every scrollTo call site falls back to scrollIntoView when getLenis() is null.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      smoothWheel: true,
      syncTouch: false,
      lerp: 0.1,
      prevent: (node: HTMLElement) =>
        node.classList.contains('modal-scroll-area') ||
        !!node.closest('.modal-content'),
    });
    setLenis(lenis);

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  // Stop decoding the background video while the tab is hidden.
  useEffect(() => {
    const video = document.querySelector<HTMLVideoElement>('.video-bg');
    if (!video) return;
    const onVisibility = () => {
      if (document.hidden) video.pause();
      else video.play().catch(() => {});
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  return (
    <>
      <a href="#home" className="skip-link">Skip to main content</a>

      <video
        className="video-bg"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={`${import.meta.env.BASE_URL}media/bg-poster.webp`}
      >
        <source src={`${import.meta.env.BASE_URL}media/mobile.mp4`}  type="video/mp4" media="(max-width: 768px)" />
        <source src={`${import.meta.env.BASE_URL}media/tablet.mp4`}  type="video/mp4" media="(max-width: 1024px)" />
        <source src={`${import.meta.env.BASE_URL}media/desktop.mp4`} type="video/mp4" />
      </video>
      <div className="video-overlay" />

      <Layout>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Certificates />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
