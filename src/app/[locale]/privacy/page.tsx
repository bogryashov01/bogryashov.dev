import React from 'react';
import { getCopy } from '@/lib/copy';
import { type Locale } from '@/i18n/config';
import { Section } from '@/components/UI/Section/Section';
import { Card } from '@/components/UI/Card/Card';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function PrivacyPage({ params }: Props) {
  const resolvedParams = await params;
  const copy = await getCopy(resolvedParams.locale);

  return (
    <main className="pt-16">
      <Section>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-8">{copy.privacy.title}</h1>

          <Card>
            <div className="prose prose-invert max-w-none">
              <p className="text-muted mb-6">
                <strong>{copy.privacy.lastUpdated}</strong> {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-2xl font-bold text-text mb-4">{copy.privacy.informationWeCollect}</h2>
              <p className="text-muted mb-4">{copy.privacy.informationWeCollectDescription}</p>
              <ul className="list-disc list-inside text-muted mb-6 space-y-2">
                <li>{copy.privacy.contactThroughWebsite}</li>
                <li>{copy.privacy.subscribeNewsletter}</li>
                <li>{copy.privacy.fillContactForm}</li>
              </ul>

              <h2 className="text-2xl font-bold text-text mb-4">{copy.privacy.howWeUse}</h2>
              <p className="text-muted mb-4">{copy.privacy.howWeUseDescription}</p>
              <ul className="list-disc list-inside text-muted mb-6 space-y-2">
                <li>{copy.privacy.respondInquiries}</li>
                <li>{copy.privacy.sendUpdates}</li>
                <li>{copy.privacy.improveServices}</li>
                <li>{copy.privacy.complyLegal}</li>
              </ul>

              <h2 className="text-2xl font-bold text-text mb-4">{copy.privacy.informationSharing}</h2>
              <p className="text-muted mb-6">{copy.privacy.informationSharingDescription}</p>

              <h2 className="text-2xl font-bold text-text mb-4">{copy.privacy.dataSecurity}</h2>
              <p className="text-muted mb-6">{copy.privacy.dataSecurityDescription}</p>

              <h2 className="text-2xl font-bold text-text mb-4">{copy.privacy.contactUs}</h2>
              <p className="text-muted">
                {copy.privacy.contactUsDescription}{' '}
                <a href="mailto:bogryashov.dev@gmail.com" className="text-accent hover:text-accent-hover">
                  bogryashov.dev@gmail.com
                </a>
              </p>
            </div>
          </Card>
        </div>
      </Section>
    </main>
  );
}
