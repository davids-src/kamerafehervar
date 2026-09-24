import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Általános Szerződési Feltételek (ÁSZF) — Kamera Fehérvár',
  description: 'Általános Szerződési Feltételek (ÁSZF) — Kamera Fehérvár (SIROTECH Informatikai és Biztonságtechnikai Kft.)',
  robots: { index: true, follow: true },
};

export default function AszfPage() {
  return (
    <div className="min-h-screen bg-paper flex flex-col font-body">
      <Header />
      <main className="flex-grow">
        <section className="bg-mist py-4 border-b border-line">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <Breadcrumb items={[{ name: 'Általános Szerződési Feltételek', url: '/aszf' }]} />
          </div>
        </section>

        <section className="max-w-content mx-auto px-4 sm:px-6 py-12 pb-24 md:pb-12">
          <h1 className="text-3xl font-extrabold text-navy mb-6">Általános Szerződési Feltételek (ÁSZF)</h1>

          <div className="space-y-6 text-ink/80 text-sm leading-relaxed max-w-3xl">
            <div className="bg-mist/60 p-5 rounded-xl border border-line">
              <h2 className="font-display font-bold text-base text-navy mb-2">1. Szolgáltató Megnevezése</h2>
              <p>
                A Kamera Fehérvár megnevezés alatt nyújtott vagyonvédelmi és kamerarendszer telepítési, javítási szolgáltatásokat kizárólag a <strong>SIROTECH Informatikai és Biztonságtechnikai Kft.</strong> nyújtja.<br />
                Székhely: 8000 Székesfehérvár, Lövölde utca 24. 4/15.<br />
                Adószám: 33056151-2-07 | Cégjegyzékszám: Cg. 07-09-037603<br />
                E-mail: szia@kamerafehervar.hu | Telefonszám: +36 70 273 5532
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-navy mb-2">2. Az Árajánlatadás és Helyszíni Felmérés Feltételei</h2>
              <p>
                A Székesfehérváron és Fejér vármegye kijelölt területein végzett helyszíni felmérés díjmentes. A felmérést követően átadott árajánlat 30 napig érvényes.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-navy mb-2">3. Garancia és Számlázás</h2>
              <p>
                A telepített eszközökre és elvégzett munkákra a hatályos jogszabályok szerinti jótállást és szavatosságot biztosítjuk. Minden munkáról hivatalos áfás számlát állítunk ki.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
