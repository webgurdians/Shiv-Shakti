import type { Metadata, Viewport } from 'next';
import './globals.css';
import { getLocalBusinessJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'শিব শক্তি ইলেকট্রনিক্স অ্যান্ড ফার্নিচার | Cooper\'s Camp, Nadia',
  description:
    'কুপার্স ক্যাম্পের বিশ্বস্ত ইলেকট্রনিক্স ও ফার্নিচার শোরুম। স্যামসাং, এলজি, ভোল্টাস টিভি, ফ্রিজ, এসি, ওয়াশিং মেশিন ও আসবাবপত্র সহজ কিস্তিতে।',
  keywords: [
    'Shiv Shakti Electronics',
    'Electronics showroom Coopers Camp',
    'Furniture shop Nadia',
    'TV shop Ranaghat',
    'AC dealer Coopers Camp',
    'Bajaj Finserv EMI showroom Nadia',
    'শিব শক্তি ইলেকট্রনিক্স',
  ],
  authors: [{ name: 'Shiv Shakti Electronics & Furniture' }],
  icons: {
    icon: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
  openGraph: {
    title: 'Shiv Shakti Electronics & Furniture — Cooper\'s Camp',
    description:
      'Explore top brand Smart TVs, Inverter ACs, Refrigerators and Furniture in Cooper\'s Camp, Nadia with instant EMI.',
    url: 'https://shivshaktielectronics.com',
    siteName: 'Shiv Shakti Electronics & Furniture',
    images: [
      {
        url: 'https://shivshaktielectronics.com/images/logo.jpg',
        width: 1024,
        height: 1024,
        alt: 'Shiv Shakti Electronics and Furniture Showroom',
      },
    ],
    locale: 'bn_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://shivshaktielectronics.com',
    languages: {
      'bn-IN': 'https://shivshaktielectronics.com',
      'en-IN': 'https://shivshaktielectronics.com/en',
    },
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
    <html lang="bn" className="scroll-smooth">
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
