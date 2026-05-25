'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import PriceTicker from './PriceTicker';

const navItems = [
  { label: 'DIAMOND', href: 'https://wa.me/919056149264?text=Hi%2C%20I%20am%20interested%20in%20Diamond%20Jewellery' },
  { label: 'GOLD', href: 'https://wa.me/919056149264?text=Hi%2C%20I%20am%20interested%20in%20Gold%20Jewellery' },
  { label: 'KUNDAN', href: 'https://wa.me/919056149264?text=Hi%2C%20I%20am%20interested%20in%20Kundan%20Jewellery' },
  { label: 'JADAU', href: 'https://wa.me/919056149264?text=Hi%2C%20I%20am%20interested%20in%20Jadau%20Jewellery' },
  { label: 'ITALIAN', href: 'https://wa.me/919056149264?text=Hi%2C%20I%20am%20interested%20in%20Italian%20Jewellery' },
  { label: 'POLKI', href: 'https://wa.me/919056149264?text=Hi%2C%20I%20am%20interested%20in%20Polki%20Jewellery' },
  { label: 'SILVER', href: 'https://wa.me/919056149264?text=Hi%2C%20I%20am%20interested%20in%20Silver%20Jewellery' },
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
              <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.navLink}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
