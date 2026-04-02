import type { Metadata } from 'next';
import ContactPage from '@/components/sections/ContactPage/ContactPage';

export const metadata: Metadata = {
  title: 'Contact — Volodymyr Bogryashov',
  description: 'Get in touch to discuss SaaS products, dashboards, LMS platforms, e-commerce, or business websites.',
};

export default function Page() {
  return (
    <main>
      <ContactPage />
    </main>
  );
}
