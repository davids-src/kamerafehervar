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
  ShieldIcon,
  StoreIcon,
  HomeIcon,
} from '@/components/icons';

const route = getRouteByPath('/ip-kamerarendszer')!;

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
    name: 'IP kamerarendszerek kiépítése Székesfehérváron',
    serviceType: 'IP Biztonsági kamerarendszer',
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

const ipFeatures = [
  {
    title: '4K Ultra HD Felbontás & Részletgazdagság',
    desc: 'Tűéles kép, amin a rendszámok, arcok és apró részletek is tisztán kivehetők még nagyobb távolságból is.',
  },
  {
    title: 'PoE (Power over Ethernet) Egyszerűség',
    desc: 'Egyetlen hálózati UTP kábel szállítja az áramot és az adatot is, így a kiépítés gyors és esztétikus.',
  },
  {
    title: 'Mesterséges Intelligencia & Téves Riasztás Szűrés',
    desc: 'Az intelligens algoritmus különül elválasztja az embert és a gépjárművet az esőtől vagy a szélben mozgó levelektől.',
  },
  {
    title: 'Éjszakai Színes Látás (ColorVu / Full Color)',
    desc: 'A beépített fehér fényű LED-eknek vagy szuperérzékeny szenzoroknak köszönhetően éjszaka is színes képet ad.',
  },
];

export default function IpKameraLanding() {
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
            <Breadcrumb items={[{ name: 'IP kamerarendszer', url: route.path }]} />
          </div>
        </section>

        {/* Hero */}
        <section className="bg-navy text-white py-14 sm:py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, white 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          <div className="max-w-content mx-auto px-4 sm:px-6 relative z-10">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-wider mb-4">
                <CameraIcon className="w-3.5 h-3.5 text-accent" />
                Modern Technológia
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl">
                IP Kamerarendszerek Székesfehérváron
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-4 text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed">
                Legújabb generációs IP kamerarendszerek kiépítése 4K felbontással, éjszakai színes megfigyeléssel és azonnali okostelefonos riasztásokkal Székesfehérváron és Fejér vármegyében.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#kapcsolat"
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-lg font-display font-bold text-base transition-colors shadow-sm"
                >
                  Kérek IP kamera ajánlatot
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

        {/* IP Kamera előnyei */}
        <section className="py-16 sm:py-20 border-b border-line">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-bold font-display uppercase tracking-wider text-accent">
                  Miért az IP technológia a jövő?
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                  Az IP Kamerarendszerek 4 Fő Előnye
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {ipFeatures.map((feat, i) => (
                <Reveal key={feat.title} delay={i * 80}>
                  <div className="bg-mist/60 p-6 rounded-xl border border-line/60 flex items-start gap-4">
                    <span className="w-10 h-10 rounded-lg bg-navy text-white flex-shrink-0 flex items-center justify-center font-bold font-display text-sm">
                      0{i + 1}
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

        {/* B2B vs B2C IP camera links */}
        <section className="py-16 bg-mist">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Reveal>
                <div className="bg-white p-7 rounded-xl border border-line shadow-sm flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <StoreIcon className="w-6 h-6 text-accent" />
                      <h3 className="font-display font-bold text-xl text-navy">
                        IP Kamerák Üzleteknek & Raktáraknak
                      </h3>
                    </div>
                    <p className="font-body text-sm text-ink/70 leading-relaxed mb-4">
                      Több telephely vagy csarnok központi NVR rögzítése, rendszámfelismerő IP kamerák a kapukhoz, pénztár feletti nagy felbontású felügyelet.
                    </p>
                  </div>
                  <Link
                    href="/uzleti-kamerarendszer"
                    className="inline-flex items-center gap-1.5 text-accent font-bold text-sm hover:underline"
                  >
                    Üzleti IP kamerák részletei &rarr;
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="bg-white p-7 rounded-xl border border-line shadow-sm flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <HomeIcon className="w-6 h-6 text-accent" />
                      <h3 className="font-display font-bold text-xl text-navy">
                        IP Kamerák Családi Házaknak
                      </h3>
                    </div>
                    <p className="font-body text-sm text-ink/70 leading-relaxed mb-4">
                      Kert, kerítés és garázs bejárat megfigyelése, mobil push értesítés ha illetéktelen személy lép a telekre éjszaka.
                    </p>
                  </div>
                  <Link
                    href="/otthoni-kamerarendszer"
                    className="inline-flex items-center gap-1.5 text-accent font-bold text-sm hover:underline"
                  >
                    Otthoni IP kamerák részletei &rarr;
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

        {/* Contact Form */}
        <section id="kapcsolat" className="bg-mist py-16 scroll-mt-20">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <Reveal>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mb-4">
                    Kérjen ajánlatot IP kamerarendszerre!
                  </h2>
                  <p className="font-body text-base text-ink/70 leading-relaxed mb-6">
                    Írja meg elképzelését (hány kamerára lenne szükség, családi ház vagy vállalkozás), és díjmentesen felmérjük az ingatlant Székesfehérváron.
                  </p>
                  <div className="p-5 bg-white rounded-xl border border-line space-y-2">
                    <p className="font-body text-sm text-ink/80">
                      <strong>Telefonszám:</strong> +36 70 273 5532
                    </p>
                    <p className="font-body text-sm text-ink/80">
                      <strong>E-mail:</strong> szia@kamerafehervar.hu
                    </p>
                    <p className="font-body text-xs text-ink/60 pt-2">
                      SIROTECH Kft. (Székesfehérvár)
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
