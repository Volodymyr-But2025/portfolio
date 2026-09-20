[English](README.md) | **Українська**

# Volodymyr — Full Stack Developer

Особисте портфоліо на **Next.js 16**: hero, стек і навчальні проєкти з інтерактивним прев’ю в iframe.

**Live:** [https://portfolio-ve1w.vercel.app](https://portfolio-ve1w.vercel.app/)  
**GitHub:** [Volodymyr-But2025/portfolio](https://github.com/Volodymyr-But2025/portfolio)

<p align="center">
  <img src="public/og.png" alt="Volodymyr — Full Stack Developer" width="720">
</p>

## Скріншоти

<table>
  <tr>
    <td align="center">
      <strong>Світла тема</strong><br>
      <img src="docs/screenshots/hero-light.png" alt="Hero і технології у світлій темі">
    </td>
    <td align="center">
      <strong>Темна тема</strong><br>
      <img src="docs/screenshots/hero-dark.png" alt="Hero і технології у темній темі">
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong>Картки проєктів</strong><br>
      <img src="docs/screenshots/projects-light.png" alt="Картки проєктів із постером і кнопками GitHub / Live Demo">
    </td>
    <td align="center">
      <strong>Мобільна версія</strong><br>
      <img src="docs/screenshots/mobile-light.png" alt="Портфоліо на вузькому екрані з перемикачами мови та теми">
    </td>
  </tr>
</table>

## Що вміє

- **UA / EN** — мова з cookie `portfolio-locale` і заголовка `Accept-Language` (без окремого URL для кожної локалі).
- **Світла / темна тема** — Mantine `ColorSchemeScript`, з урахуванням системної схеми.
- **Інтерактивні прев’ю** — постер проєкту, запуск iframe за кліком, оновлення, модалка, пресети телефон / планшет / ПК.
- **Однакові картки** — GitHub (репозиторій) і Live Demo; для Harmoniq GitHub веде на монорепо.
- **Контакти** — Telegram, GitHub, LinkedIn.
- **Доступність** — підписи кнопок, `focus-visible`, `rel="noopener noreferrer"` на зовнішніх лінках.

Якщо сайт блокує вбудовування (`X-Frame-Options` / CSP), прев’ю може бути порожнім — тоді відкривається Live Demo в новій вкладці.

## Проєкти

Дані лежать у `src/data/projects.ts`.

| Проєкт | Роль | Live | Код |
| --- | --- | --- | --- |
| [Harmoniq](https://harmoniq-azure.vercel.app) — платформа статей | Full-Stack Developer, команда з 12 осіб (Next.js, Express, MongoDB) | [Vercel](https://harmoniq-azure.vercel.app) | [монорепо](https://github.com/Volodymyr-But2025/harmoniq) |
| [Меблерія](https://volodymyr-but2025.github.io/Progect_team-PlusUltra/) — каталог меблів | Team Lead і Front-End Developer, команда з 10 осіб (Vite, Axios, REST API) | [GitHub Pages](https://volodymyr-but2025.github.io/Progect_team-PlusUltra/) | [репозиторій](https://github.com/Volodymyr-But2025/Mebleriya) |
| [Tattoo Calculator](https://tattoo-calculator-ashen.vercel.app/) — калькулятор ціни тату | Front-End Developer, особистий PWA (React, Vite, Tailwind) | [Vercel](https://tattoo-calculator-ashen.vercel.app/) | [репозиторій](https://github.com/Volodymyr-But2025/TattooCalculator) |
| [EcoTote](https://volodymyr-but2025.github.io/Team_junior/) — лендінг | Front-End Developer, секція Support (Vite: форма, валідація, ретина) | [GitHub Pages](https://volodymyr-but2025.github.io/Team_junior/) | [репозиторій](https://github.com/Volodymyr-But2025/Team_junior) |

## Стек

| Шар | Технології |
| --- | --- |
| UI | React 19, Next.js 16 (App Router), TypeScript, CSS Modules, Mantine |
| i18n | власні словники `uk` / `en`, cookie `portfolio-locale`, middleware |
| Тести | Vitest, Testing Library, jsdom |
| Якість | ESLint (`eslint-config-next`) |
| Деплой | [Vercel](https://portfolio-ve1w.vercel.app/) (`master` → production) |

## Запуск

```bash
npm install
npm run dev
```

Відкрий [http://localhost:3000](http://localhost:3000).

```bash
npm run lint      # ESLint
npm run test:run  # Vitest один раз
npm run build     # production-збірка
```

## Структура

```
src/app/           # layout, головна сторінка, favicon / icon.svg, глобальні стилі
src/components/    # hero, tech stack, картки проєктів, тогли
src/data/          # контакти, стек, проєкти
src/i18n/          # локалі, словники, Accept-Language
src/test/          # helpers для Vitest
middleware.ts      # виставляє cookie мови
public/            # og.png і постери проєктів
docs/screenshots/  # скріншоти для README
```

## Контакти

- Telegram: [t.me/Volodymyr_Butenko_Y](https://t.me/Volodymyr_Butenko_Y)
- GitHub: [Volodymyr-But2025](https://github.com/Volodymyr-But2025)
- LinkedIn: [volodymyr-butenko-y](https://www.linkedin.com/in/volodymyr-butenko-y)
- Портфоліо: [portfolio-ve1w.vercel.app](https://portfolio-ve1w.vercel.app/)
