import Link from 'next/link';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  const fullItems = [{ name: 'Főoldal', url: '/' }, ...items];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: fullItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `https://kamerafehervar.hu${item.url}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className={`text-xs sm:text-sm text-ink/60 ${className}`}>
        <ol className="flex flex-wrap items-center gap-1.5">
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1;
            return (
              <li key={item.url} className="flex items-center gap-1.5">
                {index > 0 && <span className="text-ink/30 select-none">/</span>}
                {isLast ? (
                  <span className="font-medium text-navy truncate max-w-[200px] sm:max-w-none" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="hover:text-accent transition-colors underline-offset-2 hover:underline"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
