import Reveal from '@/components/ui/Reveal/Reveal';
import styles from './SectionHeading.module.scss';

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left', className = '' }: Props) {
  return (
    <Reveal className={`${styles.sectionHeading} ${styles[`sectionHeading--${align}`]} ${className}`.trim()}>
      {eyebrow && <p className={styles.sectionHeading__eyebrow}>{eyebrow}</p>}
      <h2 className={styles.sectionHeading__title}>{title}</h2>
      {subtitle && <p className={styles.sectionHeading__subtitle}>{subtitle}</p>}
    </Reveal>
  );
}
