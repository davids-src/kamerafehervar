'use client';

import Link from 'next/link';
import { trackCtaClick } from '@/lib/gtag';

interface CtaLinkProps {
  href: string;
  location: string;
  label: string;
  className?: string;
  children: React.ReactNode;
}

export function CtaLink({ href, location, label, className, children }: CtaLinkProps) {
  return (
    <Link href={href} onClick={() => trackCtaClick(location, label)} className={className}>
      {children}
    </Link>
  );
}
