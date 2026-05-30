import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductGrid from "../../components/ProductGrid";
import FAQ from "../../components/FAQ";
import styles from "./page.module.css";

const products = [
  { name: "Gold Necklace", image: "/gold_necklace_pearl_teardrop_v3.png", alt: "Multi-Strand Pearl Gold Necklace with Diamond-Studded Teardrop Pendant - Jaipur Jewellers" },
  { name: "Gold Necklace", image: "/gold_necklace_ruby_pearl_v3.png", alt: "Kundan Choker Gold Necklace Set with Ruby Beads and Pearls - Jaipur Jewellers" },
  { name: "Gold Necklace", image: "/gold_necklace_sapphire_pearl_v3.png", alt: "Royal Sapphire Choker Gold Necklace Set with Pearls - Jaipur Jewellers" },
  { name: "Gold Necklace", image: "/gold_necklace_emerald_pearl_v3.jpg", alt: "Traditional Flower Motif Kundan Gold Necklace Set with Green Emerald Beads and Pearls - Jaipur Jewellers" },
];

export const metadata: Metadata = {
  title: "Gold Necklaces | Jaipur Jewellers",
  description: "Explore the stunning Gold Necklaces collection at Jaipur Jewellers Chandigarh. Traditional kundan chokers, pearl multi-strands, and bridal necklace sets. Shop now on WhatsApp.",
  openGraph: {
    title: "Gold Necklaces Collection | Jaipur Jewellers Chandigarh",
    description: "Premium handcrafted traditional Gold Necklaces, Kundan chokers, and bridal sets at Jaipur Jewellers. Shop on WhatsApp.",
    images: [{ url: "/gold_necklace_pearl_teardrop_v3.png", width: 1200, height: 630, alt: "Gold Necklaces - Jaipur Jewellers" }],
  },
};

export default function GoldNecklacesPage() {
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
            <h1 className={styles.title}>Gold Necklaces</h1>
            <div className={styles.titleAccent} />
            <p className={styles.subtitle}>Elegance draped in pure gold heritage</p>
          </div>
        </section>
        <section className={styles.section}>
          <ProductGrid category="Gold Necklaces" products={products} />
        </section>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
