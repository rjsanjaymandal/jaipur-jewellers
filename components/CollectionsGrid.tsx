'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './CollectionsGrid.module.css';

const collections = [
  {
    id: 1,
    title: 'Bridal Collection',
    category: 'TRADITIONAL JADAU',
    image: '/bridal.png',
    size: 'large',
    tag: 'Best Seller'
  },
  {
    id: 2,
    title: 'Daily Wear',
    category: 'MINIMALIST GOLD',
    image: '/daily.png',
    size: 'small',
    tag: 'New Arrival'
  },
  {
    id: 3,
    title: 'Men\'s Edit',
    category: 'REGAL ACCESSORIES',
    image: '/mens.png',
    size: 'medium'
  },
];

const CollectionsGrid = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>EXQUISITE COLLECTIONS</h2>
        </div>
        
        <div className={styles.grid}>
          {collections.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`${styles.card} ${styles[item.size]}`}
            >
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.title} />
                {item.tag && <span className={styles.badge}>{item.tag}</span>}
              </div>
              <div className={styles.info}>
                <span className={styles.category}>{item.category}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <Link href={`/collections/${item.id}`} className={styles.explore}>
                  Discover Collection
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsGrid;
