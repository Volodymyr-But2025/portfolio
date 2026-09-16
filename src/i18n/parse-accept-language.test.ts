import { describe, expect, it } from "vitest";
import { parseAcceptLanguage } from "./parse-accept-language";

describe("parseAcceptLanguage", () => {
  it("returns default locale when header is missing", () => {
    expect(parseAcceptLanguage(null)).toBe("uk");
    expect(parseAcceptLanguage(undefined)).toBe("uk");
    expect(parseAcceptLanguage("")).toBe("uk");
  });

  it("parses Ukrainian from the first tag", () => {
    expect(parseAcceptLanguage("uk-UA,uk;q=0.9,en;q=0.8")).toBe("uk");
    expect(parseAcceptLanguage("uk")).toBe("uk");
    expect(parseAcceptLanguage("UK-UA")).toBe("uk");
  });

  it("parses English from the first tag", () => {
    expect(parseAcceptLanguage("en-US")).toBe("en");
    expect(parseAcceptLanguage("en;q=0.8")).toBe("en");
    expect(parseAcceptLanguage("EN-GB,en;q=0.9")).toBe("en");
  });

  it("falls back to default for unsupported languages", () => {
    expect(parseAcceptLanguage("fr-FR")).toBe("uk");
    expect(parseAcceptLanguage("de,en;q=0.8")).toBe("uk");
  });

  it("uses only the first tag, not includes() on the whole header", () => {
    expect(parseAcceptLanguage("uk-UA,uk;q=0.9,en;q=0.8")).toBe("uk");
    expect(parseAcceptLanguage("uk,en;q=0.9")).toBe("uk");
  });
});
