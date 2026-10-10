export interface NavItem {
  label: string;
  href: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  href: string;
}
