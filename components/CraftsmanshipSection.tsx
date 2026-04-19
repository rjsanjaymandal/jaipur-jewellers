'use client';

import { motion } from 'framer-motion';
import styles from './CraftsmanshipSection.module.css';

const CraftsmanshipSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <img src="/craft_bg.png" alt="Craftsmanship Background" />
      </div>
      
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className={styles.eyebrow}>Our Heritage</span>
          <h2 className={styles.title}>Masters of Craft Since 1996</h2>
          <div className={styles.line}></div>
          <p className={styles.text}>
            At Jaipur Jewellers, every piece is a testament to our legacy of precision and passion. 
            For over three decades, we have blended traditional Indian artistry with contemporary 
            aesthetics to create jewelry that speaks a language of timeless luxury.
          </p>
          <p className={styles.text}>
            Our artisans dedicate hundreds of hours to a single masterpiece, ensuring that the 
            soul of Jaipur's rich culture is preserved in every diamond, every gold thread, 
            and every polki setting.
          </p>
          <button className={styles.storyBtn}>Read Our Story</button>
        </motion.div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
