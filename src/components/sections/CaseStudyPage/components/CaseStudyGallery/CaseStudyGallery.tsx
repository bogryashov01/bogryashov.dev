import Image from 'next/image';
import type { Project } from '@/lib/projects';
import Section from '@/components/UI/Section/Section';
import Reveal from '@/components/UI/Reveal/Reveal';
import styles from './CaseStudyGallery.module.scss';

type Props = {
  project: Project;
};

export default function CaseStudyGallery({ project }: Props) {
  if (!project.images || project.images.length === 0) {
    return null;
  }

  return (
    <Section className={styles.caseStudyGallery}>
      <Reveal className={styles.caseStudyGallery__intro}>
        <p className={styles.caseStudyGallery__eyebrow}>Project Gallery</p>
        <h2 className={styles.caseStudyGallery__title}>Visual snapshots of the product</h2>
      </Reveal>

      <div className={styles.caseStudyGallery__grid}>
        {project.images.map((image, index) => {
          const isLarge = index === 0;

          return (
            <Reveal
              key={image}
              delay={0.05 * index}
              className={`${styles.caseStudyGallery__item} ${isLarge ? styles['caseStudyGallery__item--large'] : ''}`.trim()}>
              <div className={styles.caseStudyGallery__imageWrap}>
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className={styles.caseStudyGallery__image}
                  sizes={isLarge ? '(max-width: 1100px) 100vw, 66vw' : '(max-width: 1100px) 100vw, 33vw'}
                />
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
