
import React, { useState } from 'react';
import { projects } from '../data';
import { Project } from '../types';
import { ExternalLink, ArrowRight, Plus } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'AI', 'Web', 'WordPress', 'PWA'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const handleProjectClick = (id: string) => {
    window.location.hash = `project/${id}`;
  };

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-[#050b14] relative overflow-hidden transition-colors duration-500">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brandBlue/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-8 md:space-y-0">
          <div>
            <h2 className="text-saffron font-bold uppercase tracking-widest text-sm mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white">Featured <span className="gradient-text">Projects</span></h3>
            <p className="mt-4 text-gray-500 max-w-lg">A selection of my recent works ranging from custom automation to high-scale digital solutions.</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                  filter === cat 
                    ? 'bg-saffron text-white shadow-lg shadow-saffron/30' 
                    : 'bg-white dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group glass rounded-3xl overflow-hidden transition-all duration-500 flex flex-col h-full cursor-pointer relative border border-gray-100 dark:border-white/5 hover:border-saffron/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-saffron/10"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-white/5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-white/80 dark:bg-darkBg/80 backdrop-blur-md text-gray-900 dark:text-white text-[10px] font-bold rounded-lg uppercase tracking-widest border border-gray-200 dark:border-white/10 shadow-sm">
                    {project.category}
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-darkBg/80 via-darkBg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="p-3 bg-saffron rounded-full text-white transform scale-50 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                    <Plus size={24} />
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-saffron transition-colors duration-300">{project.title}</h4>
                  <ArrowRight size={20} className="text-gray-400 dark:text-gray-600 group-hover:text-saffron group-hover:translate-x-1 transition-all" />
                </div>
                
                <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm flex-grow leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded border border-gray-200 dark:border-white/5">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-saffron/80 bg-saffron/5 px-2 py-1 rounded border border-saffron/10">
                      +{project.techStack.length - 3} More
                    </span>
                  )}
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-white/5 overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-saffron font-bold text-sm group-hover:translate-x-1 transition-transform">
                      <span>View Details</span>
                      <div className="w-5 h-[2px] bg-saffron rounded-full"></div>
                    </div>
                    {project.link && (
                      <div className="flex items-center space-x-1 text-gray-400 dark:text-gray-500 text-xs">
                        <span>Live Preview</span>
                        <ExternalLink size={12} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
