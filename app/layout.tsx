import './globals.css';
import '@fontsource/archivo/700.css';
import '@fontsource/archivo/800.css';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/500.css';
import type { Metadata } from 'next';

const siteUrl = 'https://kamerafehervar.hu';

export const metadata: Metadata = {
  title: 'Kamera Fehérvár — Biztonsági kamerarendszerek kiépítése és javítása | Székesfehérvár',
  description:
    'Kiépítjük, javítjuk vagy bővítjük biztonsági kamerarendszerét Székesfehérváron és Fejér vármegyében. Analóg és IP kamerákhoz egyaránt. Ingyenes helyszíni felmérés.',
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    siteName: 'Kamera Fehérvár',
    title: 'Kamera Fehérvár — Biztonsági kamerarendszerek kiépítése és javítása',
    description:
      'Kiépítjük, javítjuk vagy bővítjük biztonsági kamerarendszerét Székesfehérváron és Fejér vármegyében. Ingyenes helyszíni felmérés.',
    url: siteUrl,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Kamera Fehérvár',
  description:
    'Biztonsági kamerarendszerek kiépítése, javítása és karbantartása Székesfehérváron és Fejér vármegyében.',
  telephone: '+36702735532',
  email: 'szia@kamerafehervar.hu',
  url: siteUrl,
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Fejér vármegye',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Lövölde utca 24. 4/15.',
    addressLocality: 'Székesfehérvár',
    postalCode: '8000',
    addressCountry: 'HU',
  },
  provider: {
    '@type': 'Organization',
    name: 'SIROTECH Informatikai és Biztonságtechnikai Kft.',
    vatID: '33056151-2-07',
    registrationNumber: 'Cg. 07-09-037603',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:00',
    closes: '20:00',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
