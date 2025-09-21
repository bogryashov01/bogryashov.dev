'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Button } from '@/components/UI/Button/Button';
import TypewriterText from '@/components/UI/TypewriterText/TypewriterText';
import { getCopy } from '@/lib/copy';
import { type Locale } from '@/i18n/config';
import styles from './Hero.module.scss';

type Props = {
  locale?: Locale;
};

export default function Hero({ locale = 'en' }: Props) {
  const [copy, setCopy] = useState<{
    hero: {
      h1: string;
      sub: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    clients: string[];
  } | null>(null);

  useEffect(() => {
    getCopy(locale).then(setCopy);
  }, [locale]);

  // Fallback values to prevent hydration mismatch
  const fallbackCopy = {
    hero: {
      h1: locale === 'uk' ? 'Чистий дизайн. Реальні результати.' : 'Clean design. Real results.',
      sub:
        locale === 'uk'
          ? 'Я створюю високопродуктивні, доступні веб-сайти, які легко підтримувати та масштабувати.'
          : 'I build high-performance, accessible websites that are easy to maintain and scale.',
      ctaPrimary: locale === 'uk' ? 'Почати проект' : 'Start a project',
      ctaSecondary: locale === 'uk' ? 'Переглянути роботи' : 'View my work',
    },
    clients:
      locale === 'uk'
        ? ['GCL Privé', 'La Coiffe', 'Al Bacio', 'Bonds', 'MarinhoSteel', 'VentiClean']
        : ['GCL Privé', 'La Coiffe', 'Al Bacio', 'Bonds', 'MarinhoSteel', 'VentiClean'],
  };

  const currentCopy = copy || fallbackCopy;

  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.hero__content}>
          <TypewriterText text={currentCopy.hero.h1} className={styles.hero__title} delay={300} speed={90} lineDelay={400} />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 4.5 }}
            className={styles.hero__subtitle}>
            {currentCopy.hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 4.8 }}
            className={styles.hero__actions}>
            <Button as="link" href={`/${locale}/contact`} size="lg">
              {currentCopy.hero.ctaPrimary}
            </Button>

            <Button as="link" href={`/${locale}/work`} variant="ghost" size="lg">
              {currentCopy.hero.ctaSecondary}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 5.1 }}
            className={styles.hero__clients}>
            {currentCopy.clients.map((client, index) => (
              <span key={client} className={styles.hero__client}>
                {client}
                {index < currentCopy.clients.length - 1 && <span className={styles.hero__separator}>•</span>}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
