import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PriceTicker from "@/components/PriceTicker";
import CollectionsGrid from "@/components/CollectionsGrid";
import GenderNavigation from "@/components/GenderNavigation";
import CraftsmanshipSection from "@/components/CraftsmanshipSection";
import SocialProofSection from "@/components/SocialProofSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <PriceTicker />
      <Hero />
      <GenderNavigation />
      <CollectionsGrid />
      <CraftsmanshipSection />
      <SocialProofSection />
      <Footer />
    </main>
  );
}
