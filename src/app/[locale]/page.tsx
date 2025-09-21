'use client';

import { useState, useMemo, useEffect, use } from 'react';
import Link from 'next/link';
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
  params: Promise<{ locale: Locale }>;
};

export default function LocaleHomePage({ params }: Props) {
  const resolvedParams = use(params);
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [copy, setCopy] = useState<any>(null);

  useEffect(() => {
    getCopy(resolvedParams.locale).then(setCopy);
  }, [resolvedParams.locale]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return PROJECTS.slice(0, 6);
    }
    return PROJECTS.filter((project) => project.category === activeCategory).slice(0, 6);
  }, [activeCategory]);

  // Fallback values to prevent hydration mismatch
  const fallbackCopy = {
    homepage: {
      selectedWork: resolvedParams.locale === 'uk' ? 'Обрані роботи' : 'Selected Work',
      selectedWorkSubtitle:
        resolvedParams.locale === 'uk'
          ? 'Демонстрація останніх проектів у різних галузях та випадках використання.'
          : 'Showcase of recent projects across different industries and use cases.',
      viewAllWork: resolvedParams.locale === 'uk' ? 'Переглянути всі роботи' : 'View All Work',
      servicesTitle: resolvedParams.locale === 'uk' ? 'Послуги' : 'Services',
      servicesSubtitle:
        resolvedParams.locale === 'uk'
          ? 'Комплексні послуги веб-розробки, адаптовані до потреб вашого бізнесу.'
          : 'Comprehensive web development services tailored to your business needs.',
    },
  };

  const currentCopy = copy || fallbackCopy;

  return (
    <main>
      <Hero locale={resolvedParams.locale} />

      <Section>
        <div className={styles.homePage__workHeader}>
          <h2 className={styles.homePage__workTitle}>{currentCopy.homepage.selectedWork}</h2>
          <p className={styles.homePage__workSubtitle}>{currentCopy.homepage.selectedWorkSubtitle}</p>
        </div>

        <Filters activeCategory={activeCategory} onCategoryChange={setActiveCategory} locale={resolvedParams.locale} />

        <WorkGrid projects={filteredProjects} activeCategory={activeCategory} locale={resolvedParams.locale} />

        <div className="text-center mt-12">
          <Link href={`/${resolvedParams.locale}/work`} className={styles.viewAllLink}>
            {currentCopy.homepage.viewAllWork}
            <svg className={styles.viewAllLink__icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Section>

      <Section className={styles.homePage__servicesSection}>
        <div className={styles.homePage__servicesHeader}>
          <h2 className={styles.homePage__servicesTitle}>{currentCopy.homepage.servicesTitle}</h2>
          <p className={styles.homePage__servicesSubtitle}>{currentCopy.homepage.servicesSubtitle}</p>
        </div>

        <ServicesGrid locale={resolvedParams.locale} />
      </Section>

      <ContactCTA locale={resolvedParams.locale} />
    </main>
  );
}
