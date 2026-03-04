'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Clock, Handshake, ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
export function Hero({ locale }: { locale: string }) {
  const t = useTranslations('financingPath.hero');
  const isRTL = locale === 'ar';
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-dark">

      {/* Parallax Background — fully visible */}
      <motion.div
        style={{
          y
        }}
        className="absolute inset-0 w-full h-[120%]">

        <img
          src="/imges/financing-path/01.webp"
          alt={t('imageAlt')}
          className="w-full h-full object-cover" />

        {/* Gradient: transparent at top so image shows, dark at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-dark/50 to-dark" />
        {/* Subtle gold tint at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gold/5 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{
          opacity
        }}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20">

        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{
              opacity: 0,
              y: -15
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.3
            }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2 rounded-full home-badge-text font-bold mb-10 border border-white/15">

            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            {t('badge')}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.2, 0.65, 0.3, 0.9]
            }}
            className="home-hero-heading font-bold mb-8 leading-[1.15] text-white">

            {t('title')}
            <br />
            <span className="text-gradient-gold">{t('titleHighlight')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.7,
              delay: 0.9
            }}
            className="home-section-subtitle text-gray-300 mb-14 mx-auto leading-relaxed">

            {t('subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: 1.2
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">

            <button
              onClick={() =>
              document.getElementById('cta-section')?.scrollIntoView({
                behavior: 'smooth'
              })
              }
              className="cursor-pointer relative overflow-hidden group bg-gradient-gold-amber text-white font-bold text-lg px-10 py-4 rounded-xl shadow-gold-subtle hover:shadow-gold-hover hover:-translate-y-0.5 transition-all duration-300">

              <span className="relative z-10 flex items-center gap-2">
                {t('ctaPrimary')}
                {!isRTL ? <ArrowRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> : <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />}
              </span>
              <div className="absolute inset-0 -translate-x-full bg-white/20 group-hover:animate-shine z-0" />
            </button>

            <button
              onClick={() =>
              document.getElementById('timeline')?.scrollIntoView({
                behavior: 'smooth'
              })
              }
              className="cursor-pointer text-white/80 hover:text-white font-bold text-lg px-8 py-4 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300">

              {t('ctaSecondary')}
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: 1.5
            }}
            className="flex flex-wrap justify-center gap-3">

            <div className="flex items-center gap-2 bg-white/8 backdrop-blur-sm px-4 py-2.5 rounded-lg border border-white/10 home-badge-text text-gray-300">
              <div className="w-7 h-7 rounded-md bg-gold/20 flex items-center justify-center">
                <Shield className="w-3.5 h-3.5 text-gold" />
              </div>
              <span>{t('trustConfidentiality')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/8 backdrop-blur-sm px-4 py-2.5 rounded-lg border border-white/10 home-badge-text text-gray-300">
              <div className="w-7 h-7 rounded-md bg-teal/20 flex items-center justify-center">
                <Clock className="w-3.5 h-3.5 text-teal" />
              </div>
              <span>{t('trustStages')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/8 backdrop-blur-sm px-4 py-2.5 rounded-lg border border-white/10 home-badge-text text-gray-300">
              <div className="w-7 h-7 rounded-md bg-amber/20 flex items-center justify-center">
                <Handshake className="w-3.5 h-3.5 text-amber" />
              </div>
              <span>{t('trustPartnership')}</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom fade to white (smooth transition to next section) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20" />
    </section>);

}