'use client';

import { motion } from 'framer-motion';
import styles from './CircleCategories.module.css';

const categories = [
  { label: 'Best seller', image: '/best_seller.png' },
  { label: 'New Arrival', image: '/new_arrival.png' },
  { label: 'Silver Coins', image: '/silver_coin_placeholder.png', isPlaceholder: true },
  { label: 'Gold Coins', image: '/gold_coin_placeholder.png', isPlaceholder: true },
];

const CircleCategories = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {categories.map((cat, index) => (
          <motion.div 
            key={cat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={styles.item}
          >
            <div className={styles.circleWrapper}>
              {cat.isPlaceholder ? (
                <div className={`${styles.placeholder} ${cat.label.includes('Gold') ? styles.gold : styles.silver}`}>
                    {cat.label.split(' ')[0][0]}
                </div>
              ) : (
                <img src={cat.image} alt={cat.label} className={styles.image} />
              )}
            </div>
            <span className={styles.label}>{cat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CircleCategories;
