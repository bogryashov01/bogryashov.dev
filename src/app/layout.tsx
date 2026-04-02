import type { Metadata } from 'next';
import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import { SITE_CONFIG } from '@/lib/site-config';
import '@/styles/global.scss';

const siteTitle = `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`;
const siteDescription =
  'Product engineer building scalable SaaS platforms, CRM systems, dashboards, LMS products, and e-commerce experiences.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: siteTitle,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: siteDescription,
  applicationName: SITE_CONFIG.name,
  manifest: '/manifest.webmanifest',
  keywords: [
    'Product Engineer',
    'Frontend Engineer',
    'React Developer',
    'Next.js Developer',
    'SaaS Development',
    'CRM Systems',
    'Dashboard Development',
    'LMS Platform',
    'E-commerce Development',
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.domain }],
  creator: SITE_CONFIG.name,
  alternates: {
    canonical: SITE_CONFIG.domain,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
