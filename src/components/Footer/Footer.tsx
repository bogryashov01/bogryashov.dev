'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCopy } from '@/lib/copy';
import { type Locale } from '@/i18n/config';
import styles from './Footer.module.scss';

type Props = {
  locale?: Locale;
};

export default function Footer({ locale = 'en' }: Props) {
  const [copy, setCopy] = useState<{
    footer: {
      copyright: string;
      privacyPolicy: string;
      termsOfService: string;
    };
  } | null>(null);

  useEffect(() => {
    getCopy(locale).then(setCopy);
  }, [locale]);

  // Fallback values to prevent hydration mismatch
  const fallbackCopy = {
    footer: {
      copyright: locale === 'uk' ? 'Всі права захищені.' : 'All rights reserved.',
      privacyPolicy: locale === 'uk' ? 'Політика конфіденційності' : 'Privacy Policy',
      termsOfService: locale === 'uk' ? 'Умови використання' : 'Terms of Service',
    },
  };

  const currentCopy = copy || fallbackCopy;

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__content}>
          <div className={styles.footer__logo}>© 2024 bogryashovDev. {currentCopy.footer.copyright}</div>
          <nav className={styles.footer__links}>
            <Link href={`/${locale}/privacy`} className={`${styles.footer__link} no-underline`}>
              {currentCopy.footer.privacyPolicy}
            </Link>
            <Link href={`/${locale}/terms`} className={`${styles.footer__link} no-underline`}>
              {currentCopy.footer.termsOfService}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
