
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="container section-padding">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px -30px 0px' }}
        transition={{ duration: 0.25 }}
        style={{ maxWidth: '900px', margin: '0 auto' }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span className="mono text-gradient" style={{ fontSize: '1.5rem' }}>01.</span> About Me
        </h2>
        
        <div className="glass glass-padding" style={{ borderRadius: '24px', borderTop: '2px solid rgba(0, 243, 255, 0.3)' }}>
          {/* Main Statement */}
          <p style={{ 
            color: 'var(--text-main)', 
            fontSize: 'clamp(1.5rem, 6vw, 2rem)', 
            fontWeight: 700, 
            lineHeight: 1.4, 
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-sans)',
            letterSpacing: '-0.5px',
            textAlign: 'center'
          }}>
            I specialize in reducing bug life cycles and optimizing<br/> workflows with <span style={{ color: 'var(--accent-cyan)', textDecoration: 'underline', textDecorationColor: 'rgba(0, 243, 255, 0.5)', textUnderlineOffset: '6px' }}>AI tools</span>.
          </p>

          {/* AI Symbols */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '3rem', alignItems: 'center' }}>
            <img src={`${import.meta.env.BASE_URL}media/symbols/myStack/Gemini1.svg`} alt="Gemini" style={{ width: '48px', height: '48px', filter: 'drop-shadow(0 0 15px rgba(0, 243, 255, 0.2))' }} />
            <img src={`${import.meta.env.BASE_URL}media/symbols/myStack/Antigravity.svg`} alt="Antigravity" style={{ width: '48px', height: '48px', filter: 'drop-shadow(0 0 15px rgba(0, 243, 255, 0.2))' }} />
            <img src={`${import.meta.env.BASE_URL}media/symbols/myStack/ChatGPT.svg`} alt="ChatGPT" style={{ width: '48px', height: '48px', filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.2))', borderRadius: '12px' }} />
            <img src={`${import.meta.env.BASE_URL}media/symbols/myStack/Claude_AI_symbol.svg`} alt="Claude" style={{ width: '48px', height: '48px', filter: 'drop-shadow(0 0 15px rgba(217, 119, 87, 0.2))' }} />
          </div>

          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: 'clamp(1.05rem, 4vw, 1.25rem)', 
              lineHeight: 1.8, 
              marginBottom: '1.5rem' 
            }}>
              Always eager to master new technologies and tackle dynamic challenges.
            </p>
            
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: 'clamp(1.05rem, 4vw, 1.25rem)', 
              lineHeight: 1.8 
            }}>
              When I'm not testing, I'm exploring new <span style={{ color: 'var(--accent-cyan)', textDecoration: 'underline', textDecorationColor: 'rgba(0, 243, 255, 0.3)', textUnderlineOffset: '4px' }}>tech & gaming</span>.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
