'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './GenderNavigation.module.css';

const GenderNavigation = () => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.card}
        >
          <div className={styles.imageWrapper}>
            <Image src="/gender_her.png" alt="For Her" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className={styles.content}>
            <h2>FOR HER</h2>
            <button className={styles.btn} onClick={() => window.open('https://wa.me/919056149264?text=Hi%2C%20I%20am%20interested%20in%20jewellery%20for%20her', '_blank')}>Exquisite Selection</button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.card}
        >
          <div className={styles.imageWrapper}>
            <Image src="/gender_him.png" alt="For Him" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className={styles.content}>
            <h2>FOR HIM</h2>
            <button className={styles.btn} onClick={() => window.open('https://wa.me/919056149264?text=Hi%2C%20I%20am%20interested%20in%20jewellery%20for%20him', '_blank')}>Tailored Luxury</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GenderNavigation;
