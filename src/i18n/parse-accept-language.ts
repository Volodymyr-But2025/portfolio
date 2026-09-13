import { defaultLocale, type Locale } from "./config";

/**
 * Parses Accept-Language by the first tag only.
 * Example: "uk-UA,uk;q=0.9,en;q=0.8" → "uk"
 * Never use includes("en") on the whole header.
 */
export function parseAcceptLanguage(
  header: string | null | undefined,
): Locale {
  if (!header) {
    return defaultLocale;
  }

  const firstTag = header.split(",")[0]?.trim().toLowerCase();
  if (!firstTag) {
    return defaultLocale;
  }

  const language = firstTag.split(";")[0]?.trim() ?? "";

  if (language.startsWith("uk")) {
    return "uk";
  }

  if (language.startsWith("en")) {
    return "en";
  }

  return defaultLocale;
}
