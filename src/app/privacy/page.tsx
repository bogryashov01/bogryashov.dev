import { Section } from '@/components/UI/Section/Section';
import { Card } from '@/components/UI/Card/Card';

export default function PrivacyPage() {
  return (
    <main className="pt-16">
      <Section>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-8">Privacy Policy</h1>

          <Card>
            <div className="prose prose-invert max-w-none">
              <p className="text-muted mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-2xl font-bold text-text mb-4">Information We Collect</h2>
              <p className="text-muted mb-4">We collect information you provide directly to us, such as when you:</p>
              <ul className="list-disc list-inside text-muted mb-6 space-y-2">
                <li>Contact us through our website</li>
                <li>Subscribe to our newsletter</li>
                <li>Fill out a contact form</li>
              </ul>

              <h2 className="text-2xl font-bold text-text mb-4">How We Use Your Information</h2>
              <p className="text-muted mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-muted mb-6 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you technical information and updates about our services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-text mb-4">Information Sharing</h2>
              <p className="text-muted mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as
                described in this privacy policy.
              </p>

              <h2 className="text-2xl font-bold text-text mb-4">Data Security</h2>
              <p className="text-muted mb-6">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration,
                disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-bold text-text mb-4">Contact Us</h2>
              <p className="text-muted">
                If you have any questions about this Privacy Policy, please contact us at{' '}
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
