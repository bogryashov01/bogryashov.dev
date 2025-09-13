'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/UI/Section/Section';
import { Card } from '@/components/UI/Card/Card';
import { Button } from '@/components/UI/Button/Button';
import { Icon } from '@/components/UI/Icon/Icon';
import { COPY } from '@/lib/copy';
import styles from './services.module.scss';

const serviceData = {
  'Web Development': {
    icon: '💻',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    features: [
      'Modern React & Next.js applications',
      'TypeScript for type safety',
      'Responsive design for all devices',
      'API integration and data management',
      'Database design and optimization',
      'Version control and deployment',
    ],
  },
  'UI/UX & Design Systems': {
    icon: '🎨',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    features: [
      'User-centered design approach',
      'Design system creation',
      'Component library development',
      'Accessibility compliance (WCAG 2.1)',
      'User testing and research',
      'Prototyping and wireframing',
    ],
  },
  'Performance & SEO': {
    icon: '⚡',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    features: [
      'Core Web Vitals optimization',
      'Lighthouse score improvement',
      'SEO strategy and implementation',
      'Structured data markup',
      'Image and asset optimization',
      'Caching and CDN setup',
    ],
  },
  'Consulting & Audits': {
    icon: '🔍',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    features: [
      'Code quality assessment',
      'Performance audits',
      'Security vulnerability scanning',
      'Accessibility compliance review',
      'SEO analysis and recommendations',
      'Technical strategy planning',
    ],
  },
};

export default function ServicesPage() {
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
    <main className={styles.servicesPage}>
      <Section>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.servicesPage__hero}>
          <div className={styles.servicesPage__heroContent}>
            <div className={styles.servicesPage__heroText}>
              <h1 className={styles.servicesPage__heroTitle}>Services</h1>
              <p className={styles.servicesPage__heroDescription}>
                From stunning user interfaces to robust backend systems, I deliver comprehensive web development services tailored to your
                business needs. Let&apos;s build something amazing together.
              </p>
            </div>
            <div className={styles.servicesPage__heroImage}>
              <div className={styles.servicesPage__imagePlaceholder}>
                <span>🚀</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className={styles.servicesPage__services}>
          <h2 className={styles.servicesPage__sectionTitle}>What I Offer</h2>
          <div className={styles.servicesPage__servicesGrid}>
            {COPY.services.map((service, index) => {
              const serviceInfo = serviceData[service.title as keyof typeof serviceData];
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className={styles.servicesPage__serviceCard}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}>
                  <div className={styles.servicesPage__serviceIcon} style={{ background: serviceInfo.gradient }}>
                    <span>{serviceInfo.icon}</span>
                  </div>
                  <h3 className={styles.servicesPage__serviceTitle}>{service.title}</h3>
                  <p className={styles.servicesPage__serviceDescription}>{service.description}</p>
                  <ul className={styles.servicesPage__serviceFeatures}>
                    {serviceInfo.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={styles.servicesPage__serviceFeature}>
                        <Icon name="arrow-right" size="sm" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={styles.servicesPage__serviceNumber}>{String(index + 1).padStart(2, '0')}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div variants={itemVariants} className={styles.servicesPage__process}>
          <h2 className={styles.servicesPage__sectionTitle}>How I Work</h2>
          <div className={styles.servicesPage__processSteps}>
            <div className={styles.servicesPage__processStep}>
              <div className={styles.servicesPage__stepIcon}>
                <span>📋</span>
              </div>
              <h3 className={styles.servicesPage__stepTitle}>Discovery</h3>
              <p className={styles.servicesPage__stepDescription}>Understanding your goals, requirements, and target audience</p>
            </div>
            <div className={styles.servicesPage__processStep}>
              <div className={styles.servicesPage__stepIcon}>
                <span>🎨</span>
              </div>
              <h3 className={styles.servicesPage__stepTitle}>Design</h3>
              <p className={styles.servicesPage__stepDescription}>Creating wireframes, prototypes, and visual designs</p>
            </div>
            <div className={styles.servicesPage__processStep}>
              <div className={styles.servicesPage__stepIcon}>
                <span>⚙️</span>
              </div>
              <h3 className={styles.servicesPage__stepTitle}>Development</h3>
              <p className={styles.servicesPage__stepDescription}>Building with modern technologies and best practices</p>
            </div>
            <div className={styles.servicesPage__processStep}>
              <div className={styles.servicesPage__stepIcon}>
                <span>🚀</span>
              </div>
              <h3 className={styles.servicesPage__stepTitle}>Launch</h3>
              <p className={styles.servicesPage__stepDescription}>Testing, deployment, and ongoing support</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={styles.servicesPage__cta}>
          <Card className={styles.servicesPage__ctaCard}>
            <h2 className={styles.servicesPage__ctaTitle}>Ready to Get Started?</h2>
            <p className={styles.servicesPage__ctaDescription}>
              Let&apos;s discuss your project requirements and create a solution that exceeds your expectations.
            </p>
            <div className={styles.servicesPage__ctaActions}>
              <Button as="link" href="/contact" size="lg">
                <Icon name="email" size="sm" />
                Start a Project
              </Button>
              <Button as="link" href="/work" variant="ghost" size="lg">
                View My Work
              </Button>
            </div>
          </Card>
        </motion.div>
      </Section>
    </main>
  );
}
