
import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, ExternalLink, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // For best conversion tracking, we update the hash to #thank-you
      window.location.hash = 'thank-you';
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#050b14] relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-saffron font-bold uppercase tracking-widest text-sm mb-4">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white">Let's Build Something <span className="gradient-text">Amazing</span></h3>
          <p className="mt-4 text-gray-500 dark:text-gray-400">Open to remote opportunities and relocation across India</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-3xl space-y-8 border border-gray-100 dark:border-white/5 shadow-xl">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h4>
              
              <div className="flex items-center space-x-6 group">
                <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-2xl group-hover:bg-saffron group-hover:text-white text-saffron transition-all border border-gray-100 dark:border-white/5">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-gray-400 dark:text-gray-500 text-xs uppercase font-bold tracking-widest">Email</p>
                  <a href="mailto:iafzalhameed@gmail.com" className="text-xl font-medium text-gray-700 dark:text-gray-200 hover:text-saffron transition-colors">iafzalhameed@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-2xl group-hover:bg-brandBlue group-hover:text-white text-brandBlue transition-all border border-gray-100 dark:border-white/5">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-gray-400 dark:text-gray-500 text-xs uppercase font-bold tracking-widest">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/iafzalhameed/" target="_blank" className="text-xl font-medium text-gray-700 dark:text-gray-200 hover:text-brandBlue transition-colors">/in/iafzalhameed</a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-2xl group-hover:bg-gray-200 dark:group-hover:bg-gray-100 group-hover:text-darkBg text-gray-400 dark:text-gray-400 transition-all border border-gray-100 dark:border-white/5">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-gray-400 dark:text-gray-500 text-xs uppercase font-bold tracking-widest">Location</p>
                  <p className="text-xl font-medium text-gray-700 dark:text-gray-200">Lucknow, India</p>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-xl">
               <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Links</h4>
               <div className="flex flex-wrap gap-4">
                 <a href="https://sparqitservices.com" target="_blank" className="flex items-center space-x-2 px-4 py-2 bg-gray-50 dark:bg-white/5 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-sm font-medium text-gray-700 dark:text-gray-200 border border-gray-100 dark:border-white/5">
                   <ExternalLink size={16} />
                   <span>Sparq IT Services</span>
                 </a>
                 <a href="https://github.com/iafzalhameed" target="_blank" className="flex items-center space-x-2 px-4 py-2 bg-gray-50 dark:bg-white/5 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-sm font-medium text-gray-700 dark:text-gray-200 border border-gray-100 dark:border-white/5">
                   <Github size={16} />
                   <span>Github Profile</span>
                 </a>
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass p-10 rounded-3xl border border-gray-100 dark:border-white/5 shadow-2xl relative overflow-hidden">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-500 dark:text-gray-400 text-sm font-medium mb-2">Name</label>
                  <input required type="text" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-4 text-gray-900 dark:text-white focus:outline-none focus:border-saffron/50 transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-gray-500 dark:text-gray-400 text-sm font-medium mb-2">Email</label>
                  <input required type="email" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-4 text-gray-900 dark:text-white focus:outline-none focus:border-saffron/50 transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-gray-500 dark:text-gray-400 text-sm font-medium mb-2">Subject</label>
                <input type="text" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-4 text-gray-900 dark:text-white focus:outline-none focus:border-saffron/50 transition-all" placeholder="Project Discussion" />
              </div>
              <div>
                <label className="block text-gray-500 dark:text-gray-400 text-sm font-medium mb-2">Message</label>
                <textarea required rows={5} className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-4 text-gray-900 dark:text-white focus:outline-none focus:border-saffron/50 transition-all resize-none" placeholder="How can I help you?"></textarea>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-saffron hover:bg-orange-600 text-white font-bold py-5 rounded-2xl flex items-center justify-center space-x-3 transition-all transform hover:scale-[1.02] shadow-xl shadow-saffron/20 disabled:opacity-50"
              >
                {isSubmitting ? (
                   <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
