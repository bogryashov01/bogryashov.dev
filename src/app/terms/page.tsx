import { Section } from '@/components/UI/Section/Section';
import { Card } from '@/components/UI/Card/Card';

export default function TermsPage() {
  return (
    <main className="pt-16">
      <Section>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-8">Terms of Service</h1>

          <Card>
            <div className="prose prose-invert max-w-none">
              <p className="text-muted mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-2xl font-bold text-text mb-4">Acceptance of Terms</h2>
              <p className="text-muted mb-6">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h2 className="text-2xl font-bold text-text mb-4">Use License</h2>
              <p className="text-muted mb-4">
                Permission is granted to temporarily download one copy of the materials on bogryashovDev&apos;s website for personal,
                non-commercial transitory viewing only.
              </p>
              <p className="text-muted mb-6">
                This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-muted mb-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>

              <h2 className="text-2xl font-bold text-text mb-4">Disclaimer</h2>
              <p className="text-muted mb-6">
                The materials on bogryashovDev&apos;s website are provided on an &apos;as is&apos; basis. bogryashovDev makes no warranties,
                expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties
                or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other
                violation of rights.
              </p>

              <h2 className="text-2xl font-bold text-text mb-4">Limitations</h2>
              <p className="text-muted mb-6">
                In no event shall bogryashovDev or its suppliers be liable for any damages (including, without limitation, damages for loss
                of data or profit, or due to business interruption) arising out of the use or inability to use the materials on
                bogryashovDev&apos;s website, even if bogryashovDev or a bogryashovDev authorized representative has been notified orally or
                in writing of the possibility of such damage.
              </p>

              <h2 className="text-2xl font-bold text-text mb-4">Contact Information</h2>
              <p className="text-muted">
                If you have any questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:hello@bogryashov.dev" className="text-accent hover:text-accent-hover">
                  hello@bogryashov.dev
                </a>
              </p>
            </div>
          </Card>
        </div>
      </Section>
    </main>
  );
}
