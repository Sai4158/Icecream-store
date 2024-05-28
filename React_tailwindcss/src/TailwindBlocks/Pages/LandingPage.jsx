import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import ContentSection from "../Components/ContentSection";
import GallerySection from "../Components/GallerySection";
import HoverSection from "../Components/HoverSection";
import FeatureSection from "../Components/FeatureSection";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ContentSection />
      <GallerySection />
      <HoverSection />
      <FeatureSection />
    </div>
  );
};

export default LandingPage;
