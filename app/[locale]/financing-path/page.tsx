import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Timeline } from './components/Timeline';
import { WhoItsFor } from './components/WhoItsFor';
import { Benefits } from './components/Benefits';
import { Comparison } from './components/Comparison';
import { Testimonials } from './components/Testimonials';
import { Partners } from './components/Partners';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';
export function App() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-white text-dark font-tajawal selection:bg-gold/30 selection:text-dark relative">

      <ScrollProgress />
      <Navbar />
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
      <Footer />
      <BackToTop />
    </div>);

}