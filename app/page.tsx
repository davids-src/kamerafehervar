import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MobileCallBar } from '@/components/MobileCallBar';
import { Reveal } from '@/components/Reveal';
import { CrossSellSection } from '@/components/CrossSellSection';
import { ContactForm } from '@/components/ContactForm';
import {
  PhoneIcon,
  CheckIcon,
  ArrowRightIcon,
  WrenchIcon,
  ClipboardIcon,
  MapPinIcon,
  CameraIcon,
  StoreIcon,
  HomeIcon,
  MailIcon,
  ShieldIcon,
} from '@/components/icons';

const PHONE = '+36 70 273 5532';
const PHONE_HREF = 'tel:+36702735532';

export const metadata: Metadata = {
  title: 'Kamerarendszer telepítés és javítás Székesfehérváron | Kamera Fehérvár',
  description:
    'Kamerarendszer telepítés, javítás, bővítés és korszerűsítés Székesfehérváron és Fejér vármegyében. Cégeknek és otthonra, IP és analóg rendszerekhez.',
  alternates: { canonical: '/' },
};

const trustItems = [
  {
    icon: WrenchIcon,
    title: 'Meglévő rendszert is javítunk',
    body: 'Nem csak új kamerát telepítünk — a régebbi, analóg vagy elromlott rendszereket is megjavítjuk, bővítjük.',
  },
  {
    icon: ClipboardIcon,
    title: 'Előre tudja, mire számíthat',
    body: 'A helyszíni felmérés után pontos és átlátható árajánlatot adunk, rejtett költségek nélkül.',
  },
  {
    icon: CheckIcon,
    title: 'Hivatalos számlával & Garanciával',
    body: 'Minden munkáról számlát állítunk ki, magánszemélyeknek és vállalkozásoknak egyaránt.',
  },
  {
    icon: MapPinIcon,
    title: 'Helyi székesfehérvári csapat',
    body: 'Székesfehérvárról indulunk, gyorsan kiérkezünk a helyszínre Fejér vármegye egész területén.',
  },
];

const whenToCallItems = [
  'Nincs kamera az üzletben, irodában vagy a háznál, de kellene.',
  'A meglévő kamerarendszer nem rögzít, sötét a kép vagy elromlott.',
  'Bővíteni kéne újabb kamerákkal a jelenlegi rendszert.',
  'A régi analóg kamerákat korszerűsítené nagy felbontású IP kamerákra.',
  'Okostelefonról szeretné látni az élő képet és a visszajátszást távolról is.',
  'Sajnálatos betörés vagy rongálás után szeretne azonnali védelmet.',
  'Riasztóval és beléptetővel kombinált vagyonvédelmet keres.',
  'Bizonytalan a kamerák számában és elhelyezésében, szakértő tanácsot kér.',
];

const serviceLandingCards = [
  {
    title: 'Kamerarendszer Telepítés',
    desc: 'Új IP és analóg kamerarendszerek szakszerű kiépítése Székesfehérváron és Fejér vármegyében.',
    href: '/kamerarendszer-telepites-szekesfehervar',
    badge: 'Legnépszerűbb',
  },
  {
    title: 'Kamerarendszer Javítás',
    desc: 'Gyors hibaelhárítás, rögzítő javítás, kábelcsere és tápegység pótlás meglévő rendszereknél.',
    href: '/kamerarendszer-javitas-szekesfehervar',
    badge: 'Gyorsszerviz',
  },
  {
    title: 'IP Kamerarendszer',
    desc: 'Ultra HD 4K felbontás, éjszakai színes látás, mobiltelefonos elérés és MI mozgásérzékelés.',
    href: '/ip-kamerarendszer',
    badge: 'Modern tech',
  },
  {
    title: 'Üzleti Kamerarendszer',
    desc: 'Ipari megfigyelés üzleteknek, raktáraknak, irodáknak és telephelyeknek Fejér vármegyében.',
    href: '/uzleti-kamerarendszer',
    badge: 'B2B megoldás',
  },
  {
    title: 'Otthoni Kamerarendszer',
    desc: 'Családi házak, kert, bejárat és garázs teljes körű védelme távoli eléréssel.',
    href: '/otthoni-kamerarendszer',
    badge: 'Családi ház',
  },
  {
    title: 'Bővítés & Korszerűsítés',
    desc: 'Meglévő rendszer kiegészítése extra kamerákkal vagy analóg hálózat felújítása.',
    href: '/kamerarendszer-bovites',
    badge: 'Rendszerfrissítés',
  },
  {
    title: 'Riasztó & Beléptetés',
    desc: 'Ajax és Paradox riasztók, beléptetők, kaputelefonok szakszerű telepítése kamerával.',
    href: '/riaszto-es-beleptetes',
    badge: 'Komplex védelem',
  },
];

const packages = [
  {
    name: 'Kicsi csomag',
    range: '2–4 kamera',
    goodFor: 'Egy bejárat, kisebb üzlethelyiség vagy családi ház kiemelt pontjai.',
  },
  {
    name: 'Közepes csomag',
    range: '4–8 kamera',
    goodFor: 'Több bejárat, teljes ingatlan lefedése, nagyobb üzlet vagy telephely.',
  },
  {
    name: 'Nagy csomag',
    range: '8+ kamera',
    goodFor: 'Összetett telephelyek, több épület, riasztóval és beléptetővel kombinálva.',
  },
];

const processSteps = [
  {
    title: '1. Kapcsolatfelvétel & Igényfelmérés',
    body: 'Hívjon minket vagy töltse ki az űrlapot! Elmondja elképzeléseit, mi pedig átbeszéljük a lehetőségeket.',
  },
  {
    title: '2. Ingyenes Székesfehérvári Helyszíni Felmérés',
    body: 'Személyesen felmérjük az ingatlan adottságait, a kábelezési útvonalat, majd pontos árajánlatot adunk.',
  },
  {
    title: '3. Szakszerű Kivitelezés & Beállítás',
    body: 'Felszereljük a kamerákat, beállítjuk a telefonos alkalmazást, betanítjuk a használatot és átadjuk a garanciális dokumentumokat.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-paper flex flex-col font-body">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-navy text-white relative overflow-hidden py-16 sm:py-24">
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          <div className="max-w-content mx-auto px-4 sm:px-6 relative z-10">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-wider mb-6">
                <MapPinIcon className="w-4 h-4 text-accent" />
                Székesfehérvár & Fejér vármegye
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight max-w-3xl tracking-tight">
                Biztonsági kamerát szereltetne, vagy javítana egy meglévőt?
              </h1>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-5 text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl">
                Kiépítünk új biztonsági kamerarendszert, javítjuk vagy bővítjük a meglévőt — Székesfehérváron és Fejér vármegyében, üzleteknek, telephelyeknek, irodáknak és családi házaknak.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-lg font-display font-bold text-base transition-colors shadow-md"
                >
                  <PhoneIcon className="w-5 h-5" />
                  Hívás: {PHONE}
                </a>
                <a
                  href="#kapcsolat"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-lg font-display font-bold text-base transition-colors"
                >
                  Kérek visszahívást
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-white/75">
                <span className="flex items-center gap-1.5">
                  <CheckIcon className="w-4 h-4 text-accent" /> Székesfehérvár & Fejér vármegye
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckIcon className="w-4 h-4 text-accent" /> IP és Analóg kamerarendszerek
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckIcon className="w-4 h-4 text-accent" /> Ingyenes helyszíni felmérés
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SEO Landing Pages Internal Linking Hub */}
        <section className="py-16 sm:py-20 bg-paper border-b border-line">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-bold font-display uppercase tracking-wider text-accent mb-2 block">
                  Szakterületeink
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                  Biztonságtechnikai szolgáltatásaink Székesfehérváron
                </h2>
                <p className="font-body text-sm sm:text-base text-ink/70 mt-3">
                  Válassza ki az Ön számára releváns területet a részletes tájékoztatóért:
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {serviceLandingCards.map((card, i) => (
                <Reveal key={card.href} delay={i * 60}>
                  <Link
                    href={card.href}
                    className="group bg-white rounded-xl p-6 border border-line shadow-sm hover:shadow-md hover:border-accent/40 transition-all flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-mist text-navy font-display font-semibold text-xs">
                          {card.badge}
                        </span>
                        <ArrowRightIcon className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-navy group-hover:text-accent transition-colors mb-2">
                        {card.title}
                      </h3>
                      <p className="font-body text-sm text-ink/70 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-line/50 text-xs font-semibold text-accent flex items-center gap-1">
                      Tovább a részletekre &rarr;
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Strip */}
        <section className="bg-mist py-12 sm:py-16">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {trustItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={i * 100}>
                    <div className="bg-white rounded-xl p-6 h-full border border-line/60 shadow-sm">
                      <div className="w-11 h-11 rounded-lg bg-navy/10 text-navy flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-display font-bold text-base text-ink mb-2">{item.title}</h3>
                      <p className="font-body text-sm text-ink/70 leading-relaxed">{item.body}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* When to Call */}
        <section className="py-16 sm:py-24">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy text-center mb-12">
                Ilyen feladatokkal szoktak hívni minket Székesfehérváron
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-3xl mx-auto">
              {whenToCallItems.map((item, i) => (
                <Reveal key={item} delay={(i % 2) * 80} as="div">
                  <div className="flex items-start gap-3 bg-mist/60 rounded-lg p-4 border border-line/50">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/15 text-accent flex items-center justify-center mt-0.5">
                      <CheckIcon className="w-3.5 h-3.5" />
                    </span>
                    <span className="font-body text-sm sm:text-base text-ink">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}>
              <p className="text-center mt-8 font-body text-ink/70 text-base">
                Ha az Ön feladata nem szerepel a listán, lépjen kapcsolatba velünk, és megoldjuk!
              </p>
            </Reveal>
          </div>
        </section>

        {/* Cross Sell Section */}
        <section className="py-8">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <CrossSellSection />
          </div>
        </section>

        {/* Packages */}
        <section className="py-16 sm:py-24 bg-mist">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy text-center mb-4">
                Kamerarendszer kiépítési csomagok
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-center font-body text-ink/70 text-base max-w-2xl mx-auto mb-10">
                A kiépítés nagyságrendje az eszközök számától függ — a pontos elrendezést mindig a helyszíni felmérés során határozzuk meg.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {packages.map((pkg, i) => (
                <Reveal key={pkg.name} delay={i * 100}>
                  <div className="bg-white rounded-xl p-6 border border-line/60 shadow-sm h-full flex flex-col">
                    <div className="flex items-center gap-2.5 mb-4">
                      <CameraIcon className="w-5 h-5 text-accent" />
                      <h3 className="font-display font-bold text-lg text-navy">{pkg.name}</h3>
                    </div>
                    <div className="inline-block self-start bg-navy/8 text-navy px-3 py-1 rounded-full text-sm font-medium font-body mb-4">
                      {pkg.range}
                    </div>
                    <p className="font-body text-sm text-ink/70 leading-relaxed flex-grow">{pkg.goodFor}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={300}>
              <div className="text-center mt-10">
                <p className="font-body text-sm text-ink/60 max-w-2xl mx-auto mb-6 leading-relaxed">
                  Rejtett költségeket nem alkalmazunk. Az ingatlan adottságai (kábelezés hossza, faláttörések, kamerák típusa) egyediek, ezért a székesfehérvári felmérés ingyenes, utána adjuk meg a végleges fix ajánlatot.
                </p>
                <a
                  href="#kapcsolat"
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-lg font-display font-bold text-base transition-colors"
                >
                  Kérek ingyenes helyszíni felmérést
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 sm:py-24">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy text-center mb-12">
                Hogyan zajlik a közös munka?
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {processSteps.map((step, i) => (
                <Reveal key={step.title} delay={i * 100}>
                  <div className="relative bg-mist/40 p-6 rounded-xl border border-line/50 h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-navy text-white font-display font-extrabold text-base flex items-center justify-center">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-base text-ink mb-2">{step.title}</h3>
                    <p className="font-body text-sm text-ink/70 leading-relaxed">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="kapcsolat" className="bg-mist py-16 sm:py-24 scroll-mt-20">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              <Reveal>
                <div>
                  <span className="text-xs font-bold font-display uppercase tracking-wider text-accent mb-2 block">
                    Kapcsolatfelvétel
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mb-4">
                    Hívjon minket, vagy kérjen visszahívást
                  </h2>
                  <p className="font-body text-base text-ink/70 leading-relaxed mb-8">
                    Töltse ki az alábbi űrlapot az ingyenes helyszíni felméréshez vagy ajánlatkéréshez. Egy órán belül visszahívjuk!
                  </p>
                  <div className="space-y-4">
                    <a href={PHONE_HREF} className="flex items-center gap-3 group">
                      <span className="w-10 h-10 rounded-lg bg-navy text-white flex items-center justify-center">
                        <PhoneIcon className="w-5 h-5 text-accent" />
                      </span>
                      <span className="font-display font-bold text-lg text-navy group-hover:text-accent transition-colors">
                        {PHONE}
                      </span>
                    </a>
                    <a href="mailto:szia@kamerafehervar.hu" className="flex items-center gap-3 group">
                      <span className="w-10 h-10 rounded-lg bg-navy text-white flex items-center justify-center">
                        <MailIcon className="w-5 h-5 text-accent" />
                      </span>
                      <span className="font-display font-bold text-lg text-navy group-hover:text-accent transition-colors">
                        szia@kamerafehervar.hu
                      </span>
                    </a>
                  </div>
                  <div className="mt-8 flex items-start gap-3 p-4 bg-white rounded-lg border border-line/60 shadow-sm">
                    <MapPinIcon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="font-body text-sm text-ink/80">
                      <strong>Szolgáltatási terület:</strong> Székesfehérvár, Agárd, Gárdony, Velence, Mór, Polgárdi, Bicske, Sárbogárd és Fejér vármegye egész területe.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <ContactForm />
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
