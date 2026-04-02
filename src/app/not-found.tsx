import Link from 'next/link';
import Button from '@/components/UI/Button/Button';
import Section from '@/components/UI/Section/Section';
import styles from './not-found.module.scss';

export default function NotFound() {
  return (
    <main>
      <Section className={styles.notFound}>
        <div className={styles.notFound__content}>
          <p className={styles.notFound__eyebrow}>404</p>
          <h1 className={styles.notFound__title}>This page does not exist.</h1>
          <p className={styles.notFound__subtitle}>
            The page you are looking for may have been moved, removed, or never existed in the first place.
          </p>

          <div className={styles.notFound__actions}>
            <Button as="link" href="/" size="lg">
              Back to home
            </Button>

            <Link href="/work" className={styles.notFound__link}>
              View case studies
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
