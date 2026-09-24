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
  CheckIcon,
  PhoneIcon,
  ArrowRightIcon,
  CameraIcon,
  MapPinIcon,
  ShieldIcon,
  WrenchIcon,
} from '@/components/icons';

const route = getRouteByPath('/kamerarendszer-telepites-szekesfehervar')!;

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
    name: 'Kamerarendszer telepítés Székesfehérváron',
    serviceType: 'Biztonságtechnikai telepítés',
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

export default function TelepitesLanding() {
  return (
    <div className="min-h-screen bg-paper flex flex-col font-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-grow">
        {/* Top Breadcrumb Header */}
        <section className="bg-mist py-4 border-b border-line">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <Breadcrumb items={[{ name: 'Kamerarendszer telepítés', url: route.path }]} />
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-navy text-white py-14 sm:py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 70% 30%, white 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div className="max-w-content mx-auto px-4 sm:px-6 relative z-10">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-wider mb-4">
                <MapPinIcon className="w-3.5 h-3.5 text-accent" />
                Székesfehérvár & Fejér vármegye
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl">
                Kamerarendszer Telepítés Székesfehérváron
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-4 text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed">
                Szakszerű és megbízható kamerarendszer kiépítés családi házakhoz, irodákhoz, üzletekhez és ipari ingatlanokhoz. Ingyenes székesfehérvári felméréssel és írásos garanciával.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#kapcsolat"
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-lg font-display font-bold text-base transition-colors shadow-sm"
                >
                  Kérek ingyenes helyszíni felmérést
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

        {/* Section 1: Ingyenes helyszíni felmérés */}
        <section className="py-16 sm:py-20 border-b border-line">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <Reveal>
                <div className="space-y-4">
                  <span className="text-xs font-bold font-display uppercase tracking-wider text-accent">
                    Személyre szabott biztonság
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                    Miért elengedhetetlen a helyszíni felmérés?
                  </h2>
                  <p className="font-body text-base text-ink/80 leading-relaxed">
                    Nincs két egyforma ingatlan Székesfehérváron. A kamerák optimális elhelyezése, a holtterek kiküszöbölése, a faláttörések útvonala és az éjszakai megvilágítási viszonyok csak a helyszínen mérhetők fel pontosan.
                  </p>
                  <ul className="space-y-2.5 font-body text-sm text-ink/80 pt-2">
                    <li className="flex items-start gap-2.5">
                      <CheckIcon className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span><strong>Ingyenes kiszállás:</strong> Székesfehérváron és a környező Fejér vármegyei településeken díjmentesen mérjük fel az ingatlant.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckIcon className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span><strong>Fix árajánlat:</strong> A felmérés alapján tételes, kötöttségektől mentes árajánlatot adunk.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckIcon className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span><strong>Számlaképes kivitelező:</strong> A SIROTECH Kft. hivatalos garanciát és számlát biztosít.</span>
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="bg-mist p-8 rounded-2xl border border-line space-y-4 shadow-sm">
                  <h3 className="font-display font-bold text-xl text-navy">
                    Mit tartalmaz a profi telepítés?
                  </h3>
                  <div className="space-y-3 font-body text-sm text-ink/80">
                    <div className="p-3 bg-white rounded-lg border border-line/50">
                      <strong>1. Kábelezés & Eszközrögzítés:</strong> Időjárásálló kültéri és esztétikus beltéri kábelcsatornázás.
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-line/50">
                      <strong>2. Rögzítőegység (NVR/DVR) konfigurálás:</strong> Titkosított tárhely, folyamatos vagy mozgásérzékelős rögzítés.
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-line/50">
                      <strong>3. Okostelefonos Beállítás:</strong> Élő kép és visszajátszás távoli elérése iOS és Android készülékekről.
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-line/50">
                      <strong>4. Betanítás & Átadás:</strong> Lépésről lépésre bemutatjuk a rendszer kezelését.
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Internal Linking Related Services */}
        <section className="py-16 bg-mist">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto mb-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                  Milyen típusú kamerarendszert telepítünk?
                </h2>
                <p className="font-body text-sm sm:text-base text-ink/70 mt-2">
                  Kattintson az Ön számára legmegfelelőbb megoldásra:
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Reveal delay={50}>
                <div className="bg-white p-6 rounded-xl border border-line shadow-sm flex flex-col justify-between h-full">
                  <div>
                    <span className="w-10 h-10 rounded-lg bg-navy/10 text-navy flex items-center justify-center mb-4 font-bold">
                      IP
                    </span>
                    <h3 className="font-display font-bold text-lg text-navy mb-2">
                      IP Kamerarendszerek
                    </h3>
                    <p className="font-body text-sm text-ink/70 mb-4">
                      4K Ultra HD képminőség, PoE tápellátás és intelligens mozgásérzékelés modern ingatlanokhoz.
                    </p>
                  </div>
                  <Link
                    href="/ip-kamerarendszer"
                    className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm hover:underline"
                  >
                    IP kamerák részletei &rarr;
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="bg-white p-6 rounded-xl border border-line shadow-sm flex flex-col justify-between h-full">
                  <div>
                    <span className="w-10 h-10 rounded-lg bg-navy/10 text-navy flex items-center justify-center mb-4 font-bold">
                      B2B
                    </span>
                    <h3 className="font-display font-bold text-lg text-navy mb-2">
                      Üzleti Kamerarendszerek
                    </h3>
                    <p className="font-body text-sm text-ink/70 mb-4">
                      Raktárak, irodák, eladóterek és telephelyek komplex védelme Székesfehérváron.
                    </p>
                  </div>
                  <Link
                    href="/uzleti-kamerarendszer"
                    className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm hover:underline"
                  >
                    Üzleti megoldások &rarr;
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <div className="bg-white p-6 rounded-xl border border-line shadow-sm flex flex-col justify-between h-full">
                  <div>
                    <span className="w-10 h-10 rounded-lg bg-navy/10 text-navy flex items-center justify-center mb-4 font-bold">
                      B2C
                    </span>
                    <h3 className="font-display font-bold text-lg text-navy mb-2">
                      Otthoni Kamerarendszerek
                    </h3>
                    <p className="font-body text-sm text-ink/70 mb-4">
                      Családi házak, kertek és kapubejáratok védelme éjszakai színes megfigyeléssel.
                    </p>
                  </div>
                  <Link
                    href="/otthoni-kamerarendszer"
                    className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm hover:underline"
                  >
                    Otthoni kamerák &rarr;
                  </Link>
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

        {/* Contact Section */}
        <section id="kapcsolat" className="bg-mist py-16 scroll-mt-20">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <Reveal>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mb-4">
                    Kérjen ingyenes helyszíni felmérést Székesfehérváron!
                  </h2>
                  <p className="font-body text-base text-ink/70 leading-relaxed mb-6">
                    Töltse ki az űrlapot, és munkatársunk 1 órán belül felveszi Önnel a kapcsolatot.
                  </p>
                  <div className="p-5 bg-white rounded-xl border border-line space-y-2">
                    <p className="font-body text-sm text-ink/80">
                      <strong>Ügyfélszolgálat:</strong> +36 70 273 5532
                    </p>
                    <p className="font-body text-sm text-ink/80">
                      <strong>E-mail:</strong> szia@kamerafehervar.hu
                    </p>
                    <p className="font-body text-xs text-ink/60 pt-2">
                      Szolgáltató: SIROTECH Kft. (8000 Székesfehérvár, Lövölde u. 24.)
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <ContactForm defaultRequestType="Új kamerarendszer" />
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
