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
  { name: "Diamond Ring", image: "/diamond_ring_floral_v3.png", alt: "Brilliant Floral Halo Diamond Ring - Jaipur Jewellers" },
  { name: "Diamond Ring", image: "/diamond_ring_filigree_v3.png", alt: "Exclusive Handcrafted Filigree Diamond Ring - Jaipur Jewellers" },
  { name: "Diamond Ring", image: "/diamond_ring_rhombus_v3.png", alt: "Modern Geometric Rhombus Diamond Ring - Jaipur Jewellers" },
  { name: "Diamond Ring", image: "/diamond_ring_cluster_v3.png", alt: "Premium Intersecting Cluster Diamond Ring - Jaipur Jewellers" },
  { name: "Diamond Earrings", image: "/diamond_earring_floral_v3.jpg", alt: "Traditional Floral Cluster Diamond Stud Earrings - Jaipur Jewellers" },
  { name: "Diamond Earrings", image: "/diamond_earring_clover_v3.png", alt: "Three-Petal Gold Diamond Stud Clover Earrings - Jaipur Jewellers" },
  { name: "Diamond Earrings", image: "/diamond_earring_sapphire_v3.jpg", alt: "Exclusive Sapphire and Diamond Stud Earrings - Jaipur Jewellers" },
  { name: "Diamond Earrings", image: "/diamond_earring_filigree_v3.jpg", alt: "Elegant Gold Filigree Circular Diamond Earrings - Jaipur Jewellers" },
];

export const metadata: Metadata = {
  title: "Diamond Jewellery",
  description: "Explore premium Diamond Jewellery collection at Jaipur Jewellers Chandigarh. Certified diamonds, exquisite designs including rings, earrings, necklaces, mangalsutras. Shop now on WhatsApp.",
  openGraph: {
    title: "Diamond Jewellery Collection | Jaipur Jewellers Chandigarh",
    description: "Explore premium Diamond Jewellery at Jaipur Jewellers Chandigarh. Certified diamonds, exquisite designs. Shop on WhatsApp.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Diamond Jewellery - Jaipur Jewellers" }],
  },
};

export default function DiamondPage() {
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
            <h1 className={styles.title}>Diamond Jewellery</h1>
            <div className={styles.titleAccent} />
            <p className={styles.subtitle}>Timeless brilliance captured in every cut</p>
          </div>
        </section>
        <section className={styles.section}>
          <ProductGrid category="Diamond" products={products} />
        </section>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
