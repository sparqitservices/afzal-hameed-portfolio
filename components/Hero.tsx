
import React, { useEffect, useState } from 'react';
import { ChevronDown, FileText, Layout, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    "Full-Stack Developer",
    "React & Next.js Specialist",
    "AI Automation Expert",
    "Founder of Sparq IT Services"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 100 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-white dark:bg-darkBg overflow-hidden pt-28 pb-20 transition-colors duration-500">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.04] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-10 flex justify-center">
          <div className="relative p-1 rounded-full bg-gradient-to-tr from-saffron via-brandBlue to-purple-500 shadow-2xl">
            <div className="bg-white dark:bg-darkBg rounded-full p-0.5 overflow-hidden w-32 h-32 md:w-56 md:h-56 shadow-inner group relative">
              <img 
                src="https://picsum.photos/seed/afzal-final/600" 
                alt="Afzal Hameed" 
                className="w-full h-full object-cover rounded-full transition-all duration-700 group-hover:scale-110"
              />
            </div>

            {/* Founder Badge */}
            <div className="absolute bottom-1 -right-1 md:bottom-4 md:-right-4 bg-saffron text-white py-1.5 px-4 rounded-xl shadow-lg border-4 border-white dark:border-darkBg flex items-center space-x-1.5 transition-transform hover:scale-110">
              <Sparkles size={12} className="animate-pulse" />
              <span className="text-[10px] md:text-[12px] font-black uppercase tracking-tight whitespace-nowrap">FOUNDER & LEAD DEV</span>
            </div>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="flex justify-center items-center mb-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Available for Hire</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-8xl font-display font-black mb-4 tracking-tighter text-gray-900 dark:text-white">
          Afzal <span className="text-saffron">Hameed</span>
        </h1>
        
        <div className="h-10 md:h-12 mb-10 flex items-center justify-center">
          <p className="text-xl md:text-3xl text-gray-700 dark:text-gray-200 font-bold tracking-tight">
            {text}<span className="text-saffron animate-pulse ml-1">|</span>
          </p>
        </div>

        <p className="max-w-3xl mx-auto text-gray-500 dark:text-gray-400 text-base md:text-xl mb-12 leading-relaxed">
          Building scalable web applications with React, Next.js, and AI automation. <br className="hidden md:block"/>
          8+ years of experience delivering 15+ production apps for startups and enterprises.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <a 
            href="#projects" 
            className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-saffron hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold transition-all transform hover:-translate-y-1 shadow-2xl shadow-saffron/20 active:scale-95 text-lg"
          >
            <Layout size={20} />
            <span>View Projects</span>
          </a>
          <a 
            href="/resume.pdf" 
            className="w-full sm:w-auto flex items-center justify-center space-x-3 border-2 border-brandBlue text-brandBlue hover:bg-brandBlue hover:text-white px-10 py-5 rounded-2xl font-bold transition-all transform hover:-translate-y-1 shadow-xl shadow-brandBlue/10 active:scale-95 text-lg"
          >
            <FileText size={20} />
            <span>Download Resume</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-30 hover:opacity-100 transition-opacity">
        <a href="#about" aria-label="Scroll Down">
          <ChevronDown size={36} className="text-gray-400 dark:text-slate-500" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
