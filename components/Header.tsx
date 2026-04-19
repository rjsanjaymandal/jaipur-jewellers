import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <Link href="/diamond">Diamond</Link>
          <Link href="/gold">Gold</Link>
        </div>
        
        <div className={styles.center}>
          <Link href="/" className={styles.logo}>
            JAIPUR JEWELLERS
          </Link>
        </div>
        
        <div className={styles.right}>
          <Link href="/polki">Polki</Link>
          <Link href="/jadau">Jadau</Link>
          <div className={styles.icons}>
            <button aria-label="Search" className={styles.iconButton}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
            <button aria-label="Shopping Bag" className={styles.iconButton}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
