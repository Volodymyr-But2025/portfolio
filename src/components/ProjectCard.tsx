"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import {
  Badge,
  Card,
  Modal,
} from "@mantine/core";
import {
  CheckCircle2,
  ExternalLink,
  Maximize2,
  RefreshCw,
  X,
} from "lucide-react";
import type { Project } from "@/data/projects";
import { useLocale } from "@/components/LocaleProvider";
import styles from "./ProjectCard.module.css";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2C6.477 2 2 6.586 2 12.253c0 4.537 2.865 8.387 6.839 9.748.5.094.683-.222.683-.48 0-.237-.009-.866-.014-1.7-2.782.62-3.369-1.38-3.369-1.38-.455-1.182-1.11-1.496-1.11-1.496-.908-.638.069-.625.069-.625 1.004.072 1.532 1.06 1.532 1.06.892 1.57 2.341 1.116 2.91.854.091-.662.35-1.116.636-1.372-2.22-.26-4.555-1.142-4.555-5.082 0-1.122.39-2.04 1.029-2.76-.103-.26-.447-1.302.098-2.714 0 0 .84-.276 2.75 1.054A9.3 9.3 0 0 1 12 6.914a9.3 9.3 0 0 1 2.504.347c1.909-1.33 2.747-1.054 2.747-1.054.547 1.412.203 2.454.1 2.714.64.72 1.028 1.638 1.028 2.76 0 3.95-2.338 4.819-4.566 5.074.359.318.679.945.679 1.904 0 1.374-.012 2.482-.012 2.82 0 .26.18.58.688.48A10.27 10.27 0 0 0 22 12.253C22 6.586 17.523 2 12 2Z" />
    </svg>
  );
}

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { locale, dictionary } = useLocale();
  const iframeId = useId();
  const launchButtonRef = useRef<HTMLButtonElement>(null);
  const [isInteractive, setIsInteractive] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const closeInteractive = useCallback(() => {
    setIsInteractive(false);
    setModalOpen(false);
    requestAnimationFrame(() => {
      launchButtonRef.current?.focus();
    });
  }, []);

  useEffect(() => {
    if (!isInteractive) {
      return;
    }

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        closeInteractive();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isInteractive, closeInteractive]);

  const launchInteractive = () => {
    setIsInteractive(true);
  };

  const refreshIframe = () => {
    setRefreshKey((prev) => prev + 1);
  };

  const handleLaunchKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      launchInteractive();
    }
  };

  const labels = dictionary.projectCard;
  const title = project.title[locale];
  const description = project.description[locale];
  const features = project.features[locale];

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className={styles.card}
    >
      <div className={styles.mockup}>
        <div className={styles.chrome}>
          <div className={styles.dots} aria-hidden>
            <span className={`${styles.dot} ${styles.red}`} />
            <span className={`${styles.dot} ${styles.yellow}`} />
            <span className={`${styles.dot} ${styles.green}`} />
          </div>
          <div className={styles.urlBar} title={project.demoUrl}>
            {project.demoUrl}
          </div>
          <div className={styles.chromeActions}>
            <button
              type="button"
              className={styles.iconButton}
              aria-label={labels.refreshIframe}
              title={labels.refreshIframe}
              onClick={refreshIframe}
              disabled={!isInteractive}
            >
              <RefreshCw size={14} aria-hidden />
            </button>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconButton}
              aria-label={labels.openInNewTab}
              title={labels.openInNewTab}
            >
              <ExternalLink size={14} aria-hidden />
            </a>
            <button
              type="button"
              className={styles.iconButton}
              aria-label={labels.openModal}
              title={labels.openModal}
              onClick={() => setModalOpen(true)}
              disabled={!isInteractive}
            >
              <Maximize2 size={14} aria-hidden />
            </button>
          </div>
        </div>

        <div className={styles.viewport}>
          {!isInteractive ? (
            <>
              {project.fallbackImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.fallbackImage}
                  alt=""
                  className={styles.poster}
                />
              ) : (
                <div className={styles.posterFallback} aria-hidden />
              )}
              <div className={styles.overlay}>
                <button
                  ref={launchButtonRef}
                  type="button"
                  onClick={launchInteractive}
                  onKeyDown={handleLaunchKeyDown}
                  aria-expanded={isInteractive}
                  aria-controls={iframeId}
                  className={styles.launchButton}
                >
                  {labels.launchInteractive}
                </button>
              </div>
            </>
          ) : (
            <>
              <iframe
                id={iframeId}
                key={refreshKey}
                src={project.demoUrl}
                title={`${labels.iframeTitle}: ${title}`}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms"
                className={styles.iframe}
              />
              <div className={styles.closeBar}>
                <button
                  type="button"
                  className={styles.closeButton}
                  onClick={closeInteractive}
                >
                  <X size={14} aria-hidden />
                  {labels.closeInteractive}
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <div className={styles.body}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <ul className={styles.tags}>
          {project.tags.map((tag) => (
            <li key={tag}>
              <Badge variant="light" radius="sm">
                {tag}
              </Badge>
            </li>
          ))}
        </ul>

        <ul className={styles.features}>
          {features.map((feature) => (
            <li key={feature} className={styles.feature}>
              <CheckCircle2
                size={16}
                className={styles.featureIcon}
                aria-hidden
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <p className={styles.hint}>{labels.iframeBlockedHint}</p>

        <div className={styles.actions}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.actionLink}
          >
            <GithubIcon size={16} />
            {labels.github}
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.actionLink} ${styles.actionPrimary}`}
          >
            <ExternalLink size={16} aria-hidden />
            {labels.liveDemo}
          </a>
        </div>
      </div>

      {modalOpen ? (
        <Modal
          opened={modalOpen}
          onClose={() => setModalOpen(false)}
          title={labels.modalTitle}
          size="xl"
          centered
        >
          {isInteractive ? (
            <iframe
              key={`modal-${refreshKey}`}
              src={project.demoUrl}
              title={`${labels.iframeTitle}: ${title}`}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms"
              className={styles.modalIframe}
            />
          ) : null}
        </Modal>
      ) : null}
    </Card>
  );
}
