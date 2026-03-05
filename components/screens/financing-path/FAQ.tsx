'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
const FAQ_IDS = [1, 2, 3, 4, 5] as const;

export function FAQ({ locale }: { locale: string }) {
  const t = useTranslations('financingPath.faq');
  const isRTL = locale === 'ar';
  const faqs = FAQ_IDS.map((id) => ({
    id,
    question: t(`items.${id}.q`),
    answer: t(`items.${id}.a`),
  }));
  const [openId, setOpenId] = useState<number | null>(1);
  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <section id="faq" className="py-24 bg-white relative p-[5%]">
      <div className=" mx-auto px-6">
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
            className="home-section-heading font-bold text-dark mb-4">

            {t('title')} <span className="text-gold">{t('titleHighlight')}</span>
          </motion.h2>
          <motion.div
            initial={{
              width: 0
            }}
            whileInView={{
              width: '60px'
            }}
            viewport={{
              once: true
            }}
            className="h-1 bg-gold mx-auto" />

        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Side Photo — Consultant */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="lg:w-5/12 w-full">

            <div className="sticky top-32 space-y-6 ">
              <div className="relative rounded-2xl overflow-hidden  shadow-xl home-image-tall">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />
                <Image
                  src="/imges/financing-path/06.webp"
                  alt={t('imageAlt1')}
                  className="w-full h-full object-cover "
                  width={500}
                  height={500}
                  />

                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                <div className="absolute bottom-6 right-6 left-6 text-white">
                  <h3 className="home-body-large font-bold mb-1">{t('sideTitle')}</h3>
                  <p className="text-white/80 home-small-label">
                    {t('sideSubtitle')}
                  </p>
                </div>
              </div>

              {/* Second smaller photo */}
              <div className="relative rounded-xl overflow-hidden shadow-lg home-image-card">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />
                <Image
                  src="/imges/financing-path/0155.webp"
                  alt={t('imageAlt2')}
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                  />

                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white text-sm font-bold">
                        {t('badgeSuccess')}
                      </span>
                    </div>
                    <div className="bg-gold/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white text-sm font-bold">
                        {t('badgeDays')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="lg:w-7/12 w-full space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  key={faq.id}
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
                    delay: index * 0.1
                  }}
                  className={`border rounded-lg overflow-hidden transition-colors duration-300 ${isOpen ? 'border-gold bg-gold-light/20' : 'border-gray-200 bg-white hover:border-gold/50'}`}>

                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 flex justify-between items-center text-right focus:outline-none">

                    <span
                      className={`font-bold text-dark home-body-large border-transparent ${!isRTL ? 'border-l-4 pl-4 border-transparent' : 'border-r-4 pr-4 border-transparent'}`}
                      style={{
                        borderColor: isOpen ? '#C9A227' : 'transparent'
                      }}>

                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-6 h-6 text-gold shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />

                  </button>
                  <AnimatePresence>
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
                        duration: 0.3
                      }}>

                        <div className="px-6 pb-5 pt-0 text-gray-600 leading-relaxed pr-8 home-body-large">
                          {faq.answer}
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