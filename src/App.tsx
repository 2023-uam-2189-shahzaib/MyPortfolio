import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { TechShowcase } from './components/TechShowcase';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Services } from './sections/Services';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { SmoothScroll } from './components/animations/SmoothScroll';

export function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
        {/* Fixed top utility bar */}
        <TopBar />
        {/* Fixed main navigation */}
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <TechShowcase />
          <About />
          <Skills />
          <Experience />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
