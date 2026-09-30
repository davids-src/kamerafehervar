import type { Metadata } from 'next';
import { Suspense } from 'react';
import { SiteShell } from '@/components/SiteShell';
import { ContactForm } from '@/components/ContactForm';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PHONE_DISPLAY, PHONE_HREF, EMAIL } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Kapcsolat / ajánlatkérés | Kamera Fehérvár',
  description:
    'Ajánlatkérés kamerarendszer tervezésre, telepítésre, bővítésre vagy javításra Székesfehérváron.',
  alternates: { canonical: '/kapcsolat' },
};

export default function KapcsolatPage() {
  return (
    <SiteShell>
      <section className="bg-mist py-4 border-b border-line">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ name: 'Kapcsolat', url: '/kapcsolat' }]} />
        </div>
      </section>

      <section className="max-w-content mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          <div className="lg:col-span-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Új kamerarendszer vagy javítás?</h1>
            <p className="text-muted leading-relaxed mb-8">
              Adja meg a helyszínt, az ingatlan típusát és röviden, mire van szüksége.
            </p>
            <div className="space-y-3 text-sm text-ink">
              <p>
                Telefon:{' '}
                <a href={PHONE_HREF} className="text-accent font-semibold hover:text-accent-hover">
                  {PHONE_DISPLAY}
                </a>
              </p>
              <p>
                E-mail:{' '}
                <a href={`mailto:${EMAIL}`} className="text-accent font-semibold hover:text-accent-hover">
                  {EMAIL}
                </a>
              </p>
              <p className="text-muted text-xs pt-4 leading-relaxed">
                Az űrlap elküldése kapcsolatfelvételi / ajánlatkérési megkeresés, önmagában nem minősül megrendelésnek.
              </p>
            </div>
          </div>
          <div className="lg:col-span-3">
            <Suspense fallback={<div className="bg-white rounded-xl border border-line p-8 text-muted text-sm">Űrlap betöltése…</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
