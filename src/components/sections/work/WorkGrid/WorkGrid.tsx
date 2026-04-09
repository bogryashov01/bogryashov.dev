import Section from '@/components/UI/Section/Section';
import { ALL_PROJECTS } from '@/lib/projects';
import CaseStudyCard from '@/components/sections/CaseStudyGrid/components/CaseStudyCard';
import styles from './WorkGrid.module.scss';

export default function WorkGrid() {
  return (
    <Section className={styles.workGrid}>
      <div className={styles.workGrid__grid}>
        {ALL_PROJECTS.map((project) => (
          <CaseStudyCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
