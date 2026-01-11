
import React from 'react';
import { CheckCircle, ArrowLeft, Linkedin, Github, Rocket, Mail, Calendar } from 'lucide-react';

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-darkBg flex items-center justify-center p-4 relative overflow-hidden transition-colors duration-500">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-saffron/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brandBlue/10 blur-[120px] rounded-full animate-pulse"></div>

      <div className="max-w-3xl w-full relative z-10">
        <div className="glass p-8 md:p-16 rounded-[3rem] border border-gray-100 dark:border-white/10 shadow-2xl text-center">
          <div className="w-24 h-24 bg-gradient-to-tr from-saffron to-brandBlue rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-saffron/20 animate-in zoom-in-50 duration-500">
            <CheckCircle size={48} className="text-white" />
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            Success<span className="text-saffron">!</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
            Thank you for reaching out. Your message has been received and prioritized. I usually respond within <span className="text-saffron font-bold text-2xl px-2">24 hours</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
            <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/5">
              <div className="flex items-center space-x-3 mb-3">
                <Mail className="text-saffron" size={20} />
                <h3 className="text-gray-900 dark:text-white font-bold">Check your Inbox</h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                I've sent a confirmation to your email. If you don't see it, check your spam folder.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/5">
              <div className="flex items-center space-x-3 mb-3">
                <Calendar className="text-brandBlue" size={20} />
                <h3 className="text-gray-900 dark:text-white font-bold">Fast-Track</h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Need an immediate response? Connect with me on LinkedIn for direct messaging.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="/" 
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-saffron hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold transition-all transform hover:-translate-y-1 shadow-xl shadow-saffron/20"
            >
              <ArrowLeft size={20} />
              <span>Back to Portfolio</span>
            </a>
            
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/iafzalhameed/" target="_blank" className="p-4 bg-gray-50 dark:bg-white/5 rounded-2xl text-gray-400 hover:bg-brandBlue hover:text-white transition-all border border-gray-100 dark:border-white/5">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/iafzalhameed" target="_blank" className="p-4 bg-gray-50 dark:bg-white/5 rounded-2xl text-gray-400 hover:bg-black hover:text-white transition-all border border-gray-100 dark:border-white/5">
                <Github size={24} />
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 dark:border-white/5 flex items-center justify-center space-x-2 text-gray-400 dark:text-gray-500 text-xs uppercase tracking-widest font-bold">
            <Rocket size={14} className="text-saffron" />
            <span>Afzal Hameed • Sparq IT Services</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
