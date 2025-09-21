import { notFound } from 'next/navigation';
import { PROJECTS } from '@/lib/projects';
import CaseStudyClient from '@/components/CaseStudyClient/CaseStudyClient';
import { type Locale } from '@/i18n/config';

interface CaseStudyPageProps {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { locale, slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const nextProject = PROJECTS[currentIndex + 1] || PROJECTS[0];

  return <CaseStudyClient project={project} nextProject={nextProject} locale={locale} />;
}
