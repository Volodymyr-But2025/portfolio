import type { LocalizedString } from "./projects";

export type TechGroup = {
  id: string;
  title: LocalizedString;
  items: string[];
};

export const techStack: TechGroup[] = [
  {
    id: "frontend",
    title: {
      uk: "Frontend",
      en: "Frontend",
    },
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vite",
      "CSS Modules",
      "Mantine",
      "TanStack Query",
      "Axios",
      "Zustand",
    ],
  },
  {
    id: "backend",
    title: {
      uk: "Backend",
      en: "Backend",
    },
    items: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: "tools",
    title: {
      uk: "Tools & DevOps",
      en: "Tools & DevOps",
    },
    items: ["Git", "ESLint", "Vitest", "Vercel", "Render", "GitHub Pages"],
  },
];
