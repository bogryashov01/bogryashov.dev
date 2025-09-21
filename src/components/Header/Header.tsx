'use client';

// @ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getCopy } from '@/lib/copy';
import { type Locale } from '@/i18n/config';
import styles from './Header.module.scss';

type Route = string;

type Props = {
  locale?: Locale;
};

export default function Header({ locale = 'en' }: Props) {
  const pathname = usePathname();
  const [copy, setCopy] = useState<{
    nav: {
      work: string;
      services: string;
      about: string;
      contact: string;
    };
    language: {
      english: string;
      ukrainian: string;
    };
  } | null>(null);

  useEffect(() => {
    getCopy(locale).then(setCopy);
  }, [locale]);

  // Функция для переключения языка
  const switchLanguage = (newLocale: Locale): Route => {
    const currentPath = pathname.replace(/^\/[a-z]{2}/, '') || '/';
    return `/${newLocale}${currentPath}`;
  };

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

  // Fallback values to prevent hydration mismatch
  const fallbackCopy = {
    nav: {
      work: locale === 'uk' ? 'Роботи' : 'Work',
      services: locale === 'uk' ? 'Послуги' : 'Services',
      about: locale === 'uk' ? 'Про мене' : 'About',
      contact: locale === 'uk' ? 'Контакти' : 'Contact',
    },
    language: {
      english: 'English',
      ukrainian: 'Українська',
    },
  };

  const currentCopy = copy || fallbackCopy;

  const navigation = [
    {
      name: currentCopy.nav.work,
      href: `/${locale}/work`,
    },
    {
      name: currentCopy.nav.services,
      href: `/${locale}/services`,
    },
    {
      name: currentCopy.nav.about,
      href: `/${locale}/about`,
    },
    {
      name: currentCopy.nav.contact,
      href: `/${locale}/contact`,
    },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.header__container}>
        <div className={styles.header__content}>
          {/* Logo */}
          <Link href={`/${locale}`} className={`${styles.header__logo} no-underline`}>
            <div className={styles.header__logoIcon}>B</div>
            <span>bogryashovDev</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.header__nav}>
            {navigation.map((item) => (
              <Link key={item.name} href={item.href as any} className={`${styles.header__navLink} no-underline`}>
                {item.name}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className={styles.header__langSwitcher}>
              <div className={styles.header__langToggle}>
                <Link
                  href={switchLanguage('en') as any}
                  className={`${styles.header__langOption} ${locale === 'en' ? styles.active : ''}`}
                  data-lang="en">
                  <span className={styles.header__langFlag}>🇺🇸</span>
                  <span className={styles.header__langCode}>EN</span>
                </Link>
                <Link
                  href={switchLanguage('uk') as any}
                  className={`${styles.header__langOption} ${locale === 'uk' ? styles.active : ''}`}
                  data-lang="uk">
                  <span className={styles.header__langFlag}>🇺🇦</span>
                  <span className={styles.header__langCode}>UK</span>
                </Link>
                <div className={`${styles.header__langSlider} ${locale === 'uk' ? styles.slideRight : styles.slideLeft}`}></div>
              </div>
            </div>
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
              <Link href={`/${locale}`} className={`${styles.header__mobileLogo} no-underline`}>
                <div className={styles.header__logoIcon}>B</div>
                <span>bogryashovDev</span>
              </Link>

              {/* Navigation links */}
              <nav className={styles.header__mobileNav}>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href as any}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`${styles.header__mobileNavLink} no-underline`}>
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Language Switcher */}
                <div className={styles.header__mobileLangSwitcher}>
                  <Link
                    href={switchLanguage('en') as any}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`${styles.header__mobileLangLink} ${locale === 'en' ? styles.active : ''}`}>
                    {currentCopy.language.english}
                  </Link>
                  <Link
                    href={switchLanguage('uk') as any}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`${styles.header__mobileLangLink} ${locale === 'uk' ? styles.active : ''}`}>
                    {currentCopy.language.ukrainian}
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
