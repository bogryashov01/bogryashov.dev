'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/lib/projects';
import { Button } from '@/components/UI/Button/Button';
import { Icon } from '@/components/UI/Icon/Icon';
import { ImageCarousel } from '@/components/UI/ImageCarousel/ImageCarousel';
import { TechStack } from '@/components/UI/TechStack/TechStack';
import styles from './CaseStudyClient.module.scss';

interface CaseStudyClientProps {
  project: Project;
  nextProject?: Project;
}

export default function CaseStudyClient({ project, nextProject }: CaseStudyClientProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className={styles.caseStudy}>
      <div className={styles.caseStudy__container}>
        {/* Main Content */}
        <div className={styles.caseStudy__main}>
          {/* Breadcrumb */}
          <div className={styles.caseStudy__breadcrumb}>
            <Link href="/work" className={styles.caseStudy__breadcrumbLink}>
              Work
            </Link>
            <Icon name="arrow-right" size="sm" />
            <span className={styles.caseStudy__breadcrumbCurrent}>{project.category}</span>
            <Icon name="arrow-right" size="sm" />
            <span className={styles.caseStudy__breadcrumbCurrent}>{project.title}</span>
          </div>

          {/* Hero Section */}
          <div className={styles.caseStudy__hero}>
            <div>
              <h1 className={styles.caseStudy__title}>{project.title}</h1>
              <p className={styles.caseStudy__subtitle}>{project.summary}</p>

              {/* Project Images Carousel */}
              <div className={styles.caseStudy__heroImage}>
                {project.images && project.images.length > 1 ? (
                  <ImageCarousel images={project.images} title={project.title} autoPlay={true} autoPlayInterval={5000} />
                ) : (
                  <Image src={project?.image} alt={project?.title} width={800} height={600} className={styles.caseStudy__image} priority />
                )}
              </div>

              {/* Action Buttons */}
              <div className={styles.caseStudy__actions}>
                <Button as="link" href={project.url} external size="lg">
                  Visit website
                </Button>
                <div className={styles.caseStudy__arrow}>
                  <Icon name="arrow-right" size="lg" />
                </div>
                {nextProject && (
                  <Button as="link" href={`/work/${nextProject.slug}`} variant="ghost" size="lg">
                    Next case
                  </Button>
                )}
              </div>
            </div>
            {/* Project Info */}
            <div className={styles.caseStudy__sidebar}>
              <div className={styles.caseStudy__sidebarContent}>
                <div className={styles.caseStudy__sidebarItem}>
                  <span className={styles.caseStudy__sidebarLabel}>CLIENT:</span>
                  <span className={styles.caseStudy__sidebarValue}>{project.title}</span>
                </div>

                <div className={styles.caseStudy__sidebarItem}>
                  <span className={styles.caseStudy__sidebarLabel}>YEARS:</span>
                  <span className={styles.caseStudy__sidebarValue}>2023</span>
                </div>

                <div className={styles.caseStudy__sidebarItem}>
                  <span className={styles.caseStudy__sidebarLabel}>OBJECTIVE:</span>
                  <span className={styles.caseStudy__sidebarValue}>Design & Development</span>
                </div>

                <div className={styles.caseStudy__sidebarItem}>
                  <span className={styles.caseStudy__sidebarLabel}>CATEGORY:</span>
                  <span className={styles.caseStudy__sidebarValue}>{project.category}</span>
                </div>

                <div className={styles.caseStudy__sidebarItem}>
                  <TechStack technologies={project.tags} title="Technologies" />
                </div>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className={styles.caseStudy__content}>
            {/* Overview */}
            <div className={styles.caseStudy__section}>
              <h2 className={styles.caseStudy__sectionTitle}>Overview</h2>
              <p className={styles.caseStudy__sectionText}>{project.summary}</p>
            </div>

            {/* Goals and Contribution Grid */}
            <div className={styles.caseStudy__grid}>
              {project.goals && project.goals.length > 0 && (
                <div className={styles.caseStudy__section}>
                  <h2 className={styles.caseStudy__sectionTitle}>Goals</h2>
                  <ul className={styles.caseStudy__list}>
                    {project.goals.map((goal, index) => (
                      <li key={index} className={styles.caseStudy__listItem}>
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.contribution && project.contribution.length > 0 && (
                <div className={styles.caseStudy__section}>
                  <h2 className={styles.caseStudy__sectionTitle}>Contribution</h2>
                  <ul className={styles.caseStudy__list}>
                    {project.contribution.map((item, index) => (
                      <li key={index} className={styles.caseStudy__listItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Outcome Images */}
            {project.images && project.images.length > 1 && (
              <div className={styles.caseStudy__section}>
                <h2 className={styles.caseStudy__sectionTitle}>Outcome</h2>
                <div className={styles.caseStudy__outcomeImages}>
                  {project.images.slice(0, 2).map((image, index) => (
                    <div key={index} className={styles.caseStudy__outcomeImage}>
                      <Image src={image} alt={`${project.title} outcome ${index + 1}`} width={400} height={300} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
