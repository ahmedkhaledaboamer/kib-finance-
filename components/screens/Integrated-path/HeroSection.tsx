"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from '@/i18n/routing'
import { GeometricPatterns } from './GeometricPatterns'
import { useTranslations } from 'next-intl'
export function HeroSection() {
  const t = useTranslations('integratedPath.hero')
  const stats = [
    { value: t('stats.0.value'), label: t('stats.0.label') },
    { value: t('stats.1.value'), label: t('stats.1.label') },
    { value: t('stats.2.value'), label: t('stats.2.label') },
  ] as { value: string; label: string }[]
  return (
    <section
      className="relative h-100vh pt-[10%] pb-[3%]  flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #3F51B5 0%, #00bcd47a 50%, #EFF6FF 100%)',
      }}
      dir="rtl">
      {/* Animated gradient mesh orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="mesh-orb absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,107,53,0.18) 0%, transparent 70%)' }} />
        <div
          className="mesh-orb-2 absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(0,200,180,0.15) 0%, transparent 70%)',
          }}
        />
        <div
          className="mesh-orb-3 absolute bottom-[-10%] right-[30%] w-[700px] h-[700px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(150,50,255,0.12) 0%, transparent 70%)',
          }}
        />
        <div
          className="mesh-orb absolute bottom-[10%] left-[10%] w-[400px] h-[400px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(255,200,0,0.12) 0%, transparent 70%)',
          }}
        />
      </div>

      <GeometricPatterns />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6  ">


        {/* Main Arabic heading */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="home-hero-heading font-black mb-4 leading-tight text-[clamp(1rem, 1.5vw, 2rem)]"
          style={{
            fontFamily: 'Cairo, sans-serif',
          }}
        >
          <span className="shimmer-text">{t('titleLine1')}</span>
          <br />
          <span
            style={{
              color: '#1a1a2e',
            }}
          >
            {t('titleLine2')}
          </span>
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="home-body-large mb-12 mx-auto leading-relaxed"
          style={{
             
            color: 'rgba(0,0,0,0.5)',
          }}
        >
          {t('intro')}
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="home-stat-number font-black mb-1"
                style={{
                  fontFamily: 'Cairo, sans-serif',
                  background: 'linear-gradient(135deg, #ff6b35, #f59e0b)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.value}
              </div>
              <div
                className="home-stat-label"
                style={{
                   
                  color: 'rgba(0,0,0,0.45)',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.7,
          }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            className="cursor-pointer px-8 py-4 rounded-2xl font-bold home-body-large text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl text-[clamp(1rem, 1.5vw, 2rem)]"
            style={{
              fontFamily: 'Cairo, sans-serif',
              background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
              boxShadow: '0 0 30px rgba(255,107,53,0.3)',
            }}
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth',
              });
            }}
          >
            {t('ctaStart')}
          </button>
          <Link
            href="/implementation-mechanism"
            className="cursor-pointer px-8 py-4 rounded-2xl font-bold home-body-large transition-all duration-300 hover:scale-105 text-[clamp(1rem, 1.5vw, 2rem)]"
            style={{
              fontFamily: 'Cairo, sans-serif',
              background: 'rgba(0,0,0,0.05)',
              border: '1px solid rgba(0,0,0,0.15)',
              color: 'rgba(0,0,0,0.75)',
            }}
          >
            {t('ctaLearnMore')}
          </Link>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to bottom, transparent, #ffffff)',
        }}
      />

     
    </section>
  )
}
