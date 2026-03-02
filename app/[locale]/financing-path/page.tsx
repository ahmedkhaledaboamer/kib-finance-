'use client';
import { Hero } from '@/components/screens/financing-path/Hero';
import { Stats } from '@/components/screens/financing-path/Stats';
import { Timeline } from '@/components/screens/financing-path/Timeline';
import { WhoItsFor } from '@/components/screens/financing-path/WhoItsFor';
import { Benefits } from '@/components/screens/financing-path/Benefits';
import { Comparison } from '@/components/screens/financing-path/Comparison';
import { Testimonials } from '@/components/screens/financing-path/Testimonials';
import { Partners } from '@/components/screens/financing-path/Partners';
import { FAQ } from '@/components/screens/financing-path/FAQ';
import { CTASection } from '@/components/screens/financing-path/CTASection';
import { ScrollProgress } from '@/components/screens/financing-path/ScrollProgress';
export default function FinancingPathPage() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-white text-dark font-tajawal selection:bg-gold/30 selection:text-dark relative">

      <ScrollProgress />
      <main>
        <Hero />
        <Stats />
        <Timeline />
        <WhoItsFor />
        <Benefits />
        <Comparison />
        <Testimonials />
        <Partners />
        <FAQ />
        <CTASection />
      </main>
    </div>);

}