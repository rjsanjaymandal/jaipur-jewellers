'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './CircleCategories.module.css';

const categories = [
  { label: 'BEST SELLER', image: '/best_seller.png' },
  { label: 'NEW ARRIVALS', image: '/new_arrival.png' },
  { label: 'SILVER COINS', image: '/silver_coin_placeholder.png', isPlaceholder: true },
  { label: 'GOLD COINS', image: '/gold_coin_placeholder.png', isPlaceholder: true },
  { label: 'DIGITAL GOLD', image: '/digital_gold_placeholder.png', isPlaceholder: true },
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
                <div className={`${styles.placeholder} ${cat.label.includes('GOLD') ? styles.gold : styles.silver}`}>
                    {cat.label.split(' ')[0][0]}
                </div>
              ) : (
                <Image src={cat.image} alt={cat.label} width={120} height={120} className={styles.image} style={{ objectFit: 'cover' }} />
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
