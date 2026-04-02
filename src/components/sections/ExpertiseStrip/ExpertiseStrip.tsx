import Reveal from '@/components/UI/Reveal/Reveal';
import Section from '@/components/UI/Section/Section';

import styles from './ExpertiseStrip.module.scss';

const expertiseItems = ['SaaS Platforms', 'CRM Systems', 'Dashboards', 'LMS Products', 'E-commerce', 'Business Websites'];

export default function ExpertiseStrip() {
  return (
    <Section className={styles.expertiseStrip} containerClassName={styles.expertiseStrip__container}>
      <Reveal>
        <div className={styles.expertiseStrip__inner}>
          {expertiseItems.map((item, index) => (
            <span key={item} className={styles.expertiseStrip__item}>
              {item}
              {index < expertiseItems.length - 1 && <span className={styles.expertiseStrip__separator}>•</span>}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
