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
  WrenchIcon,
  CheckIcon,
  PhoneIcon,
  ArrowRightIcon,
  MapPinIcon,
  ClipboardIcon,
} from '@/components/icons';

const route = getRouteByPath('/kamerarendszer-javitas-szekesfehervar')!;

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
    name: 'Kamerarendszer javítás Székesfehérváron',
    serviceType: 'Biztonságtechnikai javítás és szerviz',
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

const commonFaults = [
  {
    title: 'Sötét a kép vagy nincs jel',
    desc: 'Kábelszakadás, csatlakozó oxidáció vagy tápegység meghibásodás miatt elment a kamerakép.',
  },
  {
    title: 'Nem rögzít a DVR / NVR egység',
    desc: 'Merevlemez (HDD) elhasználódás, szektorhiba vagy szoftveres rögzítési hiba.',
  },
  {
    title: 'Megszűnt a telefonos elérés',
    desc: 'Router csere, IP cím változás vagy hálózati port konfiguráció elvesztése.',
  },
  {
    title: 'Éjszakai infravörös (IR) hiba',
    desc: 'Kiégett IR LED-ek, homályos éjszakai kép vagy hibás fényérzékelő szenzor.',
  },
];

export default function JavitasLanding() {
  return (
    <div className="min-h-screen bg-paper flex flex-col font-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-grow">
        {/* Top Breadcrumb */}
        <section className="bg-mist py-4 border-b border-line">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <Breadcrumb items={[{ name: 'Kamerarendszer javítás', url: route.path }]} />
          </div>
        </section>

        {/* Hero */}
        <section className="bg-navy text-white py-14 sm:py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 30% 70%, white 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div className="max-w-content mx-auto px-4 sm:px-6 relative z-10">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-wider mb-4">
                <WrenchIcon className="w-3.5 h-3.5 text-accent" />
                Gyorsszerviz Székesfehérvár
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl">
                Kamerarendszer Javítás & Szerviz Székesfehérváron
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-4 text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed">
                Nem működik a rögzítő? Eltűnt a kép a telefonjáról? Régebbi vagy ismeretlen telepítésű kamerarendszerek hibaelhárítását és szervizelését is vállaljuk Székesfehérváron és Fejér vármegyében.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+36702735532"
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-lg font-display font-bold text-base transition-colors shadow-sm"
                >
                  <PhoneIcon className="w-5 h-5" />
                  Azonnali segítség: +36 70 273 5532
                </a>
                <a
                  href="#kapcsolat"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-lg font-display font-bold text-base transition-colors"
                >
                  Hibajelentés küldése
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Section 1: Leggyakoribb hibák */}
        <section className="py-16 sm:py-20 border-b border-line">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-bold font-display uppercase tracking-wider text-accent">
                  Tapasztalt szakemberek
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                  Milyen kamerahibákat javítunk Székesfehérváron?
                </h2>
                <p className="font-body text-sm sm:text-base text-ink/70 mt-2">
                  Akár analóg (AHD, TVI, CVI), akár modern IP kamerarendszere van, szakértőink felderítik a hiba okát.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {commonFaults.map((fault, i) => (
                <Reveal key={fault.title} delay={i * 80}>
                  <div className="bg-mist/60 p-6 rounded-xl border border-line/60 flex items-start gap-4">
                    <span className="w-10 h-10 rounded-lg bg-navy/10 text-navy flex-shrink-0 flex items-center justify-center font-bold">
                      !
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-base text-navy mb-1">
                        {fault.title}
                      </h3>
                      <p className="font-body text-sm text-ink/70 leading-relaxed">
                        {fault.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Linking: Javítás -> Bővítés + Korszerűsítés */}
        <section className="py-16 bg-navy-deep text-white">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <Reveal>
                <div className="space-y-4">
                  <span className="text-xs font-bold font-display uppercase tracking-wider text-accent">
                    Érdemes javítani vagy jobb bővíteni?
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Javítás vagy Korszerűsítés? Segítünk dönteni!
                  </h2>
                  <p className="font-body text-base text-white/85 leading-relaxed">
                    Sok esetben a régi analóg rögzítő vagy elavult kamera cseréje gazdaságosabb, mint a folyamatos javítgatás. A meglévő jó minőségű kábelezés felhasználásával minimális bontással korszerűsíthető a rendszer.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/kamerarendszer-bovites"
                      className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-5 py-3 rounded-lg font-display font-bold text-sm transition-colors"
                    >
                      Bővítés & korszerűsítés részletei
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="bg-white/5 p-7 rounded-2xl border border-white/10 space-y-4">
                  <h3 className="font-display font-bold text-lg text-white">
                    Garanciális javítási garanciánk:
                  </h3>
                  <ul className="space-y-3 font-body text-sm text-white/80">
                    <li className="flex items-start gap-2.5">
                      <CheckIcon className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span><strong>Előzetes bevizsgálás:</strong> Helyszínen teszteljük az alkatrészeket, mielőtt cserealkatrészt javaslunk.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckIcon className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span><strong>Gyári alkatrészek:</strong> Megbízható márkák (Hikvision, Dahua stb.) gyári tartozékaival dolgozunk.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckIcon className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span><strong>Hivatalos cég háttér:</strong> A munkákról a SIROTECH Kft. állítja ki a számlát.</span>
                    </li>
                  </ul>
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

        {/* Contact section */}
        <section id="kapcsolat" className="bg-mist py-16 scroll-mt-20">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <Reveal>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mb-4">
                    Jelezze a kamerahibát Székesfehérváron!
                  </h2>
                  <p className="font-body text-base text-ink/70 leading-relaxed mb-6">
                    Írja le röviden a jelenséget (pl.: nem rögzít, fekete a képernyő), és visszahívjuk a szervizidőpont egyeztetéséhez.
                  </p>
                  <div className="p-5 bg-white rounded-xl border border-line space-y-2">
                    <p className="font-body text-sm text-ink/80">
                      <strong>Ügyeleti telefonszám:</strong> +36 70 273 5532
                    </p>
                    <p className="font-body text-sm text-ink/80">
                      <strong>E-mail:</strong> szia@kamerafehervar.hu
                    </p>
                    <p className="font-body text-xs text-ink/60 pt-2">
                      Jogi szolgáltató: SIROTECH Kft. (Székesfehérvár)
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <ContactForm defaultRequestType="Javítás" />
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
