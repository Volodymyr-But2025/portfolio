"use client";

import { hero } from "@/data/hero";
import { useLocale } from "@/components/LocaleProvider";
import { LocaleToggle } from "@/components/LocaleToggle";
import { ThemeToggle } from "@/components/ThemeToggle";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  const { locale } = useLocale();

  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.banner}>
        <div className={styles.toolbar}>
          <LocaleToggle />
          <ThemeToggle />
        </div>

        <div className={styles.card}>
          <h1 id="hero-title" className={styles.title}>
            {hero.name}
          </h1>
          <p className={styles.role}>{hero.role}</p>
          <p className={styles.stack}>{hero.stack.join(" · ")}</p>
          <div className={styles.flag} aria-hidden>
            <span className={styles.flagBlue} />
            <span className={styles.flagYellow} />
          </div>

          <p className={styles.subtitle}>{hero.subtitle[locale]}</p>

          <ul className={styles.contacts}>
            {hero.contacts.map((contact) => (
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
            {hero.cta[locale]}
          </button>
        </div>
      </div>
    </section>
  );
}
