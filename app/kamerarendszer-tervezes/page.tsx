import type { Metadata } from 'next';
import { SiteShell } from '@/components/SiteShell';
import { CtaLink } from '@/components/CtaLink';
import { Breadcrumb } from '@/components/Breadcrumb';
import { SystemDiagram } from '@/components/SystemDiagram';

export const metadata: Metadata = {
  title: 'Kamerarendszer tervezés Székesfehérváron | Kamera Fehérvár',
  description:
    'Kamerarendszer tervezés: kamerák helye, látómező, rögzítési igény és hálózati feltételek a helyszín alapján.',
  alternates: { canonical: '/kamerarendszer-tervezes' },
};

export default function TervezesPage() {
  return (
    <SiteShell>
      <section className="bg-mist py-4 border-b border-line">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ name: 'Tervezés', url: '/kamerarendszer-tervezes' }]} />
        </div>
      </section>

      <section className="max-w-content mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-5">Kamerarendszer tervezés</h1>
        <p className="text-lg text-muted leading-relaxed mb-10 max-w-2xl">
          A kamerák helyét, látómezőjét, rögzítési igényét és a hálózati feltételeket a helyszín alapján tervezzük meg.
        </p>

        <div className="space-y-8 max-w-2xl mb-12">
          <div>
            <h2 className="text-xl font-bold text-navy mb-2">Ésszerűen méretezett rendszer</h2>
            <p className="text-muted leading-relaxed">
              Nem előre csomagolt kameradarabszámból indulunk ki. Az ajánlat alapja a megfigyelni kívánt terület, a
              képigény, a rögzítés, a kábelezés és a helyszín.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-navy mb-2">A kamera használatának jogszerűsége is számít</h2>
            <p className="text-muted leading-relaxed">
              A megfigyelt terület, a tájékoztatás, a felvételek kezelése és a hozzáférés adatvédelmi kérdés lehet. A
              rendszer telepítése önmagában nem jelent jogi megfelelőségi garanciát; összetett esetben adatvédelmi vagy
              jogi szakértő bevonása indokolt.
            </p>
          </div>
        </div>

        <div className="bg-mist rounded-2xl border border-line p-6 sm:p-8 mb-12">
          <h2 className="text-xl font-bold text-navy mb-6 text-center">Egy tipikus kamerarendszer felépítése.</h2>
          <SystemDiagram />
        </div>

        <CtaLink
          href="/kapcsolat?tipus=uj"
          location="tervezes"
          label="Ajánlatot kérek"
          className="inline-flex bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-lg font-semibold transition-colors"
        >
          Ajánlatot kérek
        </CtaLink>
      </section>
    </SiteShell>
  );
}
