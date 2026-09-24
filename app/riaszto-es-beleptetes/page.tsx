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
  ShieldIcon,
  CheckIcon,
  PhoneIcon,
  ArrowRightIcon,
  CameraIcon,
  StoreIcon,
  HomeIcon,
} from '@/components/icons';

const route = getRouteByPath('/riaszto-es-beleptetes')!;

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
    name: 'Riasztó és beléptető rendszerek telepítése',
    serviceType: 'Komplex vagyonvédelem',
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

const alarmFeatures = [
  {
    title: 'Vezeték Nélküli & Vezetékes Riasztók (Ajax, Paradox)',
    desc: 'Mobil push értesítések, távfelügyeleti bekötési lehetőség, sziréna és szén-monoxid / füstérzékelő modulok.',
  },
  {
    title: 'Kártyás & PIN Kódos Beléptető Rendszerek',
    desc: 'Irodák, raktárak és társasházak ajtóinak ellenőrzött nyitása, belépési naplózással.',
  },
  {
    title: 'Videó Kaputelefonok Okostelefonos Eléréssel',
    desc: 'Lássa és beszéljen a kapunál álló vendéggel mobiljáról, távolról is nyithatja a kaput.',
  },
  {
    title: 'Kamerával Integrált Vagyonvédelem',
    desc: 'Ha a riasztó jelzést ad, a kamera azonnal felugró képpel mutatja a riasztási zónát.',
  },
];

export default function RiasztoLanding() {
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
            <Breadcrumb items={[{ name: 'Riasztó és beléptetés', url: route.path }]} />
          </div>
        </section>

        {/* Hero */}
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
                <ShieldIcon className="w-3.5 h-3.5 text-accent" />
                Komplex Vagyonvédelem
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl">
                Riasztó és Beléptető Rendszerek Székesfehérváron
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-4 text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed">
                Riasztórendszerek, beléptetők és kaputelefonok telepítése, szervizelése és kamerarendszerrel történő kombinálása. A SIROTECH Kft. szakmai hátterével Székesfehérváron.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#kapcsolat"
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-lg font-display font-bold text-base transition-colors shadow-sm"
                >
                  Kérek kombinált riasztó / kamera ajánlatot
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

        {/* Alarm & Access Features */}
        <section className="py-16 sm:py-20 border-b border-line">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-bold font-display uppercase tracking-wider text-accent">
                  Komplex Védelem
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                  Riasztó, Beléptetés és Kaputelefon Egy Kézben
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {alarmFeatures.map((feat, i) => (
                <Reveal key={feat.title} delay={i * 80}>
                  <div className="bg-mist/60 p-6 rounded-xl border border-line/60 flex items-start gap-4">
                    <span className="w-10 h-10 rounded-lg bg-navy text-white flex-shrink-0 flex items-center justify-center font-bold">
                      <ShieldIcon className="w-5 h-5 text-accent" />
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-base text-navy mb-1">
                        {feat.title}
                      </h3>
                      <p className="font-body text-sm text-ink/70 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Linking to Camera Pages */}
        <section className="py-16 bg-navy text-white">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto mb-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold">
                  Kapcsolódó Kamerarendszer Szolgáltatásaink
                </h2>
                <p className="font-body text-sm sm:text-base text-white/80 mt-2">
                  Egyetlen kivitelezővel megoldható a kamerarendszer és a riasztó kiépítése is:
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Reveal delay={50}>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col justify-between h-full">
                  <div>
                    <CameraIcon className="w-6 h-6 text-accent mb-3" />
                    <h3 className="font-display font-bold text-lg text-white mb-2">
                      Kamerarendszer Telepítés
                    </h3>
                    <p className="font-body text-sm text-white/80 mb-4">
                      Teljes körű kivitelezés Székesfehérváron ingyenes helyszíni felméréssel.
                    </p>
                  </div>
                  <Link
                    href="/kamerarendszer-telepites-szekesfehervar"
                    className="inline-flex items-center gap-1.5 text-accent font-bold text-sm hover:underline"
                  >
                    Telepítés részletei &rarr;
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col justify-between h-full">
                  <div>
                    <StoreIcon className="w-6 h-6 text-accent mb-3" />
                    <h3 className="font-display font-bold text-lg text-white mb-2">
                      Üzleti Kamerarendszerek
                    </h3>
                    <p className="font-body text-sm text-white/80 mb-4">
                      Beléptetővel kombinált vagyonvédelem cégeknek és telephelyeknek.
                    </p>
                  </div>
                  <Link
                    href="/uzleti-kamerarendszer"
                    className="inline-flex items-center gap-1.5 text-accent font-bold text-sm hover:underline"
                  >
                    Üzleti kamerák &rarr;
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col justify-between h-full">
                  <div>
                    <HomeIcon className="w-6 h-6 text-accent mb-3" />
                    <h3 className="font-display font-bold text-lg text-white mb-2">
                      Otthoni Kamerarendszerek
                    </h3>
                    <p className="font-body text-sm text-white/80 mb-4">
                      Családi házas Ajax riasztó és kamerás védelem okostelefonos eléréssel.
                    </p>
                  </div>
                  <Link
                    href="/otthoni-kamerarendszer"
                    className="inline-flex items-center gap-1.5 text-accent font-bold text-sm hover:underline"
                  >
                    Otthoni kamerák &rarr;
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="kapcsolat" className="bg-mist py-16 scroll-mt-20">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <Reveal>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mb-4">
                    Kérjen ajánlatot riasztóra vagy beléptetőre!
                  </h2>
                  <p className="font-body text-base text-ink/70 leading-relaxed mb-6">
                    Töltse ki az űrlapot, és munkatársunk felveszi Önnel a kapcsolatot a díjmentes felmérés egyeztetéséhez.
                  </p>
                  <div className="p-5 bg-white rounded-xl border border-line space-y-2">
                    <p className="font-body text-sm text-ink/80">
                      <strong>Ügyfélszolgálat:</strong> +36 70 273 5532
                    </p>
                    <p className="font-body text-sm text-ink/80">
                      <strong>E-mail:</strong> szia@kamerafehervar.hu
                    </p>
                    <p className="font-body text-xs text-ink/60 pt-2">
                      Kivitelező: SIROTECH Kft. (8000 Székesfehérvár)
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <ContactForm defaultRequestType="Riasztó / beléptetés" />
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
