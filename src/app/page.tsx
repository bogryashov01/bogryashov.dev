'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero/Hero';
import Filters from '@/components/Filters/Filters';
import WorkGrid from '@/components/WorkGrid/WorkGrid';
import ServicesGrid from '@/components/ServicesGrid/ServicesGrid';
import ContactCTA from '@/components/ContactCTA/ContactCTA';
import { Section } from '@/components/UI/Section/Section';
import { PROJECTS, type Category } from '@/lib/projects';
import styles from './page.module.scss';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return PROJECTS.slice(0, 6); // Show only 6 projects on homepage
    }
    return PROJECTS.filter((project) => project.category === activeCategory).slice(0, 6);
  }, [activeCategory]);

  return (
    <main>
      <Hero />

      <Section>
        <div className={styles.homePage__workHeader}>
          <h2 className={styles.homePage__workTitle}>Selected Work</h2>
          <p className={styles.homePage__workSubtitle}>A showcase of recent projects across different industries and use cases.</p>
        </div>

        <Filters activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

        <WorkGrid projects={filteredProjects} activeCategory={activeCategory} />

        <div className="text-center mt-12">
          <Link href="/work" className={styles.viewAllLink}>
            View all work
            <svg className={styles.viewAllLink__icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Section>

      <Section className={styles.homePage__servicesSection}>
        <div className={styles.homePage__servicesHeader}>
          <h2 className={styles.homePage__servicesTitle}>Services</h2>
          <p className={styles.homePage__servicesSubtitle}>Comprehensive web development services tailored to your business needs.</p>
        </div>

        <ServicesGrid />
      </Section>

      <ContactCTA />
    </main>
  );
}
