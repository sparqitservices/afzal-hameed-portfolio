
import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Sun, Moon, Linkedin, Github, Mail, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-out ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#hero" className="flex items-center space-x-2 group relative z-[110]">
              <div className="w-10 h-10 bg-saffron rounded-xl flex items-center justify-center text-white shadow-lg shadow-saffron/20 group-hover:rotate-12 transition-transform">
                <Rocket size={20} />
              </div>
              <span className="text-2xl font-display font-black text-gray-900 dark:text-white">Afzal<span className="text-saffron">.</span></span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`transition-all font-bold text-[11px] uppercase tracking-[0.2em] ${
                      activeSection === link.href.slice(1) 
                        ? 'text-saffron' 
                        : 'text-gray-500 dark:text-gray-400 hover:text-saffron dark:hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="flex items-center space-x-4 border-l border-gray-200 dark:border-white/5 pl-8">
                <button 
                  onClick={toggleTheme}
                  className="p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-gray-500 dark:text-gray-400"
                  aria-label="Toggle Theme"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <a
                  href="#contact"
                  className="bg-saffron hover:bg-orange-600 text-white px-6 py-2.5 rounded-xl font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-saffron/20 text-sm"
                >
                  Let's Talk
                </a>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center space-x-2 relative z-[110]">
              <button 
                onClick={toggleTheme} 
                className="p-2 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={`p-2.5 rounded-xl transition-all duration-300 ${isOpen ? 'bg-saffron text-white' : 'bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white'}`}
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[90] md:hidden transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute top-0 left-0 w-full h-full bg-white dark:bg-[#091526]">
          <div className="absolute top-[-10%] left-[-20%] w-[80%] h-[60%] bg-saffron/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-20%] w-[80%] h-[60%] bg-brandBlue/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="relative h-full flex flex-col justify-between px-8 py-24 overflow-y-auto">
          <div className="flex flex-col space-y-4 mt-8">
            <p className="text-saffron font-bold text-[10px] uppercase tracking-[0.3em] mb-4 opacity-60">Navigation</p>
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`group flex items-center justify-between py-2 transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                style={{ transitionDelay: `${100 + i * 100}ms` }}
              >
                <span className="text-5xl font-display font-black text-gray-900 dark:text-white group-hover:text-saffron transition-colors tracking-tighter">
                  {link.name}
                </span>
                <ArrowRight className="text-gray-300 dark:text-white/20 group-hover:text-saffron group-hover:translate-x-2 transition-all" size={32} />
              </a>
            ))}
          </div>

          <div className={`space-y-8 pt-12 border-t border-gray-100 dark:border-white/5 transition-all duration-700 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-500 font-bold text-[10px] uppercase tracking-widest">Connect</p>
                <div className="flex space-x-4">
                  <a href="https://linkedin.com/in/iafzalhameed" className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-brandBlue hover:text-white transition-all">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://github.com/iafzalhameed" className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-black hover:text-white transition-all">
                    <Github size={20} />
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray-500 font-bold text-[10px] uppercase tracking-widest">Inquiry</p>
                <a href="mailto:iafzalhameed@gmail.com" className="flex items-center space-x-2 text-gray-900 dark:text-white font-medium hover:text-saffron transition-colors">
                  <Mail size={16} className="text-saffron" />
                  <span className="text-sm">Email Afzal</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
