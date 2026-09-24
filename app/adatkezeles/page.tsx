import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Adatkezelési Tájékoztató — Kamera Fehérvár',
  description: 'Adatkezelési tájékoztató — Kamera Fehérvár (SIROTECH Informatikai és Biztonságtechnikai Kft.)',
  robots: { index: true, follow: true },
};

export default function AdatkezelesPage() {
  return (
    <div className="min-h-screen bg-paper flex flex-col font-body">
      <Header />
      <main className="flex-grow">
        <section className="bg-mist py-4 border-b border-line">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <Breadcrumb items={[{ name: 'Adatkezelési tájékoztató', url: '/adatkezeles' }]} />
          </div>
        </section>

        <section className="max-w-content mx-auto px-4 sm:px-6 py-12 pb-24 md:pb-12">
          <h1 className="text-3xl font-extrabold text-navy mb-6">Adatkezelési Tájékoztató</h1>

          <div className="space-y-6 text-ink/80 text-sm leading-relaxed max-w-3xl">
            <div className="bg-mist/60 p-5 rounded-xl border border-line">
              <h2 className="font-display font-bold text-base text-navy mb-2">1. Adatkezelő Adatai</h2>
              <p>
                <strong>Szolgáltató neve:</strong> SIROTECH Informatikai és Biztonságtechnikai Kft.<br />
                <strong>Márkanév:</strong> Kamera Fehérvár<br />
                <strong>Székhely:</strong> 8000 Székesfehérvár, Lövölde utca 24. 4/15.<br />
                <strong>Adószám:</strong> 33056151-2-07<br />
                <strong>Cégjegyzékszám:</strong> Cg. 07-09-037603<br />
                <strong>E-mail:</strong> szia@kamerafehervar.hu<br />
                <strong>Telefon:</strong> +36 70 273 5532
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-navy mb-2">2. A Kezelt Adatok Körére és Céljára Vonatkozó Tájékoztatás</h2>
              <p>
                Weboldalunk kapcsolatfelvételi űrlapján keresztül személyes adatokat (név, telefonszám, e-mail cím, település, cégnév) gyűjtünk kizárólag a kapcsolatfelvétel, ajánlatadás és visszahívás lebonyolítása céljából.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-navy mb-2">3. Adatfeldolgozók és Analytics Mérés</h2>
              <p>
                Weboldalunk Google Analytics mérést használ a látogatottsági statisztikák elemzéséhez. A mérőkódok névtelenített IP-címet használnak, és személyes azonosításra alkalmas adatot (név, telefon, e-mail) a Google részére NEM továbbítanak.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-navy mb-2">4. Az Érintettek Jogai</h2>
              <p>
                Ön bármikor kérheti tárolt adatainak törlését vagy módosítását a <a href="mailto:szia@kamerafehervar.hu" className="text-accent hover:underline">szia@kamerafehervar.hu</a> e-mail címen.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
