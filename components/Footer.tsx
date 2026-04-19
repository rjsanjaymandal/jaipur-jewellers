import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <h2 className={styles.logo}>JAIPUR JEWELLERS</h2>
            <p className={styles.tagline}>Crafting heritage since 1996.</p>
          </div>
          
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h3>Collections</h3>
              <Link href="/bridal">Bridal</Link>
              <Link href="/diamond">Diamond</Link>
              <Link href="/gold">Gold</Link>
              <Link href="/polki">Polki</Link>
            </div>
            <div className={styles.linkGroup}>
              <h3>Visit Us</h3>
              <p className={styles.contactItem}>SCO 105, Inner Market,</p>
              <p className={styles.contactItem}>Sector 35C, CHD</p>
              <p className={styles.contactItem}>T: +91 90561 49264</p>
            </div>
          </div>
          
          <div className={styles.newsletter}>
            <h3>Newsletter</h3>
            <p>Subscribe to receive updates on new collections and exclusive events.</p>
            <form className={styles.form}>
              <input type="email" placeholder="Email Address" className={styles.input} />
              <button type="submit" className={styles.submitBtn}>Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; 2026 Jaipur Jewellers. All rights reserved.</p>
          <div className={styles.legal}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
