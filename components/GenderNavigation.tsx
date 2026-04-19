'use client';

import { motion } from 'framer-motion';
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
            <img src="/gender_her.png" alt="For Her" />
          </div>
          <div className={styles.content}>
            <h2>FOR HER</h2>
            <button className={styles.btn}>Exquisite Selection</button>
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
            <img src="/gender_him.png" alt="For Him" />
          </div>
          <div className={styles.content}>
            <h2>FOR HIM</h2>
            <button className={styles.btn}>Tailored Luxury</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GenderNavigation;
