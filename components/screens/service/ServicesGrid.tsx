"use client";
import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { servicesData, ServiceItem } from '@/components/screens/service/services';
import { ServiceCard } from './ServiceCard';
interface ServicesGridProps {
  onServiceClick: (service: ServiceItem) => void;
  locale: string;
}
export function ServicesGrid({ onServiceClick, locale }: ServicesGridProps) {
  const t = useTranslations('servicesPage.servicesGrid');
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.85;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  return (
    <section id="services-grid" className=" bg-white relative">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#1E3A5F 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}>
      </div>

      <div className=" p-[5%] relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="services-heading font-black text-[#1E3A5F] mb-4">

            {t('heading')} <span className="text-[#D4AF37]">{t('headingHighlight')}</span>{t('headingSuffix') ? ` ${t('headingSuffix')}` : ''}
          </motion.h2>

          <motion.div
            initial={{
              scaleX: 0
            }}
            whileInView={{
              scaleX: 1
            }}
            viewport={{
              once: true
            }}
            className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mb-6" />


          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.1
            }}
            className="services-subtitle text-gray-600">

            {t('subtitle')}
          </motion.p>
        </div>

        {/* Desktop Grid (hidden on mobile) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {servicesData.map((service, index) =>
            <motion.div
              key={service.id}
              layout
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0,
                scale: 0.9
              }}
              transition={{
                duration: 0.3
              }}>

                <ServiceCard
                service={service}
                index={index}
                onClick={onServiceClick}
                locale={locale} />

              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Carousel (hidden on desktop) */}
        <div className="md:hidden relative">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 -mx-4 px-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}>

            <style>{`div::-webkit-scrollbar { display: none; }`}</style>
            {servicesData.map((service, index) =>
            <div
              key={service.id}
              className="snap-center shrink-0 ]  ">

                <ServiceCard
                service={service}
                index={index}
                onClick={onServiceClick}
                locale={locale} />

              </div>
            )}
          </div>
          {/* Carousel Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => scrollCarousel('right')}
              className="w-10 h-10 rounded-full bg-[#1E3A5F] text-white flex items-center justify-center shadow-md hover:bg-[#D4AF37] transition-colors"
              aria-label={t('carouselPrev')}>

              <ChevronRightIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollCarousel('left')}
              className="w-10 h-10 rounded-full bg-[#1E3A5F] text-white flex items-center justify-center shadow-md hover:bg-[#D4AF37] transition-colors"
              aria-label={t('carouselNext')}>

              <ChevronLeftIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>);

}