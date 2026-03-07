'use client';
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';

type TabKey = 'compare' | 'traditional' | 'executive';
export function Comparison({ locale }: { locale: string }) {
  const t = useTranslations('financingPath.comparison');
  const isRTL = locale === 'ar';
  const traditionalPath = useMemo(() => (t.raw('traditionalItems') as string[]).map((text) => ({ text, negative: true })), [t]);
  const executivePath = useMemo(() => (t.raw('executiveItems') as string[]).map((text) => ({ text, negative: false })), [t]);
  const [activeTab, setActiveTab] = useState<TabKey>('compare');
  const tabs: { key: TabKey; label: string; color: string }[] = [
    { key: 'compare', label: t('tabCompare'), color: 'bg-gold' },
    { key: 'traditional', label: t('tabTraditional'), color: 'bg-gray-400' },
    { key: 'executive', label: t('tabExecutive'), color: 'bg-teal' },
  ];

  return (
    <section className="py-24 bg-cream relative overflow-hidden p-[5%]">
      {/* Background Photo with subtle overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/imges/financing-path/038.webp"
          alt="Office"
          className="w-full h-full object-cover opacity-[0.04]" />

      </div>

      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className=" mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
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

            {t('title')} <span className="text-gold">{t('titleHighlight')}</span> {t('titleSuffix')}
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              y: 15
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.15
            }}
            className="text-gray-500 home-section-subtitle mx-auto">

            {t('subtitle')}
          </motion.p>
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
            className="h-1 bg-gold mx-auto mt-4" />

        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-xl p-1.5 shadow-md border border-gray-100 gap-1">
            {tabs.map((tab) =>
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`cursor-pointer relative md:px-6 px-3 md:py-3 py-2 rounded-lg font-bold transition-all duration-300 ${activeTab === tab.key ? 'text-white shadow-sm' : 'text-gray-500 hover:text-dark'}`}>

                {activeTab === tab.key &&
              <motion.div
                layoutId="comparison-tab-bg"
                className={`absolute inset-0 ${tab.color} rounded-lg`}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 30
                }} />

              }
                <span className="relative z-10 text-[clamp(0.6rem,1.25vw,1.2rem)]">{tab.label}</span>
              </button>
            )}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'compare' &&
          <motion.div
            key="compare"
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -20
            }}
            transition={{
              duration: 0.3
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Traditional Column */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden">
                {/* Column Photo */}
                <div className="relative overflow-hidden ">
                  <img
                  src="/imges/financing-path/441.webp"
                  alt={t('imageAltTraditional')}
                  className="w-full h-full object-cover"  style={{ height: 'clamp(14rem,20vw,26rem)' }}  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />
                  <div className="absolute bottom-4 right-6">
                    <h3 className="home-body-large font-bold text-gray-400">
                      {t('traditionalTitle')}
                    </h3>
                    <p className="home-small-label text-gray-400">
                      {t('traditionalSubtitle')}
                    </p>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  {traditionalPath.map((item, i) =>
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    x: 20
                  }}
                  animate={{
                    opacity: 1,
                    x: 0
                  }}
                  transition={{
                    delay: i * 0.08
                  }}
                  className="flex items-start gap-3">

                      <div className="w-6 h-6 rounded-full bg-rose/10 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5 text-rose" />
                      </div>
                      <span className="text-gray-500 leading-relaxed">
                        {item.text}
                      </span>
                    </motion.div>
                )}
                </div>
              </div>

              {/* Executive Column */}
              <div className="bg-white rounded-2xl shadow-lg border-2 border-gold/30 relative overflow-hidden">
                {/* Column Photo */}
                <div className="relative overflow-hidden">
                  <img
                  src="/imges/financing-path/442.webp"
                  alt={t('imageAltExecutive')}
                  className="w-full h-full object-cover"  style={{ height: 'clamp(14rem,20vw,26rem)' }}  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-gold text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {t('bestBadge')}
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-6">
                    <h3 className="text-2xl font-bold text-gray-400">
                      {t('executiveTitle')}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {t('executiveSubtitle')}
                    </p>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  {executivePath.map((item, i) =>
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    x: -20
                  }}
                  animate={{
                    opacity: 1,
                    x: 0
                  }}
                  transition={{
                    delay: i * 0.08
                  }}
                  className="flex items-start gap-3">

                      <div className="w-6 h-6 rounded-full bg-emerald/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-emerald" />
                      </div>
                      <span className="text-dark leading-relaxed font-medium">
                        {item.text}
                      </span>
                    </motion.div>
                )}
                </div>
              </div>
            </motion.div>
          }

          {activeTab === 'traditional' &&
          <motion.div
            key="traditional"
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -20
            }}
            transition={{
              duration: 0.3
            }}
            className=" mx-auto">

              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 relative overflow-hidden">
                {/* Full-width photo */}
                <div className="relative h-52 overflow-hidden">
                  <img
                  src="/imges/financing-path/010.webp"
                  alt={t('imageAltTraditional')}
                  className="w-full h-full object-cover grayscale opacity-50" />

                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
                  <div className="absolute bottom-6 inset-x-0 text-center">
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3 shadow-md">
                      <X className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-500">
                      {t('traditionalFullTitle')}
                    </h3>
                    <p className="text-gray-400 mt-1">
                      {t('traditionalFullSubtitle')}
                    </p>
                  </div>
                </div>
                <div className="p-10 space-y-5">
                  {traditionalPath.map((item, i) =>
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    x: 30
                  }}
                  animate={{
                    opacity: 1,
                    x: 0
                  }}
                  transition={{
                    delay: i * 0.1
                  }}
                  className="flex items-start gap-4 bg-rose/5 p-4 rounded-xl border border-rose/10">

                      <div className="w-8 h-8 rounded-full bg-rose/10 flex items-center justify-center shrink-0">
                        <X className="w-4 h-4 text-rose" />
                      </div>
                      <span className="text-gray-600 leading-relaxed">
                        {item.text}
                      </span>
                    </motion.div>
                )}
                </div>
              </div>
            </motion.div>
          }

          {activeTab === 'executive' &&
          <motion.div
            key="executive"
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -20
            }}
            transition={{
              duration: 0.3
            }}
            className=" mx-auto">

              <div className="bg-white rounded-2xl shadow-lg border-2 border-gold/20 relative overflow-hidden">
                {/* Full-width photo */}
                <div className="relative h-52 overflow-hidden">
                  <img
                  src="/imges/financing-path/011.webp"
                  alt={t('imageAltExecutive')}
                  className="w-full h-full object-cover" />

                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
                  <div className="absolute bottom-6 inset-x-0 text-center">
                    <div className="w-16 h-16 rounded-full bg-gold-light flex items-center justify-center mx-auto mb-3 shadow-md">
                      <Sparkles className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark">
                      {t('executiveFullTitle')}
                    </h3>
                    <p className="text-gray-500 mt-1">
                      {t('executiveFullSubtitle')}
                    </p>
                  </div>
                </div>
                <div className="p-10 space-y-5">
                  {executivePath.map((item, i) =>
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    x: -30
                  }}
                  animate={{
                    opacity: 1,
                    x: 0
                  }}
                  transition={{
                    delay: i * 0.1
                  }}
                  className="flex items-start gap-4 bg-emerald/5 p-4 rounded-xl border border-emerald/10">

                      <div className="w-8 h-8 rounded-full bg-emerald/10 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-emerald" />
                      </div>
                      <span className="text-dark leading-relaxed font-medium">
                        {item.text}
                      </span>
                    </motion.div>
                )}
                </div>
                <div className="px-10 pb-10 text-center">
                  <button
                  onClick={() =>
                  document.getElementById('cta-section')?.scrollIntoView({
                    behavior: 'smooth'
                  })
                  }
                  className="cursor-pointer inline-flex items-center gap-2 bg-gradient-gold-amber text-white font-bold px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">

                    {t('ctaStart')}
                    {!isRTL ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </section>);

}