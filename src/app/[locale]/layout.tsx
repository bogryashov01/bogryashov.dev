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
  const baseUrl = 'https://bogryashov.dev';
  const localePrefix = resolvedParams.locale === 'uk' ? '/uk' : '';

  return {
    title: {
      default: resolvedParams.locale === 'uk' 
        ? 'Product-Focused Frontend Engineer — CRMs, SaaS, Dashboards'
        : 'Product-Focused Frontend Engineer — CRMs, SaaS, Dashboards',
      template: '%s | Product-Focused Frontend Engineer',
    },
    description: resolvedParams.locale === 'uk'
      ? 'Product-focused frontend engineer building CRMs, dashboards, SaaS interfaces and internal tools. Open to contract and product work.'
      : 'Product-focused frontend engineer building CRMs, dashboards, SaaS interfaces and internal tools. Open to contract and product work.',
    keywords: copy.meta.keywords,
    authors: [{ name: 'Vladimir Bogryashov' }],
    creator: 'Vladimir Bogryashov',
    publisher: 'bogryashovDev',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}${localePrefix}`,
      languages: {
        en: '/',
        uk: '/uk',
      },
    },
    openGraph: {
      type: 'website',
      locale: resolvedParams.locale === 'uk' ? 'uk_UA' : 'en_US',
      url: `${baseUrl}${localePrefix}`,
      title: resolvedParams.locale === 'uk'
        ? 'Product-Focused Frontend Engineer — CRMs, SaaS, Dashboards'
        : 'Product-Focused Frontend Engineer — CRMs, SaaS, Dashboards',
      description: resolvedParams.locale === 'uk'
        ? 'Product-focused frontend engineer building CRMs, dashboards, SaaS interfaces and internal tools. Open to contract and product work.'
        : 'Product-focused frontend engineer building CRMs, dashboards, SaaS interfaces and internal tools. Open to contract and product work.',
      siteName: 'bogryashovDev',
      images: [
        {
          url: `${baseUrl}/og.png`,
          width: 1200,
          height: 630,
          alt: 'Product-Focused Frontend Engineer — CRMs, SaaS, Dashboards',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedParams.locale === 'uk'
        ? 'Product-Focused Frontend Engineer — CRMs, SaaS, Dashboards'
        : 'Product-Focused Frontend Engineer — CRMs, SaaS, Dashboards',
      description: resolvedParams.locale === 'uk'
        ? 'Product-focused frontend engineer building CRMs, dashboards, SaaS interfaces and internal tools. Open to contract and product work.'
        : 'Product-focused frontend engineer building CRMs, dashboards, SaaS interfaces and internal tools. Open to contract and product work.',
      images: [`${baseUrl}/og.png`],
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
