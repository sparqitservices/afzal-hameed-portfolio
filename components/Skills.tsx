
import React, { useEffect, useState, useRef } from 'react';
import { Cpu, Globe, Database, BarChart } from 'lucide-react';

const SkillBar: React.FC<{ name: string; level: number; isVisible: boolean; delay: number }> = ({ name, level, isVisible, delay }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-end mb-2">
        <span className="text-sm font-bold text-gray-700 dark:text-white tracking-wide">{name}</span>
        <span className="text-xs font-bold text-saffron">{level}%</span>
      </div>
      <div className="h-2 w-full bg-gray-200 dark:bg-white/5 rounded-full overflow-hidden border border-gray-100 dark:border-white/5">
        <div 
          className="h-full bg-gradient-to-r from-brandBlue to-saffron rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: isVisible ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        />
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // We keep observing if we want it to re-animate, 
          // but typically for portfolios, a single clean entrance is best.
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const categories = [
    {
      title: 'Frontend Development',
      icon: <Globe className="text-saffron" />,
      skills: [
        { name: 'React.js (ES6+)', level: 95 },
        { name: 'Next.js (App Router)', level: 92 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'TypeScript', level: 88 },
        { name: 'PWA Development', level: 85 }
      ]
    },
    {
      title: 'Backend & Database',
      icon: <Database className="text-brandBlue" />,
      skills: [
        { name: 'Supabase', level: 90 },
        { name: 'Node.js', level: 82 },
        { name: 'Python', level: 78 },
        { name: 'API Development', level: 92 },
        { name: 'AWS & Cloudflare', level: 75 }
      ]
    },
    {
      title: 'AI & Automation',
      icon: <Cpu className="text-purple-500" />,
      skills: [
        { name: 'Google Gemini API', level: 95 },
        { name: 'OpenAI Integration', level: 90 },
        { name: 'AI Chatbots', level: 92 },
        { name: 'Voice AI (ElevenLabs)', level: 85 }
      ]
    },
    {
      title: 'Digital Marketing',
      icon: <BarChart className="text-green-500" />,
      skills: [
        { name: 'SEO (Expert)', level: 98 },
        { name: 'SEM & PPC', level: 92 },
        { name: 'Web Analytics', level: 90 },
        { name: 'Conversion Optimization', level: 95 }
      ]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative overflow-hidden bg-slate-50 dark:bg-darkBg transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-saffron font-bold uppercase tracking-widest text-sm mb-4">Technical Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white">Skills & <span className="gradient-text">Proficiency</span></h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {categories.map((cat, catIdx) => (
            <div key={catIdx} className="bg-white dark:bg-white/5 p-10 rounded-[2.5rem] border border-gray-200 dark:border-white/5 hover:border-brandBlue/20 dark:hover:border-white/10 transition-all shadow-sm dark:shadow-none">
              <div className="flex items-center space-x-4 mb-10">
                <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-2xl">
                  {cat.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">{cat.title}</h4>
              </div>
              
              <div className="space-y-2">
                {cat.skills.map((skill, skillIdx) => (
                  <SkillBar 
                    key={skill.name} 
                    name={skill.name} 
                    level={skill.level} 
                    isVisible={isVisible}
                    // Cumulative delay for a beautiful cascading effect
                    delay={(catIdx * 200) + (skillIdx * 100)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
