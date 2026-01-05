'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getCopy } from '@/lib/copy';
import { type Locale } from '@/i18n/config';
import FAIcon from '@/components/UI/FAIcon/FAIcon';
import { faCode, faPalette, faBolt, faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './ServicesGrid.module.scss';

const icons = {
  'CRMs & Business Tools': faCode,
  'Dashboards & SaaS Interfaces': faPalette,
  'System Architecture': faBolt,
  'Product Engineering': faSearch,
  'Веб-розробка': faCode,
  'UI/UX та дизайн-системи': faPalette,
  'Продуктивність та SEO': faBolt,
  'Консультації та аудити': faSearch,
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
            <div className={styles.servicesGrid__icon}>
              <FAIcon icon={icons[service.title as keyof typeof icons]} size="lg" variant="yellow-bg" />
            </div>
            <h3 className={styles.servicesGrid__title}>{service.title}</h3>
            <p className={styles.servicesGrid__description}>{service.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
