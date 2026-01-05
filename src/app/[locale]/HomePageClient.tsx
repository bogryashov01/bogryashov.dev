'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Script from 'next/script';
import Hero from '@/components/Hero/Hero';
import Filters from '@/components/Filters/Filters';
import WorkGrid from '@/components/WorkGrid/WorkGrid';
import ServicesGrid from '@/components/ServicesGrid/ServicesGrid';
import ContactCTA from '@/components/ContactCTA/ContactCTA';
import { Section } from '@/components/UI/Section/Section';
import { PROJECTS, type Category } from '@/lib/projects';
import { getCopy } from '@/lib/copy';
import { type Locale } from '@/i18n/config';
import styles from '../page.module.scss';

type Props = {
  locale: Locale;
};

export default function HomePageClient({ locale }: Props) {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [copy, setCopy] = useState<{
    homepage: {
      selectedWork: string;
      selectedWorkSubtitle: string;
      viewAllWork: string;
      servicesTitle: string;
      servicesSubtitle: string;
      microCta: string;
    };
  } | null>(null);

  useEffect(() => {
    getCopy(locale).then(setCopy);
  }, [locale]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return PROJECTS.slice(0, 6);
    }
    return PROJECTS.filter((project) => project.category === activeCategory).slice(0, 6);
  }, [activeCategory]);

  // Fallback values to prevent hydration mismatch
  const fallbackCopy = {
    homepage: {
      selectedWork: locale === 'uk' ? 'Обрані роботи' : 'Selected Work',
      selectedWorkSubtitle:
        locale === 'uk'
          ? 'Демонстрація останніх проектів у різних галузях та випадках використання.'
          : 'Showcase of recent projects across different industries and use cases.',
      viewAllWork: locale === 'uk' ? 'Переглянути всі роботи' : 'View All Work',
      servicesTitle: locale === 'uk' ? 'Послуги' : 'Services',
      servicesSubtitle:
        locale === 'uk'
          ? 'Комплексні послуги веб-розробки, адаптовані до потреб вашого бізнесу.'
          : 'Comprehensive web development services tailored to your business needs.',
      microCta:
        locale === 'uk'
          ? 'Доступний для контрактної роботи та обговорення продуктів.'
          : 'Available for contract work and product discussions.',
    },
  };

  const currentCopy = copy || fallbackCopy;

  const baseUrl = 'https://bogryashov.dev';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Vladimir Bogryashov',
    jobTitle: 'Product-Focused Frontend Engineer',
    url: baseUrl,
    sameAs: ['https://t.me/bogryashovdev'],
    description: 'Product-focused frontend engineer building CRMs, dashboards, SaaS interfaces and internal tools.',
  };

  return (
    <main>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero locale={locale} />

      <Section>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-600 mb-12">
          {currentCopy.homepage.microCta}
        </motion.p>
      </Section>

      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.homePage__workHeader}>
          <h2 className={styles.homePage__workTitle}>{currentCopy.homepage.selectedWork}</h2>
          <p className={styles.homePage__workSubtitle}>{currentCopy.homepage.selectedWorkSubtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}>
          <Filters activeCategory={activeCategory} onCategoryChange={setActiveCategory} locale={locale} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}>
          <WorkGrid projects={filteredProjects} activeCategory={activeCategory} locale={locale} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12">
          <Link href={`/${locale}/work`} className={styles.viewAllLink}>
            {currentCopy.homepage.viewAllWork}
            <svg className={styles.viewAllLink__icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </Section>

      <Section className={styles.homePage__servicesSection}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.homePage__servicesHeader}>
          <h2 className={styles.homePage__servicesTitle}>{currentCopy.homepage.servicesTitle}</h2>
          <p className={styles.homePage__servicesSubtitle}>{currentCopy.homepage.servicesSubtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}>
          <ServicesGrid locale={locale} />
        </motion.div>
      </Section>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <ContactCTA locale={locale} />
      </motion.div>
    </main>
  );
}

