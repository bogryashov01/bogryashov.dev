import Reveal from '@/components/ui/Reveal/Reveal';
import Section from '@/components/ui/Section/Section';
import styles from './WhyWorkWithMe.module.scss';

const points = [
  'I think in systems, not isolated screens.',
  'I care about product structure as much as visual polish.',
  'I build with long-term scalability in mind.',
  'I work across SaaS, LMS, e-commerce, and business platforms.',
];

export default function WhyWorkWithMe() {
  return (
    <Section className={styles.whyWorkWithMe}>
      <div className={styles.whyWorkWithMe__layout}>
        <Reveal className={styles.whyWorkWithMe__intro}>
          <p className={styles.whyWorkWithMe__eyebrow}>Why work with me</p>
          <h2 className={styles.whyWorkWithMe__title}>More than implementation. Strong product thinking behind it.</h2>
        </Reveal>

        <div className={styles.whyWorkWithMe__list}>
          {points.map((point, index) => (
            <Reveal key={point} delay={0.06 * index}>
              <div className={styles.whyWorkWithMe__item}>
                <span className={styles.whyWorkWithMe__bullet} />
                <p className={styles.whyWorkWithMe__text}>{point}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
