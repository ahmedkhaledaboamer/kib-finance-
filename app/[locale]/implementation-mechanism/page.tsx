'use client';
import React from 'react';
import { HeroSection } from '@/components/screens/implementation-mechanism/HeroSection';
import { IntroSection } from '@/components/screens/implementation-mechanism/IntroSection';
import { ManagementStructure } from '@/components/screens/implementation-mechanism/ManagementStructure';
import { ProcessSteps } from '@/components/screens/implementation-mechanism/ProcessSteps';
import { ExecutionUnits } from '@/components/screens/implementation-mechanism/ExecutionUnits';
import { StatsSection } from '@/components/screens/implementation-mechanism/StatsSection';
import { QualitySection } from '@/components/screens/implementation-mechanism/QualitySection';
import { CTASection } from '@/components/screens/implementation-mechanism/CTASection';
export default function ImplementationMechanismPage() {
  return (
    <div>

      <HeroSection />
      <IntroSection />
      <ManagementStructure />
      <ProcessSteps />
      <ExecutionUnits />
      <StatsSection />
      <QualitySection />
      <CTASection />
    </div>);

}