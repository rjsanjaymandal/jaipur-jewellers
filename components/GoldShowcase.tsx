'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './GoldShowcase.module.css';

const collections = [
  { id: 1, label: 'Gold Necklace', image: '/gold_necklace.png' },
  { id: 2, label: 'Gold Earring', image: '/gold_earring.png' },
  { id: 4, label: 'Gold Ring', image: '/gold_ring.png' },
];

const GoldShowcase = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Gold Jewellery</h2>
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
                <Image 
                  src={item.image} 
                  alt={item.label} 
                  width={400} 
                  height={500} 
                  className={styles.image} 
                  style={{ objectFit: 'cover' }} 
                />
              </div>
            </div>
            <span className={styles.caption}>{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GoldShowcase;