import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import ContentSection from "../Components/ContentSection";
import GallerySection from "../Components/GallerySection";
import HoverSection from "../Components/HoverSection";
import FeatureSection from "../Components/FeatureSection";
import PriceSection from "../Components/PriceSection";
import TeamSection from "../Components/TeamSection";
import TestSection from "../Components/TestSection";
import ContactSection from "../Components/ContactSection";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ContentSection />
      <GallerySection />
      <HoverSection />
      <FeatureSection />
      <PriceSection />
      <TeamSection />
      <TestSection />
      <ContactSection />
    </div>
  );
};

export default LandingPage;
