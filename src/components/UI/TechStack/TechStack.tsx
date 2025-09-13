'use client';

import { motion } from 'framer-motion';
import { Icon } from '../Icon/Icon';
import styles from './TechStack.module.scss';

interface TechStackProps {
  technologies: string[];
  title?: string;
}

// Маппинг технологий на иконки
const getTechIcon = (
  tech: string,
):
  | 'search'
  | 'arrow-right'
  | 'arrow-left'
  | 'external-link'
  | 'menu'
  | 'close'
  | 'email'
  | 'phone'
  | 'location'
  | 'react'
  | 'typescript'
  | 'javascript'
  | 'node'
  | 'css'
  | 'html'
  | 'git'
  | 'docker'
  | 'aws'
  | 'mongodb'
  | 'postgresql'
  | 'mysql'
  | 'redis'
  | 'graphql'
  | 'webpack'
  | 'tailwind'
  | 'bootstrap'
  | 'figma'
  | 'photoshop'
  | 'illustrator'
  | 'sketch'
  | 'wordpress'
  | 'shopify'
  | 'stripe'
  | 'firebase'
  | 'vercel'
  | 'netlify'
  | 'code'
  | 'scss'
  | 'jquery'
  | 'liquid'
  | 'woocommerce'
  | 'angular'
  | 'framer-motion'
  | 'styled-components'
  | 'vue' => {
  const techLower = tech.toLowerCase();

  if (techLower.includes('react') || techLower.includes('next')) return 'react';
  if (techLower.includes('typescript') || techLower.includes('ts')) return 'typescript';
  if (techLower.includes('javascript') || techLower.includes('js')) return 'javascript';
  if (techLower.includes('node') || techLower.includes('express')) return 'node';
  if (techLower.includes('css')) return 'css';
  if (techLower.includes('scss') || techLower.includes('sass')) return 'scss';
  if (techLower.includes('html')) return 'html';
  if (techLower.includes('git')) return 'git';
  if (techLower.includes('docker')) return 'docker';
  if (techLower.includes('aws') || techLower.includes('cloud')) return 'aws';
  if (techLower.includes('mongodb') || techLower.includes('mongo')) return 'mongodb';
  if (techLower.includes('postgresql') || techLower.includes('postgres')) return 'postgresql';
  if (techLower.includes('mysql')) return 'mysql';
  if (techLower.includes('redis')) return 'redis';
  if (techLower.includes('graphql')) return 'graphql';
  if (techLower.includes('webpack') || techLower.includes('vite')) return 'webpack';
  if (techLower.includes('tailwind')) return 'tailwind';
  if (techLower.includes('bootstrap')) return 'bootstrap';
  if (techLower.includes('figma') || techLower.includes('design')) return 'figma';
  if (techLower.includes('photoshop') || techLower.includes('ps')) return 'photoshop';
  if (techLower.includes('illustrator') || techLower.includes('ai')) return 'illustrator';
  if (techLower.includes('sketch')) return 'sketch';
  if (techLower.includes('wordpress')) return 'wordpress';
  if (techLower.includes('shopify')) return 'shopify';
  if (techLower.includes('stripe') || techLower.includes('payment')) return 'stripe';
  if (techLower.includes('firebase')) return 'firebase';
  if (techLower.includes('vercel')) return 'vercel';
  if (techLower.includes('netlify')) return 'netlify';
  if (techLower.includes('jquery')) return 'jquery';
  if (techLower.includes('liquid')) return 'liquid';
  if (techLower.includes('woocommerce')) return 'woocommerce';
  if (techLower.includes('angular')) return 'angular';
  if (techLower.includes('framer-motion') || techLower.includes('framer')) return 'framer-motion';
  if (techLower.includes('styled-components') || techLower.includes('styled')) return 'styled-components';
  if (techLower.includes('vue')) return 'vue';

  return 'code'; // fallback иконка
};

// Цвета для разных категорий технологий
const getTechColor = (tech: string): string => {
  const techLower = tech.toLowerCase();

  if (techLower.includes('react') || techLower.includes('next')) return '#61dafb';
  if (techLower.includes('typescript') || techLower.includes('ts')) return '#3178c6';
  if (techLower.includes('javascript') || techLower.includes('js')) return '#f7df1e';
  if (techLower.includes('node') || techLower.includes('express')) return '#339933';
  if (techLower.includes('css')) return '#1572b6';
  if (techLower.includes('scss') || techLower.includes('sass')) return '#cf649a';
  if (techLower.includes('html')) return '#e34f26';
  if (techLower.includes('git')) return '#f05032';
  if (techLower.includes('docker')) return '#2496ed';
  if (techLower.includes('aws') || techLower.includes('cloud')) return '#ff9900';
  if (techLower.includes('mongodb') || techLower.includes('mongo')) return '#47a248';
  if (techLower.includes('postgresql') || techLower.includes('postgres')) return '#336791';
  if (techLower.includes('mysql')) return '#4479a1';
  if (techLower.includes('redis')) return '#dc382d';
  if (techLower.includes('graphql')) return '#e10098';
  if (techLower.includes('webpack') || techLower.includes('vite')) return '#8dd6f9';
  if (techLower.includes('tailwind')) return '#06b6d4';
  if (techLower.includes('bootstrap')) return '#7952b3';
  if (techLower.includes('figma') || techLower.includes('design')) return '#f24e1e';
  if (techLower.includes('photoshop') || techLower.includes('ps')) return '#31a8ff';
  if (techLower.includes('illustrator') || techLower.includes('ai')) return '#ff9a00';
  if (techLower.includes('sketch')) return '#f7b500';
  if (techLower.includes('wordpress')) return '#21759b';
  if (techLower.includes('shopify')) return '#96bf48';
  if (techLower.includes('stripe') || techLower.includes('payment')) return '#635bff';
  if (techLower.includes('firebase')) return '#ffca28';
  if (techLower.includes('vercel')) return '#000000';
  if (techLower.includes('netlify')) return '#00c7b7';
  if (techLower.includes('jquery')) return '#0769ad';
  if (techLower.includes('liquid')) return '#f0f0f0';
  if (techLower.includes('woocommerce')) return '#96588a';
  if (techLower.includes('angular')) return '#dd0031';
  if (techLower.includes('framer-motion') || techLower.includes('framer')) return '#0055ff';
  if (techLower.includes('styled-components') || techLower.includes('styled')) return '#db7093';
  if (techLower.includes('vue')) return '#4fc08d';

  return '#f5c542'; // fallback цвет
};

export function TechStack({ technologies, title = 'Technologies' }: TechStackProps) {
  if (!technologies || technologies.length === 0) return null;

  return (
    <div className={styles.techStack}>
      <h3 className={styles.techStack__title}>{title}</h3>
      <div className={styles.techStack__grid}>
        {technologies.map((tech, index) => {
          const icon = getTechIcon(tech);
          const color = getTechColor(tech);

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
              <div className={styles.techStack__icon} style={{ '--tech-color': color } as React.CSSProperties}>
                <Icon name={icon} size="lg" />
              </div>
              <span className={styles.techStack__name}>{tech}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
