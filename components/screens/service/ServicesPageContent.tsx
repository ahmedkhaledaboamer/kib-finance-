"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { HeroSection } from "./HeroSection";
import { ServicesGrid } from "./ServicesGrid";
import { ProcessSection } from "./ProcessSection";
import { WhyChooseUs } from "./WhyChooseUs";
import { StatsSection } from "./StatsSection";
import { PartnersSection } from "./PartnersSection";
import { FAQSection } from "./FAQSection";
import { CTASection } from "./CTASection";
import { ClosingSection } from "./ClosingSection";
import { ServiceModal } from "./ServiceModal";
import { ContactFormModal } from "./ContactFormModal";
import type { ServiceItem } from "./services";

export function ServicesPageContent() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactPreselectedService, setContactPreselectedService] = useState<ServiceItem | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenServiceModal = (service: ServiceItem) => {
    setSelectedService(service);
    setIsServiceModalOpen(true);
  };
  const handleCloseServiceModal = () => {
    setIsServiceModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };
  const handleRequestService = (service: ServiceItem) => {
    setContactPreselectedService(service);
    setIsContactModalOpen(true);
  };
  const handleOpenContactModal = () => {
    setContactPreselectedService(null);
    setIsContactModalOpen(true);
  };
  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
    setTimeout(() => setContactPreselectedService(null), 300);
  };

  return (
    <div className="min-h-screen bg-[#F1F5F9] font-sans">
      <main>
        <HeroSection />
        <ServicesGrid onServiceClick={handleOpenServiceModal} />
        <ProcessSection />
        <WhyChooseUs />
        <StatsSection />
        <PartnersSection />
        <FAQSection />
        <CTASection onOpenContact={handleOpenContactModal} />
        <ClosingSection />
      </main>

      <ServiceModal
        isOpen={isServiceModalOpen}
        service={selectedService}
        onClose={handleCloseServiceModal}
        onRequestService={handleRequestService}
      />
      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={handleCloseContactModal}
        preselectedService={contactPreselectedService}
      />

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 left-8 z-40 w-12 h-12 rounded-full bg-[#1E3A5F] text-white shadow-lg flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#1E3A5F] transition-colors duration-300"
            aria-label="العودة للأعلى"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
