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

  "nav.events": "Evenementen",
  "nav.about": "Over RAAC",
  "nav.tickets": "Tickets",
  "nav.programme": "Fly-in Weekend",
  "nav.history": "1927–2027",
  "nav.practical": "Praktisch",
  "nav.finale": "Finale",
  "nav.partners": "Partners",
  "nav.gala": "Gala",
  "nav.skip": "Spring naar de inhoud",

  "marquee.a": "RAAC 100",
  "marquee.b": "8 & 9 mei 2027",
  "marquee.c": "29 mei 2027",
  "marquee.d": "6 november 2027",

  "hero.title": "100 jaar RAAC",
  "hero.years": "1927 – 2027",
  "hero.subtitle": "Een eeuw passie voor luchtvaart",
  "hero.intro":
    "Honderd jaar vliegen. Honderd jaar Antwerpen. Honderd jaar RAAC.",
  "hero.cta": "Bekijk de evenementen",

  "events.heading": "2027 wordt een feestjaar",
  "events.intro":
    "We brengen piloten, vliegtuigen, leden en oud-leden, luchtvaartprofessionals, buurtbewoners, partners én iedereen met een hart voor luchtvaart samen. Met drie bijzondere momenten:",
  "events.flyin.date": "8 & 9 mei 2027",
  "events.flyin.title": "RAAC 100 Fly-in Weekend",
  "events.flyin.body":
    "Twee dagen vliegtuigen, historie, demonstraties en General Aviation op Antwerp Airport.",
  "events.flyin.cta": "Ontdek het weekend",
  "events.gala.date": "29 mei 2027",
  "events.gala.title": "RAAC 100 Gala",
  "events.gala.body":
    "Een stijlvolle feestavond voor iedereen die deel uitmaakt van het verhaal van RAAC.",
  "events.gala.cta": "Ontdek het gala",
  "events.finale.badge": "In voorbereiding",
  "events.finale.date": "6 november 2027",
  "events.finale.title": "Finale van ons feestjaar",
  "events.finale.body":
    "We hopen ons eeuwfeest symbolisch af te sluiten waar RAAC al honderd jaar thuis is: in Antwerpen.",
  "events.finale.cta": "Lees meer",

  "about.heading": "Honderd jaar. Dezelfde Vliegclub.",
  "about.body":
    "Op 3 november 1927 richtte Pierre Schellekens de Antwerp Aviation Club op, met Jan Olieslagers als eerste voorzitter. Honderd jaar later vliegen we nog altijd vanuit Deurne. Twee dagen lang zetten we de hangar open voor leden, oud-leden, families en iedereen die ooit met ons meevloog.",

  "tickets.heading": "Tickets — Fly-in Weekend",
  "tickets.lede":
    "Eén ticket geeft toegang tot de volledige dag van het Fly-in Weekend, aan de kassa of online.",
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

  "flyin.eyebrow": "8 & 9 mei 2027 — Antwerp Airport",
  "flyin.heading": "RAAC 100 Fly-in Weekend",
  "flyin.tagline": "Oshkosh aan de Schelde? Waarom niet.",
  "flyin.intro.p1":
    "Een vliegclub die honderd jaar wordt, viert dat waar het allemaal om draait: tussen de vliegtuigen en in de lucht.",
  "flyin.intro.p2":
    "Op 8 en 9 mei 2027 willen we Antwerp Airport laten bruisen van de luchtvaart.",
  "flyin.intro.p3":
    "Historische vliegtuigen. Warbirds. Moderne toestellen. Piloten en vliegclubs uit binnen- en buitenland. Luchtvaartprofessionals. Demonstraties. Opleidingen. Defensie. En vooral: duizenden mensen die luchtvaart van dichtbij willen beleven.",
  "flyin.stampe.heading": "De Stampe SV-4 keert terug naar Antwerpen",
  "flyin.stampe.p1":
    "Eén vliegtuig krijgt tijdens ons eeuwfeest een bijzondere plaats: de legendarische Stampe SV-4. Een Belgische klassieker met Antwerpse roots en een iconische plaats in onze luchtvaartgeschiedenis.",
  "flyin.stampe.p2":
    "Ons doel? Zoveel mogelijk SV-4's uit binnen- en buitenland opnieuw samenbrengen in Antwerpen — een unieke ontmoeting met levende luchtvaartgeschiedenis.",
  "flyin.sky.heading": "Kijk omhoog!",
  "flyin.sky.p1":
    "Een verjaardag van een vliegclub vier je natuurlijk ook in de lucht. We willen Antwerpse formatieteams en bijzondere vliegtuigen samenbrengen voor demonstraties boven Antwerp Airport.",
  "flyin.sky.p2":
    "Formaties, historische toestellen en warbirds maken van de luchthaven één groot luchtvaartpodium.",
  "flyin.behind.heading": "Ontdek wat er achter de schermen gebeurt",
  "flyin.behind.p1":
    "Antwerp Airport is veel meer dan lijnvluchten: het is een thuisbasis voor vliegscholen, onderhoud, General Aviation, zakenluchtvaart, ambulance-, inspectie- en fotovluchten en tal van gespecialiseerde luchtvaartactiviteiten.",
  "flyin.behind.p2":
    "Ontmoet piloten, techniekers, instructeurs en luchtvaartprofessionals. Ontdek hoe vliegtuigen worden onderhouden. Maak kennis met vliegopleidingen en ontdek misschien zelfs je eigen toekomst in de luchtvaart.",
  "flyin.neighbours.heading": "Welkom, buren!",
  "flyin.neighbours.p1":
    "Al honderd jaar delen RAAC en Antwerp Airport hun omgeving met duizenden Antwerpenaren. Buurtbewoners en stakeholders uit de onmiddellijke omgeving nodigen we op zaterdagmorgen uit voor een feestelijke brunch waarmee we samen het verjaardagsweekend openen.",
  "flyin.closing.heading": "Twee dagen. Eén luchthaven. Honderd jaar luchtvaart.",
  "flyin.closing.body":
    "Of je nu piloot bent, vliegtuigspotter, luchtvaartprofessional, buur, nieuwsgierige Antwerpenaar of gewoon iemand die bij het geluid van een vliegtuigmotor automatisch omhoog kijkt: dit weekend is voor jou.",
  "flyin.closing.cta": "Save the date.",
  "flyin.closing.note": "En kijk vooral af en toe omhoog.",

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

  "finale.badge": "In voorbereiding",
  "finale.eyebrow": "6 november 2027 — Antwerpen",
  "finale.heading": "Finale van een bijzonder jaar",
  "finale.tagline": "Waar anders dan in Antwerpen?",
  "finale.p1": "RAAC en Antwerpen delen een lange geschiedenis.",
  "finale.p2":
    "Bij het 75-jarig bestaan werd de club officieel ontvangen door het Antwerpse stadsbestuur. Ook bij de 90ste verjaardag kreeg RAAC een bijzondere ontvangst.",
  "finale.p3":
    "Bij honderd jaar willen we die mooie traditie graag voortzetten. Daarom hopen we op 6 november 2027 ons feestjaar af te sluiten met een officiële ontvangst in het Antwerpse Stadhuis — een symbolisch slotmoment voor een club die al sinds 1927 nauw verbonden is met de stad en haar luchthaven.",
  "finale.reflect":
    "Een gelegenheid om terug te kijken. Om mensen te bedanken. Maar vooral om vooruit te kijken — want na alle festiviteiten van 2027 begint op 1 januari gewoon ons volgende hoofdstuk.",
  "finale.disclaimer":
    "Deze ontvangst is nog niet formeel bevestigd door Stad Antwerpen. Datum, locatie en programma kunnen nog wijzigen.",

  "partners.heading": "Met de steun van",

  "socials.heading": "Volg ons",
  "socials.website.label": "Website",

  "closing.heading":
    "100 jaar RAAC. Een eeuw geschiedenis. En we zijn nog lang niet uitgevlogen.",
  "closing.cta": "Bekijk het programma",
  "closing.prgm": "Koop tickets",


  "footer.contact": "Contact",
  "footer.archive": "Beeldmateriaal",
  "footer.archive.body":
    "De foto's op deze pagina komen uit het clubarchief en uit privécollecties van leden. Ziet u een foto waarvan u de rechten heeft, neem dan contact op.",
  "footer.colophon": "Gemaakt door vrijwilligers van de club.",

  "lang.label": "Taal",

  "nav.main": "Hoofdnavigatie",
  "nav.sections": "Secties op deze pagina",

  /* ===============================================================
     GALA PAGE — the one standalone page, linked from the "events"
     tiles on the homepage. Everything else about 2027 lives on the
     one-pager itself.
     =============================================================== */
  "gala.meta.title": "RAAC 100 Gala — 29 mei 2027",
  "gala.meta.description":
    "Een stijlvolle feestavond voor leden, oud-leden en vrienden van de Royal Antwerp Aviation Club. Onderdeel van het RAAC 100 jubileumjaar.",
  "gala.eyebrow": "29 mei 2027",
  "gala.heading": "RAAC 100 Gala",
  "gala.tagline": "Sommige verjaardagen verdienen nét dat beetje meer.",
  "gala.intro.p1":
    "Honderd jaar RAAC is er zo één. Daarom ruilen we op 29 mei de cockpit even in voor een bijzondere feestavond.",
  "gala.intro.p2":
    "Een avond voor leden en oud-leden, piloten, partners, sympathisanten en vrienden van de club — om herinneringen boven te halen, sterke verhalen opnieuw te vertellen en oude bekenden terug te zien.",
  "gala.fact.body":
    "Het eerste clubtoestel met dieselfuel: Jet A1 — de OO-VPE. Een gedurfde maar vooruitziende beslissing.",
  "gala.intro.p3": "Maar vooral een avond om samen te vieren.",
  "gala.people.heading": "Honderd jaar mensen",
  "gala.people.quote":
    "Vliegtuigen maken deel uit van onze geschiedenis. Maar mensen maakten onze geschiedenis.",
  "gala.people.p1":
    "Generaties piloten, instructeurs, vrijwilligers en bestuursleden hielden RAAC honderd jaar lang in de lucht. Ook wanneer er af en toe wat turbulentie was.",
  "gala.people.p2":
    "Dankzij hen is RAAC vandaag de oudste nog actieve vliegclub van België — en tegelijk een moderne club die volop naar de toekomst kijkt. Op 29 mei zetten we die mensen in de schijnwerpers.",
  "gala.setting.heading": "Antwerpen vormt het decor",
  "gala.setting.p1":
    "Voor deze uitzonderlijke verjaardag hoort een uitzonderlijke locatie: een stijlvolle avond, een bijzondere Antwerpse setting, lekker eten, mooie ontmoetingen, herinneringen, muziek en verhalen uit honderd jaar RAAC.",
  "gala.setting.p2": "En daarna? Dan maken we nieuwe herinneringen.",
  "gala.closing.date": "29 mei 2027",
  "gala.closing.cta1": "Dress up. Show up.",
  "gala.closing.cta2": "And celebrate 100 years of flying together.",
  "gala.back": "Terug naar raac.be"
} as const;

export type UIKey = keyof typeof nl;
type Dictionary = Record<UIKey, string>;

const fr: Dictionary = {
  "meta.title": "RAAC 100 — week-end du centenaire 2027",
  "meta.description":
    "Le Royal Antwerp Aviation Club a cent ans. Week-end du centenaire les 6 et 7 novembre 2027, aéroport d'Anvers (Deurne).",

  /* TODO — untranslated. Dutch text duplicated as a stub so the build
     passes; needs a real French translation before launch. */
  "nav.events": "Evenementen",
  "nav.about": "Over RAAC",
  "nav.tickets": "Billets",
  "nav.programme": "Fly-in Weekend",
  "nav.history": "1927–2027",
  "nav.practical": "Infos pratiques",
  "nav.finale": "Finale",
  "nav.partners": "Partenaires",
  "nav.gala": "Gala",
  "nav.skip": "Aller au contenu",

  "marquee.a": "RAAC 100",
  "marquee.b": "8 & 9 mei 2027",
  "marquee.c": "29 mei 2027",
  "marquee.d": "6 november 2027",

  "hero.title": "100 jaar RAAC",
  "hero.years": "1927 – 2027",
  "hero.subtitle": "Een eeuw passie voor luchtvaart",
  "hero.intro":
    "Honderd jaar vliegen. Honderd jaar Antwerpen. Honderd jaar RAAC.",
  "hero.cta": "Bekijk de evenementen",

  "events.heading": "2027 wordt een feestjaar",
  "events.intro":
    "We brengen piloten, vliegtuigen, leden en oud-leden, luchtvaartprofessionals, buurtbewoners, partners én iedereen met een hart voor luchtvaart samen. Met drie bijzondere momenten:",
  "events.flyin.date": "8 & 9 mei 2027",
  "events.flyin.title": "RAAC 100 Fly-in Weekend",
  "events.flyin.body":
    "Twee dagen vliegtuigen, historie, demonstraties en General Aviation op Antwerp Airport.",
  "events.flyin.cta": "Ontdek het weekend",
  "events.gala.date": "29 mei 2027",
  "events.gala.title": "RAAC 100 Gala",
  "events.gala.body":
    "Een stijlvolle feestavond voor iedereen die deel uitmaakt van het verhaal van RAAC.",
  "events.gala.cta": "Ontdek het gala",
  "events.finale.badge": "In voorbereiding",
  "events.finale.date": "6 november 2027",
  "events.finale.title": "Finale van ons feestjaar",
  "events.finale.body":
    "We hopen ons eeuwfeest symbolisch af te sluiten waar RAAC al honderd jaar thuis is: in Antwerpen.",
  "events.finale.cta": "Lees meer",

  "about.heading": "Cent ans. Le même aéro club.",
  "about.body":
    "Le 3 novembre 1927, Pierre Schellekens fondait l'Antwerp Aviation Club, avec Jan Olieslagers comme premier président. Cent ans plus tard, nous volons toujours depuis Deurne. Pendant deux jours, le hangar est ouvert aux membres, aux anciens, aux familles et à tous ceux qui ont un jour volé avec nous.",

  "tickets.heading": "Tickets — Fly-in Weekend",
  "tickets.lede":
    "Eén ticket geeft toegang tot de volledige dag van het Fly-in Weekend, aan de kassa of online.",
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

  "flyin.eyebrow": "8 & 9 mei 2027 — Antwerp Airport",
  "flyin.heading": "RAAC 100 Fly-in Weekend",
  "flyin.tagline": "Oshkosh aan de Schelde? Waarom niet.",
  "flyin.intro.p1":
    "Een vliegclub die honderd jaar wordt, viert dat waar het allemaal om draait: tussen de vliegtuigen en in de lucht.",
  "flyin.intro.p2":
    "Op 8 en 9 mei 2027 willen we Antwerp Airport laten bruisen van de luchtvaart.",
  "flyin.intro.p3":
    "Historische vliegtuigen. Warbirds. Moderne toestellen. Piloten en vliegclubs uit binnen- en buitenland. Luchtvaartprofessionals. Demonstraties. Opleidingen. Defensie. En vooral: duizenden mensen die luchtvaart van dichtbij willen beleven.",
  "flyin.stampe.heading": "De Stampe SV-4 keert terug naar Antwerpen",
  "flyin.stampe.p1":
    "Eén vliegtuig krijgt tijdens ons eeuwfeest een bijzondere plaats: de legendarische Stampe SV-4. Een Belgische klassieker met Antwerpse roots en een iconische plaats in onze luchtvaartgeschiedenis.",
  "flyin.stampe.p2":
    "Ons doel? Zoveel mogelijk SV-4's uit binnen- en buitenland opnieuw samenbrengen in Antwerpen — een unieke ontmoeting met levende luchtvaartgeschiedenis.",
  "flyin.sky.heading": "Kijk omhoog!",
  "flyin.sky.p1":
    "Een verjaardag van een vliegclub vier je natuurlijk ook in de lucht. We willen Antwerpse formatieteams en bijzondere vliegtuigen samenbrengen voor demonstraties boven Antwerp Airport.",
  "flyin.sky.p2":
    "Formaties, historische toestellen en warbirds maken van de luchthaven één groot luchtvaartpodium.",
  "flyin.behind.heading": "Ontdek wat er achter de schermen gebeurt",
  "flyin.behind.p1":
    "Antwerp Airport is veel meer dan lijnvluchten: het is een thuisbasis voor vliegscholen, onderhoud, General Aviation, zakenluchtvaart, ambulance-, inspectie- en fotovluchten en tal van gespecialiseerde luchtvaartactiviteiten.",
  "flyin.behind.p2":
    "Ontmoet piloten, techniekers, instructeurs en luchtvaartprofessionals. Ontdek hoe vliegtuigen worden onderhouden. Maak kennis met vliegopleidingen en ontdek misschien zelfs je eigen toekomst in de luchtvaart.",
  "flyin.neighbours.heading": "Welkom, buren!",
  "flyin.neighbours.p1":
    "Al honderd jaar delen RAAC en Antwerp Airport hun omgeving met duizenden Antwerpenaren. Buurtbewoners en stakeholders uit de onmiddellijke omgeving nodigen we op zaterdagmorgen uit voor een feestelijke brunch waarmee we samen het verjaardagsweekend openen.",
  "flyin.closing.heading": "Twee dagen. Eén luchthaven. Honderd jaar luchtvaart.",
  "flyin.closing.body":
    "Of je nu piloot bent, vliegtuigspotter, luchtvaartprofessional, buur, nieuwsgierige Antwerpenaar of gewoon iemand die bij het geluid van een vliegtuigmotor automatisch omhoog kijkt: dit weekend is voor jou.",
  "flyin.closing.cta": "Save the date.",
  "flyin.closing.note": "En kijk vooral af en toe omhoog.",

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

  "finale.badge": "In voorbereiding",
  "finale.eyebrow": "6 november 2027 — Antwerpen",
  "finale.heading": "Finale van een bijzonder jaar",
  "finale.tagline": "Waar anders dan in Antwerpen?",
  "finale.p1": "RAAC en Antwerpen delen een lange geschiedenis.",
  "finale.p2":
    "Bij het 75-jarig bestaan werd de club officieel ontvangen door het Antwerpse stadsbestuur. Ook bij de 90ste verjaardag kreeg RAAC een bijzondere ontvangst.",
  "finale.p3":
    "Bij honderd jaar willen we die mooie traditie graag voortzetten. Daarom hopen we op 6 november 2027 ons feestjaar af te sluiten met een officiële ontvangst in het Antwerpse Stadhuis — een symbolisch slotmoment voor een club die al sinds 1927 nauw verbonden is met de stad en haar luchthaven.",
  "finale.reflect":
    "Een gelegenheid om terug te kijken. Om mensen te bedanken. Maar vooral om vooruit te kijken — want na alle festiviteiten van 2027 begint op 1 januari gewoon ons volgende hoofdstuk.",
  "finale.disclaimer":
    "Deze ontvangst is nog niet formeel bevestigd door Stad Antwerpen. Datum, locatie en programma kunnen nog wijzigen.",

  "partners.heading": "Avec le soutien de",

  "socials.heading": "Suivez-nous",
  "socials.website.label": "Site web",

  "closing.heading":
    "100 jaar RAAC. Een eeuw geschiedenis. En we zijn nog lang niet uitgevlogen.",
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

  "gala.meta.title": "RAAC 100 Gala — 29 mei 2027",
  "gala.meta.description":
    "Een stijlvolle feestavond voor leden, oud-leden en vrienden van de Royal Antwerp Aviation Club. Onderdeel van het RAAC 100 jubileumjaar.",
  "gala.eyebrow": "29 mei 2027",
  "gala.heading": "RAAC 100 Gala",
  "gala.tagline": "Sommige verjaardagen verdienen nét dat beetje meer.",
  "gala.intro.p1":
    "Honderd jaar RAAC is er zo één. Daarom ruilen we op 29 mei de cockpit even in voor een bijzondere feestavond.",
  "gala.intro.p2":
    "Een avond voor leden en oud-leden, piloten, partners, sympathisanten en vrienden van de club — om herinneringen boven te halen, sterke verhalen opnieuw te vertellen en oude bekenden terug te zien.",
  "gala.fact.body":
    "Het eerste clubtoestel met dieselfuel: Jet A1 — de OO-VPE. Een gedurfde maar vooruitziende beslissing.",
  "gala.intro.p3": "Maar vooral een avond om samen te vieren.",
  "gala.people.heading": "Honderd jaar mensen",
  "gala.people.quote":
    "Vliegtuigen maken deel uit van onze geschiedenis. Maar mensen maakten onze geschiedenis.",
  "gala.people.p1":
    "Generaties piloten, instructeurs, vrijwilligers en bestuursleden hielden RAAC honderd jaar lang in de lucht. Ook wanneer er af en toe wat turbulentie was.",
  "gala.people.p2":
    "Dankzij hen is RAAC vandaag de oudste nog actieve vliegclub van België — en tegelijk een moderne club die volop naar de toekomst kijkt. Op 29 mei zetten we die mensen in de schijnwerpers.",
  "gala.setting.heading": "Antwerpen vormt het decor",
  "gala.setting.p1":
    "Voor deze uitzonderlijke verjaardag hoort een uitzonderlijke locatie: een stijlvolle avond, een bijzondere Antwerpse setting, lekker eten, mooie ontmoetingen, herinneringen, muziek en verhalen uit honderd jaar RAAC.",
  "gala.setting.p2": "En daarna? Dan maken we nieuwe herinneringen.",
  "gala.closing.date": "29 mei 2027",
  "gala.closing.cta1": "Dress up. Show up.",
  "gala.closing.cta2": "And celebrate 100 years of flying together.",
  "gala.back": "Terug naar raac.be",
};

const en: Dictionary = {
  "meta.title": "RAAC 100 — centenary weekend 2027",
  "meta.description":
    "The Royal Antwerp Aviation Club turns one hundred. Centenary weekend on 6 and 7 November 2027, Antwerp Airport (Deurne).",

  /* TODO — untranslated. Dutch text duplicated as a stub so the build
     passes; needs a real English translation before launch. */
  "nav.events": "Evenementen",
  "nav.about": "Over RAAC",
  "nav.tickets": "Tickets",
  "nav.programme": "Fly-in Weekend",
  "nav.history": "1927–2027",
  "nav.practical": "Practical",
  "nav.finale": "Finale",
  "nav.partners": "Partners",
  "nav.gala": "Gala",
  "nav.skip": "Skip to content",

  "marquee.a": "RAAC 100",
  "marquee.b": "8 & 9 mei 2027",
  "marquee.c": "29 mei 2027",
  "marquee.d": "6 november 2027",

  "hero.title": "100 jaar RAAC",
  "hero.years": "1927 – 2027",
  "hero.subtitle": "Een eeuw passie voor luchtvaart",
  "hero.intro":
    "Honderd jaar vliegen. Honderd jaar Antwerpen. Honderd jaar RAAC.",
  "hero.cta": "Bekijk de evenementen",

  "events.heading": "2027 wordt een feestjaar",
  "events.intro":
    "We brengen piloten, vliegtuigen, leden en oud-leden, luchtvaartprofessionals, buurtbewoners, partners én iedereen met een hart voor luchtvaart samen. Met drie bijzondere momenten:",
  "events.flyin.date": "8 & 9 mei 2027",
  "events.flyin.title": "RAAC 100 Fly-in Weekend",
  "events.flyin.body":
    "Twee dagen vliegtuigen, historie, demonstraties en General Aviation op Antwerp Airport.",
  "events.flyin.cta": "Ontdek het weekend",
  "events.gala.date": "29 mei 2027",
  "events.gala.title": "RAAC 100 Gala",
  "events.gala.body":
    "Een stijlvolle feestavond voor iedereen die deel uitmaakt van het verhaal van RAAC.",
  "events.gala.cta": "Ontdek het gala",
  "events.finale.badge": "In voorbereiding",
  "events.finale.date": "6 november 2027",
  "events.finale.title": "Finale van ons feestjaar",
  "events.finale.body":
    "We hopen ons eeuwfeest symbolisch af te sluiten waar RAAC al honderd jaar thuis is: in Antwerpen.",
  "events.finale.cta": "Lees meer",

  "about.heading": "A hundred years. The same Flight club.",
  "about.body":
    "On 3 November 1927, Pierre Schellekens founded the Antwerp Aviation Club, with Jan Olieslagers as its first chairman. A hundred years on, we still fly from Deurne. For two days the hangar is open to members, former members, families, and anyone who ever flew with us.",

  "tickets.heading": "Tickets — Fly-in Weekend",
  "tickets.lede":
    "Eén ticket geeft toegang tot de volledige dag van het Fly-in Weekend, aan de kassa of online.",
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

  "flyin.eyebrow": "8 & 9 mei 2027 — Antwerp Airport",
  "flyin.heading": "RAAC 100 Fly-in Weekend",
  "flyin.tagline": "Oshkosh aan de Schelde? Waarom niet.",
  "flyin.intro.p1":
    "Een vliegclub die honderd jaar wordt, viert dat waar het allemaal om draait: tussen de vliegtuigen en in de lucht.",
  "flyin.intro.p2":
    "Op 8 en 9 mei 2027 willen we Antwerp Airport laten bruisen van de luchtvaart.",
  "flyin.intro.p3":
    "Historische vliegtuigen. Warbirds. Moderne toestellen. Piloten en vliegclubs uit binnen- en buitenland. Luchtvaartprofessionals. Demonstraties. Opleidingen. Defensie. En vooral: duizenden mensen die luchtvaart van dichtbij willen beleven.",
  "flyin.stampe.heading": "De Stampe SV-4 keert terug naar Antwerpen",
  "flyin.stampe.p1":
    "Eén vliegtuig krijgt tijdens ons eeuwfeest een bijzondere plaats: de legendarische Stampe SV-4. Een Belgische klassieker met Antwerpse roots en een iconische plaats in onze luchtvaartgeschiedenis.",
  "flyin.stampe.p2":
    "Ons doel? Zoveel mogelijk SV-4's uit binnen- en buitenland opnieuw samenbrengen in Antwerpen — een unieke ontmoeting met levende luchtvaartgeschiedenis.",
  "flyin.sky.heading": "Kijk omhoog!",
  "flyin.sky.p1":
    "Een verjaardag van een vliegclub vier je natuurlijk ook in de lucht. We willen Antwerpse formatieteams en bijzondere vliegtuigen samenbrengen voor demonstraties boven Antwerp Airport.",
  "flyin.sky.p2":
    "Formaties, historische toestellen en warbirds maken van de luchthaven één groot luchtvaartpodium.",
  "flyin.behind.heading": "Ontdek wat er achter de schermen gebeurt",
  "flyin.behind.p1":
    "Antwerp Airport is veel meer dan lijnvluchten: het is een thuisbasis voor vliegscholen, onderhoud, General Aviation, zakenluchtvaart, ambulance-, inspectie- en fotovluchten en tal van gespecialiseerde luchtvaartactiviteiten.",
  "flyin.behind.p2":
    "Ontmoet piloten, techniekers, instructeurs en luchtvaartprofessionals. Ontdek hoe vliegtuigen worden onderhouden. Maak kennis met vliegopleidingen en ontdek misschien zelfs je eigen toekomst in de luchtvaart.",
  "flyin.neighbours.heading": "Welkom, buren!",
  "flyin.neighbours.p1":
    "Al honderd jaar delen RAAC en Antwerp Airport hun omgeving met duizenden Antwerpenaren. Buurtbewoners en stakeholders uit de onmiddellijke omgeving nodigen we op zaterdagmorgen uit voor een feestelijke brunch waarmee we samen het verjaardagsweekend openen.",
  "flyin.closing.heading": "Twee dagen. Eén luchthaven. Honderd jaar luchtvaart.",
  "flyin.closing.body":
    "Of je nu piloot bent, vliegtuigspotter, luchtvaartprofessional, buur, nieuwsgierige Antwerpenaar of gewoon iemand die bij het geluid van een vliegtuigmotor automatisch omhoog kijkt: dit weekend is voor jou.",
  "flyin.closing.cta": "Save the date.",
  "flyin.closing.note": "En kijk vooral af en toe omhoog.",

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

  "finale.badge": "In voorbereiding",
  "finale.eyebrow": "6 november 2027 — Antwerpen",
  "finale.heading": "Finale van een bijzonder jaar",
  "finale.tagline": "Waar anders dan in Antwerpen?",
  "finale.p1": "RAAC en Antwerpen delen een lange geschiedenis.",
  "finale.p2":
    "Bij het 75-jarig bestaan werd de club officieel ontvangen door het Antwerpse stadsbestuur. Ook bij de 90ste verjaardag kreeg RAAC een bijzondere ontvangst.",
  "finale.p3":
    "Bij honderd jaar willen we die mooie traditie graag voortzetten. Daarom hopen we op 6 november 2027 ons feestjaar af te sluiten met een officiële ontvangst in het Antwerpse Stadhuis — een symbolisch slotmoment voor een club die al sinds 1927 nauw verbonden is met de stad en haar luchthaven.",
  "finale.reflect":
    "Een gelegenheid om terug te kijken. Om mensen te bedanken. Maar vooral om vooruit te kijken — want na alle festiviteiten van 2027 begint op 1 januari gewoon ons volgende hoofdstuk.",
  "finale.disclaimer":
    "Deze ontvangst is nog niet formeel bevestigd door Stad Antwerpen. Datum, locatie en programma kunnen nog wijzigen.",

  "partners.heading": "With the support of",

  "socials.heading": "Follow us",
  "socials.website.label": "Website",

  "closing.heading":
    "100 jaar RAAC. Een eeuw geschiedenis. En we zijn nog lang niet uitgevlogen.",
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

  "gala.meta.title": "RAAC 100 Gala — 29 mei 2027",
  "gala.meta.description":
    "Een stijlvolle feestavond voor leden, oud-leden en vrienden van de Royal Antwerp Aviation Club. Onderdeel van het RAAC 100 jubileumjaar.",
  "gala.eyebrow": "29 mei 2027",
  "gala.heading": "RAAC 100 Gala",
  "gala.tagline": "Sommige verjaardagen verdienen nét dat beetje meer.",
  "gala.intro.p1":
    "Honderd jaar RAAC is er zo één. Daarom ruilen we op 29 mei de cockpit even in voor een bijzondere feestavond.",
  "gala.intro.p2":
    "Een avond voor leden en oud-leden, piloten, partners, sympathisanten en vrienden van de club — om herinneringen boven te halen, sterke verhalen opnieuw te vertellen en oude bekenden terug te zien.",
  "gala.fact.body":
    "Het eerste clubtoestel met dieselfuel: Jet A1 — de OO-VPE. Een gedurfde maar vooruitziende beslissing.",
  "gala.intro.p3": "Maar vooral een avond om samen te vieren.",
  "gala.people.heading": "Honderd jaar mensen",
  "gala.people.quote":
    "Vliegtuigen maken deel uit van onze geschiedenis. Maar mensen maakten onze geschiedenis.",
  "gala.people.p1":
    "Generaties piloten, instructeurs, vrijwilligers en bestuursleden hielden RAAC honderd jaar lang in de lucht. Ook wanneer er af en toe wat turbulentie was.",
  "gala.people.p2":
    "Dankzij hen is RAAC vandaag de oudste nog actieve vliegclub van België — en tegelijk een moderne club die volop naar de toekomst kijkt. Op 29 mei zetten we die mensen in de schijnwerpers.",
  "gala.setting.heading": "Antwerpen vormt het decor",
  "gala.setting.p1":
    "Voor deze uitzonderlijke verjaardag hoort een uitzonderlijke locatie: een stijlvolle avond, een bijzondere Antwerpse setting, lekker eten, mooie ontmoetingen, herinneringen, muziek en verhalen uit honderd jaar RAAC.",
  "gala.setting.p2": "En daarna? Dan maken we nieuwe herinneringen.",
  "gala.closing.date": "29 mei 2027",
  "gala.closing.cta1": "Dress up. Show up.",
  "gala.closing.cta2": "And celebrate 100 years of flying together.",
  "gala.back": "Terug naar raac.be",
};

export const ui = { nl, fr, en } satisfies Record<Lang, Dictionary>;
