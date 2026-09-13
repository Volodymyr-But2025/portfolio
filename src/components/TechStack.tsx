"use client";

import { Badge, Card } from "@mantine/core";
import { techStack } from "@/data/tech-stack";
import { useLocale } from "@/components/LocaleProvider";
import styles from "./TechStack.module.css";

export function TechStack() {
  const { locale, dictionary } = useLocale();

  return (
    <section className={styles.section} aria-labelledby="tech-title">
      <h2 id="tech-title" className={styles.title}>
        {dictionary.tech.title}
      </h2>
      <div className={styles.grid}>
        {techStack.map((group) => (
          <Card
            key={group.id}
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            className={styles.card}
          >
            <h3 className={styles.groupTitle}>{group.title[locale]}</h3>
            <ul className={styles.list}>
              {group.items.map((item) => (
                <li key={item}>
                  <Badge variant="light" radius="sm">
                    {item}
                  </Badge>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}
