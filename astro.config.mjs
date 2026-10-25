// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Hosted on GitHub Pages under /100JaarRAAC/. When moving to a custom
  // domain (e.g. raac.be), set `site` to that domain and remove `base`.
  site: "https://zietse.github.io",
  base: "/100JaarRAAC",

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
