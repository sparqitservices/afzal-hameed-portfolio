
import React from 'react';
import { GraduationCap, Award, ExternalLink, School } from 'lucide-react';
import { education, certifications } from '../data';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-slate-50 dark:bg-darkBg relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-saffron font-bold uppercase tracking-widest text-sm mb-4">Credentials</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white">Education & <span className="gradient-text">Certifications</span></h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4 mb-2">
              <div className="p-3 bg-saffron/10 rounded-xl text-saffron">
                <GraduationCap size={28} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h4>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="bg-white dark:bg-white/5 p-8 rounded-3xl border-l-4 border-saffron group hover:translate-x-2 transition-all duration-300 shadow-sm dark:shadow-none relative overflow-hidden">
                  <div className="absolute right-4 top-4 text-gray-100 dark:text-white/5 group-hover:text-saffron/10 transition-colors pointer-events-none">
                    <School size={80} />
                  </div>
                  <div className="relative z-10">
                    <p className="text-saffron font-bold text-sm mb-2">{edu.year}</p>
                    <h5 className="text-xl font-bold mb-1 text-gray-900 dark:text-white leading-tight">{edu.degree}</h5>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">{edu.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4 mb-2">
              <div className="p-3 bg-brandBlue/10 rounded-xl text-brandBlue">
                <Award size={28} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Professional Certs</h4>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="bg-white dark:bg-white/5 p-6 rounded-2xl flex items-center justify-between group hover:border-brandBlue/30 transition-all shadow-sm dark:shadow-none border border-transparent dark:border-white/5">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-50 dark:bg-white/5 rounded-full flex items-center justify-center text-brandBlue">
                      <Award size={20} />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 dark:text-white leading-snug">{cert.name}</h5>
                      <p className="text-xs text-gray-500">{cert.issuer} • {cert.year}</p>
                    </div>
                  </div>
                  <ExternalLink size={18} className="text-gray-400 group-hover:text-brandBlue transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
