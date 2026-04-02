import Reveal from '@/components/ui/Reveal/Reveal';
import Container from '@/components/ui/Container/Container';
import styles from './TrustBlock.module.scss';

const stats = [
  {
    value: '7+',
    label: 'Years of experience',
  },
  {
    value: '20+',
    label: 'Projects delivered',
  },
  {
    value: 'SaaS / CRM',
    label: 'Core focus',
  },
];

const stack = ['React', 'Next.js', 'Node.js', 'System Architecture', 'Data-driven UI', 'Scalable Frontend'];

export default function TrustBlock() {
  return (
    <section className={styles.trust}>
      <Container>
        <div className={styles.trust__inner}>
          <div className={styles.trust__stats}>
            {stats.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.1}>
                <div className={styles.trust__stat}>
                  <div className={styles.trust__value}>{item.value}</div>
                  <div className={styles.trust__label}>{item.label}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className={styles.trust__stack}>
              {stack.map((tech) => (
                <span key={tech} className={styles.trust__tag}>
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
