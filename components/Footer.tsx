'use client';

import Link from 'next/link';
import { Logo } from './Logo';
import { trackPhoneClick } from '@/lib/gtag';

const PHONE = '+36 70 273 5532';
const PHONE_HREF = 'tel:+36702735532';

const footerServices = [
  { name: 'Kamerarendszer telepítés', href: '/kamerarendszer-telepites-szekesfehervar' },
  { name: 'Kamerarendszer javítás', href: '/kamerarendszer-javitas-szekesfehervar' },
  { name: 'IP kamerarendszerek', href: '/ip-kamerarendszer' },
  { name: 'Üzleti kamerarendszerek', href: '/uzleti-kamerarendszer' },
  { name: 'Otthoni kamerarendszerek', href: '/otthoni-kamerarendszer' },
  { name: 'Bővítés & Korszerűsítés', href: '/kamerarendszer-bovites' },
  { name: 'Riasztó & Beléptető rendszerek', href: '/riaszto-es-beleptetes' },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white py-12 pb-24 md:pb-12 border-t border-white/10">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Brand */}
          <div className="md:col-span-1 space-y-4">
            <Logo variant="light" />
            <p className="font-body text-xs text-white/70 leading-relaxed">
              Biztonsági kamerarendszerek és biztonságtechnika telepítése, javítása, karbantartása Székesfehérváron és Fejér vármegyében.
            </p>
            <div className="space-y-1 font-body text-sm text-white/80">
              <p>
                <a
                  href={PHONE_HREF}
                  onClick={() => trackPhoneClick('footer')}
                  className="hover:text-accent font-bold transition-colors"
                >
                  {PHONE}
                </a>
              </p>
              <p>
                <a href="mailto:szia@kamerafehervar.hu" className="hover:text-accent transition-colors">
                  szia@kamerafehervar.hu
                </a>
              </p>
              <p className="text-xs text-white/60">Székesfehérvár és Fejér vármegye</p>
            </div>
          </div>

          {/* Col 2 & 3: Services (Internal Links) */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Szolgáltatásaink Székesfehérváron
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-body text-xs text-white/75">
              {footerServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="hover:text-accent transition-colors py-1 flex items-center gap-1.5"
                >
                  <span className="text-accent">&bull;</span>
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 4: Legal & Info */}
          <div className="space-y-3 font-body text-xs text-white/70">
            <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Információk
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/aszf" className="hover:text-accent transition-colors">
                  Általános Szerződési Feltételek (ÁSZF)
                </Link>
              </li>
              <li>
                <Link href="/adatkezeles" className="hover:text-accent transition-colors">
                  Adatkezelési Tájékoztató
                </Link>
              </li>
              <li>
                <a href="#kapcsolat" className="hover:text-accent transition-colors">
                  Ingyenes helyszíni felmérés
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal provider statement */}
        <div className="pt-6 border-t border-white/10 text-center md:text-left">
          <p className="font-body text-xs text-white/50 leading-relaxed">
            A Kamera Fehérvár szolgáltatást a <strong>SIROTECH Informatikai és Biztonságtechnikai Kft.</strong> üzemelteti.
            <br className="hidden sm:inline" />
            Székhely: 8000 Székesfehérvár, Lövölde utca 24. 4/15. | Adószám: 33056151-2-07 | Cégjegyzékszám: Cg. 07-09-037603
          </p>
        </div>
      </div>
    </footer>
  );
}
