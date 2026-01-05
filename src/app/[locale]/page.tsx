import { Metadata } from 'next';
import { type Locale } from '@/i18n/config';
import HomePageClient from './HomePageClient';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const baseUrl = 'https://bogryashov.dev';
  const localePrefix = resolvedParams.locale === 'uk' ? '/uk' : '';
  const title = resolvedParams.locale === 'uk'
    ? 'Product-Focused Frontend Engineer — CRMs, SaaS, Dashboards'
    : 'Product-Focused Frontend Engineer — CRMs, SaaS, Dashboards';
  const description = resolvedParams.locale === 'uk'
    ? 'Product-focused frontend engineer building CRMs, dashboards, SaaS interfaces and internal tools. Open to contract and product work.'
    : 'Product-focused frontend engineer building CRMs, dashboards, SaaS interfaces and internal tools. Open to contract and product work.';

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}${localePrefix}`,
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}${localePrefix}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function LocaleHomePage({ params }: Props) {
  const resolvedParams = await params;
  return <HomePageClient locale={resolvedParams.locale} />;
}
