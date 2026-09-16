# Volodymyr — Full Stack Developer

Особисте портфоліо на **Next.js 16**: коротко про мене, стек і навчальні проєкти з інтерактивним прев’ю в iframe.

Live: [https://portfolio-ve1w.vercel.app](https://portfolio-ve1w.vercel.app/)

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
      <img src="docs/screenshots/projects-light.png" alt="Інтерактивне прев’ю проєкту Меблерія">
    </td>
    <td align="center">
      <strong>Мобільна версія</strong><br>
      <img src="docs/screenshots/mobile-light.png" alt="Портфоліо на вузькому екрані з перемикачами мови та теми">
    </td>
  </tr>
</table>

## Що вміє сайт

- **UA / EN** — мова з cookie і заголовка `Accept-Language` (без окремого URL для кожної локалі).
- **Світла / темна тема** — через Mantine `ColorSchemeScript`, з урахуванням системної схеми.
- **Інтерактивні прев’ю** — постер проєкту, запуск iframe за кліком, оновлення, модалка, пресети телефон / планшет / ПК.
- **Контакти** — Telegram, GitHub, LinkedIn.
- **Доступність** — підписи кнопок, `focus-visible`, `rel="noopener noreferrer"` на зовнішніх лінках.

Якщо сайт блокує вбудовування (`X-Frame-Options` / CSP), прев’ю може бути порожнім — тоді відкривається Live Demo в новій вкладці.

## Стек

| Шар | Технології |
| --- | --- |
| UI | React 19, Next.js 16 (App Router), TypeScript, CSS Modules, Mantine |
| i18n | власні словники `uk` / `en`, cookie `portfolio-locale`, middleware |
| Тести | Vitest, Testing Library, jsdom |
| Якість | ESLint (`eslint-config-next`) |

Проєкти в каталозі зараз: **Harmoniq** (Full-Stack), **Меблерія** (Team Lead / Front-End) і **EcoTote** (секція Support). Дані лежать у `src/data/`.

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
src/app/           # layout, головна сторінка, глобальні стилі
src/components/    # hero, tech stack, картки проєктів, тогли
src/data/          # контакти, стек, проєкти
src/i18n/          # локалі, словники, Accept-Language
middleware.ts      # виставляє cookie мови
public/            # og.png і постери проєктів
```

## Контакти

- Telegram: [t.me/Volodymyr_Butenko_Y](https://t.me/Volodymyr_Butenko_Y)
- GitHub: [Volodymyr-But2025](https://github.com/Volodymyr-But2025)
- LinkedIn: [volodymyr-butenko-y](https://www.linkedin.com/in/volodymyr-butenko-y)
