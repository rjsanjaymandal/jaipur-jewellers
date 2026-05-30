import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductGrid from "../../components/ProductGrid";
import FAQ from "../../components/FAQ";
import styles from "./page.module.css";

const products = [
  { name: "Diamond Necklace Set", image: "/diamond_necklace_pendant_v3.png", alt: "Elegant Double-Layered Diamond Pendant Necklace - Jaipur Jewellers" },
  { name: "Diamond Necklace Set", image: "/diamond_emerald_set_v3.png", alt: "Symmetrical Emerald and Diamond Necklace Set - Jaipur Jewellers" },
  { name: "Diamond Necklace Set", image: "/diamond_teardrop_set_v3.png", alt: "Traditional Tear-Drop Diamond Necklace Set - Jaipur Jewellers" },
  { name: "Diamond Necklace Set", image: "/diamond_ruby_set_v3.png", alt: "Luxury Ruby and Diamond Necklace Set - Jaipur Jewellers" },
];

export const metadata: Metadata = {
  title: "Diamond Necklaces | Jaipur Jewellers",
  description: "Explore the stunning Diamond Necklaces collection at Jaipur Jewellers Chandigarh. Traditional teardrop necklace sets, elegant double-layered diamond pendants, emerald and ruby designer sets. Shop now on WhatsApp.",
  openGraph: {
    title: "Diamond Necklaces Collection | Jaipur Jewellers Chandigarh",
    description: "Premium handcrafted designer Diamond Necklaces, emerald and ruby bridal sets at Jaipur Jewellers. Shop on WhatsApp.",
    images: [{ url: "/diamond_necklace_pendant_v3.png", width: 1200, height: 630, alt: "Diamond Necklaces - Jaipur Jewellers" }],
  },
};

export default function DiamondNecklacesPage() {
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
            <h1 className={styles.title}>Diamond Necklaces</h1>
            <div className={styles.titleAccent} />
            <p className={styles.subtitle}>Timeless brilliance around your neck</p>
          </div>
        </section>
        <section className={styles.section}>
          <ProductGrid category="Diamond Necklaces" products={products} />
        </section>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
