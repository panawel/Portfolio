import { useState } from 'react';
import { projects } from '../data/projectsData';
import type { ProjectData } from '../data/projectsData';
import { ProjectModal } from './ProjectModal';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ project, index, onClick }: { project: ProjectData, index: number, onClick: () => void }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`project-card card ${index === 0 || index === 3 ? 'featured' : ''}`}
      onClick={onClick}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Mouse Tracking Glow */}
      <div 
        style={{
          position: 'absolute',
          top: mousePosition.y,
          left: mousePosition.x,
          width: '400px',
          height: '400px',
          background: `radial-gradient(circle, ${project.brandColor || 'rgba(0, 243, 255, 0.4)'} 0%, transparent 60%)`,
          transform: 'translate(-50%, -50%)',
          opacity: isHovered ? 0.5 : 0,
          transition: 'opacity 0.4s ease',
          pointerEvents: 'none',
          zIndex: 0,
          mixBlendMode: 'screen'
        }}
      />
      
      {/* Content wrapper to stay above the glow */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%', background: 'rgba(10, 15, 25, 0.4)', borderRadius: '16px' }}>
        <div 
          className="card-image"
          style={{ padding: project.id === 'planet' ? '0.5rem' : '2rem' }}
        >
          <img src={project.logo.replace('../', import.meta.env.BASE_URL)} alt={project.title} />
        </div>
        <div className="card-content">
          <h3>{project.title || project.id}</h3>
          <p>{project.subtitle}</p>
          <div className="badges">
            {project.techStack.slice(0, 4).map((tech, j) => (
              <span key={j} className="badge">{tech}</span>
            ))}
            {project.techStack.length > 4 && <span className="badge">+{project.techStack.length - 4}</span>}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const selectedProject = projects.find(p => p.id === selectedProjectId);

  return (
    <section id="projects" className="container section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span className="mono text-gradient" style={{ fontSize: '1.5rem' }}>03.</span> Projects
        </h2>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={i} 
              onClick={() => setSelectedProjectId(project.id)} 
            />
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProjectId(null)} 
          />
        )}
      </AnimatePresence>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
          gap: 2rem;
          grid-auto-rows: 1fr;
        }

        .project-card {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          padding: 0 !important; /* Remove generic card padding so image goes to edges */
          border: 1px solid rgba(255,255,255,0.05);
        }

        @media (min-width: 768px) {
          .project-card.featured {
            grid-column: span 2;
          }
          .project-card.featured .card-image {
            height: 240px;
          }
          .project-card.featured .card-content h3 {
            font-size: 1.75rem;
          }
        }

        .card-image {
          height: 180px;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px 16px 0 0;
          transition: height 0.3s ease;
        }

        .card-image img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 4px 10px rgba(0,0,0,0.6));
          transition: transform 0.4s ease;
        }

        .project-card:hover .card-image img {
          transform: scale(1.05);
        }

        .card-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .card-content h3 {
          font-size: 1.4rem;
          margin-bottom: 0.75rem;
          color: var(--text-main);
        }

        .card-content p {
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
      `}</style>
    </section>
  );
};
