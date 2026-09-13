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
      "React",
      "Next.js",
      "TypeScript",
      "CSS Modules",
      "Mantine",
    ],
  },
  {
    id: "backend",
    title: {
      uk: "Backend",
      en: "Backend",
    },
    items: ["Node.js", "NestJS", "Express", "PostgreSQL", "Prisma"],
  },
  {
    id: "tools",
    title: {
      uk: "Tools & DevOps",
      en: "Tools & DevOps",
    },
    items: ["Git", "Docker", "Vercel", "ESLint", "GitHub Actions"],
  },
];
