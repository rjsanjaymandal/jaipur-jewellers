import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductGrid from "../../components/ProductGrid";
import FAQ from "../../components/FAQ";
import styles from "./page.module.css";

const products = [
  { name: "Necklace", image: "/diamond_necklace_new.jpg", alt: "Italian Necklace - Jaipur Jewellers Chandigarh" },
  { name: "Earrings", image: "/diamond_earring_new.jpg", alt: "Italian Earrings - Jaipur Jewellers Chandigarh" },
  { name: "Ring", image: "/diamond_ring_new.jpg", alt: "Italian Ring - Jaipur Jewellers Chandigarh" },
  { name: "Pendant", image: "/gold_necklace_new.jpg", alt: "Italian Pendant - Jaipur Jewellers" },
  { name: "Jhumka", image: "/gold_earring_new.jpg", alt: "Italian Jhumka Earrings - Jaipur Jewellers" },
  { name: "Mangalsutra", image: "/gold_ring_new.jpg", alt: "Italian Mangalsutra - Jaipur Jewellers" },
];

export const metadata: Metadata = {
  title: "Italian Jewellery",
  description: "Explore exquisite Italian Jewellery collection at Jaipur Jewellers Chandigarh. Contemporary Italian design necklaces, earrings, rings & bracelets. Shop now on WhatsApp.",
  openGraph: {
    title: "Italian Jewellery Collection | Jaipur Jewellers Chandigarh",
    description: "Explore Italian design Jewellery at Jaipur Jewellers Chandigarh. Shop on WhatsApp.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Italian Jewellery - Jaipur Jewellers" }],
  },
};

export default function ItalianPage() {
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
            <h1 className={styles.title}>Italian Jewellery</h1>
            <div className={styles.titleAccent} />
            <p className={styles.subtitle}>Contemporary elegance with European flair</p>
          </div>
        </section>
        <section className={styles.section}>
          <ProductGrid category="Italian" products={products} />
        </section>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
