// Content for EvidenSe Labs: the hub page and La Sponsoring Machine in
// English, French and German. Source: "La Sponsoring Machine, texte
// GEO/SEO pour evidense.io (FR + EN)", Stéphane Schwander, 21 November
// 2026. The German version is a translation of that text.
//
// Inline links use a light markdown syntax, [label](href), rendered by
// the page component. Internal links start with "/".
//
// Proof figures to re-check after each club workshop: six clubs tested
// against the model, two clubs in the beta.

export const SPONSORING_MACHINE_TOOL_URL = "https://sponsoring-machine.evidense.io";

export type LabsLocale = "en" | "fr" | "de";

export const SPONSORING_MACHINE_PATHS: Record<LabsLocale, string> = {
  en: "/labs/sponsoring-machine",
  fr: "/fr/labs/sponsoring-machine",
  de: "/de/labs/sponsoring-machine",
};

// hreflang codes used in <link rel="alternate"> and the sitemap.
export const HREFLANG: Record<LabsLocale, string> = {
  en: "en",
  fr: "fr-CH",
  de: "de-CH",
};

export const LINKS = {
  jessyLinkedIn: "https://www.linkedin.com/in/jessy-ducommun/",
  unil: "https://www.unil.ch",
  swissOlympic: "https://www.swissolympic.ch",
  zefix: "https://www.zefix.ch",
  lucFloorball: "https://www.lucfloorballepalinges.ch/",
};

export type SponsoringMachineContent = {
  locale: LabsLocale;
  htmlLang: string;
  ogLocale: string;
  title: string;
  description: string;
  breadcrumbLabs: string;
  eyebrow: string;
  h1: string;
  lead: string[];
  facts: { label: string; value: string }[];
  cta: { primary: string; note: string };
  sections: { heading: string; body: string[] }[];
  faqHeading: string;
  faq: { q: string; a: string }[];
  closing: string;
  languageLabel: string;
  serviceDescription: string;
  serviceType: string;
  audience: string;
};

const en: SponsoringMachineContent = {
  locale: "en",
  htmlLang: "en-GB",
  ogLocale: "en_GB",
  title: "La Sponsoring Machine: sponsorship for amateur clubs",
  description:
    "EvidenSe helps amateur sports clubs in French-speaking Switzerland value their sponsorship, structure their offer and find local sponsors. Free demo.",
  breadcrumbLabs: "Labs",
  eyebrow: "EvidenSe Labs · La Sponsoring Machine",
  h1: "Helping amateur sports clubs become sponsorable.",
  lead: [
    "La Sponsoring Machine is an EvidenSe service that helps amateur sports clubs in French-speaking Switzerland value, structure and sell their sponsorship. It turns what a club already has (members, families, local presence, digital audience, events) into an offer a local business can read and act on.",
  ],
  facts: [
    { label: "Provided by", value: "EvidenSe, Lausanne" },
    { label: "For", value: "Amateur sports clubs, federations, municipalities" },
    { label: "Area", value: "French-speaking Switzerland first" },
    { label: "Price", value: "Free demo. Beta CHF 390 per season" },
    { label: "Tool languages", value: "French and German" },
    { label: "Research partner", value: "University of Lausanne (UNIL)" },
  ],
  cta: {
    primary: "Open La Sponsoring Machine",
    note: "The demo is free. For the beta, write to",
  },
  sections: [
    {
      heading: "The problem",
      body: [
        "Most amateur clubs have real sponsorship value but no way to measure or present it. Sponsorship typically accounts for 4 to 10% of their budget; it depends on a few volunteers, a personal network and a sponsorship proposal that is either missing or several seasons old. The problem is not finding sponsors: it is being sponsorable.",
      ],
    },
    {
      heading: "What the Sponsoring Machine does",
      body: [
        "In about twenty minutes, a club gets an estimate of its sponsorship value (a plausibility range), the gap with what it currently collects, three offer tiers (for example Gold, Silver, Bronze) and a personalised sponsorship brochure.",
        "In the beta, EvidenSe also delivers a shortlist of ten relevant local companies, identified by municipality and sector from public sources (company website, Swiss commercial register [Zefix](https://www.zefix.ch)), with the contact person the company itself publishes and ready-to-send approach messages the club sends from its own mailbox.",
      ],
    },
    {
      heading: "How it works",
      body: [
        "A short form (municipality, sport, level, members, online presence, events), a valuation model calibrated on the sponsorship actually collected by clubs in French-speaking Switzerland in 2026, and AI for drafting and qualification. The club stays in control: messages leave from its own inbox, decision-makers are named only when the company publishes them, and no contact data is purchased.",
      ],
    },
    {
      heading: "Where the project stands",
      body: [
        "La Sponsoring Machine is an EvidenSe lab, not a platform. In 2026 the model was tested against the real sponsorship income of six clubs in French-speaking Switzerland; two clubs have joined the beta.",
        "The project is run with [Jessy Ducommun](https://www.linkedin.com/in/jessy-ducommun/), who is writing his master's thesis on the subject at the [University of Lausanne (UNIL)](https://www.unil.ch), and was presented to club committees as part of the Club Management course at the Maison du Sport of [Swiss Olympic](https://www.swissolympic.ch) in Ittigen. The tool is available in French and German.",
      ],
    },
    {
      heading: "The ambition",
      body: [
        "To prove, club by club, that a professional sponsorship proposal changes how much an amateur club collects. French-speaking Switzerland is the starting ground; the ambition is to serve every amateur club in Switzerland, in French, German and Italian.",
        "If three clubs pay for the beta (CHF 390 per season) by the end of 2026, the service extends to cantonal and national federations, sports associations and municipalities that want to equip their clubs. If not, the project becomes an EvidenSe case study on the economics of grassroots sport in Switzerland.",
      ],
    },
    {
      heading: "Who it is for",
      body: [
        "Committees of amateur clubs (football, floorball, athletics, handball, judo, outdoor sports), cantonal federations, sports associations and municipalities in French-speaking Switzerland.",
      ],
    },
  ],
  faqHeading: "Frequently asked questions",
  faq: [
    {
      q: "What is La Sponsoring Machine?",
      a: "An EvidenSe service that estimates the sponsorship value of a Swiss amateur club, structures its offer and identifies relevant local sponsors.",
    },
    {
      q: "How much does it cost?",
      a: "The demo (estimate, gap, three offers, brochure) is free. The beta costs CHF 390 per season and includes ten named companies with a contact person, ready-to-send messages, two follow-up calls and an updated brochure.",
    },
    {
      q: "Is it a matchmaking platform?",
      a: "No. It is work delivered to the club, supported by an online tool. The club contacts the companies itself.",
    },
    {
      q: "Where does the company data come from?",
      a: "From the company's website and the Swiss commercial register ([Zefix](https://www.zefix.ch)). No contact lists are purchased.",
    },
    {
      q: "Who is behind the project?",
      a: "[Stéphane Schwander](/about), founder of [EvidenSe](/) (strategic advisory for sport, Lausanne), with [Jessy Ducommun](https://www.linkedin.com/in/jessy-ducommun/) (UNIL, sponsorship manager of [LUC Floorball Epalinges](https://www.lucfloorballepalinges.ch/)).",
    },
  ],
  closing: "A club committee, a federation or a municipality that wants to equip its clubs? Start with the free demo.",
  languageLabel: "Language",
  serviceDescription:
    "Estimates the sponsorship value of a Swiss amateur sports club, structures its offer into tiers with a personalised brochure and, in the beta, identifies ten relevant local companies from public sources.",
  serviceType: "Sponsorship advisory for amateur sports clubs",
  audience: "Amateur sports clubs, cantonal and national federations, municipalities",
};

const fr: SponsoringMachineContent = {
  locale: "fr",
  htmlLang: "fr-CH",
  ogLocale: "fr_CH",
  title: "La Sponsoring Machine : sponsoring pour clubs amateurs",
  description:
    "EvidenSe aide les clubs sportifs amateurs romands à chiffrer leur valeur de sponsoring, structurer leur offre et trouver des sponsors locaux. Démo gratuite.",
  breadcrumbLabs: "Labs",
  eyebrow: "EvidenSe Labs · La Sponsoring Machine",
  h1: "Aider les clubs amateurs à devenir sponsorisables.",
  lead: [
    "La Sponsoring Machine est un service d'EvidenSe qui aide les clubs sportifs amateurs de Suisse romande à chiffrer, structurer et vendre leur sponsoring. Elle transforme ce qu'un club possède déjà (membres, familles, présence locale, audience numérique, événements) en une offre lisible pour une entreprise de la région.",
  ],
  facts: [
    { label: "Proposé par", value: "EvidenSe, Lausanne" },
    { label: "Pour", value: "Clubs amateurs, fédérations, communes" },
    { label: "Territoire", value: "Suisse romande d'abord" },
    { label: "Prix", value: "Démo gratuite. Bêta CHF 390 par saison" },
    { label: "Langues de l'outil", value: "Français et allemand" },
    { label: "Partenaire de recherche", value: "Université de Lausanne (UNIL)" },
  ],
  cta: {
    primary: "Accéder à la Sponsoring Machine",
    note: "La démo est gratuite. Pour la bêta, écrivez à",
  },
  sections: [
    {
      heading: "Le constat",
      body: [
        "La plupart des clubs amateurs ont une valeur de sponsoring réelle mais ne savent ni la mesurer ni la présenter. Le sponsoring pèse souvent 4 à 10 % de leur budget ; il repose sur quelques bénévoles, un réseau personnel et un dossier qui n'existe pas ou date de plusieurs saisons. Le problème n'est pas de « trouver des sponsors » : c'est d'être sponsorisable.",
      ],
    },
    {
      heading: "Ce que fait la Sponsoring Machine",
      body: [
        "En une vingtaine de minutes, un club obtient une estimation de la valeur de sponsoring de son club (fourchette de plausibilité), l'écart avec ce qu'il encaisse aujourd'hui, trois paliers d'offres (par exemple Or, Argent, Bronze) et une plaquette de sponsoring personnalisée.",
        "En bêta, EvidenSe livre en plus une liste de dix entreprises locales pertinentes, identifiées par commune et par secteur à partir de sources publiques (site web, registre du commerce [Zefix](https://www.zefix.ch)), avec l'interlocuteur publié par l'entreprise et des messages d'approche prêts à envoyer depuis la boîte mail du club.",
      ],
    },
    {
      heading: "Comment ça marche",
      body: [
        "Un formulaire simple (commune, sport, niveau, membres, présence en ligne, événements), un modèle de valorisation calibré sur le sponsoring réellement encaissé par des clubs romands en 2026, et de l'IA pour rédiger et qualifier. Le club garde la main : les messages partent de sa messagerie, les décideurs ne sont nommés que lorsque l'entreprise les publie elle-même, aucune donnée de contact n'est achetée.",
      ],
    },
    {
      heading: "Où en est le projet",
      body: [
        "La Sponsoring Machine est un laboratoire EvidenSe, pas une plateforme. Le modèle a été confronté en 2026 au sponsoring réel de six clubs romands ; deux clubs ont rejoint la bêta.",
        "Le projet est mené avec [Jessy Ducommun](https://www.linkedin.com/in/jessy-ducommun/), qui lui consacre son travail de master à l'[Université de Lausanne (UNIL)](https://www.unil.ch), et a été présenté aux comités de clubs dans le cadre du cours Club Management à la Maison du Sport de [Swiss Olympic](https://www.swissolympic.ch) à Ittigen. L'outil existe en français et en allemand.",
      ],
    },
    {
      heading: "L'ambition",
      body: [
        "Prouver, club par club, qu'un dossier de sponsoring professionnel change le montant encaissé par un club amateur. La Suisse romande est le terrain de départ ; l'ambition est de servir tous les clubs amateurs de Suisse, en français, en allemand et en italien.",
        "Si trois clubs paient la bêta (CHF 390 par saison) d'ici fin 2026, le service s'étend aux fédérations cantonales et nationales, aux associations et aux communes qui veulent outiller leurs clubs. Sinon, le projet devient une étude de cas EvidenSe sur l'économie du sport amateur en Suisse.",
      ],
    },
    {
      heading: "Pour qui",
      body: [
        "Comités de clubs amateurs (football, unihockey, athlétisme, handball, judo, sports outdoor), fédérations cantonales, associations sportives et communes de Suisse romande.",
      ],
    },
  ],
  faqHeading: "Questions fréquentes",
  faq: [
    {
      q: "Qu'est-ce que La Sponsoring Machine ?",
      a: "Un service EvidenSe qui estime la valeur de sponsoring d'un club amateur suisse, structure son offre et identifie des sponsors locaux pertinents.",
    },
    {
      q: "Combien coûte le service ?",
      a: "La démo (estimation, écart, trois offres, plaquette) est gratuite. La bêta coûte CHF 390 par saison et comprend dix entreprises nommées avec interlocuteur, les messages prêts, deux points de suivi et la plaquette mise à jour.",
    },
    {
      q: "Est-ce une plateforme de mise en relation ?",
      a: "Non. C'est un travail livré au club, avec un outil en ligne en appui. Le club contacte lui-même les entreprises.",
    },
    {
      q: "D'où viennent les données sur les entreprises ?",
      a: "Du site web de l'entreprise et du registre du commerce suisse ([Zefix](https://www.zefix.ch)). Aucun fichier de contacts n'est acheté.",
    },
    {
      q: "Qui est derrière le projet ?",
      a: "[Stéphane Schwander](/about), fondateur d'[EvidenSe](/) (conseil stratégique pour le sport, Lausanne), avec [Jessy Ducommun](https://www.linkedin.com/in/jessy-ducommun/) (UNIL, sponsoring manager du [LUC Floorball Epalinges](https://www.lucfloorballepalinges.ch/)).",
    },
  ],
  closing: "Un comité de club, une fédération ou une commune qui veut outiller ses clubs ? Commencez par la démo gratuite.",
  languageLabel: "Langue",
  serviceDescription:
    "Estime la valeur de sponsoring d'un club sportif amateur suisse, structure son offre en paliers avec une plaquette personnalisée et, en bêta, identifie dix entreprises locales pertinentes à partir de sources publiques.",
  serviceType: "Conseil en sponsoring pour clubs sportifs amateurs",
  audience: "Clubs sportifs amateurs, fédérations cantonales et nationales, communes",
};

const de: SponsoringMachineContent = {
  locale: "de",
  htmlLang: "de-CH",
  ogLocale: "de_CH",
  title: "La Sponsoring Machine: Sponsoring für Amateurvereine",
  description:
    "EvidenSe hilft Amateurvereinen, ihren Sponsoringwert zu beziffern, ihr Angebot zu strukturieren und lokale Sponsoren in der Schweiz zu finden. Gratis-Demo.",
  breadcrumbLabs: "Labs",
  eyebrow: "EvidenSe Labs · La Sponsoring Machine",
  h1: "Amateursportvereine sponsorfähig machen.",
  lead: [
    "La Sponsoring Machine ist ein Angebot von EvidenSe, das Amateursportvereinen in der Westschweiz hilft, ihr Sponsoring zu beziffern, zu strukturieren und zu verkaufen. Sie macht aus dem, was ein Verein bereits hat (Mitglieder, Familien, lokale Verankerung, digitale Reichweite, Anlässe), ein Angebot, das ein Unternehmen aus der Region versteht und umsetzen kann.",
  ],
  facts: [
    { label: "Angeboten von", value: "EvidenSe, Lausanne" },
    { label: "Für", value: "Amateurvereine, Verbände, Gemeinden" },
    { label: "Gebiet", value: "Zuerst die Westschweiz" },
    { label: "Preis", value: "Demo gratis. Beta CHF 390 pro Saison" },
    { label: "Sprachen des Tools", value: "Französisch und Deutsch" },
    { label: "Forschungspartner", value: "Universität Lausanne (UNIL)" },
  ],
  cta: {
    primary: "Zur Sponsoring Machine",
    note: "Die Demo ist gratis. Für die Beta schreiben Sie an",
  },
  sections: [
    {
      heading: "Das Problem",
      body: [
        "Die meisten Amateurvereine haben einen echten Sponsoringwert, können ihn aber weder messen noch präsentieren. Sponsoring macht oft 4 bis 10 % ihres Budgets aus; es hängt an wenigen Freiwilligen, einem persönlichen Netzwerk und einem Sponsoringdossier, das fehlt oder mehrere Saisons alt ist. Das Problem ist nicht, Sponsoren zu finden: Es geht darum, sponsorfähig zu sein.",
      ],
    },
    {
      heading: "Was die Sponsoring Machine leistet",
      body: [
        "In rund zwanzig Minuten erhält ein Verein eine Schätzung seines Sponsoringwerts (eine Plausibilitätsspanne), die Lücke zu dem, was er heute einnimmt, drei Angebotsstufen (zum Beispiel Gold, Silber, Bronze) und eine personalisierte Sponsoringbroschüre.",
        "In der Beta liefert EvidenSe zusätzlich eine Liste von zehn passenden lokalen Unternehmen, ausgewählt nach Gemeinde und Branche aus öffentlichen Quellen (Website des Unternehmens, Handelsregister [Zefix](https://www.zefix.ch)), mit der Ansprechperson, die das Unternehmen selbst veröffentlicht, und versandbereiten Kontaktnachrichten, die der Verein aus seinem eigenen Postfach verschickt.",
      ],
    },
    {
      heading: "So funktioniert es",
      body: [
        "Ein kurzes Formular (Gemeinde, Sportart, Niveau, Mitglieder, Online-Präsenz, Anlässe), ein Bewertungsmodell, das auf dem tatsächlich eingenommenen Sponsoring von Westschweizer Vereinen im Jahr 2026 kalibriert ist, und KI für Formulierung und Qualifizierung. Der Verein behält die Kontrolle: Die Nachrichten gehen aus seinem eigenen Postfach, Entscheidungsträger werden nur genannt, wenn das Unternehmen sie selbst veröffentlicht, und es werden keine Kontaktdaten gekauft.",
      ],
    },
    {
      heading: "Stand des Projekts",
      body: [
        "La Sponsoring Machine ist ein Labor von EvidenSe, keine Plattform. 2026 wurde das Modell mit den tatsächlichen Sponsoringeinnahmen von sechs Westschweizer Vereinen abgeglichen; zwei Vereine sind der Beta beigetreten.",
        "Das Projekt wird mit [Jessy Ducommun](https://www.linkedin.com/in/jessy-ducommun/) geführt, der an der [Universität Lausanne (UNIL)](https://www.unil.ch) seine Masterarbeit darüber schreibt, und wurde Vereinsvorständen im Rahmen des Kurses Club Management im Haus des Sports von [Swiss Olympic](https://www.swissolympic.ch) in Ittigen vorgestellt. Das Tool ist auf Französisch und Deutsch verfügbar.",
      ],
    },
    {
      heading: "Das Ziel",
      body: [
        "Verein für Verein zu beweisen, dass ein professionelles Sponsoringdossier verändert, wie viel ein Amateurverein einnimmt. Die Westschweiz ist der Ausgangspunkt; das Ziel ist, allen Amateurvereinen der Schweiz zu dienen, auf Französisch, Deutsch und Italienisch.",
        "Wenn bis Ende 2026 drei Vereine für die Beta bezahlen (CHF 390 pro Saison), wird das Angebot auf kantonale und nationale Verbände, Sportvereinigungen und Gemeinden ausgeweitet, die ihre Vereine ausrüsten wollen. Andernfalls wird das Projekt zu einer Fallstudie von EvidenSe über die Ökonomie des Amateursports in der Schweiz.",
      ],
    },
    {
      heading: "Für wen",
      body: [
        "Vorstände von Amateurvereinen (Fussball, Unihockey, Leichtathletik, Handball, Judo, Outdoor-Sport), kantonale Verbände, Sportvereinigungen und Gemeinden, zuerst in der Westschweiz.",
      ],
    },
  ],
  faqHeading: "Häufige Fragen",
  faq: [
    {
      q: "Was ist La Sponsoring Machine?",
      a: "Ein Angebot von EvidenSe, das den Sponsoringwert eines Schweizer Amateurvereins schätzt, sein Angebot strukturiert und passende lokale Sponsoren findet.",
    },
    {
      q: "Was kostet das Angebot?",
      a: "Die Demo (Schätzung, Lücke, drei Angebote, Broschüre) ist gratis. Die Beta kostet CHF 390 pro Saison und umfasst zehn namentlich genannte Unternehmen mit Ansprechperson, versandbereite Nachrichten, zwei Follow-up-Gespräche und eine aktualisierte Broschüre.",
    },
    {
      q: "Ist es eine Vermittlungsplattform?",
      a: "Nein. Es ist eine Arbeit, die dem Verein geliefert wird, unterstützt durch ein Online-Tool. Der Verein kontaktiert die Unternehmen selbst.",
    },
    {
      q: "Woher stammen die Unternehmensdaten?",
      a: "Von der Website des Unternehmens und aus dem Schweizer Handelsregister ([Zefix](https://www.zefix.ch)). Es werden keine Kontaktlisten gekauft.",
    },
    {
      q: "Wer steht hinter dem Projekt?",
      a: "[Stéphane Schwander](/about), Gründer von [EvidenSe](/) (Strategieberatung für den Sport, Lausanne), mit [Jessy Ducommun](https://www.linkedin.com/in/jessy-ducommun/) (UNIL, Sponsoring-Verantwortlicher von [LUC Floorball Epalinges](https://www.lucfloorballepalinges.ch/)).",
    },
  ],
  closing: "Ein Vereinsvorstand, ein Verband oder eine Gemeinde, die ihre Vereine ausrüsten will? Beginnen Sie mit der Gratis-Demo.",
  languageLabel: "Sprache",
  serviceDescription:
    "Schätzt den Sponsoringwert eines Schweizer Amateursportvereins, strukturiert sein Angebot in Stufen mit einer personalisierten Broschüre und identifiziert in der Beta zehn passende lokale Unternehmen aus öffentlichen Quellen.",
  serviceType: "Sponsoringberatung für Amateursportvereine",
  audience: "Amateursportvereine, kantonale und nationale Verbände, Gemeinden",
};

export const SPONSORING_MACHINE: Record<LabsLocale, SponsoringMachineContent> = { en, fr, de };

// French typography: a non-breaking space before : and %, a narrow one
// before ; ? and !, so punctuation never wraps onto its own line.
export function frenchTypography(text: string): string {
  return text
    .replace(/ ([:%»])/g, " $1")
    .replace(/« /g, "« ")
    .replace(/ ([;?!])/g, " $1");
}

// Strip [label](href) markup to plain text, for JSON-LD and metadata.
export function plainText(text: string): string {
  return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");
}
