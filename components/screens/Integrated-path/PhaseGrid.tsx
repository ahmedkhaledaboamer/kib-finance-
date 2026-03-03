"use client"
import React from 'react'
import {
  SearchIcon,
  Building2Icon,
  ShieldIcon,
  BarChart3Icon,
  TargetIcon,
  PresentationIcon,
  Settings2Icon,
  CheckCircle2Icon,
  HandshakeIcon,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { PhaseCard } from '@/components/screens/Integrated-path/PhaseCard'
import { useTranslations } from 'next-intl'

const phaseConfig = [
  { gradient: 'linear-gradient(135deg, #ff6b35, #f7931e)', glowColor: '#ff6b35', Icon: SearchIcon },
  { gradient: 'linear-gradient(135deg, #00c9b1, #00e676)', glowColor: '#00c9b1', Icon: Building2Icon },
  { gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)', glowColor: '#8b5cf6', Icon: ShieldIcon },
  { gradient: 'linear-gradient(135deg, #f59e0b, #f97316)', glowColor: '#f59e0b', Icon: BarChart3Icon },
  { gradient: 'linear-gradient(135deg, #ef4444, #f97316)', glowColor: '#ef4444', Icon: TargetIcon },
  { gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)', glowColor: '#06b6d4', Icon: PresentationIcon },
  { gradient: 'linear-gradient(135deg, #7c3aed, #a855f7)', glowColor: '#7c3aed', Icon: Settings2Icon },
  { gradient: 'linear-gradient(135deg, #10b981, #06b6d4)', glowColor: '#10b981', Icon: CheckCircle2Icon },
  { gradient: 'linear-gradient(135deg, #f43f5e, #ec4899)', glowColor: '#f43f5e', Icon: HandshakeIcon },
]

export function PhaseGrid({ isRTL }: { isRTL: boolean }) {
  const t = useTranslations('integratedPath')
  const phasesData = t.raw('phases') as Array<{ title: string; subtitle: string; description: string; details: string[] }>
  const phases = phasesData.map((p, i) => ({
    phase: i + 1,
    title: p.title,
    subtitle: p.subtitle,
    description: p.description,
    details: p.details,
    gradient: phaseConfig[i].gradient,
    glowColor: phaseConfig[i].glowColor,
    Icon: phaseConfig[i].Icon,
  }))
  return (
    <section
      className="relative py-24 px-[5%]"
      style={{
        background: '#ffffff',
      }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Section header */}
      <div className=" mx-auto mb-16 text-center">
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
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full home-badge-text font-bold tracking-widest uppercase mb-4"
            style={{
              fontFamily: 'Cairo, sans-serif',
              background:
                'linear-gradient(135deg, rgba(255,107,53,0.15), rgba(255,200,0,0.15))',
              border: '1px solid rgba(255,165,0,0.4)',
              color: '#c2710c',
            }}
          >
            {t('phaseGrid.badge')}
          </span>
          <h2
            className="home-section-heading font-black mb-4"
            style={{
              fontFamily: 'Cairo, sans-serif',
              color: '#1a1a2e',
            }}
          >
            {t('phaseGrid.title')}
            <span
              className="mx-3"
              style={{
                background: 'linear-gradient(135deg, #ff6b35, #f59e0b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
              }}
            >
              {t('phaseGrid.titleHighlight')}
            </span>
          </h2>
          <p
            className="home-body-large mx-auto"
            style={{
              fontFamily: 'Tajawal, sans-serif',
              color: 'rgba(0,0,0,0.5)',
            }}
          >
            {t('phaseGrid.subtitle')}
          </p>
        </motion.div>
      </div>

      {/* Mosaic grid */}
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto">
        {/* Phase 1 - large */}
        <div className="lg:col-span-2">
          <PhaseCard {...phases[0]} index={0} isRTL={isRTL}/>
        </div>
        {/* Phase 2 */}
        <PhaseCard {...phases[1]} index={1} isRTL={isRTL}/>
        {/* Phase 3 */}
        <PhaseCard {...phases[2]} index={2} isRTL={isRTL}/>
        {/* Phase 4 - large */}
        <div className="lg:col-span-2">
          <PhaseCard {...phases[3]} index={3} isRTL={isRTL}/>
        </div>
        {/* Phase 5 */}
        <PhaseCard {...phases[4]} index={4} isRTL={isRTL}/>
        {/* Phase 6 */}
        <PhaseCard {...phases[5]} index={5} isRTL={isRTL}/>
        {/* Phase 7 */}
        <PhaseCard {...phases[6]} index={6} isRTL={isRTL}/>
        {/* Phase 8 - large */}
        <div className="lg:col-span-2">
          <PhaseCard {...phases[7]} index={7} isRTL={isRTL}/>
        </div>
        {/* Phase 9 */}
        <PhaseCard {...phases[8]} index={8} isRTL={isRTL}/>
      </div>
    </section>
  )
}
