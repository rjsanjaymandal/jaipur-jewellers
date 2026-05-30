import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductGrid from "../../components/ProductGrid";
import FAQ from "../../components/FAQ";
import styles from "./page.module.css";

const products = [
  { name: "Diamond Earrings", image: "/diamond_earring_floral_v3.jpg", alt: "Traditional Floral Cluster Diamond Stud Earrings - Jaipur Jewellers" },
  { name: "Diamond Earrings", image: "/diamond_earring_clover_v3.png", alt: "Three-Petal Gold Diamond Stud Clover Earrings - Jaipur Jewellers" },
  { name: "Diamond Earrings", image: "/diamond_earring_sapphire_v3.jpg", alt: "Exclusive Sapphire and Diamond Stud Earrings - Jaipur Jewellers" },
  { name: "Diamond Earrings", image: "/diamond_earring_filigree_v3.jpg", alt: "Elegant Gold Filigree Circular Diamond Earrings - Jaipur Jewellers" },
];

export const metadata: Metadata = {
  title: "Diamond Earrings | Jaipur Jewellers",
  description: "Explore the stunning Diamond Earrings collection at Jaipur Jewellers Chandigarh. Traditional floral cluster studs, designer three-petal clovers, and exclusive sapphire studs. Shop now on WhatsApp.",
  openGraph: {
    title: "Diamond Earrings Collection | Jaipur Jewellers Chandigarh",
    description: "Premium handcrafted designer Diamond Earrings, solitaire studs, and drops at Jaipur Jewellers. Shop on WhatsApp.",
    images: [{ url: "/diamond_earring_clover_v3.png", width: 1200, height: 630, alt: "Diamond Earrings - Jaipur Jewellers" }],
  },
};

export default function DiamondEarringsPage() {
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
            <h1 className={styles.title}>Diamond Earrings</h1>
            <div className={styles.titleAccent} />
            <p className={styles.subtitle}>Brilliance that frames your face</p>
          </div>
        </section>
        <section className={styles.section}>
          <ProductGrid category="Diamond Earrings" products={products} />
        </section>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
