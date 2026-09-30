import type { Metadata } from 'next';
import { SiteShell } from '@/components/SiteShell';
import { CtaLink } from '@/components/CtaLink';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Kamerarendszer telepítés Székesfehérváron | Kamera Fehérvár',
  description:
    'Kamerarendszer kivitelezés: kábelezés, kamera és rögzítő telepítése, hálózati beállítás, próba és átadás Székesfehérváron.',
  alternates: { canonical: '/kamerarendszer-telepites' },
};

export default function TelepitesPage() {
  return (
    <SiteShell>
      <section className="bg-mist py-4 border-b border-line">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ name: 'Telepítés', url: '/kamerarendszer-telepites' }]} />
        </div>
      </section>

      <section className="max-w-content mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-5">Kamerarendszer telepítés</h1>
        <p className="text-lg text-muted leading-relaxed mb-10 max-w-2xl">
          Kábelezés, kamera és rögzítő telepítése, hálózati beállítás, próba és átadás.
        </p>

        <div className="space-y-8 max-w-2xl mb-12">
          <div>
            <h2 className="text-xl font-bold text-navy mb-2">Tervezés a kivitelezés előtt</h2>
            <p className="text-muted leading-relaxed">
              A kamerák helyét, látómezőjét, rögzítési igényét és a hálózati feltételeket a helyszín alapján tervezzük
              meg.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-navy mb-2">Ésszerű méretezés</h2>
            <p className="text-muted leading-relaxed">
              Nem előre csomagolt kameradarabszámból indulunk ki. Az ajánlat alapja a megfigyelni kívánt terület, a
              képigény, a rögzítés, a kábelezés és a helyszín. Az ajánlatban az eszközök és a kivitelezés legyen
              egyértelműen követhető.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-navy mb-2">Márkák</h2>
            <p className="text-muted leading-relaxed">
              Hikvision · Dahua · VideoSec. Meglévő rendszer javításánál először azonosítjuk a pontos típust és a
              kompatibilitást.
            </p>
          </div>
        </div>

        <CtaLink
          href="/kapcsolat?tipus=uj"
          location="telepites"
          label="Ajánlatot kérek"
          className="inline-flex bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-lg font-semibold transition-colors"
        >
          Ajánlatot kérek
        </CtaLink>
      </section>
    </SiteShell>
  );
}
