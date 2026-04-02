import Reveal from '@/components/UI/Reveal/Reveal';
import Button from '@/components/UI/Button/Button';
import Section from '@/components/UI/Section/Section';
import styles from './ContactCTA.module.scss';

export default function ContactCTA() {
  return (
    <Section className={styles.contactCta}>
      <Reveal>
        <div className={styles.contactCta__box}>
          <p className={styles.contactCta__eyebrow}>Let’s build something solid</p>

          <h2 className={styles.contactCta__title}>Need a product-minded engineer for your next website, platform, or system?</h2>

          <p className={styles.contactCta__subtitle}>
            I work with founders, teams, and businesses that need more than surface-level execution — they need structure, clarity, and
            scalable implementation.
          </p>

          <div className={styles.contactCta__actions}>
            <Button as="link" href="/contact" size="lg">
              Discuss a project
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
