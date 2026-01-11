
import React, { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Testimonials from './components/Testimonials';
import Subscribe from './components/Subscribe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import CustomCursor from './components/CustomCursor';
import ThankYou from './components/ThankYou';
import ProjectDetails from './components/ProjectDetails';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'thank-you' | 'project-details'>('home');
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const isInitialRender = useRef(true);

  // Function to handle smooth scrolling to a section
  const scrollToSection = (hash: string) => {
    const targetElement = document.querySelector(hash);
    if (targetElement) {
      const offset = 100; // Height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: isInitialRender.current ? 'auto' : 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      if (hash === '#thank-you') {
        setCurrentView('thank-you');
        window.scrollTo(0, 0);
      } else if (hash.startsWith('#project/')) {
        const id = hash.split('/')[1];
        setActiveProjectId(id);
        setCurrentView('project-details');
        window.scrollTo(0, 0);
      } else {
        // Switching back to home
        setCurrentView('home');
        
        // If there's a section hash (like #projects), scroll to it after the view update
        if (hash && hash !== '#hero' && hash !== '') {
          // Delay slightly to allow React to render the Home components
          setTimeout(() => {
            scrollToSection(hash);
            isInitialRender.current = false;
          }, 10);
        }
      }
    };

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    // Initial check
    handleHashChange();

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        if (anchor.hash === '#thank-you' || anchor.hash.startsWith('#project/')) return;

        // If we are already on home view, just smooth scroll
        if (currentView === 'home') {
          e.preventDefault();
          scrollToSection(anchor.hash);
          window.history.pushState(null, '', anchor.hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [currentView]);

  // Determine what the main content is
  let content;
  if (currentView === 'thank-you') {
    content = <ThankYou />;
  } else if (currentView === 'project-details' && activeProjectId) {
    content = <ProjectDetails projectId={activeProjectId} />;
  } else {
    content = (
      <>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Testimonials />
          <Subscribe />
          <Contact />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <div className="min-h-screen selection:bg-saffron/30 selection:text-white transition-colors duration-300">
      <CustomCursor />
      
      {content}

      {/* Global Floating Actions Overlay (Right Side) */}
      {currentView !== 'thank-you' && (
        <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-center space-y-4">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`glass p-3 rounded-full bg-white/80 dark:bg-darkBg/80 hover:bg-saffron hover:text-white dark:hover:bg-saffron transition-all duration-300 border border-black/5 dark:border-white/10 shadow-xl group ${
              showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
            }`}
            aria-label="Back to Top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
          
          <AIChat />
        </div>
      )}
    </div>
  );
};

export default App;
