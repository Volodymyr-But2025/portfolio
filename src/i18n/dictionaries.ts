import type { Locale } from "./config";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    name: string;
    role: string;
    stack: string;
    subtitle: string;
    cta: string;
  };
  themeToggle: {
    label: string;
  };
  localeToggle: {
    label: string;
    tooltipToEn: string;
    tooltipToUk: string;
  };
  tech: {
    title: string;
  };
  projects: {
    title: string;
  };
  projectCard: {
    launchInteractive: string;
    closeInteractive: string;
    refreshIframe: string;
    openInNewTab: string;
    github: string;
    liveDemo: string;
    iframeBlockedHint: string;
    openModal: string;
    modalTitle: string;
    iframeTitle: string;
    deviceGroup: string;
    deviceMobile: string;
    deviceTablet: string;
    deviceDesktop: string;
  };
};

const uk: Dictionary = {
  meta: {
    title: "Volodymyr — Full Stack Developer",
    description:
      "Портфоліо Full Stack Developer: React, Next.js, Node.js. Інтерактивні прев’ю навчальних проєктів.",
  },
  hero: {
    name: "Volodymyr",
    role: "Full Stack Developer",
    stack: "React · Next.js · Node.js",
    subtitle:
      "Будую сучасні веб-застосунки з чистим TypeScript, доступним UI та продуманим бекендом.",
    cta: "До проєктів",
  },
  themeToggle: {
    label: "Перемкнути тему",
  },
  localeToggle: {
    label: "Перемкнути мову",
    tooltipToEn: "Switch to English",
    tooltipToUk: "Перемкнути на українську",
  },
  tech: {
    title: "Технології",
  },
  projects: {
    title: "Проєкти",
  },
  projectCard: {
    launchInteractive: "Запустити інтерактив",
    closeInteractive: "Закрити інтерактив",
    refreshIframe: "Оновити iframe",
    openInNewTab: "Відкрити в новій вкладці",
    github: "GitHub",
    liveDemo: "Live Demo",
    iframeBlockedHint:
      "Деякі сайти блокують iframe (X-Frame-Options / CSP). Якщо прев’ю порожнє — відкрийте Live Demo у новій вкладці.",
    openModal: "Збільшити прев’ю",
    modalTitle: "Прев’ю проєкту",
    iframeTitle: "Інтерактивне прев’ю проєкту",
    deviceGroup: "Перегляд на пристрої",
    deviceMobile: "Телефон",
    deviceTablet: "Планшет",
    deviceDesktop: "ПК",
  },
};

const en: Dictionary = {
  meta: {
    title: "Volodymyr — Full Stack Developer",
    description:
      "Full Stack Developer portfolio: React, Next.js, Node.js. Interactive previews of learning projects.",
  },
  hero: {
    name: "Volodymyr",
    role: "Full Stack Developer",
    stack: "React · Next.js · Node.js",
    subtitle:
      "I build modern web apps with clean TypeScript, accessible UI, and a thoughtful backend.",
    cta: "View projects",
  },
  themeToggle: {
    label: "Toggle color scheme",
  },
  localeToggle: {
    label: "Toggle language",
    tooltipToEn: "Switch to English",
    tooltipToUk: "Switch to Ukrainian",
  },
  tech: {
    title: "Tech stack",
  },
  projects: {
    title: "Projects",
  },
  projectCard: {
    launchInteractive: "Launch interactive",
    closeInteractive: "Close interactive",
    refreshIframe: "Refresh iframe",
    openInNewTab: "Open in new tab",
    github: "GitHub",
    liveDemo: "Live Demo",
    iframeBlockedHint:
      "Some sites block iframes (X-Frame-Options / CSP). If the preview is empty, open Live Demo in a new tab.",
    openModal: "Expand preview",
    modalTitle: "Project preview",
    iframeTitle: "Interactive project preview",
    deviceGroup: "Device preview",
    deviceMobile: "Phone",
    deviceTablet: "Tablet",
    deviceDesktop: "Desktop",
  },
};

export const dictionaries: Record<Locale, Dictionary> = {
  uk,
  en,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
