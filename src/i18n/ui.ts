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

  "nav.events": "Événements",
  "nav.about": "À propos de RAAC",
  "nav.tickets": "Billets",
  "nav.programme": "Fly-in Weekend",
  "nav.history": "1927–2027",
  "nav.practical": "Infos pratiques",
  "nav.finale": "Finale",
  "nav.partners": "Partenaires",
  "nav.gala": "Gala",
  "nav.skip": "Aller au contenu",

  "marquee.a": "RAAC 100",
  "marquee.b": "8 & 9 mai 2027",
  "marquee.c": "29 mai 2027",
  "marquee.d": "6 novembre 2027",

  "hero.title": "100 ans de RAAC",
  "hero.years": "1927 – 2027",
  "hero.subtitle": "Un siècle de passion pour l'aviation",
  "hero.intro":
    "Cent ans de vols. Cent ans à Anvers. Cent ans de RAAC.",
  "hero.cta": "Découvrez les événements",

  "events.heading": "2027, une année de fête",
  "events.intro":
    "Nous réunissons pilotes, avions, membres et anciens membres, professionnels de l'aviation, riverains, partenaires et tous ceux qui ont l'aviation dans le cœur. Avec trois moments forts :",
  "events.flyin.date": "8 & 9 mai 2027",
  "events.flyin.title": "RAAC 100 Fly-in Weekend",
  "events.flyin.body":
    "Deux jours d'avions, d'histoire, de démonstrations et d'aviation générale à l'aéroport d'Anvers.",
  "events.flyin.cta": "Découvrir le week-end",
  "events.gala.date": "29 mai 2027",
  "events.gala.title": "RAAC 100 Gala",
  "events.gala.body":
    "Une soirée de gala élégante pour tous ceux qui font partie de l'histoire de RAAC.",
  "events.gala.cta": "Découvrir le gala",
  "events.finale.badge": "En préparation",
  "events.finale.date": "6 novembre 2027",
  "events.finale.title": "La finale de notre année de fête",
  "events.finale.body":
    "Nous espérons clôturer symboliquement notre centenaire là où RAAC est chez elle depuis cent ans : à Anvers.",
  "events.finale.cta": "En savoir plus",

  "about.heading": "Cent ans. Le même aéro club.",
  "about.body":
    "Le 3 novembre 1927, Pierre Schellekens fondait l'Antwerp Aviation Club, avec Jan Olieslagers comme premier président. Cent ans plus tard, nous volons toujours depuis Deurne. Pendant deux jours, le hangar est ouvert aux membres, aux anciens, aux familles et à tous ceux qui ont un jour volé avec nous.",

  "tickets.heading": "Billets — Fly-in Weekend",
  "tickets.lede":
    "Un billet donne accès à la journée complète du Fly-in Weekend, en caisse ou en ligne.",
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

  "flyin.eyebrow": "8 & 9 mai 2027 — Aéroport d'Anvers",
  "flyin.heading": "RAAC 100 Fly-in Weekend",
  "flyin.tagline": "Oshkosh sur l'Escaut ? Pourquoi pas.",
  "flyin.intro.p1":
    "Un club d'aviation qui fête ses cent ans le fait là où tout se joue : parmi les avions et dans les airs.",
  "flyin.intro.p2":
    "Les 8 et 9 mai 2027, nous voulons faire vibrer l'aéroport d'Anvers au rythme de l'aviation.",
  "flyin.intro.p3":
    "Avions historiques. Warbirds. Appareils modernes. Pilotes et clubs d'aviation belges et étrangers. Professionnels de l'aviation. Démonstrations. Formations. Défense. Et surtout : des milliers de personnes venues vivre l'aviation de près.",
  "flyin.stampe.heading": "Le Stampe SV-4 de retour à Anvers",
  "flyin.stampe.p1":
    "Un avion occupe une place particulière lors de notre centenaire : le légendaire Stampe SV-4. Un classique belge aux racines anversoises, à la place emblématique dans notre histoire de l'aviation.",
  "flyin.stampe.p2":
    "Notre objectif ? Rassembler à nouveau à Anvers un maximum de Stampe SV-4 venus de Belgique et de l'étranger — une rencontre unique avec l'histoire vivante de l'aviation.",
  "flyin.sky.heading": "Les yeux au ciel !",
  "flyin.sky.p1":
    "On fête aussi l'anniversaire d'un club d'aviation dans les airs. Nous voulons réunir des équipes de voltige anversoises et des avions remarquables pour des démonstrations au-dessus de l'aéroport d'Anvers.",
  "flyin.sky.p2":
    "Formations, avions historiques et warbirds font de l'aéroport une grande scène aérienne.",
  "flyin.behind.heading": "Découvrez les coulisses",
  "flyin.behind.p1":
    "L'aéroport d'Anvers, c'est bien plus que des vols de ligne : c'est le port d'attache d'écoles de pilotage, d'ateliers d'entretien, de l'aviation générale, de l'aviation d'affaires, de vols ambulance, d'inspection et de photographie, et de nombreuses autres activités aéronautiques spécialisées.",
  "flyin.behind.p2":
    "Rencontrez pilotes, techniciens, instructeurs et professionnels de l'aviation. Découvrez comment les avions sont entretenus. Faites connaissance avec les formations au pilotage — et peut-être même avec votre propre avenir dans l'aviation.",
  "flyin.neighbours.heading": "Bienvenue, voisins !",
  "flyin.neighbours.p1":
    "Depuis cent ans, RAAC et l'aéroport d'Anvers partagent leur environnement avec des milliers d'Anversois. Le samedi matin, nous invitons les riverains et les parties prenantes du voisinage immédiat à un brunch festif pour ouvrir ensemble le week-end anniversaire.",
  "flyin.closing.heading": "Deux jours. Un aéroport. Cent ans d'aviation.",
  "flyin.closing.body":
    "Que vous soyez pilote, passionné d'aviation, professionnel du secteur, riverain, Anversois curieux, ou simplement quelqu'un qui lève automatiquement les yeux au bruit d'un moteur d'avion : ce week-end est pour vous.",
  "flyin.closing.cta": "Save the date.",
  "flyin.closing.note": "Et surtout, pensez à lever les yeux de temps en temps.",

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

  "finale.badge": "En préparation",
  "finale.eyebrow": "6 novembre 2027 — Anvers",
  "finale.heading": "La finale d'une année particulière",
  "finale.tagline": "Où mieux qu'à Anvers ?",
  "finale.p1": "RAAC et Anvers partagent une longue histoire.",
  "finale.p2":
    "Pour son 75e anniversaire, le club a été officiellement reçu par les autorités communales d'Anvers. Pour son 90e anniversaire aussi, RAAC a bénéficié d'un accueil particulier.",
  "finale.p3":
    "Pour les cent ans, nous aimerions poursuivre cette belle tradition. C'est pourquoi nous espérons clôturer notre année de fête le 6 novembre 2027 par une réception officielle à l'Hôtel de ville d'Anvers — un moment symbolique pour un club étroitement lié à la ville et à son aéroport depuis 1927.",
  "finale.reflect":
    "Une occasion de se retourner sur le passé. De remercier. Mais surtout de regarder vers l'avenir — car après toutes les festivités de 2027, notre prochain chapitre commence tout simplement le 1er janvier.",
  "finale.disclaimer":
    "Cette réception n'a pas encore été confirmée officiellement par la Ville d'Anvers. La date, le lieu et le programme peuvent encore changer.",

  "partners.heading": "Avec le soutien de",

  "socials.heading": "Suivez-nous",
  "socials.website.label": "Site web",

  "closing.heading":
    "100 ans de RAAC. Un siècle d'histoire. Et nous n'avons pas fini de voler.",
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

  "gala.meta.title": "RAAC 100 Gala — 29 mai 2027",
  "gala.meta.description":
    "Une soirée de gala élégante pour les membres, anciens membres et amis du Royal Antwerp Aviation Club. Un moment fort de l'année du centenaire RAAC 100.",
  "gala.eyebrow": "29 mai 2027",
  "gala.heading": "RAAC 100 Gala",
  "gala.tagline": "Certains anniversaires méritent un petit quelque chose en plus.",
  "gala.intro.p1":
    "Les cent ans de RAAC en font partie. C'est pourquoi, le 29 mai, nous échangeons le temps d'une soirée le cockpit contre une fête exceptionnelle.",
  "gala.intro.p2":
    "Une soirée pour les membres et anciens membres, les pilotes, les partenaires, les sympathisants et les amis du club — pour raviver des souvenirs, raconter à nouveau de belles histoires et retrouver de vieilles connaissances.",
  "gala.fact.body":
    "Le premier avion du club au carburant diesel : le Jet A1 — l'OO-VPE. Une décision audacieuse mais visionnaire.",
  "gala.intro.p3": "Mais surtout, une soirée pour célébrer ensemble.",
  "gala.people.heading": "Cent ans d'hommes et de femmes",
  "gala.people.quote":
    "Les avions font partie de notre histoire. Mais ce sont les gens qui l'ont écrite.",
  "gala.people.p1":
    "Des générations de pilotes, d'instructeurs, de bénévoles et d'administrateurs ont maintenu RAAC dans les airs pendant cent ans. Même quand il y a eu, de temps à autre, quelques turbulences.",
  "gala.people.p2":
    "Grâce à eux, RAAC est aujourd'hui le plus ancien club d'aviation encore actif de Belgique — et en même temps un club moderne résolument tourné vers l'avenir. Le 29 mai, nous mettons ces personnes à l'honneur.",
  "gala.setting.heading": "Anvers, le décor",
  "gala.setting.p1":
    "Cet anniversaire exceptionnel mérite un lieu exceptionnel : une soirée élégante, un cadre anversois particulier, une belle table, de belles rencontres, des souvenirs, de la musique et des histoires de cent ans de RAAC.",
  "gala.setting.p2": "Et ensuite ? Nous créerons de nouveaux souvenirs.",
  "gala.closing.date": "29 mai 2027",
  "gala.closing.cta1": "Dress up. Show up.",
  "gala.closing.cta2": "And celebrate 100 years of flying together.",
  "gala.back": "Retour à raac.be",
};

const en: Dictionary = {
  "meta.title": "RAAC 100 — centenary weekend 2027",
  "meta.description":
    "The Royal Antwerp Aviation Club turns one hundred. Centenary weekend on 6 and 7 November 2027, Antwerp Airport (Deurne).",

  "nav.events": "Events",
  "nav.about": "About RAAC",
  "nav.tickets": "Tickets",
  "nav.programme": "Fly-in Weekend",
  "nav.history": "1927–2027",
  "nav.practical": "Practical",
  "nav.finale": "Finale",
  "nav.partners": "Partners",
  "nav.gala": "Gala",
  "nav.skip": "Skip to content",

  "marquee.a": "RAAC 100",
  "marquee.b": "8 & 9 May 2027",
  "marquee.c": "29 May 2027",
  "marquee.d": "6 November 2027",

  "hero.title": "100 years of RAAC",
  "hero.years": "1927 – 2027",
  "hero.subtitle": "A century of passion for aviation",
  "hero.intro":
    "A hundred years of flying. A hundred years in Antwerp. A hundred years of RAAC.",
  "hero.cta": "See the events",

  "events.heading": "2027 is a year to celebrate",
  "events.intro":
    "We're bringing together pilots, aircraft, members and former members, aviation professionals, neighbours, partners, and everyone with aviation in their heart. With three special moments:",
  "events.flyin.date": "8 & 9 May 2027",
  "events.flyin.title": "RAAC 100 Fly-in Weekend",
  "events.flyin.body":
    "Two days of aircraft, history, demonstrations and General Aviation at Antwerp Airport.",
  "events.flyin.cta": "Discover the weekend",
  "events.gala.date": "29 May 2027",
  "events.gala.title": "RAAC 100 Gala",
  "events.gala.body":
    "A stylish evening of celebration for everyone who is part of RAAC's story.",
  "events.gala.cta": "Discover the gala",
  "events.finale.badge": "In preparation",
  "events.finale.date": "6 November 2027",
  "events.finale.title": "The finale of our celebration year",
  "events.finale.body":
    "We hope to symbolically close our centenary where RAAC has called home for a hundred years: Antwerp.",
  "events.finale.cta": "Read more",

  "about.heading": "A hundred years. The same Flight club.",
  "about.body":
    "On 3 November 1927, Pierre Schellekens founded the Antwerp Aviation Club, with Jan Olieslagers as its first chairman. A hundred years on, we still fly from Deurne. For two days the hangar is open to members, former members, families, and anyone who ever flew with us.",

  "tickets.heading": "Tickets — Fly-in Weekend",
  "tickets.lede":
    "One ticket covers the full day of the Fly-in Weekend, at the gate or online.",
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

  "flyin.eyebrow": "8 & 9 May 2027 — Antwerp Airport",
  "flyin.heading": "RAAC 100 Fly-in Weekend",
  "flyin.tagline": "Oshkosh on the Scheldt? Why not.",
  "flyin.intro.p1":
    "A flying club turning a hundred celebrates where it matters most: among the aircraft and in the air.",
  "flyin.intro.p2":
    "On 8 and 9 May 2027, we want Antwerp Airport buzzing with aviation.",
  "flyin.intro.p3":
    "Historic aircraft. Warbirds. Modern types. Pilots and flying clubs from Belgium and abroad. Aviation professionals. Demonstrations. Training. Defence. And above all: thousands of people who want to experience aviation up close.",
  "flyin.stampe.heading": "The Stampe SV-4 returns to Antwerp",
  "flyin.stampe.p1":
    "One aircraft gets a special place at our centenary: the legendary Stampe SV-4. A Belgian classic with Antwerp roots and an iconic place in our aviation history.",
  "flyin.stampe.p2":
    "Our goal? To bring together as many SV-4s as possible, from Belgium and abroad, once again in Antwerp — a unique encounter with living aviation history.",
  "flyin.sky.heading": "Look up!",
  "flyin.sky.p1":
    "A flying club's birthday is, naturally, also celebrated in the air. We want to bring together Antwerp formation teams and remarkable aircraft for demonstrations above Antwerp Airport.",
  "flyin.sky.p2":
    "Formations, historic aircraft and warbirds turn the airport into one great aviation stage.",
  "flyin.behind.heading": "Discover what happens behind the scenes",
  "flyin.behind.p1":
    "Antwerp Airport is far more than scheduled flights: it's a home base for flying schools, maintenance, General Aviation, business aviation, air ambulance, inspection and photography flights, and many other specialised aviation activities.",
  "flyin.behind.p2":
    "Meet pilots, engineers, instructors and aviation professionals. Discover how aircraft are maintained. Get to know flight training — and maybe even your own future in aviation.",
  "flyin.neighbours.heading": "Welcome, neighbours!",
  "flyin.neighbours.p1":
    "For a hundred years, RAAC and Antwerp Airport have shared their surroundings with thousands of Antwerp residents. On Saturday morning, we're inviting local residents and stakeholders to a festive brunch to open the anniversary weekend together.",
  "flyin.closing.heading": "Two days. One airport. A hundred years of aviation.",
  "flyin.closing.body":
    "Whether you're a pilot, a plane spotter, an aviation professional, a neighbour, a curious local, or simply someone who looks up at the sound of an aircraft engine: this weekend is for you.",
  "flyin.closing.cta": "Save the date.",
  "flyin.closing.note": "And don't forget to look up now and then.",

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

  "finale.badge": "In preparation",
  "finale.eyebrow": "6 November 2027 — Antwerp",
  "finale.heading": "The finale of a special year",
  "finale.tagline": "Where else but Antwerp?",
  "finale.p1": "RAAC and Antwerp share a long history.",
  "finale.p2":
    "At its 75th anniversary, the club was officially received by Antwerp's city council. At its 90th anniversary too, RAAC was given a special welcome.",
  "finale.p3":
    "At a hundred years, we'd love to continue that fine tradition. That's why we hope to close our celebration year on 6 November 2027 with an official reception at Antwerp City Hall — a symbolic closing moment for a club that has been closely tied to the city and its airport since 1927.",
  "finale.reflect":
    "A chance to look back. To thank people. But above all to look forward — because after all the festivities of 2027, our next chapter simply begins on 1 January.",
  "finale.disclaimer":
    "This reception has not yet been formally confirmed by the City of Antwerp. The date, location and programme may still change.",

  "partners.heading": "With the support of",

  "socials.heading": "Follow us",
  "socials.website.label": "Website",

  "closing.heading":
    "100 years of RAAC. A century of history. And we're nowhere near done flying.",
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

  "gala.meta.title": "RAAC 100 Gala — 29 May 2027",
  "gala.meta.description":
    "A stylish evening of celebration for members, former members and friends of the Royal Antwerp Aviation Club. Part of the RAAC 100 anniversary year.",
  "gala.eyebrow": "29 May 2027",
  "gala.heading": "RAAC 100 Gala",
  "gala.tagline": "Some birthdays deserve just that little bit more.",
  "gala.intro.p1":
    "A hundred years of RAAC is one of them. That's why, on 29 May, we're trading the cockpit for one evening for a special celebration.",
  "gala.intro.p2":
    "An evening for members and former members, pilots, partners, supporters and friends of the club — to bring back memories, retell good stories, and see old familiar faces again.",
  "gala.fact.body":
    "The club's first aircraft to run on diesel fuel: Jet A1 — the OO-VPE. A bold but far-sighted decision.",
  "gala.intro.p3": "But above all, an evening to celebrate together.",
  "gala.people.heading": "A hundred years of people",
  "gala.people.quote":
    "Aircraft are part of our history. But people made our history.",
  "gala.people.p1":
    "Generations of pilots, instructors, volunteers and board members kept RAAC flying for a hundred years. Even when there was the occasional bit of turbulence.",
  "gala.people.p2":
    "Thanks to them, RAAC is today the oldest still-active flying club in Belgium — and, at the same time, a modern club looking firmly to the future. On 29 May, we put those people in the spotlight.",
  "gala.setting.heading": "Antwerp sets the scene",
  "gala.setting.p1":
    "An exceptional anniversary deserves an exceptional setting: a stylish evening, a distinctive Antwerp backdrop, good food, good company, memories, music and stories from a hundred years of RAAC.",
  "gala.setting.p2": "And afterwards? We'll make new memories.",
  "gala.closing.date": "29 May 2027",
  "gala.closing.cta1": "Dress up. Show up.",
  "gala.closing.cta2": "And celebrate 100 years of flying together.",
  "gala.back": "Back to raac.be",
};

export const ui = { nl, fr, en } satisfies Record<Lang, Dictionary>;
