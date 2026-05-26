'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './DiamondShowcase.module.css';

const collections = [
  { id: 1, label: 'Diamond Necklace', image: '/diamond_necklace_v3.jpg', alt: 'Premium Diamond Necklace Collection - Jaipur Jewellers Chandigarh' },
  { id: 2, label: 'Diamond Earring', image: '/diamond_earring_v3.jpg', alt: 'Exquisite Diamond Earrings - Stud, Drop & Jhumka Designs' },
  { id: 4, label: 'Diamond Ring', image: '/diamond_ring_v3.jpg', alt: 'Diamond Engagement & Wedding Rings - Solitaire & Halo Designs' },
];

const DiamondShowcase = () => {
  return (
    <section className={styles.section} aria-labelledby="diamond-heading">
      <div className={styles.header}>
        <div className={styles.ornament}>
          <span className={styles.ornamentLine} />
          <span className={styles.ornamentDiamond} />
          <span className={styles.ornamentLine} />
        </div>
        <h2 id="diamond-heading" className={styles.title}>Diamond Jewellery</h2>
        <div className={styles.titleAccent} />
        <p className={styles.subtitle}>Timeless brilliance captured in every cut</p>
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
            onClick={() => window.location.href = '/diamond'}
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

export default DiamondShowcase;
