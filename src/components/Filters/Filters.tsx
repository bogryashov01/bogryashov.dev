'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { CATEGORIES, type Category } from '@/lib/projects';
import { getCopy } from '@/lib/copy';
import { type Locale } from '@/i18n/config';
import styles from './Filters.module.scss';

interface FiltersProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
  locale?: Locale;
}

export default function Filters({ activeCategory, onCategoryChange, locale = 'en' }: FiltersProps) {
  const [copy, setCopy] = useState<{
    categoryFilters: Record<string, string>;
  } | null>(null);

  useEffect(() => {
    getCopy(locale).then(setCopy);
  }, [locale]);

  // Fallback values to prevent hydration mismatch
  const fallbackCopy = {
    categoryFilters: {
      All: locale === 'uk' ? 'Всі' : 'All',
      'Food & Hospitality': locale === 'uk' ? 'Їжа' : 'Food',
      'Business & Professional': locale === 'uk' ? 'Бізнес' : 'Business',
      'Retail & E-commerce': locale === 'uk' ? 'Магазини' : 'Retail',
      'Health & Beauty': locale === 'uk' ? "Здоров'я" : 'Health',
      'Lifestyle & Services': locale === 'uk' ? 'Послуги' : 'Lifestyle',
    },
  };

  const currentCopy = copy || fallbackCopy;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className={styles.filters}>
      <div className={styles.filters__container}>
        {CATEGORIES.map((category, index) => (
          <motion.button
            key={category}
            className={`${styles.filters__chip} ${activeCategory === category ? styles.active : ''}`}
            onClick={() => onCategoryChange(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}>
            <span className={styles.filters__chipText}>{currentCopy.categoryFilters[category] || category}</span>
            {activeCategory === category && (
              <motion.div
                className={styles.filters__chipGlow}
                layoutId="activeFilter"
                initial={false}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
