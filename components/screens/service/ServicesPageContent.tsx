"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { HeroSection } from "./HeroSection";
import { ServicesGrid } from "./ServicesGrid";
import { ProcessSection } from "./ProcessSection";
import { WhyChooseUs } from "./WhyChooseUs";
 import { PartnersSection } from "./PartnersSection";
import { FAQSection } from "./FAQSection";
import { CTASection } from "./CTASection";
 import { ServiceModal } from "./ServiceModal";
import type { ServiceItem } from "./services";

export function ServicesPageContent({ locale }: { locale: string }) {
  const t = useTranslations("servicesPage.modal");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

  const handleOpenServiceModal = (service: ServiceItem) => {
    setSelectedService(service);
    setIsServiceModalOpen(true);
  };
  const handleCloseServiceModal = () => {
    setIsServiceModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <div className="min-h-screen bg-[#F1F5F9] font-sans">
      <main>
        <HeroSection locale={locale} />
        <ServicesGrid onServiceClick={handleOpenServiceModal} locale={locale} />
        <ProcessSection />
        <WhyChooseUs />
        <PartnersSection />
        <FAQSection />
        <CTASection locale={locale}/>
      </main>

      <ServiceModal
        isOpen={isServiceModalOpen}
        service={selectedService}
        onClose={handleCloseServiceModal}
        locale={locale}
      />
    </div>
  );
}
