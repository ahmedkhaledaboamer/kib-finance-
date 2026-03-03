'use client';
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUpIcon, LayersIcon, UsersIcon, AwardIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: React.ElementType;
  color: string;
}

const statMeta = [
  { icon: LayersIcon, color: '#2563EB', value: 10, suffix: '' },
  { icon: TrendingUpIcon, color: '#4F46E5', value: 7, suffix: '' },
  { icon: UsersIcon, color: '#06B6D4', value: 10, suffix: '' },
  { icon: AwardIcon, color: '#F59E0B', value: 100, suffix: '%' }
];

function CountUp({
  value,
  suffix,
  isInView




}: {value: number;suffix: string;isInView: boolean;}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);
  return (
    <span>
      {count}
      {suffix}
    </span>);

}

export function StatsSection({ isRTL }: { isRTL: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  const t = useTranslations('implementationMechanism.stats');
  const itemsFromMessages = t.raw('items') as { label: string; sublabel: string }[];
  const stats: StatItem[] = itemsFromMessages.map((item, index) => ({
    label: item.label,
    sublabel: item.sublabel,
    icon: statMeta[index].icon,
    color: statMeta[index].color,
    value: statMeta[index].value,
    suffix: statMeta[index].suffix
  }));

  return (
    <section
      className="py-20 relative overflow-hidden px-[5%]"
      dir={isRTL ? 'rtl' : 'ltr'}
      ref={ref}>
      {/* Amber gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
          'linear-gradient(135deg, #F59E0B 0%, #EF4444 40%, #DC2626 100%)'
        }} />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
          'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.6) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />


      <div className="relative z-10 mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
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
          }}>

          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            {t('title')}
          </h2>
          <p className="text-amber-100 text-lg font-medium">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) =>
          <motion.div
            key={stat.label}
            className="text-center p-6 rounded-3xl"
            style={{
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.25)'
            }}
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.9
            }}
            animate={
            isInView ?
            {
              opacity: 1,
              y: 0,
              scale: 1
            } :
            {}
            }
            transition={{
              delay: 0.1 + i * 0.1,
              type: 'spring',
              stiffness: 200
            }}>

              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon size={22} className="text-white" />
              </div>
              <div className="text-4xl sm:text-5xl font-black text-white mb-2">
                <CountUp
                value={stat.value}
                suffix={stat.suffix}
                isInView={isInView} />

              </div>
              <p className="text-white font-black text-base mb-1">
                {stat.label}
              </p>
              <p className="text-amber-100 text-xs font-medium leading-relaxed">
                {stat.sublabel}
              </p>
            </motion.div>
          )}
        </div>

        {/* Bottom banner */}
        <motion.div
          className="mt-12 p-6 rounded-3xl text-center"
          style={{
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.25)'
          }}
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
            delay: 0.6
          }}>

          <p className="text-white text-lg sm:text-xl font-black leading-relaxed">
            {t('quote')}
          </p>
        </motion.div>
      </div>
    </section>);

}