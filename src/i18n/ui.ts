export const languages = {
  nl: "Nederlands",
  fr: "Français",
  en: "English",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "nl";

/**
 * Dutch is the source of truth. French and English are typed against its
 * key set, so a missing translation is a compile error rather than a blank
 * spot someone notices on the day.
 *
 * Club facts (founding date, founders, the 1952 royal title, the fleet) are
 * real. Everything about the jubilee weekend itself — dates, times,
 * programme, practical arrangements — is placeholder and must be replaced.
 */
const nl = {
  "meta.title": "RAAC 100 — jubileumweekend 2027",
  "meta.description":
    "De Royal Antwerp Aviation Club bestaat honderd jaar. Jubileumweekend op 6 en 7 november 2027, luchthaven Antwerpen (Deurne).",

  "nav.about": "Het weekend",
  "nav.tickets": "Tickets",
  "nav.programme": "Programma",
  "nav.history": "1927–2027",
  "nav.practical": "Praktisch",
  "nav.partners": "Partners",
  "nav.skip": "Spring naar de inhoud",

  "marquee.a": "RAAC 100",
  "marquee.b": "6 & 7 november 2027",
  "marquee.c": "10u – 18u",
  "marquee.d": "Luchthaven Antwerpen (Deurne)",

  "hero.title": "RAAC 100",
  "hero.subtitle": "jubileumweekend 2027",
  "hero.date.label": "Datum",
  "hero.date.value": "6 & 7 november",
  "hero.time.label": "Tijd",
  "hero.time.value": "10u – 18u",
  "hero.time.note": "(laatste toegang 17u)",
  "hero.place.label": "Locatie",
  "hero.place.value": "Internationale Luchthaven Antwerpen (Deurne)",
  "hero.cta": "Bekijk het programma",

  "about.heading": "Honderd jaar. Dezelfde Vliegclub.",
  "about.body":
    "Op 3 november 1927 richtte Pierre Schellekens de Antwerp Aviation Club op, met Jan Olieslagers als eerste voorzitter. Honderd jaar later vliegen we nog altijd vanuit Deurne. Twee dagen lang zetten we de hangar open voor leden, oud-leden, families en iedereen die ooit met ons meevloog.",

  "expect.heading": "Wat mag je verwachten?",
  "expect.lede":
    "Een weekend waarin honderd jaar Antwerpse luchtvaart vanop de eerste rij te zien is.",
  "expect.1": "De volledige clubvloot in static display",
  "expect.2": "Historische toestellen uit binnen- en buitenland",
  "expect.3": "Doorlopende vliegactiviteiten",
  "expect.4": "Het clubarchief: honderd jaar logboeken en foto's",
  "expect.5": "Rondleidingen in de werkplaats en het leslokaal",
  "expect.6": "Kennismaken met de instructeurs en de opleiding PPL(A)",
  "expect.7": "Eten en drinken ter plaatse, het hele weekend door",
  "expect.note":
    "Voor bezoekers met gevoelige oren raden we aan gehoorbescherming mee te brengen.",

  "tickets.heading": "Tickets",
  "tickets.lede":
    "Eén ticket geeft toegang tot de volledige dag, aan de kassa of online.",
  "tickets.stub.label": "Toegangsbewijs",
  // [PLACEHOLDER] pricing — replace with the real tariffs from the committee.
  "tickets.tier.adult.label": "Volwassenen",
  "tickets.tier.adult.price": "€ 10",
  "tickets.tier.child.label": "Kinderen (6–12 jaar)",
  "tickets.tier.child.price": "€ 5",
  "tickets.tier.infant.label": "Onder 6 jaar",
  "tickets.tier.infant.price": "Gratis",
  "tickets.note":
    "Prijs per dag, per persoon. Ook verkrijgbaar aan de kassa op het terrein.",
  "tickets.cta": "Tickets kopen",

  "programme.heading": "Programma",
  "programme.day1": "Zaterdag 6 november",
  "programme.day2": "Zondag 7 november",
  "programme.d1s1.time": "10u00",
  "programme.d1s1.what": "Hangar open, koffie, het archief ligt op tafel",
  "programme.d1s2.time": "11u30",
  "programme.d1s2.what": "Formatievlucht van de clubvloot",
  "programme.d1s3.time": "14u00",
  "programme.d1s3.what": "Rondleiding werkplaats en leslokaal",
  "programme.d1s4.time": "16u00",
  "programme.d1s4.what": "Academische zitting en groepsfoto",
  "programme.d1s5.time": "18u00",
  "programme.d1s5.what": "Receptie in de hangar",
  "programme.d2s1.time": "10u00",
  "programme.d2s1.what": "Hangar open, static display",
  "programme.d2s2.time": "11u00",
  "programme.d2s2.what": "Infomoment opleiding Privaat Piloot PPL(A)",
  "programme.d2s3.time": "13u00",
  "programme.d2s3.what": "Aankomst bezoekende toestellen",
  "programme.d2s4.time": "15u00",
  "programme.d2s4.what": "Demonstratievluchten historische toestellen",
  "programme.d2s5.time": "17u30",
  "programme.d2s5.what": "Afsluiting",

  "history.heading": "1927 – 2027",
  "history.lede": "Honderd jaar Royal Antwerp Aviation Club, kort samengevat.",
  "history.note":
    "Samengesteld uit het clubarchief, de RAAC-echo en de verhalen van leden. Ontbreekt er iets, of klopt er iets niet? Laat het ons weten — we vullen aan.",

  "practical.heading": "Praktisch",
  "practical.access.heading": "Bereikbaarheid",
  "practical.access.car.heading": "Met de wagen",
  "practical.access.car.body":
    "De luchthaven heeft een betaalparking voor het luchthavengebouw, met laadpalen en plaatsen voor minder mobiele bezoekers vlak bij de uitgang. Op zondag is er extra parkeergelegenheid in de Luchthavenlei.",
  "practical.access.bike.heading": "Met de fiets",
  "practical.access.bike.body":
    "De luchthaven ligt aan verschillende fietspaden en fiets-o-strades. Er zijn deelfietsstations aan het luchthavengebouw en in de Hofstadestraat. Tijdens het weekend zetten we extra mobiele fietsenrekken.",
  "practical.access.transit.heading": "Met het openbaar vervoer",
  "practical.access.transit.body":
    "Station Mortsel ligt op vijf à tien minuten wandelen, station Berchem op vijftien à twintig. Buslijnen 33, 51, 52 en 53 stoppen aan De Vosstraat; shuttlelijn 31 rijdt om het kwartier vanaf Berchem tot vlak voor het luchthavengebouw.",
  "practical.access.foot.heading": "Te voet",
  "practical.access.foot.body":
    "Via de Diksmuidelaan, de Vosstraat of de Deurnestraat naar de Luchthavenlei. De toegang tot het evenement ligt in het Stampe Vertongen Park, en is drempelvrij.",

  "practical.rules.heading": "Toegang en veiligheid",
  "practical.rules.lede": "Op de luchthavenplatformen zijn niet toegelaten:",
  "practical.rules.1": "Roken of vapen",
  "practical.rules.2": "Honden, met uitzondering van assistentiehonden",
  "practical.rules.3": "Steps",
  "practical.rules.4": "Rugzakken, met uitzondering van luier- en cameratassen",
  "practical.rules.note":
    "Volg altijd de aanwijzingen van de marshallers en blijf achter de afbakening zolang er vliegactiviteit is.",

  "practical.pilots.heading": "Voor bezoekende piloten",
  "practical.pilots.body":
    "Antwerpen (EBAW) is een gecontroleerde luchthaven. Vlieg volgens de gepubliceerde procedures in de AIP België en regel slot en handling ruim op voorhand. Bezoekende toestellen worden op zondag verwacht; schrijf ons vooraf via info@raac.be zodat we parkeerruimte kunnen voorzien.",
  "practical.pilots.warning":
    "Controleer de NOTAM's voor vertrek. Tijdens demonstratievluchten kan het platform tijdelijk gesloten zijn.",

  "partners.heading": "Met de steun van",

  "socials.heading": "Volg ons",
  "socials.website.label": "Website",

  "closing.heading": "Tot in november 2027",
  "closing.cta": "Bekijk het programma",
  "closing.prgm": "Koop tickets",


  "footer.contact": "Contact",
  "footer.archive": "Beeldmateriaal",
  "footer.archive.body":
    "De foto's op deze pagina komen uit het clubarchief en uit privécollecties van leden. Ziet u een foto waarvan u de rechten heeft, neem dan contact op.",
  "footer.colophon": "Gemaakt door vrijwilligers van de club.",

  "lang.label": "Taal",

  "nav.main": "Hoofdnavigatie",
  "nav.sections": "Secties op deze pagina"
} as const;

export type UIKey = keyof typeof nl;
type Dictionary = Record<UIKey, string>;

const fr: Dictionary = {
  "meta.title": "RAAC 100 — week-end du centenaire 2027",
  "meta.description":
    "Le Royal Antwerp Aviation Club a cent ans. Week-end du centenaire les 6 et 7 novembre 2027, aéroport d'Anvers (Deurne).",

  "nav.about": "Le week-end",
  "nav.tickets": "Billets",
  "nav.programme": "Programme",
  "nav.history": "1927–2027",
  "nav.practical": "Infos pratiques",
  "nav.partners": "Partenaires",
  "nav.skip": "Aller au contenu",

  "marquee.a": "RAAC 100",
  "marquee.b": "6 & 7 novembre 2027",
  "marquee.c": "10h – 18h",
  "marquee.d": "Aéroport d'Anvers (Deurne)",

  "hero.title": "RAAC 100",
  "hero.subtitle": "week-end du centenaire 2027",
  "hero.date.label": "Date",
  "hero.date.value": "6 & 7 novembre",
  "hero.time.label": "Horaire",
  "hero.time.value": "10h – 18h",
  "hero.time.note": "(dernière entrée à 17h)",
  "hero.place.label": "Lieu",
  "hero.place.value": "Aéroport international d'Anvers (Deurne)",
  "hero.cta": "Voir le programme",

  "about.heading": "Cent ans. Le même aéro club.",
  "about.body":
    "Le 3 novembre 1927, Pierre Schellekens fondait l'Antwerp Aviation Club, avec Jan Olieslagers comme premier président. Cent ans plus tard, nous volons toujours depuis Deurne. Pendant deux jours, le hangar est ouvert aux membres, aux anciens, aux familles et à tous ceux qui ont un jour volé avec nous.",

  "expect.heading": "À quoi s'attendre ?",
  "expect.lede":
    "Un week-end pour vivre cent ans d'aviation anversoise au premier rang.",
  "expect.1": "Toute la flotte du club en exposition statique",
  "expect.2": "Des appareils historiques de Belgique et de l'étranger",
  "expect.3": "Des activités aériennes en continu",
  "expect.4": "Les archives du club : cent ans de carnets et de photos",
  "expect.5": "Visites guidées de l'atelier et de la salle de cours",
  "expect.6": "Rencontre avec les instructeurs et la formation PPL(A)",
  "expect.7": "Restauration et boissons sur place, tout le week-end",
  "expect.note":
    "Pour les visiteurs sensibles au bruit, nous conseillons d'apporter une protection auditive.",

  "tickets.heading": "Billets",
  "tickets.lede":
    "Un billet donne accès à la journée complète, en caisse ou en ligne.",
  "tickets.stub.label": "Billet d'entrée",
  "tickets.tier.adult.label": "Adultes",
  "tickets.tier.adult.price": "10 €",
  "tickets.tier.child.label": "Enfants (6–12 ans)",
  "tickets.tier.child.price": "5 €",
  "tickets.tier.infant.label": "Moins de 6 ans",
  "tickets.tier.infant.price": "Gratuit",
  "tickets.note":
    "Prix par jour, par personne. Également disponible en caisse sur place.",
  "tickets.cta": "Acheter des billets",

  "programme.heading": "Programme",
  "programme.day1": "Samedi 6 novembre",
  "programme.day2": "Dimanche 7 novembre",
  "programme.d1s1.time": "10h00",
  "programme.d1s1.what": "Ouverture du hangar, café, les archives sur la table",
  "programme.d1s2.time": "11h30",
  "programme.d1s2.what": "Vol en formation de la flotte du club",
  "programme.d1s3.time": "14h00",
  "programme.d1s3.what": "Visite de l'atelier et de la salle de cours",
  "programme.d1s4.time": "16h00",
  "programme.d1s4.what": "Séance académique et photo de groupe",
  "programme.d1s5.time": "18h00",
  "programme.d1s5.what": "Réception dans le hangar",
  "programme.d2s1.time": "10h00",
  "programme.d2s1.what": "Ouverture du hangar, exposition statique",
  "programme.d2s2.time": "11h00",
  "programme.d2s2.what": "Séance d'information sur la formation PPL(A)",
  "programme.d2s3.time": "13h00",
  "programme.d2s3.what": "Arrivée des appareils visiteurs",
  "programme.d2s4.time": "15h00",
  "programme.d2s4.what": "Vols de démonstration d'appareils historiques",
  "programme.d2s5.time": "17h30",
  "programme.d2s5.what": "Clôture",

  "history.heading": "1927 – 2027",
  "history.lede": "Cent ans de Royal Antwerp Aviation Club, en bref.",
  "history.note":
    "Établi à partir des archives du club, du RAAC-echo et des récits des membres. Un oubli, une erreur ? Faites-le nous savoir — nous complétons.",

  "practical.heading": "Infos pratiques",
  "practical.access.heading": "Comment venir",
  "practical.access.car.heading": "En voiture",
  "practical.access.car.body":
    "L'aéroport dispose d'un parking payant devant l'aérogare, avec bornes de recharge et places pour personnes à mobilité réduite près de la sortie. Le dimanche, un parking supplémentaire est disponible dans la Luchthavenlei.",
  "practical.access.bike.heading": "À vélo",
  "practical.access.bike.body":
    "L'aéroport est desservi par plusieurs pistes cyclables et autoroutes cyclables. Des stations de vélos partagés se trouvent à l'aérogare et dans la Hofstadestraat. Des racks mobiles supplémentaires seront installés pour le week-end.",
  "practical.access.transit.heading": "En transports en commun",
  "practical.access.transit.body":
    "La gare de Mortsel est à cinq ou dix minutes à pied, celle de Berchem à quinze ou vingt. Les lignes de bus 33, 51, 52 et 53 s'arrêtent à De Vosstraat ; la navette 31 circule tous les quarts d'heure depuis Berchem jusque devant l'aérogare.",
  "practical.access.foot.heading": "À pied",
  "practical.access.foot.body":
    "Par la Diksmuidelaan, la Vosstraat ou la Deurnestraat jusqu'à la Luchthavenlei. L'entrée de l'événement se situe dans le parc Stampe Vertongen, sans marches.",

  "practical.rules.heading": "Accès et sécurité",
  "practical.rules.lede": "Sur les aires de l'aéroport, ne sont pas admis :",
  "practical.rules.1": "Fumer ou vapoter",
  "practical.rules.2": "Les chiens, hors chiens d'assistance",
  "practical.rules.3": "Les trottinettes",
  "practical.rules.4": "Les sacs à dos, hors sacs à langer et sacs photo",
  "practical.rules.note":
    "Suivez toujours les consignes des placeurs et restez derrière les barrières tant qu'il y a de l'activité aérienne.",

  "practical.pilots.heading": "Pour les pilotes visiteurs",
  "practical.pilots.body":
    "Anvers (EBAW) est un aéroport contrôlé. Volez selon les procédures publiées à l'AIP Belgique et organisez slot et handling bien à l'avance. Les appareils visiteurs sont attendus le dimanche ; écrivez-nous à info@raac.be pour que nous puissions réserver du parking.",
  "practical.pilots.warning":
    "Consultez les NOTAM avant le départ. L'aire peut être temporairement fermée pendant les vols de démonstration.",

  "partners.heading": "Avec le soutien de",

  "socials.heading": "Suivez-nous",
  "socials.website.label": "Site web",

  "closing.heading": "Rendez-vous en novembre 2027",
  "closing.cta": "Voir le programme",
  "closing.prgm": "Acheter des billets",


  "footer.contact": "Contact",
  "footer.archive": "Photographies",
  "footer.archive.body":
    "Les photos de cette page proviennent des archives du club et de collections privées de membres. Si vous détenez les droits sur une image, contactez-nous.",
  "footer.colophon": "Réalisé par les bénévoles du club.",

  "lang.label": "Langue",
  "nav.main": "Navigation principale",
  "nav.sections": "Sections de cette page",
};

const en: Dictionary = {
  "meta.title": "RAAC 100 — centenary weekend 2027",
  "meta.description":
    "The Royal Antwerp Aviation Club turns one hundred. Centenary weekend on 6 and 7 November 2027, Antwerp Airport (Deurne).",

  "nav.about": "The weekend",
  "nav.tickets": "Tickets",
  "nav.programme": "Programme",
  "nav.history": "1927–2027",
  "nav.practical": "Practical",
  "nav.partners": "Partners",
  "nav.skip": "Skip to content",

  "marquee.a": "RAAC 100",
  "marquee.b": "6 & 7 November 2027",
  "marquee.c": "10:00 – 18:00",
  "marquee.d": "Antwerp Airport (Deurne)",

  "hero.title": "RAAC 100",
  "hero.subtitle": "centenary weekend 2027",
  "hero.date.label": "Date",
  "hero.date.value": "6 & 7 November",
  "hero.time.label": "Time",
  "hero.time.value": "10:00 – 18:00",
  "hero.time.note": "(last entry 17:00)",
  "hero.place.label": "Location",
  "hero.place.value": "Antwerp International Airport (Deurne)",
  "hero.cta": "See the programme",

  "about.heading": "A hundred years. The same Flight club.",
  "about.body":
    "On 3 November 1927, Pierre Schellekens founded the Antwerp Aviation Club, with Jan Olieslagers as its first chairman. A hundred years on, we still fly from Deurne. For two days the hangar is open to members, former members, families, and anyone who ever flew with us.",

  "expect.heading": "What to expect",
  "expect.lede":
    "A weekend to see a hundred years of Antwerp aviation from the front row.",
  "expect.1": "The full club fleet on static display",
  "expect.2": "Historic aircraft from Belgium and abroad",
  "expect.3": "Flying throughout both days",
  "expect.4": "The club archive: a hundred years of logbooks and photographs",
  "expect.5": "Guided tours of the workshop and the classroom",
  "expect.6": "Meet the instructors and hear about PPL(A) training",
  "expect.7": "Food and drink on site all weekend",
  "expect.note":
    "Visitors sensitive to noise are advised to bring ear protection.",

  "tickets.heading": "Tickets",
  "tickets.lede": "One ticket covers the full day, at the gate or online.",
  "tickets.stub.label": "Admission ticket",
  "tickets.tier.adult.label": "Adults",
  "tickets.tier.adult.price": "€10",
  "tickets.tier.child.label": "Children (6–12)",
  "tickets.tier.child.price": "€5",
  "tickets.tier.infant.label": "Under 6",
  "tickets.tier.infant.price": "Free",
  "tickets.note":
    "Price per day, per person. Also available at the gate on the day.",
  "tickets.cta": "Buy tickets",

  "programme.heading": "Programme",
  "programme.day1": "Saturday 6 November",
  "programme.day2": "Sunday 7 November",
  "programme.d1s1.time": "10:00",
  "programme.d1s1.what":
    "Hangar opens, coffee, the archive laid out on the table",
  "programme.d1s2.time": "11:30",
  "programme.d1s2.what": "Formation flight of the club fleet",
  "programme.d1s3.time": "14:00",
  "programme.d1s3.what": "Workshop and classroom tour",
  "programme.d1s4.time": "16:00",
  "programme.d1s4.what": "Formal session and group photograph",
  "programme.d1s5.time": "18:00",
  "programme.d1s5.what": "Reception in the hangar",
  "programme.d2s1.time": "10:00",
  "programme.d2s1.what": "Hangar opens, static display",
  "programme.d2s2.time": "11:00",
  "programme.d2s2.what": "Information session on PPL(A) training",
  "programme.d2s3.time": "13:00",
  "programme.d2s3.what": "Visiting aircraft arrive",
  "programme.d2s4.time": "15:00",
  "programme.d2s4.what": "Demonstration flights by historic aircraft",
  "programme.d2s5.time": "17:30",
  "programme.d2s5.what": "Close",

  "history.heading": "1927 – 2027",
  "history.lede": "A hundred years of the Royal Antwerp Aviation Club, briefly.",
  "history.note":
    "Assembled from the club archive, the RAAC-echo and members' own accounts. Something missing, or something wrong? Tell us and we will add it.",

  "practical.heading": "Practical",
  "practical.access.heading": "Getting here",
  "practical.access.car.heading": "By car",
  "practical.access.car.body":
    "The airport has a paid car park in front of the terminal, with charging points and accessible spaces near the exit. On Sunday an additional car park on the Luchthavenlei is available.",
  "practical.access.bike.heading": "By bicycle",
  "practical.access.bike.body":
    "The airport is served by several cycle paths and cycle highways. Shared-bike stations are located at the terminal and on the Hofstadestraat. Extra mobile bike racks go up for the weekend.",
  "practical.access.transit.heading": "By public transport",
  "practical.access.transit.body":
    "Mortsel station is a five to ten minute walk, Berchem station fifteen to twenty. Bus routes 33, 51, 52 and 53 stop at De Vosstraat; shuttle route 31 runs every fifteen minutes from Berchem to the terminal door.",
  "practical.access.foot.heading": "On foot",
  "practical.access.foot.body":
    "Via the Diksmuidelaan, the Vosstraat or the Deurnestraat to the Luchthavenlei. The event entrance is in the Stampe Vertongen Park and is step-free.",

  "practical.rules.heading": "Access and safety",
  "practical.rules.lede": "Not permitted on the airport aprons:",
  "practical.rules.1": "Smoking or vaping",
  "practical.rules.2": "Dogs, other than assistance dogs",
  "practical.rules.3": "Scooters",
  "practical.rules.4": "Backpacks, other than changing bags and camera bags",
  "practical.rules.note":
    "Always follow the marshallers' instructions and stay behind the barriers while there is flying activity.",

  "practical.pilots.heading": "For visiting pilots",
  "practical.pilots.body":
    "Antwerp (EBAW) is a controlled airport. Fly the published procedures in the Belgian AIP and arrange slot and handling well in advance. Visiting aircraft are expected on Sunday; write to info@raac.be beforehand so we can reserve parking.",
  "practical.pilots.warning":
    "Check NOTAMs before departure. The apron may close temporarily during demonstration flights.",

  "partners.heading": "With the support of",

  "socials.heading": "Follow us",
  "socials.website.label": "Website",

  "closing.heading": "See you in November 2027",
  "closing.cta": "See the programme",
  "closing.prgm": "Buy tickets",


  "footer.contact": "Contact",
  "footer.archive": "Photographs",
  "footer.archive.body":
    "The photographs on this page come from the club archive and from members' private collections. If you hold the rights to an image, please get in touch.",
  "footer.colophon": "Built by volunteers of the club.",

  "lang.label": "Language",

  "nav.main": "Main navigation",
  "nav.sections": "Sections on this page",
};

export const ui = { nl, fr, en } satisfies Record<Lang, Dictionary>;
