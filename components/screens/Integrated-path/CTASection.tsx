"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeftIcon, ArrowRightIcon, PhoneIcon, MailIcon, SparklesIcon } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
export function CTASection({ isRTL }: { isRTL: boolean }) {
  const t = useTranslations('integratedPath.cta')
  return (
    <section
      className="relative py-32 px-[5%] overflow-hidden"
      style={{
        background: '#ffffff',
      }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Dramatic background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main gradient orb */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full"
          style={{
            background:
              'radial-gradient(ellipse, rgba(255,107,53,0.2) 0%, rgba(255,200,0,0.1) 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Side orbs */}
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
      </div>

      {/* Geometric decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute top-10 right-10 w-40 h-40 opacity-10"
          viewBox="0 0 160 160"
          fill="none"
        >
          <polygon
            points="80,10 145,50 145,110 80,150 15,110 15,50"
            stroke="rgba(255,165,0,0.8)"
            strokeWidth="2"
            fill="none"
          />
          <polygon
            points="80,30 125,55 125,105 80,130 35,105 35,55"
            stroke="rgba(255,165,0,0.4)"
            strokeWidth="1"
            fill="none"
          />
        </svg>
        <svg
          className="absolute bottom-10 left-10 w-32 h-32 opacity-10"
          viewBox="0 0 128 128"
          fill="none"
        >
          {[10, 25, 40, 55].map((r) => (
            <circle
              key={r}
              cx="64"
              cy="64"
              r={r}
              stroke="rgba(6,182,212,0.6)"
              strokeWidth="1"
              fill="none"
            />
          ))}
        </svg>
        <svg
          className="absolute top-1/2 right-20 w-24 h-24 opacity-10 -translate-y-1/2"
          viewBox="0 0 96 96"
          fill="none"
        >
          {[0, 1, 2].map((row) =>
            [0, 1, 2].map((col) => (
              <polygon
                key={`${row}-${col}`}
                points={`${col * 32 + 16},${row * 32 + 4} ${col * 32 + 28},${row * 32 + 28} ${col * 32 + 4},${row * 32 + 28}`}
                stroke="rgba(236,72,153,0.6)"
                strokeWidth="1"
                fill="none"
              />
            )),
          )}
        </svg>
      </div>

      <div className="relative z-10 mx-auto text-center">
        {/* Sparkle badge */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div
            className="flex items-center gap-2 px-5 py-2.5 rounded-full"
            style={{
              background:
                'linear-gradient(135deg, rgba(255,107,53,0.2), rgba(255,200,0,0.2))',
              border: '1px solid rgba(255,165,0,0.4)',
            }}
          >
            <SparklesIcon
              size={16}
              style={{
                color: '#ffd700',
              }}
            />
            <span
              className="home-badge-text font-bold"
              style={{
                fontFamily: 'Cairo, sans-serif',
                color: '#ffd700',
              }}
            >
              {t('badge')}
            </span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="home-hero-heading font-black mb-6 leading-tight"
          style={{
            fontFamily: 'Cairo, sans-serif',
          }}
        >
          <span
            style={{
              color: '#1a1a2e',
            }}
          >
            {t('titleLine1')}
          </span>
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #ff6b35, #f7931e, #ffd700)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {t('titleLine2')}
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="home-body-large mb-12 mx-auto leading-relaxed"
          style={{
            fontFamily: 'Tajawal, sans-serif',
            color: 'rgba(0,0,0,0.55)',
          }}
        >
          {t('subtitle')}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <Link href="/implementation-mechanism">
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="cursor-pointer flex items-center gap-3 px-10 py-5 rounded-2xl font-black home-body-large text-white"
              style={{
                fontFamily: 'Cairo, sans-serif',
                background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
                boxShadow:
                  '0 0 50px rgba(255,107,53,0.5), 0 20px 40px rgba(255,107,53,0.2)',
              }}
            >
              <span>{t('cta')}</span>
              {isRTL ? <ArrowLeftIcon size={20} /> : <ArrowRightIcon size={20} />}
            </motion.button>
          </Link>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="flex flex-wrap justify-center gap-8"
        >
          <div
            className="flex items-center gap-3"
            style={{
              fontFamily: 'Tajawal, sans-serif',
              color: 'rgba(0,0,0,0.5)',
            }}
          >
            <PhoneIcon
              size={16}
              style={{
                color: '#00c9b1',
              }}
            />
            <span className="home-small-label">{t('phone')}</span>
          </div>
          <div
            className="flex items-center gap-3"
            style={{
              fontFamily: 'Tajawal, sans-serif',
              color: 'rgba(0,0,0,0.5)',
            }}
          >
            <MailIcon
              size={16}
              style={{
                color: '#00c9b1',
              }}
            />
            <span className="home-small-label">{t('email')}</span>
          </div>
        </motion.div>

        {/* Bottom divider line */}
        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="mt-16 h-px w-full max-w-2xl mx-auto"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255,165,0,0.5), transparent)',
          }}
        />
      </div>
    </section>
  )
}
