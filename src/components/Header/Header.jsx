'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import styles from './Header.module.css';

export default function Header() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // ховаємо після 100px скролу вниз
      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${hidden ? styles.hidden : ''}`}
    >
      <div className={styles.logo}>
        <a href="/">
          <Image src="/logo.png" alt="Creative Attempt" width={224} height={80} />
        </a>
      </div>

      <div className={styles.buttons}>
        <Link href="/gallery">Gallery</Link>
        <Link href="/create">Create</Link>
        <Link href="/contact-us">Contact us</Link>
        <Link href="/about-us">About us</Link>

        <span className={styles.searchIcon}>
          <Image src="/search_btn.svg" alt="Пошук" width={40} height={40} />
        </span>

        <Link href="/profile">
          <Image src="/profile.svg" alt="Профіль" width={40} height={40} />
        </Link>
      </div>
    </header>
  );
}