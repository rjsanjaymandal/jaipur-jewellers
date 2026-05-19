import Header from "../components/Header";
import Hero from "../components/Hero";

import CircleCategories from "../components/CircleCategories";
import DiamondShowcase from "../components/DiamondShowcase";
import GoldShowcase from "../components/GoldShowcase";


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
      

      <CraftsmanshipSection />
      <SocialProofSection />
      <Footer />
    </main>
  );
}
