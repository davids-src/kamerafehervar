import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SiteShell } from '@/components/SiteShell';
import { SystemDiagram } from '@/components/SystemDiagram';
import { CtaLink } from '@/components/CtaLink';

export const metadata: Metadata = {
  title: 'Kamerarendszer Székesfehérváron | Kamera Fehérvár',
  description:
    'Kamerarendszer tervezés, telepítés, bővítés és javítás Székesfehérváron. Családi ház, nyaraló, üzlet és telephely.',
  alternates: { canonical: '/' },
};

const benefits = [
  {
    title: 'Távoli rálátás',
    text: 'A rendszer és az internetkapcsolat képességeitől függően telefonról vagy számítógépről is ellenőrizhető a kamerakép.',
  },
  {
    title: 'Visszakereshető események',
    text: 'A rögzített felvétel a megfelelő jogosultsággal és a rendszer beállításai szerint visszakereshető.',
  },
  {
    title: 'Éjszakai megfigyelés',
    text: 'A megfelelő kamerával és elhelyezéssel gyenge fényviszonyok között is használható képet lehet elérni.',
  },
  {
    title: 'Látható védelmi eszköz',
    text: 'A kamera jelenléte visszatartó hatású lehet, de bűncselekmény megelőzésére vagy megakadályozására nem adható garancia.',
  },
];

const useCases = [
  {
    title: 'Családi ház',
    text: 'Bejárat, kapu, udvar vagy más indokolt terület megfigyelése a helyszín adottságai szerint.',
    href: '/csaladi-haz-nyaralo',
  },
  {
    title: 'Nyaraló',
    text: 'Távol lévő ingatlan ellenőrzése, amennyiben a hálózati és rendszerfeltételek adottak.',
    href: '/csaladi-haz-nyaralo',
  },
  {
    title: 'Üzlet',
    text: 'Bejárat, vásárlótér vagy üzemi terület kamerás megfigyelése a jogszerű használat feltételeinek figyelembevételével.',
    href: '/uzlet-telephely',
  },
  {
    title: 'Telephely',
    text: 'Kültéri és beltéri területek kamerás lefedése az adott helyszínhez igazítva.',
    href: '/uzlet-telephely',
  },
];

const services = [
  {
    title: 'Tervezés',
    text: 'A kamerák helyét, látómezőjét, rögzítési igényét és a hálózati feltételeket a helyszín alapján tervezzük meg.',
    href: '/kamerarendszer-tervezes',
  },
  {
    title: 'Kivitelezés',
    text: 'Kábelezés, kamera és rögzítő telepítése, hálózati beállítás, próba és átadás.',
    href: '/kamerarendszer-telepites',
  },
  {
    title: 'Javítás',
    text: 'Nincs kép, hibás kamera, rögzítési vagy elérési probléma esetén először azonosítjuk a rendszert és a hiba körét.',
    href: '/kamerarendszer-javitas',
  },
  {
    title: 'Bővítés',
    text: 'Új kamera vagy rögzítési kapacitás hozzáadása előtt ellenőrizzük a meglévő rendszer kompatibilitását.',
    href: '/kamerarendszer-javitas',
  },
  {
    title: 'Karbantartás',
    text: 'A rendszer állapotának, képének, rögzítésének és szükséges beállításainak egyeztetett ellenőrzése.',
    href: '/kapcsolat?tipus=karbantartas',
  },
];

export default function HomePage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-mist via-white to-mist">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#0E2238 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="relative max-w-content mx-auto px-4 sm:px-6 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="animate-rise">
            <p className="text-sm font-semibold text-accent mb-3 tracking-wide">Kamera Fehérvár</p>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-navy leading-tight mb-5">
              Kamerarendszer Székesfehérváron – tervezés, telepítés és javítás.
            </h1>
            <p className="text-base sm:text-lg text-muted leading-relaxed mb-8 max-w-xl">
              Családi házhoz, nyaralóhoz, üzlethez vagy telephelyhez. Új rendszert építünk, meglévőt bővítünk, és
              hibával is kereshet.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <CtaLink
                href="/kapcsolat?tipus=uj"
                location="hero"
                label="Ajánlatot kérek"
                className="inline-flex justify-center items-center bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-lg font-semibold transition-colors"
              >
                Ajánlatot kérek
              </CtaLink>
              <CtaLink
                href="/kapcsolat?tipus=javitas"
                location="hero"
                label="Kamerát javíttatnék"
                className="inline-flex justify-center items-center border border-navy/20 text-navy hover:border-accent hover:text-accent px-6 py-3.5 rounded-lg font-semibold transition-colors bg-white"
              >
                Kamerát javíttatnék
              </CtaLink>
            </div>
          </div>
          <div
            className="relative aspect-[4/3] rounded-2xl border border-line overflow-hidden animate-rise bg-mist"
            style={{ animationDelay: '0.12s' }}
          >
            <Image
              src="/kep_kezdolapra.png"
              alt="Kamerarendszer tervezés és telepítés – kamera, kábelezés és rögzítés"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 540px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Intent split */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-10">
            Új rendszer vagy meglévővel van probléma?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-mist rounded-2xl border border-line">
              <h3 className="text-xl font-bold text-navy mb-3">Új kamerarendszer</h3>
              <p className="text-muted leading-relaxed mb-6">
                Tervezés, eszközválasztás, kábelezés, telepítés, rögzítés és átadás.
              </p>
              <CtaLink
                href="/kapcsolat?tipus=uj"
                location="intent_split"
                label="Új rendszert szeretnék"
                className="inline-flex text-accent hover:text-accent-hover font-semibold"
              >
                Új rendszert szeretnék →
              </CtaLink>
            </div>
            <div className="p-8 bg-mist rounded-2xl border border-line">
              <h3 className="text-xl font-bold text-navy mb-3">Meglévő kamerarendszer</h3>
              <p className="text-muted leading-relaxed mb-6">
                Nincs kép, hibás egy kamera, nem működik a rögzítés, távoli elérés vagy bővíteni szeretné a rendszert.
              </p>
              <CtaLink
                href="/kapcsolat?tipus=javitas"
                location="intent_split"
                label="Javítást / bővítést kérek"
                className="inline-flex text-accent hover:text-accent-hover font-semibold"
              >
                Javítást / bővítést kérek →
              </CtaLink>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20 bg-mist">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-10 max-w-2xl mx-auto">
            Mire használható egy jól megtervezett kamerarendszer?
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-xl border border-line">
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-10">Hova kerülhet?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {useCases.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="block p-5 border border-line rounded-xl hover:border-accent/40 transition-colors"
              >
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20 bg-mist">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-10">
            A teljes kamerás feladattal kereshet.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="block bg-white p-6 rounded-xl border border-line hover:border-accent/40 transition-colors"
              >
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-5">
            Ésszerűen méretezett rendszer, felesleges eszközök nélkül.
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            Nem előre csomagolt kameradarabszámból indulunk ki. Az ajánlat alapja a megfigyelni kívánt terület, a
            képigény, a rögzítés, a kábelezés és a helyszín.
          </p>
          <p className="text-sm text-muted leading-relaxed">
            Az ajánlatban az eszközök és a kivitelezés legyen egyértelműen követhető.
          </p>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-14 bg-navy text-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Márkák, amelyekkel dolgozunk.</h2>
          <p className="text-white/80 leading-relaxed max-w-2xl mx-auto">
            Hikvision · Dahua · VideoSec. Meglévő rendszer javításánál először azonosítjuk a pontos típust és a
            kompatibilitást.
          </p>
        </div>
      </section>

      {/* Diagram */}
      <section className="py-16 sm:py-20 bg-mist">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-10">
            Egy tipikus kamerarendszer felépítése.
          </h2>
          <div className="bg-white rounded-2xl border border-line p-6 sm:p-10">
            <SystemDiagram />
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-5">
            A kamera használatának jogszerűsége is számít.
          </h2>
          <p className="text-muted leading-relaxed">
            A megfigyelt terület, a tájékoztatás, a felvételek kezelése és a hozzáférés adatvédelmi kérdés lehet. A
            rendszer telepítése önmagában nem jelent jogi megfelelőségi garanciát; összetett esetben adatvédelmi vagy
            jogi szakértő bevonása indokolt.
          </p>
          </div>
        </div>
      </section>

      {/* SIROTECH badge */}
      <section className="py-8 bg-mist border-y border-line">
        <div className="max-w-content mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs text-muted">
            A Kamera Fehérvár szolgáltatást a <span className="font-semibold text-navy">SIROTECH Kft.</span> nyújtja.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-navy text-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Új kamerarendszer vagy javítás?</h2>
          <p className="text-white/75 mb-8 max-w-xl mx-auto">
            Adja meg a helyszínt, az ingatlan típusát és röviden, mire van szüksége.
          </p>
          <CtaLink
            href="/kapcsolat"
            location="final_cta"
            label="Ajánlatkérés"
            className="inline-flex bg-accent hover:bg-accent-hover text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
          >
            Ajánlatkérés
          </CtaLink>
        </div>
      </section>
    </SiteShell>
  );
}
