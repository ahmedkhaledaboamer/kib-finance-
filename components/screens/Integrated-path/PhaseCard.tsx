'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon, BoxIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
interface PhaseCardProps {
  phase: number
  title: string
  subtitle: string
  description: string
  details: string[]
  gradient: string
  glowColor: string
  Icon: typeof BoxIcon
  index: number
  large?: boolean
  isRTL: boolean
}
export function PhaseCard({
  phase,
  title,
  subtitle,
  description,
  details,
  gradient,
  glowColor,
  Icon,
  index,
  large = false,
  isRTL = false,
}: PhaseCardProps) {
  const t = useTranslations('integratedPath.phaseCard')
  const [expanded, setExpanded] = useState(false)
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        margin: '-50px',
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      className={`relative rounded-3xl overflow-hidden cursor-pointer gradient-border ${large ? 'md:col-span-2' : ''}`}
      style={{
        background: 'rgba(0,0,0,0.025)',
        border: '1px solid rgba(0,0,0,0.08)',
        boxShadow: `0 0 40px ${glowColor}15`,
      }}
      onClick={() => setExpanded(!expanded)}
      role="button"
      aria-expanded={expanded}
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && setExpanded(!expanded)}
    >
      {/* Gradient top bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: gradient,
        }}
      />

      {/* Background gradient glow */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${glowColor}, transparent 70%)`,
        }}
      />

      {/* Decorative corner shape */}
      <div
        className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none"
        style={{
          background: gradient,
          clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
        }}
      />

      <div className="relative z-10 p-6">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4" dir={isRTL ? "rtl" : "ltr"}>
          <div className="flex items-start gap-4">
            {/* Phase number badge */}
            <div
              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black"
              style={{
                background: gradient,
                fontFamily: 'Cairo, sans-serif',
                color: 'white',
                boxShadow: `0 4px 15px ${glowColor}50`,
              }}
            >
              {phase}
            </div>

            <div>
              <p
                className="home-badge-text font-semibold mb-1 tracking-wider uppercase"
                style={{
                  fontFamily: 'Cairo, sans-serif',
                  background: gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {subtitle}
              </p>
              <h3
                className="home-body-large font-black leading-tight"
                style={{
                  fontFamily: 'Cairo, sans-serif',
                  color: '#1a1a2e',
                }}
              >
                {title}
              </h3>
            </div>
          </div>

          {/* Icon */}
          <div
            className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${glowColor}30, ${glowColor}10)`,
              border: `1px solid ${glowColor}40`,
            }}
          >
            <Icon
              size={28}
              style={{
                color: glowColor,
              }}
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Description */}
        <p
          className="home-body-large leading-relaxed mb-4"
          style={{
            fontFamily: 'Tajawal, sans-serif',
            color: 'rgba(0,0,0,0.6)',
          }}
          dir={isRTL ? "rtl" : "ltr"}
        >
          {description}
        </p>

        {/* Expand toggle */}
        <div className="flex items-center justify-between" dir={isRTL ? "rtl" : "ltr"}>
          <span
            className="home-small-label font-semibold"
            style={{
              fontFamily: 'Tajawal, sans-serif',
              background: gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {expanded ? t('hideDetails') : t('viewDetails')}
          </span>
          <motion.div
            animate={{
              rotate: expanded ? 180 : 0,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <ChevronDownIcon
              size={16}
              style={{
                color: glowColor,
              }}
            />
          </motion.div>
        </div>

        {/* Expandable details */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: 'auto',
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.4,
                ease: 'easeInOut',
              }}
              className="overflow-hidden"
            >
              <div
                className="mt-4 pt-4"
                style={{
                  borderTop: `1px solid ${glowColor}30`,
                }}
                dir={isRTL ? "rtl" : "ltr"}
              >
                <ul className="space-y-2">
                  {details.map((detail, i) => (
                    <motion.li
                      key={i}
                      initial={{
                        opacity: 0,
                        x: 10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: i * 0.05,
                      }}
                      className="flex items-start gap-3 home-small-label"
                      style={{
                        fontFamily: 'Tajawal, sans-serif',
                        color: 'rgba(0,0,0,0.65)',
                      }}
                    >
                      <div
                        className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                        style={{
                          background: gradient,
                        }}
                      />
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
