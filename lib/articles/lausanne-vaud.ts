import { BOOKING_URL, CONTACT_EMAIL } from "@/lib/site";
import { SPONSORING_MACHINE_PATHS, SPONSORING_MACHINE_TOOL_URL } from "@/lib/labs";

// "Lausanne and Vaud, home of international sport", a long-form article
// in English and French. The body lives in content/articles/*.mdx; this
// file holds everything that is structured: tables, figures, CTAs, FAQ,
// sources and metadata. Facts were checked on 24 November 2026. Every
// figure carries a numbered source, so the page can be quoted safely by
// a reader or by a generative engine.

export type ArticleLocale = "en" | "fr";

export const LAUSANNE_VAUD_PATHS: Record<ArticleLocale, string> = {
  en: "/insights/lausanne-vaud-international-sport",
  fr: "/fr/insights/lausanne-vaud-sport-international",
};

export const ARTICLE_HREFLANG: Record<ArticleLocale, string> = {
  en: "en",
  fr: "fr-CH",
};

export const LAUSANNE_VAUD_PUBLISHED = "2026-11-24";
export const LAUSANNE_VAUD_MODIFIED = "2026-11-24";
export const INDEX_URL = "https://index.evidense.io";

// Photographs: Wikimedia Commons, free licences, credited under each
// image. Served from Wikimedia's own thumbnail CDN at standard widths.
export type FigureId = "hero" | "ioc" | "aigle" | "epfl" | "marathon" | "lavaux";

export type FigureSource = {
  path: string; // "x/xy/File_name.jpg" under /wikipedia/commons/
  width: number;
  height: number;
  author: string;
  licence: string;
  licenceUrl: string;
};

export const FIGURE_SOURCES: Record<FigureId, FigureSource> = {
  hero: {
    path: "3/3c/Lausanne_vue_du_L%C3%A9man.jpg",
    width: 1600,
    height: 1060,
    author: "Gzzz",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  ioc: {
    path: "2/2f/Si%C3%A8ge_CIO_et_ch%C3%A2teau_de_Vidy.jpg",
    width: 1600,
    height: 1067,
    author: "Gzzz",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  aigle: {
    path: "3/3e/World_Cycling_Centre_-_Aigle_Switzerland.jpg",
    width: 1600,
    height: 1200,
    author: "Dake",
    licence: "CC BY-SA 3.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
  },
  epfl: {
    path: "6/6c/EPFL_Rolex_Learning_Center_%40_EPFL_%40_Lausanne_%2836749824932%29.jpg",
    width: 1600,
    height: 1067,
    author: "Guilhem Vellut",
    licence: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0/",
  },
  marathon: {
    path: "9/97/Maraton_de_Lausanne_%282974133055%29.jpg",
    width: 1600,
    height: 1067,
    author: "Ricardo Hurtubia",
    licence: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0/",
  },
  lavaux: {
    path: "d/da/Lavaux_Switzerland.jpg",
    width: 1600,
    height: 900,
    author: "Lorenz Poffet",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
};

const THUMB_WIDTHS = [500, 960, 1280, 1920];

export function commonsThumb(path: string, width: number) {
  const name = path.split("/")[2];
  return `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}/${width}px-${name}`;
}

export function commonsSrcSet(path: string) {
  return THUMB_WIDTHS.map((w) => `${commonsThumb(path, w)} ${w}w`).join(", ");
}

export function commonsFilePage(path: string) {
  return `https://commons.wikimedia.org/wiki/File:${path.split("/")[2]}`;
}

export type Source = { n: number; org: string; title: string; url: string; note: string };
export type Qa = { q: string; a: string; refs: number[] };

export type LausanneVaudContent = {
  locale: ArticleLocale;
  htmlLang: string;
  ogLocale: string;
  metaTitle: string;
  description: string;
  ogTitle: string;
  eyebrow: string;
  h1: string;
  standfirst: string;
  inBrief: { heading: string; items: string[] };
  byline: string;
  factsChecked: string;
  minutesRead: (n: number) => string;
  breadcrumb: string;
  languageLabel: string;
  tocLabel: string;
  imageCredit: string;
  figures: Record<FigureId, { alt: string; caption: string }>;
  facts: { value: string; label: string; scope: string; refs: number[] }[];
  places: { place: string; orgs: string; field: string; refs: number[] }[];
  federations: {
    summary: string;
    intro: string;
    groups: { title: string; items: { abbr: string; name: string; detail: string }[] }[];
  };
  impact: {
    heading: string;
    rows: { area: string; amount: string; value: number }[];
    note: string;
    refs: number[];
  };
  expertise: { headers: [string, string]; rows: { need: string; where: string; refs: number[] }[] };
  needs: { headers: [string, string]; rows: { need: string; contribution: string }[] };
  tools: {
    heading: string;
    items: {
      kicker: string;
      name: string;
      body: string;
      links: { label: string; href: string; external?: boolean; cta: string }[];
    }[];
  };
  inlineCta: { text: string; button: string };
  cta: {
    eyebrow: string;
    heading: string;
    body: string;
    primary: string;
    email: string;
    emailSubject: string;
    about: string;
    note: string;
  };
  addresses: {
    heading: string;
    intro: string;
    items: { name: string; body: string; url: string; domain: string; cta: string }[];
  };
  faqHeading: string;
  faq: Qa[];
  sourcesHeading: string;
  sourcesIntro: string;
  sources: Source[];
  author: { name: string; role: string; bio: string; link: string };
};

const LABS_EN = SPONSORING_MACHINE_PATHS.en;
const LABS_FR = SPONSORING_MACHINE_PATHS.fr;

const en: LausanneVaudContent = {
  locale: "en",
  htmlLang: "en-GB",
  ogLocale: "en_GB",
  metaTitle: "Lausanne and Vaud: the home of international sport",
  description:
    "Why Lausanne and the canton of Vaud host so much of world sport, what it brings the local economy, and the connections still worth building.",
  ogTitle: "Lausanne and Vaud: why international sport lives here.",
  eyebrow: "The Briefing · Lausanne and Vaud",
  h1: "Lausanne and Vaud: why international sport lives here, and what we can build from it.",
  standfirst:
    "In Lausanne, a love of sport might mean watching an Olympic final, going for a bike ride, cheering at your children's match or studying it. All these experiences sit alongside something quite extraordinary: an important part of international sport is planned and organised here.",
  inBrief: {
    heading: "In brief",
    items: [
      "Lausanne has hosted the International Olympic Committee since 1915 and has officially been the Olympic Capital since 1994.",
      "The canton of Vaud is home to more than 60 international sports federations and organisations, from UEFA in Nyon and FIBA and the FIM in Mies to the UCI in Aigle.",
      "Their estimated economic impact averaged CHF 873 million a year for the canton over 2014 to 2019, with effects on business tourism and construction.",
      "EPFL, UNIL, CHUV and AISTS give the region research capacity close to the people who run sport. The opportunity now is to connect them more often.",
    ],
  },
  byline: "By Stéphane Schwander, founder of EvidenSe",
  factsChecked: "Facts checked on 24 November 2026",
  minutesRead: (n) => `${n} min read`,
  breadcrumb: "The Briefing",
  languageLabel: "Language",
  tocLabel: "In this article",
  imageCredit: "Photo",
  figures: {
    hero: {
      alt: "Lausanne rising from the shore of Lake Geneva, with the cathedral on the hill",
      caption: "Lausanne, seen from Lake Geneva.",
    },
    ioc: {
      alt: "The headquarters of the International Olympic Committee next to the Château de Vidy, on the lakeshore in Lausanne",
      caption: "The IOC headquarters and the Château de Vidy, Lausanne.",
    },
    aigle: {
      alt: "The UCI World Cycling Centre building in Aigle, with the Alps behind it",
      caption: "The UCI World Cycling Centre in Aigle.",
    },
    epfl: {
      alt: "The undulating Rolex Learning Center on the EPFL campus",
      caption: "The Rolex Learning Center on the EPFL campus.",
    },
    marathon: {
      alt: "Runners on the course of the Lausanne Marathon along the lake",
      caption: "Runners at the Lausanne Marathon.",
    },
    lavaux: {
      alt: "The Lavaux vineyard terraces descending to Lake Geneva",
      caption: "The Lavaux terraces, a UNESCO World Heritage Site since 2007.",
    },
  },
  facts: [
    { value: "1915", label: "IOC established in Lausanne", scope: "Lausanne", refs: [2] },
    { value: "1994", label: "Olympic Capital title", scope: "Lausanne", refs: [2] },
    {
      value: "60+",
      label: "International sports federations and organisations",
      scope: "Canton of Vaud, institutional page consulted in November 2026",
      refs: [1],
    },
    {
      value: "100+",
      label: "Specialist sports businesses",
      scope: "Ecosystem described by the Canton",
      refs: [1],
    },
    {
      value: "40+",
      label: "Laboratories involved in sports research",
      scope: "EPFL, according to its sport technology overview",
      refs: [9],
    },
    {
      value: "1st",
      label: "Global innovation ranking",
      scope: "Switzerland, WIPO Global Innovation Index 2026",
      refs: [26],
    },
  ],
  places: [
    {
      place: "Lausanne and the surrounding area",
      orgs: "IOC, Maison du Sport International, Court of Arbitration for Sport, UNIL and EPFL campuses",
      field: "Governance, law, education and research",
      refs: [2, 9, 10, 27, 32],
    },
    { place: "Nyon", orgs: "UEFA", field: "European football", refs: [3] },
    {
      place: "Mies",
      orgs: "FIBA and the House of Basketball; FIM, the International Motorcycling Federation",
      field: "International basketball and motorcycling",
      refs: [5, 28],
    },
    {
      place: "Aigle",
      orgs: "UCI and the World Cycling Centre",
      field: "Cycling and sports development",
      refs: [4],
    },
  ],
  federations: {
    "summary": "See the 59 federations and organisations listed",
    "intro": "List published by the Lausanne Olympic Capital Foundation, ‘federations’ category (page updated in February 2026, consulted on 24 November 2026). Some have their headquarters here, others an office. The location is given where it is outside Lausanne and documented.",
    "groups": [
      {
        "title": "World federations",
        "items": [
          {
            "abbr": "FAI",
            "name": "World Air Sports Federation",
            "detail": "air sports"
          },
          {
            "abbr": "FIBA",
            "name": "International Basketball Federation",
            "detail": "basketball, Mies"
          },
          {
            "abbr": "FEI",
            "name": "Fédération Equestre Internationale",
            "detail": "equestrian sport"
          },
          {
            "abbr": "FIAS",
            "name": "International Sambo Federation",
            "detail": "sambo"
          },
          {
            "abbr": "FIDE",
            "name": "International Chess Federation",
            "detail": "chess"
          },
          {
            "abbr": "FIE",
            "name": "International Fencing Federation",
            "detail": "fencing"
          },
          {
            "abbr": "FIG",
            "name": "International Gymnastics Federation",
            "detail": "gymnastics"
          },
          {
            "abbr": "FIH",
            "name": "International Hockey Federation",
            "detail": "hockey"
          },
          {
            "abbr": "FIM",
            "name": "International Motorcycling Federation",
            "detail": "motorcycling, Mies"
          },
          {
            "abbr": "FISU",
            "name": "International University Sports Federation",
            "detail": "university sport"
          },
          {
            "abbr": "FIVB",
            "name": "International Volleyball Federation",
            "detail": "volleyball"
          },
          {
            "abbr": "IBF",
            "name": "International Bowling Federation",
            "detail": "bowling"
          },
          {
            "abbr": "IBSF",
            "name": "International Bobsleigh and Skeleton Federation",
            "detail": "bobsleigh, skeleton"
          },
          {
            "abbr": "ICSD",
            "name": "International Committee of Sports for the Deaf",
            "detail": "Deaflympics"
          },
          {
            "abbr": "IFAF",
            "name": "International Federation of American Football",
            "detail": "American football"
          },
          {
            "abbr": "IFMA",
            "name": "International Federation of Muaythai Associations",
            "detail": "muaythai"
          },
          {
            "abbr": "IGF",
            "name": "International Golf Federation",
            "detail": "golf"
          },
          {
            "abbr": "ISMF",
            "name": "International Ski Mountaineering Federation",
            "detail": "ski mountaineering"
          },
          {
            "abbr": "ISU",
            "name": "International Skating Union",
            "detail": "skating"
          },
          {
            "abbr": "ITTF",
            "name": "International Table Tennis Federation",
            "detail": "table tennis"
          },
          {
            "abbr": "IWF",
            "name": "International Weightlifting Federation",
            "detail": "weightlifting"
          },
          {
            "abbr": "IWUF",
            "name": "International Wushu Federation",
            "detail": "wushu"
          },
          {
            "abbr": "",
            "name": "Paddle Worldwide",
            "detail": "paddle sports"
          },
          {
            "abbr": "UCI",
            "name": "Union Cycliste Internationale",
            "detail": "cycling, Aigle"
          },
          {
            "abbr": "UMB",
            "name": "Union Mondiale de Billard",
            "detail": "carom billiards"
          },
          {
            "abbr": "UWW",
            "name": "United World Wrestling",
            "detail": "wrestling"
          },
          {
            "abbr": "WBF",
            "name": "World Bridge Federation",
            "detail": "bridge"
          },
          {
            "abbr": "WBSC",
            "name": "World Baseball Softball Confederation",
            "detail": "baseball, softball"
          },
          {
            "abbr": "WCBS",
            "name": "World Confederation of Billiards Sports",
            "detail": "billiards"
          },
          {
            "abbr": "WDSF",
            "name": "World DanceSport Federation",
            "detail": "dancesport"
          },
          {
            "abbr": "",
            "name": "World Aquatics",
            "detail": "aquatics"
          },
          {
            "abbr": "",
            "name": "World Archery",
            "detail": "archery"
          },
          {
            "abbr": "",
            "name": "World Rowing",
            "detail": "rowing"
          },
          {
            "abbr": "",
            "name": "World Skate",
            "detail": "skateboarding, roller sports"
          },
          {
            "abbr": "",
            "name": "World Taekwondo",
            "detail": "taekwondo"
          },
          {
            "abbr": "",
            "name": "World Triathlon",
            "detail": "triathlon"
          }
        ]
      },
      {
        "title": "European federations and organisations",
        "items": [
          {
            "abbr": "UEFA",
            "name": "Union of European Football Associations",
            "detail": "football, Nyon"
          },
          {
            "abbr": "",
            "name": "European Athletics",
            "detail": "athletics"
          },
          {
            "abbr": "",
            "name": "European Aquatics",
            "detail": "aquatics"
          },
          {
            "abbr": "",
            "name": "European Gymnastics",
            "detail": "gymnastics"
          },
          {
            "abbr": "UEC",
            "name": "European Cycling Union",
            "detail": "cycling"
          },
          {
            "abbr": "EGA",
            "name": "European Golf Association",
            "detail": "golf"
          },
          {
            "abbr": "CEB",
            "name": "Confédération Européenne de Billard",
            "detail": "billiards"
          },
          {
            "abbr": "EPCR",
            "name": "European Professional Club Rugby",
            "detail": "club rugby competitions"
          }
        ]
      },
      {
        "title": "Olympic Movement and umbrella associations",
        "items": [
          {
            "abbr": "IOC",
            "name": "International Olympic Committee",
            "detail": ""
          },
          {
            "abbr": "ANOC",
            "name": "Association of National Olympic Committees",
            "detail": ""
          },
          {
            "abbr": "ASOIF",
            "name": "Association of Summer Olympic International Federations",
            "detail": ""
          },
          {
            "abbr": "AIOWF",
            "name": "Association of International Olympic Winter Sports Federations",
            "detail": ""
          },
          {
            "abbr": "ARISF",
            "name": "Association of IOC Recognised International Sports Federations",
            "detail": ""
          },
          {
            "abbr": "AIMS",
            "name": "Alliance of Independent recognised Members of Sport",
            "detail": ""
          },
          {
            "abbr": "",
            "name": "SportAccord",
            "detail": ""
          },
          {
            "abbr": "IWGA",
            "name": "International World Games Association",
            "detail": "The World Games"
          },
          {
            "abbr": "IMGA",
            "name": "International Masters Games Association",
            "detail": ""
          }
        ]
      },
      {
        "title": "Justice, anti-doping, medicine, media and education",
        "items": [
          {
            "abbr": "CAS",
            "name": "Court of Arbitration for Sport",
            "detail": ""
          },
          {
            "abbr": "WADA",
            "name": "World Anti-Doping Agency",
            "detail": "European office"
          },
          {
            "abbr": "ITA",
            "name": "International Testing Agency",
            "detail": "anti-doping testing"
          },
          {
            "abbr": "FIMS",
            "name": "International Federation of Sports Medicine",
            "detail": "sports medicine"
          },
          {
            "abbr": "AIPS",
            "name": "International Sports Press Association",
            "detail": "sports media"
          },
          {
            "abbr": "AISTS",
            "name": "International Academy of Sport Science and Technology",
            "detail": "education and research"
          }
        ]
      }
    ]
  },
  impact: {
    heading: "Estimated average annual economic impact, 2014 to 2019",
    rows: [
      { area: "Switzerland", amount: "CHF 1.68 billion", value: 1680 },
      { area: "Canton of Vaud", amount: "CHF 873 million", value: 873 },
      { area: "Lausanne district", amount: "CHF 550 million", value: 550 },
    ],
    note: "Source: AISTS results presented by the IOC. The areas are nested; the amounts must not be added together.",
    refs: [7, 8],
  },
  expertise: {
    headers: ["Expertise needed", "Regional points of reference"],
    rows: [
      { need: "Technology, equipment and motion analysis", where: "EPFL", refs: [9] },
      {
        need: "Understanding participation and sports organisations",
        where: "UNIL and its Institute of Sport Sciences",
        refs: [10],
      },
      { need: "Sports medicine and support for participation", where: "CHUV", refs: [11] },
      { need: "Education and applied research in sports management", where: "AISTS", refs: [12] },
      {
        need: "Connecting people around sports innovation",
        where: "ThinkSport and its programmes",
        refs: [13],
      },
    ],
  },
  needs: {
    headers: ["Your need", "My contribution through EvidenSe"],
    rows: [
      {
        need: "Understand the sporting and business landscape",
        contribution: "Identify relevant organisations and people for your project",
      },
      {
        need: "Explore a regional collaboration",
        contribution: "Prepare discussions and facilitate useful introductions",
      },
      {
        need: "Develop your audiences and digital presence",
        contribution: "Connect content, channels and audience behaviour to practical objectives",
      },
      {
        need: "Assess a commercial opportunity or partnership",
        contribution: "Test assumptions against evidence and market realities",
      },
      {
        need: "Move from an idea to an initial trial",
        contribution: "Define the scope, responsibilities and criteria for success",
      },
    ],
  },
  tools: {
    heading: "Two public projects from EvidenSe",
    items: [
      {
        kicker: "Index · index.evidense.io",
        name: "EvidenSe Sport Attention Index",
        body: "A public ranking of the attention around 44 Olympic international federations. A signal to read alongside participation and commercial results.",
        links: [{ label: "Open the Index", href: INDEX_URL, external: true, cta: "index" }],
      },
      {
        kicker: "EvidenSe Labs · sponsoring-machine.evidense.io",
        name: "La Sponsoring Machine",
        body: "Helps amateur sports clubs across Switzerland value, structure and sell their sponsorship. Field research by Jessy Ducommun, as part of his master's thesis at UNIL.",
        links: [
          { label: "Read more", href: LABS_EN, cta: "sponsoring_machine_page" },
          {
            label: "Open the tool",
            href: SPONSORING_MACHINE_TOOL_URL,
            external: true,
            cta: "sponsoring_machine_tool",
          },
        ],
      },
    ],
  },
  inlineCta: {
    text: "Testing a sports innovation, a partnership or a move to the region? I can help you find the right people and frame the first step.",
    button: "Book a 30 minute call",
  },
  cta: {
    eyebrow: "Work with EvidenSe",
    heading: "Exploring a project in sport, innovation or partnerships?",
    body: "Thirty minutes, no material required in advance. We clarify the need, who you should be talking to in the region, and whether a short piece of work would help. If it would not, I will say so.",
    primary: "Book a 30 minute call",
    email: "Write to",
    emailSubject: "Lausanne and Vaud: a project to explore",
    about: "More about Stéphane",
    note: "Independent. Based in Lausanne. Working in English and French.",
  },
  addresses: {
    heading: "Useful addresses in the region",
    intro: "Where to start, depending on your project. These organisations are independent of EvidenSe.",
    items: [
      {
        name: "Canton of Vaud, international sport",
        body: "The Canton's page on international sport and the federations and organisations based in Vaud.",
        url: "https://www.vd.ch/population/sport/sport-international-1",
        domain: "vd.ch",
        cta: "out_vaud",
      },
      {
        name: "Lausanne Olympic Capital Foundation",
        body: "Supports international sports organisations with their establishment and development in the region.",
        url: "https://olympiccapital.ch/",
        domain: "olympiccapital.ch",
        cta: "out_olympic_capital",
      },
      {
        name: "Maison du Sport International (MSI)",
        body: "Offices by the lake in Lausanne, home to some thirty international federations and organisations and around twenty sport companies.",
        url: "https://msi-lausanne.ch",
        domain: "msi-lausanne.ch",
        cta: "out_msi",
      },
      {
        name: "ThinkSport",
        body: "The sport innovation network founded in 2015 by the IOC and the Canton of Vaud: programmes, accelerator and events.",
        url: "https://thinksport.org/",
        domain: "thinksport.org",
        cta: "out_thinksport",
      },
      {
        name: "AISTS",
        body: "Education and applied research in sport management, founded in 2000 by eight institutions including the IOC, EPFL and UNIL.",
        url: "https://aists.org/",
        domain: "aists.org",
        cta: "out_aists",
      },
      {
        name: "Smart Move",
        body: "Academic network bringing together UNIL, EPFL, CHUV, the University of Geneva and Vaud higher-education schools to support sport through research, development and training.",
        url: "https://thesmartmove.ch/",
        domain: "thesmartmove.ch",
        cta: "out_smartmove",
      },
      {
        name: "UNIL, CIRSport and ISSUL",
        body: "The Interdisciplinary Centre for Sports Research is the entry point to sport research at UNIL; the Institute of Sport Sciences carries its teaching and research.",
        url: "https://www.unil.ch/cirsport/en/home.html",
        domain: "unil.ch",
        cta: "out_cirsport",
      },
    ],
  },
  faqHeading: "Questions readers ask",
  faq: [
    {
      q: "Why is Lausanne called the Olympic Capital?",
      a: "Lausanne has been home to the IOC since 1915 and has officially held the Olympic Capital title since 1994. That history helps explain its role in international sport.",
      refs: [2],
    },
    {
      q: "Which international sports federations are based in the canton of Vaud?",
      a: "More than 60 international federations and sports organisations are based in the canton. Beyond the IOC in Lausanne, they include UEFA in Nyon, FIBA and the FIM in Mies, and the UCI in Aigle. The FIA has an office in Vernier, in the neighbouring canton of Geneva.",
      refs: [1, 3, 4, 5, 28, 29],
    },
    {
      q: "How are sport and innovation connected in Vaud?",
      a: "Sports organisations, businesses and institutions such as EPFL, UNIL and AISTS operate in the same region. ThinkSport helps create exchanges and programmes around the needs of sport.",
      refs: [6, 13],
    },
    {
      q: "Can this ecosystem help a small business?",
      a: "Yes, when its skills meet an identified need. Hospitality, technical services, communications and event delivery offer possibilities to explore. Each collaboration then needs a clear fit between the supplier's capabilities and the client's expectations.",
      refs: [],
    },
    {
      q: "Who can help explore a project in the region?",
      a: "The Lausanne Olympic Capital Foundation supports sports organisations with matters including establishment and development. For an independent view of a project, its audiences or potential partners, Stéphane Schwander and EvidenSe offer tailored support.",
      refs: [1, 24],
    },
  ],
  sourcesHeading: "Sources",
  sourcesIntro:
    "The references below are institutional sources or publications from the organisations producing the information. Biographical details and EvidenSe services reflect the founder's account and his website. Examples of potential collaborations express the author's perspective.",
  sources: [
    {"n": 1, "org": "État de Vaud", "title": "Sport international", "url": "https://www.vd.ch/population/sport/sport-international-1", "note": "Official institutional page."},
    {"n": 2, "org": "Comité international olympique", "title": "1994 Formalisation of Lausanne as the Olympic Capital", "url": "https://www.olympics.com/ioc/1994-formalisation-of-lausanne-as-the-olympic-capital", "note": "Historical milestone, 1994."},
    {"n": 3, "org": "UEFA", "title": "Administration", "url": "https://www.uefa.com/about/how-we-work/uefa-administration/", "note": "Official institutional page."},
    {"n": 4, "org": "Union Cycliste Internationale", "title": "The UCI", "url": "https://www.uci.org/the-uci/2QDMyzhoBXyWbVrsxge0EH", "note": "Official institutional page."},
    {"n": 5, "org": "FIBA", "title": "House of Basketball", "url": "https://about.fiba.basketball/en/organization/house-of-basketball", "note": "Official page indexed in 2026."},
    {"n": 6, "org": "Fondation Lausanne Capitale Olympique", "title": "Lausanne Olympic Capital Ecosystem", "url": "https://olympiccapital.ch/ecosystem/", "note": "Ecosystem directory, federations category: 59 entries. Updated February 2026."},
    {"n": 7, "org": "AISTS", "title": "Economic Impact of International Sports Organisations in Switzerland", "url": "https://aists.org/resource/economic-impact-of-international-sports-organisations-in-switzerland/", "note": "Study published in 2021, covering 2014 to 2019."},
    {"n": 8, "org": "Comité international olympique", "title": "Une nouvelle étude souligne l'impact positif accru du CIO et d'autres organisations sportives internationales en Suisse", "url": "https://www.olympics.com/cio/news/une-nouvelle-etude-souligne-l-impact-positif-accru-du-cio-et-d-autres-organisations-sportives-internationales-en-suisse", "note": "AISTS findings for 2014 to 2019, presented by the IOC."},
    {"n": 9, "org": "EPFL", "title": "Sport Technology", "url": "https://www.epfl.ch/innovation/domains/sport/", "note": "Official institutional page."},
    {"n": 10, "org": "Université de Lausanne", "title": "Contributions et expertises de l'ISSUL dans le cadre des JOP 2024", "url": "https://wp.unil.ch/esspace/2024/06/contributions-et-expertises-de-lissul-dans-le-cadre-des-jop-2024/", "note": "24 June 2024."},
    {"n": 11, "org": "CHUV", "title": "Centre de médecine du sport", "url": "https://www.chuv.ch/fr/sport/cms-home", "note": "Official institutional page."},
    {"n": 12, "org": "AISTS", "title": "About AISTS", "url": "https://aists.org/about/", "note": "Founded in 2000; official institutional overview."},
    {"n": 13, "org": "ThinkSport", "title": "Sport's innovation network", "url": "https://thinksport.org/", "note": "Official institutional page."},
    {"n": 14, "org": "État de Vaud", "title": "Le Canton de Vaud renforce son action en faveur de l'innovation dans le sport", "url": "https://www.vd.ch/actualites/communiques-de-presse-de-letat-de-vaud/detail/communique/le-canton-de-vaud-renforce-son-action-en-faveur-de-linnovation-dans-le-sport", "note": "21 April 2026."},
    {"n": 15, "org": "Office fédéral du sport OFSPO", "title": "Sport Suisse 2026", "url": "https://www.baspo.admin.ch/dam/fr/sd-web/2dI5D4Dk92Om/Bro-Sport-Schweiz-2026_FR.pdf", "note": "2026 edition, Figure 2.1, printed page 7."},
    {"n": 16, "org": "Comité d'organisation Lausanne 2025", "title": "Lausanne 2025, un défi colossal relevé avec succès", "url": "https://lausanne2025.ch/wp-content/uploads/2025/07/COMMUNIQUE-DE-PRESSE-%E2%80%93-02.07-1.pdf", "note": "Final report, 2 July 2025."},
    {"n": 17, "org": "IMD World Competitiveness Center", "title": "Smart City Index 2026 Results", "url": "https://www.imd.org/wp-content/uploads/2026/03/20260325-SmartCityIndex-2026.pdf", "note": "2026 edition."},
    {"n": 18, "org": "IMD World Competitiveness Center", "title": "Smart City Index methodology", "url": "https://www.imd.org/smart-city-observatory/home/methodology/", "note": "Methodology for the 2026 edition."},
    {"n": 19, "org": "Institute for Economics and Peace via Vision of Humanity", "title": "10 Most Peaceful Countries in 2026", "url": "https://www.visionofhumanity.org/why-iceland-stretched-its-lead-among-the-worlds-10-most-peaceful-countries-in-2026/", "note": "2026 edition."},
    {"n": 20, "org": "Lausanne Tourisme", "title": "Accès à Lausanne", "url": "https://www.lausanne-tourisme.ch/fr/acces-a-lausanne/", "note": "Official institutional page."},
    {"n": 21, "org": "UNESCO Centre du patrimoine mondial", "title": "Lavaux Vineyard Terraces", "url": "https://whc.unesco.org/en/list/1243/", "note": "Inscribed on the World Heritage List in 2007."},
    {"n": 22, "org": "Office des Nations Unies à Genève", "title": "The UN in Geneva", "url": "https://www.ungeneva.org/en/about/organizations", "note": "Official institutional page."},
    {"n": 23, "org": "Nations Unies", "title": "Transforming our world: the 2030 Agenda for Sustainable Development", "url": "https://sdgs.un.org/2030agenda", "note": "Adopted in 2015, paragraph 37."},
    {"n": 24, "org": "EvidenSe", "title": "Evidence-led advisory for sport revenue decisions", "url": "https://www.evidense.io/", "note": "Founder and services, first-party account."},
    {"n": 25, "org": "EvidenSe", "title": "EvidenSe Sport Attention Index", "url": "https://index.evidense.io/", "note": "October 2026 edition displayed when consulted."},
    {"n": 26, "org": "Organisation Mondiale de la Propriété Intellectuelle", "title": "WIPO Global Innovation Index 2026", "url": "https://www.wipo.int/pressroom/en/articles/2026/article_0014.html", "note": "29 September 2026."},
    {"n": 27, "org": "Tribunal Arbitral du Sport", "title": "The Court", "url": "https://www.tas-cas.org/en/general-information/the-court", "note": "Official institutional page."},
    {"n": 28, "org": "FIM", "title": "History & Heritage", "url": "https://fim-moto.com/en/fim/history-heritage", "note": "Headquarters in Mies since December 1994."},
    {"n": 29, "org": "FIA", "title": "Organisation", "url": "https://www.fia.com/organisation", "note": "Seat in Paris; office in Vernier, canton of Geneva."},
    {"n": 30, "org": "EvidenSe", "title": "La Sponsoring Machine", "url": "https://www.evidense.io/labs/sponsoring-machine", "note": "EvidenSe Labs, first-party account."},
    {"n": 31, "org": "The Checkered Flag", "title": "FIM opens new headquarters in Mies", "url": "https://www.thecheckeredflag.co.uk/2024/10/fim-opens-new-headquarters-in-mies", "note": "October 2024."},
    {"n": 32, "org": "Ville de Lausanne", "title": "Maison du Sport International", "url": "https://www.lausanne.ch/en/portrait/capitale-olympique/siege-du-cio/federations-sportives-internationales/maison-du-sport-international.html", "note": "Opened in June 2006; owned in equal parts by the City, the Canton and the IOC."},
    {"n": 33, "org": "Maison du Sport International SA", "title": "About the MSI", "url": "https://msi-lausanne.ch", "note": "Official site, Avenue de Rhodanie 54, Lausanne."},
    {"n": 34, "org": "Université de Lausanne", "title": "Interdisciplinary Centre for Sports Research (CIRSport)", "url": "https://www.unil.ch/cirsport/en/home.html", "note": "Mission, three research areas, interdisciplinary centre since 2019."},
    {"n": 35, "org": "Smart Move", "title": "Smart Move, academic network for sport", "url": "https://thesmartmove.ch/", "note": "Member institutions and services."},
  ],
  author: {
    name: "Stéphane Schwander",
    role: "Founder of EvidenSe",
    bio: "Born and raised in Lausanne. Nine years at UEFA and eleven at the FEI, where he was Head of Digital and then Head of Content and Platform Management. He now advises sport organisations, rights holders, brands and investors on where commercial value is really created.",
    link: "More about Stéphane",
  },
};

const fr: LausanneVaudContent = {
  locale: "fr",
  htmlLang: "fr-CH",
  ogLocale: "fr_CH",
  metaTitle: "Lausanne et Vaud, terre du sport international",
  description:
    "Pourquoi Lausanne et le canton de Vaud accueillent une si grande part du sport mondial, ce que cela apporte à l'économie locale et les ponts à construire.",
  ogTitle: "Lausanne et Vaud : pourquoi le sport international vit ici.",
  eyebrow: "The Briefing · Lausanne et Vaud",
  h1: "Lausanne et Vaud : pourquoi le sport international vit ici, et ce que nous pouvons en faire.",
  standfirst:
    "À Lausanne, aimer le sport, c'est regarder une finale olympique, partir à vélo, encourager ses enfants au bord du terrain ou l'étudier. Toutes ces façons de le vivre cohabitent avec une réalité assez exceptionnelle : une partie importante du sport international se prépare et s'organise ici.",
  inBrief: {
    heading: "En bref",
    items: [
      "Lausanne accueille le Comité international olympique depuis 1915 et porte officiellement le titre de Capitale olympique depuis 1994.",
      "Le canton de Vaud compte plus de 60 fédérations et organisations sportives internationales, de l'UEFA à Nyon et de la FIBA et la FIM à Mies jusqu'à l'UCI à Aigle.",
      "Leur impact économique est estimé à CHF 873 millions par an en moyenne pour le canton sur 2014 à 2019, avec des effets sur le tourisme d'affaires et la construction.",
      "L'EPFL, l'UNIL, le CHUV et l'AISTS offrent à la région une capacité de recherche proche de celles et ceux qui font le sport. L'enjeu est de les relier plus souvent.",
    ],
  },
  byline: "Par Stéphane Schwander, fondateur d'EvidenSe",
  factsChecked: "Faits vérifiés le 24 novembre 2026",
  minutesRead: (n) => `${n} min de lecture`,
  breadcrumb: "The Briefing",
  languageLabel: "Langue",
  tocLabel: "Dans cet article",
  imageCredit: "Photo",
  figures: {
    hero: {
      alt: "Lausanne s'élevant depuis la rive du Léman, avec la cathédrale sur la colline",
      caption: "Lausanne, vue depuis le Léman.",
    },
    ioc: {
      alt: "Le siège du Comité international olympique à côté du château de Vidy, au bord du lac à Lausanne",
      caption: "Le siège du CIO et le château de Vidy, à Lausanne.",
    },
    aigle: {
      alt: "Le bâtiment du Centre Mondial du Cyclisme de l'UCI à Aigle, avec les Alpes en arrière-plan",
      caption: "Le Centre Mondial du Cyclisme de l'UCI, à Aigle.",
    },
    epfl: {
      alt: "Le Rolex Learning Center et ses formes ondulées, sur le campus de l'EPFL",
      caption: "Le Rolex Learning Center, sur le campus de l'EPFL.",
    },
    marathon: {
      alt: "Des coureurs sur le parcours du Marathon de Lausanne, au bord du lac",
      caption: "Coureurs au Marathon de Lausanne.",
    },
    lavaux: {
      alt: "Les terrasses viticoles de Lavaux descendant vers le Léman",
      caption: "Les terrasses de Lavaux, inscrites au patrimoine mondial de l'UNESCO depuis 2007.",
    },
  },
  facts: [
    { value: "1915", label: "Installation du CIO", scope: "Lausanne", refs: [2] },
    { value: "1994", label: "Titre de Capitale olympique", scope: "Lausanne", refs: [2] },
    {
      value: "60+",
      label: "Fédérations et organisations sportives internationales",
      scope: "Canton de Vaud, page institutionnelle consultée en novembre 2026",
      refs: [1],
    },
    {
      value: "100+",
      label: "Entreprises spécialisées dans le sport",
      scope: "Écosystème décrit par le Canton",
      refs: [1],
    },
    {
      value: "40+",
      label: "Laboratoires engagés dans la recherche liée au sport",
      scope: "EPFL, selon sa présentation du domaine",
      refs: [9],
    },
    {
      value: "1er",
      label: "Classement mondial de l'innovation",
      scope: "Suisse, Global Innovation Index 2026 de l'OMPI",
      refs: [26],
    },
  ],
  places: [
    {
      place: "Lausanne et ses environs",
      orgs: "CIO, Maison du Sport International, Tribunal Arbitral du Sport, campus de l'UNIL et de l'EPFL",
      field: "Gouvernance, droit, formation et recherche",
      refs: [2, 9, 10, 27, 32],
    },
    { place: "Nyon", orgs: "UEFA", field: "Football européen", refs: [3] },
    {
      place: "Mies",
      orgs: "FIBA et Maison du Basketball ; FIM, Fédération Internationale de Motocyclisme",
      field: "Basketball et motocyclisme internationaux",
      refs: [5, 28],
    },
    {
      place: "Aigle",
      orgs: "UCI et Centre Mondial du Cyclisme",
      field: "Cyclisme et développement sportif",
      refs: [4],
    },
  ],
  federations: {
    "summary": "Voir les 59 fédérations et organisations recensées",
    "intro": "Liste publiée par la Fondation Lausanne Capitale Olympique, catégorie « fédérations » (page mise à jour en février 2026, consultée le 24 novembre 2026). Certaines y ont leur siège, d'autres un bureau. Le lieu est précisé lorsqu'il est hors de Lausanne et documenté.",
    "groups": [
      {
        "title": "Fédérations mondiales",
        "items": [
          {
            "abbr": "FAI",
            "name": "Fédération Aéronautique Internationale",
            "detail": "sports aériens"
          },
          {
            "abbr": "FIBA",
            "name": "Fédération Internationale de Basketball",
            "detail": "basketball, Mies"
          },
          {
            "abbr": "FEI",
            "name": "Fédération Equestre Internationale",
            "detail": "sports équestres"
          },
          {
            "abbr": "FIAS",
            "name": "Fédération Internationale de Sambo",
            "detail": "sambo"
          },
          {
            "abbr": "FIDE",
            "name": "Fédération Internationale des Échecs",
            "detail": "échecs"
          },
          {
            "abbr": "FIE",
            "name": "Fédération Internationale d'Escrime",
            "detail": "escrime"
          },
          {
            "abbr": "FIG",
            "name": "Fédération Internationale de Gymnastique",
            "detail": "gymnastique"
          },
          {
            "abbr": "FIH",
            "name": "Fédération Internationale de Hockey",
            "detail": "hockey sur gazon"
          },
          {
            "abbr": "FIM",
            "name": "Fédération Internationale de Motocyclisme",
            "detail": "motocyclisme, Mies"
          },
          {
            "abbr": "FISU",
            "name": "Fédération Internationale du Sport Universitaire",
            "detail": "sport universitaire"
          },
          {
            "abbr": "FIVB",
            "name": "Fédération Internationale de Volleyball",
            "detail": "volleyball"
          },
          {
            "abbr": "IBF",
            "name": "International Bowling Federation",
            "detail": "bowling"
          },
          {
            "abbr": "IBSF",
            "name": "Fédération Internationale de Bobsleigh et de Skeleton",
            "detail": "bobsleigh, skeleton"
          },
          {
            "abbr": "ICSD",
            "name": "Comité International des Sports des Sourds",
            "detail": "Deaflympics"
          },
          {
            "abbr": "IFAF",
            "name": "International Federation of American Football",
            "detail": "football américain"
          },
          {
            "abbr": "IFMA",
            "name": "International Federation of Muaythai Associations",
            "detail": "muaythaï"
          },
          {
            "abbr": "IGF",
            "name": "International Golf Federation",
            "detail": "golf"
          },
          {
            "abbr": "ISMF",
            "name": "International Ski Mountaineering Federation",
            "detail": "ski-alpinisme"
          },
          {
            "abbr": "ISU",
            "name": "Union Internationale de Patinage",
            "detail": "patinage"
          },
          {
            "abbr": "ITTF",
            "name": "Fédération Internationale de Tennis de Table",
            "detail": "tennis de table"
          },
          {
            "abbr": "IWF",
            "name": "Fédération Internationale d'Haltérophilie",
            "detail": "haltérophilie"
          },
          {
            "abbr": "IWUF",
            "name": "International Wushu Federation",
            "detail": "wushu"
          },
          {
            "abbr": "",
            "name": "Paddle Worldwide",
            "detail": "sports de pagaie"
          },
          {
            "abbr": "UCI",
            "name": "Union Cycliste Internationale",
            "detail": "cyclisme, Aigle"
          },
          {
            "abbr": "UMB",
            "name": "Union Mondiale de Billard",
            "detail": "billard carambole"
          },
          {
            "abbr": "UWW",
            "name": "United World Wrestling",
            "detail": "lutte"
          },
          {
            "abbr": "WBF",
            "name": "World Bridge Federation",
            "detail": "bridge"
          },
          {
            "abbr": "WBSC",
            "name": "World Baseball Softball Confederation",
            "detail": "baseball, softball"
          },
          {
            "abbr": "WCBS",
            "name": "World Confederation of Billiards Sports",
            "detail": "billard"
          },
          {
            "abbr": "WDSF",
            "name": "World DanceSport Federation",
            "detail": "danse sportive"
          },
          {
            "abbr": "",
            "name": "World Aquatics",
            "detail": "sports aquatiques"
          },
          {
            "abbr": "",
            "name": "World Archery",
            "detail": "tir à l'arc"
          },
          {
            "abbr": "",
            "name": "World Rowing",
            "detail": "aviron"
          },
          {
            "abbr": "",
            "name": "World Skate",
            "detail": "skateboard, roller"
          },
          {
            "abbr": "",
            "name": "World Taekwondo",
            "detail": "taekwondo"
          },
          {
            "abbr": "",
            "name": "World Triathlon",
            "detail": "triathlon"
          }
        ]
      },
      {
        "title": "Fédérations et organisations européennes",
        "items": [
          {
            "abbr": "UEFA",
            "name": "Union des associations européennes de football",
            "detail": "football, Nyon"
          },
          {
            "abbr": "",
            "name": "European Athletics",
            "detail": "athlétisme"
          },
          {
            "abbr": "",
            "name": "European Aquatics",
            "detail": "sports aquatiques"
          },
          {
            "abbr": "",
            "name": "European Gymnastics",
            "detail": "gymnastique"
          },
          {
            "abbr": "UEC",
            "name": "Union Européenne de Cyclisme",
            "detail": "cyclisme"
          },
          {
            "abbr": "EGA",
            "name": "European Golf Association",
            "detail": "golf"
          },
          {
            "abbr": "CEB",
            "name": "Confédération Européenne de Billard",
            "detail": "billard"
          },
          {
            "abbr": "EPCR",
            "name": "European Professional Club Rugby",
            "detail": "compétitions de rugby de clubs"
          }
        ]
      },
      {
        "title": "Mouvement olympique et associations faîtières",
        "items": [
          {
            "abbr": "CIO",
            "name": "Comité international olympique",
            "detail": ""
          },
          {
            "abbr": "ACNO",
            "name": "Association des Comités Nationaux Olympiques",
            "detail": ""
          },
          {
            "abbr": "ASOIF",
            "name": "Association of Summer Olympic International Federations",
            "detail": ""
          },
          {
            "abbr": "AIOWF",
            "name": "Association of International Olympic Winter Sports Federations",
            "detail": ""
          },
          {
            "abbr": "ARISF",
            "name": "Association of IOC Recognised International Sports Federations",
            "detail": ""
          },
          {
            "abbr": "AIMS",
            "name": "Alliance of Independent recognised Members of Sport",
            "detail": ""
          },
          {
            "abbr": "",
            "name": "SportAccord",
            "detail": ""
          },
          {
            "abbr": "IWGA",
            "name": "International World Games Association",
            "detail": "The World Games"
          },
          {
            "abbr": "IMGA",
            "name": "International Masters Games Association",
            "detail": ""
          }
        ]
      },
      {
        "title": "Justice, antidopage, médecine, médias et formation",
        "items": [
          {
            "abbr": "TAS",
            "name": "Tribunal Arbitral du Sport",
            "detail": ""
          },
          {
            "abbr": "AMA",
            "name": "Agence mondiale antidopage",
            "detail": "bureau européen"
          },
          {
            "abbr": "ITA",
            "name": "International Testing Agency",
            "detail": "contrôles antidopage"
          },
          {
            "abbr": "FIMS",
            "name": "Fédération Internationale de Médecine du Sport",
            "detail": "médecine du sport"
          },
          {
            "abbr": "AIPS",
            "name": "Association Internationale de la Presse Sportive",
            "detail": "médias sportifs"
          },
          {
            "abbr": "AISTS",
            "name": "Académie Internationale des Sciences et Techniques du Sport",
            "detail": "formation et recherche"
          }
        ]
      }
    ]
  },
  impact: {
    heading: "Impact économique annuel moyen estimé, 2014 à 2019",
    rows: [
      { area: "Suisse", amount: "CHF 1,68 milliard", value: 1680 },
      { area: "Canton de Vaud", amount: "CHF 873 millions", value: 873 },
      { area: "District de Lausanne", amount: "CHF 550 millions", value: 550 },
    ],
    note: "Source : résultats AISTS présentés par le CIO. Les territoires sont emboîtés ; les montants ne s'additionnent pas.",
    refs: [7, 8],
  },
  expertise: {
    headers: ["Compétence recherchée", "Points d'appui dans la région"],
    rows: [
      { need: "Technologies, équipements et analyse du mouvement", where: "EPFL", refs: [9] },
      {
        need: "Compréhension des pratiques et des organisations",
        where: "UNIL et Institut des sciences du sport",
        refs: [10],
      },
      { need: "Médecine du sport et accompagnement de la pratique", where: "CHUV", refs: [11] },
      { need: "Formation et recherche appliquée en management du sport", where: "AISTS", refs: [12] },
      {
        need: "Mise en relation autour de l'innovation sportive",
        where: "ThinkSport et ses programmes",
        refs: [13],
      },
    ],
  },
  needs: {
    headers: ["Votre besoin", "Ma contribution avec EvidenSe"],
    rows: [
      {
        need: "Comprendre le paysage sportif et économique",
        contribution: "Identifier les acteurs et les interlocuteurs pertinents pour votre projet",
      },
      {
        need: "Explorer une collaboration dans la région",
        contribution: "Préparer les échanges et faciliter les mises en relation utiles",
      },
      {
        need: "Développer vos publics et votre présence numérique",
        contribution: "Relier les contenus, les canaux et les usages à des objectifs concrets",
      },
      {
        need: "Évaluer une opportunité commerciale ou un partenariat",
        contribution: "Confronter les hypothèses aux données et à la réalité du marché",
      },
      {
        need: "Passer d'une idée à un premier test",
        contribution: "Définir le périmètre, les responsabilités et les critères de réussite",
      },
    ],
  },
  tools: {
    heading: "Deux projets publics d'EvidenSe",
    items: [
      {
        kicker: "Index · index.evidense.io",
        name: "EvidenSe Sport Attention Index",
        body: "Un classement public de l'attention autour de 44 fédérations internationales olympiques. Un signal à lire avec la pratique et les résultats commerciaux.",
        links: [{ label: "Ouvrir l'Index", href: INDEX_URL, external: true, cta: "index" }],
      },
      {
        kicker: "EvidenSe Labs · sponsoring-machine.evidense.io",
        name: "La Sponsoring Machine",
        body: "Aide les clubs sportifs amateurs de toute la Suisse à valoriser, structurer et vendre leur sponsoring. Recherche de terrain menée par Jessy Ducommun, dans le cadre de son travail de master à l'UNIL.",
        links: [
          { label: "En savoir plus", href: LABS_FR, cta: "sponsoring_machine_page" },
          {
            label: "Ouvrir l'outil",
            href: SPONSORING_MACHINE_TOOL_URL,
            external: true,
            cta: "sponsoring_machine_tool",
          },
        ],
      },
    ],
  },
  inlineCta: {
    text: "Vous testez une innovation sportive, un partenariat ou une installation dans la région ? Je peux vous aider à trouver les bons interlocuteurs et à cadrer la première étape.",
    button: "Réserver un appel de 30 minutes",
  },
  cta: {
    eyebrow: "Travailler avec EvidenSe",
    heading: "Vous avez un projet à explorer dans le sport, l'innovation ou les partenariats ?",
    body: "Trente minutes, sans document à préparer. Nous clarifions le besoin, les interlocuteurs à rencontrer dans la région et l'utilité, ou non, d'un travail court. Si ce n'est pas la bonne réponse, je vous le dirai.",
    primary: "Réserver un appel de 30 minutes",
    email: "Écrire à",
    emailSubject: "Lausanne et Vaud : un projet à explorer",
    about: "En savoir plus sur Stéphane",
    note: "Indépendant. Basé à Lausanne. En français et en anglais.",
  },
  addresses: {
    heading: "Adresses utiles dans la région",
    intro: "Par où commencer, selon votre projet. Ces organisations sont indépendantes d'EvidenSe.",
    items: [
      {
        name: "Canton de Vaud, sport international",
        body: "La page du Canton consacrée au sport international et aux fédérations et organisations installées dans le canton.",
        url: "https://www.vd.ch/population/sport/sport-international-1",
        domain: "vd.ch",
        cta: "out_vaud",
      },
      {
        name: "Fondation Lausanne Capitale Olympique",
        body: "Accompagne les organisations sportives internationales dans leur installation et leur développement dans la région.",
        url: "https://olympiccapital.ch/",
        domain: "olympiccapital.ch",
        cta: "out_olympic_capital",
      },
      {
        name: "Maison du Sport International (MSI)",
        body: "Des bureaux au bord du lac, à Lausanne, qui accueillent une trentaine de fédérations et d'organisations internationales et une vingtaine d'entreprises du sport.",
        url: "https://msi-lausanne.ch",
        domain: "msi-lausanne.ch",
        cta: "out_msi",
      },
      {
        name: "ThinkSport",
        body: "Le réseau de l'innovation sportive fondé en 2015 par le CIO et le Canton de Vaud : programmes, accélérateur et événements.",
        url: "https://thinksport.org/",
        domain: "thinksport.org",
        cta: "out_thinksport",
      },
      {
        name: "AISTS",
        body: "Formation et recherche appliquée en management du sport, fondée en 2000 par huit institutions dont le CIO, l'EPFL et l'UNIL.",
        url: "https://aists.org/",
        domain: "aists.org",
        cta: "out_aists",
      },
      {
        name: "Smart Move",
        body: "Réseau académique qui réunit l'UNIL, l'EPFL, le CHUV, l'Université de Genève et les hautes écoles vaudoises pour soutenir le sport par la recherche, le développement et la formation.",
        url: "https://thesmartmove.ch/",
        domain: "thesmartmove.ch",
        cta: "out_smartmove",
      },
      {
        name: "UNIL, CIRSport et ISSUL",
        body: "Le Centre interdisciplinaire de recherche sur le sport est la porte d'entrée de la recherche sur le sport à l'UNIL ; l'Institut des sciences du sport en porte l'enseignement et la recherche.",
        url: "https://www.unil.ch/issul/fr/home.html",
        domain: "unil.ch",
        cta: "out_cirsport",
      },
    ],
  },
  faqHeading: "Questions fréquentes",
  faq: [
    {
      q: "Pourquoi Lausanne porte-t-elle le titre de Capitale olympique ?",
      a: "Lausanne accueille le CIO depuis 1915 et porte officiellement le titre de Capitale olympique depuis 1994. Cette histoire explique une part importante de son rôle dans le sport international.",
      refs: [2],
    },
    {
      q: "Quelles fédérations sportives internationales sont installées dans le canton de Vaud ?",
      a: "Plus de 60 fédérations et organisations sportives internationales sont établies dans le canton. Outre le CIO à Lausanne, on y trouve notamment l'UEFA à Nyon, la FIBA et la FIM à Mies, et l'UCI à Aigle. La FIA dispose d'un bureau à Vernier, dans le canton voisin de Genève.",
      refs: [1, 3, 4, 5, 28, 29],
    },
    {
      q: "Quels liens existent entre le sport et l'innovation dans le canton de Vaud ?",
      a: "Des organisations sportives, des entreprises et des institutions comme l'EPFL, l'UNIL et l'AISTS se côtoient dans la région. ThinkSport contribue à créer des échanges et des programmes autour des besoins du sport.",
      refs: [6, 13],
    },
    {
      q: "Comment une petite entreprise peut-elle bénéficier de cet écosystème ?",
      a: "Une petite entreprise peut trouver sa place lorsqu'une compétence répond à un besoin identifié. L'accueil, les services techniques, la communication ou l'organisation d'événements offrent des pistes à explorer. Chaque collaboration demande ensuite une adéquation claire entre les capacités du prestataire et les attentes du client.",
      refs: [],
    },
    {
      q: "Qui contacter pour explorer un projet dans la région ?",
      a: "La Fondation Lausanne Capitale Olympique accompagne notamment les organisations sportives dans leur installation et leur développement. Pour un regard indépendant sur un projet, ses publics ou ses partenaires, Stéphane Schwander et EvidenSe proposent un accompagnement adapté.",
      refs: [1, 24],
    },
  ],
  sourcesHeading: "Sources",
  sourcesIntro:
    "Les références ci-dessous sont des sources institutionnelles ou des publications de leurs producteurs. Les informations biographiques et les services d'EvidenSe relèvent de la présentation du fondateur et de son site. Les exemples de collaborations à développer expriment le point de vue de l'auteur.",
  sources: [
    {"n": 1, "org": "État de Vaud", "title": "Sport international", "url": "https://www.vd.ch/population/sport/sport-international-1", "note": "Page officielle."},
    {"n": 2, "org": "Comité international olympique", "title": "1994 Formalisation of Lausanne as the Olympic Capital", "url": "https://www.olympics.com/ioc/1994-formalisation-of-lausanne-as-the-olympic-capital", "note": "Repère historique de 1994."},
    {"n": 3, "org": "UEFA", "title": "Administration", "url": "https://www.uefa.com/about/how-we-work/uefa-administration/", "note": "Page officielle."},
    {"n": 4, "org": "Union Cycliste Internationale", "title": "The UCI", "url": "https://www.uci.org/the-uci/2QDMyzhoBXyWbVrsxge0EH", "note": "Page officielle."},
    {"n": 5, "org": "FIBA", "title": "House of Basketball", "url": "https://about.fiba.basketball/en/organization/house-of-basketball", "note": "Page officielle indexée en 2026."},
    {"n": 6, "org": "Fondation Lausanne Capitale Olympique", "title": "Lausanne Olympic Capital Ecosystem", "url": "https://olympiccapital.ch/ecosystem/", "note": "Annuaire de l'écosystème, catégorie fédérations : 59 entrées. Mise à jour en février 2026."},
    {"n": 7, "org": "AISTS", "title": "Economic Impact of International Sports Organisations in Switzerland", "url": "https://aists.org/resource/economic-impact-of-international-sports-organisations-in-switzerland/", "note": "Étude publiée en 2021, période 2014 à 2019."},
    {"n": 8, "org": "Comité international olympique", "title": "Une nouvelle étude souligne l'impact positif accru du CIO et d'autres organisations sportives internationales en Suisse", "url": "https://www.olympics.com/cio/news/une-nouvelle-etude-souligne-l-impact-positif-accru-du-cio-et-d-autres-organisations-sportives-internationales-en-suisse", "note": "Résultats AISTS pour 2014 à 2019, présentés par le CIO."},
    {"n": 9, "org": "EPFL", "title": "Sport Technology", "url": "https://www.epfl.ch/innovation/domains/sport/", "note": "Page officielle."},
    {"n": 10, "org": "Université de Lausanne", "title": "Contributions et expertises de l'ISSUL dans le cadre des JOP 2024", "url": "https://wp.unil.ch/esspace/2024/06/contributions-et-expertises-de-lissul-dans-le-cadre-des-jop-2024/", "note": "24 juin 2024."},
    {"n": 11, "org": "CHUV", "title": "Centre de médecine du sport", "url": "https://www.chuv.ch/fr/sport/cms-home", "note": "Page officielle."},
    {"n": 12, "org": "AISTS", "title": "About AISTS", "url": "https://aists.org/about/", "note": "Création en 2000 ; présentation institutionnelle."},
    {"n": 13, "org": "ThinkSport", "title": "Sport's innovation network", "url": "https://thinksport.org/", "note": "Page officielle."},
    {"n": 14, "org": "État de Vaud", "title": "Le Canton de Vaud renforce son action en faveur de l'innovation dans le sport", "url": "https://www.vd.ch/actualites/communiques-de-presse-de-letat-de-vaud/detail/communique/le-canton-de-vaud-renforce-son-action-en-faveur-de-linnovation-dans-le-sport", "note": "21 avril 2026."},
    {"n": 15, "org": "Office fédéral du sport OFSPO", "title": "Sport Suisse 2026", "url": "https://www.baspo.admin.ch/dam/fr/sd-web/2dI5D4Dk92Om/Bro-Sport-Schweiz-2026_FR.pdf", "note": "Édition 2026, graphique 2.1, page imprimée 7."},
    {"n": 16, "org": "Comité d'organisation Lausanne 2025", "title": "Lausanne 2025, un défi colossal relevé avec succès", "url": "https://lausanne2025.ch/wp-content/uploads/2025/07/COMMUNIQUE-DE-PRESSE-%E2%80%93-02.07-1.pdf", "note": "Bilan du 2 juillet 2025."},
    {"n": 17, "org": "IMD World Competitiveness Center", "title": "Smart City Index 2026 Results", "url": "https://www.imd.org/wp-content/uploads/2026/03/20260325-SmartCityIndex-2026.pdf", "note": "Édition 2026."},
    {"n": 18, "org": "IMD World Competitiveness Center", "title": "Smart City Index methodology", "url": "https://www.imd.org/smart-city-observatory/home/methodology/", "note": "Méthode de l'édition 2026."},
    {"n": 19, "org": "Institute for Economics and Peace via Vision of Humanity", "title": "10 Most Peaceful Countries in 2026", "url": "https://www.visionofhumanity.org/why-iceland-stretched-its-lead-among-the-worlds-10-most-peaceful-countries-in-2026/", "note": "Édition 2026."},
    {"n": 20, "org": "Lausanne Tourisme", "title": "Accès à Lausanne", "url": "https://www.lausanne-tourisme.ch/fr/acces-a-lausanne/", "note": "Page officielle."},
    {"n": 21, "org": "UNESCO Centre du patrimoine mondial", "title": "Lavaux Vineyard Terraces", "url": "https://whc.unesco.org/en/list/1243/", "note": "Inscription au patrimoine mondial en 2007."},
    {"n": 22, "org": "Office des Nations Unies à Genève", "title": "The UN in Geneva", "url": "https://www.ungeneva.org/en/about/organizations", "note": "Page officielle."},
    {"n": 23, "org": "Nations Unies", "title": "Transforming our world: the 2030 Agenda for Sustainable Development", "url": "https://sdgs.un.org/2030agenda", "note": "Adopté en 2015, paragraphe 37."},
    {"n": 24, "org": "EvidenSe", "title": "Evidence-led advisory for sport revenue decisions", "url": "https://www.evidense.io/", "note": "Présentation du fondateur et des services."},
    {"n": 25, "org": "EvidenSe", "title": "EvidenSe Sport Attention Index", "url": "https://index.evidense.io/", "note": "Édition d'octobre 2026 affichée lors de la consultation."},
    {"n": 26, "org": "Organisation Mondiale de la Propriété Intellectuelle", "title": "WIPO Global Innovation Index 2026", "url": "https://www.wipo.int/pressroom/en/articles/2026/article_0014.html", "note": "29 septembre 2026."},
    {"n": 27, "org": "Tribunal Arbitral du Sport", "title": "The Court", "url": "https://www.tas-cas.org/en/general-information/the-court", "note": "Page officielle."},
    {"n": 28, "org": "FIM", "title": "History & Heritage", "url": "https://fim-moto.com/en/fim/history-heritage", "note": "Siège à Mies depuis décembre 1994."},
    {"n": 29, "org": "FIA", "title": "Organisation", "url": "https://www.fia.com/organisation", "note": "Siège à Paris ; bureau à Vernier, canton de Genève."},
    {"n": 30, "org": "EvidenSe", "title": "La Sponsoring Machine", "url": "https://www.evidense.io/fr/labs/sponsoring-machine", "note": "EvidenSe Labs, présentation du projet."},
    {"n": 31, "org": "The Checkered Flag", "title": "FIM opens new headquarters in Mies", "url": "https://www.thecheckeredflag.co.uk/2024/10/fim-opens-new-headquarters-in-mies", "note": "Octobre 2024."},
    {"n": 32, "org": "Ville de Lausanne", "title": "Maison du Sport International", "url": "https://www.lausanne.ch/portrait/capitale-olympique/siege-du-cio/federations-sportives-internationales/maison-du-sport-international.html", "note": "Ouverte en juin 2006 ; propriété à parts égales de la Ville, du Canton et du CIO."},
    {"n": 33, "org": "Maison du Sport International SA", "title": "About the MSI", "url": "https://msi-lausanne.ch", "note": "Site officiel, avenue de Rhodanie 54, Lausanne."},
    {"n": 34, "org": "Université de Lausanne", "title": "Centre interdisciplinaire de recherche sur le sport (CIRSport)", "url": "https://www.unil.ch/cirsport/en/home.html", "note": "Mission, trois axes de recherche, centre interdisciplinaire depuis 2019."},
    {"n": 35, "org": "Smart Move", "title": "Smart Move, réseau académique pour le sport", "url": "https://thesmartmove.ch/", "note": "Institutions membres et services."},
  ],
  author: {
    name: "Stéphane Schwander",
    role: "Fondateur d'EvidenSe",
    bio: "Né et grandi à Lausanne. Neuf ans à l'UEFA et onze à la FEI, comme Head of Digital puis Head of Content and Platform Management. Il conseille aujourd'hui les organisations sportives, les détenteurs de droits, les marques et les investisseurs sur la création réelle de valeur commerciale.",
    link: "En savoir plus sur Stéphane",
  },
};

export const LAUSANNE_VAUD: Record<ArticleLocale, LausanneVaudContent> = { en, fr };

export const LAUSANNE_VAUD_BOOKING = BOOKING_URL;
export const LAUSANNE_VAUD_EMAIL = CONTACT_EMAIL;
