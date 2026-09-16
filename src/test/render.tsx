import { type ReactElement, type ReactNode } from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import { LocaleProvider } from "@/components/LocaleProvider";
import type { Locale } from "@/i18n/config";

type ProvidersProps = {
  children: ReactNode;
  locale?: Locale;
};

function Providers({ children, locale = "uk" }: ProvidersProps) {
  return (
    <MantineProvider defaultColorScheme="auto">
      <LocaleProvider initialLocale={locale}>{children}</LocaleProvider>
    </MantineProvider>
  );
}

type CustomRenderOptions = Omit<RenderOptions, "wrapper"> & {
  locale?: Locale;
};

export function renderWithProviders(
  ui: ReactElement,
  { locale, ...options }: CustomRenderOptions = {},
) {
  return render(ui, {
    wrapper: ({ children }) => (
      <Providers locale={locale}>{children}</Providers>
    ),
    ...options,
  });
}

export * from "@testing-library/react";
