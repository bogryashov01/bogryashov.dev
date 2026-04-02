'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Container from '@/components/UI/Container/Container';
import Button from '@/components/UI/Button/Button';
import { NAV_ITEMS } from '@/lib/site-config';
import styles from './Header.module.scss';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__inner}>
          <Link href="/" className={styles.header__logo} aria-label="Bogryashov.dev home">
            <span className={styles.header__logoB}>B</span>
            <span className={styles.header__logoText}>ogryashov</span>
            <span className={styles.header__logoDev}>.dev</span>
          </Link>

          <nav className={styles.header__nav}>
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.header__navLink} ${isActive ? styles['header__navLink--active'] : ''}`.trim()}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className={styles.header__cta}>
            <Button as="link" href="/contact" size="md">
              Discuss a project
            </Button>
          </div>

          <button
            type="button"
            className={`${styles.header__burger} ${isMobileMenuOpen ? styles['header__burger--active'] : ''}`.trim()}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
            <span />
            <span />
          </button>
        </div>
      </Container>

      <div className={`${styles.header__mobileOverlay} ${isMobileMenuOpen ? styles['header__mobileOverlay--open'] : ''}`.trim()}>
        <Container>
          <div className={styles.header__mobilePanel}>
            <nav className={styles.header__mobileNav}>
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${styles.header__mobileLink} ${isActive ? styles['header__mobileLink--active'] : ''}`.trim()}>
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className={styles.header__mobileActions}>
              <Button as="link" href="/contact" size="lg" className={styles.header__mobileButton}>
                Discuss a project
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
