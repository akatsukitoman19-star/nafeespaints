import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { BrandPartners } from './components/BrandPartners.tsx';
import { ProductCategories } from './components/ProductCategories.tsx';
import { ProjectGallery } from './components/ProjectGallery.tsx';
import { PaintingServices } from './components/PaintingServices.tsx';
import { ColourInspiration } from './components/ColourInspiration.tsx';
import { MeetTheOwner } from './components/MeetTheOwner.tsx';
import { StoreVisit } from './components/StoreVisit.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { MobileQuickBar } from './components/MobileQuickBar.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F4F4F2] text-[#17191B] flex flex-col font-sans selection:bg-[#303438] selection:text-white w-full max-w-full overflow-x-hidden">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Featured Brands (Asian Paints, Nerolac, Birla Opus) */}
        <BrandPartners />

        {/* 3. Product Categories */}
        <ProductCategories />

        {/* 4. Painting Projects Gallery (Asymmetric & Lightbox) */}
        <ProjectGallery />

        {/* 5. Painting Services */}
        <PaintingServices />

        {/* 6. Colour Inspiration Studio */}
        <ColourInspiration />

        {/* 7. Meet The Owner */}
        <MeetTheOwner />

        {/* 8. Visit Our Store */}
        <StoreVisit />

        {/* 9. About Nafees Paints */}
        <AboutSection />

        {/* 10. Contact & Enquiries */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar (Call, WhatsApp, Directions) */}
      <MobileQuickBar />
    </div>
  );
}
