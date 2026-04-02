import Section from '@/components/UI/Section/Section';
import { SITE_CONFIG } from '@/lib/site-config';
import styles from './ContactDetails.module.scss';

const contactMethods = [
  {
    label: 'Email',
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    label: 'Telegram',
    value: SITE_CONFIG.telegramHandle,
    href: SITE_CONFIG.telegram,
  },
  {
    label: 'LinkedIn',
    value: 'View profile',
    href: SITE_CONFIG.linkedin,
  },
  {
    label: 'GitHub',
    value: 'View repositories',
    href: SITE_CONFIG.github,
  },
];

const introPoints = [
  'New product development',
  'SaaS and dashboard frontend',
  'Business websites with stronger structure',
  'UI implementation with product thinking',
];

export default function ContactDetails() {
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
        </div>

        <div className={styles.contactDetails__methodsCard}>
          <p className={styles.contactDetails__methodsLabel}>Get in touch</p>

          <div className={styles.contactDetails__methods}>
            {contactMethods.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={styles.contactDetails__method}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                <span className={styles.contactDetails__methodLabel}>{item.label}</span>
                <span className={styles.contactDetails__methodValue}>{item.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
