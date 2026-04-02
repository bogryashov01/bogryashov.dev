import Reveal from '@/components/UI/Reveal/Reveal';
import Section from '@/components/UI/Section/Section';
import SectionHeading from '@/components/UI/SectionHeading/SectionHeading';
import { FEATURED_PROJECTS } from '@/lib/projects';
import CaseStudyCard from './components/CaseStudyCard';
import styles from './CaseStudyGrid.module.scss';

export default function CaseStudyGrid() {
  const [featuredProject, ...secondaryProjects] = FEATURED_PROJECTS;

  return (
    <Section className={styles.caseStudyGrid}>
      <SectionHeading
        eyebrow="Selected Work"
        title="Selected case studies"
        subtitle="A focused selection of product-driven work — from AI systems and educational platforms to e-commerce experiences."
        className={styles.caseStudyGrid__header}
      />

      <Reveal className={styles.caseStudyGrid__featured}>
        <CaseStudyCard project={featuredProject} variant="featured" />
      </Reveal>

      <div className={styles.caseStudyGrid__secondary}>
        {secondaryProjects.map((project, index) => (
          <Reveal key={project.slug} delay={0.06 * (index + 1)}>
            <CaseStudyCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
