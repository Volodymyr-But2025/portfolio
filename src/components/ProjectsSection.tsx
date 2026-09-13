"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { useLocale } from "@/components/LocaleProvider";
import styles from "@/app/page.module.css";

export function ProjectsSection() {
  const { dictionary } = useLocale();

  return (
    <section
      id="projects"
      className={styles.projects}
      aria-labelledby="projects-title"
    >
      <h2 id="projects-title" className={styles.projectsTitle}>
        {dictionary.projects.title}
      </h2>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
