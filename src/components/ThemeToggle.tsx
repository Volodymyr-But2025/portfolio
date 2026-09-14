"use client";

import { useMantineColorScheme } from "@mantine/core";
import { Moon, Sun } from "lucide-react";
import { useLocale } from "@/components/LocaleProvider";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  const { dictionary } = useLocale();
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <button
      type="button"
      onClick={toggleColorScheme}
      aria-label={dictionary.themeToggle.label}
      className={styles.toggle}
    >
      <span className={styles.icons}>
        <Sun size={18} className={styles.sun} aria-hidden />
        <Moon size={18} className={styles.moon} aria-hidden />
      </span>
    </button>
  );
}
