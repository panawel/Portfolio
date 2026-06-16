
import { homeData } from '../data/homeData';
import { motion } from 'framer-motion';

export const Stack = () => {
  return (
    <section id="stack" className="container section-padding">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px -30px 0px' }}
        transition={{ duration: 0.25 }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span className="mono text-gradient" style={{ fontSize: '1.5rem' }}>02.</span> Tech Stack
        </h2>
        
        <div className="stack-grid">
          {homeData.stack.map((category, i) => (
            <div key={i} className="card stack-category">
              <div className="category-header glass">
                <h3 className="mono">{category.categoryTitle}</h3>
              </div>
              <div className="tech-items">
                {category.items.map((item, j) => (
                  <div key={j} className="tech-item">
                    <img src={item.icon.replace('../', '/')} alt={item.name} />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      
      <style>{`
        .stack-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
          gap: 2rem;
        }
        
        .stack-category {
          display: flex;
          flex-direction: column;
        }
        
        .category-header {
          padding: 1.5rem;
          border-bottom: 1px solid var(--border-color);
        }
        
        .category-header h3 {
          font-size: 1.1rem;
          color: var(--accent-green);
        }
        
        .tech-items {
          padding: 1.5rem;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        
        .tech-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .tech-item img {
          width: 24px;
          height: 24px;
          object-fit: contain;
        }
        
        .tech-item span {
          color: var(--text-muted);
          font-size: 0.95rem;
        }
      `}</style>
    </section>
  );
};
