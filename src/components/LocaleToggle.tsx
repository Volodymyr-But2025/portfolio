"use client";

import { useLocale } from "@/components/LocaleProvider";
import styles from "./LocaleToggle.module.css";

export function LocaleToggle() {
  const { locale, dictionary, setLocale } = useLocale();

  const nextLocale = locale === "uk" ? "en" : "uk";
  const tooltip =
    nextLocale === "en"
      ? dictionary.localeToggle.tooltipToEn
      : dictionary.localeToggle.tooltipToUk;

  return (
    <button
      type="button"
      onClick={() => setLocale(nextLocale)}
      aria-label={dictionary.localeToggle.label}
      title={tooltip}
      className={styles.toggle}
    >
      <span className={styles.codes} aria-hidden>
        <span
          className={`${styles.code} ${styles.ua} ${locale === "uk" ? styles.active : ""}`}
        >
          UA
        </span>
        <span className={styles.sep}>/</span>
        <span
          className={`${styles.code} ${styles.en} ${locale === "en" ? styles.active : ""}`}
        >
          EN
        </span>
      </span>
    </button>
  );
}
