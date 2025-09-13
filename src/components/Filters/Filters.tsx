'use client';

import { motion } from 'framer-motion';
import { CATEGORIES, type Category } from '@/lib/projects';
import styles from './Filters.module.scss';

interface FiltersProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export default function Filters({ activeCategory, onCategoryChange }: FiltersProps) {
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
            <span className={styles.filters__chipText}>{category}</span>
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
