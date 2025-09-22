'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getCopy } from '@/lib/copy';
import { type Locale } from '@/i18n/config';
import { Section } from '@/components/UI/Section/Section';
import { Card } from '@/components/UI/Card/Card';
import { Button } from '@/components/UI/Button/Button';
import { Icon } from '@/components/UI/Icon/Icon';
import FAIcon from '@/components/UI/FAIcon/FAIcon';
import { faComments, faBolt, faLightbulb, faClipboardList, faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from '../../contact/contact.module.scss';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default function ContactPage({ params }: Props) {
  const resolvedParams = React.use(params);
  const [copy, setCopy] = useState<{
    contact: {
      title: string;
      description: string;
      sendEmail: string;
      telegram: string;
      getInTouch: string;
      emailTitle: string;
      emailDescription: string;
      telegramTitle: string;
      telegramDescription: string;
      whatToExpect: string;
      quickResponse: string;
      quickResponseDescription: string;
      freeConsultation: string;
      freeConsultationDescription: string;
      detailedProposal: string;
      detailedProposalDescription: string;
      transparency: string;
      transparencyDescription: string;
      readyToStart: string;
      readyToStartDescription: string;
      startProject: string;
      quickChat: string;
      email: string;
      cta: string;
      ctaSubtitle: string;
    };
  } | null>(null);

  useEffect(() => {
    getCopy(resolvedParams.locale).then(setCopy);
  }, [resolvedParams.locale]);

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
              <h1 className={styles.contactPage__heroTitle}>{copy.contact.title}</h1>
              <p className={styles.contactPage__heroDescription}>{copy.contact.description}</p>
              <div className={styles.contactPage__heroActions}>
                <Button as="link" href={`mailto:${copy.contact.email}`} size="lg">
                  <Icon name="email" size="sm" />
                  {copy.contact.sendEmail}
                </Button>
                <Button as="link" href="https://t.me/bogryashovdev" external variant="ghost" size="lg">
                  <Icon name="external-link" size="sm" />
                  {copy.contact.telegram}
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
          <h2 className={styles.contactPage__sectionTitle}>{copy.contact.getInTouch}</h2>
          <div className={styles.contactPage__methodsGrid}>
            <motion.div variants={itemVariants} className={styles.contactPage__methodCard}>
              <div className={styles.contactPage__methodIcon}>
                <Icon name="email" size="lg" />
              </div>
              <h3 className={styles.contactPage__methodTitle}>{copy.contact.emailTitle}</h3>
              <p className={styles.contactPage__methodDescription}>{copy.contact.emailDescription}</p>
              <a href={`mailto:${copy.contact.email}`} className={styles.contactPage__methodLink}>
                {copy.contact.email}
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className={styles.contactPage__methodCard}>
              <div className={styles.contactPage__methodIcon}>
                <Icon name="external-link" size="lg" />
              </div>
              <h3 className={styles.contactPage__methodTitle}>{copy.contact.telegramTitle}</h3>
              <p className={styles.contactPage__methodDescription}>{copy.contact.telegramDescription}</p>
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
          <h2 className={styles.contactPage__sectionTitle}>{copy.contact.whatToExpect}</h2>
          <div className={styles.contactPage__expectationsGrid}>
            <motion.div
              variants={itemVariants}
              className={styles.contactPage__expectationCard}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2 }}>
              <div className={styles.contactPage__expectationIcon}>
                <FAIcon icon={faBolt} size="lg" variant="yellow-bg" />
              </div>
              <h3 className={styles.contactPage__expectationTitle}>{copy.contact.quickResponse}</h3>
              <p className={styles.contactPage__expectationDescription}>{copy.contact.quickResponseDescription}</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className={styles.contactPage__expectationCard}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2 }}>
              <div className={styles.contactPage__expectationIcon}>
                <FAIcon icon={faLightbulb} size="lg" variant="yellow-bg" />
              </div>
              <h3 className={styles.contactPage__expectationTitle}>{copy.contact.freeConsultation}</h3>
              <p className={styles.contactPage__expectationDescription}>{copy.contact.freeConsultationDescription}</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className={styles.contactPage__expectationCard}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2 }}>
              <div className={styles.contactPage__expectationIcon}>
                <FAIcon icon={faClipboardList} size="lg" variant="yellow-bg" />
              </div>
              <h3 className={styles.contactPage__expectationTitle}>{copy.contact.detailedProposal}</h3>
              <p className={styles.contactPage__expectationDescription}>{copy.contact.detailedProposalDescription}</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className={styles.contactPage__expectationCard}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2 }}>
              <div className={styles.contactPage__expectationIcon}>
                <FAIcon icon={faSearch} size="lg" variant="yellow-bg" />
              </div>
              <h3 className={styles.contactPage__expectationTitle}>{copy.contact.transparency}</h3>
              <p className={styles.contactPage__expectationDescription}>{copy.contact.transparencyDescription}</p>
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
            <h2 className={styles.contactPage__ctaTitle}>{copy.contact.readyToStart}</h2>
            <p className={styles.contactPage__ctaDescription}>{copy.contact.readyToStartDescription}</p>
            <div className={styles.contactPage__ctaActions}>
              <Button as="link" href={`mailto:${copy.contact.email}`} size="lg">
                <Icon name="email" size="sm" />
                {copy.contact.startProject}
              </Button>
              <Button as="link" href="https://t.me/bogryashovdev" external variant="ghost" size="lg">
                <Icon name="external-link" size="sm" />
                {copy.contact.quickChat}
              </Button>
            </div>
          </Card>
        </motion.div>
      </Section>
    </main>
  );
}
