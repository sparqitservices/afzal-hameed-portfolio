
import React from 'react';
import { experience } from '../data';
import { CheckCircle2, Briefcase, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-[#091526] transition-colors duration-500 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-saffron font-bold uppercase tracking-widest text-sm mb-4">Professional Journey</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white">
            My <span className="gradient-text">Experience</span>
          </h3>
        </div>

        <div className="relative">
          {/* Vertical Line - Positioned Left */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-saffron via-brandBlue to-transparent opacity-30 dark:opacity-20"></div>

          <div className="space-y-16">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative pl-12 md:pl-20 group">
                {/* Timeline Icon */}
                <div className="absolute left-0 md:left-4 top-0 z-10">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#091526] border-2 border-saffron flex items-center justify-center text-saffron shadow-lg shadow-saffron/10 group-hover:scale-110 group-hover:bg-saffron group-hover:text-white transition-all duration-300">
                    <Briefcase size={20} />
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-[2rem] border border-gray-100 dark:border-white/5 hover:border-saffron/30 transition-all duration-500 shadow-sm dark:shadow-none">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-saffron transition-colors">
                        {exp.role}
                      </h4>
                      <p className="text-brandBlue font-bold text-lg">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end text-right">
                      <span className="bg-saffron/10 text-saffron px-4 py-1 rounded-full text-sm font-bold border border-saffron/10">
                        {exp.year}
                      </span>
                      <div className="flex items-center text-gray-400 text-xs mt-2 font-medium">
                        <MapPin size={12} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3 text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle2 size={16} className="text-saffron mt-1 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
