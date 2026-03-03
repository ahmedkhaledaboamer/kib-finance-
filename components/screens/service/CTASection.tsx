"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
interface CTASectionProps {
  locale: string;
}
export function CTASection({ locale }: CTASectionProps) {
  const t = useTranslations('servicesPage.cta');
  const isRTL = locale === "ar";
  return (
    <section className="relative   overflow-hidden">
      {/* Background Image & Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/imges/services/014.webp"
          alt={t('imageAlt')}
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#059669]/95 to-[#1E3A5F]/95 mix-blend-multiply"></div>
      </div>

      {/* Animated Floating Diamond Shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-10 right-10 w-32 h-32 border border-white/20 z-0"
        style={{
          transform: 'rotate(45deg)'
        }} />

      <motion.div
        animate={{
          y: [0, 30, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
        className="absolute bottom-10 left-10 w-48 h-48 border border-[#D4AF37]/30 z-0"
        style={{
          transform: 'rotate(45deg)'
        }} />


      <div className=" p-[5%] relative z-10 text-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}>

          <h2 className="home-section-heading font-black text-white mb-6 leading-tight">
            {t('heading')}
          </h2>
          <p className="home-body-large text-gray-200 mb-4 leading-relaxed">
            {t('paragraph1')}
          </p>

          <p className="home-body-large text-[#D4AF37] font-medium mb-12">
            {t('paragraph2')}
          </p>
          <Link href="/implementation-mechanism">
            <div className="relative inline-block">
              {/* Pulsing Sparkle */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
                className="absolute -top-4 -right-4 text-[#D4AF37] text-2xl z-20">

                ✦
              </motion.div>

              <motion.button
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="cursor-pointer relative bg-[#D4AF37] text-[#1E3A5F] px-10 py-5 rounded-lg font-bold text-xl transition-all duration-300 inline-flex items-center gap-3 group shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] overflow-hidden"
                style={{
                  animation: 'pulse-glow 2s infinite'
                }}>

                <style>{`
                  @keyframes pulse-glow {
                    0% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.4); }
                    70% { box-shadow: 0 0 0 15px rgba(212, 175, 55, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0); }
                  }
                `}</style>

                {/* Button Shine Effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />

                <span className="relative z-10">{t('cta')}</span>
                {!isRTL ? <ArrowRight className="w-6 h-6 group-hover:-translate-x-2 transition-transform relative z-10" /> : <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform relative z-10" />}
              </motion.button>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>);

}