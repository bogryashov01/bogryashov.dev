'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getCopy } from '@/lib/copy';
import { type Locale } from '@/i18n/config';
import { Section } from '@/components/UI/Section/Section';
import { Card } from '@/components/UI/Card/Card';
import { Badge } from '@/components/UI/Badge/Badge';
import { Button } from '@/components/UI/Button/Button';
import FAIcon from '@/components/UI/FAIcon/FAIcon';
import { faUser, faBullseye, faBolt, faRocket, faLightbulb, faStar } from '@fortawesome/free-solid-svg-icons';
import styles from '../../about/about.module.scss';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default function AboutPage({ params }: Props) {
  const resolvedParams = React.use(params);
  const [copy, setCopy] = useState<{
    about: {
      intro: string;
      values: Array<{ title: string; description: string }>;
      skills: string[];
    };
    aboutPage: {
      title: string;
      whatDrivesMe: string;
      technicalExpertise: string;
      myProcess: string;
      letsWorkTogether: string;
      letsWorkTogetherDescription: string;
      getInTouch: string;
      processSteps: {
        discovery: string;
        discoveryDescription: string;
        design: string;
        designDescription: string;
        development: string;
        developmentDescription: string;
        launch: string;
        launchDescription: string;
      };
    };
  } | null>(null);

  useEffect(() => {
    getCopy(resolvedParams.locale).then(setCopy);
  }, [resolvedParams.locale]);

  if (!copy) {
    return <div>Loading...</div>;
  }

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
              <h1 className={styles.aboutPage__heroTitle}>{copy.aboutPage.title}</h1>
              <p className={styles.aboutPage__heroDescription}>{copy.about.intro}</p>
            </div>
            <div className={styles.aboutPage__heroImage}>
              <div className={styles.aboutPage__imagePlaceholder}>
                <FAIcon icon={faUser} size="xl" variant="yellow-bg" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.aboutPage__valuesSection}>
          <h2 className={styles.aboutPage__sectionTitle}>{copy.aboutPage.whatDrivesMe}</h2>
          <div className={styles.aboutPage__valuesGrid}>
            {copy.about.values.map((value, index: number) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={styles.aboutPage__valueCard}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}>
                <div className={styles.aboutPage__valueIcon}>
                  <FAIcon icon={[faBullseye, faBolt, faRocket, faLightbulb, faStar][index]} size="lg" variant="yellow-bg" />
                </div>
                <h3 className={styles.aboutPage__valueTitle}>{value.title}</h3>
                <p className={styles.aboutPage__valueDescription}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.aboutPage__skillsSection}>
          <h2 className={styles.aboutPage__sectionTitle}>{copy.aboutPage.technicalExpertise}</h2>
          <div className={styles.aboutPage__skillsGrid}>
            {copy.about.skills.map((skill: string, index: number) => (
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
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.aboutPage__processSection}>
          <h2 className={styles.aboutPage__sectionTitle}>{copy.aboutPage.myProcess}</h2>
          <div className={styles.aboutPage__processSteps}>
            <div className={styles.aboutPage__processStep}>
              <div className={styles.aboutPage__stepNumber}>01</div>
              <h3 className={styles.aboutPage__stepTitle}>{copy.aboutPage.processSteps.discovery}</h3>
              <p className={styles.aboutPage__stepDescription}>{copy.aboutPage.processSteps.discoveryDescription}</p>
            </div>
            <div className={styles.aboutPage__processStep}>
              <div className={styles.aboutPage__stepNumber}>02</div>
              <h3 className={styles.aboutPage__stepTitle}>{copy.aboutPage.processSteps.design}</h3>
              <p className={styles.aboutPage__stepDescription}>{copy.aboutPage.processSteps.designDescription}</p>
            </div>
            <div className={styles.aboutPage__processStep}>
              <div className={styles.aboutPage__stepNumber}>03</div>
              <h3 className={styles.aboutPage__stepTitle}>{copy.aboutPage.processSteps.development}</h3>
              <p className={styles.aboutPage__stepDescription}>{copy.aboutPage.processSteps.developmentDescription}</p>
            </div>
            <div className={styles.aboutPage__processStep}>
              <div className={styles.aboutPage__stepNumber}>04</div>
              <h3 className={styles.aboutPage__stepTitle}>{copy.aboutPage.processSteps.launch}</h3>
              <p className={styles.aboutPage__stepDescription}>{copy.aboutPage.processSteps.launchDescription}</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={styles.aboutPage__cta}>
          <Card className={styles.aboutPage__ctaCard}>
            <h2 className={styles.aboutPage__ctaTitle}>{copy.aboutPage.letsWorkTogether}</h2>
            <p className={styles.aboutPage__ctaDescription}>{copy.aboutPage.letsWorkTogetherDescription}</p>
            <Button as="link" href={`/${resolvedParams.locale}/contact`} size="lg">
              {copy.aboutPage.getInTouch}
            </Button>
          </Card>
        </motion.div>
      </Section>
    </main>
  );
}
