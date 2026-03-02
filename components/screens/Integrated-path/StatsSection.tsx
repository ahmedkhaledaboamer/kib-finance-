import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Layers, Users, CheckCircle, Clock } from 'lucide-react';
function Counter({
  from,
  to,
  duration = 2.5,
  suffix = ''





}: {from: number;to: number;duration?: number;suffix?: string;}) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, {
    once: true,
    margin: '-50px'
  });
  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        ease: [0.22, 1, 0.36, 1],
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value).toString() + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, from, to, duration, suffix]);
  return (
    <span ref={nodeRef}>
      {from}
      {suffix}
    </span>);

}
export function StatsSection() {
  const stats = [
  {
    value: 9,
    label: 'مراحل متكاملة',
    suffix: '',
    icon: Layers,
    color: 'text-kep-green'
  },
  {
    value: 500,
    label: 'عميل',
    suffix: '+',
    icon: Users,
    color: 'text-kep-gold'
  },
  {
    value: 98,
    label: 'نسبة موافقة',
    suffix: '٪',
    icon: CheckCircle,
    color: 'text-kep-orange'
  },
  {
    value: 15,
    label: 'سنة خبرة',
    suffix: '+',
    icon: Clock,
    color: 'text-kep-purple'
  }];

  return (
    <section className="py-32 bg-kep-navy-dark relative overflow-hidden">
      {/* Subtle Corner Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-kep-green/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-kep-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  y: 30
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: idx * 0.15,
                  type: 'spring',
                  stiffness: 100,
                  damping: 15
                }}
                className="flex flex-col items-center text-center group">

                <div
                  className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6`}>

                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>

                <div
                  className="text-4xl md:text-5xl font-cairo font-bold text-white mb-4"
                  dir="ltr">

                  <Counter from={0} to={stat.value} suffix={stat.suffix} />
                </div>

                <div
                  className={`w-12 h-1 rounded-full bg-current ${stat.color} mb-4 opacity-50`} />


                <div className="text-gray-300 font-cairo font-bold text-lg tracking-wide group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}