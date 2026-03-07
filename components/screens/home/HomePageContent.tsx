"use client";

import { ParticlesBackground } from "./ParticlesBackground";
import { Hero } from "./Hero";
import { About } from "./About";
import { Services } from "./Services";
import { Benefits } from "./Benefits";
import { Stats } from "./Stats";
import { WhyUs } from "./WhyUs";
import { ContactCTA } from "./ContactCTA";

export function HomePageContent({ locale }: { locale: string }) {
  return (
    <div className="w-full min-h-screen relative">
      <ParticlesBackground />
      <div className="relative">
        <Hero locale={locale} />
        <About locale={locale} />
        <Services locale={locale} />
        <Benefits />
        <Stats />
        <WhyUs locale={locale} />
        <ContactCTA locale={locale} />
      </div>
    </div>
  );
}
