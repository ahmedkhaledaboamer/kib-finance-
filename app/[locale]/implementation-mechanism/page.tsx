
import { HeroSection } from '@/components/screens/implementation-mechanism/HeroSection';
import { IntroSection } from '@/components/screens/implementation-mechanism/IntroSection';
import { ManagementStructure } from '@/components/screens/implementation-mechanism/ManagementStructure';
import { ProcessSteps } from '@/components/screens/implementation-mechanism/ProcessSteps';
import { ExecutionUnits } from '@/components/screens/implementation-mechanism/ExecutionUnits';
import { StatsSection } from '@/components/screens/implementation-mechanism/StatsSection';
import { QualitySection } from '@/components/screens/implementation-mechanism/QualitySection';
import { CTASection } from '@/components/screens/implementation-mechanism/CTASection';
import { getLocale, getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'implementationMechanism' });
  return {
    title: t('pageTitle'),
    description: t('pageDescription')
  };
}

export default async function ImplementationMechanismPage() {
  const locale = await getLocale();
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