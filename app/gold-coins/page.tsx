import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductGrid from "../../components/ProductGrid";
import FAQ from "../../components/FAQ";
import styles from "./page.module.css";

const products = [
  { name: "Gold Coin", image: "/gold_coin_augmont_v3.png", alt: "Augmont 1gm Fine Gold Coin - Jaipur Jewellers" },
  { name: "Gold Coin", image: "/gold_coin_kundan_v3.png", alt: "Kundan 2g and 0.50g Fine Gold Coin 999.9 - Jaipur Jewellers" },
  { name: "Gold Coin", image: "/gold_coin_lakshmi_v3.png", alt: "MMTC-PAMP Lakshmi 8g Purest Gold Coin - Jaipur Jewellers" },
];

export const metadata: Metadata = {
  title: "Gold Coins | Jaipur Jewellers",
  description: "Buy premium 999.9 purest gold coins at Jaipur Jewellers Chandigarh. Discover Augmont, Kundan, and MMTC-PAMP gold coins. Perfect for investment and gifting.",
  openGraph: {
    title: "Gold Coins Collection | Jaipur Jewellers Chandigarh",
    description: "Premium 999.9 certified Gold Coins from top refiners including MMTC-PAMP, Kundan, and Augmont at Jaipur Jewellers. Shop on WhatsApp.",
    images: [{ url: "/gold_coin.png", width: 1200, height: 630, alt: "Gold Coins - Jaipur Jewellers" }],
  },
};

export default function GoldCoinsPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.banner}>
          <div className={styles.bannerOverlay} />
          <div className={styles.bannerContent}>
            <div className={styles.ornament}>
              <span className={styles.ornamentLine} />
              <span className={styles.ornamentDiamond} />
              <span className={styles.ornamentLine} />
            </div>
            <h1 className={styles.title}>Gold Coins</h1>
            <div className={styles.titleAccent} />
            <p className={styles.subtitle}>Pure wealth, trusted legacy</p>
          </div>
        </section>
        <section className={styles.section}>
          <ProductGrid category="Gold Coins" products={products} />
        </section>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
