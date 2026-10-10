# RAAC 100 — jubileumweekend 2027

One-page centenary site for the Royal Antwerp Aviation Club. Astro 5 +
Tailwind 4, three languages (nl / fr / en), statically generated, **zero
JavaScript shipped to the browser**.

```
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run check    # astro check + tsc
```

## Colours — read this first

Every colour on the page comes from eight tokens at the top of
`src/styles/global.css`. Nothing else hard-codes a colour, so restyling the
whole site is an eight-line edit.

```css
@theme {
  --color-brand: #0f2c4d;       /* dark bands: header, hero, closing */
  --color-brand-deep: #081a2e;  /* footer */
  --color-accent: #c8102e;      /* marquee, buttons, eyebrows, rules */
  --color-surface: #ffffff;
  --color-surface-alt: #eef1f5;
  --color-line: #d5dae1;
  --color-body: #17222e;
  --color-muted: #586675;
}
```

**These eight values are provisional.** `raac.be` returns
`ROBOTS_DISALLOWED` to automated readers, so they could not be sampled from
the live site. To get the real ones, open raac.be and paste this into the
DevTools console:

```js
const seen = {};
for (const el of document.querySelectorAll("*")) {
  const s = getComputedStyle(el);
  for (const prop of ["color", "backgroundColor", "borderTopColor"]) {
    const v = s[prop];
    if (v && !v.startsWith("rgba(0, 0, 0, 0")) seen[v] = (seen[v] ?? 0) + 1;
  }
}
console.table(
  Object.entries(seen)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15),
);
```

The most frequent non-neutral colour is almost always the brand primary; the
next one that is not a grey is the accent. Drop those into the block above.

If contrast drops below 4.5:1 once the real colours go in, the two places to
watch are `--color-muted` on `--color-surface-alt`, and white text on
`--color-accent` in the marquee and buttons.

## Routes

| URL    | Locale | File                       |
| ------ | ------ | -------------------------- |
| `/`    | nl     | `src/pages/index.astro`    |
| `/fr/` | fr     | `src/pages/fr/index.astro` |
| `/en/` | en     | `src/pages/en/index.astro` |

Each route file is three lines: it renders `layouts/Page.astro` with a
different `lang`. Add or reorder a section once, in `Page.astro`, and all
three follow.

## Page order

```
Marquee        scrolling event facts, the only motion on the page
SiteHeader     club name, section anchors, language switcher
Hero           RAAC 100 / date, time, location / call to action
About          why the weekend exists
Expect         "wat mag je verwachten" checklist
Programme      two days, side by side
Timeline       1927–2027, set in a serif to read as archive
Practical      getting here, access and safety, visiting pilots
Partners       logo wall
Closing        repeat of the call to action
Footer         contact, photo rights, language switcher
```

## Where the content lives

**`src/i18n/ui.ts`** — every interface string. Dutch is the source of truth:

```ts
const nl = { "nav.about": "Het weekend", ... } as const;
export type UIKey = keyof typeof nl;
type Dictionary = Record<UIKey, string>;

const fr: Dictionary = { ... };   // must cover every key in nl
const en: Dictionary = { ... };
```

Forget a key in French and `npm run check` fails with
`Property '"nav.partners"' is missing in type ... but required in type
'Dictionary'`. That is deliberate: a half-translated page is the failure mode
you actually get when a volunteer translator returns a file three weeks
before the event.

**`src/data/timeline.ts`** — the history. Structure is language-neutral,
strings are inline per locale, so a translator sees each entry in context.
Entries carry a comment marking them `[VERIFIED]` or `[PLACEHOLDER]`.

**`src/components/Partners.astro`** — the logo wall. Drop SVGs into
`public/partners/` and set `logo` on each entry; cells without a logo fall
back to the name in type, so the wall still reads while artwork is being
chased down.

## What is real and what is not

Verified from public sources: founded 3 November 1927 by Pierre Schellekens,
Jan Olieslagers first chairman, statutes in the Belgisch Staatsblad in 1928,
42 pilots and 45 supporting members after one year, royal title at the 25th
anniversary in 1952, ten aircraft and the first thousand flying hours in
1959, DTO BE.DTO.115 for PPL(A) plus SEP, Night VFR and sailplane towing, a
current fleet of two Piper Warriors and two diesel Robins, and more than two
hundred members.

Invented and needing replacement: the weekend dates and times, the entire
programme, the practical arrangements, the partner list, and the timeline
entries marked `[PLACEHOLDER]`. Grep for `PLACEHOLDER` before publishing.

The centenary falls in **2027**, not 2026.

## Before going live

- [ ] Swap the eight colour tokens for the real RAAC values.
- [ ] Replace everything marked PLACEHOLDER.
- [ ] Confirm dates, times and the programme with the committee.
- [ ] Have someone from airport operations read the "visiting pilots" and
      "access and safety" blocks. EBAW is a controlled airport and those
      paragraphs are the kind of detail that has to be right.
- [ ] Add `public/og.jpg` at 1200×630. A jubilee page gets shared on WhatsApp
      and Facebook far more than it gets found on Google.
- [ ] Replace `public/favicon.svg` with the club crest.
- [ ] Set the final domain in `astro.config.mjs` → `site`.

## Photographs

The timeline supports an optional image per entry (`image` + `imageAlt` in
`timeline.ts`, served from `public/`). Fine for a handful. Past roughly a
dozen, move them into `src/assets/` and swap `<img>` for Astro's `<Image>`
component, which generates AVIF/WebP with a `srcset` at build time. Scanned
negatives arrive as 30 MB TIFFs and will otherwise sink the page on mobile.

Old club photographs usually have unclear ownership. The footer carries a
credit-and-takedown notice for that reason; keep it.

## Fonts

Self-hosted via Fontsource rather than the Google Fonts CDN. Loading fonts
from Google's CDN transmits visitor IP addresses to a third country, which a
German court found to be a GDPR violation in 2022. Self-hosting sidesteps the
question and removes a third-party connection from the critical path.

Archivo carries the event copy. Source Serif is used only in the timeline, so
the archive reads in a different voice from the rest of the page.

## Motion

The marquee is the only animation. It stops under
`prefers-reduced-motion: reduce`. Sections do not fade in on scroll. That is
a choice, not an omission.

## Deploying

`npm run build` produces a plain static `dist/`. Cloudflare Pages, Netlify and
GitHub Pages all work with no configuration; build command `npm run build`,
output directory `dist`.

Worth adding: `@astrojs/sitemap` (one line in the config, and it understands
the `i18n` block, so it emits the alternate-language links for you) and a
`public/robots.txt`.
