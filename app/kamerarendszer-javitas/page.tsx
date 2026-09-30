import type { Metadata } from 'next';
import { SiteShell } from '@/components/SiteShell';
import { CtaLink } from '@/components/CtaLink';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Kamerarendszer javítás Székesfehérváron | Kamera Fehérvár',
  description:
    'Kamerarendszer javítás Székesfehérváron: nincs kép, hibás kamera, rögzítési vagy elérési probléma — először azonosítjuk a rendszert.',
  alternates: { canonical: '/kamerarendszer-javitas' },
};

export default function JavitasPage() {
  return (
    <SiteShell>
      <section className="bg-mist py-4 border-b border-line">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ name: 'Javítás', url: '/kamerarendszer-javitas' }]} />
        </div>
      </section>

      <section className="max-w-content mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-5">Kamerarendszer javítás és bővítés</h1>
        <p className="text-lg text-muted leading-relaxed mb-10 max-w-2xl">
          Nincs kép, hibás egy kamera, nem működik a rögzítés, távoli elérés vagy bővíteni szeretné a rendszert.
        </p>

        <div className="space-y-8 max-w-2xl mb-12">
          <div>
            <h2 className="text-xl font-bold text-navy mb-2">Javítás</h2>
            <p className="text-muted leading-relaxed">
              Nincs kép, hibás kamera, rögzítési vagy elérési probléma esetén először azonosítjuk a rendszert és a hiba
              körét.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-navy mb-2">Bővítés</h2>
            <p className="text-muted leading-relaxed">
              Új kamera vagy rögzítési kapacitás hozzáadása előtt ellenőrizzük a meglévő rendszer kompatibilitását.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-navy mb-2">Kompatibilitás</h2>
            <p className="text-muted leading-relaxed">
              Hikvision · Dahua · VideoSec. Meglévő rendszer javításánál először azonosítjuk a pontos típust és a
              kompatibilitást.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-navy mb-2">Karbantartás</h2>
            <p className="text-muted leading-relaxed">
              A rendszer állapotának, képének, rögzítésének és szükséges beállításainak egyeztetett ellenőrzése.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <CtaLink
            href="/kapcsolat?tipus=javitas"
            location="javitas"
            label="Kamerát javíttatnék"
            className="inline-flex justify-center bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-lg font-semibold transition-colors"
          >
            Kamerát javíttatnék
          </CtaLink>
          <CtaLink
            href="/kapcsolat?tipus=bovites"
            location="javitas"
            label="Bővítést kérek"
            className="inline-flex justify-center border border-navy/20 text-navy hover:border-accent hover:text-accent px-6 py-3.5 rounded-lg font-semibold transition-colors"
          >
            Bővítést kérek
          </CtaLink>
        </div>
      </section>
    </SiteShell>
  );
}
