
import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Code2 } from 'lucide-react';
import { afzalAssistant } from '../services/assistantService';
import { projects } from '../data';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Welcome. I am an interactive assistant custom-built by Afzal. How can I help you explore his work today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentContext, setCurrentContext] = useState<string | undefined>(undefined);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Detect context from URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project/')) {
        const id = hash.split('/')[1];
        const project = projects.find(p => p.id === id);
        if (project) {
          setCurrentContext(project.title);
          // Optional: Clear or add a contextual greeting if needed
        }
      } else {
        setCurrentContext(undefined);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sanitizeText = (text: string) => {
    return text.replace(/\*\*/g, '').replace(/\*/g, '');
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const botResponse = await afzalAssistant.askQuestion(userMsg, currentContext);
    const cleanedResponse = sanitizeText(botResponse || 'I encountered an error. Please try again.');
    
    setMessages(prev => [...prev, { role: 'bot', text: cleanedResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="relative">
      {isOpen ? (
        <div className="absolute bottom-full right-0 mb-4 w-[90vw] sm:w-[380px] h-[500px] glass rounded-3xl shadow-2xl flex flex-col border border-saffron/20 dark:border-white/10 overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-saffron to-brandBlue flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Code2 className="text-white" size={20} />
              <div>
                <h4 className="text-white font-bold text-sm">Afzal's Portfolio Bot</h4>
                <p className="text-white/70 text-[10px] uppercase tracking-widest font-bold">
                  {currentContext ? `Context: ${currentContext}` : 'Proprietary Engine'}
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:rotate-90 transition-transform">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-white dark:bg-darkBg transition-colors">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-saffron text-white rounded-tr-none' 
                    : 'bg-gray-100 dark:bg-white/5 text-gray-800 dark:text-gray-200 rounded-tl-none border border-black/5 dark:border-white/10 shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-white/5 p-3 rounded-2xl rounded-tl-none flex space-x-1 border border-black/5 dark:border-white/10">
                  <div className="w-1.5 h-1.5 bg-brandBlue rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-brandBlue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1.5 h-1.5 bg-brandBlue rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-black/5 dark:border-white/10 bg-white dark:bg-darkBg transition-colors">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={currentContext ? `Ask about ${currentContext}...` : "Message Afzal's engine..."}
                className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-saffron/50 transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-saffron rounded-lg text-white hover:bg-orange-600 transition-colors disabled:opacity-50 shadow-md"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative bg-saffron p-4 rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95 flex items-center justify-center"
        >
          <div className="absolute -inset-2 bg-saffron/30 rounded-full blur-lg animate-pulse"></div>
          <Code2 className="text-white relative z-10" size={28} />
          {currentContext && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-brandBlue border-2 border-white dark:border-darkBg rounded-full"></span>
          )}
          <span className="absolute bottom-full right-0 mb-4 bg-gray-900 dark:bg-white text-white dark:text-darkBg text-[10px] font-bold py-1.5 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-white/10">
            {currentContext ? `Expert Help: ${currentContext}` : 'Interactive Portfolio Engine'}
          </span>
        </button>
      )}
    </div>
  );
};

export default AIChat;
