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
];

export const metadata: Metadata = {
  title: "Gold Rings | Jaipur Jewellers",
  description: "Explore the stunning Gold Rings collection at Jaipur Jewellers Chandigarh. Traditional Navaratna rings, antique floral ruby, and emerald cocktail rings. Shop now on WhatsApp.",
  openGraph: {
    title: "Gold Rings Collection | Jaipur Jewellers Chandigarh",
    description: "Premium handcrafted traditional Gold Rings, Navaratna rings, and cocktail rings at Jaipur Jewellers. Shop on WhatsApp.",
    images: [{ url: "/gold_ring_navaratna_v3.png", width: 1200, height: 630, alt: "Gold Rings - Jaipur Jewellers" }],
  },
};

export default function GoldRingsPage() {
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
            <h1 className={styles.title}>Gold Rings</h1>
            <div className={styles.titleAccent} />
            <p className={styles.subtitle}>Timeless heritage around your finger</p>
          </div>
        </section>
        <section className={styles.section}>
          <ProductGrid category="Gold Rings" products={products} />
        </section>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
