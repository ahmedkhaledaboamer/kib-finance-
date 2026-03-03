'use client';
import { HeroSection } from '@/components/screens/implementation-mechanism/HeroSection';
import { IntroSection } from '@/components/screens/implementation-mechanism/IntroSection';
import { ManagementStructure } from '@/components/screens/implementation-mechanism/ManagementStructure';
import { ProcessSteps } from '@/components/screens/implementation-mechanism/ProcessSteps';
import { ExecutionUnits } from '@/components/screens/implementation-mechanism/ExecutionUnits';
import { StatsSection } from '@/components/screens/implementation-mechanism/StatsSection';
import { QualitySection } from '@/components/screens/implementation-mechanism/QualitySection';
import { CTASection } from '@/components/screens/implementation-mechanism/CTASection';
import { useLocale } from 'next-intl';

export default function ImplementationMechanismPage() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <div className="overflow-x-hidden">
      <HeroSection isRTL={isRTL} />
      <IntroSection isRTL={isRTL} />
      <ManagementStructure isRTL={isRTL} />
      <ExecutionUnits isRTL={isRTL} />
      <ProcessSteps isRTL={isRTL} />
      <StatsSection isRTL={isRTL} />
      <QualitySection isRTL={isRTL} />
      <CTASection isRTL={isRTL} />
    </div>
  );
}