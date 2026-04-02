import Reveal from '@/components/ui/Reveal/Reveal';
import type { Project } from '@/lib/projects';
import Section from '@/components/ui/Section/Section';
import styles from './CaseStudyContent.module.scss';

type Props = {
  project: Project;
};

type ContentBlockProps = {
  title: string;
  items: string[];
  delay?: number;
};

function ContentBlock({ title, items, delay = 0 }: ContentBlockProps) {
  return (
    <Reveal delay={delay}>
      <section className={styles.caseStudyContent__block}>
        <h2 className={styles.caseStudyContent__blockTitle}>{title}</h2>

        <div className={styles.caseStudyContent__list}>
          {items.map((item) => (
            <div key={item} className={styles.caseStudyContent__item}>
              <span className={styles.caseStudyContent__bullet} />
              <p className={styles.caseStudyContent__text}>{item}</p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}

export default function CaseStudyContent({ project }: Props) {
  return (
    <Section className={styles.caseStudyContent}>
      <div className={styles.caseStudyContent__grid}>
        <ContentBlock title="Challenge" items={project.challenge} />
        <ContentBlock title="Contribution" items={project.contribution} delay={0.05} />
        <ContentBlock title="Business Outcome" items={project.businessOutcome} delay={0.1} />
        <ContentBlock title="Technical Highlights" items={project.technicalHighlights} delay={0.15} />
      </div>
    </Section>
  );
}
