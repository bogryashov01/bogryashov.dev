'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { cn } from '@/lib/utils';
import styles from './FAIcon.module.scss';

interface FAIconProps {
  icon: IconDefinition;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'yellow-bg' | 'ghost';
  className?: string;
}

export default function FAIcon({ icon, size = 'md', variant = 'default', className }: FAIconProps) {
  return (
    <div className={cn(styles.faIcon, styles[size], styles[variant], className)}>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
}

export { FAIcon };
