export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  tech: string[];
  achievements: string[];
  metrics?: { label: string; value: string }[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  accentColor?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  current?: boolean;
  achievements: string[];
  technologies: string[];
  impactMetric?: { label: string; value: string };
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  coursework: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year?: string;
  credentialUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
