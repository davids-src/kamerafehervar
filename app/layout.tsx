import './globals.css';
import '@fontsource/archivo/700.css';
import '@fontsource/archivo/800.css';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/500.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { CookieBanner } from '@/components/CookieBanner';
import { GA_MEASUREMENT_ID } from '@/lib/gtag';

const siteUrl = 'https://kamerafehervar.hu';

export const metadata: Metadata = {
  title: 'Kamerarendszer telepítés és javítás Székesfehérváron | Kamera Fehérvár',
  description:
    'Kamerarendszer telepítés, javítás, bővítés és korszerűsítés Székesfehérváron és Fejér vármegyében. Cégeknek és otthonra, IP és analóg rendszerekhez.',
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/kamerafehervar_logo_new_main.png' },
      { url: '/kamerafehervar_logo_new_main.png', type: 'image/png' },
    ],
    shortcut: '/kamerafehervar_logo_new_main.png',
    apple: '/kamerafehervar_logo_new_main.png',
  },
  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    siteName: 'Kamera Fehérvár',
    title: 'Kamerarendszer telepítés és javítás Székesfehérváron | Kamera Fehérvár',
    description:
      'Kamerarendszer telepítés, javítás, bővítés és korszerűsítés Székesfehérváron és Fejér vármegyében. Ingyenes helyszíni felmérés.',
    url: siteUrl,
    images: [{ url: `${siteUrl}/kamerafehervar_logo_new.png` }],
  },
  robots: { index: true, follow: true },
};

const jsonLdHomepage = [
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteUrl}/#service`,
    name: 'Kamera Fehérvár',
    description:
      'Biztonsági kamerarendszerek kiépítése, javítása és karbantartása Székesfehérváron és Fejér vármegyében.',
    telephone: '+36702735532',
    email: 'szia@kamerafehervar.hu',
    url: siteUrl,
    areaServed: [
      {
        '@type': 'City',
        name: 'Székesfehérvár',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Fejér vármegye',
      },
    ],
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
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'SIROTECH Kft. (Kamera Fehérvár)',
    url: siteUrl,
    logo: `${siteUrl}/kamerafehervar_logo_new.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+36702735532',
      contactType: 'customer service',
      areaServed: 'HU',
      availableLanguage: 'Hungarian',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: 'Kamera Fehérvár',
    description: 'Kamerarendszer telepítés és javítás Székesfehérváron',
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <head>
        {/* Google Consent Mode Defaults */}
        <Script id="consent-mode" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'wait_for_update': 500
            });
          `}
        </Script>

        {/* GA4 Script */}
        {GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX' && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-setup" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body>
        {children}
        <CookieBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHomepage) }}
        />
      </body>
    </html>
  );
}
