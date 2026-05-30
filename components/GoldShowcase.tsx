'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './GoldShowcase.module.css';

const collections = [
  { id: 1, label: 'Gold Necklace', image: '/gold_necklace_v3.jpg', alt: '22K Gold Necklace Collection - Traditional & Contemporary Designs' },
  { id: 2, label: 'Gold Earring', image: '/gold_earring_v3.jpg', alt: 'Gold Earrings - Jhumka, Chandbali & Stud Designs' },
  { id: 4, label: 'Gold Ring', image: '/gold_ring_v3.jpg', alt: 'Gold Rings for Every Occasion - Daily Wear to Wedding' },
];

const GoldShowcase = () => {
  return (
    <section className={styles.section} aria-labelledby="gold-heading">
      <div className={styles.header}>
        <div className={styles.ornament}>
          <span className={styles.ornamentLine} />
          <span className={styles.ornamentDiamond} />
          <span className={styles.ornamentLine} />
        </div>
        <h2 id="gold-heading" className={styles.title}>Gold Jewellery</h2>
        <div className={styles.titleAccent} />
        <p className={styles.subtitle}>Pure luxury crafted with heritage</p>
      </div>

      <div className={styles.grid}>
        {collections.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.12, duration: 0.6 }}
            className={styles.item}
            onClick={() => {
              if (item.label === 'Gold Necklace') {
                window.location.href = '/gold-necklaces';
              } else if (item.label === 'Gold Earring') {
                window.location.href = '/gold-earrings';
              } else if (item.label === 'Gold Ring') {
                window.location.href = '/gold-rings';
              } else {
                window.location.href = '/gold';
              }
            }}
            style={{ cursor: 'pointer' }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={item.image}
                alt={item.alt}
                width={400}
                height={500}
                className={styles.image}
              />
              <div className={styles.labelOverlay}>
                <span>Enquire Now</span>
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
