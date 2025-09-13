import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { ScrollToTop } from '@/components/UI/ScrollToTop/ScrollToTop';
import { COPY } from '@/lib/copy';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'bogryashovDev - Clear design. Real outcomes.',
  description:
    'I build high-performance, accessible websites that are easy to maintain and scale. Specializing in Next.js, React, and modern web technologies.',
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
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bogryashov.dev',
    title: 'bogryashovDev - Clear design. Real outcomes.',
    description:
      'I build high-performance, accessible websites that are easy to maintain and scale. Specializing in Next.js, React, and modern web technologies.',
    siteName: 'bogryashovDev',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'bogryashovDev - Clear design. Real outcomes.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'bogryashovDev - Clear design. Real outcomes.',
    description:
      'I build high-performance, accessible websites that are easy to maintain and scale. Specializing in Next.js, React, and modern web technologies.',
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
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
