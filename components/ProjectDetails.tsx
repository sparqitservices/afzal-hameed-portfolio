
import React from 'react';
import { projects } from '../data';
import { ArrowLeft, ExternalLink, CheckCircle2, Rocket, Share2, Award, ArrowRight, Layout, Cpu, Globe } from 'lucide-react';
import Footer from './Footer';

interface ProjectDetailsProps {
  projectId: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projectId }) => {
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-darkBg flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-gray-900 dark:text-white text-3xl font-bold mb-4">Project Not Found</h2>
          <a href="/" className="text-saffron flex items-center justify-center gap-2 hover:underline">
            <ArrowLeft size={20} /> Back to Home
          </a>
        </div>
      </div>
    );
  }

  const goBack = () => {
    window.location.hash = 'projects';
  };

  const domain = project.link ? new URL(project.link).hostname : '';

  const getBadge = () => {
    if (project.id === 'fc-property') return '40K+ YouTube Subscribers';
    if (project.id === 'aura-kitchenz') return '450+ Successful Installations';
    if (project.title.toLowerCase().includes('luxury')) return 'Luxury Real Estate Expert';
    return null;
  };

  const badge = getBadge();

  return (
    <div className="bg-white dark:bg-[#091526] min-h-screen transition-colors duration-500 selection:bg-saffron/20 text-gray-900 dark:text-white overflow-x-hidden">
      {/* Top Nav */}
      <nav className="fixed top-0 w-full p-4 md:p-6 z-[70] flex justify-between items-center bg-transparent">
        <button 
          onClick={goBack}
          className="group flex items-center space-x-2 bg-white/80 dark:bg-darkBg/60 backdrop-blur-xl hover:bg-saffron hover:text-white px-5 py-2.5 rounded-2xl text-gray-900 dark:text-white font-bold transition-all border border-gray-200 dark:border-white/10 text-xs md:text-sm shadow-2xl"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </button>
        <div className="flex space-x-2">
          <button className="p-3 bg-white/80 dark:bg-darkBg/60 backdrop-blur-xl rounded-2xl text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all border border-gray-200 dark:border-white/10 shadow-2xl">
            <Share2 size={18} />
          </button>
        </div>
      </nav>

      {/* Hero Header with Image */}
      <div className="relative w-full h-[60vh] md:h-[75vh] min-h-[450px] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        {/* Dark Shadow Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
        
        {/* Title & Domain Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20 z-10">
          <div className="max-w-7xl mx-auto space-y-4">
            {badge && (
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-green-500/20 backdrop-blur-md border border-green-500/30 text-green-400 text-[10px] md:text-xs font-black uppercase tracking-widest">
                <Award size={14} />
                <span>{badge}</span>
              </div>
            )}
            <h1 className="text-4xl md:text-8xl font-display font-black text-white leading-[1] tracking-tighter break-words drop-shadow-2xl">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-100">
               {project.link && (
                 <div className="flex items-center space-x-2 bg-brandBlue/20 backdrop-blur-md border border-brandBlue/30 px-4 py-1.5 rounded-full">
                   <Globe size={14} className="text-brandBlue" />
                   <span className="text-xs md:text-sm font-bold tracking-tight break-all uppercase">
                     {domain}
                   </span>
                 </div>
               )}
               <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full">
                 <Cpu size={14} className="text-saffron" />
                 <span className="text-xs md:text-sm font-bold uppercase tracking-widest">{project.category} ENGINE</span>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Side: Overview & Features */}
          <div className="lg:col-span-7 space-y-16">
            <div className="space-y-8">
              <h2 className="text-[#3A88F3] font-black text-xs uppercase tracking-[0.4em] flex items-center space-x-3">
                <span className="w-10 h-[2px] bg-brandBlue rounded-full"></span>
                <span>The Challenge & Solution</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-xl md:text-2xl leading-relaxed font-medium">
                {project.description}
              </p>
            </div>

            <div className="space-y-10">
              <h2 className="text-[#3A88F3] font-black text-xs uppercase tracking-[0.4em] flex items-center space-x-3">
                <span className="w-10 h-[2px] bg-brandBlue rounded-full"></span>
                <span>Core Innovation</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start space-x-4 group p-6 bg-gray-50 dark:bg-white/5 rounded-[2rem] border border-gray-200 dark:border-white/5 hover:border-brandBlue/20 transition-all shadow-xl">
                    <div className="mt-1 w-7 h-7 rounded-xl bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-500 border border-green-500/20 group-hover:bg-green-500 group-hover:text-white transition-all flex-shrink-0">
                      <CheckCircle2 size={16} />
                    </div>
                    <p className="text-gray-700 dark:text-gray-200 font-bold text-lg leading-tight">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Tech Stack & CTA */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
            <div className="bg-gray-50 dark:bg-[#0c1c33] p-10 rounded-[3rem] border border-gray-200 dark:border-white/5 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Cpu size={120} />
              </div>
              <h2 className="text-gray-900 dark:text-white font-black text-xs uppercase tracking-[0.4em] mb-10 relative z-10">PROPRIETARY STACK</h2>
              <div className="flex flex-wrap gap-3 relative z-10">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-5 py-2.5 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl text-[10px] text-gray-500 dark:text-gray-300 font-black uppercase tracking-widest hover:bg-brandBlue hover:text-white hover:border-brandBlue transition-all cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.link && (
              <div className="p-[2px] rounded-[3rem] bg-gradient-to-br from-[#F15A24] to-[#8b5cf6] shadow-2xl shadow-saffron/10 group">
                <div className="bg-white dark:bg-[#091526] rounded-[2.9rem] p-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-saffron/10 rounded-3xl flex items-center justify-center text-saffron mb-8 group-hover:rotate-12 transition-transform duration-500">
                    <Rocket size={32} />
                  </div>
                  <h4 className="text-gray-900 dark:text-white font-black text-3xl mb-4 tracking-tighter">Live Experience</h4>
                  <p className="text-gray-500 dark:text-gray-500 text-sm mb-10 leading-relaxed max-w-[250px]">
                    See how Afzal engineered this solution for real-world performance.
                  </p>
                  
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-3 bg-saffron hover:bg-orange-600 text-white px-10 py-6 rounded-[2rem] font-black transition-all transform hover:-translate-y-2 shadow-2xl shadow-saffron/30 active:scale-95 text-lg"
                  >
                    <ExternalLink size={24} />
                    <span>Launch App</span>
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            )}

            <div className="bg-gray-50 dark:bg-white/5 p-10 rounded-[3rem] border border-gray-200 dark:border-white/5 text-center group hover:bg-white/[0.08] transition-colors">
               <h4 className="text-gray-900 dark:text-white font-black text-xl mb-3 tracking-tight">Need a scalable solution?</h4>
               <p className="text-gray-500 dark:text-gray-500 text-sm mb-8 leading-relaxed">Let's discuss how Afzal's expertise can transform your business vision into a high-performance product.</p>
               <a href="#contact" className="inline-flex items-center space-x-2 text-saffron font-black text-xs uppercase tracking-[0.3em] group-hover:translate-x-1 transition-transform">
                 <span>Start a Conversation</span>
                 <ArrowRight size={14} />
               </a>
            </div>

            {/* Bottom Back Button */}
            <div className="pt-4 flex justify-center">
              <button 
                onClick={goBack}
                className="group flex items-center space-x-3 text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white font-bold text-xs uppercase tracking-[0.3em] transition-all"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform text-saffron" />
                <span>Back to Projects</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
