export type Language = "en" | "uz" | "ru";
export type Theme = "dark" | "light";

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  image: string; // <-- shu qator qo'shiladi
  githubLink?: string;
  liveLink?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  duration: string;
  description: string;
}

export interface LanguageSkill {
  name: string;
  level: string;
}

export interface TranslationData {
  nav: Record<string, string>;
  hero: Record<string, string>;
  about: {
    title: string;
    desc: string;
    story: { title: string; desc: string };
    philosophy: { title: string; desc: string };
    beyond: { title: string; desc: string };
  };
  stats: Record<string, string>;
  services: { title: string; items: { title: string; desc: string }[] };
  tech: { title: string; desc: string };
  technologies: string[];
  projects: {
    title: string;
    viewAll: string;
    items: ProjectItem[];
  };
  exp: {
    prof: string;
    edu: string;
    items: ExperienceItem[];
    education: EducationItem[];
    languages: {
      title: string;
      items: LanguageSkill[];
    };
  };
  contact: Record<string, string>;
  footer: string;
}
