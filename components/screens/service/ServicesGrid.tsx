"use client";
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { servicesData, categories, ServiceItem } from '@/components/screens/service/services';
import { ServiceCard } from './ServiceCard';
interface ServicesGridProps {
  onServiceClick: (service: ServiceItem) => void;
}
export function ServicesGrid({ onServiceClick }: ServicesGridProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const scrollRef = useRef<HTMLDivElement>(null);
  const filteredServices =
  activeCategory === 'all' ?
  servicesData :
  servicesData.filter((s) => s.category === activeCategory);
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.85;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  // Helper to get count for a category
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === 'all') return servicesData.length;
    return servicesData.filter((s) => s.category === categoryId).length;
  };
  return (
    <section id="services-grid" className="py-24 bg-white relative">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#1E3A5F 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4">

            منظومة خدماتنا <span className="text-[#D4AF37]">المتكاملة</span>
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
            className="text-xl text-gray-600 max-w-3xl mx-auto">

            اختر من بين 30 خدمة تمويلية مصممة خصيصاً لتلبية احتياجاتك ودعم نمو
            أعمالك
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {categories.map((category) => {
            const count = getCategoryCount(category.id);
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-6 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 ${activeCategory === category.id ? 'text-white shadow-lg shadow-[#1E3A5F]/20' : 'text-gray-600 bg-gray-100 hover:bg-gray-200'}`}>

                {activeCategory === category.id &&
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#1E3A5F] rounded-full -z-10"
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30
                  }} />

                }
                {category.label}
                <span className="text-xs opacity-70 mr-1 font-medium">
                  ({count})
                </span>
              </button>);

          })}
        </div>

        {/* Desktop Grid (hidden on mobile) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) =>
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
                onClick={onServiceClick} />

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
            {filteredServices.map((service, index) =>
            <div
              key={service.id}
              className="snap-center shrink-0 w-[85vw] max-w-[340px]">

                <ServiceCard
                service={service}
                index={index}
                onClick={onServiceClick} />

              </div>
            )}
          </div>
          {/* Carousel Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => scrollCarousel('right')}
              className="w-10 h-10 rounded-full bg-[#1E3A5F] text-white flex items-center justify-center shadow-md hover:bg-[#D4AF37] transition-colors"
              aria-label="السابق">

              <ChevronRightIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollCarousel('left')}
              className="w-10 h-10 rounded-full bg-[#1E3A5F] text-white flex items-center justify-center shadow-md hover:bg-[#D4AF37] transition-colors"
              aria-label="التالي">

              <ChevronLeftIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>);

}