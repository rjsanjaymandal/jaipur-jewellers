'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import PriceTicker from './PriceTicker';

const navItems = [
  { label: 'DIAMOND', href: '/diamond' },
  { label: 'GOLD', href: '/gold' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <PriceTicker />
      <div className={styles.topBar}>
        <div className={styles.logoContainer}>
            <Link href="/" className={styles.logoLink} onClick={closeMenu}>
                <Image 
                  src="/logo_gold_final.png" 
                  alt="Jaipur Jewellers Logo" 
                  width={220} 
                  height={75} 
                  priority
                  className={styles.logoImage}
                />
            </Link>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <button 
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerActive : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
          aria-expanded={isOpen}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className={styles.desktopNav}>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.label} className={styles.navItem}>
              <Link href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation Drawer */}
      <nav className={`${styles.mobileNav} ${isOpen ? styles.mobileNavOpen : ''}`}>
        <ul className={styles.mobileNavList}>
          {navItems.map((item) => (
            <li key={item.label} className={styles.mobileNavItem}>
              <Link href={item.href} className={styles.mobileNavLink} onClick={closeMenu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
