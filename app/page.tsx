import Header from "../components/Header";
import Hero from "../components/Hero";
import PriceTicker from "../components/PriceTicker";
import CircleCategories from "../components/CircleCategories";
import DiamondShowcase from "../components/DiamondShowcase";
import SolitaireShowcase from "../components/SolitaireShowcase";
import CollectionsGrid from "../components/CollectionsGrid";
import CraftsmanshipSection from "../components/CraftsmanshipSection";
import SocialProofSection from "../components/SocialProofSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <PriceTicker />
      <Hero />
      <CircleCategories />
      <DiamondShowcase />
      <SolitaireShowcase />
      <CollectionsGrid />
      <CraftsmanshipSection />
      <SocialProofSection />
      <Footer />
    </main>
  );
}
