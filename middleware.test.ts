import { describe, expect, it } from "vitest";
import { NextRequest } from "next/server";
import { middleware } from "./middleware";
import { LOCALE_COOKIE } from "./src/i18n/config";

function createRequest(options?: {
  cookie?: string;
  acceptLanguage?: string;
}) {
  const headers = new Headers();
  if (options?.acceptLanguage) {
    headers.set("accept-language", options.acceptLanguage);
  }
  if (options?.cookie) {
    headers.set("cookie", `${LOCALE_COOKIE}=${options.cookie}`);
  }

  return new NextRequest("http://localhost:3000/", { headers });
}

function getSetCookie(response: Response): string | undefined {
  const headers = response.headers as Headers & {
    getSetCookie?: () => string[];
  };
  const list = headers.getSetCookie?.() ?? [];
  if (list.length > 0) {
    return list.find((value) => value.startsWith(`${LOCALE_COOKIE}=`));
  }
  return response.headers.get("set-cookie") ?? undefined;
}

describe("middleware", () => {
  it("does not overwrite a valid locale cookie", () => {
    const response = middleware(
      createRequest({ cookie: "en", acceptLanguage: "uk-UA" }),
    );
    const setCookie = getSetCookie(response);

    expect(setCookie).toBeUndefined();
  });

  it("sets locale cookie from Accept-Language when cookie is missing", () => {
    const response = middleware(
      createRequest({ acceptLanguage: "en-US,en;q=0.9" }),
    );
    const setCookie = getSetCookie(response);

    expect(setCookie).toBeDefined();
    expect(setCookie).toContain(`${LOCALE_COOKIE}=en`);
    expect(setCookie).toMatch(/Path=\//i);
    expect(setCookie).toMatch(/SameSite=Lax/i);
  });

  it("sets locale cookie when existing cookie is invalid", () => {
    const response = middleware(
      createRequest({ cookie: "fr", acceptLanguage: "uk-UA,uk;q=0.9" }),
    );
    const setCookie = getSetCookie(response);

    expect(setCookie).toBeDefined();
    expect(setCookie).toContain(`${LOCALE_COOKIE}=uk`);
  });

  it("falls back to default locale without Accept-Language", () => {
    const response = middleware(createRequest());
    const setCookie = getSetCookie(response);

    expect(setCookie).toBeDefined();
    expect(setCookie).toContain(`${LOCALE_COOKIE}=uk`);
  });
});
