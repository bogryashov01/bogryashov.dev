'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/UI/Button/Button';
import { COPY } from '@/lib/copy';
import styles from './ContactCTA.module.scss';

export default function ContactCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={styles.contactCTA}>
      <div className={styles.contactCTA__container}>
        <div className={styles.contactCTA__content}>
          <h2 className={styles.contactCTA__title}>{COPY.contact.cta}</h2>
          <p className={styles.contactCTA__subtitle}>
            Ready to bring your vision to life? Let&apos;s discuss your project and create something amazing together.
          </p>

          <div className={styles.contactCTA__actions}>
            <Button as="link" href={`mailto:${COPY.contact.email}`} size="lg">
              {COPY.contact.email}
            </Button>

            <Button as="link" href="https://t.me/bogryashovdev" external variant="ghost" size="lg">
              {COPY.contact.telegram}
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
