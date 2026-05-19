'use client';

import { motion } from 'framer-motion';
import styles from './SocialProofSection.module.css';

const testimonials = [
  {
    text: "The craftsmanship at Jaipur Jewellers is unparalleled. My bridal set is a piece of art that I will cherish forever.",
    author: "Ananya Sharma",
    role: "Happy Bride"
  },
  {
    text: "Elegant, timeless, and sophisticated. Their modern take on traditional Jadau is simply breathtaking.",
    author: "Vikram Malhotra",
    role: "Collector"
  }
];

const SocialProofSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.testimonialContainer}>
          <span className={styles.eyebrow}>Testimonials</span>
          <h2 className={styles.title}>Valued by Connoisseurs</h2>
          
          <div className={styles.testimonialList}>
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className={styles.testimonial}
              >
                <p className={styles.quote}>&ldquo;{t.text}&rdquo;</p>
                <div className={styles.authorInfo}>
                  <span className={styles.author}>{t.author}</span>
                  <span className={styles.role}>{t.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
