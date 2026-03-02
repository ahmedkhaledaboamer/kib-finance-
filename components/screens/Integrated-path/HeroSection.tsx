"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { GeometricPatterns } from './GeometricPatterns'
import Link from 'next/link'
export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
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
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* KEP Finance badge */}
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="inline-flex items-center gap-3 mb-8"
        >
          <span
            className="px-5 py-2 rounded-full text-sm font-semibold tracking-widest uppercase"
            style={{
              background:
                'linear-gradient(135deg, rgba(255,107,53,0.15), rgba(255,200,0,0.15))',
              border: '1px solid rgba(255,165,0,0.5)',
              color: '#c2710c',
              fontFamily: 'Cairo, sans-serif',
            }}
          >
            KEP Finance
          </span>
        </motion.div>

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
          className="text-6xl md:text-8xl font-black mb-6 leading-tight"
          style={{
            fontFamily: 'Cairo, sans-serif',
          }}
        >
          <span className="shimmer-text">مسار رأس المال</span>
          <br />
          <span
            style={{
              color: '#1a1a2e',
            }}
          >
            المتكامل
          </span>
        </motion.h1>

        {/* Subtitle */}
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
            delay: 0.4,
          }}
          className="text-xl md:text-2xl mb-4 font-medium"
          style={{
            fontFamily: 'Tajawal, sans-serif',
            color: 'rgba(0,0,0,0.55)',
          }}
        >
          Integrated Capital Pathway
        </motion.p>

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
          className="text-lg md:text-xl mb-12 mx-auto leading-relaxed"
          style={{
            fontFamily: 'Tajawal, sans-serif',
            color: 'rgba(0,0,0,0.5)',
          }}
        >
          رحلة متكاملة من ٩ مراحل لتحقيق أهدافك الاستثمارية وبناء مستقبل مالي
          متين
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
          {[
            {
              value: '٩',
              label: 'مراحل متكاملة',
            },
            {
              value: '٥',
              label: 'مبادئ أساسية',
            },
            {
              value: '١٠٠٪',
              label: 'شفافية وأمان',
            },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-4xl font-black mb-1"
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
                className="text-sm"
                style={{
                  fontFamily: 'Tajawal, sans-serif',
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
            className="cursor-pointer px-8 py-4 rounded-2xl font-bold text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
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
            ابدأ رحلتك الآن
          </button>
          <Link
            href="/implementation-mechanism"
            className="cursor-pointer px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105"
            style={{
              fontFamily: 'Cairo, sans-serif',
              background: 'rgba(0,0,0,0.05)',
              border: '1px solid rgba(0,0,0,0.15)',
              color: 'rgba(0,0,0,0.75)',
            }}
          >
            تعرف على المزيد
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

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
          });
        }}
      >
        <div
          className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2"
          style={{
            borderColor: 'rgba(255,165,0,0.4)',
          }}
        >
          <div
            className="w-1.5 h-3 rounded-full"
            style={{
              background: 'rgba(255,165,0,0.6)',
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}
