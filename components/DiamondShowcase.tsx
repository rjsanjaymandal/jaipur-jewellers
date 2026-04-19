'use client';

import { motion } from 'framer-motion';
import styles from './DiamondShowcase.module.css';

const collections = [
  { id: 1, label: 'Diamond Necklace', sub: 'Necklace Collection', image: '/bridal.png' },
  { id: 2, label: 'Diamond Earring', sub: 'Earring Collection', image: '/daily.png' },
  { id: 3, label: 'Diamond Mangalsutra', sub: 'Mangalsutra Collection', image: '/hero2.png' },
  { id: 4, label: 'Diamond Ring', sub: 'Ring Collection', image: '/hero3.png' },
];

const DiamondShowcase = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Diamond Jewellery</h2>
        <p className={styles.subtitle}>Sparkle through the events with timeless diamonds</p>
      </div>
      
      <div className={styles.grid}>
        {collections.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className={styles.cardWrapper}
          >
            <div className={styles.card}>
              <div className={styles.imageOverlay}>
                <img src={item.image} alt={item.label} className={styles.image} />
                <div className={styles.innerText}>
                  <span>{item.sub}</span>
                </div>
              </div>
            </div>
            <span className={styles.caption}>{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DiamondShowcase;
