"use client";
import React, { useEffect, useRef } from 'react';
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate } from
'framer-motion';
import { Briefcase, Users, Clock, Banknote } from 'lucide-react';
function Counter({
  from,
  to,
  duration = 2,
  suffix = ''





}: {from: number;to: number;duration?: number;suffix?: string;}) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const display = useTransform(rounded, (latest) => `${latest}${suffix}`);
  useEffect(() => {
    if (inView) {
      animate(count, to, {
        duration,
        ease: 'easeOut'
      });
    }
  }, [count, inView, to, duration]);
  return <motion.span ref={ref}>{display}</motion.span>;
}
export function StatsSection() {
  const stats = [
  {
    id: 1,
    value: 30,
    suffix: '+',
    label: 'خدمة تمويلية',
    desc: 'خدمة تمويلية متنوعة',
    icon: Briefcase
  },
  {
    id: 2,
    value: 500,
    suffix: '+',
    label: 'عميل',
    desc: 'يثقون بخدماتنا',
    icon: Users
  },
  {
    id: 3,
    value: 15,
    suffix: '+',
    label: 'سنة خبرة',
    desc: 'من الخبرة المتراكمة',
    icon: Clock
  },
  {
    id: 4,
    value: 2,
    suffix: ' مليار+',
    label: 'درهم تمويلات',
    desc: 'في التمويلات الناجحة',
    icon: Banknote
  }];

  return (
    <section className="py-24 bg-[#1E3A5F] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-[#059669] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 translate-x-1/2 translate-y-1/2 animate-pulse"
        style={{
          animationDelay: '1s'
        }}>
      </div>

      <div className=" p-[5%] relative z-10">
        <div className="text-center mb-16">
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
            className="text-4xl md:text-5xl font-bold text-white mb-4">

            أرقامنا <span className="text-[#D4AF37]">تتحدث</span>
          </motion.h2>
          <motion.div
            initial={{
              scaleX: 0
            }}
            whileInView={{
              scaleX: 1
            }}
            viewport={{
              once: true
            }}
            className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{
                  opacity: 0,
                  scale: 0.8
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: 'spring'
                }}
                className="relative flex flex-col items-center justify-center p-6 group">

                {/* Circular Progress Ring Background */}
                <svg
                  className="absolute inset-0 w-full h-full -rotate-90"
                  viewBox="0 0 100 100">

                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="2" />

                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="2"
                    strokeDasharray="283"
                    initial={{
                      strokeDashoffset: 283
                    }}
                    whileInView={{
                      strokeDashoffset: 0
                    }}
                    viewport={{
                      once: true
                    }}
                    transition={{
                      duration: 2,
                      delay: index * 0.2,
                      ease: 'easeOut'
                    }}
                    className="opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

                </svg>

                <div
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3 text-[#D4AF37]"
                  dir="ltr">

                  <Icon className="w-6 h-6" />
                </div>

                <div
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#D4AF37] mb-2 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                  dir="ltr">

                  <Counter from={0} to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-lg md:text-xl font-bold text-white/90">
                  {stat.label}
                </div>
                <div className="text-sm text-white/50 mt-1 text-center">
                  {stat.desc}
                </div>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}