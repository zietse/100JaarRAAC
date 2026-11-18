import type { Localized } from "../i18n/utils";

/**
 * Which of the three stories an entry belongs to. The timeline filter and
 * the colour of the dot and tag both follow from this.
 */
export type Track = "club" | "airport" | "city";

export interface TimelineImage {
  /** Path from /public/, e.g. "/resources/archive/history1.jpg". */
  src: string;
  /**
   * Short description of the photo, per language, for screen readers and
   * the enlarged view. Leave out to fall back on the entry's title.
   */
  alt?: Localized;
}

export interface TimelineEntry {
  /** Displayed as-is. Use a span ("1940–44") where a single year lies. */
  year: string;
  track: Track;
  title: Localized;
  body: Localized;
  /**
   * Photos shown in the card. Put the file in /public/ and give its path
   * from there. One photo fills the card's image column; two are stacked.
   * Leave out for a text-only card.
   */
  images?: TimelineImage[];
  /** Larger dot. Keep it to three or four across the whole list. */
  landmark?: boolean;
  /** Shows an asterisk: "still to be checked against the club archive". */
  verify?: boolean;
}

/**
 * Listed in chronological order; the page renders them as given.
 * Most entries and photos come from the reference design by the working
 * group. Photo rights (owner, photographer, permission) must be confirmed
 * per photo before publication.
 */
export const timeline: TimelineEntry[] = [
  {
    year: "1923",
    track: "airport",
    title: {
      nl: "Stampe & Vertongen en de eerste luchthaven",
      fr: "Stampe & Vertongen et le premier aéroport",
      en: "Stampe & Vertongen and the first airport",
    },
    body: {
      nl: "Jean Stampe en Maurice Vertongen starten op het veld in Deurne een vliegtuigfabriek en vliegschool. Op Hemelvaartsdag, 23 mei 1923, wordt het eerste volwaardige vliegveld van Antwerpen officieel geopend; een afgedankte spoorwagon dient als eerste ‘aérogare’.",
      fr: "Jean Stampe et Maurice Vertongen créent une usine d'avions et une école de pilotage sur le terrain de Deurne. Le jour de l'Ascension, 23 mai 1923, le premier véritable aérodrome d'Anvers est officiellement inauguré ; un wagon de chemin de fer désaffecté sert de première « aérogare ».",
      en: "Jean Stampe and Maurice Vertongen set up an aircraft factory and flying school on the field at Deurne. On Ascension Day, 23 May 1923, Antwerp's first proper airfield officially opens; a disused railway carriage serves as the first ‘aérogare’.",
    },
    images: [{ src: "/resources/history/1923-stampe-vertongen-en-de-eerste-luchthaven.jpg" }],
  },
  {
    year: "1924",
    track: "airport",
    title: {
      nl: "Eerste internationale lijnvlucht",
      fr: "Premier vol de ligne international",
      en: "First international scheduled flight",
    },
    body: {
      nl: "Sabena opent de route Rotterdam–Antwerpen–Brussel–Straatsburg–Bazel. Antwerpen hoort voortaan bij het Europese netwerk.",
      fr: "La Sabena ouvre la ligne Rotterdam–Anvers–Bruxelles–Strasbourg–Bâle. Anvers fait désormais partie du réseau européen.",
      en: "Sabena opens the Rotterdam–Antwerp–Brussels–Strasbourg–Basel route. Antwerp is now part of the European network.",
    },
    images: [{ src: "/resources/history/1924-eerste-internationale-lijnvlucht.jpg" }],
  },
  {
    year: "1927",
    track: "club",
    landmark: true,
    title: {
      nl: "Oprichting van de Antwerp Aviation Club",
      fr: "Fondation de l'Antwerp Aviation Club",
      en: "The Antwerp Aviation Club is founded",
    },
    body: {
      nl: "Op 3 november 1927 richten Jan Olieslagers en Pierre-Henri Schellekens de Antwerp Aviation Club op. Olieslagers wordt de eerste voorzitter. Sindsdien is de club sterk verbonden met Deurne en Antwerpen.",
      fr: "Le 3 novembre 1927, Jan Olieslagers et Pierre-Henri Schellekens fondent l'Antwerp Aviation Club. Olieslagers en devient le premier président. Depuis, le club est étroitement lié à Deurne et à Anvers.",
      en: "On 3 November 1927, Jan Olieslagers and Pierre-Henri Schellekens found the Antwerp Aviation Club. Olieslagers becomes its first chairman. The club has been closely tied to Deurne and Antwerp ever since.",
    },
    images: [
      { src: "/resources/history/1927-oprichting-van-de-antwerp-aviation-club.jpg" },
      { src: "/resources/archive/history1.jpg" },
    ],
  },
  {
    year: "1928",
    track: "club",
    title: {
      nl: "De eerste toestellen",
      fr: "Les premiers appareils",
      en: "The first aircraft",
    },
    body: {
      nl: "Op 22 oktober 1928 staat de RSV 32/90 OO-AJP als een van de eerste clubtoestellen ingeschreven. Bij de eerste verjaardag telt de club 42 piloten en 45 beschermende leden.",
      fr: "Le 22 octobre 1928, le RSV 32/90 OO-AJP est immatriculé comme l'un des premiers appareils du club. À son premier anniversaire, le club compte 42 pilotes et 45 membres protecteurs.",
      en: "On 22 October 1928 the RSV 32/90 OO-AJP is registered as one of the club's first aircraft. At its first anniversary the club counts 42 pilots and 45 supporting members.",
    },
    images: [{ src: "/resources/history/1928-de-eerste-toestellen.jpg" }],
  },
  {
    year: "1929–32",
    track: "airport",
    verify: true,
    title: {
      nl: "Het luchthavengebouw",
      fr: "L'aérogare",
      en: "The terminal building",
    },
    body: {
      nl: "Naar ontwerp van Stanislas Jasinski verrijst het luchthavengebouw in de stijl van de Nieuwe Zakelijkheid; in 1930 wordt het ingehuldigd. De luchthaven geldt dan als een van de modernste van haar tijd.",
      fr: "Conçue par Stanislas Jasinski, l'aérogare s'élève dans le style de la Nouvelle Objectivité ; elle est inaugurée en 1930. L'aéroport compte alors parmi les plus modernes de son temps.",
      en: "Designed by Stanislas Jasinski, the terminal building rises in the New Objectivity style and is inaugurated in 1930. The airport is then among the most modern of its day.",
    },
    images: [
      { src: "/resources/history/1929-32-het-luchthavengebouw.jpg" },
      { src: "/resources/archive/history2.jpg" },
    ],
  },
  {
    year: "1930",
    track: "city",
    title: {
      nl: "Boerentoren en wereldtentoonstelling",
      fr: "La Boerentoren et l'Exposition universelle",
      en: "The Boerentoren and the World's Fair",
    },
    body: {
      nl: "Antwerpen viert honderd jaar België met een grote internationale expo en het hoogste appartementsgebouw van Europa: de Boerentoren.",
      fr: "Anvers célèbre le centenaire de la Belgique avec une grande exposition internationale et le plus haut immeuble d'habitation d'Europe : la Boerentoren.",
      en: "Antwerp marks a hundred years of Belgium with a major international expo and the tallest residential building in Europe: the Boerentoren.",
    },
    images: [{ src: "/resources/history/1930-boerentoren-en-wereldtentoonstelling.jpg" }],
  },
  {
    year: "1930",
    track: "club",
    title: {
      nl: "Belgisch ontwerp in de hangar",
      fr: "Un appareil belge dans le hangar",
      en: "A Belgian design in the hangar",
    },
    body: {
      nl: "Naast de RSV-types koopt de club de Orta St-Hubert, ontworpen door Jef Guldentops.",
      fr: "Outre les RSV, le club achète l'Orta St-Hubert, conçu par Jef Guldentops.",
      en: "Alongside the RSV types, the club buys the Orta St-Hubert, designed by Jef Guldentops.",
    },
    images: [{ src: "/resources/history/1930-belgisch-ontwerp-in-de-hangar.jpg" }],
  },
  {
    year: "1933",
    track: "city",
    title: {
      nl: "Sint-Annatunnel",
      fr: "Le tunnel Sainte-Anne",
      en: "The Sint-Anna tunnel",
    },
    body: {
      nl: "De voetgangerstunnel onder de Schelde opent in aanwezigheid van koning Albert I en koningin Elisabeth.",
      fr: "Le tunnel piétonnier sous l'Escaut est inauguré en présence du roi Albert Ier et de la reine Élisabeth.",
      en: "The pedestrian tunnel under the Scheldt opens in the presence of King Albert I and Queen Elisabeth.",
    },
    images: [{ src: "/resources/history/1933-sint-annatunnel.jpg" }],
  },
  {
    year: "1933",
    track: "club",
    title: {
      nl: "De Stinson Reliant en de eerste SV-4’s",
      fr: "Le Stinson Reliant et les premiers SV-4",
      en: "The Stinson Reliant and the first SV-4s",
    },
    body: {
      nl: "In januari 1933 maakt de Stinson Reliant SR-6 zijn eerste Antwerpse vlucht. Het lokale paradepaardje, de Stampe & Vertongen SV-4, volgt: de club koopt er eerst vijf.",
      fr: "En janvier 1933, le Stinson Reliant SR-6 effectue son premier vol anversois. Suit la fierté locale, le Stampe & Vertongen SV-4 : le club en achète d'abord cinq.",
      en: "In January 1933 the Stinson Reliant SR-6 makes its first Antwerp flight. The local pride, the Stampe & Vertongen SV-4, follows: the club buys five to begin with.",
    },
    images: [{ src: "/resources/history/1933-de-stinson-reliant-en-de-eerste-sv-4-s.jpg" }],
  },
  {
    year: "1937",
    track: "club",
    title: {
      nl: "De vliegschool start",
      fr: "L'école de pilotage démarre",
      en: "The flying school starts",
    },
    body: {
      nl: "Met de Caudron 601 Aiglon begint de AAC-vliegschool. In 1939 volgt de Tipsy B.",
      fr: "Avec le Caudron 601 Aiglon, l'école de pilotage de l'AAC voit le jour. Le Tipsy B suit en 1939.",
      en: "The AAC flying school begins with the Caudron 601 Aiglon. The Tipsy B follows in 1939.",
    },
    images: [{ src: "/resources/history/1937-de-vliegschool-start.jpg" }],
  },
  {
    year: "1940–44",
    track: "airport",
    verify: true,
    title: {
      nl: "Oorlogsjaren",
      fr: "Les années de guerre",
      en: "The war years",
    },
    body: {
      nl: "De Luftwaffe gebruikt en breidt de luchthaven uit. Na de bevrijding wordt ze een geallieerd vliegveld (Advanced Landing Ground B-70). Wat er met de clubtoestellen en leden gebeurde, vullen we aan uit het archief.",
      fr: "La Luftwaffe utilise et agrandit l'aéroport. Après la libération, il devient un aérodrome allié (Advanced Landing Ground B-70). Ce qu'il est advenu des appareils et des membres du club, nous le compléterons à partir des archives.",
      en: "The Luftwaffe uses and expands the airport. After the liberation it becomes an Allied airfield (Advanced Landing Ground B-70). What happened to the club's aircraft and members we will fill in from the archive.",
    },
    images: [{ src: "/resources/history/1940-44-oorlogsjaren.jpg" }],
  },
  {
    year: "1946–51",
    track: "club",
    title: {
      nl: "Heropstart met Piper, Ercoupe en Auster",
      fr: "Redémarrage avec Piper, Ercoupe et Auster",
      en: "A fresh start with Piper, Ercoupe and Auster",
    },
    body: {
      nl: "Na de oorlog koopt de club de Piper L-4H (OO-REX en OO-JOE), in 1949 de Ercoupe 415 CD en in 1951 de Auster J2 Arrow.",
      fr: "Après la guerre, le club achète les Piper L-4H (OO-REX et OO-JOE), puis l'Ercoupe 415 CD en 1949 et l'Auster J2 Arrow en 1951.",
      en: "After the war the club buys the Piper L-4H (OO-REX and OO-JOE), then the Ercoupe 415 CD in 1949 and the Auster J2 Arrow in 1951.",
    },
    images: [{ src: "/resources/history/1946-51-heropstart-met-piper-ercoupe-en-auster.jpg" }],
  },
  {
    year: "1951–55",
    track: "airport",
    title: {
      nl: "Heropbouw en nieuwe verkeerstoren",
      fr: "Reconstruction et nouvelle tour de contrôle",
      en: "Rebuilding and a new control tower",
    },
    body: {
      nl: "De luchthaven wordt heropgebouwd en gemoderniseerd, met een nieuwe verkeerstoren in 1951. In 1955 starten opnieuw internationale chartervluchten.",
      fr: "L'aéroport est reconstruit et modernisé, avec une nouvelle tour de contrôle en 1951. En 1955, les vols charters internationaux reprennent.",
      en: "The airport is rebuilt and modernised, with a new control tower in 1951. In 1955 international charter flights resume.",
    },
    images: [{ src: "/resources/history/1951-55-heropbouw-en-nieuwe-verkeerstoren.jpg" }],
  },
  {
    // Royal title granted at the 25th anniversary, 1952 (public sources).
    year: "1952",
    track: "club",
    landmark: true,
    title: {
      nl: "Royal Antwerp Aviation Club",
      fr: "Royal Antwerp Aviation Club",
      en: "Royal Antwerp Aviation Club",
    },
    body: {
      nl: "Bij het 25-jarig bestaan wordt de club een koninklijke vereniging: Royal Antwerp Aviation Club, kortweg RAAC.",
      fr: "Pour ses 25 ans, le club devient une société royale : Royal Antwerp Aviation Club, en abrégé RAAC.",
      en: "At its 25th anniversary the club becomes a royal association: Royal Antwerp Aviation Club, RAAC for short.",
    },
    images: [{ src: "/resources/history/1952-royal-antwerp-aviation-club.jpg" }],
  },
  {
    year: "1953",
    track: "city",
    title: {
      nl: "Moderner openbaar vervoer",
      fr: "Des transports publics modernisés",
      en: "Modern public transport",
    },
    body: {
      nl: "De stad rationaliseert en moderniseert de tramlijnen, wat de bereikbaarheid sterk verbetert.",
      fr: "La ville rationalise et modernise ses lignes de tram, ce qui améliore fortement l'accessibilité.",
      en: "The city streamlines and modernises its tram lines, making it far easier to get around.",
    },
    images: [{ src: "/resources/history/1953-moderner-openbaar-vervoer.jpg" }],
  },
  {
    year: "1955",
    track: "club",
    landmark: true,
    title: {
      nl: "Vliegopleidingen",
      fr: "Formations au pilotage",
      en: "Flight training",
    },
    body: {
      nl: "Leren vliegen werd een blijvende opdracht van de club. De oude vliegschoolbeelden vormen een brug naar de opleiding van hedendaagse privé-piloten. Al in de beginjaren kwamen vliegtuigbezitters, instructeurs en leerlingen op Deurne samen.",
      fr: "Apprendre à voler est devenu une mission durable du club. Les anciennes images de l'école de pilotage font le lien avec la formation des pilotes privés d'aujourd'hui. Dès les premières années, propriétaires d'avions, instructeurs et élèves se retrouvaient à Deurne.",
      en: "Teaching people to fly became a lasting mission for the club. The old flying-school photos form a bridge to the training of today's private pilots. Even in the early years, aircraft owners, instructors and students came together at Deurne.",
    },
    images: [
      { src: "/resources/archive/history3.jpg" },
      { src: "/resources/archive/history4.jpg" },
    ],
  },
  {
    year: "1956",
    track: "club",
    verify: true,
    title: {
      nl: "Chipmunk en zweefvliegen",
      fr: "Chipmunk et vol à voile",
      en: "Chipmunk and gliding",
    },
    body: {
      nl: "De Havilland Chipmunk (1956) en de Zlin 22 (1958). In 1959 koopt de club haar eerste zweeftoestel, de Schleicher Ka 2B; tot 1974 volgen nog vijf. Rond dezelfde tijd start ook de modelbouwafdeling.",
      fr: "Le De Havilland Chipmunk (1956) et le Zlin 22 (1958). En 1959, le club achète son premier planeur, le Schleicher Ka 2B ; cinq autres suivront jusqu'en 1974. À la même époque naît aussi la section d'aéromodélisme.",
      en: "The De Havilland Chipmunk (1956) and the Zlin 22 (1958). In 1959 the club buys its first glider, the Schleicher Ka 2B; five more follow up to 1974. Around the same time the model aircraft section starts.",
    },
    images: [{ src: "/resources/history/1956-chipmunk-en-zweefvliegen.jpg" }],
  },
  {
    year: "1958",
    track: "city",
    title: {
      nl: "Expo ’58",
      fr: "L'Expo 58",
      en: "Expo 58",
    },
    body: {
      nl: "Naar aanleiding van Expo ’58 in Brussel krijgt Antwerpen een tentoonstellingscomplex en komt de stad op de internationale kaart.",
      fr: "À l'occasion de l'Expo 58 à Bruxelles, Anvers se dote d'un complexe d'exposition et se fait une place sur la carte internationale.",
      en: "In the wake of Expo 58 in Brussels, Antwerp gains an exhibition complex and puts itself on the international map.",
    },
    images: [{ src: "/resources/history/1958-expo-58.jpg" }],
  },
  {
    // Fleet of ten aircraft; 1000 flying hours passed for the first time.
    year: "1959",
    track: "club",
    title: {
      nl: "Tien toestellen en duizend vlieguren",
      fr: "Dix appareils et mille heures de vol",
      en: "Ten aircraft and a thousand flying hours",
    },
    body: {
      nl: "De clubvloot telt tien toestellen. Voor het eerst vliegt de club meer dan duizend uur in één jaar. Ook de Piper J-3 Cub komt erbij.",
      fr: "La flotte compte dix appareils. Pour la première fois, le club dépasse les mille heures de vol en une année. Le Piper J-3 Cub la rejoint aussi.",
      en: "The fleet reaches ten aircraft. For the first time the club flies more than a thousand hours in a single year. The Piper J-3 Cub joins too.",
    },
    images: [{ src: "/resources/history/1959-tien-toestellen-en-duizend-vlieguren.jpg" }],
  },
  {
    year: "1960s",
    track: "airport",
    title: {
      nl: "DC-3 en Caravelle",
      fr: "DC-3 et Caravelle",
      en: "DC-3 and Caravelle",
    },
    body: {
      nl: "De luchthaven ontvangt moderne toestellen zoals de Douglas DC-3 en de Sud Aviation Caravelle.",
      fr: "L'aéroport accueille des appareils modernes comme le Douglas DC-3 et la Sud Aviation Caravelle.",
      en: "The airport welcomes modern aircraft such as the Douglas DC-3 and the Sud Aviation Caravelle.",
    },
    images: [{ src: "/resources/history/1960s-dc-3-en-caravelle.jpg" }],
  },
  {
    year: "1963–67",
    track: "club",
    title: {
      nl: "Acro en Zlin, Tipsy en Siai-Marchetti",
      fr: "Voltige : Zlin, Tipsy et Siai-Marchetti",
      en: "Aerobatics: Zlin, Tipsy and Siai-Marchetti",
    },
    body: {
      nl: "Met de Tipsy Nipper (1963), Zlin Z-22 (1964) en Siai-Marchetti S.205 (1967) wordt de vloot breder.",
      fr: "Avec le Tipsy Nipper (1963), le Zlin Z-22 (1964) et le Siai-Marchetti S.205 (1967), la flotte se diversifie.",
      en: "With the Tipsy Nipper (1963), Zlin Z-22 (1964) and Siai-Marchetti S.205 (1967), the fleet grows more varied.",
    },
    images: [{ src: "/resources/history/1963-67-acro-en-zlin-tipsy-en-siai-marchetti.jpg" }],
  },
  {
    year: "1969",
    track: "city",
    title: {
      nl: "Kennedytunnel",
      fr: "Le tunnel Kennedy",
      en: "The Kennedy Tunnel",
    },
    body: {
      nl: "De autosnelwegtunnel onder de Schelde sluit de Antwerpse Ring en wordt een cruciale schakel voor mobiliteit en economie.",
      fr: "Le tunnel autoroutier sous l'Escaut boucle le Ring d'Anvers et devient un maillon essentiel pour la mobilité et l'économie.",
      en: "The motorway tunnel under the Scheldt completes Antwerp's Ring and becomes a vital link for mobility and the economy.",
    },
    images: [{ src: "/resources/history/1969-kennedytunnel.jpg" }],
  },
  {
    year: "1974",
    track: "club",
    verify: true,
    title: {
      nl: "Fusie met Antwerp Aircraft Owners Club",
      fr: "Fusion avec l'Antwerp Aircraft Owners Club",
      en: "Merger with the Antwerp Aircraft Owners Club",
    },
    body: {
      nl: "De RAAC fuseert met de Antwerp Aircraft Owners Club. In 1978 start de ‘invasie’ van Cessna’s: 150’s in 1978, 1988 en 1992 en de 172 in 1985 en 1991.",
      fr: "Le RAAC fusionne avec l'Antwerp Aircraft Owners Club. En 1978 commence « l'invasion » des Cessna : des 150 en 1978, 1988 et 1992, et des 172 en 1985 et 1991.",
      en: "RAAC merges with the Antwerp Aircraft Owners Club. In 1978 the Cessna ‘invasion’ begins: 150s in 1978, 1988 and 1992, and 172s in 1985 and 1991.",
    },
    images: [{ src: "/resources/history/1974-fusie-met-antwerp-aircraft-owners-club.jpg" }],
  },
  {
    year: "1980",
    track: "airport",
    title: {
      nl: "Regionaal knooppunt",
      fr: "Plaque tournante régionale",
      en: "A regional hub",
    },
    body: {
      nl: "De Vlaamse overheid bevestigt de rol van Deurne als regionale luchthaven, met focus op business aviation en pilotenopleiding.",
      fr: "Les autorités flamandes confirment le rôle de Deurne comme aéroport régional, axé sur l'aviation d'affaires et la formation des pilotes.",
      en: "The Flemish government confirms Deurne's role as a regional airport, focused on business aviation and pilot training.",
    },
    images: [{ src: "/resources/history/1980-regionaal-knooppunt.jpg" }],
  },
  {
    year: "1983",
    track: "city",
    title: {
      nl: "Groot-Antwerpen",
      fr: "Le Grand Anvers",
      en: "Greater Antwerp",
    },
    body: {
      nl: "Deurne, Borgerhout en Wilrijk worden in de fusie van gemeenten deel van de stad en veranderen bestuur en schaal van Antwerpen ingrijpend.",
      fr: "Lors de la fusion des communes, Deurne, Borgerhout et Wilrijk rejoignent la ville, ce qui transforme profondément l'administration et l'échelle d'Anvers.",
      en: "In the merger of municipalities, Deurne, Borgerhout and Wilrijk become part of the city, transforming Antwerp's administration and scale.",
    },
    images: [{ src: "/resources/history/1983-groot-antwerpen.jpg" }],
  },
  {
    year: "1993–95",
    track: "airport",
    title: {
      nl: "VLM en het Stampe & Vertongen Museum",
      fr: "VLM et le musée Stampe & Vertongen",
      en: "VLM and the Stampe & Vertongen Museum",
    },
    body: {
      nl: "VLM Airlines vliegt vanaf 1993 naar Londen City. In 1995 opent het Stampe & Vertongen Museum op de luchthaven.",
      fr: "Dès 1993, VLM Airlines relie Londres City. En 1995, le musée Stampe & Vertongen ouvre ses portes à l'aéroport.",
      en: "From 1993 VLM Airlines flies to London City. In 1995 the Stampe & Vertongen Museum opens at the airport.",
    },
    images: [{ src: "/resources/history/1993-95-vlm-en-het-stampe-vertongen-museum.jpg" }],
  },
  {
    year: "1995",
    track: "club",
    title: {
      nl: "De OO-WAR",
      fr: "L'OO-WAR",
      en: "OO-WAR",
    },
    body: {
      nl: "Een iconische Piper Warrior III (PA-28-161) komt bij de club en vliegt er vandaag nog. In 1996 volgt een Cessna 152 en in 2002 opnieuw een Piper Warrior.",
      fr: "Un Piper Warrior III (PA-28-161) emblématique rejoint le club et y vole encore aujourd'hui. Un Cessna 152 suit en 1996, puis un nouveau Piper Warrior en 2002.",
      en: "An iconic Piper Warrior III (PA-28-161) joins the club and still flies with it today. A Cessna 152 follows in 1996, and another Piper Warrior in 2002.",
    },
    images: [{ src: "/resources/history/1995-de-oo-war.jpg" }],
  },
  {
    year: "1998",
    track: "city",
    title: {
      nl: "Justitiepaleis",
      fr: "Le palais de justice",
      en: "The Law Courts",
    },
    body: {
      nl: "Het gebouw van Richard Rogers aan de Bolivarplaats symboliseert transparantie en modernisering van de rechtspraak.",
      fr: "Le bâtiment de Richard Rogers, place Bolivar, symbolise la transparence et la modernisation de la justice.",
      en: "Richard Rogers' building on the Bolivarplaats stands for a more transparent, modern justice system.",
    },
    images: [{ src: "/resources/history/1998-justitiepaleis.jpg" }],
  },
  {
    year: "2001",
    track: "club",
    title: {
      nl: "Dirk Spitaels voorzitter",
      fr: "Dirk Spitaels président",
      en: "Dirk Spitaels becomes chairman",
    },
    body: {
      nl: "Dirk Spitaels volgt Pascal Marnef op. Het clublokaal wordt vernieuwd.",
      fr: "Dirk Spitaels succède à Pascal Marnef. Le local du club est rénové.",
      en: "Dirk Spitaels succeeds Pascal Marnef. The clubhouse is renovated.",
    },
    images: [{ src: "/resources/history/2001-dirk-spitaels-voorzitter.jpg" }],
  },
  {
    year: "2006–07",
    track: "club",
    title: {
      nl: "Diesel en glass cockpit",
      fr: "Diesel et glass cockpit",
      en: "Diesel and glass cockpit",
    },
    body: {
      nl: "De Robin DR400 Ecoflyer (2006) is een van de eerste dieselvliegtuigen in de algemene luchtvaart. In 2007 volgt de Piper Warrior III met glass cockpit, de OO-PEG.",
      fr: "Le Robin DR400 Ecoflyer (2006) est l'un des premiers avions diesel de l'aviation générale. En 2007 suit le Piper Warrior III à glass cockpit, l'OO-PEG.",
      en: "The Robin DR400 Ecoflyer (2006) is one of the first diesel aircraft in general aviation. In 2007 the Piper Warrior III with a glass cockpit, OO-PEG, follows.",
    },
    images: [{ src: "/resources/history/2006-07-diesel-en-glass-cockpit.jpg" }],
  },
  {
    year: "2009–11",
    track: "city",
    title: {
      nl: "Park Spoor Noord en MAS",
      fr: "Park Spoor Noord et le MAS",
      en: "Park Spoor Noord and the MAS",
    },
    body: {
      nl: "Een voormalige spoorzone wordt stadspark (2009) en het Museum aan de Stroom (2011) geeft een impuls aan toerisme en stadsvernieuwing.",
      fr: "Une ancienne zone ferroviaire devient parc urbain (2009) et le Museum aan de Stroom (2011) donne un élan au tourisme et au renouveau urbain.",
      en: "A former railway yard becomes a city park (2009), and the Museum aan de Stroom (2011) gives tourism and urban renewal a boost.",
    },
    images: [{ src: "/resources/history/2009-11-park-spoor-noord-en-mas.jpg" }],
  },
  {
    year: "2014–15",
    track: "airport",
    title: {
      nl: "Egis en TUI fly",
      fr: "Egis et TUI fly",
      en: "Egis and TUI fly",
    },
    body: {
      nl: "De Franse groep Egis krijgt de concessie voor commerciële uitbating tot 2039. In 2015 start TUI fly Belgium met vluchten naar vakantiebestemmingen.",
      fr: "Le groupe français Egis obtient la concession d'exploitation commerciale jusqu'en 2039. En 2015, TUI fly Belgium lance des vols vers des destinations de vacances.",
      en: "The French group Egis wins the concession to run the airport commercially until 2039. In 2015 TUI fly Belgium starts flights to holiday destinations.",
    },
    images: [{ src: "/resources/history/2014-15-egis-en-tui-fly.jpg" }],
  },
  {
    year: "2016",
    track: "club",
    title: {
      nl: "Nog een Robin met dieselmotor",
      fr: "Un autre Robin à moteur diesel",
      en: "Another diesel Robin",
    },
    body: {
      nl: "De Robin DR401 PH-DYX wordt bijna dagelijks door de leden gebruikt.",
      fr: "Le Robin DR401 PH-DYX est utilisé presque tous les jours par les membres.",
      en: "The Robin DR401 PH-DYX is flown by members almost every day.",
    },
    images: [{ src: "/resources/history/2016-nog-een-robin-met-dieselmotor.jpg" }],
  },
  {
    year: "2019",
    track: "airport",
    title: {
      nl: "Recordjaar",
      fr: "Année record",
      en: "A record year",
    },
    body: {
      nl: "De luchthaven verwerkt 306.330 passagiers, het hoogste aantal ooit.",
      fr: "L'aéroport accueille 306 330 passagers, un record absolu.",
      en: "The airport handles 306,330 passengers, the most ever.",
    },
    images: [{ src: "/resources/history/2019-recordjaar.jpg" }],
  },
  {
    // DTO BE.DTO.115, PPL(A) training, SEP class rating, Night VFR and
    // sailplane towing ratings (public sources).
    year: "2019",
    track: "club",
    title: {
      nl: "Erkend als DTO",
      fr: "Agréé comme DTO",
      en: "Recognised as a DTO",
    },
    body: {
      nl: "De club wordt erkend als Declared Training Organisation (BE.DTO.115) en mag de volledige opleiding tot Privaat Piloot PPL(A) organiseren, naast de ratings SEP, Night VFR en Sailplane Towing.",
      fr: "Le club est agréé comme Declared Training Organisation (BE.DTO.115) et peut organiser la formation complète de Pilote Privé PPL(A), ainsi que les qualifications SEP, Night VFR et remorquage de planeurs.",
      en: "The club is recognised as a Declared Training Organisation (BE.DTO.115), able to run the full PPL(A) course alongside the SEP, Night VFR and sailplane towing ratings.",
    },
    images: [{ src: "/resources/history/2019-erkend-als-dto.jpg" }],
  },
  {
    year: "2019–20",
    track: "city",
    title: {
      nl: "Oosterweel en Ringparken",
      fr: "Oosterweel et les parcs du Ring",
      en: "Oosterweel and the Ring parks",
    },
    body: {
      nl: "De Oosterweelverbinding start (2019) en met de Ringparken en de Groene Singel krijgt Antwerpen een groene long (2020).",
      fr: "Les travaux de la liaison Oosterweel démarrent (2019) et, avec les parcs du Ring et la Groene Singel, Anvers se dote d'un poumon vert (2020).",
      en: "Work on the Oosterweel Link begins (2019), and with the Ring parks and the Groene Singel Antwerp gains a green lung (2020).",
    },
    images: [{ src: "/resources/history/2019-20-oosterweel-en-ringparken.jpg" }],
  },
  {
    year: "2025",
    track: "airport",
    title: {
      nl: "Nieuwe milieuvergunning",
      fr: "Nouveau permis d'environnement",
      en: "A new environmental permit",
    },
    body: {
      nl: "Ondanks financiële moeilijkheden krijgt de luchthaven een nieuwe milieuvergunning en zet ze in op duurzaamheid en business aviation.",
      fr: "Malgré des difficultés financières, l'aéroport obtient un nouveau permis d'environnement et mise sur la durabilité et l'aviation d'affaires.",
      en: "Despite financial difficulties, the airport receives a new environmental permit and focuses on sustainability and business aviation.",
    },
    images: [{ src: "/resources/history/2025-nieuwe-milieuvergunning.jpg" }],
  },
  {
    year: "2025",
    track: "club",
    title: {
      nl: "OO-MPL en OO-MAV",
      fr: "OO-MPL et OO-MAV",
      en: "OO-MPL and OO-MAV",
    },
    body: {
      nl: "De vloot krijgt een tweede Robin (OO-MPL) en een Diamond DA40 NG (OO-MAV), het paradetoestel van de club.",
      fr: "La flotte accueille un deuxième Robin (OO-MPL) et un Diamond DA40 NG (OO-MAV), l'avion vedette du club.",
      en: "The fleet gains a second Robin (OO-MPL) and a Diamond DA40 NG (OO-MAV), the club's flagship.",
    },
    images: [{ src: "/resources/history/2025-oo-mpl-en-oo-mav.jpg" }],
  },
  {
    year: "2025",
    track: "city",
    title: {
      nl: "Stuivenbergsite",
      fr: "Le site Stuivenberg",
      en: "The Stuivenberg site",
    },
    body: {
      nl: "De site rond het voormalige ziekenhuis wordt heringericht tot een kwaliteitsvolle woon- en leefomgeving.",
      fr: "Le site de l'ancien hôpital est réaménagé en un cadre de vie résidentiel de qualité.",
      en: "The site around the former hospital is redeveloped into a high-quality place to live.",
    },
    images: [{ src: "/resources/history/2025-stuivenbergsite.jpg" }],
  },
  {
    // 200+ members (public sources).
    year: "2026",
    track: "club",
    title: {
      nl: "Meer dan tweehonderd leden",
      fr: "Plus de deux cents membres",
      en: "More than two hundred members",
    },
    body: {
      nl: "De club telt meer dan tweehonderd leden. Ze vliegen met Piper Warriors, Robins met dieselmotor en de Diamond DA40 NG.",
      fr: "Le club compte plus de deux cents membres. Ils volent sur Piper Warrior, sur Robin à moteur diesel et sur le Diamond DA40 NG.",
      en: "The club has more than two hundred members, flying Piper Warriors, diesel-engined Robins and the Diamond DA40 NG.",
    },
  },
  {
    year: "2027",
    track: "club",
    landmark: true,
    title: {
      nl: "Honderd jaar RAAC",
      fr: "Cent ans de RAAC",
      en: "A hundred years of RAAC",
    },
    body: {
      nl: "8 & 9 mei: Fly-in Weekend op Antwerp Airport. Op 6 november sluiten we het feestjaar af in Antwerpen.",
      fr: "8 et 9 mai : Fly-in Weekend à Antwerp Airport. Le 6 novembre, nous clôturons l'année du centenaire à Anvers.",
      en: "8 & 9 May: Fly-in Weekend at Antwerp Airport. On 6 November we close the centenary year in Antwerp.",
    },
    images: [{ src: "/resources/history/2027-honderd-jaar-raac.jpg" }],
  },
];
