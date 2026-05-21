import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logoContainer}>
              <Link href="/">
                <Image 
                  src="/logo_gold_final.png" 
                  alt="Jaipur Jewellers Logo" 
                  width={200} 
                  height={68}
                  className={styles.logoImage}
                />
              </Link>
            </div>
            <p className={styles.tagline}>A Legacy of Trust Since 1996.</p>
            <div className={styles.socials}>
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
            </div>
          </div>
          
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h3>Visit Us</h3>
              <div className={styles.store}>
                  <p>SCO 105, Sector 35C INNER MARKET</p>
                  <p>CHANDIGARH</p>
              </div>
              <p className={styles.phone}>T: +91 90561 49264</p>
            </div>
            
            <div className={styles.linkGroup}>
              <h3>Collections</h3>
              <a href="https://wa.me/919056149264?text=Hi%2C%20I%20am%20interested%20in%20Diamond%20Jewellery" target="_blank" rel="noopener noreferrer">Diamond</a>
              <a href="https://wa.me/919056149264?text=Hi%2C%20I%20am%20interested%20in%20Gold%20Jewellery" target="_blank" rel="noopener noreferrer">Gold</a>
              <a href="https://wa.me/919056149264?text=Hi%2C%20I%20am%20interested%20in%20Jadau%20Jewellery" target="_blank" rel="noopener noreferrer">Jadau</a>
              <a href="https://wa.me/919056149264?text=Hi%2C%20I%20am%20interested%20in%20Polki%20Jewellery" target="_blank" rel="noopener noreferrer">Polki</a>
              <a href="https://wa.me/919056149264?text=Hi%2C%20I%20am%20interested%20in%20Kundan%20Jewellery" target="_blank" rel="noopener noreferrer">Kundan</a>
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
