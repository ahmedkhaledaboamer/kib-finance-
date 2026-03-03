'use client';
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Landmark,
  Briefcase,
  Globe2,
  Shield,
  TrendingUp,
  Banknote,
  Award } from 'lucide-react';
import { useTranslations } from 'next-intl';

const PARTNER_ICONS = [Landmark, Building2, Banknote, Globe2, Shield, TrendingUp, Award, Briefcase];
const PARTNER_COLORS = ['text-teal', 'text-gold', 'text-amber', 'text-royal', 'text-emerald', 'text-teal', 'text-gold', 'text-amber'];

export function Partners() {
  const t = useTranslations('financingPath.partners');
  const names = useMemo(() => t.raw('names') as string[], [t]);
  const partners = useMemo(() => names.map((name, i) => ({
    name,
    icon: PARTNER_ICONS[i],
    color: PARTNER_COLORS[i],
  })), [names]);
  const allPartners = [...partners, ...partners];
  return (
    <section className="relative overflow-hidden">
      {/* Full-width photo banner */}
      <div className="relative overflow-hidden home-image-full">
        <img
          src="https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&q=80&w=2000"
          alt={t('imageAlt')}
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-black" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.h2
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              className="home-section-heading font-bold text-white mb-3">

              {t('title')} <span className="text-gold">{t('titleHighlight')}</span>
            </motion.h2>
            <motion.p
              initial={{
                opacity: 0,
                y: 15
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.15
              }}
              className="home-section-subtitle text-white/80 mx-auto px-6">

              {t('subtitle')}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Partner logos area */}
      <div className="py-16 bg-white border-b border-gray-100">
        {/* Marquee Row 1 */}
        <div className="relative mb-6">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="flex gap-6 animate-marquee-rtl">
            {allPartners.map((partner, i) => {
              const Icon = partner.icon;
              return (
                <div
                  key={`row1-${i}`}
                  className="flex-shrink-0 w-56 bg-gray-50 border border-gray-100 rounded-xl p-6 flex items-center gap-4 hover:bg-white hover:shadow-lg hover:border-gold/30 transition-all duration-300 group cursor-default">

                  <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className={`w-6 h-6 ${partner.color}`} />
                  </div>
                  <span className="font-bold text-dark text-sm whitespace-nowrap">
                    {partner.name}
                  </span>
                </div>);

            })}
          </div>
        </div>

        {/* Marquee Row 2 */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="flex gap-6 animate-marquee-ltr">
            {[...allPartners].reverse().map((partner, i) => {
              const Icon = partner.icon;
              return (
                <div
                  key={`row2-${i}`}
                  className="flex-shrink-0 w-56 bg-gray-50 border border-gray-100 rounded-xl p-6 flex items-center gap-4 hover:bg-white hover:shadow-lg hover:border-teal/30 transition-all duration-300 group cursor-default">

                  <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className={`w-6 h-6 ${partner.color}`} />
                  </div>
                  <span className="font-bold text-dark text-sm whitespace-nowrap">
                    {partner.name}
                  </span>
                </div>);

            })}
          </div>
        </div>

        {/* Trust badge */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="flex justify-center mt-12">

          <div className="inline-flex items-center gap-3 bg-cream px-6 py-3 rounded-full border border-gold/20">
            <Shield className="w-5 h-5 text-emerald" />
            <span className="text-sm font-medium text-gray-600">
              {t('trustBadge')}
            </span>
          </div>
        </motion.div>
      </div>
    </section>);

}