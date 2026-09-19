import { contacts } from "./contacts";
import type { LocalizedString } from "./projects";

export type Hero = {
  name: string;
  role: string;
  stack: string[];
  subtitle: LocalizedString;
  cta: LocalizedString;
  contacts: typeof contacts;
};

export const hero: Hero = {
  name: "Volodymyr",
  role: "Full Stack Developer",
  stack: ["React", "Next.js", "Node.js"],
  subtitle: {
    uk: "Створюю веб-застосунки від UI до API — TypeScript, React і Node.js.",
    en: "I ship web apps end-to-end — TypeScript, React, and Node.js.",
  },
  cta: {
    uk: "До проєктів",
    en: "View projects",
  },
  contacts,
};
