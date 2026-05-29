'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import PriceTicker from './PriceTicker';

const navItems = [
  { label: 'DIAMOND', href: '/diamond' },
  { label: 'GOLD', href: '/gold' },
  { label: 'SILVER', href: '/silver' },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <PriceTicker />
      <div className={styles.topBar}>
        <div className={styles.logoContainer}>
            <Link href="/" className={styles.logoLink}>
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
      </div>

      <nav className={styles.nav}>
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
    </header>
  );
};

export default Header;
