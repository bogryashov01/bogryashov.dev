import Section from '@/components/ui/Section/Section';
import styles from './ContactHero.module.scss';

export default function ContactHero() {
  return (
    <Section className={styles.contactHero}>
      <div className={styles.contactHero__content}>
        <p className={styles.contactHero__eyebrow}>Contact</p>

        <h1 className={styles.contactHero__title}>Let’s discuss your product, platform, or next digital system.</h1>

        <p className={styles.contactHero__subtitle}>
          I work with founders, teams, and businesses that need more than visual execution — they need structure, clarity, and scalable
          implementation.
        </p>
      </div>
    </Section>
  );
}
