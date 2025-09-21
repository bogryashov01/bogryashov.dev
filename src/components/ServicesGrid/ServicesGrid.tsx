'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getCopy } from '@/lib/copy';
import { type Locale } from '@/i18n/config';
import styles from './ServicesGrid.module.scss';

const icons = {
  'Web Development': '💻',
  'UI/UX & Design Systems': '🎨',
  'Performance & SEO': '⚡',
  'Consulting & Audits': '🔍',
  'Веб-розробка': '💻',
  'UI/UX та дизайн-системи': '🎨',
  'Продуктивність та SEO': '⚡',
  'Консультації та аудити': '🔍',
};

type Props = {
  locale?: Locale;
};

export default function ServicesGrid({ locale = 'en' }: Props) {
  const [copy, setCopy] = useState<{
    services: Array<{ title: string; description: string }>;
  } | null>(null);

  useEffect(() => {
    getCopy(locale).then(setCopy);
  }, [locale]);

  if (!copy) {
    return <div>Loading...</div>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={styles.servicesGrid}>
      {copy.services.map((service) => (
        <motion.div key={service.title} variants={itemVariants} className={styles.servicesGrid__item}>
          <div className={styles.servicesGrid__card}>
            <div className={styles.servicesGrid__icon}>{icons[service.title as keyof typeof icons]}</div>
            <h3 className={styles.servicesGrid__title}>{service.title}</h3>
            <p className={styles.servicesGrid__description}>{service.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
