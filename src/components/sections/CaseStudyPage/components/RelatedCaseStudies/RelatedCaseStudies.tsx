import Reveal from '@/components/ui/Reveal/Reveal';
import Section from '@/components/ui/Section/Section';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import { FEATURED_PROJECTS, type Project } from '@/lib/projects';
import CaseStudyCard from '@/components/sections/CaseStudyGrid/components/CaseStudyCard';
import styles from './RelatedCaseStudies.module.scss';

type Props = {
  currentSlug: string;
};

export default function RelatedCaseStudies({ currentSlug }: Props) {
  const relatedProjects: Project[] = FEATURED_PROJECTS.filter((project) => project.slug !== currentSlug).slice(0, 2);

  if (relatedProjects.length === 0) {
    return null;
  }

  return (
    <Section className={styles.relatedCaseStudies}>
      <SectionHeading
        eyebrow="More Work"
        title="Explore more case studies"
        subtitle="A few more selected projects built with the same focus on clarity, structure, and product thinking."
        className={styles.relatedCaseStudies__header}
      />

      <div className={styles.relatedCaseStudies__grid}>
        {relatedProjects.map((project, index) => (
          <Reveal key={project.slug} delay={0.06 * index}>
            <CaseStudyCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
