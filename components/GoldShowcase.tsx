'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './GoldShowcase.module.css';

const collections = [
  { id: 1, label: 'Gold Necklace', image: '/gold_necklace_new.jpg', alt: '22K Gold Necklace Collection - Traditional & Contemporary Designs' },
  { id: 2, label: 'Gold Earring', image: '/gold_earring_new.jpg', alt: 'Gold Earrings - Jhumka, Chandbali & Stud Designs' },
  { id: 4, label: 'Gold Ring', image: '/gold_ring_new.jpg', alt: 'Gold Rings for Every Occasion - Daily Wear to Wedding' },
];

const GoldShowcase = () => {
  return (
    <section className={styles.section} aria-labelledby="gold-heading">
      <div className={styles.header}>
        <h2 id="gold-heading" className={styles.title}>Gold Jewellery</h2>
        <div className={styles.titleAccent} />
        <p className={styles.subtitle}>Pure luxury crafted with heritage</p>
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
            onClick={() => window.open(`https://wa.me/919056149264?text=Hi%2C%20I%20am%20interested%20in%20${encodeURIComponent(item.label)}`, '_blank')}
            style={{ cursor: 'pointer' }}
          >
            <div className={styles.card}>
              <div className={styles.imageOverlay}>
                <Image 
                  src={item.image} 
                  alt={item.alt} 
                  width={400} 
                  height={500} 
                  className={styles.image} 
                  style={{ objectFit: 'cover' }} 
                />
                <div className={styles.cardLabel}>
                  <span>Enquire Now</span>
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

export default GoldShowcase;