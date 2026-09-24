import Link from 'next/link';
import { ShieldIcon, ArrowRightIcon, CheckIcon } from './icons';

interface CrossSellSectionProps {
  className?: string;
}

export function CrossSellSection({ className = '' }: CrossSellSectionProps) {
  return (
    <section className={`bg-navy text-white rounded-2xl p-6 sm:p-10 relative overflow-hidden shadow-lg ${className}`}>
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-body font-semibold mb-4">
            <ShieldIcon className="w-3.5 h-3.5 text-accent" />
            Komplex biztonságtechnika
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            Kamera mellé más védelem is kell?
          </h2>
          <p className="font-body text-base text-white/85 leading-relaxed mb-4">
            Riasztó, beléptetés és kapcsolódó biztonságtechnika is megoldható. Egyetlen megbízható kivitelezővel a teljes ingatlan védelme lefedhető.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-white/70">
            <span className="flex items-center gap-1.5">
              <CheckIcon className="w-4 h-4 text-accent" /> Riasztórendszerek (Ajax, Paradox)
            </span>
            <span className="flex items-center gap-1.5">
              <CheckIcon className="w-4 h-4 text-accent" /> Beléptetők & kaputelefonok
            </span>
            <span className="flex items-center gap-1.5">
              <CheckIcon className="w-4 h-4 text-accent" /> SIROTECH szakmai háttérrel
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
          <Link
            href="/riaszto-es-beleptetes"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-5 py-3 rounded-lg font-display font-bold text-sm transition-colors shadow-sm"
          >
            Riasztó & beléptetés részletei
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
          <a
            href="#kapcsolat"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-3 rounded-lg font-display font-medium text-sm transition-colors"
          >
            Kérek kombinált ajánlatot
          </a>
        </div>
      </div>
    </section>
  );
}
