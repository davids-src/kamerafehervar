export interface RouteConfig {
  path: string;
  title: string;
  description: string;
  contentUpdatedAt: string; // Explicit ISO Date string YYYY-MM-DD
  priority: number;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  serviceName?: string;
  keywords?: string[];
}

export const SITE_URL = 'https://kamerafehervar.hu';

export const routeConfigs: RouteConfig[] = [
  {
    path: '/',
    title: 'Kamerarendszer telepítés és javítás Székesfehérváron | Kamera Fehérvár',
    description:
      'Kamerarendszer telepítés, javítás, bővítés és korszerűsítés Székesfehérváron és Fejér vármegyében. Cégeknek és otthonra, IP és analóg rendszerekhez.',
    contentUpdatedAt: '2026-09-24',
    priority: 1.0,
    changeFrequency: 'monthly',
    keywords: [
      'kamerarendszer Székesfehérvár',
      'kamera telepítés Székesfehérvár',
      'kamerarendszer javítás Székesfehérvár',
      'IP kamera Székesfehérvár',
      'biztonsági kamera Fejér megye',
      'kamerarendszer bővítés',
    ],
  },
  {
    path: '/kamerarendszer-telepites-szekesfehervar',
    title: 'Kamerarendszer Telepítés Székesfehérváron | Ingyenes Felmérés | Kamera Fehérvár',
    description:
      'Profi biztonsági kamerarendszer telepítés Székesfehérváron és Fejér vármegyében. Új IP és analóg rendszerek tervezése, kiépítése garanciával, cégeknek és magánszemélyeknek.',
    contentUpdatedAt: '2026-09-24',
    priority: 0.9,
    changeFrequency: 'monthly',
    serviceName: 'Kamerarendszer telepítés',
    keywords: [
      'kamera telepítés Székesfehérvár',
      'biztonsági kamera kiépítés',
      'kamerarendszer szerelés Fejér vármegye',
    ],
  },
  {
    path: '/kamerarendszer-javitas-szekesfehervar',
    title: 'Kamerarendszer Javítás Székesfehérváron | Hibaelhárítás | Kamera Fehérvár',
    description:
      'Elromlott, nem rögzít vagy nem elérhető a kamerarendszere? Gyors hibaelhárítás és javítás Székesfehérváron és Fejér vármegyében, analóg és IP rendszerekhez egyaránt.',
    contentUpdatedAt: '2026-09-24',
    priority: 0.9,
    changeFrequency: 'monthly',
    serviceName: 'Kamerarendszer javítás',
    keywords: [
      'kamerarendszer javítás Székesfehérvár',
      'kamera szerelő',
      'DVR javítás',
      'NVR hibaelhárítás',
    ],
  },
  {
    path: '/kamerarendszer-bovites',
    title: 'Kamerarendszer Bővítés és Korszerűsítés | Kamera Fehérvár',
    description:
      'Meglévő kamerarendszer bővítése új kamerákkal, rögzítő cseréje vagy analóg rendszer IP-re korszerűsítése Székesfehérváron és környékén.',
    contentUpdatedAt: '2026-09-24',
    priority: 0.8,
    changeFrequency: 'monthly',
    serviceName: 'Kamerarendszer bővítés',
    keywords: ['kamerarendszer bővítés', 'kamera korszerűsítés', 'DVR csere NVR-re'],
  },
  {
    path: '/ip-kamerarendszer',
    title: 'IP Kamerarendszerek Székesfehérváron | Nagy Felbontás & Telefonos Rálátás',
    description:
      'Modern IP kamerarendszerek kiépítése 4K felbontással, éjszakai színes látással és mobiltelefonos élő képpel Székesfehérváron és Fejér vármegyében.',
    contentUpdatedAt: '2026-09-24',
    priority: 0.8,
    changeFrequency: 'monthly',
    serviceName: 'IP kamerarendszerek',
    keywords: ['IP kamera Székesfehérvár', 'PoE kamerarendszer', '4K biztonsági kamera'],
  },
  {
    path: '/uzleti-kamerarendszer',
    title: 'Üzleti Kamerarendszerek Cégeknek & Telephelyeknek | Székesfehérvár',
    description:
      'Ipari és üzleti kamerarendszerek irodáknak, üzleteknek, raktáraknak és telephelyeknek Székesfehérváron és Fejér vármegyében. Számlával, garanciával.',
    contentUpdatedAt: '2026-09-24',
    priority: 0.8,
    changeFrequency: 'monthly',
    serviceName: 'Üzleti kamerarendszer',
    keywords: ['üzleti kamerarendszer', 'raktár megfigyelés', 'bolt kamera Székesfehérvár'],
  },
  {
    path: '/otthoni-kamerarendszer',
    title: 'Otthoni Kamerarendszerek Családi Házaknak & Társasházaknak | Kamera Fehérvár',
    description:
      'Védje meg otthonát! Megbízható otthoni kamerarendszerek kiépítése és javítása Székesfehérváron. Bejárat, kert és garázs megfigyelése okostelefonos eléréssel.',
    contentUpdatedAt: '2026-09-24',
    priority: 0.8,
    changeFrequency: 'monthly',
    serviceName: 'Otthoni kamerarendszer',
    keywords: ['otthoni kamerarendszer', 'családi ház kamera Székesfehérvár', 'okos kamera otthonra'],
  },
  {
    path: '/riaszto-es-beleptetes',
    title: 'Riasztó és Beléptető Rendszerek Kiépítése | Kamera Fehérvár',
    description:
      'Komplex vagyonvédelem: riasztórendszerek, beléptetők és kaputelefonok szakszerű telepítése kamerarendszerrel kombinálva Székesfehérváron.',
    contentUpdatedAt: '2026-09-24',
    priority: 0.8,
    changeFrequency: 'monthly',
    serviceName: 'Riasztó és beléptetés',
    keywords: ['riasztó és beléptetés', 'riasztótelepítés Székesfehérvár', 'beléptető rendszer'],
  },
  {
    path: '/adatkezeles',
    title: 'Adatkezelési Tájékoztató | Kamera Fehérvár',
    description: 'Adatkezelési tájékoztató — Kamera Fehérvár (SIROTECH Kft.)',
    contentUpdatedAt: '2026-09-24',
    priority: 0.3,
    changeFrequency: 'yearly',
  },
  {
    path: '/aszf',
    title: 'Általános Szerződési Feltételek (ÁSZF) | Kamera Fehérvár',
    description: 'Általános Szerződési Feltételek — Kamera Fehérvár (SIROTECH Kft.)',
    contentUpdatedAt: '2026-09-24',
    priority: 0.3,
    changeFrequency: 'yearly',
  },
];

export function getRouteByPath(path: string): RouteConfig | undefined {
  return routeConfigs.find((r) => r.path === path);
}
