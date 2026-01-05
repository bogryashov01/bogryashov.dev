'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/lib/projects';
import { Button } from '@/components/UI/Button/Button';
import { Icon } from '@/components/UI/Icon/Icon';
import { ImageCarousel } from '@/components/UI/ImageCarousel/ImageCarousel';
import { TechStack } from '@/components/UI/TechStack/TechStack';
import { getCopy } from '@/lib/copy';
import { type Locale } from '@/i18n/config';
import styles from './CaseStudyClient.module.scss';

interface CaseStudyClientProps {
  project: Project;
  nextProject?: Project;
  locale?: Locale;
}

export default function CaseStudyClient({ project, nextProject, locale = 'en' }: CaseStudyClientProps) {
  const [copy, setCopy] = useState<{
    caseStudy: {
      work: string;
      visitWebsite: string;
      nextCase: string;
      client: string;
      years: string;
      objective: string;
      category: string;
      technologies: string;
      projectOverview: string;
      projectGoals: string;
      myContribution: string;
      outcome: string;
      businessOutcome: string;
      technicalOutcome: string;
      challengesAndSolutions: string;
      results: string;
      discussProject: string;
      discussProjectSubtitle: string;
    };
    categories: Record<string, string>;
    categoryFilters: Record<string, string>;
  } | null>(null);

  useEffect(() => {
    getCopy(locale).then(setCopy);
  }, [locale]);

  if (!copy) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className={styles.caseStudy}>
      <div className={styles.caseStudy__container}>
        <div className={styles.caseStudy__main}>
          <div className={styles.caseStudy__breadcrumb}>
            <Link
              href={(locale !== 'en' ? `/${locale}/work` : '/work') as '/work' | '/uk/work'}
              className={styles.caseStudy__breadcrumbLink}>
              {copy.caseStudy.work}
            </Link>
            <Icon name="arrow-right" size="sm" />
            <span className={styles.caseStudy__breadcrumbCurrent}>{copy.categoryFilters[project.category] || project.category}</span>
            <Icon name="arrow-right" size="sm" />
            <span className={styles.caseStudy__breadcrumbCurrent}>{project.title}</span>
          </div>

          <div className={styles.caseStudy__hero}>
            <div>
              <h1 className={styles.caseStudy__title}>{project.title}</h1>
              <p className={styles.caseStudy__subtitle}>{locale === 'uk' && project.summary_uk ? project.summary_uk : project.summary}</p>

              <div className={styles.caseStudy__heroImage}>
                {project.images && project.images.length > 1 ? (
                  <ImageCarousel images={project.images} title={project.title} autoPlay={true} autoPlayInterval={5000} />
                ) : (
                  <Image src={project?.image} alt={project?.title} width={800} height={600} className={styles.caseStudy__image} priority />
                )}
              </div>

              <div className={styles.caseStudy__actions}>
                <Button as="link" href={project.url} external size="lg">
                  {copy.caseStudy.visitWebsite}
                </Button>
                <div className={styles.caseStudy__arrow}>
                  <Icon name="arrow-right" size="lg" />
                </div>
                {nextProject && (
                  <Button
                    as="link"
                    href={(locale !== 'en' ? `/${locale}/work/${nextProject.slug}` : `/work/${nextProject.slug}`) as string}
                    variant="ghost"
                    size="lg">
                    {copy.caseStudy.nextCase}
                  </Button>
                )}
              </div>
            </div>
            <div className={styles.caseStudy__sidebar}>
              <div className={styles.caseStudy__sidebarContent}>
                <div className={styles.caseStudy__sidebarItem}>
                  <span className={styles.caseStudy__sidebarLabel}>{copy.caseStudy.client}</span>
                  <span className={styles.caseStudy__sidebarValue}>{project.title}</span>
                </div>

                <div className={styles.caseStudy__sidebarItem}>
                  <span className={styles.caseStudy__sidebarLabel}>{copy.caseStudy.years}</span>
                  <span className={styles.caseStudy__sidebarValue}>2023</span>
                </div>

                <div className={styles.caseStudy__sidebarItem}>
                  <span className={styles.caseStudy__sidebarLabel}>{copy.caseStudy.objective}</span>
                  <span className={styles.caseStudy__sidebarValue}>Design & Development</span>
                </div>

                <div className={styles.caseStudy__sidebarItem}>
                  <span className={styles.caseStudy__sidebarLabel}>{copy.caseStudy.category}</span>
                  <span className={styles.caseStudy__sidebarValue}>{copy.categoryFilters[project.category] || project.category}</span>
                </div>

                <div className={styles.caseStudy__sidebarItem}>
                  <TechStack technologies={project.tags} title={copy.caseStudy.technologies} />
                </div>
                {((locale === 'uk' && project.legacyStackNote_uk) || project.legacyStackNote) && (
                  <div className={styles.caseStudy__sidebarItem}>
                    <p className={styles.caseStudy__legacyNote}>
                      {locale === 'uk' && project.legacyStackNote_uk ? project.legacyStackNote_uk : project.legacyStackNote}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={styles.caseStudy__content}>
            <div className={styles.caseStudy__section}>
              <h2 className={styles.caseStudy__sectionTitle}>{copy.caseStudy.projectOverview}</h2>
              <p className={styles.caseStudy__sectionText}>
                {locale === 'uk' && project.summary_uk ? project.summary_uk : project.summary}
              </p>
            </div>

            {((locale === 'uk' && project.goals_uk) || project.goals) && (
              <div className={styles.caseStudy__section}>
                <h2 className={styles.caseStudy__sectionTitle}>{copy.caseStudy.projectGoals}</h2>
                <ul className={styles.caseStudy__list}>
                  {(locale === 'uk' && project.goals_uk ? project.goals_uk : project.goals || []).map((goal, index) => (
                    <li key={index} className={styles.caseStudy__listItem}>
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {((locale === 'uk' && project.contribution_uk) || project.contribution) && (
              <div className={styles.caseStudy__section}>
                <h2 className={styles.caseStudy__sectionTitle}>{copy.caseStudy.myContribution}</h2>
                <ul className={styles.caseStudy__list}>
                  {(locale === 'uk' && project.contribution_uk ? project.contribution_uk : project.contribution || []).map(
                    (item, index) => (
                      <li key={index} className={styles.caseStudy__listItem}>
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            )}

            {/* Legacy outcome support */}
            {((locale === 'uk' && project.outcome_uk) || project.outcome) &&
              !(locale === 'uk' ? project.businessOutcome_uk : project.businessOutcome) && (
                <div className={styles.caseStudy__section}>
                  <h2 className={styles.caseStudy__sectionTitle}>{copy.caseStudy.outcome}</h2>
                  <ul className={styles.caseStudy__list}>
                    {(locale === 'uk' && project.outcome_uk ? project.outcome_uk : project.outcome || []).map((result, index) => (
                      <li key={index} className={styles.caseStudy__listItem}>
                        {result}
                      </li>
                    ))}
                  </ul>

                  {project.images && project.images.length > 1 && (
                    <div className={styles.caseStudy__outcomeImages}>
                      {project.images.slice(1, 3).map((image, index) => (
                        <div key={index} className={styles.caseStudy__outcomeImage}>
                          <Image src={image} alt={`${project.title} - Image ${index + 2}`} width={400} height={300} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

            {/* Split outcomes */}
            {((locale === 'uk' && project.businessOutcome_uk) || project.businessOutcome) && (
              <div className={styles.caseStudy__section}>
                <h2 className={styles.caseStudy__sectionTitle}>{copy.caseStudy.businessOutcome}</h2>
                <ul className={styles.caseStudy__list}>
                  {(locale === 'uk' && project.businessOutcome_uk ? project.businessOutcome_uk : project.businessOutcome || []).map(
                    (result, index) => (
                      <li key={index} className={styles.caseStudy__listItem}>
                        {result}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            )}

            {((locale === 'uk' && project.technicalOutcome_uk) || project.technicalOutcome) && (
              <div className={styles.caseStudy__section}>
                <h2 className={styles.caseStudy__sectionTitle}>{copy.caseStudy.technicalOutcome}</h2>
                <ul className={styles.caseStudy__list}>
                  {(locale === 'uk' && project.technicalOutcome_uk ? project.technicalOutcome_uk : project.technicalOutcome || []).map(
                    (result, index) => (
                      <li key={index} className={styles.caseStudy__listItem}>
                        {result}
                      </li>
                    ),
                  )}
                </ul>

                {project.images && project.images.length > 1 && (
                  <div className={styles.caseStudy__outcomeImages}>
                    {project.images.slice(1, 3).map((image, index) => (
                      <div key={index} className={styles.caseStudy__outcomeImage}>
                        <Image src={image} alt={`${project.title} - Image ${index + 2}`} width={400} height={300} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* CTA Section */}
            <div className={styles.caseStudy__section}>
              <div className={styles.caseStudy__cta}>
                <h3 className={styles.caseStudy__ctaTitle}>{copy.caseStudy.discussProject}</h3>
                <p className={styles.caseStudy__ctaSubtitle}>{copy.caseStudy.discussProjectSubtitle}</p>
                <Button as="link" href={`/${locale}/contact`} size="lg">
                  {copy.caseStudy.discussProject}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
