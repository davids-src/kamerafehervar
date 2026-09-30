import type { Metadata } from 'next';
import { SiteShell } from '@/components/SiteShell';
import { CtaLink } from '@/components/CtaLink';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Kamerarendszer üzlethez és telephelyhez | Kamera Fehérvár',
  description:
    'Kamerás megfigyelés üzletbe és telephelyre Székesfehérváron — jogszerű használat feltételeinek figyelembevételével.',
  alternates: { canonical: '/uzlet-telephely' },
};

export default function UzletTelephelyPage() {
  return (
    <SiteShell>
      <section className="bg-mist py-4 border-b border-line">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ name: 'Üzlet / telephely', url: '/uzlet-telephely' }]} />
        </div>
      </section>

      <section className="max-w-content mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-5">Üzlet és telephely</h1>
        <p className="text-lg text-muted leading-relaxed mb-10 max-w-2xl">
          Üzlethez vagy telephelyhez. Új rendszert építünk, meglévőt bővítünk, és hibával is kereshet.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-12 max-w-3xl">
          <div className="p-6 bg-mist rounded-xl border border-line">
            <h2 className="font-bold text-navy mb-2">Üzlet</h2>
            <p className="text-sm text-muted leading-relaxed">
              Bejárat, vásárlótér vagy üzemi terület kamerás megfigyelése a jogszerű használat feltételeinek
              figyelembevételével.
            </p>
          </div>
          <div className="p-6 bg-mist rounded-xl border border-line">
            <h2 className="font-bold text-navy mb-2">Telephely</h2>
            <p className="text-sm text-muted leading-relaxed">
              Kültéri és beltéri területek kamerás lefedése az adott helyszínhez igazítva.
            </p>
          </div>
        </div>

        <div className="space-y-6 max-w-2xl mb-12">
          <div>
            <h2 className="text-lg font-bold text-navy mb-2">Visszakereshető események</h2>
            <p className="text-muted leading-relaxed text-sm">
              A rögzített felvétel a megfelelő jogosultsággal és a rendszer beállításai szerint visszakereshető.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-navy mb-2">A kamera használatának jogszerűsége is számít</h2>
            <p className="text-muted leading-relaxed text-sm">
              A megfigyelt terület, a tájékoztatás, a felvételek kezelése és a hozzáférés adatvédelmi kérdés lehet. A
              rendszer telepítése önmagában nem jelent jogi megfelelőségi garanciát; összetett esetben adatvédelmi vagy
              jogi szakértő bevonása indokolt.
            </p>
          </div>
        </div>

        <CtaLink
          href="/kapcsolat?tipus=uj"
          location="uzlet_telephely"
          label="Ajánlatot kérek"
          className="inline-flex bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-lg font-semibold transition-colors"
        >
          Ajánlatot kérek
        </CtaLink>
      </section>
    </SiteShell>
  );
}
