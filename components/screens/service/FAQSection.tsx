"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
export function FAQSection() {
  const t = useTranslations('servicesPage.faq');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = t.raw('items') as { q: string; a: string }[];

  return (
    <section className="py-24 bg-white relative overflow-hidden px-[5%]">
      {/* Subtle Dot Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#1E3A5F 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}>
      </div>

      <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            className="home-section-heading font-black text-[#1E3A5F] mb-4">

            {t('heading')} <span className="text-[#D4AF37]">{t('headingHighlight')}</span>
          </motion.h2>
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
            className="home-section-subtitle text-gray-600">

            {t('subtitle')}
          </motion.p>
        </div>

        <div className="relative">
          {/* Decorative vertical line */}
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D4AF37]/20 via-[#D4AF37] to-[#D4AF37]/20 rounded-full hidden md:block"></div>

          <div className="space-y-4 md:pr-8">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 10
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    delay: index * 0.1
                  }}
                  className={` border border-gray-200 rounded-lg overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-[#FDF8F0] border-l-4 border-l-[#D4AF37]' : 'bg-white'}`}>

                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="cursor-pointer w-full px-6 py-5 flex items-center justify-between text-start focus:outline-none">

                    <div className="flex items-center gap-4">
                      <span
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${isOpen ? 'bg-[#D4AF37] text-[#1E3A5F]' : 'bg-[#1E3A5F] text-white'}`}>

                        {index + 1}
                      </span>
                      <span className="font-bold text-[#1E3A5F] home-body-large">
                        {faq.q}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#D4AF37]' : ''}`} />

                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen &&
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0
                      }}
                      animate={{
                        height: 'auto',
                        opacity: 1
                      }}
                      exit={{
                        height: 0,
                        opacity: 0
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut'
                      }}>

                        <div className="px-6 pb-5 pr-16 text-gray-600 leading-relaxed home-body-large">
                          {faq.a}
                        </div>
                      </motion.div>
                    }
                  </AnimatePresence>
                </motion.div>);

            })}
          </div>
        </div>
      </div>
    </section>);

}