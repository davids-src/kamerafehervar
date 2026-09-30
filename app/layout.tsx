import './globals.css';
import '@fontsource/source-sans-3/400.css';
import '@fontsource/source-sans-3/500.css';
import '@fontsource/source-sans-3/600.css';
import '@fontsource/source-sans-3/700.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { CookieBanner } from '@/components/CookieBanner';
import { GA_MEASUREMENT_ID } from '@/lib/gtag';
import { SITE_URL } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Kamerarendszer Székesfehérváron | Kamera Fehérvár',
  description:
    'Kamerarendszer tervezés, telepítés, bővítés és javítás Székesfehérváron. Családi ház, nyaraló, üzlet és telephely.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  icons: {
    icon: [{ url: '/kamerafehervar_logo_new.png' }],
    shortcut: '/kamerafehervar_logo_new.png',
    apple: '/kamerafehervar_logo_new.png',
  },
  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    siteName: 'Kamera Fehérvár',
    title: 'Kamerarendszer Székesfehérváron | Kamera Fehérvár',
    description:
      'Kamerarendszer tervezés, telepítés, bővítés és javítás Székesfehérváron. Családi ház, nyaraló, üzlet és telephely.',
    url: SITE_URL,
    images: [{ url: `${SITE_URL}/kamerafehervar_logo_new.png` }],
  },
  robots: { index: true, follow: true },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#service`,
    name: 'Kamera Fehérvár',
    description:
      'Kamerarendszer tervezés, telepítés, bővítés és javítás Székesfehérváron és Fejér vármegyében.',
    telephone: '+36702735532',
    email: 'szia@kamerafehervar.hu',
    url: SITE_URL,
    areaServed: [
      { '@type': 'City', name: 'Székesfehérvár' },
      { '@type': 'AdministrativeArea', name: 'Fejér vármegye' },
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
      name: 'SIROTECH Kft.',
      vatID: '33056151-2-07',
      registrationNumber: 'Cg. 07-09-037603',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'SIROTECH Kft. (Kamera Fehérvár)',
    url: SITE_URL,
    logo: `${SITE_URL}/kamerafehervar_logo_new.png`,
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
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Kamera Fehérvár',
    description: 'Kamerarendszer Székesfehérváron',
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaReady = GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX';

  return (
    <html lang="hu">
      <head>
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
        {gaReady && (
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
                  anonymize_ip: true
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className="font-sans antialiased">
        {children}
        <CookieBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
