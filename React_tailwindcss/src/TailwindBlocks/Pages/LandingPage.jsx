import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import ContentSection from "../Components/ContentSection";
import GallerySection from "../Components/GallerySection";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ContentSection />
      <GallerySection />
    </div>
  );
};

export default LandingPage;
