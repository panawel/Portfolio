import { useState, useEffect } from 'react';
import { homeData } from '../data/homeData';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import type { HomeData } from '../data/homeData';

type Certificate = HomeData['certificates'][0];

export const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [mediaIndex, setMediaIndex] = useState(0);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedCert]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedCert) return;
    setMediaIndex((prev) => (prev + 1) % selectedCert.media.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedCert) return;
    setMediaIndex((prev) => (prev - 1 + selectedCert.media.length) % selectedCert.media.length);
  };

  const openLightbox = (cert: Certificate) => {
    setSelectedCert(cert);
    setMediaIndex(0);
  };

  const closeLightbox = () => {
    setSelectedCert(null);
  };

  return (
    <section id="certificates" className="container section-padding" style={{ paddingBottom: '10rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px -30px 0px' }}
        transition={{ duration: 0.25 }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span className="mono text-gradient" style={{ fontSize: '1.5rem' }}>04.</span> Certificates & Events
        </h2>

        {/* Gallery View */}
        <div className="certs-gallery">
          {homeData.certificates.map((cert) => (
            <motion.div 
              key={cert.title}
              layoutId={`cert-container-${cert.title}`}
              className="cert-frame glass"
              onClick={() => openLightbox(cert)}
              whileHover={{ scale: 1.02, y: -10 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="cert-image-preview">
                {cert.media[0].type === 'image' ? (
                  <motion.img 
                    layoutId={`cert-media-${cert.title}`}
                    src={cert.media[0].src.replace('../', '/')} 
                    alt={cert.title} 
                  />
                ) : (
                  <motion.video
                    layoutId={`cert-media-${cert.title}`}
                    src={cert.media[0].src.replace('../', '/')}
                    muted
                  />
                )}
                
                <div className="hover-overlay">
                  <ZoomIn size={48} color="#FFD700" />
                  <span className="mono" style={{ color: '#FFD700', marginTop: '1rem', fontWeight: 600 }}>
                    View Gallery ({cert.media.length})
                  </span>
                </div>
              </div>
              <motion.div className="cert-info" layoutId={`cert-info-${cert.title}`}>
                <h3>{cert.title}</h3>
                <p className="mono text-gradient" style={{ color: '#FFD700' }}>{cert.provider}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox Modal & Carousel */}
      <AnimatePresence>
        {selectedCert && (
          <>
            <motion.div 
              className="lightbox-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            />
            <div className="lightbox-content-wrapper" onClick={closeLightbox}>
              <motion.div 
                className="lightbox-card glass"
                layoutId={`cert-container-${selectedCert.title}`}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the card itself
              >
                <button className="lightbox-close" onClick={closeLightbox}>
                  <X size={32} />
                </button>
                
                <div className="lightbox-image-container">
                  {/* Carousel Controls */}
                  {selectedCert.media.length > 1 && (
                    <>
                      <button className="carousel-nav nav-left" onClick={handlePrev}>
                        <ChevronLeft size={40} />
                      </button>
                      <button className="carousel-nav nav-right" onClick={handleNext}>
                        <ChevronRight size={40} />
                      </button>
                    </>
                  )}

                  {/* Media Content */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={mediaIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      {selectedCert.media[mediaIndex].type === 'image' ? (
                        <motion.img 
                          layoutId={mediaIndex === 0 ? `cert-media-${selectedCert.title}` : undefined}
                          src={selectedCert.media[mediaIndex].src.replace('../', '/')} 
                          alt={`${selectedCert.title} - ${mediaIndex + 1}`} 
                        />
                      ) : (
                        <motion.video
                          layoutId={mediaIndex === 0 ? `cert-media-${selectedCert.title}` : undefined}
                          src={selectedCert.media[mediaIndex].src.replace('../', '/')}
                          controls
                          autoPlay
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* Carousel Indicators */}
                  {selectedCert.media.length > 1 && (
                    <div className="carousel-indicators">
                      {selectedCert.media.map((_, idx) => (
                        <div 
                          key={idx} 
                          className={`indicator-dot ${idx === mediaIndex ? 'active' : ''}`}
                          onClick={(e) => { e.stopPropagation(); setMediaIndex(idx); }}
                        />
                      ))}
                    </div>
                  )}
                </div>
                
                <motion.div className="lightbox-info" layoutId={`cert-info-${selectedCert.title}`}>
                  <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{selectedCert.title}</h3>
                  <p className="mono" style={{ fontSize: '1.2rem', color: '#FFD700' }}>{selectedCert.provider}</p>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        /* Gallery Styles */
        .certs-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 4rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .cert-frame {
          cursor: pointer;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(255, 215, 0, 0.2);
          box-shadow: 0 10px 30px -10px rgba(255, 215, 0, 0.1);
          position: relative;
        }

        .cert-image-preview {
          position: relative;
          height: 300px;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          overflow: hidden;
        }

        .cert-image-preview img, .cert-image-preview video {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.5);
        }

        .hover-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .cert-frame:hover .hover-overlay {
          opacity: 1;
        }

        .cert-info {
          padding: 2rem;
          text-align: center;
          background: rgba(15, 15, 19, 0.8);
        }

        /* Lightbox Styles */
        .lightbox-backdrop {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(20px);
          z-index: 9999;
        }

        .lightbox-content-wrapper {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: 2rem;
        }

        .lightbox-card {
          width: 100%;
          max-width: 1200px;
          height: 90vh;
          border-radius: 24px;
          border: 1px solid rgba(255, 215, 0, 0.4);
          box-shadow: 0 0 50px rgba(255, 215, 0, 0.15);
          display: flex;
          flex-direction: column;
          position: relative;
          background: var(--bg-main);
          overflow: hidden;
        }

        .lightbox-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 100;
          transition: all 0.2s ease;
        }

        .lightbox-close:hover {
          background: rgba(255, 215, 0, 0.2);
          border-color: rgba(255, 215, 0, 0.5);
          color: #FFD700;
          transform: rotate(90deg);
        }

        .lightbox-image-container {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.5);
          position: relative;
          overflow: hidden;
          padding: 3rem 0;
        }

        .lightbox-image-container img, .lightbox-image-container video {
          max-width: 90%;
          max-height: 100%;
          object-fit: contain;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        }

        /* Carousel Nav Styles */
        .carousel-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 50;
          transition: all 0.2s ease;
        }

        .carousel-nav:hover {
          background: rgba(255, 215, 0, 0.3);
          border-color: rgba(255, 215, 0, 0.5);
          color: #FFD700;
        }

        .nav-left { left: 1rem; }
        .nav-right { right: 1rem; }

        .carousel-indicators {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.5rem;
          z-index: 50;
        }

        .indicator-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator-dot.active {
          background: #FFD700;
          transform: scale(1.3);
          box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
        }

        .lightbox-info {
          padding: 2.5rem;
          text-align: center;
          background: rgba(15, 15, 19, 0.95);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        @media (max-width: 768px) {
          .certs-gallery {
            grid-template-columns: 1fr;
          }
          .carousel-nav {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </section>
  );
};
