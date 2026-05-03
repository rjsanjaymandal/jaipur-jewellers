'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './DiamondShowcase.module.css';

const collections = [
  { id: 1, label: 'Diamond Necklace', image: '/diamond_necklace.jpg' },
  { id: 2, label: 'Diamond Earring', image: '/diamond_earring.jpg' },
  { id: 3, label: 'Diamond Mangalsutra', image: '/diamond_mangalsutra.jpg' },
  { id: 4, label: 'Diamond Ring', image: '/diamond_ring.jpg' },
];

const DiamondShowcase = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Diamond Jewellery</h2>
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
                <Image src={item.image} alt={item.label} width={400} height={500} className={styles.image} style={{ objectFit: 'cover' }} />
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
