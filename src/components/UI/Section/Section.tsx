import { HTMLAttributes, forwardRef } from 'react';
import styles from './Section.module.scss';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(({ className, children, ...props }, ref) => {
  return (
    <section ref={ref} className={`${styles.section} ${className || ''}`} {...props}>
      <div className={styles.section__container}>{children}</div>
    </section>
  );
});

Section.displayName = 'Section';

export { Section };
