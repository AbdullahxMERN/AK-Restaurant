"use client";

import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import ScrollVideoHero from "@/components/ScrollVideoHero";
import MenuSection from "@/components/MenuSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Unique Falling Food Preloader */}
      <Preloader />

      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Fixed Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero — Scroll-Driven Video */}
        <ScrollVideoHero />

        {/* Menu Section */}
        <MenuSection />

        {/* Location Section */}
        <LocationSection />

        {/* Contact & Footer */}
        <Footer />
      </main>
    </>
  );
}
