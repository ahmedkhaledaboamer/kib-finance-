'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';
import { Banknote, Users, Layers, Clock } from 'lucide-react';
import { useTranslations } from 'next-intl';
interface StatItemProps {
  end: number;
  suffix: string;
  label: string;
  delay: number;
  icon: React.ElementType;
}
function StatItem({ end, suffix, label, delay, icon: Icon }: StatItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const count = useCountUp(end, 2000, isInView);
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 30
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true
      }}
      transition={{
        duration: 0.6,
        delay
      }}
      className="text-center bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">

      <div className="flex justify-center mb-4">
        <Icon className="w-10 h-10 text-gold" />
      </div>
      <div className="home-stat-number font-bold text-white mb-2 flex items-center justify-center dir-ltr">
        <span className="text-gold">{suffix}</span>
        <span>{count}</span>
      </div>
      <div className="text-gray-200 font-medium home-stat-label">{label}</div>
    </motion.div>);

}
export function Stats() {
  const t = useTranslations('financingPath.stats');
  return (
    <section className="relative py-20 z-30 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-[#1C222E] ">
         

        <div className="absolute inset-0 bg-gradient-teal-dark mix-blend-multiply" />
        <div className="absolute inset-0 bg-dark/60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatItem
            icon={Banknote}
            end={500}
            suffix="+"
            label={t('label1')}
            delay={0.1} />

          <StatItem
            icon={Users}
            end={50}
            suffix="+"
            label={t('label2')}
            delay={0.2} />

          <StatItem
            icon={Layers}
            end={8}
            suffix=""
            label={t('label3')}
            delay={0.3} />

          <StatItem
            icon={Clock}
            end={15}
            suffix=""
            label={t('label4')}
            delay={0.4} />

        </div>
      </div>
    </section>);

}