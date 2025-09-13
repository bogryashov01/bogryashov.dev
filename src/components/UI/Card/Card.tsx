import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import styles from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ className, children, hover = false, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(styles.card, hover && styles.hover, className)} {...props}>
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export { Card };
