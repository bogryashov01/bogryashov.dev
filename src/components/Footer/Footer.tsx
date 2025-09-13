import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__content}>
          <div className={styles.footer__logo}>© 2024 bogryashovDev. All rights reserved.</div>
          <nav className={styles.footer__links}>
            <Link href="/privacy" className={`${styles.footer__link} no-underline`}>
              Privacy Policy
            </Link>
            <Link href="/terms" className={`${styles.footer__link} no-underline`}>
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
