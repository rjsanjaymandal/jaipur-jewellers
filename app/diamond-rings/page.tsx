import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductGrid from "../../components/ProductGrid";
import FAQ from "../../components/FAQ";
import styles from "./page.module.css";

const products = [
  { name: "Diamond Ring", image: "/diamond_ring_floral_v3.png", alt: "Brilliant Floral Halo Diamond Ring - Jaipur Jewellers" },
  { name: "Diamond Ring", image: "/diamond_ring_filigree_v3.png", alt: "Exclusive Handcrafted Filigree Diamond Ring - Jaipur Jewellers" },
  { name: "Diamond Ring", image: "/diamond_ring_rhombus_v3.png", alt: "Modern Geometric Rhombus Diamond Ring - Jaipur Jewellers" },
  { name: "Diamond Ring", image: "/diamond_ring_cluster_v3.png", alt: "Premium Intersecting Cluster Diamond Ring - Jaipur Jewellers" },
];

export const metadata: Metadata = {
  title: "Diamond Rings | Jaipur Jewellers",
  description: "Explore the stunning Diamond Rings collection at Jaipur Jewellers Chandigarh. Brilliant floral halo rings, geometric rhombus, filigree, and premium cluster diamond engagement rings. Shop now on WhatsApp.",
  openGraph: {
    title: "Diamond Rings Collection | Jaipur Jewellers Chandigarh",
    description: "Premium handcrafted designer Diamond Rings, solitaire engagement and wedding rings at Jaipur Jewellers. Shop on WhatsApp.",
    images: [{ url: "/diamond_ring_cluster_v3.png", width: 1200, height: 630, alt: "Diamond Rings - Jaipur Jewellers" }],
  },
};

export default function DiamondRingsPage() {
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
            <h1 className={styles.title}>Diamond Rings</h1>
            <div className={styles.titleAccent} />
            <p className={styles.subtitle}>A symbol of eternal sparkle and love</p>
          </div>
        </section>
        <section className={styles.section}>
          <ProductGrid category="Diamond Rings" products={products} />
        </section>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
