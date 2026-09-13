"use client";

import { contacts } from "@/data/contacts";
import { useLocale } from "@/components/LocaleProvider";
import { LocaleToggle } from "@/components/LocaleToggle";
import { ThemeToggle } from "@/components/ThemeToggle";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  const { dictionary } = useLocale();

  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.toolbar}>
        <LocaleToggle />
        <ThemeToggle />
      </div>

      <p className={styles.eyebrow}>{dictionary.hero.role}</p>
      <h1 id="hero-title" className={styles.title}>
        {dictionary.hero.name}
      </h1>
      <p className={styles.subtitle}>{dictionary.hero.subtitle}</p>

      <ul className={styles.contacts}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <a
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              {contact.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={scrollToProjects}
        className={styles.cta}
      >
        {dictionary.hero.cta}
      </button>
    </section>
  );
}
