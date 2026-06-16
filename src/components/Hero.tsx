
import { homeData } from '../data/homeData';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { MagneticWrapper } from './MagneticWrapper';
import { getLenis } from '../lib/lenisInstance';
import confetti from 'canvas-confetti';

export const Hero = () => {
  const [terminalText, setTerminalText] = useState('');
  const [experienceMonths, setExperienceMonths] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const isAnimating = useRef(false);
  const fullText = '> Running test_portfolio.py... [PASSED] 100%';

  useEffect(() => {
    // Terminal typing effect
    let i = 0;
    const typingTimer = setInterval(() => {
      setTerminalText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typingTimer);
    }, 50);

    // Experience counter animation
    const startDate = new Date('2023-09-01');
    const now = new Date();
    let diffYears = now.getFullYear() - startDate.getFullYear();
    let diffMonths = now.getMonth() - startDate.getMonth();
    if (diffMonths < 0) { diffYears--; diffMonths += 12; }
    const targetMonths = diffYears * 12 + diffMonths;

    let current = 0;
    const counterInterval = setInterval(() => {
      current++;
      if (current >= targetMonths) {
        current = targetMonths;
        clearInterval(counterInterval);
      }
      setExperienceMonths(current);
    }, 50);

    // Scroll listener for the scroll-down hint
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearInterval(typingTimer);
      clearInterval(counterInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const triggerFireworks = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#00f3ff', '#00ff88']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#00f3ff', '#00ff88']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      } else {
        isAnimating.current = false;
      }
    };
    frame();
  };

  const { hero } = homeData;

  return (
    <section id="home" className="container" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
      <div style={{ maxWidth: '800px' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge" style={{ marginBottom: '1.5rem' }}>
            {hero.subtitle}
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}
          dangerouslySetInnerHTML={{ __html: hero.title }}
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mono"
          style={{ 
            color: 'var(--accent-green)', 
            marginBottom: '1rem', 
            fontSize: 'clamp(0.55rem, 3vw, 0.9rem)', 
            minHeight: '1.5em',
            whiteSpace: 'nowrap'
          }}
        >
          {terminalText}<span className="blink">_</span>
        </motion.p>
        
        <motion.div 
          className="glass" 
          style={{ 
            padding: 'clamp(0.5rem, 2vw, 1rem) clamp(1rem, 3vw, 2rem)', 
            borderRadius: '32px', 
            marginBottom: '2.5rem', 
            display: 'inline-flex',
            justifyContent: 'center',
            textAlign: 'center',
            alignItems: 'center',
            gap: '0.5rem',
            cursor: 'pointer',
            border: '1px solid rgba(0, 243, 255, 0.3)',
            boxShadow: '0 0 15px rgba(0, 243, 255, 0.1)',
            whiteSpace: 'nowrap'
          }}
          onClick={triggerFireworks}
          whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 243, 255, 0.2)' }}
          whileTap={{ scale: 0.95 }}
        >
          <span style={{ color: 'var(--text-main)', fontSize: 'clamp(0.75rem, 3.5vw, 1.25rem)', fontWeight: 500 }}>
            Celebrating <span style={{ color: 'var(--accent-cyan)', fontWeight: 700, textShadow: '0 0 10px rgba(0, 243, 255, 0.4)' }}>{Math.floor(experienceMonths / 12)} yrs {experienceMonths % 12} mo</span> as a QA Engineer!
          </span>
          <span style={{ fontSize: 'clamp(1.1rem, 4.5vw, 1.4rem)' }}>🎉</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <MagneticWrapper strength={0.4}>
            <a href="#projects" className="btn-primary">
              View Projects <ChevronRight size={20} />
            </a>
          </MagneticWrapper>
        </motion.div>
      </div>
      
      {/* Scroll Down Hint */}
      <motion.div
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          marginLeft: '-16px', /* Center it cleanly since size is 32 */
          pointerEvents: isScrolled ? 'none' : 'auto',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: 'var(--text-muted)'
        }}
        onClick={() => {
          getLenis()?.scrollTo('#projects') ?? document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>

      <style>{`
        #home h1 span.text-gradient {
          display: inline-block;
        }
        @media (max-width: 768px) {
          #home {
            align-items: flex-start !important;
            padding-top: 8vh !important;
          }
          .scroll-hint {
            bottom: 140px !important;
          }
        }
      `}</style>
    </section>
  );
};
