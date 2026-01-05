import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { COPY } from '@/lib/copy';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Product-Focused Frontend Engineer — CRMs, SaaS, Dashboards',
    template: '%s | Product-Focused Frontend Engineer',
  },
  description:
    'Product-focused frontend engineer building CRMs, dashboards, SaaS interfaces and internal tools. Open to contract and product work.',
  keywords: COPY.meta.keywords,
  authors: [{ name: 'Vladimir Bogryashov' }],
  creator: 'Vladimir Bogryashov',
  publisher: 'bogryashovDev',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bogryashov.dev'),
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
      uk: '/uk',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bogryashov.dev',
    title: 'Product-Focused Frontend Engineer — CRMs, SaaS, Dashboards',
    description:
      'Product-focused frontend engineer building CRMs, dashboards, SaaS interfaces and internal tools. Open to contract and product work.',
    siteName: 'bogryashovDev',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Product-Focused Frontend Engineer — CRMs, SaaS, Dashboards',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product-Focused Frontend Engineer — CRMs, SaaS, Dashboards',
    description:
      'Product-focused frontend engineer building CRMs, dashboards, SaaS interfaces and internal tools. Open to contract and product work.',
    images: ['/og.png'],
    creator: '@bogryashovdev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0F1114" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
