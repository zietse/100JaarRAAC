import type { Localized } from "../i18n/utils";

export interface TimelineImage {
  /** Path from /public/, e.g. "/resources/archive/history1.jpg". */
  src: string;
  /** Short description of the photo, per language, for screen readers. */
  alt?: Localized;
}

export interface TimelineEntry {
  /** Displayed as-is. Use a span ("1940–1945") where a single year lies. */
  year: string;
  title: Localized;
  body: Localized;
  /**
   * Optional photo shown next to the text. Put the file in /public/ and give
   * its path from there, e.g. "/resources/archive/history1.jpg" for
   * public/resources/archive/history1.jpg. Leave out for text-only entries.
   */
  image?: string;
  /** Short description of the photo, per language, for screen readers. */
  imageAlt?: Localized;
  /**
   * Two photos side by side instead of one. Use this *instead of* `image`;
   * both are shown at the same size, cropped to the same shape.
   */
  images?: TimelineImage[];
  /** Visual emphasis. Keep it to three or four across the whole list. */
  landmark?: boolean;
}

/**
 * Entries marked [VERIFIED] come from public sources about the club.
 * Entries marked [PLACEHOLDER] are invented to show the shape of the
 * component and MUST be replaced from the club archive and the RAAC-echo.
 * Grep for PLACEHOLDER before publishing.
 */
export const timeline: TimelineEntry[] = [
  {
    // [VERIFIED] founded 3 November 1927 by Pierre Schellekens;
    // Jan Olieslagers first chairman.
    year: "1927",
    landmark: true,
    title: {
      nl: "Oprichting van de Antwerp Aviation Club",
      fr: "Fondation de l'Antwerp Aviation Club",
      en: "The Antwerp Aviation Club is founded",
    },
    body: {
      nl: "Bij de oprichting van de Antwerp Aviation Club speelden Pierre-Henri Schellekens en Jan Olieslagers een centrale rol. Olieslagers werd de eerste voorzitter. De club is sinds haar pioniersjaren sterk verbonden met Deurne en Antwerpen.",
      fr: "Pierre-Henri Schellekens et Jan Olieslagers ont joué un rôle central dans la fondation de l'Antwerp Aviation Club. Olieslagers en est devenu le premier président. Depuis ses années pionnières, le club est étroitement lié à Deurne et à Anvers.",
      en: "Pierre-Henri Schellekens and Jan Olieslagers played a central role in founding the Antwerp Aviation Club. Olieslagers became its first chairman. Since its pioneering years, the club has been closely tied to Deurne and Antwerp.",
    },
    image: "/resources/archive/history1.jpg",
  },
  {
    year: "1930",
    title: {
      nl: "Luchthavengebouw van Deurne icoon van moderne Antwerpse luchtvaart",
      fr: "L'aérogare de Deurne, icône de l'aviation anversoise moderne",
      en: "Deurne's airport building, an icon of modern Antwerp aviation",
    },
    body: {
      nl: "Het luchthavengebouw van Deurne, ontworpen door Stanislas Jasinski in de stijl van de nieuwe zakelijkheid, werd een icoon van de moderne Antwerpse luchtvaart.",
      fr: "Conçue par Stanislas Jasinski dans le style de la Nouvelle Objectivité, l'aérogare de Deurne est devenue une icône de l'aviation anversoise moderne.",
      en: "Designed by Stanislas Jasinski in the New Objectivity style, Deurne's airport building became an icon of modern Antwerp aviation.",
    },
    image: "/resources/archive/history2.jpg",
  },
  {
    year: "1931-1940",
    title: {
      nl: "Beginperiode vliegclub",
      fr: "Les débuts du club",
      en: "The club's early years",
    },
    body: {
      nl: "In de pioniersjaren beschikte de Antwerp Aviation Club over eigen vliegtuigen. Archiefbeelden tonen het vliegen als nieuw avontuur, nog lang vóór moderne cockpitinstrumenten.",
      fr: "Dans ses années pionnières, l'Antwerp Aviation Club disposait de ses propres avions. Les images d'archives montrent le vol comme une aventure nouvelle, bien avant les instruments de cockpit modernes.",
      en: "In its pioneering years, the Antwerp Aviation Club had its own aircraft. Archive images show flying as a new adventure, long before modern cockpit instruments.",
    },
  },
  {
    // [PLACEHOLDER]
    year: "1940–1945",
    title: {
      nl: "De club ligt stil",
      fr: "Le club à l'arrêt",
      en: "The club stops",
    },
    body: {
      nl: "PLACEHOLDER — vul aan vanuit het archief: wat gebeurde er met de toestellen, de hangar en de leden tijdens de bezetting?",
      fr: "PLACEHOLDER — à compléter depuis les archives : qu'est-il advenu des appareils, du hangar et des membres pendant l'occupation ?",
      en: "PLACEHOLDER — fill in from the archive: what happened to the aircraft, the hangar and the members during the occupation?",
    },
  },
  {
    // [VERIFIED] royal title granted at the 25th anniversary, 1952.
    year: "1952",
    landmark: true,
    title: {
      nl: "Koninklijke vereniging",
      fr: "Société royale",
      en: "A royal association",
    },
    body: {
      nl: "Bij het 25-jarig bestaan wordt de club een koninklijke vereniging: Royal Antwerp Aviation Club, kortweg RAAC.",
      fr: "Pour ses 25 ans, le club devient une société royale : Royal Antwerp Aviation Club, en abrégé RAAC.",
      en: "At its 25th anniversary the club becomes a royal association: Royal Antwerp Aviation Club, RAAC for short.",
    },
  },
  {
    year: "1955",
    landmark: true,
    title: {
      nl: "Vliegopleidingen",
      fr: "Formations au pilotage",
      en: "Flight training",
    },
    body: {
      nl: "Leren vliegen werd een blijvende opdracht van de club. De oude vliegschoolbeelden vormen een brug naar de opleiding van hedendaagse privé-piloten. Al in de beginjaren kwamen vliegtuigbezitters, instructeurs en leerlingen op Deurne samen.",
      fr: "",
      en: "",
    },
    images: [
    { src: "/resources/archive/history3.jpg" },
    { src: "/resources/archive/history4.jpg" },
    ],
  },
  {
    // [VERIFIED] fleet of ten aircraft; 1000 flying hours passed for the
    // first time in 1959.
    year: "1959",
    title: {
      nl: "Tien toestellen en duizend vlieguren",
      fr: "Dix appareils et mille heures de vol",
      en: "Ten aircraft and a thousand flying hours",
    },
    body: {
      nl: "De clubvloot bestaat uit tien toestellen. Voor het eerst gaat de club over de duizend vlieguren in één jaar.",
      fr: "La flotte compte dix appareils. Pour la première fois, le club dépasse les mille heures de vol en une année.",
      en: "The fleet reaches ten aircraft. For the first time the club passes a thousand flying hours in a single year.",
    },
  },
  {
    // [PLACEHOLDER]
    year: "1970s",
    title: {
      nl: "De modelbouwafdeling",
      fr: "La section aéromodélisme",
      en: "The model aircraft section",
    },
    body: {
      nl: "PLACEHOLDER — wanneer is de modelbouwafdeling precies gestart, en door wie?",
      fr: "PLACEHOLDER — quand la section aéromodélisme a-t-elle démarré exactement, et à l'initiative de qui ?",
      en: "PLACEHOLDER — when exactly did the model aircraft section start, and who started it?",
    },
  },
  // {
  //   // [PLACEHOLDER]
  //   year: "1990s",
  //   title: {
  //     nl: "De RAAC-echo",
  //     fr: "Le RAAC-echo",
  //     en: "The RAAC-echo",
  //   },
  //   body: {
  //     nl: "PLACEHOLDER — het driemaandelijkse clubtijdschrift. Sinds wanneer verschijnt het, en wie maakte de eerste nummers?",
  //     fr: "PLACEHOLDER — la revue trimestrielle du club. Depuis quand paraît-elle, et qui a réalisé les premiers numéros ?",
  //     en: "PLACEHOLDER — the quarterly club magazine. How long has it been running, and who made the first issues?",
  //   },
  // },
  {
    // [VERIFIED] DTO BE.DTO.115, PPL(A) training, SEP class rating,
    // Night VFR and sailplane towing ratings.
    year: "2019",
    title: {
      nl: "Erkend als DTO",
      fr: "Agréée comme DTO",
      en: "Recognised as a DTO",
    },
    body: {
      nl: "De club wordt erkend als Declared Training Organisation (BE.DTO.115) en mag de volledige opleiding tot Privaat Piloot PPL(A) organiseren, naast de ratings SEP, Night VFR en Sailplane Towing.",
      fr: "Le club est agréé comme Declared Training Organisation (BE.DTO.115) et peut organiser la formation complète de Pilote Privé PPL(A), ainsi que les qualifications SEP, Night VFR et remorquage de planeurs.",
      en: "The club is recognised as a Declared Training Organisation (BE.DTO.115), able to run the full PPL(A) course alongside the SEP, Night VFR and sailplane towing ratings.",
    },
  },
  {
    // [VERIFIED] four four-seaters: two Piper Warriors (one IFR),
    // a Robin DR400 and a Robin DR401, both diesel; 200+ members.
    year: "2026",
    title: {
      nl: "Vier toestellen, meer dan tweehonderd leden",
      fr: "Quatre appareils, plus de deux cents membres",
      en: "Four aircraft, more than two hundred members",
    },
    body: {
      nl: "De vloot bestaat uit twee Piper Warriors en twee Robins met dieselmotor, alle vier vierzitters en alle vier inzetbaar voor opleiding.",
      fr: "La flotte se compose de deux Piper Warrior et de deux Robin à moteur diesel, tous quatre places et tous utilisables pour la formation.",
      en: "The fleet is two Piper Warriors and two diesel-engined Robins, all four-seaters, all usable for training.",
    },
  },
  {
    year: "2027",
    landmark: true,
    title: {
      nl: "Honderd jaar",
      fr: "Cent ans",
      en: "A hundred years",
    },
    body: {
      nl: "Dezelfde luchthaven. Een jubileumweekend in november.",
      fr: "Le même aéroport. Un week-end de centenaire en novembre.",
      en: "The same airport. A centenary weekend in November.",
    },
  },
];
