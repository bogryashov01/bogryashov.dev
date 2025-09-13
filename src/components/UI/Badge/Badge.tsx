import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import styles from './Badge.module.scss';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'default' | 'accent';
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(({ className, children, variant = 'default', ...props }, ref) => {
  return (
    <span ref={ref} className={cn(styles.badge, styles[variant], className)} {...props}>
      {children}
    </span>
  );
});

Badge.displayName = 'Badge';

export { Badge };
