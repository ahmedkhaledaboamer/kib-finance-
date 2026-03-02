import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PrinciplesSection } from './components/PrinciplesSection';
import { TimelinePath } from './components/TimelinePath';
import { BenefitsSection } from './components/BenefitsSection';
import { StatsSection } from './components/StatsSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { PhaseModal } from './components/PhaseModal';
import { PhaseData } from './data/phases';
export function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedPhase, setSelectedPhase] = useState<PhaseData | null>(null);
  return (
    <div
      className="min-h-screen bg-white font-ibm selection:bg-kep-green selection:text-white"
      dir="rtl">

      <Navbar onOpenContact={() => setIsContactModalOpen(true)} />

      <main>
        <HeroSection onOpenContact={() => setIsContactModalOpen(true)} />
        <PrinciplesSection />
        <TimelinePath onOpenPhase={(phase) => setSelectedPhase(phase)} />
        <BenefitsSection />
        <StatsSection />
        <CTASection onOpenContact={() => setIsContactModalOpen(true)} />
      </main>

      <Footer />

      {/* Modals */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)} />


      <PhaseModal
        phase={selectedPhase}
        isOpen={!!selectedPhase}
        onClose={() => setSelectedPhase(null)} />

    </div>);

}