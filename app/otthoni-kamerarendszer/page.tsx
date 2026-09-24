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
  HomeIcon,
  CheckIcon,
  PhoneIcon,
  ArrowRightIcon,
  ShieldIcon,
  CameraIcon,
} from '@/components/icons';

const route = getRouteByPath('/otthoni-kamerarendszer')!;

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
    name: 'Otthoni kamerarendszerek családi házaknak',
    serviceType: 'Lakossági Biztonságtechnika',
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

const homeBenefits = [
  {
    title: 'Kapu, Bejárat & Kert Megfigyelése',
    desc: 'Bárhonnan ellenőrizheti, ki áll a kapuban, mikor érkezett meg a csomagküldő, vagy mi történik a kertben.',
  },
  {
    title: 'Okostelefonos Élő Kép & Nyugalom',
    desc: 'Utazás, nyaralás vagy munka közben is egyetlen gombnyomással ráláthat az otthonára az ingyenes applikációban.',
  },
  {
    title: 'Éjszakai Színes Megvilágítás',
    desc: 'Nem csak sötét körvonalakat lát: a modern ColorVu kamerák vak sötétben is éles, színes képet rögzítenek.',
  },
  {
    title: 'Diszkrét & Esztétikus Kábelezés',
    desc: 'Meglévő családi házaknál is odafigyelünk a rejtett kábelcsatornázásra és a vakolat védelmére.',
  },
];

export default function OtthoniKameraLanding() {
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
            <Breadcrumb items={[{ name: 'Otthoni kamerarendszer', url: route.path }]} />
          </div>
        </section>

        {/* Hero */}
        <section className="bg-navy text-white py-14 sm:py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 40% 60%, white 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />
          <div className="max-w-content mx-auto px-4 sm:px-6 relative z-10">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-wider mb-4">
                <HomeIcon className="w-3.5 h-3.5 text-accent" />
                Családi Házak & Lakások
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl">
                Otthoni Kamerarendszerek Székesfehérváron
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-4 text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed">
                Tartsa biztonságban otthonát és családját! Könnyen kezelhető, megbízható otthoni kamerarendszerek kiépítése és szervizelése Székesfehérváron és Fejér vármegyében.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#kapcsolat"
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-lg font-display font-bold text-base transition-colors shadow-sm"
                >
                  Kérek felmérést otthonomhoz
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

        {/* Benefits Grid */}
        <section className="py-16 sm:py-20 border-b border-line">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-bold font-display uppercase tracking-wider text-accent">
                  Biztonságban a család
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                  Mit nyújt egy jó otthoni kamerarendszer?
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {homeBenefits.map((ben, i) => (
                <Reveal key={ben.title} delay={i * 80}>
                  <div className="bg-mist/60 p-6 rounded-xl border border-line/60 flex items-start gap-4">
                    <span className="w-10 h-10 rounded-lg bg-navy/10 text-navy flex-shrink-0 flex items-center justify-center font-bold">
                      <CheckIcon className="w-5 h-5 text-accent" />
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-base text-navy mb-1">
                        {ben.title}
                      </h3>
                      <p className="font-body text-sm text-ink/70 leading-relaxed">
                        {ben.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
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
                    Ingyenes családi házas helyszíni felmérés
                  </h2>
                  <p className="font-body text-base text-ink/70 leading-relaxed mb-6">
                    Munkatársunk elmegy Önöz Székesfehérváron vagy Fejér vármegyében, közösen megnézik a kamera helyeket és pontos ajánlatot adunk.
                  </p>
                  <div className="p-5 bg-white rounded-xl border border-line space-y-2">
                    <p className="font-body text-sm text-ink/80">
                      <strong>Telefonszám:</strong> +36 70 273 5532
                    </p>
                    <p className="font-body text-sm text-ink/80">
                      <strong>E-mail:</strong> szia@kamerafehervar.hu
                    </p>
                    <p className="font-body text-xs text-ink/60 pt-2">
                      Kivitelező: SIROTECH Kft.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <ContactForm defaultCustomerType="Magánszemély" defaultRequestType="Új kamerarendszer" />
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
