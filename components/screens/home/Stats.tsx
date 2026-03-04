"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  TrendingUpIcon,
  UsersIcon,
  AwardIcon,
  GlobeIcon,
  ShieldCheckIcon,
  ZapIcon } from
'lucide-react';
import { useTranslations } from 'next-intl';
interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  prefix?: string;
  key: string;
  color: string;
  bg: string;
}
const statsData: StatItem[] = [
{
  icon: TrendingUpIcon,
  value: 500,
  suffix: '+',
  key: 'files',
  color: 'text-gold',
  bg: 'bg-gold/10'
},
{
  icon: UsersIcon,
  value: 200,
  suffix: '+',
  key: 'clients',
  color: 'text-teal',
  bg: 'bg-teal/10'
},
{
  icon: AwardIcon,
  value: 15,
  suffix: '+',
  key: 'experience',
  color: 'text-coral',
  bg: 'bg-coral/10'
},
{
  icon: GlobeIcon,
  value: 20,
  suffix: '+',
  key: 'funders',
  color: 'text-emerald',
  bg: 'bg-emerald/10'
},
{
  icon: ShieldCheckIcon,
  value: 98,
  suffix: '%',
  key: 'successRate',
  color: 'text-gold',
  bg: 'bg-gold/10'
},
{
  icon: ZapIcon,
  value: 48,
  suffix: 'h',
  key: 'responseTime',
  color: 'text-teal',
  bg: 'bg-teal/10'
}];

function CountUp({
  target,
  suffix,
  prefix = '',
  isActive





}: {target: number;suffix: string;prefix?: string;isActive: boolean;}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isActive) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isActive, target]);
  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>);

}
export function Stats() {
  const t = useTranslations('financeHome.stats');
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  return (
    <section className=" bg-[#1e242e] relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal/8 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
            'radial-gradient(circle, #E5A00D 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />

      </div>

      <div className=" p-[5%] relative z-10">
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

          <span className="inline-block text-gold home-badge-text font-bold tracking-widest uppercase mb-3 border border-gold/30 rounded-full px-4 py-1">
            {t('badge')}
          </span>
          <h2 className="home-section-heading font-black text-white mb-4">
            {t('title')} <span className="gradient-text-gold">{t('titleHighlight')}</span>
          </h2>
          <p className="text-white/50 home-section-subtitle">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {statsData.map((stat, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={
            isInView ?
            {
              opacity: 1,
              scale: 1
            } :
            {}
            }
            transition={{
              delay: i * 0.1,
              duration: 0.5
            }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/8 hover:border-white/20 transition-all duration-300 backdrop-blur-sm">

              <div
              className={`w-12 h-12 ${stat.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>

                <stat.icon size={24} className={stat.color} />
              </div>
              <div
              className={`home-stat-number font-black mb-2 ${stat.color}`}>

                <CountUp
                target={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                isActive={isInView} />

              </div>
              <div className="text-white font-bold home-stat-label mb-1">
                {t(`items.${stat.key}.label` as any)}
              </div>
              <div className="text-white/40 home-small-label">
                {t(`items.${stat.key}.sublabel` as any)}
              </div>
            </motion.div>
          )}
        </div>
      </div>

    
    </section>);

}