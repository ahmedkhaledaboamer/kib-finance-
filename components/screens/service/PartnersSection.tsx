"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Landmark } from 'lucide-react';
export function PartnersSection() {
  const partners = [
  'بنك الإمارات دبي الوطني',
  'مصرف أبوظبي الإسلامي',
  'بنك المشرق',
  'بنك دبي التجاري',
  'مجموعة الفطيم',
  'إعمار العقارية',
  'مجموعة الحبتور',
  'داماك العقارية',
  'مجموعة ماجد الفطيم',
  'شركة الدار العقارية'];

  // Duplicate for seamless infinite scroll
  const scrollItems = [...partners, ...partners];
  return (
    <section className="py-20 bg-[#F1F5F9] overflow-hidden">
      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(50%); } /* Positive because RTL */
          }
          @keyframes scroll-right {
            0% { transform: translateX(50%); } /* Positive because RTL */
            100% { transform: translateX(0); }
          }
          .animate-scroll-left {
            animation: scroll-left 40s linear infinite;
          }
          .animate-scroll-right {
            animation: scroll-right 40s linear infinite;
          }
          .marquee-container:hover .animate-scroll-left,
          .marquee-container:hover .animate-scroll-right {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
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
          className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">

          شركاؤنا في <span className="text-[#D4AF37]">النجاح</span>
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
          className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full mb-4" />


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
          className="text-gray-600">

          نفخر بثقة عملائنا وشركائنا حول العالم
        </motion.p>
      </div>

      <div className="marquee-container flex flex-col gap-6 relative w-full max-w-[100vw]">
        {/* Fading edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F1F5F9] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F1F5F9] to-transparent z-10"></div>

        {/* Row 1 */}
        <div className="flex w-[200%] animate-scroll-left">
          {scrollItems.map((partner, idx) =>
          <div key={`row1-${idx}`} className="flex-shrink-0 px-4">
              <div className="bg-white rounded-full px-8 py-4 shadow-sm border border-gray-200 border-t-2 border-t-transparent font-medium text-[#1E3A5F] whitespace-nowrap hover:border-t-[#D4AF37] hover:shadow-md transition-all duration-300 cursor-default flex items-center gap-3">
                <Landmark className="w-4 h-4 text-[#D4AF37]/50" />
                {partner}
              </div>
            </div>
          )}
        </div>

        {/* Row 2 (Reverse) */}
        <div className="flex w-[200%] animate-scroll-right">
          {scrollItems.map((partner, idx) =>
          <div key={`row2-${idx}`} className="flex-shrink-0 px-4">
              <div className="bg-white rounded-full px-8 py-4 shadow-sm border border-gray-200 border-t-2 border-t-transparent font-medium text-[#1E3A5F] whitespace-nowrap hover:border-t-[#D4AF37] hover:shadow-md transition-all duration-300 cursor-default flex items-center gap-3">
                <Landmark className="w-4 h-4 text-[#D4AF37]/50" />
                {partner}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}