'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Header.module.scss';

const navigation = [
  { name: 'Work', href: '/work' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.header__container}>
        <div className={styles.header__content}>
          {/* Logo */}
          <Link href="/" className={`${styles.header__logo} no-underline`}>
            <div className={styles.header__logoIcon}>B</div>
            <span>bogryashovDev</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.header__nav}>
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className={`${styles.header__navLink} no-underline`}>
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button onClick={toggleMobileMenu} className={styles.header__mobileButton} aria-label="Toggle mobile menu">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className={styles.header__mobileMenu}>
            <div className={styles.header__mobileContent}>
              {/* Logo in mobile menu */}
              <Link href="/" className={`${styles.header__mobileLogo} no-underline`}>
                <div className={styles.header__logoIcon}>B</div>
                <span>bogryashovDev</span>
              </Link>

              {/* Navigation links */}
              <nav className={styles.header__mobileNav}>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`${styles.header__mobileNavLink} no-underline`}>
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
