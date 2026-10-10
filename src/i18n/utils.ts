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
 * Turns a locale-neutral path into a localised one.
 * localizePath("/", "fr") -> "/fr/"   localizePath("/", "nl") -> "/"
 */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean}`;
}

/** A value that exists in every language. Used for content data. */
export type Localized = Record<Lang, string>;
