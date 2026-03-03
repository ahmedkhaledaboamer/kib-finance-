"use client";
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  ShieldCheckIcon,
  LockIcon,
  ScaleIcon,
  ZapIcon,
  BrainIcon,
  ClockIcon,
  HeartHandshakeIcon,
  StarIcon,
  LightbulbIcon,
  UserCheckIcon,
  TargetIcon,
  LeafIcon } from
'lucide-react';
import { useTranslations } from 'next-intl';

const values = [
{
  icon: ShieldCheckIcon,
  key: 'professionalIntegrity',
  color: 'bg-gold/10 text-gold'
},
{
  icon: LockIcon,
  key: 'fullConfidentiality',
  color: 'bg-teal/10 text-teal'
},
{
  icon: ScaleIcon,
  key: 'strictGovernance',
  color: 'bg-coral/10 text-coral'
},
{
  icon: ZapIcon,
  key: 'operationalQuality',
  color: 'bg-emerald/10 text-emerald'
},
{
  icon: BrainIcon,
  key: 'financialResponsibility',
  color: 'bg-gold/10 text-gold'
},
{
  icon: ClockIcon,
  key: 'respectTime',
  color: 'bg-teal/10 text-teal'
},
{
  icon: HeartHandshakeIcon,
  key: 'mutualTrust',
  color: 'bg-coral/10 text-coral'
},
{
  icon: StarIcon,
  key: 'institutionalProfessionalism',
  color: 'bg-emerald/10 text-emerald'
},
{
  icon: LightbulbIcon,
  key: 'continuousInnovation',
  color: 'bg-gold/10 text-gold'
},
{
  icon: UserCheckIcon,
  key: 'clientService',
  color: 'bg-teal/10 text-teal'
},
{
  icon: TargetIcon,
  key: 'resultCommitment',
  color: 'bg-coral/10 text-coral'
},
{
  icon: LeafIcon,
  key: 'sustainability',
  color: 'bg-emerald/10 text-emerald'
}];

export function Benefits() {
  const t = useTranslations('financeHome.benefits');
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  return (
    <section id="benefits" className=" bg-cream overflow-hidden" ref={ref}>
      <div className=" p-[5%]">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={
          isInView ?
          {
            opacity: 1,
            y: 0
          } :
          {}
          }
          transition={{
            duration: 0.6
          }}
          className="text-center mb-16">

          <span className="inline-block text-teal home-badge-text font-bold tracking-widest uppercase mb-3 border border-teal/30 rounded-full px-4 py-1">
            {t('badge')}
          </span>
          <h2 className="home-section-heading font-black text-navy mb-4">
            {t('title')} <span className="gradient-text">{t('titleHighlight')}</span>
          </h2>
          <p className="text-gray-500 home-section-subtitle">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {values.map((value, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={
            isInView ?
            {
              opacity: 1,
              y: 0
            } :
            {}
            }
            transition={{
              delay: i * 0.06,
              duration: 0.5
            }}
            whileHover={{
              y: -4,
              boxShadow: '0 20px 40px rgba(15,23,42,0.1)'
            }}
            className="flex flex-col items-center justify-center md:items-start md:justify-start bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-default ">

              <div
              className={`w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl ${value.color} flex items-center justify-center mb-4`}>

                <value.icon size={25} />
              </div>
              <h3 className="font-bold text-navy mb-1.5 home-body-large">
                {t(`values.${value.key}.title` as any)}
              </h3>
              <p className="text-gray-500 leading-relaxed home-small-label">
                {t(`values.${value.key}.desc` as any)}
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Wave divider → Stats (zinc-950) */}
      <div className="wave-divider mt-16">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">

          <path
            d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
            fill="#1e242e" />

        </svg>
      </div>
    </section>);

}