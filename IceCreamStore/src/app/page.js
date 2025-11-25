import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import AboutSection from "@/components/AboutSection";
import IngredientsSection from "@/components/IngredientsSection";
import ScoopSimulator from "@/components/ScoopSimulator";
import IngredientGlobe from "@/components/IngredientGlobe";
import FlavorMatcher from "@/components/FlavorMatcher";
import SecretMenu from "@/components/SecretMenu";
import GiftCardCreator from "@/components/GiftCardCreator";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-black selection:bg-pink-200">
      <Navbar />
      <Hero />
      <ScoopSimulator />
      <ProductGrid />
      <FlavorMatcher />
      <IngredientGlobe />
      <IngredientsSection />
      <GiftCardCreator />

      <AboutSection />
      <SecretMenu />
      <Footer />
    </main>
  );
}
