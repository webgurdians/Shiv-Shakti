import type { Metadata, Viewport } from 'next';
import './globals.css';
import { getLocalBusinessJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Shiv Shakti Electronics and Furniture | Coopers Camp, Nadia',
  description:
    'Trusted electronics and furniture showroom in Coopers Camp, Nadia. Smart TVs, Inverter ACs, Refrigerators, Washing Machines, and Furniture with easy zero down-payment EMI.',
  keywords: [
    'Shiv Shakti Electronics',
    'Electronics showroom Coopers Camp',
    'Furniture shop Nadia',
    'TV shop Ranaghat',
    'AC dealer Coopers Camp',
    'Bajaj Finserv EMI showroom Nadia',
    'শিব শক্তি ইলেকট্রনিক্স',
  ],
  authors: [{ name: 'Shiv Shakti Electronics and Furniture' }],
  icons: {
    icon: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
  openGraph: {
    title: 'Shiv Shakti Electronics and Furniture - Coopers Camp',
    description:
      'Explore top brand Smart TVs, Inverter ACs, Refrigerators and Furniture in Coopers Camp, Nadia with instant EMI.',
    url: 'https://www.shivshaktielectronics.com',
    siteName: 'Shiv Shakti Electronics and Furniture',
    images: [
      {
        url: 'https://www.shivshaktielectronics.com/images/logo.jpg',
        width: 1024,
        height: 1024,
        alt: 'Shiv Shakti Electronics and Furniture Showroom',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.shivshaktielectronics.com',
    languages: {
      'en-IN': 'https://www.shivshaktielectronics.com',
      'bn-IN': 'https://www.shivshaktielectronics.com/bn',
    },
  },
  verification: {
    google: 'KFoymVAN3vZEgAN6vM7kDfCY-mMV1Nv8BBqkJidPfSc',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#082567',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessJson = getLocalBusinessJsonLd();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google" content="notranslate" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col selection:bg-shiv-blue selection:text-white">
        {children}
      </body>
    </html>
  );
}
