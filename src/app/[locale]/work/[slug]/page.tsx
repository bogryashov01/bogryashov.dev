import { Metadata } from 'next';
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

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {};
  }

  const baseUrl = 'https://bogryashov.dev';
  const localePrefix = locale === 'uk' ? '/uk' : '';
  const title = `${project.title} — Frontend Case Study | Product Engineer`;
  const description = locale === 'uk'
    ? 'Frontend case study focused on architecture, UX decisions, scalability and maintainability for a real-world product.'
    : 'Frontend case study focused on architecture, UX decisions, scalability and maintainability for a real-world product.';

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}${localePrefix}/work/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}${localePrefix}/work/${slug}`,
      type: 'article',
      images: [
        {
          url: `${baseUrl}${project.image}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}${project.image}`],
    },
  };
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
