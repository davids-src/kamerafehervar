import type { Metadata } from 'next';
import { SiteShell } from '@/components/SiteShell';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Adatvédelmi tájékoztató | Kamera Fehérvár',
  description: 'Adatvédelmi tájékoztató — Kamera Fehérvár (SIROTECH Kft.)',
  alternates: { canonical: '/adatvedelem' },
};

export default function AdatvedelemPage() {
  return (
    <SiteShell>
      <section className="bg-mist py-4 border-b border-line">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ name: 'Adatvédelmi tájékoztató', url: '/adatvedelem' }]} />
        </div>
      </section>

      <section className="max-w-content mx-auto px-4 sm:px-6 py-12 pb-24 md:pb-12">
        <h1 className="text-3xl font-bold text-navy mb-6">Adatvédelmi tájékoztató</h1>

        <div className="space-y-6 text-ink/80 text-sm leading-relaxed max-w-3xl">
          <div className="bg-mist p-5 rounded-xl border border-line">
            <h2 className="font-bold text-base text-navy mb-2">1. Adatkezelő adatai</h2>
            <p>
              <strong>Szolgáltató neve:</strong> SIROTECH Informatikai és Biztonságtechnikai Kft.
              <br />
              <strong>Márkanév:</strong> SIROTECH Kft. / Kamera Fehérvár
              <br />
              <strong>Székhely:</strong> 8000 Székesfehérvár, Lövölde utca 24. 4/15.
              <br />
              <strong>Adószám:</strong> 33056151-2-07
              <br />
              <strong>Cégjegyzékszám:</strong> Cg. 07-09-037603
              <br />
              <strong>E-mail:</strong> szia@kamerafehervar.hu
              <br />
              <strong>Telefon:</strong> +36 70 273 5532
            </p>
          </div>

          <div>
            <h2 className="font-bold text-lg text-navy mb-2">2. A kezelt adatok köre és célja</h2>
            <p>
              Weboldalunk kapcsolatfelvételi űrlapján keresztül személyes adatokat (név, telefonszám, e-mail cím,
              település, ingatlan típusa, rövid leírás; meglévő rendszer esetén gyártó és kameraszám, ha megadott)
              gyűjtünk kizárólag a kapcsolatfelvétel és ajánlatkérés lebonyolítása céljából. Az űrlap elküldése
              kapcsolatfelvételi / ajánlatkérési megkeresés, önmagában nem minősül megrendelésnek.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-lg text-navy mb-2">3. Analytics mérés</h2>
            <p>
              Weboldalunk Google Analytics mérést használ a látogatottsági statisztikák elemzéséhez, csak az Ön
              hozzájárulása után. A mérőkódok személyes azonosításra alkalmas adatot (név, telefon, e-mail) a Google
              részére nem továbbítanak.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-lg text-navy mb-2">4. Kamerarendszer és adatvédelem</h2>
            <p>
              A megfigyelt terület, a tájékoztatás, a felvételek kezelése és a hozzáférés adatvédelmi kérdés lehet. A
              rendszer telepítése önmagában nem jelent jogi megfelelőségi garanciát; összetett esetben adatvédelmi vagy
              jogi szakértő bevonása indokolt. A kivitelező nem adhat automatikus adatvédelmi megfelelőségi garanciát.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-lg text-navy mb-2">5. Az érintettek jogai</h2>
            <p>
              Ön bármikor kérheti tárolt adatainak törlését vagy módosítását a{' '}
              <a href="mailto:szia@kamerafehervar.hu" className="text-accent hover:underline">
                szia@kamerafehervar.hu
              </a>{' '}
              e-mail címen.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
