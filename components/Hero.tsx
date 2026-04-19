'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Hero.module.css';

const slides = [
  {
    id: 1,
    image: '/hero.png',
    subtitle: 'EST. 1996',
    title: 'Exquisite Craftsmanship',
    span: 'Modern Elegance',
  },
  {
    id: 2,
    image: '/hero2.png',
    subtitle: 'TRADITIONAL KUNDAN',
    title: 'Heritage Revitalized',
    span: 'Artistry in Gold',
  },
  {
    id: 3,
    image: '/hero3.png',
    subtitle: 'JADAU MASTERPIECES',
    title: 'Timeless Treasures',
    span: 'Handcrafted Luxury',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <AnimatePresence mode="wait">
        <motion.div 
          key={slides[currentSlide].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className={styles.split}
        >
          <div className={styles.imageSide}>
            <div className={styles.imageWrapper}>
              <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
            </div>
          </div>
          
          <div className={styles.textSide}>
            <div className={styles.content}>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className={styles.subtitle}
              >
                {slides[currentSlide].subtitle}
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className={styles.title}
              >
                {slides[currentSlide].title} <br /> 
                <span>{slides[currentSlide].span}</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className={styles.description}
              >
                Discover our curated collections of timeless masterpieces, 
                designed for those who appreciate the finer details of heritage.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className={styles.ctaWrapper}
              >
                <button className="luxury-button">Discover Collections</button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className={styles.controls}>
        {slides.map((_, index) => (
          <button 
            key={index} 
            className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
