import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductGrid from "../../components/ProductGrid";
import FAQ from "../../components/FAQ";
import styles from "./page.module.css";

const products = [
  { name: "Gold Earrings", image: "/gold_earrings_ruby_v3.png", alt: "Traditional Gold Stud Earrings with Ruby Center - Jaipur Jewellers" },
  { name: "Gold Earrings", image: "/gold_earrings_emerald_v3.jpg", alt: "Antique Gold Jhumka Earrings with Emerald Drops - Jaipur Jewellers" },
];

export const metadata: Metadata = {
  title: "Gold Earrings | Jaipur Jewellers",
  description: "Explore exquisite Gold Earrings collection at Jaipur Jewellers Chandigarh. Traditional gold stud earrings with rubies, and antique gold jhumkas with emerald drops. Shop now on WhatsApp.",
  openGraph: {
    title: "Gold Earrings Collection | Jaipur Jewellers Chandigarh",
    description: "Premium handcrafted traditional Gold Earrings, studs, and Jhumka collections at Jaipur Jewellers. Shop on WhatsApp.",
    images: [{ url: "/gold_earrings_emerald_v3.jpg", width: 1200, height: 630, alt: "Gold Earrings - Jaipur Jewellers" }],
  },
};

export default function GoldEarringsPage() {
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
            <h1 className={styles.title}>Gold Earrings</h1>
            <div className={styles.titleAccent} />
            <p className={styles.subtitle}>Handcrafted beauty for every look</p>
          </div>
        </section>
        <section className={styles.section}>
          <ProductGrid category="Gold Earrings" products={products} />
        </section>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
