
import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles, Mail } from 'lucide-react';

const Subscribe: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === 'loading') return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      // Redirect to thank you page for conversion tracking
      window.location.hash = 'thank-you';
    }, 1500);
  };

  return (
    <section className="py-20 bg-white dark:bg-darkBg relative overflow-hidden border-t border-gray-100 dark:border-white/5 transition-colors duration-500">
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-saffron/10 blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-brandBlue/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass p-8 md:p-16 rounded-[3rem] border border-gray-100 dark:border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle Pattern Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

          <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-saffron/10 border border-saffron/20 text-saffron text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles size={14} />
                <span>Stay Ahead of the Curve</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Join the <span className="gradient-text">Inner Circle</span>
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl">
                Get monthly insights on AI automation, high-performance web engineering, and Sparq IT success stories. No spam, just value.
              </p>
            </div>

            <div className="w-full lg:w-[400px]">
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={20} />
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-5 pl-12 pr-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:border-saffron/50 transition-all text-lg"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-saffron hover:bg-orange-600 text-white font-bold py-5 rounded-2xl flex items-center justify-center space-x-3 transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl shadow-saffron/20 disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Subscribe Now</span>
                      <Send size={20} />
                    </>
                  )}
                </button>
                <p className="text-[10px] text-gray-400 dark:text-gray-500 text-center uppercase tracking-widest font-bold">
                  Join 200+ Developers & Founders
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
