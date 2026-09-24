import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export function Logo({ className = '', variant = 'dark' }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center group ${className}`} aria-label="Kamera Fehérvár főoldal">
      <Image
        src="/kamerafehervar_logo_new.png"
        alt="Kamera Fehérvár"
        width={220}
        height={55}
        className={`h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105 ${
          variant === 'light' ? 'brightness-0 invert opacity-95' : ''
        }`}
        priority
      />
    </Link>
  );
}
