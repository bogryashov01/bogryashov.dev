import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { ScrollToTop } from '@/components/UI/ScrollToTop/ScrollToTop';
import { getCopy } from '@/lib/copy';
import { i18n, type Locale } from '@/i18n/config';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const copy = await getCopy(resolvedParams.locale);

  return {
    title: copy.meta.title,
    description: copy.meta.description,
    keywords: copy.meta.keywords,
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
      locale: resolvedParams.locale === 'uk' ? 'uk_UA' : 'en_US',
      url: 'https://bogryashov.dev',
      title: copy.meta.title,
      description: copy.meta.description,
      siteName: 'bogryashovDev',
      images: [
        {
          url: '/og.png',
          width: 1200,
          height: 630,
          alt: copy.meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.meta.title,
      description: copy.meta.description,
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
}

export default async function LocaleLayout({ children, params }: Props) {
  const resolvedParams = await params;
  return (
    <html lang={resolvedParams.locale} className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0F1114" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <Header locale={resolvedParams.locale} />
        {children}
        <Footer locale={resolvedParams.locale} />
        <ScrollToTop />
      </body>
    </html>
  );
}
