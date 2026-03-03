'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  PlayCircleIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  ZapIcon
} from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface HeroSectionProps {
  isRTL: boolean;
}

export function HeroSection({ isRTL }: HeroSectionProps) {
  const t = useTranslations('implementationMechanism.hero');
  const pills = t.raw('pills') as string[];
  const stats = t.raw('stats') as { value: string; label: string }[];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}>

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
          alt={t('subtitle')}
          className="w-full h-full object-cover" />

        <div
          className="absolute inset-0"
          style={{
            background:
            'linear-gradient(160deg, rgba(10,15,40,0.93) 0%, rgba(37,99,235,0.80) 50%, rgba(6,182,212,0.70) 100%)'
          }} />

        {/* Animated mesh overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
            'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />

      </div>

      {/* Floating shapes */}
      <motion.div
        className="absolute top-32 left-20 w-64 h-64 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, #06B6D4, transparent)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity
        }} />

      <motion.div
        className="absolute bottom-32 right-20 w-48 h-48 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, #F59E0B, transparent)'
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          delay: 2
        }} />


      {/* Content */}
      <div className="relative z-10  mx-auto px-4 sm:px-6 text-center text-white pt-20">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 home-badge-text font-bold border border-white/30"
          style={{
            background: 'rgba(255,255,255,0.15)'
          }}
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.7
          }}>

          <ZapIcon size={14} className="text-amber-300" />
          <span>{t('badge')}</span>
          <ZapIcon size={14} className="text-amber-300" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          className="home-hero-heading font-black leading-tight mb-6"
          initial={{
            opacity: 0,
            y: 40
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.15
          }}>

          {t('titleLine1')}
          <br />
          <span className="text-cyan-300">{t('titleLine2')}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="home-section-subtitle text-blue-100 font-medium mx-auto mb-4 leading-relaxed"
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
            delay: 0.3
          }}>

          {t('subtitle')}
        </motion.p>

        <motion.p
          className="home-body-large text-blue-200 font-medium mx-auto mb-10 leading-relaxed"
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
            delay: 0.45
          }}>

          {t('description')}
        </motion.p>

        {/* Feature pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.55
          }}>

          {pills[0] &&
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold">
              <ShieldCheckIcon size={14} className="text-cyan-300" />
              {pills[0]}
            </div>}
          {pills[1] &&
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold">
              <TrendingUpIcon size={14} className="text-amber-300" />
              {pills[1]}
            </div>}
          {pills[2] &&
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold">
              <ZapIcon size={14} className="text-green-300" />
              {pills[2]}
            </div>}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
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
            delay: 0.65
          }}>
          <Link
            href="#process"
            className="px-8 py-4 rounded-2xl font-black text-lg border-2 border-white/40 text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">

            <PlayCircleIcon size={20} />
            {t('cta')}
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 mx-auto"
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
            delay: 0.8
          }}>

          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-3 rounded-2xl bg-white/10 border border-white/20">
              <p
                className={
                  'home-stat-number font-black ' +
                  (index === 0
                    ? 'text-cyan-300'
                    : index === 1
                      ? 'text-amber-300'
                      : index === 2
                        ? 'text-green-300'
                        : 'text-pink-300')
                }>
                {stat.value}
              </p>
              <p className="home-small-label text-blue-200 font-medium mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

    </section>);

}