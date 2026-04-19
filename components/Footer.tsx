import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <h2 className={styles.logo}>JAIPUR JEWELLERS</h2>
            <p className={styles.tagline}>A Legacy of Trust Since 1996.</p>
            <div className={styles.socials}>
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
            </div>
          </div>
          
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h3>Collections</h3>
              <Link href="/diamond">Diamond</Link>
              <Link href="/gold">Gold</Link>
              <Link href="/jadau">Jadau</Link>
              <Link href="/polki">Polki</Link>
              <Link href="/kundan">Kundan</Link>
            </div>
            
            <div className={styles.linkGroup}>
              <h3>Visit Our Stores</h3>
              <div className={styles.store}>
                  <strong>Main Boutique</strong>
                  <p>SCO 105, Inner Market,</p>
                  <p>Sector 35C, CHD</p>
              </div>
              <div className={styles.store}>
                  <strong>Bridal Studio</strong>
                  <p>SCO 12, Sector 34C,</p>
                  <p>Chandigarh, India</p>
              </div>
              <p className={styles.phone}>T: +91 90561 49264</p>
            </div>

            <div className={styles.linkGroup}>
                <h3>Trust & Service</h3>
                <Link href="/virtual-tour">Virtual Tour</Link>
                <Link href="/bespoke">Bespoke Design</Link>
                <Link href="/blog">Our Story (Blog)</Link>
                <Link href="/care">Jewelry Care</Link>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; 2026 Jaipur Jewellers. All rights reserved.</p>
          <div className={styles.legal}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/shipping">Shipping Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
