import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ÁSZF — Kamera Fehérvár',
  description: 'Általános szerződési feltételek — Kamera Fehérvár (SIROTECH Kft.)',
  robots: { index: true, follow: true },
};

export default function AszfPage() {
  return (
    <div className="min-h-screen bg-paper">
      <header className="bg-navy text-white py-6">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <a href="/" className="font-display font-extrabold text-lg">Kamera Fehérvár</a>
        </div>
      </header>
      <main className="max-w-content mx-auto px-4 sm:px-6 py-12 pb-24 md:pb-12">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy mb-8">Általános szerződési feltételek</h1>
        <div className="prose prose-sm max-w-none font-body text-ink/80 space-y-4">
          <p className="text-ink/50 italic">Ez egy placeholder oldal. A végleges ÁSZF szöveg külön promptban érkezik.</p>
          <h2 className="font-display font-bold text-lg text-navy">Szolgáltató</h2>
          <p>SIROTECH Informatikai és Biztonságtechnikai Kft.<br/>
          8000 Székesfehérvár, Lövölde utca 24. 4/15.<br/>
          Adószám: 33056151-2-07<br/>
          Cégjegyzékszám: Cg. 07-09-037603<br/>
          Telefon: +36 70 273 5532<br/>
          E-mail: szia@kamerafehervar.hu</p>
          <p className="text-ink/50 italic">A végleges tartalom hamarosan.</p>
        </div>
        <div className="mt-10">
          <a href="/" className="font-body text-sm text-accent hover:text-accent-hover transition-colors">← Vissza a főoldalra</a>
        </div>
      </main>
    </div>
  );
}
