import Image from 'next/image';
import Link from 'next/link';
import type { Route } from 'next';
import type { Project } from '@/lib/projects';
import styles from './CaseStudyCard.module.scss';

type Props = {
  project: Project;
  variant?: 'default' | 'featured';
};

export default function CaseStudyCard({ project, variant = 'default' }: Props) {
  const isFeatured = variant === 'featured';

  return (
    <article className={`${styles.card} ${isFeatured ? styles['card--featured'] : ''}`.trim()}>
      <Link href={`/work/${project.slug}` as Route} className={styles.card__media}>
        <div className={styles.card__imageWrap}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={styles.card__image}
            sizes={isFeatured ? '(max-width: 1100px) 100vw, 100vw' : '(max-width: 1100px) 100vw, 50vw'}
            priority={isFeatured}
          />
        </div>
      </Link>

      <div className={styles.card__content}>
        <div className={styles.card__meta}>
          <span className={styles.card__category}>{project.category}</span>
          <span className={styles.card__dot}>•</span>
          <span className={styles.card__year}>{project.year}</span>
        </div>

        <Link href={`/work/${project.slug}` as Route} className={styles.card__titleLink}>
          <h3 className={styles.card__title}>{project.title}</h3>
        </Link>

        <p className={styles.card__headline}>{project.headline}</p>
        <p className={styles.card__summary}>{project.summary}</p>

        <div className={styles.card__tags}>
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className={styles.card__tag}>
              {tag}
            </span>
          ))}
        </div>

        <Link href={`/work/${project.slug}` as Route} className={styles.card__cta}>
          View case study
        </Link>
      </div>
    </article>
  );
}
