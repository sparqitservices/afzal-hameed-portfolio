
import React, { useState, useEffect } from 'react';
import { Award, Briefcase, MapPin, Zap, Search } from 'lucide-react';

const StatCounter: React.FC<{ value: string; label: string; icon: React.ReactNode }> = ({ value, label, icon }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = numericValue / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [numericValue]);

  return (
    <div className="bg-white dark:bg-white/5 p-6 rounded-2xl text-center transform hover:-translate-y-1 transition-all border border-gray-100 dark:border-white/5 shadow-sm dark:shadow-none">
      <div className="flex justify-center mb-3">
        {React.cloneElement(icon as React.ReactElement, { size: 32 })}
      </div>
      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{count}{suffix}</h4>
      <p className="text-gray-500 text-[10px] uppercase tracking-wider font-bold">{label}</p>
    </div>
  );
};

const About: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '8+', icon: <Award className="text-saffron" /> },
    { label: 'Projects Delivered', value: '50+', icon: <Briefcase className="text-brandBlue" /> },
    { label: 'AI Integrations', value: '15+', icon: <Zap className="text-green-500" /> },
    { label: 'Organic Growth', value: '200%+', icon: <Search className="text-purple-500" /> },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-darkBg relative overflow-hidden transition-colors duration-500 border-t border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-saffron to-brandBlue rounded-2xl opacity-10 dark:opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-gray-100 dark:bg-white/5 p-2 rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden">
              <img 
                src="https://picsum.photos/seed/afzal-work-pro/800/1000" 
                alt="Afzal Hameed Professional" 
                className="w-full h-auto rounded-xl object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute bottom-6 left-6 bg-white/80 dark:bg-darkBg/80 backdrop-blur-xl p-5 rounded-2xl flex items-center space-x-4 border border-white/20 dark:border-white/10 shadow-2xl transform group-hover:scale-105 transition-transform">
              <div className="p-3 bg-saffron/10 rounded-full">
                <MapPin className="text-saffron" size={24} />
              </div>
              <div>
                <p className="text-gray-900 dark:text-white font-extrabold text-sm">Based in Lucknow</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs font-semibold">Open to Remote / Relocation</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-saffron font-bold tracking-widest uppercase text-xs mb-4">Discover My Story</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight text-gray-900 dark:text-white">
              Bridging Technical Innovation with <span className="gradient-text">Entrepreneurial Vision</span>
            </h3>
            
            <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              <p>
                I'm a full-stack developer with 8+ years of experience in web development, SEO, and digital marketing. In 2022, I founded <span className="text-saffron font-bold">Sparq IT Services</span>, where I've delivered <span className="text-brandBlue font-bold">50+ successful projects</span> and built production-grade applications using React, Next.js, and AI automation.
              </p>
              <p>
                From Gonda to Lucknow, from failed startups to successful ventures—my journey has been about continuous learning, resilience, and turning challenges into opportunities. I specialize in building modern web applications that solve real problems and deliver measurable results.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, idx) => (
                <StatCounter key={idx} value={stat.value} label={stat.label} icon={stat.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
