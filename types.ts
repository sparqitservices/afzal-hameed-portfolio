
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  link?: string;
  category: 'AI' | 'Web' | 'WordPress' | 'PWA' | 'Other';
  image: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'AI' | 'Tools' | 'Marketing';
}

export interface Experience {
  year: string;
  role: string;
  company: string;
  location: string;
  achievements: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  image?: string;
  avatarColor?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}
