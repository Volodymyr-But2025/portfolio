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
  /** Poster under the overlay before interactive launch — not an X-Frame fallback. */
  fallbackImage?: string;
};

export const projects: Project[] = [
  {
    id: "harmoniq",
    title: {
      uk: "Командний проєкт: Harmoniq — платформа статей",
      en: "Team project: Harmoniq — article platform",
    },
    description: {
      uk: "Full-Stack Developer у команді з 12 осіб: спільнота статей на Next.js і Express REST API, сесії на cookies, закладки, профіль і адаптив. Свій live на Vercel і Render.",
      en: "Full-Stack Developer in a 12-member team: Next.js article community with an Express REST API, cookie sessions, bookmarks, profile, and responsive UI. Own live on Vercel and Render.",
    },
    demoUrl: "https://harmoniq-azure.vercel.app",
    githubUrl: "https://github.com/Volodymyr-But2025/harmoniq",
    tags: ["Next.js", "TypeScript", "React", "Express", "MongoDB", "TanStack Query"],
    features: {
      uk: [
        "Full-Stack Developer у команді з 12 людей",
        "Статті, автори, профіль і закладки (React Query)",
        "REST API: Express, MongoDB, httpOnly cookies, Cloudinary",
        "Мобільний UI, власний live на Vercel і Render",
      ],
      en: [
        "Full-Stack Developer in a 12-person team",
        "Articles, authors, profile, and bookmarks (React Query)",
        "REST API: Express, MongoDB, httpOnly cookies, Cloudinary",
        "Mobile-first UI, own live on Vercel and Render",
      ],
    },
    fallbackImage: "/projects/harmoniq.png",
  },
  {
    id: "mebleriya",
    title: {
      uk: "Командний проєкт: Меблерія — каталог меблів",
      en: "Team project: Mebleriya — furniture catalog",
    },
    description: {
      uk: "Team Lead і Front-End Developer у команді з 10 осіб: каталог меблів на Vite з REST API, модалками товару й замовлення, адаптив і GitHub Pages.",
      en: "Team Lead & Front-End Developer in a 10-member team: Vite furniture catalog with a REST API, product/order modals, responsive layout, and GitHub Pages.",
    },
    demoUrl: "https://volodymyr-but2025.github.io/Progect_team-PlusUltra/",
    githubUrl: "https://github.com/Volodymyr-But2025/Progect_team-PlusUltra",
    tags: ["HTML5", "CSS3", "JavaScript", "Vite", "Axios", "Git"],
    features: {
      uk: [
        "Team Lead команди з 10 людей",
        "Каталог з REST API (Axios) і пагінацією",
        "Модалки товару та замовлення",
        "Адаптивний UI і деплой на GitHub Pages",
      ],
      en: [
        "Team Lead of a 10-person team",
        "Catalog via REST API (Axios) with pagination",
        "Product and order modals",
        "Responsive UI and GitHub Pages deploy",
      ],
    },
    fallbackImage: "/projects/mebleriya.png",
  },
  {
    id: "ecotote",
    title: {
      uk: "Командний проєкт: EcoTote — лендінг",
      en: "Team project: EcoTote — landing",
    },
    description: {
      uk: "Front-End Developer (секція Support): адаптивна форма зворотного зв’язку, валідація полів і ретина-зображення в командному лендінгу на Vite.",
      en: "Front-End Developer (Support section): responsive contact form, field validation, and retina images in a collaborative Vite landing.",
    },
    demoUrl: "https://volodymyr-but2025.github.io/Team_junior/",
    githubUrl: "https://github.com/Volodymyr-But2025/Team_junior",
    tags: ["HTML5", "CSS3", "Vite", "Git"],
    features: {
      uk: [
        "Front-End Developer у командному лендінгу",
        "Адаптивна форма Support (mobile / tablet / desktop)",
        "Валідація полів і ретина-зображення",
        "Командна робота через pull requests",
      ],
      en: [
        "Front-End Developer on a team landing",
        "Responsive Support form (mobile / tablet / desktop)",
        "Field validation and retina images",
        "Collaboration via pull requests",
      ],
    },
    fallbackImage: "/projects/ecotote.png",
  },
];
