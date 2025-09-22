'use client';

import React from 'react';
import FAIcon from '@/components/UI/FAIcon/FAIcon';
import {
  faReact,
  faVuejs,
  faJs,
  faPhp,
  faNodeJs,
  faGitAlt,
  faDocker,
  faAws,
  faWordpress,
  faStripe,
  faFigma,
} from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase, faServer, faPalette, faGear } from '@fortawesome/free-solid-svg-icons';
import styles from './TechIcon.module.scss';

interface TechIconProps {
  tech: string;
  size?: 'sm' | 'md' | 'lg';
}

const techIcons = {
  // Frontend
  React: faReact,
  Vue: faVuejs,
  JavaScript: faJs,
  TypeScript: faCode, // Using generic code icon for TypeScript
  jQuery: faCode,

  // Styling
  CSS: faCode,
  SCSS: faCode,
  Tailwind: faCode,

  // Backend
  PHP: faPhp,
  'Node.js': faNodeJs,
  MySQL: faDatabase,

  // Services & APIs
  Firebase: faServer,
  Stripe: faStripe,
  Git: faGitAlt,
  Docker: faDocker,
  AWS: faAws,
  WordPress: faWordpress,
  Figma: faFigma,

  // Generic fallbacks
  MongoDB: faDatabase,
  PostgreSQL: faDatabase,
  Redis: faDatabase,
  GraphQL: faServer,
  Webpack: faGear,
  Bootstrap: faCode,
  Photoshop: faPalette,
  Illustrator: faPalette,
  Sketch: faPalette,
  Shopify: faServer,
  Vercel: faServer,
  Netlify: faServer,
  HTML: faCode,
  Liquid: faCode,
  WooCommerce: faServer,
  Angular: faCode,
  'Framer Motion': faGear,
  'Styled Components': faCode,
};

export default function TechIcon({ tech, size = 'md' }: TechIconProps) {
  const icon = techIcons[tech as keyof typeof techIcons] || faCode;

  return (
    <div className={`${styles.techIcon} ${styles[`techIcon--${size}`]}`} title={tech} aria-label={tech}>
      <FAIcon icon={icon} size={size} variant="yellow-bg" />
    </div>
  );
}
