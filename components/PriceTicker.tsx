'use client';

import { useState, useEffect } from 'react';
import styles from './PriceTicker.module.css';

interface Rate {
  value: string;
  change: string;
  changePercent: string;
  up: boolean;
}

interface Rates {
  gold24: Rate;
  gold22: Rate;
  silver: Rate;
  platinum: Rate;
}

const defaultRates: Rates = {
  gold24: { value: '₹72,450', change: '+₹240', changePercent: '+0.33%', up: true },
  gold22: { value: '₹66,410', change: '+₹220', changePercent: '+0.33%', up: true },
  silver: { value: '₹84,200', change: '-₹150', changePercent: '-0.18%', up: false },
  platinum: { value: '₹32,150', change: '+₹50', changePercent: '+0.16%', up: true },
};

const tickerRates = [
  { label: '24K Gold', key: 'gold24' as const },
  { label: '22K Gold', key: 'gold22' as const },
  { label: 'Silver', key: 'silver' as const },
  { label: 'Platinum', key: 'platinum' as const },
];

const PriceTicker = () => {
  const [rates, setRates] = useState<Rates>(defaultRates);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch('/api/prices');
        if (res.ok) {
          const data = await res.json();
          setRates(data);
        }
      } catch {
        // keep current rates on error
      }
    };

    fetchRates();
    const interval = setInterval(fetchRates, 120000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.tickerWrapper} suppressHydrationWarning>
      <div className={styles.ticker}>
        <div className={styles.tickerGroup}>
          {[...tickerRates, ...tickerRates, ...tickerRates].map((item, index) => {
            const rate = rates[item.key];
            return (
              <div key={index} className={styles.item}>
                <span className={styles.label}>{item.label}:</span>
                <span className={styles.value}>{rate.value}</span>
                <span className={rate.up ? styles.up : styles.down}>
                  {rate.change}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PriceTicker;
