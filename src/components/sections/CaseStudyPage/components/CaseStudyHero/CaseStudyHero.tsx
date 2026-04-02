import Image from 'next/image';
import type { Project } from '@/lib/projects';
import Section from '@/components/UI/Section/Section';
import styles from './CaseStudyHero.module.scss';

type Props = {
  project: Project;
};

export default function CaseStudyHero({ project }: Props) {
  return (
    <Section className={styles.caseStudyHero}>
      <div className={styles.caseStudyHero__meta}>
        <span className={styles.caseStudyHero__category}>{project.category}</span>
        <span className={styles.caseStudyHero__dot}>•</span>
        <span className={styles.caseStudyHero__year}>{project.year}</span>
      </div>

      <div className={styles.caseStudyHero__content}>
        <div className={styles.caseStudyHero__main}>
          <h1 className={styles.caseStudyHero__title}>{project.title}</h1>
          <p className={styles.caseStudyHero__headline}>{project.headline}</p>
          <p className={styles.caseStudyHero__summary}>{project.summary}</p>

          <div className={styles.caseStudyHero__tags}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.caseStudyHero__tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.caseStudyHero__media}>
          <div className={styles.caseStudyHero__imageWrap}>
            <Image src={project.image} alt={project.title} width={1400} height={900} className={styles.caseStudyHero__image} priority />
          </div>
        </div>
      </div>
    </Section>
  );
}
