'use client';

import { motion } from 'framer-motion';
import TechIcon from '@/components/UI/TechIcon/TechIcon';
import styles from './TechStack.module.scss';

interface TechStackProps {
  technologies: string[];
  title?: string;
}

export function TechStack({ technologies, title = 'Technologies' }: TechStackProps) {
  if (!technologies || technologies.length === 0) return null;

  return (
    <div className={styles.techStack}>
      <h3 className={styles.techStack__title}>{title}</h3>
      <div className={styles.techStack__grid}>
        {technologies.map((tech, index) => {
          return (
            <motion.div
              key={tech}
              className={styles.techStack__item}
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
                ease: 'easeOut',
              }}
              whileHover={{
                scale: 1.02,
                y: -2,
                transition: { duration: 0.15 },
              }}
              whileTap={{ scale: 0.98 }}>
              <div className={styles.techStack__icon}>
                <TechIcon tech={tech} size="md" />
              </div>
              <span className={styles.techStack__name}>{tech}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
