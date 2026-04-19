'use client';

import { motion } from 'framer-motion';
import styles from './SolitaireShowcase.module.css';

const SolitaireShowcase = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Solitaire Engagement Ring</h2>
        <p className={styles.subtitle}>Timeless elegance in every sparkling solitaire.</p>
      </div>
      
      <div className={styles.grid}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.card}
        >
          <div className={styles.bokehBg}>
             <div className={styles.orb1}></div>
             <div className={styles.orb2}></div>
             <div className={styles.orb3}></div>
          </div>
          <div className={styles.content}>
            <span className={styles.label}>FOR HIM</span>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.card}
        >
          <div className={styles.bokehBg}>
             <div className={styles.orb1}></div>
             <div className={styles.orb2}></div>
             <div className={styles.orb3}></div>
          </div>
          <div className={styles.content}>
            <span className={styles.label}>FOR HER</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolitaireShowcase;
