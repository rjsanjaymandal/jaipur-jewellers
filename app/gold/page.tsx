import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductGrid from "../../components/ProductGrid";
import FAQ from "../../components/FAQ";
import styles from "./page.module.css";

const products = [
  { name: "Necklace", image: "/gold_necklace_new.jpg", alt: "Gold Necklace - Jaipur Jewellers Chandigarh" },
  { name: "Earrings", image: "/gold_earring_new.jpg", alt: "Gold Earrings - Jaipur Jewellers Chandigarh" },
  { name: "Ring", image: "/gold_ring_new.jpg", alt: "Gold Ring - Jaipur Jewellers Chandigarh" },
  { name: "Pendant", image: "/gold_necklace_v2.jpg", alt: "Gold Pendant - Jaipur Jewellers" },
  { name: "Jhumka", image: "/gold_earring_v2.jpg", alt: "Gold Jhumka Earrings - Jaipur Jewellers" },
  { name: "Bangle", image: "/gold_bangle.png", alt: "Gold Bangles - Jaipur Jewellers" },
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
