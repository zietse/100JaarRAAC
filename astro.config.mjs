// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Used for canonical + hreflang tags. Change before going live.
  site: "https://raac.be",

  i18n: {
    defaultLocale: "nl",
    locales: ["nl", "fr", "en"],
    routing: {
      // "/" is Dutch, "/fr/" and "/en/" are prefixed.
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
