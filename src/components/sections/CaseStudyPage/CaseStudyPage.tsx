import type { Project } from '@/lib/projects';
import CaseStudyContent from '@/components/sections/CaseStudyPage/components/CaseStudyContent/CaseStudyContent';
import CaseStudyGallery from '@/components/sections/CaseStudyPage/components/CaseStudyGallery/CaseStudyGallery';
import CaseStudyHero from '@/components/sections/CaseStudyPage/components/CaseStudyHero/CaseStudyHero';
import RelatedCaseStudies from '@/components/sections/CaseStudyPage/components/RelatedCaseStudies/RelatedCaseStudies';

type Props = {
  project: Project;
};

export default function CaseStudyPage({ project }: Props) {
  return (
    <>
      <CaseStudyHero project={project} />
      <CaseStudyGallery project={project} />
      <CaseStudyContent project={project} />
      <RelatedCaseStudies currentSlug={project.slug} />
    </>
  );
}
