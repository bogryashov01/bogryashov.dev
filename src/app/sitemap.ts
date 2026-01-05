import { MetadataRoute } from 'next';
import { PROJECTS } from '@/lib/projects';
import { i18n } from '@/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bogryashov.dev';
  const currentDate = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          en: baseUrl,
          uk: `${baseUrl}/uk`,
        },
      },
    },
    {
      url: `${baseUrl}/uk`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/work`,
          uk: `${baseUrl}/uk/work`,
        },
      },
    },
    {
      url: `${baseUrl}/uk/work`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/services`,
          uk: `${baseUrl}/uk/services`,
        },
      },
    },
    {
      url: `${baseUrl}/uk/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/contact`,
          uk: `${baseUrl}/uk/contact`,
        },
      },
    },
    {
      url: `${baseUrl}/uk/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/about`,
          uk: `${baseUrl}/uk/about`,
        },
      },
    },
    {
      url: `${baseUrl}/uk/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Project pages
  const projectPages: MetadataRoute.Sitemap = PROJECTS.flatMap((project) =>
    i18n.locales.map((locale) => ({
      url: `${baseUrl}${locale === 'uk' ? '/uk' : ''}/work/${project.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  );

  return [...staticPages, ...projectPages];
}

