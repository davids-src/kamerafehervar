import { Reveal } from '@/components/Reveal';
import { MobileCallBar } from '@/components/MobileCallBar';
import {
  PhoneIcon,
  CheckIcon,
  ArrowRightIcon,
  WrenchIcon,
  ShieldIcon,
  ClipboardIcon,
  MapPinIcon,
  CameraIcon,
  StoreIcon,
  HomeIcon,
  MailIcon,
} from '@/components/icons';
import { ContactForm } from '@/components/ContactForm';

const PHONE = '+36 70 273 5532';
const PHONE_HREF = 'tel:+36702735532';

const trustItems = [
  {
    icon: WrenchIcon,
    title: 'Meglévő rendszert is javítunk',
    body: 'Nem csak új kamerát telepítünk — a régebbi, analóg rendszerét is megjavítjuk vagy bővítjük.',
  },
  {
    icon: ClipboardIcon,
    title: 'Előre tudja, mire számíthat',
    body: 'A helyszíni felmérés után pontos árajánlatot adunk, mielőtt bármi elkezdődik.',
  },
  {
    icon: CheckIcon,
    title: 'Számlát adunk',
    body: 'Minden munkáról, magánszemélynek és cégnek egyaránt.',
  },
  {
    icon: MapPinIcon,
    title: 'Helybeli vagyunk',
    body: 'Fehérvárról indulunk, nem egy távoli call centerből.',
  },
];

const whenToCallItems = [
  'Nincs kamera az üzletben, de kellene.',
  'A meglévő kamerarendszer nem rögzít, vagy elromlott.',
  'Bővíteni kéne pár kamerával a meglévő rendszert.',
  'A régi, analóg rendszert szeretné korszerűsíteni.',
  'Nem éri el telefonról a kamerák képét.',
  'Betörés után szeretne kamerát felszereltetni.',
  'Riasztóval együtt kamerát is szeretne.',
  'Nem tudja, hány kamera kellene, csak hogy biztonságban legyen.',
];

const businessItems = [
  'Bejáratok és raktár megfigyelése',
  'Pénztár és eladótér lefedése',
  'Éjszakai, gyenge fényű megfigyelés',
  'Telefonos, távoli rálátás a kamerákra',
  'Meglévő rendszer bővítése új kamerákkal',
  'Riasztóval kombinált védelem',
];

const residentialItems = [
  'Bejárat és kert megfigyelése',
  'Csengő- és bejáratkamera',
  'Meglévő rendszer javítása vagy bővítése',
  'Telefonos rálátás otthonról távol is',
];

const packages = [
  {
    name: 'Kicsi',
    range: '2–4 kamera',
    goodFor: 'Egy bejárat, egy kisebb üzlethelyiség vagy családi ház.',
  },
  {
    name: 'Közepes',
    range: '4–8 kamera',
    goodFor: 'Több bejárat, teljes ingatlan lefedése, nagyobb üzlet vagy telephely.',
  },
  {
    name: 'Nagy',
    range: '8+ kamera',
    goodFor: 'Több épület, nagyobb telephely, riasztóval vagy beléptetéssel kombinálva.',
  },
];

const processSteps = [
  {
    title: 'Felhívja, elmondja, mire lenne szüksége',
    body: 'Ha van már elképzelése a kamerák számáról, elég annyi, ha nincs, azt is átbeszéljük.',
  },
  {
    title: 'Ingyenes helyszíni felmérés',
    body: 'Megnézzük az ingatlant, és pontos árajánlatot adunk, mielőtt bármi elkezdődik.',
  },
  {
    title: 'Kiépítjük vagy javítjuk',
    body: 'A munka végén bemutatjuk, hogyan éri el a kamerák képét, és számlát adunk.',
  },
];

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-line">
        <div className="max-w-content mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <span className="font-display font-extrabold text-lg sm:text-xl text-navy tracking-tight">
            Kamera Fehérvár
          </span>
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href={PHONE_HREF}
              className="hidden sm:inline-flex items-center gap-2 font-body font-medium text-navy hover:text-accent transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              {PHONE}
            </a>
            <a
              href="#kapcsolat"
              className="inline-flex items-center bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-lg font-display font-bold text-sm transition-colors"
            >
              Visszahívást kérek
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />
        <div className="max-w-content mx-auto px-4 sm:px-6 py-16 sm:py-24 relative">
          <Reveal>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight max-w-3xl">
              Biztonsági kamerát szereltetne, vagy javítana egy meglévőt?
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
              Kiépítünk új kamerarendszert, javítjuk vagy bővítjük a meglévőt — Székesfehérváron és Fejér vármegyében, boltoknak, telephelyeknek, irodáknak és otthonra.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-lg font-display font-bold text-base transition-colors"
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
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
              <span className="flex items-center gap-1.5"><CheckIcon className="w-4 h-4 text-accent" /> Székesfehérvár és Fejér vármegye</span>
              <span className="flex items-center gap-1.5"><CheckIcon className="w-4 h-4 text-accent" /> Analóg és IP kamerarendszerekhez egyaránt</span>
              <span className="flex items-center gap-1.5"><CheckIcon className="w-4 h-4 text-accent" /> Ingyenes helyszíni felmérés</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust strip */}
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

      {/* When to call */}
      <section className="py-16 sm:py-24">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy text-center mb-12">
              Ilyenekkel szoktak hívni minket
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {whenToCallItems.map((item, i) => (
              <Reveal key={item} delay={(i % 2) * 100} as="div">
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
              Ha az Öné nincs a listán, akkor is hívjon.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Who we serve */}
      <section className="bg-navy-deep text-white py-16 sm:py-24">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-12">
              Kinek dolgozunk
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Reveal>
              <div className="bg-white/5 rounded-xl p-7 border border-white/10 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-10 h-10 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                    <StoreIcon className="w-5 h-5" />
                  </span>
                  <h3 className="font-display font-bold text-lg">Boltnak, telephelynek, irodának</h3>
                </div>
                <ul className="space-y-3">
                  {businessItems.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/85">
                      <CheckIcon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="bg-white/5 rounded-xl p-7 border border-white/10 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-10 h-10 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                    <HomeIcon className="w-5 h-5" />
                  </span>
                  <h3 className="font-display font-bold text-lg">Otthonra</h3>
                </div>
                <ul className="space-y-3">
                  {residentialItems.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/85">
                      <CheckIcon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 sm:py-24 bg-mist">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy text-center mb-4">
              Csomagok
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-center font-body text-ink/70 text-base max-w-2xl mx-auto mb-10">
              Három nagyságrend, az eszközök számától függően — a pontos elrendezést mindig a helyszíni felmérés után határozzuk meg.
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
                Fix árat itt sem közlünk: az ingatlan adottságai (kábelezés hossza, falak, kamerák száma és típusa) minden esetben mást jelentenek. A helyszíni felmérés ingyenes, utána pontos árajánlatot adunk.
              </p>
              <a
                href="#kapcsolat"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-lg font-display font-bold text-base transition-colors"
              >
                Kérek ingyenes felmérést
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
              Hogyan zajlik
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 100}>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-navy text-white font-display font-extrabold text-base flex items-center justify-center">
                      {i + 1}
                    </span>
                    {i < processSteps.length - 1 && (
                      <span className="hidden md:block h-px flex-grow bg-line" />
                    )}
                  </div>
                  <h3 className="font-display font-bold text-base text-ink mb-2">{step.title}</h3>
                  <p className="font-body text-sm text-ink/70 leading-relaxed">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kapcsolat" className="bg-mist py-16 sm:py-24 scroll-mt-20">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <Reveal>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mb-4">
                  Hívjon, vagy kérje, hogy mi hívjuk vissza
                </h2>
                <p className="font-body text-base text-ink/70 leading-relaxed mb-8">
                  Ha épp nem tud beszélni, írja ide a számát. Általában egy órán belül visszahívjuk.
                </p>
                <div className="space-y-4">
                  <a href={PHONE_HREF} className="flex items-center gap-3 group">
                    <span className="w-10 h-10 rounded-lg bg-navy text-white flex items-center justify-center">
                      <PhoneIcon className="w-5 h-5" />
                    </span>
                    <span className="font-display font-bold text-lg text-navy group-hover:text-accent transition-colors">
                      {PHONE}
                    </span>
                  </a>
                  <a href="mailto:szia@kamerafehervar.hu" className="flex items-center gap-3 group">
                    <span className="w-10 h-10 rounded-lg bg-navy text-white flex items-center justify-center">
                      <MailIcon className="w-5 h-5" />
                    </span>
                    <span className="font-display font-bold text-lg text-navy group-hover:text-accent transition-colors">
                      szia@kamerafehervar.hu
                    </span>
                  </a>
                </div>
                <div className="mt-8 flex items-start gap-3 p-4 bg-white rounded-lg border border-line/60">
                  <MapPinIcon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="font-body text-sm text-ink/70">
                    Székesfehérvár és Fejér vármegye
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

      {/* Footer */}
      <footer className="bg-navy-deep text-white py-10 pb-20 md:pb-10">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="space-y-2">
              <span className="font-display font-extrabold text-lg">Kamera Fehérvár</span>
              <p className="font-body text-sm text-white/60">{PHONE}</p>
              <p className="font-body text-sm text-white/60">szia@kamerafehervar.hu</p>
              <p className="font-body text-sm text-white/60">Székesfehérvár és Fejér vármegye</p>
            </div>
            <div className="flex flex-col gap-2">
              <a href="/aszf" className="font-body text-sm text-white/70 hover:text-accent transition-colors">
                ÁSZF
              </a>
              <a href="/adatkezeles" className="font-body text-sm text-white/70 hover:text-accent transition-colors">
                Adatkezelési tájékoztató
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="font-body text-xs text-white/50 leading-relaxed">
              A Kamera Fehérvárt a SIROTECH Kft. üzemelteti. Székhely: 8000 Székesfehérvár, Lövölde utca 24. 4/15. Adószám: 33056151-2-07. Cégjegyzékszám: Cg. 07-09-037603.
            </p>
          </div>
        </div>
      </footer>

      <MobileCallBar />
    </>
  );
}
