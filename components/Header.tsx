'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { PhoneIcon } from './icons';
import { trackPhoneClick, trackCtaClick } from '@/lib/gtag';
import { navItems, PHONE_DISPLAY, PHONE_HREF } from '@/lib/routes';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-line">
      <div className="max-w-content mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          <Logo />

          <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-ink/80">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-accent transition-colors py-1">
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={PHONE_HREF}
              onClick={() => trackPhoneClick('header')}
              className="hidden sm:inline-flex items-center gap-2 font-semibold text-sm text-navy hover:text-accent transition-colors"
            >
              <PhoneIcon className="w-4 h-4 text-accent" />
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/kapcsolat"
              onClick={() => trackCtaClick('header', 'Ajánlatot kérek')}
              className="inline-flex items-center bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-colors"
            >
              Ajánlatot kérek
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-navy hover:bg-mist transition-colors"
              aria-label="Menü megnyitása"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-line space-y-1 pb-2 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-navy hover:bg-mist rounded-lg transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <a
              href={PHONE_HREF}
              onClick={() => {
                trackPhoneClick('header_mobile_menu');
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-accent hover:bg-mist rounded-lg"
            >
              <PhoneIcon className="w-4 h-4" />
              Hívás: {PHONE_DISPLAY}
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
