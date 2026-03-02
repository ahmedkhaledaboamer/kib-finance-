import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { IntroSection } from '../components/IntroSection';
import { ManagementStructure } from '../components/ManagementStructure';
import { ProcessSteps } from '../components/ProcessSteps';
import { ExecutionUnits } from '../components/ExecutionUnits';
import { StatsSection } from '../components/StatsSection';
import { QualitySection } from '../components/QualitySection';
import { CTASection } from '../components/CTASection';
import { Footer } from '../components/Footer';
import { FormModal } from '../components/FormModal';
export function ExecutionPage() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <div
      className="w-full min-h-screen"
      dir="rtl"
      style={{
        fontFamily: '"Cairo", sans-serif'
      }}>

      <Navbar onOpenForm={() => setFormOpen(true)} />
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