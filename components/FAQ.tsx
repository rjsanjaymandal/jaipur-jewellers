'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FAQ.module.css';

const faqs = [
  {
    q: 'Where is Jaipur Jewellers located in Chandigarh?',
    a: 'We are located at SCO 105, Inner Market, Sector 35C, Chandigarh - 160035. We have been serving Chandigarh and Tricity since 1996.',
  },
  {
    q: 'What types of jewellery do you offer?',
    a: 'We offer Diamond jewellery, 22K hallmarked Gold jewellery, Kundan, Jadau (Juda), Polki, and Italian jewellery collections. This includes necklaces, earrings, rings, bangles, mangalsutras, and complete bridal sets.',
  },
  {
    q: 'Do you offer custom jewellery design?',
    a: 'Yes, we provide custom jewellery design services. Simply reach out to us on WhatsApp at +91 90561 49264 with your vision and we will create a bespoke piece tailored to your preferences.',
  },
  {
    q: 'What are your store timings?',
    a: 'We are open from 10:00 AM to 8:00 PM, all 7 days of the week including Sundays.',
  },
  {
    q: 'Is your gold jewellery hallmarked?',
    a: 'Yes, all our gold jewellery is BIS hallmarked and certified, ensuring purity and quality you can trust.',
  },
  {
    q: 'Do you have wedding jewellery collections?',
    a: 'Yes, we specialize in bridal and wedding jewellery including engagement rings, wedding necklaces, earrings, mangalsutras, and complete bridal sets in Diamond, Gold, Kundan, and Jadau styles.',
  },
  {
    q: 'How can I contact Jaipur Jewellers?',
    a: 'You can call us at +91 90561 49264, email info@jaipurjewellers.in, or visit our store at SCO 105, Sector 35C, Chandigarh. We also respond quickly on WhatsApp.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section} aria-labelledby="faq-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.ornament}>
            <span className={styles.ornamentLine} />
            <span className={styles.ornamentDiamond} />
            <span className={styles.ornamentLine} />
          </div>
          <h2 id="faq-heading" className={styles.title}>Frequently Asked Questions</h2>
          <div className={styles.titleAccent} />
        </div>

        <div className={styles.list}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.item}>
              <button
                className={styles.question}
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.q}</span>
                <span className={`${styles.icon} ${openIndex === index ? styles.iconOpen : ''}`}>
                  +
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={styles.answerWrapper}
                  >
                    <p className={styles.answer}>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <p className={styles.footerText}>
          Still have questions?{' '}
          <a
            href="https://wa.me/919056149264?text=Hi%2C%20I%20have%20a%20question%20about%20your%20jewellery"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat with us on WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
};

export default FAQ;
