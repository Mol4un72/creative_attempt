'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

/** Nav links rendered in header */
const NAV_LINKS = [
  { href: '/gallery',    label: 'Gallery' },
  { href: '/create',     label: 'Create' },
  { href: '/contact-us', label: 'Contact' },
  { href: '/about-us',   label: 'About' },
];

export default function Header() {
  const [hidden,   setHidden]   = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  
  /* ── Hide header on scroll down, show on scroll up ── */
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHidden(currentScrollY > 80 && currentScrollY > lastScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={` ${styles.header} ${hidden ? styles.hidden : ""} ${isHome ? styles.home : ""}`}>
      {/* ── Logo ── */}
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/logo.png" alt="Creative Attempt" width={180} height={64} priority />
        </Link>
      </div>

      {/* ── Desktop Nav ── */}
      <nav className={styles.nav} aria-label="Main navigation">
        {NAV_LINKS.map(({ href, label }) => (
          <Link key={href} href={href} className={`${styles.navLink} ${
            pathname === href ? styles.active : ''
          }`}>
            {label}
          </Link>
        ))}
      </nav>

      {/* ── Actions ── */}
      <div className={styles.actions}>
        {/* Profile */}
        <Link href="/profile" className={styles.iconBtn} aria-label="Profile">
          <Image src="/profile.svg" alt="" width={56} height={56} />
        </Link>

        {/* Hamburger (mobile) */}
        <button
          id="header-menu-btn"
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* ── Mobile Drawer ── */}
      {menuOpen && (
        <nav className={styles.mobileMenu} aria-label="Mobile navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}