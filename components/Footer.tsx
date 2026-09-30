'use client';

import Link from 'next/link';
import { Logo } from './Logo';
import { trackPhoneClick } from '@/lib/gtag';
import { navItems, PHONE_DISPLAY, PHONE_HREF, EMAIL } from '@/lib/routes';

export function Footer() {
  return (
    <footer className="bg-navy text-white py-12 pb-24 md:pb-12">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="space-y-4">
            <Logo variant="light" />
            <p className="text-xs text-white/70 leading-relaxed">
              Kamerarendszer tervezés, telepítés, bővítés és javítás Székesfehérváron és Fejér vármegyében.
            </p>
            <div className="space-y-1 text-sm text-white/80">
              <p>
                <a
                  href={PHONE_HREF}
                  onClick={() => trackPhoneClick('footer')}
                  className="hover:text-white font-semibold transition-colors"
                >
                  {PHONE_DISPLAY}
                </a>
              </p>
              <p>
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">
                  {EMAIL}
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-sm text-white uppercase tracking-wider">Szolgáltatások</h3>
            <ul className="space-y-2 text-sm text-white/75">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 text-sm text-white/70">
            <h3 className="font-semibold text-sm text-white uppercase tracking-wider">Információk</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/aszf" className="hover:text-white transition-colors">
                  Általános Szerződési Feltételek
                </Link>
              </li>
              <li>
                <Link href="/adatvedelem" className="hover:text-white transition-colors">
                  Adatvédelmi tájékoztató
                </Link>
              </li>
              <li>
                <Link href="/kapcsolat" className="hover:text-white transition-colors">
                  Kapcsolat
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10">
          <p className="text-xs text-white/50 leading-relaxed">
            A Kamera Fehérvár szolgáltatást a <strong className="text-white/70">SIROTECH Kft.</strong> nyújtja.
            <br className="hidden sm:inline" />
            Székhely: 8000 Székesfehérvár, Lövölde utca 24. 4/15. | Adószám: 33056151-2-07 | Cégjegyzékszám: Cg.
            07-09-037603
          </p>
          <p className="mt-3 text-[11px] text-white/40 max-w-2xl">
            A kivitelező nem adhat automatikus adatvédelmi megfelelőségi garanciát. A kamera jelenléte visszatartó
            hatású lehet, de bűncselekmény megelőzésére nem adható garancia.
          </p>
        </div>
      </div>
    </footer>
  );
}
