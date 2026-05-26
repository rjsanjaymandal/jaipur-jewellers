import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductGrid from "../../components/ProductGrid";
import FAQ from "../../components/FAQ";
import styles from "./page.module.css";

const products = [
  { name: "Necklace", image: "/diamond_necklace_new.jpg", alt: "Kundan Necklace - Jaipur Jewellers Chandigarh" },
  { name: "Earrings", image: "/diamond_earring_new.jpg", alt: "Kundan Earrings - Jaipur Jewellers Chandigarh" },
  { name: "Ring", image: "/diamond_ring_new.jpg", alt: "Kundan Ring - Jaipur Jewellers Chandigarh" },
  { name: "Pendant", image: "/gold_necklace_new.jpg", alt: "Kundan Pendant - Jaipur Jewellers" },
  { name: "Jhumka", image: "/gold_earring_new.jpg", alt: "Kundan Jhumka Earrings - Jaipur Jewellers" },
  { name: "Mangalsutra", image: "/gold_ring_new.jpg", alt: "Kundan Mangalsutra - Jaipur Jewellers" },
];

export const metadata: Metadata = {
  title: "Kundan Jewellery",
  description: "Explore exquisite Kundan Jewellery collection at Jaipur Jewellers Chandigarh. Traditional Kundan necklaces, earrings, rings & bridal sets. Shop now on WhatsApp.",
  openGraph: {
    title: "Kundan Jewellery Collection | Jaipur Jewellers Chandigarh",
    description: "Explore traditional Kundan Jewellery at Jaipur Jewellers Chandigarh. Shop on WhatsApp.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Kundan Jewellery - Jaipur Jewellers" }],
  },
};

export default function KundanPage() {
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
            <h1 className={styles.title}>Kundan Jewellery</h1>
            <div className={styles.titleAccent} />
            <p className={styles.subtitle}>Royal elegance for timeless celebrations</p>
          </div>
        </section>
        <section className={styles.section}>
          <ProductGrid category="Kundan" products={products} />
        </section>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
