'use client';
import React, { useState } from 'react';
import { HeroSection } from '@/components/screens/Integrated-path/HeroSection';
import { PrinciplesSection } from '@/components/screens/Integrated-path/PrinciplesSection';
import { TimelinePath } from '@/components/screens/Integrated-path/TimelinePath';
import { BenefitsSection } from '@/components/screens/Integrated-path/BenefitsSection';
import { StatsSection } from '@/components/screens/Integrated-path/StatsSection';
import { CTASection } from '@/components/screens/Integrated-path/CTASection';
import { Footer } from '@/components/screens/Integrated-path/Footer';
import { ContactModal } from '@/components/screens/Integrated-path/ContactModal';
import { PhaseModal } from '@/components/screens/Integrated-path/PhaseModal';
import { PhaseData } from '@/components/screens/Integrated-path/phases';
export default function IntegratedPathPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedPhase, setSelectedPhase] = useState<PhaseData | null>(null);
  return (
    <div
      className="min-h-screen bg-white font-ibm selection:bg-kep-green selection:text-white"
      dir="rtl">


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