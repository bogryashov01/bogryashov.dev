import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import CaseStudyPage from '@/components/sections/CaseStudyPage/CaseStudyPage';
import { PROJECTS } from '@/lib/projects';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <CaseStudyPage project={project} />
    </main>
  );
}
