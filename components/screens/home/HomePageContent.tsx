"use client";

import { ParticlesBackground } from "./ParticlesBackground";
import { Hero } from "./Hero";
import { About } from "./About";
import { Services } from "./Services";
import { Benefits } from "./Benefits";
import { Stats } from "./Stats";
import { Testimonials } from "./Testimonials";
import { WhyUs } from "./WhyUs";
import { ContactCTA } from "./ContactCTA";

export function HomePageContent() {
  return (
    <div className="w-full min-h-screen relative">
      <ParticlesBackground />
      <div className="relative" style={{ zIndex: 1 }}>
        <Hero />
        <About />
        <Services />
        <Benefits />
        <Stats />
        <Testimonials />
        <WhyUs />
        <ContactCTA />
      </div>
    </div>
  );
}
