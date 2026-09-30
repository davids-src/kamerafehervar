import type { Metadata } from 'next';
import { SiteShell } from '@/components/SiteShell';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Általános Szerződési Feltételek | Kamera Fehérvár',
  description: 'Általános Szerződési Feltételek — Kamera Fehérvár (SIROTECH Kft.)',
  alternates: { canonical: '/aszf' },
};

export default function AszfPage() {
  return (
    <SiteShell>
      <section className="bg-mist py-4 border-b border-line">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ name: 'Általános Szerződési Feltételek', url: '/aszf' }]} />
        </div>
      </section>

      <section className="max-w-content mx-auto px-4 sm:px-6 py-12 pb-24 md:pb-12">
        <h1 className="text-3xl font-bold text-navy mb-6">Általános Szerződési Feltételek (ÁSZF)</h1>

        <div className="space-y-6 text-ink/80 text-sm leading-relaxed max-w-3xl">
          <div className="bg-mist p-5 rounded-xl border border-line">
            <h2 className="font-bold text-base text-navy mb-2">1. Szolgáltató megnevezése</h2>
            <p>
              A Kamera Fehérvár szolgáltatást a <strong>SIROTECH Kft.</strong> (SIROTECH Informatikai és
              Biztonságtechnikai Kft.) nyújtja.
              <br />
              Székhely: 8000 Székesfehérvár, Lövölde utca 24. 4/15.
              <br />
              Adószám: 33056151-2-07 | Cégjegyzékszám: Cg. 07-09-037603
              <br />
              E-mail: szia@kamerafehervar.hu | Telefonszám: +36 70 273 5532
            </p>
          </div>

          <div>
            <h2 className="font-bold text-lg text-navy mb-2">2. A szolgáltatás tárgya</h2>
            <p>
              A szolgáltatás tárgya kizárólag kamerarendszer tervezés, telepítés, kivitelezés, javítás, bővítés és
              karbantartás. Az űrlap elküldése kapcsolatfelvételi / ajánlatkérési megkeresés, önmagában nem minősül
              megrendelésnek.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-lg text-navy mb-2">3. Ajánlatkérés</h2>
            <p>
              Az ajánlat alapja a megfigyelni kívánt terület, a képigény, a rögzítés, a kábelezés és a helyszín. Az
              ajánlatban az eszközök és a kivitelezés legyen egyértelműen követhető. A megkeresés alapján egyeztetjük a
              feladat részleteit.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-lg text-navy mb-2">4. Adatvédelem és felelősség</h2>
            <p>
              A rendszer telepítése önmagában nem jelent jogi megfelelőségi garanciát. A kivitelező nem adhat
              automatikus adatvédelmi megfelelőségi garanciát. A kamera jelenléte visszatartó hatású lehet, de
              bűncselekmény megelőzésére vagy megakadályozására nem adható garancia.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-lg text-navy mb-2">5. Garancia és számlázás</h2>
            <p>
              A telepített eszközökre és elvégzett munkákra a hatályos jogszabályok szerinti jótállást és szavatosságot
              biztosítjuk. Minden munkáról hivatalos áfás számlát állítunk ki.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
