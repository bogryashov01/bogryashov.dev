'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
// import Image from 'next/image';
import { type Project } from '@/lib/projects';
import { ImageGallery } from '@/components/UI/ImageGallery/ImageGallery';
import { getCopy } from '@/lib/copy';
import { type Locale } from '@/i18n/config';
import styles from './WorkGrid.module.scss';

interface WorkGridProps {
  projects: Project[];
  activeCategory: string;
  locale?: Locale;
}

export default function WorkGrid({ projects, locale = 'en' }: WorkGridProps) {
  const [copy, setCopy] = useState<{
    categoryFilters: Record<string, string>;
  } | null>(null);

  useEffect(() => {
    getCopy(locale).then(setCopy);
  }, [locale]);
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

  if (!projects || projects.length === 0) {
    return (
      <div className={styles.workGrid__empty}>
        <p className={styles.workGrid__emptyText}>No projects found for the selected category.</p>
      </div>
    );
  }

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className={styles.workGrid}>
      {projects.map((project) => (
        <motion.div key={project.slug} variants={itemVariants} className={styles.workGrid__item}>
          <Link href={`/${locale}/work/${project.slug}`} className={`${styles.workGrid__link} card-link`}>
            <div className={styles.workGrid__card}>
              <div className={styles.workGrid__imageContainer}>
                <ImageGallery images={project.images || [project.image]} alt={project.title} className={styles.workGrid__gallery} />
                <div className={styles.workGrid__overlay} />
                <div className={styles.workGrid__content}>
                  <h3 className={styles.workGrid__title}>{project.title}</h3>
                  <p className={styles.workGrid__summary}>{project.summary}</p>
                </div>
              </div>

              <div className={styles.workGrid__footer}>
                <div className={styles.workGrid__badges}>
                  <span className={styles.workGrid__categoryBadge}>{copy?.categoryFilters[project.category] || project.category}</span>
                  <div className={styles.workGrid__tags}>
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className={styles.workGrid__tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
