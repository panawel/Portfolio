import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stack } from './components/Stack';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';

function App() {
  return (
    <>
      <video className="video-bg" autoPlay loop muted playsInline>
        <source src="/media/desktop.mp4" type="video/mp4" />
      </video>
      <div className="video-overlay" />
      
      <Layout>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Certificates />
      </Layout>
    </>
  );
}

export default App;
