'use client';
import React, { useState } from 'react';
import { HeroSection } from '@/components/screens/implementation-mechanism/HeroSection';
import { IntroSection } from '@/components/screens/implementation-mechanism/IntroSection';
import { ManagementStructure } from '@/components/screens/implementation-mechanism/ManagementStructure';
import { ProcessSteps } from '@/components/screens/implementation-mechanism/ProcessSteps';
import { ExecutionUnits } from '@/components/screens/implementation-mechanism/ExecutionUnits';
import { StatsSection } from '@/components/screens/implementation-mechanism/StatsSection';
import { QualitySection } from '@/components/screens/implementation-mechanism/QualitySection';
import { CTASection } from '@/components/screens/implementation-mechanism/CTASection';
import { Footer } from '@/components/screens/implementation-mechanism/Footer';
import { FormModal } from '@/components/screens/implementation-mechanism/FormModal';
export default function ImplementationMechanismPage() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <div
      className="w-full min-h-screen"
      dir="rtl"
      style={{
        fontFamily: '"Cairo", sans-serif'
      }}>

      <HeroSection onOpenForm={() => setFormOpen(true)} />
      <IntroSection />
      <ManagementStructure />
      <ProcessSteps />
      <ExecutionUnits />
      <StatsSection />
      <QualitySection />
      <CTASection onOpenForm={() => setFormOpen(true)} />
      <Footer />
      {formOpen && <FormModal onClose={() => setFormOpen(false)} />}
    </div>);

}