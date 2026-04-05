'use client';

import { useState } from 'react';
import Section from '@/components/UI/Section/Section';
import { SITE_CONFIG } from '@/lib/site-config';
import styles from './ContactDetails.module.scss';

const introPoints = [
  'New product development',
  'SaaS and dashboard frontend',
  'Business websites with stronger structure',
  'UI implementation with product thinking',
];

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialFormState: FormState = {
  name: '',
  email: '',
  company: '',
  message: '',
};

export default function ContactDetails() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || 'Something went wrong.');
      }

      setStatus('success');
      setForm(initialFormState);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section className={styles.contactDetails}>
      <div className={styles.contactDetails__grid}>
        <div className={styles.contactDetails__introCard}>
          <h2 className={styles.contactDetails__title}>Best fit for projects that need both execution and thinking.</h2>

          <p className={styles.contactDetails__text}>
            Whether you are building a new product, improving an existing system, or need a stronger digital presence for your business, I
            can help shape and build it with clarity.
          </p>

          <div className={styles.contactDetails__pointList}>
            {introPoints.map((point) => (
              <div key={point} className={styles.contactDetails__pointItem}>
                <span className={styles.contactDetails__bullet} />
                <p className={styles.contactDetails__pointText}>{point}</p>
              </div>
            ))}
          </div>

          <div className={styles.contactDetails__directLinks}>
            <a href={`mailto:${SITE_CONFIG.email}`} className={styles.contactDetails__directLink}>
              {SITE_CONFIG.email}
            </a>

            <a href={SITE_CONFIG.telegram} target="_blank" rel="noreferrer" className={styles.contactDetails__directLink}>
              {SITE_CONFIG.telegramHandle}
            </a>
          </div>
        </div>

        <div className={styles.contactDetails__formCard}>
          <p className={styles.contactDetails__formLabel}>Start a project</p>

          <form className={styles.contactDetails__form} onSubmit={handleSubmit}>
            <div className={styles.contactDetails__field}>
              <label htmlFor="name" className={styles.contactDetails__fieldLabel}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                className={styles.contactDetails__input}
                placeholder="Your name"
              />
            </div>

            <div className={styles.contactDetails__field}>
              <label htmlFor="email" className={styles.contactDetails__fieldLabel}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className={styles.contactDetails__input}
                placeholder="you@company.com"
              />
            </div>

            <div className={styles.contactDetails__field}>
              <label htmlFor="company" className={styles.contactDetails__fieldLabel}>
                Company / Project
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                className={styles.contactDetails__input}
                placeholder="Company name or project title"
              />
            </div>

            <div className={styles.contactDetails__field}>
              <label htmlFor="message" className={styles.contactDetails__fieldLabel}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                className={`${styles.contactDetails__input} ${styles.contactDetails__textarea}`}
                placeholder="Tell me what you want to build"
              />
            </div>

            <button type="submit" disabled={isSubmitting} className={styles.contactDetails__submit}>
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>

            {status === 'success' && (
              <p className={styles.contactDetails__success}>Message sent successfully. I’ll get back to you soon.</p>
            )}

            {status === 'error' && <p className={styles.contactDetails__error}>{errorMessage}</p>}
          </form>
        </div>
      </div>
    </Section>
  );
}
