'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const navItems = [
  { label: 'DIAMOND', href: '/diamond' },
  { label: 'GOLD', href: '/gold' },
  { label: 'KUNDAN', href: '/kundan' },
  { label: 'JADAU', href: '/jadau' },
  { label: 'ITALIAN', href: '/italian' },
  { label: 'POLKI', href: '/polki' },
  { label: 'SILVER', href: '/silver' },
  { label: 'RATE', href: '#', isRate: true },
  { label: 'INVESTORS', href: '/investors' },
];

const Header = () => {
  const [isRateOpen, setIsRateOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.searchContainer}>
          <button aria-label="Search" className={styles.iconButton}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
          <input type="text" placeholder="Search our collection..." className={styles.searchInput} />
        </div>
        
        <div className={styles.logoContainer}>
            <Link href="/" className={styles.logo}>
                JAIPUR JEWELLERS
            </Link>
        </div>

        <div className={styles.utility}>
           <Link href="/wishlist" className={styles.utilityLink}>Wishlist</Link>
           <Link href="/login" className={styles.utilityLink}>Login</Link>
        </div>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.label} className={styles.navItem}>
              {item.isRate ? (
                <div 
                  className={styles.rateWrapper}
                  onMouseEnter={() => setIsRateOpen(true)}
                  onMouseLeave={() => setIsRateOpen(false)}
                >
                  <button className={styles.navLink}>{item.label}</button>
                  {isRateOpen && (
                    <div className={styles.rateDropdown}>
                      <div className={styles.rateInfo}>
                        <span>22K Gold: ₹6,641/gm</span>
                        <span>24K Gold: ₹7,245/gm</span>
                        <span>Silver: ₹842/10gm</span>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
