import { HeroSection } from '@/components/screens/Integrated-path/HeroSection'
import { PhaseGrid } from '@/components/screens/Integrated-path/PhaseGrid'
import { PrinciplesBadges } from '@/components/screens/Integrated-path/PrinciplesBadges'
import { CTASection } from '@/components/screens/Integrated-path/CTASection'
export default function IntegratedPathPage() {
  return (
    <div>
      <HeroSection />
      <PrinciplesBadges />
      <PhaseGrid />
      <CTASection />
    </div>
  )
}
