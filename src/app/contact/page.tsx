'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/UI/Section/Section';
import { Card } from '@/components/UI/Card/Card';
import { Button } from '@/components/UI/Button/Button';
import { Icon } from '@/components/UI/Icon/Icon';
import FAIcon from '@/components/UI/FAIcon/FAIcon';
import { faComments, faBolt, faLightbulb, faClipboardList, faSearch } from '@fortawesome/free-solid-svg-icons';
import { COPY } from '@/lib/copy';
import styles from './contact.module.scss';

export default function ContactPage() {
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
    <main className={styles.contactPage}>
      <Section>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.contactPage__hero}>
          <div className={styles.contactPage__heroContent}>
            <div className={styles.contactPage__heroText}>
              <h1 className={styles.contactPage__heroTitle}>Let&apos;s Work Together</h1>
              <p className={styles.contactPage__heroDescription}>
                Ready to bring your ideas to life? Whether you have a specific project in mind or just want to explore possibilities,
                I&apos;m here to help you create something amazing with clean, efficient solutions.
              </p>
              <div className={styles.contactPage__heroActions}>
                <Button as="link" href={`mailto:${COPY.contact.email}`} size="lg">
                  <Icon name="email" size="sm" />
                  Send Email
                </Button>
                <Button as="link" href="https://t.me/bogryashovdev" external variant="ghost" size="lg">
                  <Icon name="external-link" size="sm" />
                  Telegram
                </Button>
              </div>
            </div>
            <div className={styles.contactPage__heroImage}>
              <div className={styles.contactPage__imagePlaceholder}>
                <FAIcon icon={faComments} size="xl" variant="yellow-bg" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className={styles.contactPage__methods}>
          <h2 className={styles.contactPage__sectionTitle}>Get in Touch</h2>
          <div className={styles.contactPage__methodsGrid}>
            <motion.div variants={itemVariants} className={styles.contactPage__methodCard}>
              <div className={styles.contactPage__methodIcon}>
                <Icon name="email" size="lg" />
              </div>
              <h3 className={styles.contactPage__methodTitle}>Email</h3>
              <p className={styles.contactPage__methodDescription}>For detailed project discussions and formal inquiries</p>
              <a href={`mailto:${COPY.contact.email}`} className={styles.contactPage__methodLink}>
                {COPY.contact.email}
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className={styles.contactPage__methodCard}>
              <div className={styles.contactPage__methodIcon}>
                <Icon name="external-link" size="lg" />
              </div>
              <h3 className={styles.contactPage__methodTitle}>Telegram</h3>
              <p className={styles.contactPage__methodDescription}>Quick questions and casual conversations</p>
              <a
                href="https://t.me/bogryashovdev"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.contactPage__methodLink} external-link`}>
                @bogryashovdev
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* What to Expect */}
        <motion.div variants={itemVariants} className={styles.contactPage__expectations}>
          <h2 className={styles.contactPage__sectionTitle}>What to Expect</h2>
          <div className={styles.contactPage__expectationsGrid}>
            <motion.div
              variants={itemVariants}
              className={styles.contactPage__expectationCard}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2 }}>
              <div className={styles.contactPage__expectationIcon}>
                <FAIcon icon={faBolt} size="lg" variant="yellow-bg" />
              </div>
              <h3 className={styles.contactPage__expectationTitle}>Quick Response</h3>
              <p className={styles.contactPage__expectationDescription}>I&apos;ll get back to you within 24 hours, usually much sooner</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className={styles.contactPage__expectationCard}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2 }}>
              <div className={styles.contactPage__expectationIcon}>
                <FAIcon icon={faLightbulb} size="lg" variant="yellow-bg" />
              </div>
              <h3 className={styles.contactPage__expectationTitle}>Free Consultation</h3>
              <p className={styles.contactPage__expectationDescription}>Initial discussion about your project at no cost</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className={styles.contactPage__expectationCard}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2 }}>
              <div className={styles.contactPage__expectationIcon}>
                <FAIcon icon={faClipboardList} size="lg" variant="yellow-bg" />
              </div>
              <h3 className={styles.contactPage__expectationTitle}>Detailed Proposal</h3>
              <p className={styles.contactPage__expectationDescription}>Comprehensive project plan with timeline and pricing</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className={styles.contactPage__expectationCard}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2 }}>
              <div className={styles.contactPage__expectationIcon}>
                <FAIcon icon={faSearch} size="lg" variant="yellow-bg" />
              </div>
              <h3 className={styles.contactPage__expectationTitle}>Transparency</h3>
              <p className={styles.contactPage__expectationDescription}>Clear communication and honest feedback throughout</p>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={styles.contactPage__cta}>
          <Card className={styles.contactPage__ctaCard}>
            <h2 className={styles.contactPage__ctaTitle}>Ready to Get Started?</h2>
            <p className={styles.contactPage__ctaDescription}>
              Let&apos;s discuss your project and see how we can work together to achieve your goals.
            </p>
            <div className={styles.contactPage__ctaActions}>
              <Button as="link" href={`mailto:${COPY.contact.email}`} size="lg">
                <Icon name="email" size="sm" />
                Start a Project
              </Button>
              <Button as="link" href="https://t.me/bogryashovdev" external variant="ghost" size="lg">
                <Icon name="external-link" size="sm" />
                Quick Chat
              </Button>
            </div>
          </Card>
        </motion.div>
      </Section>
    </main>
  );
}
