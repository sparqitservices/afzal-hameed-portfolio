
import React from 'react';
import { Rocket, Linkedin, Github, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white dark:bg-darkBg border-t border-gray-100 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-8 md:space-y-0">
          <div className="flex items-center space-x-3">
            <Rocket className="text-saffron w-8 h-8" />
            <span className="text-2xl font-display font-bold text-gray-900 dark:text-white">Afzal<span className="text-saffron">.</span></span>
          </div>

          <div className="flex space-x-8">
            <a href="#about" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Journey</a>
            <a href="#contact" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/iafzalhameed/" target="_blank" className="p-3 bg-gray-50 dark:bg-white/5 rounded-full text-gray-500 dark:text-gray-400 hover:bg-saffron hover:text-white transition-all"><Linkedin size={20} /></a>
            <a href="https://github.com/iafzalhameed" target="_blank" className="p-3 bg-gray-50 dark:bg-white/5 rounded-full text-gray-500 dark:text-gray-400 hover:bg-black hover:text-white transition-all"><Github size={20} /></a>
            <a href="#" className="p-3 bg-gray-50 dark:bg-white/5 rounded-full text-gray-500 dark:text-gray-400 hover:bg-brandBlue hover:text-white transition-all"><Twitter size={20} /></a>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 dark:text-gray-500 text-sm font-medium">
            © 2026 Afzal Hameed. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-gray-400 dark:text-gray-500 text-sm font-medium">
            <span>Built with</span>
            <Heart size={14} className="text-saffron animate-pulse" />
            <span>React + Next.js + Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
