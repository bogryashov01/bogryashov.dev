import React, { useEffect, useState } from 'react';
import { getCopy } from '@/lib/copy';
import { type Locale } from '@/i18n/config';
import { Section } from '@/components/UI/Section/Section';
import { Card } from '@/components/UI/Card/Card';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function TermsPage({ params }: Props) {
  const resolvedParams = await params;
  const copy = await getCopy(resolvedParams.locale);

  return (
    <main className="pt-16">
      <Section>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-8">{copy.terms.title}</h1>

          <Card>
            <div className="prose prose-invert max-w-none">
              <p className="text-muted mb-6">
                <strong>{copy.terms.lastUpdated}</strong> {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-2xl font-bold text-text mb-4">{copy.terms.acceptanceOfTerms}</h2>
              <p className="text-muted mb-6">{copy.terms.acceptanceDescription}</p>

              <h2 className="text-2xl font-bold text-text mb-4">{copy.terms.useLicense}</h2>
              <p className="text-muted mb-4">{copy.terms.useLicenseDescription}</p>
              <p className="text-muted mb-6">{copy.terms.licenseRestriction}</p>
              <ul className="list-disc list-inside text-muted mb-6 space-y-2">
                <li>{copy.terms.modifyMaterials}</li>
                <li>{copy.terms.commercialUse}</li>
                <li>{copy.terms.reverseEngineer}</li>
                <li>{copy.terms.removeCopyright}</li>
              </ul>

              <h2 className="text-2xl font-bold text-text mb-4">{copy.terms.disclaimer}</h2>
              <p className="text-muted mb-6">{copy.terms.disclaimerDescription}</p>

              <h2 className="text-2xl font-bold text-text mb-4">{copy.terms.limitations}</h2>
              <p className="text-muted mb-6">{copy.terms.limitationsDescription}</p>

              <h2 className="text-2xl font-bold text-text mb-4">{copy.terms.contactInformation}</h2>
              <p className="text-muted">
                {copy.terms.contactInformationDescription}{' '}
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
