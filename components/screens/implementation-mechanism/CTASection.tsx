'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export function CTASection({ isRTL }: { isRTL: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  const t = useTranslations('implementationMechanism.cta');
  return (
    <section
      id="cta"
      className="py-20 relative overflow-hidden px-[5%]"
      dir={isRTL ? 'rtl' : 'ltr'}
      ref={ref}>

      {/* Background image */}
      <div className="absolute inset-0">
        <img    
          src="/imges/implementation-mechanism/55.webp"
          alt={t('imageAltMain')}
          className="w-full h-full"
          width={500}
          height={500}
          />

        <div
          className="absolute inset-0"
          style={{
            background:
            'linear-gradient(135deg, rgba(37,99,235,0.93) 0%, rgba(79,70,229,0.90) 60%, rgba(6,182,212,0.85) 100%)'
          }} />

      </div>

      <div className="relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            className={
              (isRTL
                ? 'text-center lg:text-right'
                : 'text-center lg:text-left') + ' text-white'
            }
            initial={{
              opacity: 0,
              x: 40
            }}
            animate={
            isInView ?
            {
              opacity: 1,
              x: 0
            } :
            {}
            }
            transition={{
              duration: 0.7
            }}>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6 bg-white/15 border border-white/25">
              {t('badge')}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight">
              {t('title')}
              <br />
              <span className="text-cyan-300">{t('titleHighlight')}</span>
            </h2>
            <p className="text-blue-100 text-lg font-medium mb-8 leading-relaxed">
              {t('paragraph')}
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center justify-center sm:justify-start gap-3 text-blue-100">
                <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                  <PhoneIcon size={16} className="text-cyan-300" />
                </div>
                <span className="font-medium">+971 XX XXX XXXX</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3 text-blue-100">
                <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                  <MailIcon size={16} className="text-cyan-300" />
                </div>
                <span className="font-medium">info@kebfinance.com</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3 text-blue-100">
                <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                  <MapPinIcon size={16} className="text-cyan-300" />
                </div>
                <span className="font-medium">{t('locationValue')}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
              <Link
                href="#process"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-black text-lg border-2 border-white/40 text-white hover:bg-white/10 transition-all">

                {t('ctaViewProcess')}
                {!isRTL ? <ArrowRightIcon size={18} /> : <ArrowLeftIcon size={18} />}
              </Link>
            </div>
          </motion.div>

          {/* Feature cards */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{
              opacity: 0,
              x: -40
            }}
            animate={
            isInView ?
            {
              opacity: 1,
              x: 0
            } :
            {}
            }
            transition={{
              duration: 0.7,
              delay: 0.2
            }}>

          
            <div
              className="p-5 rounded-2xl text-center"
              style={{
                background: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>

              <p className="text-3xl font-black text-cyan-300 mb-1">24h</p>
              <p className="text-white text-sm font-bold">
                {t('featureResponseTime')}
              </p>
            </div>
            <div
              className="p-5 rounded-2xl text-center"
              style={{
                background: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>

              <p className="text-3xl font-black text-amber-300 mb-1">100%</p>
              <p className="text-white text-sm font-bold">
                {t('featureConfidentiality')}
              </p>
            </div>
            <div
              className="p-5 rounded-2xl text-center"
              style={{
                background: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>

              <p className="text-3xl font-black text-green-300 mb-1">10+</p>
              <p className="text-white text-sm font-bold">
                {t('featureExperience')}
              </p>
            </div>
            <div
              className="p-5 rounded-2xl text-center"
              style={{
                background: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>

              <p className="text-3xl font-black text-pink-300 mb-1">500+</p>
              <p className="text-white text-sm font-bold">
                {t('featureFiles')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}