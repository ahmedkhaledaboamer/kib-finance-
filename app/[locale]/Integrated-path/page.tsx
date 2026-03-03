import { HeroSection } from '@/components/screens/Integrated-path/HeroSection'
import { PhaseGrid } from '@/components/screens/Integrated-path/PhaseGrid'
import { PrinciplesBadges } from '@/components/screens/Integrated-path/PrinciplesBadges'
import { CTASection } from '@/components/screens/Integrated-path/CTASection'
import { getLocale, getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('page')
  return {
    title: t('integratedPath.title'),
    description: t('integratedPath.description'),
  }
}

export default async function IntegratedPathPage() {
  const locale = await getLocale()
  const isRTL = locale === 'ar'
  return (
    <div>
      <HeroSection />
      <PrinciplesBadges />
      <PhaseGrid isRTL={isRTL} />
      <CTASection isRTL={isRTL} />
    </div>
  )
}
