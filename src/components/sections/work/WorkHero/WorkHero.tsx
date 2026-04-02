import Section from '@/components/ui/Section/Section';
import styles from './WorkHero.module.scss';

export default function WorkHero() {
  return (
    <Section className={styles.workHero}>
      <div className={styles.workHero__content}>
        <p className={styles.workHero__eyebrow}>Selected Work</p>

        <h1 className={styles.workHero__title}>Case studies built with product thinking, structure, and long-term scale in mind.</h1>

        <p className={styles.workHero__subtitle}>
          A focused selection of projects across AI systems, educational platforms, and e-commerce experiences — each approached not just as
          UI, but as a product system.
        </p>
      </div>
    </Section>
  );
}
