import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/data/projects";
import { dictionaries } from "@/i18n/dictionaries";
import { renderWithProviders, screen } from "@/test/render";

const project: Project = {
  id: "demo",
  title: {
    uk: "Демо проєкт",
    en: "Demo project",
  },
  description: {
    uk: "Опис українською",
    en: "Description in English",
  },
  demoUrl: "https://example.com/demo",
  githubUrl: "https://github.com/example/demo",
  tags: ["React", "TypeScript"],
  features: {
    uk: ["Фіча 1"],
    en: ["Feature 1"],
  },
  fallbackImage: "/projects/demo.png",
};

describe("ProjectCard", () => {
  it("renders localized content and safe external links", () => {
    renderWithProviders(<ProjectCard project={project} />, { locale: "uk" });

    expect(
      screen.getByRole("heading", { level: 3, name: "Демо проєкт" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Опис українською")).toBeInTheDocument();

    const github = screen.getByRole("link", {
      name: dictionaries.uk.projectCard.github,
    });
    const liveDemo = screen.getByRole("link", {
      name: dictionaries.uk.projectCard.liveDemo,
    });

    expect(github).toHaveAttribute("href", project.githubUrl);
    expect(github).toHaveAttribute("rel", "noopener noreferrer");
    expect(liveDemo).toHaveAttribute("href", project.demoUrl);
    expect(liveDemo).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("keeps refresh and modal disabled until interactive launch", () => {
    renderWithProviders(<ProjectCard project={project} />, { locale: "uk" });

    expect(
      screen.getByRole("button", {
        name: dictionaries.uk.projectCard.refreshIframe,
      }),
    ).toBeDisabled();
    expect(
      screen.getByRole("button", {
        name: dictionaries.uk.projectCard.openModal,
      }),
    ).toBeDisabled();
    expect(screen.queryByTitle(/Інтерактивне прев’ю проєкту/)).toBeNull();
  });

  it("shows iframe after launch and closes it on Escape", async () => {
    const user = userEvent.setup();
    renderWithProviders(<ProjectCard project={project} />, { locale: "uk" });

    await user.click(
      screen.getByRole("button", {
        name: dictionaries.uk.projectCard.launchInteractive,
      }),
    );

    const iframe = screen.getByTitle(
      `${dictionaries.uk.projectCard.iframeTitle}: ${project.title.uk}`,
    );
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute("src", project.demoUrl);

    await user.keyboard("{Escape}");

    expect(
      screen.queryByTitle(
        `${dictionaries.uk.projectCard.iframeTitle}: ${project.title.uk}`,
      ),
    ).toBeNull();
    expect(
      screen.getByRole("button", {
        name: dictionaries.uk.projectCard.launchInteractive,
      }),
    ).toBeInTheDocument();
  });
});
