'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './ProductGrid.module.css';

interface Product {
  name: string;
  image: string;
  alt: string;
}

interface ProductGridProps {
  category: string;
  products: Product[];
}

const ProductGrid = ({ category, products }: ProductGridProps) => {
  const handleBuy = (name: string) => {
    window.open(
      `https://wa.me/919056149264?text=Hi%2C%20I%20am%20interested%20in%20buying%20${encodeURIComponent(name)}%20from%20your%20${encodeURIComponent(category)}%20collection.`,
      '_blank'
    );
  };

  return (
    <div className={styles.grid}>
      {products.map((product, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: index * 0.08, duration: 0.5 }}
          className={styles.card}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={product.image}
              alt={product.alt}
              width={400}
              height={320}
              className={styles.image}
            />
          </div>
          <div className={styles.info}>
            <h3 className={styles.name}>{product.name}</h3>
            <button
              className={styles.buyBtn}
              onClick={() => handleBuy(product.name)}
            >
              Buy Now
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductGrid;
