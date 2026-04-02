import Link from 'next/link';
import Container from '@/components/ui/Container/Container';
import { FOOTER_NAV_ITEMS, SITE_CONFIG, SOCIAL_ITEMS } from '@/lib/site-config';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__inner}>
          <div className={styles.footer__main}>
            <div className={styles.footer__brand}>
              <p className={styles.footer__eyebrow}>{SITE_CONFIG.name}</p>
              <h2 className={styles.footer__title}>Product engineer building scalable digital systems.</h2>
              <p className={styles.footer__text}>
                SaaS platforms, CRM systems, dashboards, LMS products, and e-commerce experiences built with product thinking and long-term
                structure in mind.
              </p>
            </div>

            <div className={styles.footer__columns}>
              <div className={styles.footer__column}>
                <p className={styles.footer__label}>Navigation</p>
                <div className={styles.footer__links}>
                  {FOOTER_NAV_ITEMS.map((item) => (
                    <Link key={item.href} href={item.href} className={styles.footer__link}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className={styles.footer__column}>
                <p className={styles.footer__label}>Elsewhere</p>
                <div className={styles.footer__links}>
                  {SOCIAL_ITEMS.map((item) => (
                    <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className={styles.footer__link}>
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.footer__bottom}>
            <p className={styles.footer__copyright}>© 2026 {SITE_CONFIG.name}</p>
            <p className={styles.footer__note}>Built with clarity, structure, and intent.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
