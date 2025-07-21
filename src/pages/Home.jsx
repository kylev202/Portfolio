import React from "react";
import HeroSection from "../components/HeroSection";
import PurposeSection from "../components/PurposeSection";
import ContentGrid from "../components/ContentGrid";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8f7f4] via-[#f3f1ed] to-[#e9e6df] text-[#4b4637] font-serif">
      <HeroSection />
      <PurposeSection />
      <ContentGrid />
      <ContactSection />
    </main>
  );
}