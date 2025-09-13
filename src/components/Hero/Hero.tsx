'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/UI/Button/Button';
import { COPY } from '@/lib/copy';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.hero__content}>
          <h1 className={styles.hero__title}>{COPY.hero.h1}</h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.hero__subtitle}>
            {COPY.hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={styles.hero__actions}>
            <Button as="link" href="/contact" size="lg">
              {COPY.hero.ctaPrimary}
            </Button>

            <Button as="link" href="/work" variant="ghost" size="lg">
              {COPY.hero.ctaSecondary}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={styles.hero__clients}>
            {COPY.clients.map((client, index) => (
              <span key={client} className={styles.hero__client}>
                {client}
                {index < COPY.clients.length - 1 && <span className={styles.hero__separator}>•</span>}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
