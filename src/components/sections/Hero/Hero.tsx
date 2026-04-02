'use client';

import { motion } from 'framer-motion';

import Button from '../../UI/Button/Button';
import Container from '../../UI/Container/Container';
import HeroBackdrop from './components/HeroBackdrop/HeroBackdrop';
import ExpertiseStrip from '../ExpertiseStrip/ExpertiseStrip';

import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <HeroBackdrop />

      <Container>
        <div className={styles.hero__content}>
          <motion.p
            className={styles.hero__eyebrow}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}>
            Product Engineer
          </motion.p>

          <motion.h1
            className={styles.hero__title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}>
            I build digital products and systems that are clear, scalable, and built for growth.
          </motion.h1>

          <motion.p
            className={styles.hero__subtitle}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}>
            From SaaS and CRM systems to LMS platforms and e-commerce, I create interfaces and product structures built for real business
            use.
          </motion.p>

          <motion.div
            className={styles.hero__actions}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}>
            <Button as="link" href="/contact" size="lg">
              Discuss a project
            </Button>

            <Button as="link" href="/work" variant="secondary" size="lg">
              View case studies
            </Button>
          </motion.div>
        </div>

        <ExpertiseStrip />
      </Container>
    </section>
  );
}
