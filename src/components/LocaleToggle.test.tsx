import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { LocaleToggle } from "./LocaleToggle";
import { useLocale } from "./LocaleProvider";
import { dictionaries } from "@/i18n/dictionaries";
import { LOCALE_COOKIE } from "@/i18n/config";
import { render, renderWithProviders, screen } from "@/test/render";

function LocaleProbe() {
  const { locale, dictionary } = useLocale();
  return (
    <div>
      <span data-testid="locale">{locale}</span>
      <span data-testid="tech-title">{dictionary.tech.title}</span>
    </div>
  );
}

describe("useLocale", () => {
  it("throws when used outside LocaleProvider", () => {
    expect(() => render(<LocaleProbe />)).toThrow(
      "useLocale must be used within LocaleProvider",
    );
  });
});

describe("LocaleToggle", () => {
  it("switches locale, cookie and document lang", async () => {
    const user = userEvent.setup();
    document.documentElement.lang = "uk";
    document.cookie = `${LOCALE_COOKIE}=uk; Path=/`;

    renderWithProviders(
      <>
        <LocaleToggle />
        <LocaleProbe />
      </>,
      { locale: "uk" },
    );

    expect(screen.getByTestId("locale")).toHaveTextContent("uk");
    expect(screen.getByTestId("tech-title")).toHaveTextContent(
      dictionaries.uk.tech.title,
    );

    await user.click(
      screen.getByRole("button", {
        name: dictionaries.uk.localeToggle.label,
      }),
    );

    expect(screen.getByTestId("locale")).toHaveTextContent("en");
    expect(screen.getByTestId("tech-title")).toHaveTextContent(
      dictionaries.en.tech.title,
    );
    expect(document.documentElement.lang).toBe("en");
    expect(document.cookie).toContain(`${LOCALE_COOKIE}=en`);
  });
});
