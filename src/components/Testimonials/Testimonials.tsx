'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/UI/Button/Button';
import { COPY } from '@/lib/copy';
import styles from './Testimonials.module.scss';

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={styles.testimonials}>
      <div className={styles.testimonials__container}>
        <motion.div variants={itemVariants} className={styles.testimonials__header}>
          <h2 className={styles.testimonials__title}>What clients say</h2>
          <p className={styles.testimonials__subtitle}>
            Don&apos;t just take my word for it. Here&apos;s what clients have to say about working together.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className={styles.testimonials__grid}>
          {COPY.testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants} className={styles.testimonials__item}>
              <div className={styles.testimonials__card}>
                <blockquote className={styles.testimonials__quote}>&ldquo;{testimonial.quote}&rdquo;</blockquote>
                <div className={styles.testimonials__author}>
                  <div className={styles.testimonials__authorName}>{testimonial.author}</div>
                  <div className={styles.testimonials__authorCompany}>{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className={styles.testimonials__cta}>
          <Button as="link" href="/contact" size="lg">
            Start a project
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
