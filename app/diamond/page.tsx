import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductGrid from "../../components/ProductGrid";
import FAQ from "../../components/FAQ";
import styles from "./page.module.css";

const products = [
  { name: "Necklace", image: "/diamond_necklace_new.jpg", alt: "Diamond Necklace - Jaipur Jewellers Chandigarh" },
  { name: "Earrings", image: "/diamond_earring_new.jpg", alt: "Diamond Earrings - Jaipur Jewellers Chandigarh" },
  { name: "Ring", image: "/diamond_ring_new.jpg", alt: "Diamond Ring - Jaipur Jewellers Chandigarh" },
  { name: "Pendant", image: "/diamond_necklace_v2.jpg", alt: "Diamond Pendant - Jaipur Jewellers" },
  { name: "Jhumka", image: "/diamond_earring_v2.jpg", alt: "Diamond Jhumka Earrings - Jaipur Jewellers" },
  { name: "Mangalsutra", image: "/diamond_mangalsutra.jpg", alt: "Diamond Mangalsutra - Jaipur Jewellers" },
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
