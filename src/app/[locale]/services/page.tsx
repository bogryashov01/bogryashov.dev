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
import { faCode, faPalette, faBolt, faSearch, faRocket, faClipboardList, faCogs } from '@fortawesome/free-solid-svg-icons';
import styles from '../../services/services.module.scss';

type Props = {
  params: Promise<{ locale: Locale }>;
};

const serviceData = {
  'Web Development': {
    icon: faCode,
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
    icon: faPalette,
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
    icon: faBolt,
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
    icon: faSearch,
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

const serviceDataUk = {
  'Веб-розробка': {
    icon: faCode,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    features: [
      'Сучасні додатки на React та Next.js',
      'TypeScript для безпеки типів',
      'Адаптивний дизайн для всіх пристроїв',
      'Інтеграція API та управління даними',
      'Дизайн та оптимізація баз даних',
      'Контроль версій та розгортання',
    ],
  },
  'UI/UX та дизайн-системи': {
    icon: faPalette,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    features: [
      'Підхід, орієнтований на користувача',
      'Створення дизайн-систем',
      'Розробка бібліотек компонентів',
      'Відповідність доступності (WCAG 2.1)',
      'Тестування та дослідження користувачів',
      'Прототипування та створення макетів',
    ],
  },
  'Продуктивність та SEO': {
    icon: faBolt,
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    features: [
      'Оптимізація Core Web Vitals',
      'Покращення балів Lighthouse',
      'SEO стратегія та впровадження',
      'Розмітка структурованих даних',
      'Оптимізація зображень та ресурсів',
      'Налаштування кешування та CDN',
    ],
  },
  'Консультації та аудити': {
    icon: faSearch,
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    features: [
      'Оцінка якості коду',
      'Аудити продуктивності',
      'Сканування вразливостей безпеки',
      'Огляд відповідності доступності',
      'SEO аналіз та рекомендації',
      'Планування технічної стратегії',
    ],
  },
};

export default function ServicesPage({ params }: Props) {
  const resolvedParams = React.use(params);
  const [copy, setCopy] = useState<{
    servicesPage: {
      title: string;
      subtitle: string;
      whatIOffer: string;
      howIWork: string;
      discovery: string;
      discoveryDescription: string;
      design: string;
      designDescription: string;
      development: string;
      developmentDescription: string;
      launch: string;
      launchDescription: string;
      readyToStart: string;
      readyToStartDescription: string;
      startProject: string;
      viewMyWork: string;
    };
    services: Array<{ title: string; description: string }>;
  } | null>(null);

  useEffect(() => {
    getCopy(resolvedParams.locale).then(setCopy);
  }, [resolvedParams.locale]);

  if (!copy) {
    return <div>Loading...</div>;
  }

  const currentServiceData = resolvedParams.locale === 'uk' ? serviceDataUk : serviceData;

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
              <h1 className={styles.servicesPage__heroTitle}>{copy.servicesPage.title}</h1>
              <p className={styles.servicesPage__heroDescription}>{copy.servicesPage.subtitle}</p>
            </div>
            <div className={styles.servicesPage__heroImage}>
              <div className={styles.servicesPage__imagePlaceholder}>
                <FAIcon icon={faRocket} size="xl" variant="yellow-bg" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className={styles.servicesPage__services}>
          <h2 className={styles.servicesPage__sectionTitle}>{copy.servicesPage.whatIOffer}</h2>
          <div className={styles.servicesPage__servicesGrid}>
            {copy.services.map((service: { title: string; description: string }, index: number) => {
              const serviceInfo = Object.values(currentServiceData)[index] as { icon: string; gradient: string; features: string[] };
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className={styles.servicesPage__serviceCard}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}>
                  <div className={styles.servicesPage__serviceIcon}>
                    <FAIcon icon={serviceInfo.icon} size="xl" variant="yellow-bg" />
                  </div>
                  <h3 className={styles.servicesPage__serviceTitle}>{service.title}</h3>
                  <p className={styles.servicesPage__serviceDescription}>{service.description}</p>
                  <ul className={styles.servicesPage__serviceFeatures}>
                    {serviceInfo.features.map((feature: string, featureIndex: number) => (
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
          <h2 className={styles.servicesPage__sectionTitle}>{copy.servicesPage.howIWork}</h2>
          <div className={styles.servicesPage__processSteps}>
            <div className={styles.servicesPage__processStep}>
              <div className={styles.servicesPage__stepIcon}>
                <FAIcon icon={faClipboardList} size="lg" variant="yellow-bg" />
              </div>
              <h3 className={styles.servicesPage__stepTitle}>{copy.servicesPage.discovery}</h3>
              <p className={styles.servicesPage__stepDescription}>{copy.servicesPage.discoveryDescription}</p>
            </div>
            <div className={styles.servicesPage__processStep}>
              <div className={styles.servicesPage__stepIcon}>
                <FAIcon icon={faPalette} size="lg" variant="yellow-bg" />
              </div>
              <h3 className={styles.servicesPage__stepTitle}>{copy.servicesPage.design}</h3>
              <p className={styles.servicesPage__stepDescription}>{copy.servicesPage.designDescription}</p>
            </div>
            <div className={styles.servicesPage__processStep}>
              <div className={styles.servicesPage__stepIcon}>
                <FAIcon icon={faCogs} size="lg" variant="yellow-bg" />
              </div>
              <h3 className={styles.servicesPage__stepTitle}>{copy.servicesPage.development}</h3>
              <p className={styles.servicesPage__stepDescription}>{copy.servicesPage.developmentDescription}</p>
            </div>
            <div className={styles.servicesPage__processStep}>
              <div className={styles.servicesPage__stepIcon}>
                <FAIcon icon={faRocket} size="lg" variant="yellow-bg" />
              </div>
              <h3 className={styles.servicesPage__stepTitle}>{copy.servicesPage.launch}</h3>
              <p className={styles.servicesPage__stepDescription}>{copy.servicesPage.launchDescription}</p>
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
            <h2 className={styles.servicesPage__ctaTitle}>{copy.servicesPage.readyToStart}</h2>
            <p className={styles.servicesPage__ctaDescription}>{copy.servicesPage.readyToStartDescription}</p>
            <div className={styles.servicesPage__ctaActions}>
              <Button as="link" href={`/${resolvedParams.locale}/contact`} size="lg">
                <Icon name="email" size="sm" />
                {copy.servicesPage.startProject}
              </Button>
              <Button as="link" href={`/${resolvedParams.locale}/work`} variant="ghost" size="lg">
                {copy.servicesPage.viewMyWork}
              </Button>
            </div>
          </Card>
        </motion.div>
      </Section>
    </main>
  );
}
