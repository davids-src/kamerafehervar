'use client';

import { PhoneIcon } from './icons';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { trackPhoneClick, trackCtaClick } from '@/lib/gtag';
import { PHONE_HREF } from '@/lib/routes';

export function MobileCallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex shadow-[0_-4px_20px_rgba(0,0,0,0.12)]">
        <a
          href={PHONE_HREF}
          onClick={() => trackPhoneClick('mobile_call_bar')}
          className="flex-1 flex items-center justify-center gap-2 bg-navy text-white py-4 font-semibold text-base active:bg-navy-secondary"
        >
          <PhoneIcon className="w-5 h-5" />
          Hívás
        </a>
        <Link
          href="/kapcsolat"
          onClick={() => trackCtaClick('mobile_call_bar', 'Ajánlatkérés')}
          className="flex-1 flex items-center justify-center gap-2 bg-accent text-white py-4 font-semibold text-base active:bg-accent-hover"
        >
          Ajánlatkérés
        </Link>
      </div>
    </div>
  );
}
