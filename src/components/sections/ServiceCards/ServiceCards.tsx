import Reveal from '@/components/UI/Reveal/Reveal';
import Section from '@/components/UI/Section/Section';
import SectionHeading from '@/components/UI/SectionHeading/SectionHeading';
import styles from './ServiceCards.module.scss';

const services = [
  {
    title: 'Product Interfaces',
    description:
      'Frontend development for SaaS products, CRM systems, dashboards, and internal tools with focus on clarity, scale, and real workflows.',
  },
  {
    title: 'Business Websites',
    description:
      'Premium websites for brands and businesses that need more than visuals — structure, credibility, and conversion matter too.',
  },
  {
    title: 'System Thinking',
    description:
      'I help shape product structure, flows, and interface logic so the product works as a system, not just as a set of screens.',
  },
];

export default function ServiceCards() {
  return (
    <Section className={styles.serviceCards}>
      <SectionHeading
        eyebrow="How I can help"
        title="Built for business goals, not just visual output"
        subtitle="From scalable product interfaces to conversion-focused business websites, I build digital experiences that are meant to be used, understood, and grown."
        className={styles.serviceCards__header}
      />

      <div className={styles.serviceCards__grid}>
        {services.map((service, index) => (
          <Reveal key={service.title} delay={0.06 * index}>
            <article className={styles.serviceCards__card}>
              <h3 className={styles.serviceCards__cardTitle}>{service.title}</h3>
              <p className={styles.serviceCards__cardDescription}>{service.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
