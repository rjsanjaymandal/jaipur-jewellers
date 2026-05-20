'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  },
  {
    text: "Exceptional quality and beautiful designs. Every piece tells a story of heritage and perfection.",
    author: "Priya Reddy",
    role: "Satisfied Customer"
  },
  {
    text: "Their attention to detail is remarkable. I found my dream necklace here.",
    author: "Meera Patel",
    role: "Loyal Client"
  }
];

const SocialProofSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.testimonialContainer}>
          <span className={styles.eyebrow}>Testimonials</span>
          <h2 className={styles.title}>Valued by Connoisseurs</h2>
          
          <div className={styles.sliderContainer}>
            <div className={styles.sliderTrack}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={styles.testimonialCard}
                >
                  <p className={styles.quote}>&ldquo;{testimonials[currentIndex].text}&rdquo;</p>
                  <div className={styles.authorInfo}>
                    <span className={styles.author}>{testimonials[currentIndex].author}</span>
                    <span className={styles.role}>{testimonials[currentIndex].role}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
