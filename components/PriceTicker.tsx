'use client';

import styles from './PriceTicker.module.css';

const PriceTicker = () => {
  const rates = [
    { label: "24K Gold", value: "₹72,450", change: "+₹240" },
    { label: "22K Gold", value: "₹66,410", change: "+₹220" },
    { label: "Silver", value: "₹84,200", change: "-₹150" },
    { label: "Platinum", value: "₹32,150", change: "+₹50" },
  ];

  return (
    <div className={styles.tickerWrapper}>
      <div className={styles.ticker}>
        <div className={styles.tickerGroup}>
          {[...rates, ...rates, ...rates].map((rate, index) => (
            <div key={index} className={styles.item}>
              <span className={styles.label}>{rate.label}:</span>
              <span className={styles.value}>{rate.value}</span>
              <span className={rate.change.startsWith('+') ? styles.up : styles.down}>
                {rate.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceTicker;
