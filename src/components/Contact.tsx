import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { MagneticWrapper } from './MagneticWrapper';

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

export const Contact = () => {
  return (
    <section id="contact" className="container section-padding">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px -30px 0px' }}
        transition={{ duration: 0.25 }}
        style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span className="mono text-gradient" style={{ fontSize: '1.5rem' }}>05.</span> Contact
        </h2>

        <div
          className="glass"
          style={{
            borderRadius: '24px',
            padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem)',
            borderTop: '2px solid rgba(0, 243, 255, 0.3)',
          }}
        >
          <motion.h3
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.05 }}
            style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-main)' }}
          >
            Let's Connect
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.1 }}
            style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 3vw, 1.15rem)', marginBottom: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.6 }}
          >
            Open to new opportunities and collaborations.
          </motion.p>

          <div className="contact-buttons">
            <MagneticWrapper strength={0.3}>
              <motion.a
                href="https://www.linkedin.com/in/idanpnuel"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn"
                whileHover={{ y: -4, boxShadow: '0 8px 25px rgba(0, 243, 255, 0.15)' }}
                whileTap={{ scale: 0.97 }}
              >
                <LinkedinIcon />
                <span>LinkedIn</span>
              </motion.a>
            </MagneticWrapper>

            <MagneticWrapper strength={0.3}>
              <motion.a
                href="mailto:panawel@gmail.com"
                className="contact-btn"
                whileHover={{ y: -4, boxShadow: '0 8px 25px rgba(0, 243, 255, 0.15)' }}
                whileTap={{ scale: 0.97 }}
              >
                <Mail size={22} />
                <span>Email</span>
              </motion.a>
            </MagneticWrapper>

            <MagneticWrapper strength={0.3}>
              <motion.a
                href="https://github.com/panawel"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn"
                whileHover={{ y: -4, boxShadow: '0 8px 25px rgba(0, 243, 255, 0.15)' }}
                whileTap={{ scale: 0.97 }}
              >
                <GithubIcon />
                <span>GitHub</span>
              </motion.a>
            </MagneticWrapper>
          </div>
        </div>
      </motion.div>

      <style>{`
        .contact-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .contact-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: var(--text-secondary);
          font-size: 1.05rem;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
          min-width: 160px;
        }

        .contact-btn:hover {
          background: rgba(0, 243, 255, 0.08);
          border-color: rgba(0, 243, 255, 0.4);
          color: var(--accent-cyan);
        }

        @media (max-width: 768px) {
          .contact-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .contact-btn {
            min-width: unset;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
