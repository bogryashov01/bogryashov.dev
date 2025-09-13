'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './ImageGallery.module.scss';

interface ImageGalleryProps {
  images: string[];
  alt: string;
  className?: string;
}

export function ImageGallery({ images, alt, className }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex(index);
  };

  if (images.length === 0) return null;

  return (
    <div className={`${styles.gallery} ${className || ''}`}>
      {/* Main image display */}
      <div className={styles.gallery__main}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${alt} - Image ${currentIndex + 1}`}
          className={styles.gallery__image}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        />

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button className={`${styles.gallery__arrow} ${styles.gallery__arrowLeft}`} onClick={prevImage} aria-label="Previous image">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button className={`${styles.gallery__arrow} ${styles.gallery__arrowRight}`} onClick={nextImage} aria-label="Next image">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </>
        )}

        {/* Image counter */}
        {images.length > 1 && (
          <div className={styles.gallery__counter}>
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail navigation */}
      {images.length > 1 && (
        <div className={styles.gallery__thumbnails}>
          {images.map((image, index) => (
            <button
              key={index}
              className={`${styles.gallery__thumbnail} ${index === currentIndex ? styles.active : ''}`}
              onClick={(e) => goToImage(index, e)}
              aria-label={`View image ${index + 1}`}>
              <Image src={image} alt={`${alt} thumbnail ${index + 1}`} width={80} height={60} className={styles.gallery__thumbnailImage} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
