'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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

const igPosts = ['/ig1.png', '/ig2.png', '/ig3.png', '/ig4.png'];

const SocialProofSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.testimonialsSide}>
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
          
          <div className={styles.igSide}>
            <span className={styles.eyebrow}>Instagram</span>
            <h2 className={styles.title}>Follow the Journey</h2>
            
            <div className={styles.igGrid}>
              {igPosts.map((post, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={styles.igItem}
                >
                  <Image src={post} alt={`Instagram post ${i + 1}`} width={300} height={300} style={{ objectFit: 'cover' }} />
                  <div className={styles.igOverlay}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
