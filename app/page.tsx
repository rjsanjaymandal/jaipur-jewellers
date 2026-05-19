import Header from "../components/Header";
import Hero from "../components/Hero";

import CircleCategories from "../components/CircleCategories";
import DiamondShowcase from "../components/DiamondShowcase";
import GoldShowcase from "../components/GoldShowcase";

import CollectionsGrid from "../components/CollectionsGrid";
import CraftsmanshipSection from "../components/CraftsmanshipSection";
import SocialProofSection from "../components/SocialProofSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      
      <Hero />
      <CircleCategories />
      <DiamondShowcase />
      <GoldShowcase />
      
      <CollectionsGrid />
      <CraftsmanshipSection />
      <SocialProofSection />
      <Footer />
    </main>
  );
}
