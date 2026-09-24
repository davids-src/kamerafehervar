import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MobileCallBar } from '@/components/MobileCallBar';
import { Reveal } from '@/components/Reveal';
import { Breadcrumb } from '@/components/Breadcrumb';
import { CrossSellSection } from '@/components/CrossSellSection';
import { ContactForm } from '@/components/ContactForm';
import { getRouteByPath, SITE_URL } from '@/lib/routes';
import {
  CameraIcon,
  CheckIcon,
  PhoneIcon,
  ArrowRightIcon,
  WrenchIcon,
  ShieldIcon,
} from '@/components/icons';

const route = getRouteByPath('/kamerarendszer-bovites')!;

export const metadata: Metadata = {
  title: route.title,
  description: route.description,
  alternates: { canonical: `${SITE_URL}${route.path}` },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}${route.path}#service`,
    name: 'Kamerarendszer bővítés és korszerűsítés',
    serviceType: 'Biztonságtechnikai fejlesztés',
    provider: {
      '@type': 'Organization',
      name: 'SIROTECH Informatikai és Biztonságtechnikai Kft.',
      vatID: '33056151-2-07',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Székesfehérvár és Fejér vármegye',
    },
    description: route.description,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}${route.path}`,
    url: `${SITE_URL}${route.path}`,
    name: route.title,
    description: route.description,
  },
];

export default function BovitesLanding() {
  return (
    <div className="min-h-screen bg-paper flex flex-col font-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-grow">
        {/* Breadcrumb */}
        <section className="bg-mist py-4 border-b border-line">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <Breadcrumb items={[{ name: 'Kamerarendszer bővítés', url: route.path }]} />
          </div>
        </section>

        {/* Hero */}
        <section className="bg-navy text-white py-14 sm:py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 40% 40%, white 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />
          <div className="max-w-content mx-auto px-4 sm:px-6 relative z-10">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-wider mb-4">
                <CameraIcon className="w-3.5 h-3.5 text-accent" />
                Rendszerfejlesztés & Bővítés
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl">
                Kamerarendszer Bővítés & Korszerűsítés
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-4 text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed">
                Növekedett az ingatlana vagy több területet szeretne belátni? Meglévő kamerarendszerét új kamerákkal bővítjük, a régi rögzítőt nagyobbra cseréljük, vagy korszerűsítjük az elavult analóg technológiát.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#kapcsolat"
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-lg font-display font-bold text-base transition-colors shadow-sm"
                >
                  Kérek felmérést bővítésre
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
                <a
                  href="tel:+36702735532"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-lg font-display font-bold text-base transition-colors"
                >
                  <PhoneIcon className="w-4 h-4 text-accent" />
                  +36 70 273 5532
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Content Section 1: Mikor érdemes bővíteni? */}
        <section className="py-16 sm:py-20 border-b border-line">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <Reveal>
                <div className="space-y-4">
                  <span className="text-xs font-bold font-display uppercase tracking-wider text-accent">
                    Költséghatékony fejlesztés
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                    Hogyan bővíthető a meglévő kamerarendszer?
                  </h2>
                  <p className="font-body text-base text-ink/80 leading-relaxed">
                    Nem kell a teljes rendszert kibontani és kidobni! Sok esetben a meg meglévő kábelnyomvonalak és rögzítők kapacitása kihasználható.
                  </p>
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3 bg-mist/50 p-4 rounded-xl border border-line/50">
                      <CheckIcon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-display text-navy text-sm block mb-0.5">Újabb kamerák hozzáadása:</strong>
                        <span className="font-body text-xs sm:text-sm text-ink/70">Ha a rögzítőjén van még szabad csatorna (pl. 4 csatornásból 8-asra váltás), újabb pontokat vonhatunk be.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-mist/50 p-4 rounded-xl border border-line/50">
                      <CheckIcon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-display text-navy text-sm block mb-0.5">Rögzítő & Merevlemez (HDD) bővítés:</strong>
                        <span className="font-body text-xs sm:text-sm text-ink/70">Nagyobb kapacitású biztonsági HDD beszerelésével 1-2 hétről akár több hónapra növelhető a felvételek megőrzése.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-mist/50 p-4 rounded-xl border border-line/50">
                      <CheckIcon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-display text-navy text-sm block mb-0.5">Analóg rendszerek HD / IP korszerűsítése:</strong>
                        <span className="font-body text-xs sm:text-sm text-ink/70">A régi homályos analóg kamerák cseréje éles, nagy felbontású típusokra meglévő kábellel.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="bg-navy p-8 rounded-2xl text-white space-y-5 shadow-md">
                  <h3 className="font-display font-bold text-xl text-white">
                    Bővítési opciók és lépések
                  </h3>
                  <p className="font-body text-sm text-white/80 leading-relaxed">
                    Székesfehérváron és Fejér vármegyében ingyenesen felmérjük meglévő kamerarendszerét, és javaslatot teszünk a leginkább költséghatékony bővítési módra.
                  </p>
                  <ul className="space-y-2 text-sm text-white/90 font-body">
                    <li>&bull; Csatornaszám bővítés (4/8/16/32 csatorna)</li>
                    <li>&bull; Éjszakai színes megfigyelés (ColorVu / Full-color)</li>
                    <li>&bull; intelligens arcszűrés & gépjármű rendszám felismerés</li>
                    <li>&bull; Mobiltelefonos távoli elérés beállítása</li>
                  </ul>
                  <div className="pt-2">
                    <Link
                      href="/ip-kamerarendszer"
                      className="inline-flex items-center gap-2 text-accent font-bold text-sm bg-white px-4 py-2.5 rounded-lg hover:bg-mist transition-colors"
                    >
                      IP Kamerákra váltana? &rarr;
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Cross Sell */}
        <section className="py-12">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <CrossSellSection />
          </div>
        </section>

        {/* Contact Form */}
        <section id="kapcsolat" className="bg-mist py-16 scroll-mt-20">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <Reveal>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mb-4">
                    Kérjen felmérést kamerarendszer bővítésére!
                  </h2>
                  <p className="font-body text-base text-ink/70 leading-relaxed mb-6">
                    Mondja el, hány új kamerát szeretne felszereltetni vagy meglévő rendszerét hogyan fejlesztené. Munkatársunk felveszi Önnel a kapcsolatot.
                  </p>
                  <div className="p-5 bg-white rounded-xl border border-line space-y-2">
                    <p className="font-body text-sm text-ink/80">
                      <strong>Ügyfélszolgálat:</strong> +36 70 273 5532
                    </p>
                    <p className="font-body text-sm text-ink/80">
                      <strong>E-mail:</strong> szia@kamerafehervar.hu
                    </p>
                    <p className="font-body text-xs text-ink/60 pt-2">
                      Kivitelező: SIROTECH Kft. (Székesfehérvár)
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <ContactForm defaultRequestType="Bővítés" />
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileCallBar />
    </div>
  );
}
