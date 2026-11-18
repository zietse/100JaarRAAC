import type { Localized } from "../i18n/utils";

export interface Aircraft {
  /** Year the club bought or registered it. */
  year: string;
  /** Type and, where known, registration. Not translated. */
  name: string;
  body: Localized;
  /** Path from /public/. Shown cropped to 3:2. */
  image: string;
}

/**
 * Purchase years and descriptions follow the working group's narrative.
 * Which photo belongs to which aircraft, and the exact registrations, are
 * still to be checked against the club archive. Several photos are shared
 * with the timeline (src/data/timeline.ts).
 */
export const fleet: Aircraft[] = [
  {
    year: "1928",
    name: "RSV 32/90 (OO-AJP)",
    body: {
      nl: "Op 22 oktober 1928 ingeschreven: een van de eerste toestellen van de Antwerp Aviation Club.",
      fr: "Immatriculé le 22 octobre 1928 : l'un des premiers appareils de l'Antwerp Aviation Club.",
      en: "Registered on 22 October 1928: one of the Antwerp Aviation Club's first aircraft.",
    },
    image: "/resources/history/1928-de-eerste-toestellen.jpg",
  },
  {
    year: "1930",
    name: "Orta St-Hubert G-1",
    body: {
      nl: "Belgisch ontwerp van Jef Guldentops, gebouwd in Saint-Hubert.",
      fr: "Conception belge de Jef Guldentops, construit à Saint-Hubert.",
      en: "A Belgian design by Jef Guldentops, built in Saint-Hubert.",
    },
    image: "/resources/history/1930-belgisch-ontwerp-in-de-hangar.jpg",
  },
  {
    year: "1933",
    name: "Stinson Reliant SR-6",
    body: {
      nl: "Amerikaanse hoogdekker met vier à vijf zitplaatsen en een negencilinder stermotor; eerste Antwerpse vlucht in januari 1933.",
      fr: "Monoplan américain à aile haute, quatre à cinq places et moteur en étoile à neuf cylindres ; premier vol anversois en janvier 1933.",
      en: "American high-wing with four to five seats and a nine-cylinder radial engine; first Antwerp flight in January 1933.",
    },
    image: "/resources/fleet/1933-stinson-reliant-sr-6.jpg",
  },
  {
    year: "1933",
    name: "Stampe & Vertongen SV-4",
    body: {
      nl: "Het bekendste en commercieel succesvolste toestel: de club koopt er eerst vijf.",
      fr: "L'appareil le plus connu et le plus grand succès commercial : le club en achète d'abord cinq.",
      en: "The best-known and most commercially successful type: the club buys five to begin with.",
    },
    image: "/resources/history/1933-de-stinson-reliant-en-de-eerste-sv-4-s.jpg",
  },
  {
    year: "1937",
    name: "Caudron C.601 Aiglon",
    body: {
      nl: "Ranke houten laagdekker; met dit toestel start de AAC-vliegschool.",
      fr: "Monoplan en bois élancé à aile basse ; c'est avec lui que démarre l'école de pilotage de l'AAC.",
      en: "A slender wooden low-wing; the AAC flying school starts with it.",
    },
    image: "/resources/history/1937-de-vliegschool-start.jpg",
  },
  {
    year: "1939",
    name: "Tipsy B",
    body: {
      nl: "Tweezitter, ontworpen door Ernest Oscar Tips en in België gebouwd door Avions Fairey.",
      fr: "Biplace conçu par Ernest Oscar Tips et construit en Belgique par Avions Fairey.",
      en: "Two-seater designed by Ernest Oscar Tips and built in Belgium by Avions Fairey.",
    },
    image: "/resources/fleet/1939-tipsy-b.jpg",
  },
  {
    year: "1946",
    name: "Piper L-4H Grasshopper",
    body: {
      nl: "Licht en wendbaar; de club koopt er twee (OO-REX en OO-JOE).",
      fr: "Léger et maniable ; le club en achète deux (OO-REX et OO-JOE).",
      en: "Light and nimble; the club buys two (OO-REX and OO-JOE).",
    },
    image: "/resources/history/1946-51-heropstart-met-piper-ercoupe-en-auster.jpg",
  },
  {
    year: "1949",
    name: "Ercoupe 415 CD",
    body: {
      nl: "Gedurfd concept zonder voetenstuur, met een stevig onderstel.",
      fr: "Concept audacieux sans palonnier, avec un train d'atterrissage robuste.",
      en: "A daring design with no rudder pedals and a sturdy undercarriage.",
    },
    image: "/resources/fleet/1949-ercoupe-415-cd.jpg",
  },
  {
    year: "1951",
    name: "Auster J2 Arrow",
    body: {
      nl: "Brits tweezitter met naast elkaar geplaatste stoelen: de ‘Royal’ AAC koopt Brits.",
      fr: "Biplace britannique à sièges côte à côte : l'AAC « royale » achète britannique.",
      en: "British two-seater with side-by-side seats: the ‘Royal’ AAC buys British.",
    },
    image: "/resources/fleet/1951-auster-j2-arrow.jpg",
  },
  {
    year: "1956",
    name: "De Havilland Chipmunk DHC-1",
    body: {
      nl: "Canadees trainingstoestel met twee stoelen in tandem en staartwiel.",
      fr: "Avion d'entraînement canadien, deux places en tandem et roulette de queue.",
      en: "Canadian trainer with two seats in tandem and a tailwheel.",
    },
    image: "/resources/history/1956-chipmunk-en-zweefvliegen.jpg",
  },
  {
    year: "1959",
    name: "Schleicher Ka 2B",
    body: {
      nl: "Eerste zweefvliegtuig van de club; tot 1974 volgen nog vijf zweeftoestellen.",
      fr: "Premier planeur du club ; cinq autres suivront jusqu'en 1974.",
      en: "The club's first glider; five more follow up to 1974.",
    },
    image: "/resources/fleet/1959-schleicher-ka-2b.jpg",
  },
  {
    year: "1959",
    name: "Piper J-3 Cub",
    body: {
      nl: "Beroemd lesvliegtuigje; er werden er meer dan 20.000 gebouwd.",
      fr: "Célèbre avion-école ; plus de 20 000 exemplaires construits.",
      en: "A famous trainer; more than 20,000 were built.",
    },
    image: "/resources/history/1959-tien-toestellen-en-duizend-vlieguren.jpg",
  },
  {
    year: "1961",
    name: "Piper PA-14 Family Cruiser",
    body: {
      nl: "Vierzits sportvliegtuig; slechts 238 exemplaren gebouwd.",
      fr: "Avion de sport quadriplace ; seulement 238 exemplaires construits.",
      en: "Four-seat sport aircraft; only 238 were built.",
    },
    image: "/resources/fleet/1961-piper-pa-14-family-cruiser.jpg",
  },
  {
    year: "1963",
    name: "Tipsy Nipper T.66",
    body: {
      nl: "Acrotoestel dat makkelijk te vliegen en goedkoop te onderhouden is.",
      fr: "Appareil de voltige facile à piloter et bon marché à entretenir.",
      en: "An aerobatic aircraft that is easy to fly and cheap to maintain.",
    },
    image: "/resources/fleet/1963-tipsy-nipper-t-66.jpg",
  },
  {
    year: "1964",
    name: "Zlin Z-22 Junák",
    body: {
      nl: "Tsjechoslowaaks lesvliegtuig van Moravan (het narratief noemt ook 1958).",
      fr: "Avion-école tchécoslovaque de Moravan (le récit mentionne aussi 1958).",
      en: "Czechoslovak trainer built by Moravan (the narrative also gives 1958).",
    },
    image: "/resources/fleet/1964-zlin-z-22-junak.jpg",
  },
  {
    year: "1967",
    name: "Siai-Marchetti S.205",
    body: {
      nl: "Volledig metalen laagdekker voor vier personen.",
      fr: "Monoplan à aile basse entièrement métallique pour quatre personnes.",
      en: "All-metal low-wing for four people.",
    },
    image: "/resources/history/1963-67-acro-en-zlin-tipsy-en-siai-marchetti.jpg",
  },
  {
    year: "1978",
    name: "Cessna 150",
    body: {
      nl: "Ideaal toestel voor beginnende piloten; de club kiest er herhaaldelijk voor.",
      fr: "L'appareil idéal pour les pilotes débutants ; le club le choisit à plusieurs reprises.",
      en: "The ideal aircraft for new pilots; the club chooses it again and again.",
    },
    image: "/resources/history/1974-fusie-met-antwerp-aircraft-owners-club.jpg",
  },
  {
    year: "1985",
    name: "Cessna 172",
    body: {
      nl: "’s Werelds meest geproduceerde vliegtuig; de club koopt er in 1985 en 1991.",
      fr: "L'avion le plus produit au monde ; le club en achète en 1985 et en 1991.",
      en: "The most-produced aircraft in the world; the club buys them in 1985 and 1991.",
    },
    image: "/resources/fleet/1985-cessna-172.jpg",
  },
  {
    year: "1988",
    name: "Boisavia B.60 Mercurey",
    body: {
      nl: "Franse hoogdekker met vier zitplaatsen en vast staartwiel.",
      fr: "Monoplan français à aile haute, quatre places et roulette de queue fixe.",
      en: "French high-wing with four seats and a fixed tailwheel.",
    },
    image: "/resources/fleet/1988-boisavia-b-60-mercurey.jpg",
  },
  {
    year: "1995",
    name: "Piper Warrior III (OO-WAR)",
    body: {
      nl: "Iconisch clubtoestel dat vandaag nog vliegt.",
      fr: "Appareil emblématique du club, qui vole encore aujourd'hui.",
      en: "An iconic club aircraft that still flies today.",
    },
    image: "/resources/history/1995-de-oo-war.jpg",
  },
  {
    year: "2006",
    name: "Robin DR400 Ecoflyer",
    body: {
      nl: "Een van de eerste dieselvliegtuigen in de algemene luchtvaart.",
      fr: "L'un des premiers avions diesel de l'aviation générale.",
      en: "One of the first diesel aircraft in general aviation.",
    },
    image: "/resources/history/2006-07-diesel-en-glass-cockpit.jpg",
  },
  {
    year: "2007",
    name: "Piper Warrior III glass cockpit (OO-PEG)",
    body: {
      nl: "Twee schermen vervangen bijna alle analoge meters; later verkocht.",
      fr: "Deux écrans remplacent presque tous les instruments analogiques ; vendu par la suite.",
      en: "Two screens replace almost all the analogue gauges; later sold.",
    },
    image: "/resources/fleet/2007-piper-warrior-iii-glass-cockpit-oo-peg.jpg",
  },
  {
    year: "2016",
    name: "Robin DR401 (PH-DYX)",
    body: {
      nl: "Modern lichtgewicht met dieselmotor; bijna dagelijks in gebruik door de leden.",
      fr: "Avion léger moderne à moteur diesel ; utilisé presque tous les jours par les membres.",
      en: "A modern lightweight with a diesel engine; flown by members almost every day.",
    },
    image: "/resources/history/2016-nog-een-robin-met-dieselmotor.jpg",
  },
  {
    year: "2025",
    name: "Robin (OO-MPL)",
    body: {
      nl: "Tweede Robin met deels digitale cockpit en krachtige dieselmotor.",
      fr: "Deuxième Robin, avec un cockpit en partie numérique et un puissant moteur diesel.",
      en: "A second Robin with a partly digital cockpit and a powerful diesel engine.",
    },
    image: "/resources/fleet/2025-robin-oo-mpl.jpg",
  },
  {
    year: "2025",
    name: "Diamond DA40 NG (OO-MAV)",
    body: {
      nl: "Hét paradetoestel van de club: composiet, zuinig en met Garmin G1000 NXi.",
      fr: "L'avion vedette du club : composite, économe et équipé du Garmin G1000 NXi.",
      en: "The club's flagship: composite, economical and fitted with the Garmin G1000 NXi.",
    },
    image: "/resources/fleet/2025-diamond-da40-ng-oo-mav.jpg",
  },
];
