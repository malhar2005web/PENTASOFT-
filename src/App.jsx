import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhatPentaSoftDoes from './components/WhatPentaSoftDoes';
import WhoPentaSoftIsBuiltFor from './components/WhoPentaSoftIsBuiltFor';
import TechnicalConsultation from './components/TechnicalConsultation';
import Footer from './components/Footer';
import GlassBubbleCursor from './components/ui/GlassBubbleCursor';

export default function App() {
  return (
    <div className="min-h-screen bg-[#D4F82C] text-[#101010] selection:bg-black selection:text-[#D4F82C]">
      <GlassBubbleCursor />
      <Navbar />
      <main>
        <HeroSection />
        <WhatPentaSoftDoes />
        <WhoPentaSoftIsBuiltFor />
        <TechnicalConsultation />
      </main>
      <Footer />
    </div>
  );
}
