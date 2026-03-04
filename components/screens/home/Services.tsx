"use client";
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  ArrowLeftIcon,
  BuildingIcon,
  TrendingUpIcon,
  ShieldIcon,
  GlobeIcon,
  FileTextIcon,
  BarChart2Icon,
  XIcon,
  CheckCircleIcon,
  PhoneIcon, 
  ArrowRightIcon} from
'lucide-react';
import { useTranslations } from 'next-intl';
import { ContactModal } from './ContactModal';
import Image from 'next/image';
import Link from 'next/link';
interface Service {
  icon: React.ElementType;
  key: string;
  image: string;
  color: string;
  accent: string;
  bg: string;
  featureKeys: string[];
}
const services: Service[] = [
{
  icon: BuildingIcon,
  key: 'corporateFinance',
  image: '/imges/home/04.webp',
  color: 'from-navy to-navy-light',
  accent: 'text-gold',
  bg: 'bg-gold/10',
  featureKeys: [
    'items.corporateFinance.features.1',
    'items.corporateFinance.features.2',
    'items.corporateFinance.features.3',
    'items.corporateFinance.features.4',
    'items.corporateFinance.features.5'
  ]

},
{
  icon: TrendingUpIcon,
  key: 'projectFinance',
  image: '/imges/home/05.webp',
  color: 'from-teal to-teal-dark',
  accent: 'text-teal',
  bg: 'bg-teal/10',
  featureKeys: [
    'items.projectFinance.features.1',
    'items.projectFinance.features.2',
    'items.projectFinance.features.3',
    'items.projectFinance.features.4',
    'items.projectFinance.features.5'
  ]

},
{
  icon: ShieldIcon,
  key: 'riskManagement',
  image: '/imges/home/06.webp',
  color: 'from-coral to-coral-light',
  accent: 'text-coral',
  bg: 'bg-coral/10',
  featureKeys: [
    'items.riskManagement.features.1',
    'items.riskManagement.features.2',
    'items.riskManagement.features.3',
    'items.riskManagement.features.4',
    'items.riskManagement.features.5'
  ]

},
{
  icon: GlobeIcon,
  key: 'internationalFinance',
  image: '/imges/home/07.webp',
  color: 'from-emerald to-teal',
  accent: 'text-emerald',
  bg: 'bg-emerald/10',
  featureKeys: [
    'items.internationalFinance.features.1',
    'items.internationalFinance.features.2',
    'items.internationalFinance.features.3',
    'items.internationalFinance.features.4',
    'items.internationalFinance.features.5'
  ]

},
{
  icon: FileTextIcon,
  key: 'financialAdvisory',
  image: '/imges/home/08.webp',
  color: 'from-gold to-gold-light',
  accent: 'text-gold',
  bg: 'bg-gold/10',
  featureKeys: [
    'items.financialAdvisory.features.1',
    'items.financialAdvisory.features.2',
    'items.financialAdvisory.features.3',
    'items.financialAdvisory.features.4',
    'items.financialAdvisory.features.5'
  ]

},
{
  icon: BarChart2Icon,
  key: 'debtRestructuring',
  image: '/imges/home/09.webp',
  color: 'from-navy-mid to-navy',
  accent: 'text-teal',
  bg: 'bg-teal/10',
  featureKeys: [
    'items.debtRestructuring.features.1',
    'items.debtRestructuring.features.2',
    'items.debtRestructuring.features.3',
    'items.debtRestructuring.features.4',
    'items.debtRestructuring.features.5'
  ]

}];

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onContact: () => void;
  locale: string;
}
function ServiceModal({ service, onClose, onContact, locale }: ServiceModalProps) {
  const isRTL = locale === "ar";
  const t = useTranslations('financeHome.services');
  return (
    <AnimatePresence>
      {service &&
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-[5%]"
        dir="rtl">

          {/* Backdrop */}
          <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          className="absolute inset-0 bg-navy/85 backdrop-blur-sm"
          onClick={onClose} />


          {/* Modal */}
          <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
            y: 24
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            scale: 0.92,
            y: 24
          }}
          transition={{
            type: 'spring',
            damping: 28,
            stiffness: 320
          }}
          className="relative w-full max-w-7xl mx-auto   bg-white rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">

            {/* Hero image */}
            <div className="relative home-image-service flex-shrink-0 overflow-hidden">
              <Image
              src={service.image}
              alt={t(`items.${service.key}.title` as any)}
              className="w-full h-full object-cover"
              width={500}
              height={500}
              />

              <div
              className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-30`} />


              {/* Icon + title overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6" dir={isRTL ? "rtl" : "ltr"}>
                <div
                className={`w-11 h-11 ${service.bg} backdrop-blur-sm rounded-xl flex items-center justify-center mb-3`}>

                  <service.icon size={22} className={service.accent} />
                </div>
                <h2 className="services-heading font-black text-white">
                  {t(`items.${service.key}.title` as any)}
                </h2>
              </div>

              {/* Close button */}
              <button
              onClick={onClose}
              className={`cursor-pointer absolute top-4 ${!isRTL ? 'right-4' : 'left-4'} w-9 h-9 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-white transition-colors`}>

                <XIcon size={16} />
              </button>
            </div>

            {/* Gold accent line */}
            <div className="h-1 bg-gradient-to-l from-gold to-gold-light flex-shrink-0" />

            {/* Content */}
            <div className="p-6 overflow-y-auto flex-1" dir={isRTL ? "rtl" : "ltr"}>
              {/* Description */}
              <p className="text-gray-600 leading-loose services-card-desc mb-6">
              {t(`items.${service.key}.fullDesc` as any)}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-navy font-bold services-card-title mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 bg-gold rounded-full inline-block" />
                  {t('modalFeaturesTitle')}
                </h3>
                <ul className="space-y-3">
                  {service.featureKeys.map((featureKey, i) =>
                <motion.li
                  key={i}
                  initial={{
                    opacity: 0,
                    x: 16
                  }}
                  animate={{
                    opacity: 1,
                    x: 0
                  }}
                  transition={{
                    delay: 0.15 + i * 0.07
                  }}
                  className="flex items-start gap-3">

                      <CheckCircleIcon
                    size={17}
                    className="text-teal flex-shrink-0 mt-0.5" />

                        <span className="text-gray-600 home-body-large leading-relaxed">
                        {t(featureKey as any)}
                      </span>
                    </motion.li>
                )}
                </ul>
              </div>

              {/* CTA */}
              <div className="flex gap-3 pt-2 border-t border-gray-100 justify-center">
                <Link href="/implementation-mechanism">
                  <motion.button
                  whileHover={{
                    scale: 1.03
                  }}
                  whileTap={{
                    scale: 0.97
                  }}
                  className="w-full cursor-pointer flex-1 bg-gradient-to-l from-gold to-gold-light text-navy font-bold md:px-5 md:py-3.5 px-3 py-2 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-gold/25 text-sm">
                    {!isRTL?             
                    <>
                      <PhoneIcon size={15} />
                      <span>{t('modalConsultCta')}</span>
                    </>
                    :
                    <>
                      <span>{t('modalConsultCta')}</span>
                      <PhoneIcon size={15} />
                    </>
                    }
        
                  </motion.button>
                </Link>
                <motion.button
                whileHover={{
                  scale: 1.03
                }}
                whileTap={{
                  scale: 0.97
                }}
                onClick={onClose}
                className="cursor-pointer md:px-5 md:py-3.5 px-3 py-2 border-2 border-gray-200 text-gray-500 font-semibold rounded-2xl text-sm hover:border-gray-300 transition-colors">

                  {t('modalClose')}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      }
    </AnimatePresence>);

}
export function Services({ locale }: { locale: string }) {
  const isRTL = locale === "ar";
  const t = useTranslations('financeHome.services');
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <>
      <section
        id="services"
        className="py-24 relative overflow-hidden px-[5%]"
        ref={ref}>

        {/* Background image with blur overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/imges/home/010.webp"
            alt=""
            className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-[#1C232D] backdrop-blur-sm" />
          {/* subtle gold gradient tint */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-teal/5" />
        </div>

        <div className="  px-4 sm:px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={
            isInView ?
            {
              opacity: 1,
              y: 0
            } :
            {}
            }
            transition={{
              duration: 0.6
            }}
            className="text-center mb-16">

            <span className="inline-block text-gold services-badge-text font-bold tracking-widest uppercase mb-3 border border-gold/30 rounded-full px-4 py-1">
              {t('badge')}
            </span>
            <h2 className="services-heading font-black text-white mb-4">
              {t('title')} <span className="gradient-text-gold">{t('titleHighlight')}</span>
            </h2>
            <p className="text-white/50 services-subtitle">
              {t('subtitle')}
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 40
              }}
              animate={
              isInView ?
              {
                opacity: 1,
                y: 0
              } :
              {}
              }
              transition={{
                delay: i * 0.1,
                duration: 0.6
              }}
              whileHover={{
                y: -8,
                scale: 1.02
              }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedService(service)}>

                {/* Image */}
                <div className="relative home-image-service overflow-hidden">
                  <Image
                    src={service.image}
                    alt={t(`items.${service.key}.title` as any)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    width={500}
                    height={500}
                    />

                  <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-30`} />

                  <div
                  className={`absolute top-4 right-4 w-10 h-10 ${service.bg} backdrop-blur-sm rounded-xl flex items-center justify-center`}>

                    <service.icon size={20} className={service.accent} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-white font-bold services-card-title mb-2">
                    {t(`items.${service.key}.title` as any)}
                  </h3>
                  <p className="text-white/50 services-card-desc leading-relaxed mb-4">
                    {t(`items.${service.key}.desc` as any)}
                  </p>
                  <div
                  className={`flex items-center gap-2 ${service.accent} services-card-cta font-semibold group-hover:gap-3 transition-all`}>

                    <span>{t('learnMore')}</span>
                    {isRTL ? <ArrowLeftIcon size={14} /> : <ArrowRightIcon size={14} />}
                  </div>
                </div>

                {/* Hover ring */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ring-1 ring-inset ring-white/20" />
              </motion.div>
            )}
          </div>
        </div>

         
      </section>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onContact={() => setContactOpen(true)}
        locale={locale}
        />


      {/* Contact Modal (triggered from service modal CTA) */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)} />

    </>);

}