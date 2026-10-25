import { ui, defaultLang, type Lang, type UIKey } from "./ui";

/** Returns a `t()` bound to one locale. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key];
  };
}

/** Reads the locale out of a URL. Falls back to the default locale. */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split("/");
  if (segment in ui) return segment as Lang;
  return defaultLang;
}

/**
 * Prefixes a root-relative path with the site's `base` (from
 * astro.config.mjs), so links and assets work when the site is served
 * from a subfolder such as GitHub Pages' /100JaarRAAC/.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean}`;
}

/**
 * Turns a locale-neutral path into a localised, base-prefixed one.
 * localizePath("/", "fr") -> "<base>/fr/"   localizePath("/", "nl") -> "<base>/"
 */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return withBase(lang === defaultLang ? clean : `/${lang}${clean}`);
}

/** A value that exists in every language. Used for content data. */
export type Localized = Record<Lang, string>;
