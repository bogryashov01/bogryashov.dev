'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/UI/Section/Section';
import { Card } from '@/components/UI/Card/Card';
import { Button } from '@/components/UI/Button/Button';
import { Badge } from '@/components/UI/Badge/Badge';
import { COPY } from '@/lib/copy';
import styles from './about.module.scss';

export default function AboutPage() {
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
    <main className={styles.aboutPage}>
      <Section>
        {/* Hero Section with Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.aboutPage__hero}>
          <div className={styles.aboutPage__heroContent}>
            <div className={styles.aboutPage__heroText}>
              <h1 className={styles.aboutPage__heroTitle}>About</h1>
              <p className={styles.aboutPage__heroDescription}>{COPY.about.intro}</p>
            </div>
            <div className={styles.aboutPage__heroImage}>
              <div className={styles.aboutPage__imagePlaceholder}>
                <span>👨‍💻</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div variants={itemVariants} className={styles.aboutPage__valuesSection}>
          <h2 className={styles.aboutPage__sectionTitle}>What Drives Me</h2>
          <div className={styles.aboutPage__valuesGrid}>
            {COPY.about.values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={styles.aboutPage__valueCard}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}>
                <div className={styles.aboutPage__valueIcon}>
                  <span>{['🎯', '⚡', '🚀', '💡', '⭐'][index]}</span>
                </div>
                <h3 className={styles.aboutPage__valueTitle}>{value.title}</h3>
                <p className={styles.aboutPage__valueDescription}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div variants={itemVariants} className={styles.aboutPage__skillsSection}>
          <h2 className={styles.aboutPage__sectionTitle}>Technical Expertise</h2>
          <div className={styles.aboutPage__skillsGrid}>
            {COPY.about.skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={styles.aboutPage__skillItem}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}>
                <Badge variant="accent">{skill}</Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div variants={itemVariants} className={styles.aboutPage__processSection}>
          <h2 className={styles.aboutPage__sectionTitle}>My Process</h2>
          <div className={styles.aboutPage__processSteps}>
            <div className={styles.aboutPage__processStep}>
              <div className={styles.aboutPage__stepNumber}>01</div>
              <h3 className={styles.aboutPage__stepTitle}>Discovery</h3>
              <p className={styles.aboutPage__stepDescription}>Understanding your goals, target audience, and project requirements</p>
            </div>
            <div className={styles.aboutPage__processStep}>
              <div className={styles.aboutPage__stepNumber}>02</div>
              <h3 className={styles.aboutPage__stepTitle}>Design</h3>
              <p className={styles.aboutPage__stepDescription}>
                Creating wireframes, prototypes, and visual designs that bring your vision to life
              </p>
            </div>
            <div className={styles.aboutPage__processStep}>
              <div className={styles.aboutPage__stepNumber}>03</div>
              <h3 className={styles.aboutPage__stepTitle}>Development</h3>
              <p className={styles.aboutPage__stepDescription}>
                Building responsive, performant, and scalable solutions using modern technologies
              </p>
            </div>
            <div className={styles.aboutPage__processStep}>
              <div className={styles.aboutPage__stepNumber}>04</div>
              <h3 className={styles.aboutPage__stepTitle}>Launch</h3>
              <p className={styles.aboutPage__stepDescription}>Deploying, testing, and optimizing your project for maximum impact</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={styles.aboutPage__cta}>
          <Card className={styles.aboutPage__ctaCard}>
            <h2 className={styles.aboutPage__ctaTitle}>Let&apos;s work together</h2>
            <p className={styles.aboutPage__ctaDescription}>
              I&apos;m always interested in new projects and opportunities. Let&apos;s discuss how we can bring your ideas to life.
            </p>
            <Button as="link" href="/contact" size="lg">
              Get in touch
            </Button>
          </Card>
        </motion.div>
      </Section>
    </main>
  );
}
