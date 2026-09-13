import type { Locale } from "@/i18n/config";

export type LocalizedString = Record<Locale, string>;

export type Project = {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  demoUrl: string;
  githubUrl: string;
  tags: string[];
  features: Record<Locale, string[]>;
  category: "fullstack" | "frontend" | "backend";
  /** Poster under the overlay before interactive launch — not an X-Frame fallback. */
  fallbackImage?: string;
};

export const projects: Project[] = [
  {
    id: "mebleriya",
    title: {
      uk: "Меблерія — командний e-commerce",
      en: "Mebleriya — team e-commerce",
    },
    description: {
      uk: "Team Lead і Front-End Developer у команді з 10 осіб: адаптивний інтернет-магазин меблів, GitHub Flow і деплой.",
      en: "Team Lead & Front-End Developer in a 10-member team: responsive furniture e-commerce, GitHub Flow, and deployment.",
    },
    demoUrl: "https://volodymyr-but2025.github.io/Progect_team-PlusUltra/",
    githubUrl: "https://github.com/Volodymyr-But2025/Progect_team-PlusUltra",
    tags: ["HTML5", "CSS3", "BEM", "JavaScript", "Vite", "Git"],
    features: {
      uk: [
        "Лідерство команди з 10 людей",
        "Reusable UI-компоненти (JS, Vite)",
        "Адаптивний дизайн на всіх пристроях",
        "Code quality, merge conflicts і деплой",
      ],
      en: [
        "Led a team of 10 members",
        "Reusable UI components (JS, Vite)",
        "Adaptive design across all devices",
        "Code quality, merge conflicts, and deployment",
      ],
    },
    category: "frontend",
    fallbackImage: "/projects/mebleriya.svg",
  },
  {
    id: "ecotote",
    title: {
      uk: "EcoTote — командний лендінг",
      en: "EcoTote — team landing",
    },
    description: {
      uk: "Front-End Developer (секція Support): адаптивні блоки, модальні вікна та анімації в командному проєкті на Vite.",
      en: "Front-End Developer (Support section): responsive blocks, modals, and animations in a collaborative Vite project.",
    },
    demoUrl: "https://volodymyr-but2025.github.io/Team_junior/",
    githubUrl: "https://github.com/Volodymyr-But2025/Team_junior",
    tags: ["HTML5", "CSS3", "Vite", "Git"],
    features: {
      uk: [
        "Адаптивні секції (mobile / tablet / desktop)",
        "Модальні вікна та плавні анімації",
        "Спільна робота за GitHub Flow",
      ],
      en: [
        "Responsive sections (mobile / tablet / desktop)",
        "Modal windows and smooth UI animations",
        "Collaboration with GitHub Flow",
      ],
    },
    category: "frontend",
    fallbackImage: "/projects/ecotote.svg",
  },
];
