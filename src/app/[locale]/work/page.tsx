'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import Filters from '@/components/Filters/Filters';
import WorkGrid from '@/components/WorkGrid/WorkGrid';
import { Section } from '@/components/UI/Section/Section';
import { Search } from '@/components/UI/Search/Search';
import { PROJECTS, type Category } from '@/lib/projects';
import { getCopy } from '@/lib/copy';
import { type Locale } from '@/i18n/config';
import styles from '../../work/work.module.scss';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default function WorkPage({ params }: Props) {
  const resolvedParams = React.use(params);
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copy, setCopy] = useState<{
    work: {
      title: string;
      subtitle: string;
      searchPlaceholder: string;
      projectsFound: string;
      projectFound: string;
    };
  } | null>(null);

  useEffect(() => {
    getCopy(resolvedParams.locale).then(setCopy);
  }, [resolvedParams.locale]);

  const filteredProjects = useMemo(() => {
    let filtered = PROJECTS;

    if (activeCategory !== 'All') {
      filtered = filtered.filter((project) => project.category === activeCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.summary.toLowerCase().includes(query) ||
          project.category.toLowerCase().includes(query) ||
          project.tags.some((tag) => tag.toLowerCase().includes(query)),
      );
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  if (!copy) {
    return <div>Loading...</div>;
  }

  return (
    <main className={styles.workPage}>
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.workPage__header}>
          <h1 className={styles.workPage__title}>{copy.work.title}</h1>
          <p className={styles.workPage__subtitle}>{copy.work.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.workPage__search}>
          <Search
            placeholder={copy.work.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            size="lg"
          />
        </motion.div>

        <Filters activeCategory={activeCategory} onCategoryChange={setActiveCategory} locale={resolvedParams.locale} />

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className={styles.workPage__results}>
          <p className={styles.workPage__resultsText}>
            {filteredProjects.length} {filteredProjects.length === 1 ? copy.work.projectFound : copy.work.projectsFound}
          </p>
        </motion.div>

        <WorkGrid projects={filteredProjects} activeCategory={activeCategory} locale={resolvedParams.locale} />
      </Section>
    </main>
  );
}
