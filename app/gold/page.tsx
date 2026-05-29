import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductGrid from "../../components/ProductGrid";
import FAQ from "../../components/FAQ";
import styles from "./page.module.css";

const products = [
  { name: "Traditional Gold Ring", image: "/gold_ring_navaratna_v3.png", alt: "Traditional Navaratna Nine-Gem Gold Ring - Jaipur Jewellers" },
  { name: "Traditional Gold Ring", image: "/gold_ring_ruby_v3.png", alt: "Antique Gold Floral Ruby Cocktail Ring - Jaipur Jewellers" },
  { name: "Traditional Gold Ring", image: "/gold_ring_emerald_v3.jpg", alt: "Intricate Gold Floral Emerald Cocktail Ring - Jaipur Jewellers" },
  { name: "Gold Coin", image: "/gold_coin_augmont_v3.png", alt: "Augmont 1gm 24K Fine Gold Coin - Jaipur Jewellers" },
  { name: "Gold Coin", image: "/gold_coin_kundan_v3.png", alt: "Kundan 2g and 0.50g Fine Gold Coin 999.9 - Jaipur Jewellers" },
  { name: "Gold Coin", image: "/gold_coin_lakshmi_v3.png", alt: "MMTC-PAMP Lakshmi 8g 24K Purest Gold Coin - Jaipur Jewellers" },
  { name: "Gold Earrings", image: "/gold_earrings_ruby_v3.png", alt: "Traditional Gold Stud Earrings with Ruby Center - Jaipur Jewellers" },
  { name: "Gold Earrings", image: "/gold_earrings_emerald_v3.jpg", alt: "Antique Gold Jhumka Earrings with Emerald Drops - Jaipur Jewellers" },
];

export const metadata: Metadata = {
  title: "Gold Jewellery",
  description: "Explore premium 22K hallmarked Gold Jewellery collection at Jaipur Jewellers Chandigarh. Necklaces, earrings, rings, bangles & bridal sets. Shop now on WhatsApp.",
  openGraph: {
    title: "Gold Jewellery Collection | Jaipur Jewellers Chandigarh",
    description: "Explore 22K hallmarked Gold Jewellery at Jaipur Jewellers Chandigarh. Necklaces, earrings, rings & more. Shop on WhatsApp.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Gold Jewellery - Jaipur Jewellers" }],
  },
};

export default function GoldPage() {
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
            <h1 className={styles.title}>Gold Jewellery</h1>
            <div className={styles.titleAccent} />
            <p className={styles.subtitle}>Pure luxury crafted with heritage</p>
          </div>
        </section>
        <section className={styles.section}>
          <ProductGrid category="Gold" products={products} />
        </section>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
