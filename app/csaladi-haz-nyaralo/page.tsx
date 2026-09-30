import type { Metadata } from 'next';
import { SiteShell } from '@/components/SiteShell';
import { CtaLink } from '@/components/CtaLink';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Kamera családi házra és nyaralóra | Kamera Fehérvár',
  description:
    'Kamerarendszer családi házhoz és nyaralóhoz Székesfehérváron: bejárat, kapu, udvar; távoli ellenőrzés a hálózati feltételek szerint.',
  alternates: { canonical: '/csaladi-haz-nyaralo' },
};

export default function CsaladiHazPage() {
  return (
    <SiteShell>
      <section className="bg-mist py-4 border-b border-line">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ name: 'Családi ház / nyaraló', url: '/csaladi-haz-nyaralo' }]} />
        </div>
      </section>

      <section className="max-w-content mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-5">Családi ház és nyaraló</h1>
        <p className="text-lg text-muted leading-relaxed mb-10 max-w-2xl">
          Családi házhoz, nyaralóhoz. Új rendszert építünk, meglévőt bővítünk, és hibával is kereshet.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-12 max-w-3xl">
          <div className="p-6 bg-mist rounded-xl border border-line">
            <h2 className="font-bold text-navy mb-2">Családi ház</h2>
            <p className="text-sm text-muted leading-relaxed">
              Bejárat, kapu, udvar vagy más indokolt terület megfigyelése a helyszín adottságai szerint.
            </p>
          </div>
          <div className="p-6 bg-mist rounded-xl border border-line">
            <h2 className="font-bold text-navy mb-2">Nyaraló</h2>
            <p className="text-sm text-muted leading-relaxed">
              Távol lévő ingatlan ellenőrzése, amennyiben a hálózati és rendszerfeltételek adottak.
            </p>
          </div>
        </div>

        <div className="space-y-6 max-w-2xl mb-12">
          <div>
            <h2 className="text-lg font-bold text-navy mb-2">Távoli rálátás</h2>
            <p className="text-muted leading-relaxed text-sm">
              A rendszer és az internetkapcsolat képességeitől függően telefonról vagy számítógépről is ellenőrizhető a
              kamerakép.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-navy mb-2">Látható védelmi eszköz</h2>
            <p className="text-muted leading-relaxed text-sm">
              A kamera jelenléte visszatartó hatású lehet, de bűncselekmény megelőzésére vagy megakadályozására nem
              adható garancia.
            </p>
          </div>
        </div>

        <CtaLink
          href="/kapcsolat?tipus=uj"
          location="csaladi_haz"
          label="Ajánlatot kérek"
          className="inline-flex bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-lg font-semibold transition-colors"
        >
          Ajánlatot kérek
        </CtaLink>
      </section>
    </SiteShell>
  );
}
