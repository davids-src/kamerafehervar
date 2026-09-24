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
  StoreIcon,
  CheckIcon,
  PhoneIcon,
  ArrowRightIcon,
  ShieldIcon,
  CameraIcon,
} from '@/components/icons';

const route = getRouteByPath('/uzleti-kamerarendszer')!;

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
    name: 'Üzleti kamerarendszerek cégeknek és telephelyeknek',
    serviceType: 'Ipari és Üzleti Biztonságtechnika',
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

const businessUseCases = [
  {
    title: 'Üzlethelyiségek & Eladóterek',
    desc: 'Pénztár feletti nagy felbontású rögzítés, áruvédelem, vevői viták rendezése visszanézhető videóval.',
  },
  {
    title: 'Raktárak & Logisztikai Csarnokok',
    desc: 'Bejövő és kimenő áruforgalom ellenőrzése, rakodórámpák és villástargonca útvonalak felügyelete.',
  },
  {
    title: 'Irodák & Székhelyek',
    desc: 'Belépési pontok, recepció és parkoló megfigyelése távoli céges hálózati eléréssel.',
  },
  {
    title: 'Ipari Telephelyek & Kerítésvédelem',
    desc: 'Periméter védelem hőkamerás vagy AI vonalátlépés érzékeléssel, éjszakai reflektoros riasztással.',
  },
];

export default function UzletiKameraLanding() {
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
            <Breadcrumb items={[{ name: 'Üzleti kamerarendszer', url: route.path }]} />
          </div>
        </section>

        {/* Hero */}
        <section className="bg-navy text-white py-14 sm:py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 60% 40%, white 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div className="max-w-content mx-auto px-4 sm:px-6 relative z-10">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-wider mb-4">
                <StoreIcon className="w-3.5 h-3.5 text-accent" />
                Cégeknek & Telephelyeknek
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl">
                Üzleti Kamerarendszerek Székesfehérváron
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-4 text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed">
                Ipari és üzleti biztonsági kamerarendszerek tervezése, kiépítése és karbantartása. Számlával, vállalkozási garanciával és SIROTECH Kft. szakmai háttérrel Fejér vármegyében.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#kapcsolat"
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-lg font-display font-bold text-base transition-colors shadow-sm"
                >
                  Céges ajánlatot kérek
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

        {/* Section 1: Use Cases */}
        <section className="py-16 sm:py-20 border-b border-line">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-bold font-display uppercase tracking-wider text-accent">
                  Megoldások minden iparágra
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                  Hol segít a professzionális üzleti kamerarendszer?
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {businessUseCases.map((useCase, i) => (
                <Reveal key={useCase.title} delay={i * 80}>
                  <div className="bg-mist/60 p-6 rounded-xl border border-line/60 flex items-start gap-4">
                    <span className="w-10 h-10 rounded-lg bg-navy/10 text-navy flex-shrink-0 flex items-center justify-center font-bold">
                      <CheckIcon className="w-5 h-5 text-accent" />
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-base text-navy mb-1">
                        {useCase.title}
                      </h3>
                      <p className="font-body text-sm text-ink/70 leading-relaxed">
                        {useCase.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* B2B Garantált előnyök */}
        <section className="py-16 bg-navy text-white">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <Reveal>
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold">
                    Mivel nyújt többet a SIROTECH Kft. üzleti ügyfeleinek?
                  </h2>
                  <p className="font-body text-base text-white/80 leading-relaxed">
                    Tudjuk, hogy a cégek számára az állásidő veszteség. Ezért kiemelt figyelmet fordítunk a gyors határidőkre és a megbízható rendszerarchitektúrára.
                  </p>
                  <ul className="space-y-2.5 font-body text-sm text-white/85 pt-2">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-accent" /> Áfás számla és hivatalos kivitelezői szerződés.
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-accent" /> GDPR megfelelőséghez tanácsadás a kamerás figyelmeztető táblákról.
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-accent" /> Riasztóval és beléptetővel integrált zárt hálózat.
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="bg-white/5 p-7 rounded-2xl border border-white/10 space-y-4">
                  <h3 className="font-display font-bold text-lg">
                    Kapcsolódó céges megoldások:
                  </h3>
                  <div className="space-y-3 font-body text-sm">
                    <Link
                      href="/ip-kamerarendszer"
                      className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <strong>IP Kamerarendszer kiépítés &rarr;</strong>
                      <span className="block text-xs text-white/70 mt-0.5">4K Ultra HD és hálózati PoE infrastruktúra</span>
                    </Link>
                    <Link
                      href="/riaszto-es-beleptetes"
                      className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <strong>Riasztó & Beléptetés &rarr;</strong>
                      <span className="block text-xs text-white/70 mt-0.5">Kártyás beléptető és Ajax/Paradox riasztó</span>
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
                    Kérjen céges árajánlatot és helyszíni felmérést!
                  </h2>
                  <p className="font-body text-base text-ink/70 leading-relaxed mb-6">
                    Töltse ki a formot a cégnevével és a telephely helyszínével. Rövid időn belül felvesszük Önnel a kapcsolatot.
                  </p>
                  <div className="p-5 bg-white rounded-xl border border-line space-y-2">
                    <p className="font-body text-sm text-ink/80">
                      <strong>Központi telefon:</strong> +36 70 273 5532
                    </p>
                    <p className="font-body text-sm text-ink/80">
                      <strong>E-mail:</strong> szia@kamerafehervar.hu
                    </p>
                    <p className="font-body text-xs text-ink/60 pt-2">
                      Üzemeltető: SIROTECH Kft. (8000 Székesfehérvár)
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <ContactForm defaultCustomerType="Vállalkozás / intézmény" defaultRequestType="Új kamerarendszer" />
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
