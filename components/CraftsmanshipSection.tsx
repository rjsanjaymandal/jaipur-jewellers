'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './CraftsmanshipSection.module.css';

const milestones = [
  { year: '1981', label: 'Founded', desc: 'Started in heart of Jaipur' },
  { year: '1997', label: 'First Store', desc: 'Own shop established' },
  { year: '2006', label: 'Showroom', desc: 'Flagship showroom opened' },
  { year: '2021', label: 'New Era', desc: 'Hitesh Aggarwal joins' },
  { year: '2023', label: 'Innovation', desc: 'Dev Aggarwal joins' },
];

const CraftsmanshipSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <Image src="/craft_bg.png" alt="About Us Background" fill style={{ objectFit: 'cover' }} />
      </div>
      
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.headerSection}
        >
          <span className={styles.eyebrow}>About Us</span>
          <h2 className={styles.title}>A Legacy of Trust & Craftsmanship</h2>
          <div className={styles.line}></div>
        </motion.div>

        <div className={styles.mainContent}>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className={styles.intro}
          >
            Some stories are not just built — they are crafted over generations, with passion, trust, and dedication.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={styles.timeline}
          >
            {milestones.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <span className={styles.year}>{item.year}</span>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <span className={styles.timelineLabel}>{item.label}</span>
                  <span className={styles.timelineDesc}>{item.desc}</span>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={styles.text}
          >
            As a proud second-generation family business, we carry forward the values of trust, purity, and 
            craftsmanship. Today, Jaipur Jewellers stands as a symbol of heritage, trust, and artistry — 
            every piece we create reflects decades of mastery and is designed to become a treasured part 
            of your most special moments.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
