'use client'
import React from 'react'
import { motion } from 'framer-motion'
import {
  StarIcon,
  ZapIcon,
  HeartIcon,
  GlobeIcon,
  TrendingUpIcon,
} from 'lucide-react'
import { useTranslations } from 'next-intl'

const icons = [StarIcon, ZapIcon, HeartIcon, GlobeIcon, TrendingUpIcon]
const gradients = [
  'linear-gradient(135deg, #ff6b35, #f7931e)',
  'linear-gradient(135deg, #00c9b1, #00e676)',
  'linear-gradient(135deg, #ec4899, #f43f5e)',
  'linear-gradient(135deg, #06b6d4, #3b82f6)',
  'linear-gradient(135deg, #f59e0b, #f97316)',
]
const glows = ['#ff6b35', '#00c9b1', '#ec4899', '#06b6d4', '#f59e0b']

export function PrinciplesBadges() {
  const t = useTranslations('integratedPath.principles')
  const principles = [0, 1, 2, 3, 4].map((i) => ({
    icon: icons[i],
    title: t(`items.${i}.title`),
    subtitle: t(`items.${i}.subtitle`),
    gradient: gradients[i],
    glow: glows[i],
  }))
  return (
    <section
      className="relative py-20 overflow-hidden px-[5%]"
      style={{
        background: '#ffffff',
      }}
      dir="rtl"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] rounded-full opacity-10"
          style={{
            background:
              'radial-gradient(ellipse, rgba(255,165,0,0.4) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      <div className=" mx-auto px-6">
        {/* Section header */}
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
            duration: 0.6,
          }}
          className="text-center mb-12"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full home-badge-text font-bold tracking-widest uppercase mb-4"
            style={{
              fontFamily: 'Cairo, sans-serif',
              background:
                'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(59,130,246,0.2))',
              border: '1px solid rgba(6,182,212,0.3)',
              color: '#06b6d4',
            }}
          >
            {t('badge')}
          </span>
          <h2
            className="home-section-heading font-black mb-4"
            style={{
              fontFamily: 'Cairo, sans-serif',
              color: '#1a1a2e',
            }}
          >
            {t('title')}
            <span
              className="mx-3"
              style={{
                background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {t('titleHighlight')}
            </span>
          </h2>
          <p
            className="home-body-large"
            style={{
              fontFamily: 'Tajawal, sans-serif',
              color: 'rgba(0,0,0,0.5)',
            }}
          >
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Horizontal scroll badges */}
        <div className="scroll-container pb-4">
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
              duration: 0.6,
              delay: 0.2,
            }}
            className="flex gap-5 mx-auto justify-center flex-wrap md:flex-nowrap"
          >
            {principles.map((principle, i) => (
              <motion.div
                key={principle.title}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                whileHover={{
                  scale: 1.05,
                  y: -4,
                }}
                className="relative flex flex-col items-center gap-4 px-8 py-6 rounded-3xl cursor-default"
                style={{
                  background: 'rgba(0,0,0,0.025)',
                  border: `1px solid ${principle.glow}30`,
                  boxShadow: `0 0 30px ${principle.glow}10`,
                  width: "100%"
                }}
              >
                {/* Gradient top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl w-[80%] mx-auto"
                  style={{
                    background: principle.gradient,
                  }}
                />

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${principle.glow}25, ${principle.glow}10)`,
                    border: `1px solid ${principle.glow}40`,
                  }}
                >
                  <principle.icon
                    size={26}
                    style={{
                      color: principle.glow,
                    }}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Text */}
                <div className="text-center">
                  <p
                    className="home-body-large font-black mb-1"
                    style={{
                      fontFamily: 'Cairo, sans-serif',
                      color: '#1a1a2e',
                    }}
                  >
                    {principle.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
