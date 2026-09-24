'use client';

import { useState, useEffect } from 'react';

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('kf_cookie_consent');
    if (!consent) {
      setShow(true);
    } else if (consent === 'granted' && typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
      });
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('kf_cookie_consent', 'granted');
    setShow(false);
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem('kf_cookie_consent', 'denied');
    setShow(false);
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
      });
    }
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-navy text-white border-t border-line/20 shadow-2xl transition-all animate-fade-in">
      <div className="max-w-content mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-3xl">
          <strong className="text-white font-display">Sütiket (cookie-kat) használunk</strong> weboldalunk teljesítményének mérési és látogatottsági elemzése céljából (Google Analytics). Személyes adatot (név, telefon, e-mail) a mérőkódok nem továbbítanak.{' '}
          <a href="/adatkezeles" className="text-accent hover:underline">
            Adatkezelési tájékoztató
          </a>
        </div>
        <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
          <button
            onClick={handleDecline}
            className="w-1/2 sm:w-auto px-4 py-2 text-xs font-medium font-body bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-center"
          >
            Elutasítom
          </button>
          <button
            onClick={handleAccept}
            className="w-1/2 sm:w-auto px-5 py-2 text-xs font-bold font-display bg-accent hover:bg-accent-hover text-white rounded-lg transition-colors text-center"
          >
            Elfogadom
          </button>
        </div>
      </div>
    </div>
  );
}
