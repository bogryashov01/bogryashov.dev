import { Metadata } from 'next';
import { type Locale } from '@/i18n/config';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const baseUrl = 'https://bogryashov.dev';
  const localePrefix = resolvedParams.locale === 'uk' ? '/uk' : '';
  const title = resolvedParams.locale === 'uk' ? 'Contact — Let\'s Discuss Your Product' : 'Contact — Let\'s Discuss Your Product';
  const description = resolvedParams.locale === 'uk'
    ? 'Building a CRM, dashboard, SaaS interface, or internal tool? Available for contract work and product discussions.'
    : 'Building a CRM, dashboard, SaaS interface, or internal tool? Available for contract work and product discussions.';

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}${localePrefix}/contact`,
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}${localePrefix}/contact`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function ContactLayout({ children }: Props) {
  return <>{children}</>;
}

