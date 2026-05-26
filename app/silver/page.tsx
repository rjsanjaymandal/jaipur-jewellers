import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductGrid from "../../components/ProductGrid";
import FAQ from "../../components/FAQ";
import styles from "./page.module.css";

const products = [
  { name: "Necklace", image: "/gold_necklace_new.jpg", alt: "Silver Necklace - Jaipur Jewellers Chandigarh" },
  { name: "Earrings", image: "/gold_earring_new.jpg", alt: "Silver Earrings - Jaipur Jewellers Chandigarh" },
  { name: "Ring", image: "/gold_ring_new.jpg", alt: "Silver Ring - Jaipur Jewellers Chandigarh" },
  { name: "Pendant", image: "/diamond_necklace_new.jpg", alt: "Silver Pendant - Jaipur Jewellers" },
  { name: "Jhumka", image: "/diamond_earring_new.jpg", alt: "Silver Jhumka Earrings - Jaipur Jewellers" },
  { name: "Bangle", image: "/diamond_ring_new.jpg", alt: "Silver Bangle - Jaipur Jewellers" },
];

export const metadata: Metadata = {
  title: "Silver Jewellery",
  description: "Explore elegant Silver Jewellery collection at Jaipur Jewellers Chandigarh. Silver necklaces, earrings, rings, bangles & coins. Shop now on WhatsApp.",
  openGraph: {
    title: "Silver Jewellery Collection | Jaipur Jewellers Chandigarh",
    description: "Explore Silver Jewellery at Jaipur Jewellers Chandigarh. Shop on WhatsApp.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Silver Jewellery - Jaipur Jewellers" }],
  },
};

export default function SilverPage() {
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
            <h1 className={styles.title}>Silver Jewellery</h1>
            <div className={styles.titleAccent} />
            <p className={styles.subtitle}>Pure elegance for everyday grace</p>
          </div>
        </section>
        <section className={styles.section}>
          <ProductGrid category="Silver" products={products} />
        </section>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
