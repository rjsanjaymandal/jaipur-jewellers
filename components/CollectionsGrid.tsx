'use client';

import { motion } from 'framer-motion';
import styles from './CollectionsGrid.module.css';

const collections = [
  {
    id: 1,
    title: 'Bridal Collection',
    image: '/bridal.png',
    large: true,
  },
  {
    id: 2,
    title: 'Daily Wear',
    image: '/daily.png',
    large: false,
  },
  {
    id: 3,
    title: "Men's Edit",
    image: '/mens.png',
    large: false,
  },
];

const CollectionsGrid = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <span className={styles.eyebrow}>Our Curation</span>
          <h2 className={styles.title}>The Signature Collections</h2>
        </header>
        
        <div className={styles.grid}>
          {collections.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`${styles.item} ${item.large ? styles.large : ''}`}
            >
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.title} className={styles.image} />
                <div className={styles.overlay}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <button className={styles.exploreBtn}>Explore Piece</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsGrid;
