import { describe, expect, it } from "vitest";
import { isLocale } from "./config";

describe("isLocale", () => {
  it("accepts uk and en", () => {
    expect(isLocale("uk")).toBe(true);
    expect(isLocale("en")).toBe(true);
  });

  it("rejects invalid values", () => {
    expect(isLocale(undefined)).toBe(false);
    expect(isLocale(null)).toBe(false);
    expect(isLocale("")).toBe(false);
    expect(isLocale("fr")).toBe(false);
    expect(isLocale("UK")).toBe(false);
    expect(isLocale("en-US")).toBe(false);
  });
});
