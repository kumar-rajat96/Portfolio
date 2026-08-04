export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  categories: {
    title: string;
    bullets: string[];
  }[];
  keyTech: string[];
}

export interface MetricItem {
  id: string;
  label: string;
  value: string;
  unit?: string;
  description: string;
  trend?: string;
  iconName: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  impact: string;
  metrics: {
    before: string;
    after: string;
    label: string;
  }[];
  tags: string[];
  icon: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: {
    name: string;
    level?: string;
    isKey?: boolean;
  }[];
  description: string;
}

export interface TCodeItem {
  tcode: string;
  name: string;
  category: 'Lock Mgmt' | 'Performance' | 'Database' | 'Transports' | 'System' | 'Patching';
  description: string;
  useCase: string;
  commandSnippet?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  badgeColor?: string;
}

export interface AwardItem {
  title: string;
  company: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  mode?: string;
  location?: string;
}
