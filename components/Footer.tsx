import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logoContainer}>
              <a href="/">
                <Image 
                  src="/logo_gold_final.png" 
                  alt="Jaipur Jewellers Logo" 
                  width={180} 
                  height={60}
                  className={styles.logoImage}
                />
              </a>
            </div>
            <p className={styles.tagline}>A Legacy of Trust Since 1996.</p>
            <div className={styles.socials}>
                <a href="https://instagram.com/jaipurjewellers" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
                <a href="https://facebook.com/jaipurjewellers" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
            </div>
          </div>
          
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h3>Visit Us</h3>
              <div className={styles.store}>
                  <p>SCO 105, Sector 35C INNER MARKET</p>
                  <p>CHANDIGARH</p>
              </div>
              <a href="tel:+919056149264" className={styles.phone}>+91 90561 49264</a>
            </div>
            
            <div className={styles.linkGroup}>
              <h3>Collections</h3>
              <a href="https://wa.me/919056149264?text=Hi%2C%20I%20am%20interested%20in%20Diamond%20Jewellery" target="_blank" rel="noopener noreferrer">Diamond</a>
              <a href="https://wa.me/919056149264?text=Hi%2C%20I%20am%20interested%20in%20Gold%20Jewellery" target="_blank" rel="noopener noreferrer">Gold</a>
            </div>
          </div>
        </div>
        
        <div className={styles.divider} />
        
        <div className={styles.bottom}>
          <p>&copy; 2026 Jaipur Jewellers. All rights reserved.</p>
          <div className={styles.legal}>
            <a href="https://wa.me/919056149264?text=Hi%2C%20I%20would%20like%20to%20know%20about%20your%20Privacy%20Policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <a href="https://wa.me/919056149264?text=Hi%2C%20I%20would%20like%20to%20know%20about%20your%20Terms%20%26%20Conditions" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
            <a href="https://wa.me/919056149264?text=Hi%2C%20I%20would%20like%20to%20know%20about%20your%20Shipping%20Policy" target="_blank" rel="noopener noreferrer">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
