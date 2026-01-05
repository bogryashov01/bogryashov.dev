import { Metadata } from 'next';
import { type Locale } from '@/i18n/config';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;
  const baseUrl = 'https://bogryashov.dev';
  const localePrefix = locale === 'uk' ? '/uk' : '';
  const title = locale === 'uk' ? 'Work — Project Portfolio' : 'Work — Project Portfolio';
  const description = locale === 'uk'
    ? 'Case studies of product-focused engineering work: CRMs, dashboards, SaaS interfaces, and internal tools.'
    : 'Case studies of product-focused engineering work: CRMs, dashboards, SaaS interfaces, and internal tools.';

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}${localePrefix}/work`,
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}${localePrefix}/work`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function WorkLayout({ children }: Props) {
  return <>{children}</>;
}

