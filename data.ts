
import { Project, Skill, Experience, Testimonial, Education, Certification } from './types';

export const projects: Project[] = [
  {
    id: 'baby-name-generator',
    title: 'BabyNameGenerator.xyz',
    description: 'Custom-built baby name engine with integrated voice output and semantic cultural mapping. Engineered for scale and impact.',
    techStack: ['REACT', 'TAILWIND CSS', 'PROPRIETARY LLM ENGINE', 'ELEVENLABS', 'VERCEL'],
    features: ['Custom name logic', 'Voice output', 'Affiliate integration', 'Email list'],
    link: 'https://babynamegenerator.xyz',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sparq-it-crm',
    title: 'Sparq IT CRM',
    description: 'Enterprise-grade agency management portal with AI-powered analytics and real-time insights. Built for operational excellence.',
    techStack: ['REACT', 'SUPABASE', 'PROPRIETARY LLM ENGINE', 'RECHARTS', 'LUCIDE REACT'],
    features: ['Client management', 'Project tracking', 'Analytics dashboard', 'AI automation'],
    link: 'https://crm.sparqitservices.com',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'apna-walk',
    title: 'ApnaWalk.com',
    description: 'AI-powered fitness companion with progressive web capabilities and intelligent workout recommendations. Your personal training assistant.',
    techStack: ['NEXT.JS', 'AI CHATBOT', 'PWA', 'GOOGLE ONE TAP', 'VERCEL'],
    features: ['PWA functionality', 'AI-powered recommendations', 'Seamless authentication', 'Offline support'],
    link: 'https://apnawalk.com',
    category: 'PWA',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'nest-scout',
    title: 'Nest-Scout',
    description: 'Intelligent real estate search platform with AI-driven property matching and real-time market insights. Find your perfect home faster.',
    techStack: ['REACT', 'TYPESCRIPT', 'NEST.JS', 'PROPRIETARY LLM ENGINE', 'SUPABASE', 'VERCEL'],
    features: ['AI property matching', 'Real-time search', 'Performance optimized', 'Advanced filtering'],
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'shoot-oclock',
    title: "Shoot O' Clock",
    description: "Digital platform for Gurgaon's premier shooting academy offering seamless booking and training management for air rifle and pistol enthusiasts.",
    techStack: ['REACT', 'VITE', 'SUPABASE', 'TAILWIND CSS'],
    features: ['Real-time booking', 'User authentication', 'Responsive design', 'Session management'],
    link: 'https://shootoclock.com',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1595121623191-23588921e58f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sparq-buddy',
    title: 'SparqBuddy - AI Calling Agent',
    description: 'Custom AI-powered voice calling system with voice cloning and automated customer interactions. Next-gen communication automation.',
    techStack: ['NEXT.JS', 'PYTHON', 'TWILIO', 'ELEVENLABS', 'SUPABASE'],
    features: ['Voice AI', 'Call automation', 'CRM integration', 'Voice cloning'],
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'royal-ceiling',
    title: 'Royal Ceiling',
    description: 'Conversion-optimized lead generation platform for gypsum false ceiling and interior design services. Built for maximum ROI.',
    techStack: ['NEXT.JS', 'SUPABASE EDGE FUNCTIONS', 'RESEND EMAIL', 'CLOUDFLARE', 'ROUTE EMAIL'],
    features: ['SEO-optimized', 'Lead generation forms', 'Email automation', 'Conversion tracking'],
    link: 'https://royalceiling.in',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fc-property',
    title: 'FC Property LLP',
    description: 'Full-service real estate platform with integrated YouTube content strategy. Achieved 40K+ subscribers through strategic digital presence.',
    techStack: ['WORDPRESS', 'AWS', 'CUSTOM PLUGINS', 'VIDEO INTEGRATION'],
    features: ['Property listings', 'YouTube integration', 'Lead management', 'Content marketing'],
    category: 'WordPress',
    image: 'https://images.unsplash.com/photo-1582408921715-18e7806365c1?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'aura-kitchenz',
    title: 'Aura Kitchenz',
    description: 'E-commerce platform for modular kitchen design and installation services. Delivered 450+ successful installations with seamless customer experience.',
    techStack: ['WORDPRESS', 'AWS', 'WOOCOMMERCE', 'CUSTOM THEMES'],
    features: ['Product catalog', 'E-commerce integration', 'Lead tracking', 'Installation management'],
    category: 'WordPress',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'tenillions',
    title: 'Tenillions.com',
    description: 'Luxury real estate platform for properties ₹1CR+ featuring premium filtering and bespoke lead flow management.',
    techStack: ['NEXT.JS', 'TAILWIND', 'CLOUDFLARE', 'SUPABASE'],
    features: ['Premium property filtering', 'High-end UI/UX', 'Lead generation', 'Admin dashboard'],
    link: 'https://tenillions.com',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600'
  }
];

export const skills: Skill[] = [
  { name: 'React.js', level: 95, category: 'Frontend' },
  { name: 'Next.js', level: 92, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 88, category: 'Frontend' },
  { name: 'Node.js', level: 82, category: 'Backend' },
  { name: 'Supabase', level: 90, category: 'Backend' },
  { name: 'Google Gemini', level: 95, category: 'AI' },
  { name: 'Python', level: 78, category: 'Backend' },
  { name: 'SEO', level: 98, category: 'Marketing' },
];

export const experience: Experience[] = [
  {
    year: '2022 - Present',
    role: 'Founder & Full-Stack Developer',
    company: 'Sparq IT Services',
    location: 'Lucknow, India',
    achievements: [
      'Founded digital transformation agency specializing in web development, AI automation, and digital marketing.',
      'Built 15+ production applications using React, Next.js, and modern tech stack.',
      'Managed end-to-end project delivery from client consultation to deployment.',
      'Integrated AI solutions (Google Gemini, OpenAI) for enhanced user experiences.'
    ]
  },
  {
    year: '2018 - 2022',
    role: 'SEO & Digital Marketing Specialist',
    company: 'Mirah Belle Naturals',
    location: 'Gurugram, India',
    achievements: [
      'Led SEO strategy resulting in 200% organic traffic growth.',
      'Managed PPC campaigns with ₹50L+ monthly ad spend.',
      'Optimized e-commerce platform for better conversions.'
    ]
  }
];

export const education: Education[] = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Manipal University Jaipur',
    year: '2012 - 2015'
  }
];

export const certifications: Certification[] = [
  {
    name: 'Google Certified SEO Expert',
    issuer: 'Google',
    year: '2021'
  },
  {
    name: 'SEO Certification',
    issuer: 'Delhi School of Internet Marketing (DSIM)',
    year: '2018'
  },
  {
    name: 'Digital Marketing Certification',
    issuer: 'DigitalDeepak.com',
    year: '2017'
  }
];

export const testimonials: Testimonial[] = [
  {
    name: 'Parvesh Gilhotra',
    role: 'CEO',
    company: 'Nest Scout',
    text: 'Afzal transformed our real estate search experience with bespoke matching logic. His technical depth and business sense are a rare combination.',
    rating: 5,
    avatarColor: '#F15A24'
  },
  {
    name: 'Mandeep Singh',
    role: 'Founder',
    company: "Shoot O' Clock",
    text: "The platform Afzal built perfectly matches our standards for air rifle and pistol shooting. Exceptional booking and training management.",
    rating: 5,
    avatarColor: '#3A88F3'
  }
];
