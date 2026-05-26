import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductGrid from "../../components/ProductGrid";
import FAQ from "../../components/FAQ";
import styles from "./page.module.css";

const products = [
  { name: "Necklace", image: "/diamond_necklace_new.jpg", alt: "Polki Necklace - Jaipur Jewellers Chandigarh" },
  { name: "Earrings", image: "/diamond_earring_new.jpg", alt: "Polki Earrings - Jaipur Jewellers Chandigarh" },
  { name: "Ring", image: "/diamond_ring_new.jpg", alt: "Polki Ring - Jaipur Jewellers Chandigarh" },
  { name: "Pendant", image: "/gold_necklace_new.jpg", alt: "Polki Pendant - Jaipur Jewellers" },
  { name: "Jhumka", image: "/gold_earring_new.jpg", alt: "Polki Jhumka Earrings - Jaipur Jewellers" },
  { name: "Mangalsutra", image: "/gold_ring_new.jpg", alt: "Polki Mangalsutra - Jaipur Jewellers" },
];

export const metadata: Metadata = {
  title: "Polki Jewellery",
  description: "Explore exquisite Polki Jewellery collection at Jaipur Jewellers Chandigarh. Traditional Polki necklaces, earrings, rings & bridal sets. Shop now on WhatsApp.",
  openGraph: {
    title: "Polki Jewellery Collection | Jaipur Jewellers Chandigarh",
    description: "Explore traditional Polki Jewellery at Jaipur Jewellers Chandigarh. Shop on WhatsApp.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Polki Jewellery - Jaipur Jewellers" }],
  },
};

export default function PolkiPage() {
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
            <h1 className={styles.title}>Polki Jewellery</h1>
            <div className={styles.titleAccent} />
            <p className={styles.subtitle}>Uncut diamond beauty for royal occasions</p>
          </div>
        </section>
        <section className={styles.section}>
          <ProductGrid category="Polki" products={products} />
        </section>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
