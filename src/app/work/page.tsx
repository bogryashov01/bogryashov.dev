'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Filters from '@/components/Filters/Filters';
import WorkGrid from '@/components/WorkGrid/WorkGrid';
import { Section } from '@/components/UI/Section/Section';
import { Search } from '@/components/UI/Search/Search';
import { PROJECTS, type Category } from '@/lib/projects';
import styles from './work.module.scss';

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    let filtered = PROJECTS;

    // Filter by category
    if (activeCategory !== 'All') {
      filtered = filtered.filter((project) => project.category === activeCategory);
    }

    // Filter by search query
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

  return (
    <main className={styles.workPage}>
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.workPage__header}>
          <h1 className={styles.workPage__title}>Work</h1>
          <p className={styles.workPage__subtitle}>A comprehensive showcase of projects across different industries and technologies.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.workPage__search}>
          <Search placeholder="Search projects..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} size="lg" />
        </motion.div>

        <Filters activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className={styles.workPage__results}>
          <p className={styles.workPage__resultsText}>
            {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
          </p>
        </motion.div>

        <WorkGrid projects={filteredProjects} activeCategory={activeCategory} />
      </Section>
    </main>
  );
}
