
import React, { useEffect, useState, useRef } from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { testimonials } from '../data';

const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0]; delay: number }> = ({ testimonial, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group relative bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-gray-100 dark:border-white/5 hover:border-saffron/30 transition-all duration-700 h-full flex flex-col shadow-sm hover:shadow-2xl hover:shadow-saffron/5 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Decorative Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-saffron/5 to-brandBlue/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]"></div>

      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="flex space-x-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} size={14} fill="#F15A24" className="text-saffron" />
          ))}
        </div>
        <Quote size={24} className="text-gray-200 dark:text-white/10 group-hover:text-saffron transition-colors" />
      </div>

      <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-8 relative z-10 flex-grow font-medium">
        "{testimonial.text}"
      </p>

      <div className="flex items-center space-x-4 relative z-10 pt-6 border-t border-gray-100 dark:border-white/5">
        <div className="relative">
          {testimonial.image ? (
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="w-12 h-12 rounded-xl object-cover ring-2 ring-gray-100 dark:ring-white/10 group-hover:ring-saffron/50 transition-all"
            />
          ) : (
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white shadow-lg"
              style={{ backgroundColor: testimonial.avatarColor || '#F15A24' }}
            >
              {testimonial.name.charAt(0)}
            </div>
          )}
          <div className="absolute -bottom-1 -right-1 bg-green-500 text-white p-0.5 rounded-full border-2 border-white dark:border-darkBg">
            <CheckCircle2 size={10} />
          </div>
        </div>
        <div>
          <h5 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
            {testimonial.name}
            <span className="text-[10px] text-green-500 font-bold uppercase tracking-wider bg-green-500/10 px-1.5 py-0.5 rounded">Verified</span>
          </h5>
          <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-widest font-bold mt-0.5">
            {testimonial.role} <span className="text-saffron mx-0.5">•</span> {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 dark:bg-darkBg relative overflow-hidden transition-colors duration-500">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brandBlue/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-saffron/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-saffron font-bold uppercase tracking-widest text-sm mb-4">Wall of Love</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white">
            What <span className="gradient-text">Clients Say</span>
          </h3>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto italic">
            "Afzal doesn't just write code; he builds solutions that drive revenue and growth."
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
          {testimonials.map((t, idx) => (
            <TestimonialCard 
              key={idx} 
              testimonial={t} 
              delay={idx * 150}
            />
          ))}
        </div>

        {/* Bottom CTA / Trust Indicator */}
        <div className="mt-20 flex flex-col items-center justify-center text-center">
          <div className="flex -space-x-3 mb-6">
            {testimonials.slice(0, 5).map((t, i) => (
              <img 
                key={i}
                src={t.image} 
                alt={t.name}
                className="w-10 h-10 rounded-full border-2 border-white dark:border-darkBg"
              />
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-white dark:border-darkBg bg-saffron flex items-center justify-center text-[10px] font-bold text-white">
              +15
            </div>
          </div>
          <p className="text-gray-500 font-medium text-sm">
            Join 15+ satisfied clients and entrepreneurs who transformed their ideas into reality.
          </p>
          <a href="#contact" className="mt-8 text-saffron font-bold text-sm uppercase tracking-widest border-b-2 border-saffron/30 hover:border-saffron transition-all pb-1">
            Let's Start Your Success Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
