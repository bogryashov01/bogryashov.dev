'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Button } from '@/components/UI/Button/Button';
import { getCopy } from '@/lib/copy';
import { type Locale } from '@/i18n/config';
import styles from './ContactCTA.module.scss';

type Props = {
  locale?: Locale;
};

export default function ContactCTA({ locale = 'en' }: Props) {
  const [copy, setCopy] = useState<{
    contact: {
      cta: string;
      email: string;
      telegram: string;
    };
  } | null>(null);

  useEffect(() => {
    getCopy(locale).then(setCopy);
  }, [locale]);

  if (!copy) {
    return <div>Loading...</div>;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={styles.contactCTA}>
      <div className={styles.contactCTA__container}>
        <div className={styles.contactCTA__content}>
          <h2 className={styles.contactCTA__title}>{copy.contact.cta}</h2>
          <p className={styles.contactCTA__subtitle}>
            {locale === 'uk'
              ? 'Готові втілити ваше бачення в життя? Давайте обговоримо ваш проект і створимо щось дивовижне разом.'
              : "Ready to bring your vision to life? Let's discuss your project and create something amazing together."}
          </p>

          <div className={styles.contactCTA__actions}>
            <Button as="link" href={`mailto:${copy.contact.email}`} size="lg">
              {copy.contact.email}
            </Button>

            <Button as="link" href="https://t.me/bogryashovdev" external variant="ghost" size="lg">
              {copy.contact.telegram}
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
