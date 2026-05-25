'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './Hero.module.css';

const slides = [
  {
    image: '/gold_bridal_set_v3.jpg',
    subtitle: 'PURE CRAFTSMANSHIP',
    title: 'Heritage in Gold',
    span: 'Handcrafted with Passion',
    alt: 'Traditional Gold Jewellery - Jaipur Jewellers Chandigarh',
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className={styles.hero} aria-label="Featured Collections Banner">
      <AnimatePresence mode="wait">
        <motion.div 
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={styles.slide}
          role="img"
          aria-label={slide.alt}
        >
          <div className={styles.backgroundImage}>
            <Image 
              src={slide.image} 
              alt={slide.alt} 
              fill 
              priority 
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.overlay} aria-hidden="true" />
          </div>
          
          <div className={styles.contentContainer}>
            <div className={styles.content}>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className={styles.subtitle}
              >
                {slide.subtitle}
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className={`${styles.title} ${styles.h1Heading}`}
              >
                {slide.title} <br /> 
                <span>{slide.span}</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className={styles.description}
              >
                Discover our curated collections of timeless masterpieces, 
                designed for those who appreciate the finer details of heritage.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className={styles.ctaWrapper}
              >
                <button className="luxury-button" onClick={() => window.open('https://wa.me/919056149264?text=Hi%2C%20I%20am%20interested%20in%20your%20jewellery%20collections', '_blank')}>Discover Collections</button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {slides.length > 1 && (
        <div className={styles.controls}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`${styles.dot} ${index === current ? styles.activeDot : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Hero;
