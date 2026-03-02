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
const principles = [
  {
    icon: StarIcon,
    title: 'الشفافية الكاملة',
    subtitle: 'Full Transparency',
    gradient: 'linear-gradient(135deg, #ff6b35, #f7931e)',
    glow: '#ff6b35',
  },
  {
    icon: ZapIcon,
    title: 'الكفاءة العالية',
    subtitle: 'High Efficiency',
    gradient: 'linear-gradient(135deg, #00c9b1, #00e676)',
    glow: '#00c9b1',
  },
  {
    icon: HeartIcon,
    title: 'العلاقات الإنسانية',
    subtitle: 'Human Relations',
    gradient: 'linear-gradient(135deg, #ec4899, #f43f5e)',
    glow: '#ec4899',
  },
  {
    icon: GlobeIcon,
    title: 'الرؤية العالمية',
    subtitle: 'Global Vision',
    gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    glow: '#06b6d4',
  },
  {
    icon: TrendingUpIcon,
    title: 'النمو المستدام',
    subtitle: 'Sustainable Growth',
    gradient: 'linear-gradient(135deg, #f59e0b, #f97316)',
    glow: '#f59e0b',
  },
]
export function PrinciplesBadges() {
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
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
            style={{
              fontFamily: 'Cairo, sans-serif',
              background:
                'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(59,130,246,0.2))',
              border: '1px solid rgba(6,182,212,0.3)',
              color: '#06b6d4',
            }}
          >
            المبادئ الأساسية
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{
              fontFamily: 'Cairo, sans-serif',
              color: '#1a1a2e',
            }}
          >
            قيمنا
            <span
              className="mx-3"
              style={{
                background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              الجوهرية
            </span>
          </h2>
          <p
            className="text-lg"
            style={{
              fontFamily: 'Tajawal, sans-serif',
              color: 'rgba(0,0,0,0.5)',
            }}
          >
            خمسة مبادئ راسخة تشكل هوية KIB Finance وتوجه كل قراراتنا
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
            className="flex gap-5 mx-auto justify-evenly flex-wrap md:flex-nowrap"
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
                  minWidth: '180px',
                }}
              >
                {/* Gradient top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl"
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
                    className="text-base font-black mb-1"
                    style={{
                      fontFamily: 'Cairo, sans-serif',
                      color: '#1a1a2e',
                    }}
                  >
                    {principle.title}
                  </p>
                  <p
                    className="text-xs"
                    style={{
                      fontFamily: 'Tajawal, sans-serif',
                      background: principle.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {principle.subtitle}
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
