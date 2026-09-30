export interface RouteConfig {
  path: string;
  title: string;
  description: string;
  /** Explicit content modification date (YYYY-MM-DD). Never use build time. */
  contentUpdatedAt: string;
  keywords?: string[];
}

export const SITE_URL = 'https://kamerafehervar.hu';
export const PHONE_DISPLAY = '+36 70 273 5532';
export const PHONE_HREF = 'tel:+36702735532';
export const EMAIL = 'szia@kamerafehervar.hu';

/** Canonical routes only — sitemap and navigation derive from this list. */
export const routeConfigs: RouteConfig[] = [
  {
    path: '/',
    title: 'Kamerarendszer Székesfehérváron | Kamera Fehérvár',
    description:
      'Kamerarendszer tervezés, telepítés, bővítés és javítás Székesfehérváron. Családi ház, nyaraló, üzlet és telephely.',
    contentUpdatedAt: '2026-09-30',
    keywords: [
      'kamerarendszer Székesfehérvár',
      'kamera telepítés Székesfehérvár',
      'kamerarendszer telepítés Székesfehérvár',
      'kamerarendszer javítás Székesfehérvár',
      'kamera javítás Székesfehérvár',
      'kamera családi ház Székesfehérvár',
    ],
  },
  {
    path: '/kamerarendszer-telepites',
    title: 'Kamerarendszer telepítés Székesfehérváron | Kamera Fehérvár',
    description:
      'Kamerarendszer kivitelezés: kábelezés, kamera és rögzítő telepítése, hálózati beállítás, próba és átadás Székesfehérváron.',
    contentUpdatedAt: '2026-09-30',
    keywords: ['kamerarendszer telepítés Székesfehérvár', 'kamera telepítés Székesfehérvár'],
  },
  {
    path: '/kamerarendszer-javitas',
    title: 'Kamerarendszer javítás Székesfehérváron | Kamera Fehérvár',
    description:
      'Kamerarendszer javítás Székesfehérváron: nincs kép, hibás kamera, rögzítési vagy elérési probléma — először azonosítjuk a rendszert.',
    contentUpdatedAt: '2026-09-30',
    keywords: ['kamerarendszer javítás Székesfehérvár', 'kamera javítás Székesfehérvár'],
  },
  {
    path: '/kamerarendszer-tervezes',
    title: 'Kamerarendszer tervezés Székesfehérváron | Kamera Fehérvár',
    description:
      'Kamerarendszer tervezés: kamerák helye, látómező, rögzítési igény és hálózati feltételek a helyszín alapján.',
    contentUpdatedAt: '2026-09-30',
  },
  {
    path: '/csaladi-haz-nyaralo',
    title: 'Kamera családi házra és nyaralóra | Kamera Fehérvár',
    description:
      'Kamerarendszer családi házhoz és nyaralóhoz Székesfehérváron: bejárat, kapu, udvar; távoli ellenőrzés a hálózati feltételek szerint.',
    contentUpdatedAt: '2026-09-30',
    keywords: ['kamera családi ház Székesfehérvár'],
  },
  {
    path: '/uzlet-telephely',
    title: 'Kamerarendszer üzlethez és telephelyhez | Kamera Fehérvár',
    description:
      'Kamerás megfigyelés üzletbe és telephelyre Székesfehérváron — jogszerű használat feltételeinek figyelembevételével.',
    contentUpdatedAt: '2026-09-30',
  },
  {
    path: '/kapcsolat',
    title: 'Kapcsolat / ajánlatkérés | Kamera Fehérvár',
    description:
      'Ajánlatkérés kamerarendszer tervezésre, telepítésre, bővítésre vagy javításra Székesfehérváron.',
    contentUpdatedAt: '2026-09-30',
  },
  {
    path: '/adatvedelem',
    title: 'Adatvédelmi tájékoztató | Kamera Fehérvár',
    description: 'Adatvédelmi tájékoztató — Kamera Fehérvár (SIROTECH Kft.)',
    contentUpdatedAt: '2026-09-30',
  },
  {
    path: '/aszf',
    title: 'Általános Szerződési Feltételek | Kamera Fehérvár',
    description: 'Általános Szerződési Feltételek — Kamera Fehérvár (SIROTECH Kft.)',
    contentUpdatedAt: '2026-09-30',
  },
];

/** Old URLs → canonical (or home). Used by next.config redirects. */
export const urlMigrations: { from: string; to: string; permanent: boolean }[] = [
  { from: '/kamerarendszer-telepites-szekesfehervar', to: '/kamerarendszer-telepites', permanent: true },
  { from: '/kamerarendszer-javitas-szekesfehervar', to: '/kamerarendszer-javitas', permanent: true },
  { from: '/kamerarendszer-bovites', to: '/kamerarendszer-javitas', permanent: true },
  { from: '/ip-kamerarendszer', to: '/', permanent: true },
  { from: '/uzleti-kamerarendszer', to: '/uzlet-telephely', permanent: true },
  { from: '/otthoni-kamerarendszer', to: '/csaladi-haz-nyaralo', permanent: true },
  { from: '/riaszto-es-beleptetes', to: '/', permanent: true },
  { from: '/adatkezeles', to: '/adatvedelem', permanent: true },
];

export function getRouteByPath(path: string): RouteConfig | undefined {
  return routeConfigs.find((r) => r.path === path);
}

export const navItems = [
  { name: 'Telepítés', href: '/kamerarendszer-telepites' },
  { name: 'Javítás', href: '/kamerarendszer-javitas' },
  { name: 'Tervezés', href: '/kamerarendszer-tervezes' },
  { name: 'Családi ház', href: '/csaladi-haz-nyaralo' },
  { name: 'Üzlet', href: '/uzlet-telephely' },
  { name: 'Kapcsolat', href: '/kapcsolat' },
];
