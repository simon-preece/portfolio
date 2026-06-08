export interface ExperienceItem {
  title: string
  company: string
  period: string
  summary: string
}

export interface StatItem {
  value: string
  label: string
}

export interface SkillItem {
  title: string
  description: string
}

export interface HeroContent {
  eyebrow: string
  greeting: string
  description: string
  primaryCta: {
    label: string
    href: string
  }
  secondaryCta: {
    label: string
    href: string
  }
  stats: StatItem[]
}

export interface AboutContent {
  label: string
  title: string
  summary: string
  capabilities: string[]
}

export interface SkillsSection {
  label: string
  title: string
  items: SkillItem[]
}

export const hero: HeroContent = {
  eyebrow: 'Software engineer · React · ASP.NET · PHP · DevOps support',
  greeting: 'Hi, I’m Simon.',
  description:
    'I create dependable web products and polished user experiences for startups, personal brands, and digital teams. My work blends design-driven thinking with strong technical implementation.',
  primaryCta: {
    label: 'View Projects',
    href: '#projects',
  },
  secondaryCta: {
    label: 'Let’s Talk',
    href: '#contact',
  },
  stats: [
    { value: '15+', label: 'years in systems administration' },
    { value: '20+', label: 'web projects delivered' },
    { value: 'React, ASP.NET & PHP', label: 'frontend, backend, and DevOps' },
  ],
}

export const about: AboutContent = {
  label: 'About me',
  title: 'Professional approach and strengths',
  summary:
    'I help teams move from concept to launch with clean, accessible code, dependable backend services, and automated CI/CD workflows. My focus is on building performant interfaces and reliable systems that scale with growth.',
  capabilities: [
    'React application architecture and state management',
    'Responsive layouts, animations, and micro-interactions',
    'REST and GraphQL API integration',
    'ASP.NET and PHP backend development',
    'CI/CD pipelines, build automation, and deploy support',
    'Design system implementation and component libraries',
  ],
}

export const skills: SkillsSection = {
  label: 'Skills',
  title: 'Technologies and capabilities',
  items: [
    {
      title: 'Frontend',
      description: 'React, TypeScript, Vite, responsive UI, accessible components',
    },
    {
      title: 'Backend',
      description: 'ASP.NET, PHP, REST APIs, server-side logic, integration',
    },
    {
      title: 'DevOps',
      description: 'CI/CD support, build pipelines, deployment automation, monitoring',
    },
  ],
}

export const experience: ExperienceItem[] = [
  {
    title: 'Frontend Engineer',
    company: 'Creative Solutions Studio',
    period: '2024 – Present',
    summary:
      'Leading web application development with modern React architecture, design systems, and polished user experiences.',
  },
  {
    title: 'UI Developer',
    company: 'Growth Marketing Agency',
    period: '2022 – 2024',
    summary:
      'Built high-conversion landing pages, interactive dashboards, and reusable component libraries for digital campaigns.',
  },
]
