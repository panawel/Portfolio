import { useEffect, useState } from 'react';
import type { ProjectData } from '../data/projectsData';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectModalProps {
  project: ProjectData;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [activeCoins, setActiveCoins] = useState<any[]>([]);

  const fireCoins = () => {
    const newCoins = Array.from({ length: 15 }).map(() => {
      const startX = window.innerWidth / 2;
      const startY = window.innerHeight + 150;
      
      const endX = (Math.random() * window.innerWidth) - 100;
      const peakY = Math.random() * (window.innerHeight * 0.4) - 100;
      
      const isForeground = Math.random() > 0.6;
      const scale = isForeground ? Math.random() * 1.5 + 2.5 : Math.random() * 0.8 + 0.8;
      const blur = isForeground ? `blur(${Math.random() * 4 + 3}px)` : 'none';
      const zIndex = isForeground ? 10000 : 9998;
      
      return {
        id: Math.random().toString(),
        startX,
        startY,
        peakY,
        endX,
        endY: window.innerHeight + 300,
        // Crucial fix: extremely small rotation values so they tumble in ultra-slow motion
        rotateXStart: Math.random() * 90,
        rotateXEnd: Math.random() * 360 * (Math.random() > 0.5 ? 1 : -1), // only 0 to 1 flip!
        rotateYStart: Math.random() * 90,
        rotateYEnd: Math.random() * 360 * (Math.random() > 0.5 ? 1 : -1), // only 0 to 1 flip!
        rotateZStart: Math.random() * 360,
        rotateZEnd: Math.random() * 180, // half a spin
        scale,
        blur,
        zIndex,
        duration: Math.random() * 6 + 10, // 10 to 16 seconds flight
        delay: Math.random() * 2 // stagger over 2 seconds
      };
    });
    
    setActiveCoins(newCoins);
  };

  // Prevent scrolling on body when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    let timeoutId: ReturnType<typeof setTimeout>;
    // Trigger flying coins if Baba Casino with 1 second delay
    if (project.id === 'babaCasino') {
      timeoutId = setTimeout(() => {
        fireCoins();
      }, 1000);
    }

    return () => {
      document.body.style.overflow = 'auto';
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [project.id]);

  const handleContentClick = (e: React.MouseEvent) => {
    if (project.id === 'babaCasino') {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG' && target.getAttribute('src')?.includes('Baba_Wild_Slot_image')) {
        fireCoins();
      }
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* Cinematic Slow Motion Flying Coins Overlay */}
      {activeCoins.map(coin => (
        <motion.div
          key={coin.id}
          initial={{ 
            x: coin.startX, 
            y: coin.startY, 
            rotateX: coin.rotateXStart,
            rotateY: coin.rotateYStart,
            rotateZ: coin.rotateZStart,
            scale: coin.scale,
            filter: coin.blur,
            opacity: 0
          }}
          animate={{ 
            x: coin.endX,
            y: [coin.startY, coin.peakY, coin.endY],
            rotateX: coin.rotateXStart + coin.rotateXEnd,
            rotateY: coin.rotateYStart + coin.rotateYEnd,
            rotateZ: coin.rotateZStart + coin.rotateZEnd,
            opacity: [0, 1, 1, 0] // fade out as they fall off screen
          }}
          transition={{ 
            duration: coin.duration,
            delay: coin.delay,
            x: { duration: coin.duration, delay: coin.delay, ease: "linear" },
            y: { duration: coin.duration, delay: coin.delay, times: [0, 0.4, 1], ease: ["easeOut", "easeIn"] },
            rotateX: { duration: coin.duration, delay: coin.delay, ease: "linear" },
            rotateY: { duration: coin.duration, delay: coin.delay, ease: "linear" },
            rotateZ: { duration: coin.duration, delay: coin.delay, ease: "linear" },
            opacity: { duration: coin.duration, delay: coin.delay, times: [0, 0.1, 0.8, 1] }
          }}
          onAnimationComplete={() => setActiveCoins(prev => prev.filter(c => c.id !== coin.id))}
          style={{ position: 'fixed', zIndex: coin.zIndex, pointerEvents: 'none', top: 0, left: 0 }}
        >
          <svg viewBox="0 0 100 100" style={{ width: '80px', height: '80px', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.7)) drop-shadow(0 0 15px rgba(255, 215, 0, 0.5))' }}>
            <defs>
              <linearGradient id="coinEdge" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B8860B" />
                <stop offset="50%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#8B6508" />
              </linearGradient>
              <linearGradient id="coinFace" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFACD" />
                <stop offset="50%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#DAA520" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="54" r="44" fill="url(#coinEdge)" />
            <circle cx="50" cy="46" r="44" fill="url(#coinFace)" />
            <circle cx="50" cy="46" r="36" fill="none" stroke="#DAA520" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="50" cy="46" r="32" fill="none" stroke="#DAA520" strokeWidth="1" />
            <text x="50" y="65" fontFamily="Arial, sans-serif" fontSize="56" fontWeight="900" fill="#B8860B" textAnchor="middle" style={{ textShadow: '0 2px 4px rgba(255, 255, 255, 0.8)' }}>$</text>
            <ellipse cx="28" cy="24" rx="14" ry="6" fill="rgba(255,255,255,0.6)" transform="rotate(-40 28 24)" />
          </svg>
        </motion.div>
      ))}

      <motion.div 
        className="modal-content"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn glass" onClick={onClose}>
          <X size={24} />
        </button>

        {/* Dynamic Themed Background */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: `radial-gradient(circle at top right, ${project.brandColor || 'rgba(0, 243, 255, 0.15)'} 0%, transparent 60%), radial-gradient(circle at bottom left, ${project.brandColor || 'rgba(0, 243, 255, 0.1)'} 0%, transparent 50%)`,
            opacity: 0.6,
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        <div className="modal-scroll-area" style={{ zIndex: 1, position: 'relative' }}>
          <div className="modal-grid-layout">
            
            {/* Sticky Left Column (Sidebar) */}
            <div className="modal-sidebar">
              <div className="sidebar-sticky-content">
                <img 
                  src={project.logo.replace('../', import.meta.env.BASE_URL)} 
                  alt={project.title} 
                  className="modal-logo" 
                  style={{ height: project.id === 'planet' ? '120px' : '70px', marginBottom: project.id === 'planet' ? '1.5rem' : '2rem' }}
                />
                <h1>{project.title || project.id}</h1>
                <p className="modal-subtitle">{project.subtitle}</p>
                
                <div className="modal-badges" style={{ justifyContent: 'flex-start' }}>
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="badge">{tech}</span>
                  ))}
                </div>

                <div className="modal-section" style={{ marginTop: '3rem', marginBottom: '0' }}>
                  <p className="overview-text">{project.overviewText}</p>
                </div>
              </div>
            </div>

            {/* Scrolling Right Column (Body) */}
            <div className="modal-body-content" onClick={handleContentClick} style={{ cursor: project.id === 'babaCasino' ? 'default' : 'auto' }}>
              {project.heroImage && (
                <img src={project.heroImage.replace('../', import.meta.env.BASE_URL)} alt="Hero" className="modal-hero-image" />
              )}

              {project.sections.map((section, idx) => (
                <div key={idx} className="modal-section">
                  <h2>{section.title}</h2>
                  <div 
                    className="section-content" 
                    dangerouslySetInnerHTML={{ __html: section.contentHtml.replace(/\.\.\//g, import.meta.env.BASE_URL) }} 
                  />
                </div>
              ))}

              {project.resultsList && project.resultsList.length > 0 && (
                <div className="modal-section results-section">
                  <h2>Results</h2>
                  <ul>
                    {project.resultsList.map((res, idx) => (
                      <li key={idx}>{res}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

          </div>
        </div>
      </motion.div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 100;
          display: flex;
          justify-content: flex-end;
        }

        .modal-content {
          width: 100%;
          max-width: 900px;
          height: 100vh;
          background: var(--bg-main);
          border-left: 1px solid var(--border-color);
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .close-btn {
          position: absolute;
          top: 2rem;
          right: 2rem;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          z-index: 10;
          transition: all 0.2s;
        }

        .close-btn:hover {
          color: var(--accent-cyan);
          transform: rotate(90deg);
        }

        .modal-scroll-area {
          overflow-y: auto;
          flex: 1;
        }

        .modal-grid-layout {
          display: flex;
          flex-direction: column;
          padding: 3rem 2rem;
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (min-width: 900px) {
          .modal-grid-layout {
            flex-direction: row;
            padding: 6rem 3rem;
            gap: 5rem;
            align-items: flex-start;
          }
          
          .modal-sidebar {
            width: 35%;
            position: sticky;
            top: 2rem;
          }

          .modal-body-content {
            width: 65%;
          }
        }

        .sidebar-sticky-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .modal-logo {
          height: 70px;
          object-fit: contain;
          margin-bottom: 2rem;
          filter: drop-shadow(0 4px 10px rgba(0,0,0,0.5));
        }

        .sidebar-sticky-content h1 {
          font-size: 3rem;
          margin-bottom: 0.5rem;
          line-height: 1.1;
        }

        .modal-subtitle {
          font-size: 1.15rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          line-height: 1.5;
        }

        .modal-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .modal-hero-image {
          width: 100%;
          border-radius: 16px;
          border: 1px solid var(--border-color);
          margin-bottom: 3rem;
        }

        .modal-section {
          margin-bottom: 4rem;
        }

        .modal-section h2 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: var(--accent-cyan);
          border-left: 4px solid var(--accent-cyan);
          padding-left: 1rem;
        }

        .overview-text {
          font-size: 1.15rem;
          line-height: 1.8;
          color: var(--text-secondary);
        }

        /* Dynamic Content Styles */
        .section-content p {
          margin-bottom: 1rem;
          line-height: 1.8;
          color: var(--text-muted);
        }

        .section-content ul {
          list-style: none;
          padding-left: 0;
          margin-bottom: 1.5rem;
        }

        .section-content li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.75rem;
          color: var(--text-muted);
        }

        .section-content li::before {
          content: "→";
          color: var(--accent-green);
          position: absolute;
          left: 0;
          font-family: var(--font-mono);
        }

        .section-content img {
          max-width: 100%;
          border-radius: 12px;
          margin: 1.5rem 0;
          border: 1px solid var(--border-color);
        }

        /* Specific classes from old design that might be in the HTML */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .service-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 1rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .service-icon {
          width: 32px !important;
          height: 32px !important;
          margin-bottom: 0.5rem !important;
          border: none !important;
        }

        .scope-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .scope-card {
          background: rgba(255, 255, 255, 0.03);
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .scope-card h4 {
          color: var(--accent-green);
          margin-bottom: 1rem;
        }

        .results-section {
          background: rgba(0, 243, 255, 0.05);
          border: 1px solid rgba(0, 243, 255, 0.2);
          border-radius: 16px;
          padding: 2.5rem;
        }

        .results-section h2 {
          border-left: none;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1.5rem;
        }

        .stat-item {
          text-align: center;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: var(--accent-cyan);
          font-family: var(--font-mono);
        }

        .stat-label {
          font-size: 0.85rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .media-gif-row {
          display: flex;
          gap: 1rem;
          overflow-x: auto;
          padding-bottom: 1rem;
        }

        .media-gif-row img {
          max-width: 250px;
          flex-shrink: 0;
        }

        .btn-primary {
          background: var(--accent-cyan);
          color: black;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          display: inline-block;
        }

        @media (max-width: 768px) {
          .modal-grid-layout {
            padding: 4rem 1.5rem 2rem;
          }
          .sidebar-sticky-content {
            text-align: left;
            align-items: flex-start;
          }
          .sidebar-sticky-content h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};
