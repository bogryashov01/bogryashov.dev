'use client';

import { useEffect, useState } from 'react';
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
    };
  } | null>(null);

  useEffect(() => {
    getCopy(locale).then(setCopy);
  }, [locale]);

  // Fallback values to prevent hydration mismatch
  const fallbackCopy = {
    footer: {
      copyright: locale === 'uk' ? 'Всі права захищені.' : 'All rights reserved.',
    },
  };

  const currentCopy = copy || fallbackCopy;

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__content}>
          <div className={styles.footer__logo}>© 2025 bogryashovDev. {currentCopy.footer.copyright}</div>
        </div>
      </div>
    </footer>
  );
}
