'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './CircleCategories.module.css';

const categories = [
  { label: 'BEST SELLER', image: '/best_seller.png', message: 'Hi%2C%20I%20am%20interested%20in%20Best%20Seller%20collections' },
  { label: 'NEW ARRIVALS', image: '/new_arrival.png', message: 'Hi%2C%20I%20am%20interested%20in%20New%20Arrivals' },
  { label: 'GOLD COINS', image: '/gold_coin.png', message: 'Hi%2C%20I%20am%20interested%20in%20Gold%20Coins' },
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
            onClick={() => {
              if (cat.label === 'GOLD COINS') {
                window.location.href = '/gold-coins';
              } else {
                window.open(`https://wa.me/919056149264?text=${cat.message}`, '_blank');
              }
            }}
            style={{ cursor: 'pointer' }}
          >
            <div className={styles.circleWrapper}>
              <Image 
                src={cat.image} 
                alt={cat.label} 
                width={120} 
                height={120} 
                className={styles.image} 
                style={{ objectFit: 'cover' }} 
              />
            </div>
            <span className={styles.label}>{cat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CircleCategories;
