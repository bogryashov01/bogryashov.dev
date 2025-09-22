import { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faChevronRight,
  faChevronLeft,
  faExternalLinkAlt,
  faBars,
  faTimes,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { cn } from '@/lib/utils';
import styles from './Icon.module.scss';

interface IconProps {
  name: 'search' | 'arrow-right' | 'arrow-left' | 'external-link' | 'menu' | 'close' | 'email' | 'phone' | 'location';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Icon = forwardRef<SVGSVGElement, IconProps>(({ name, size = 'md', className }, ref) => {
  const fontAwesomeIcons = {
    search: faSearch,
    'arrow-right': faChevronRight,
    'arrow-left': faChevronLeft,
    'external-link': faExternalLinkAlt,
    menu: faBars,
    close: faTimes,
    email: faEnvelope,
    phone: faPhone,
    location: faMapMarkerAlt,
  };

  const icon = fontAwesomeIcons[name];

  return <FontAwesomeIcon ref={ref} icon={icon} className={cn(styles.icon, styles[size], className)} />;
});

Icon.displayName = 'Icon';

export { Icon };
