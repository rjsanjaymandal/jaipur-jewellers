'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './DiamondShowcase.module.css';

const collections = [
  { id: 1, label: 'Diamond Necklace', image: '/diamond_necklace_new.jpg', alt: 'Premium Diamond Necklace Collection - Jaipur Jewellers Chandigarh' },
  { id: 2, label: 'Diamond Earring', image: '/diamond_earring_new.jpg', alt: 'Exquisite Diamond Earrings - Stud, Drop & Jhumka Designs' },
  { id: 4, label: 'Diamond Ring', image: '/diamond_ring_new.jpg', alt: 'Diamond Engagement & Wedding Rings - Solitaire & Halo Designs' },
];

const DiamondShowcase = () => {
  return (
    <section className={styles.section} aria-labelledby="diamond-heading">
      <div className={styles.header}>
        <h2 id="diamond-heading" className={styles.title}>Diamond Jewellery</h2>
        <div className={styles.titleAccent} />
        <p className={styles.subtitle}>Timeless brilliance captured in every cut</p>
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
                <Image src={item.image} alt={item.alt} width={400} height={500} className={styles.image} style={{ objectFit: 'cover' }} />
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

export default DiamondShowcase;
