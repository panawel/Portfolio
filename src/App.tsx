import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stack } from './components/Stack';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';

function App() {
  return (
    <>
      <video className="video-bg" autoPlay loop muted playsInline>
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
