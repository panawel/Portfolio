import type { ReactNode } from 'react';
import { Terminal, User, Code2, FolderGit2, Award, Mail } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout" style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '2rem 0', marginLeft: '80px', transition: 'margin 0.3s ease' }}>
        {children}
      </main>
      
      <style>{`
        .sidebar {
          width: 80px;
          height: 100vh;
          position: fixed;
          left: 0;
          top: 0;
          background: var(--bg-surface);
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem 0;
          z-index: 50;
        }
        
        .nav-link {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          color: var(--text-muted);
          margin-bottom: 1rem;
          transition: all 0.2s ease;
        }
        
        .nav-link:hover {
          background: rgba(37, 99, 235, 0.1);
          color: var(--accent-cyan);
        }
        
        .logo {
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--text-main);
          margin-bottom: 3rem;
          text-align: center;
        }
        .logo span {
          color: var(--accent-cyan);
        }

        @media (max-width: 768px) {
          .sidebar {
            width: 100%;
            height: 60px;
            top: auto;
            bottom: 0;
            flex-direction: row;
            justify-content: space-around;
            padding: 0;
            border-right: none;
            border-top: 1px solid var(--border-color);
          }
          .logo {
            display: none;
          }
          .nav-link {
            margin-bottom: 0;
          }
          main {
            margin-left: 0 !important;
            padding-bottom: 80px !important;
          }
        }
      `}</style>
    </div>
  );
};

const Sidebar = () => (
  <nav className="sidebar">
    <div className="logo">IP<span>.</span></div>
    
    <a href="#home" className="nav-link" title="Home">
      <Terminal size={24} />
    </a>
    <a href="#about" className="nav-link" title="About">
      <User size={24} />
    </a>
    <a href="#stack" className="nav-link" title="Tech Stack">
      <Code2 size={24} />
    </a>
    <a href="#projects" className="nav-link" title="Projects">
      <FolderGit2 size={24} />
    </a>
    <a href="#certificates" className="nav-link" title="Certificates">
      <Award size={24} />
    </a>
    <a href="#contact" className="nav-link" title="Contact">
      <Mail size={24} />
    </a>
  </nav>
);
