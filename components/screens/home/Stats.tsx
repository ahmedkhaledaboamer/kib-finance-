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
interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
  color: string;
  bg: string;
}
const statsData: StatItem[] = [
{
  icon: TrendingUpIcon,
  value: 500,
  suffix: '+',
  label: 'ملف تمويلي',
  sublabel: 'تم إنجازه بنجاح',
  color: 'text-gold',
  bg: 'bg-gold/10'
},
{
  icon: UsersIcon,
  value: 200,
  suffix: '+',
  label: 'عميل راضٍ',
  sublabel: 'يثقون بخدماتنا',
  color: 'text-teal',
  bg: 'bg-teal/10'
},
{
  icon: AwardIcon,
  value: 15,
  suffix: '+',
  label: 'سنة خبرة',
  sublabel: 'في القطاع المالي',
  color: 'text-coral',
  bg: 'bg-coral/10'
},
{
  icon: GlobeIcon,
  value: 20,
  suffix: '+',
  label: 'جهة تمويلية',
  sublabel: 'شركاء استراتيجيون',
  color: 'text-emerald',
  bg: 'bg-emerald/10'
},
{
  icon: ShieldCheckIcon,
  value: 98,
  suffix: '%',
  label: 'نسبة نجاح',
  sublabel: 'في إتمام الملفات',
  color: 'text-gold',
  bg: 'bg-gold/10'
},
{
  icon: ZapIcon,
  value: 48,
  suffix: 'h',
  label: 'متوسط الاستجابة',
  sublabel: 'لكل طلب تمويلي',
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
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  return (
    <section className=" bg-zinc-950 relative overflow-hidden" ref={ref}>
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

          <span className="inline-block text-gold font-bold text-sm tracking-widest uppercase mb-3 border border-gold/30 rounded-full px-4 py-1">
            أرقامنا تتحدث
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            إنجازات <span className="gradient-text-gold">حقيقية</span>
          </h2>
          <p className="text-white/50   text-lg">
            أرقام تعكس ثقة عملائنا وخبرتنا المتراكمة في القطاع المالي
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
              className={`text-4xl lg:text-5xl font-black mb-2 ${stat.color}`}>

                <CountUp
                target={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                isActive={isInView} />

              </div>
              <div className="text-white font-bold mb-1">{stat.label}</div>
              <div className="text-white/40 text-sm">{stat.sublabel}</div>
            </motion.div>
          )}
        </div>

        {/* Bottom image */}
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
            delay: 0.6,
            duration: 0.6
          }}
          className="mt-16 rounded-3xl overflow-hidden relative h-56 lg:h-72">

          <img
            src="https://images.unsplash.com/photo-1560472355-536de3962603?w=1400&q=80"
            alt="نجاحات كيه إي بي"
            className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-gradient-to-l from-navy/90 via-navy/50 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-end px-10">
            <div className="text-start  ">
              <h3 className="text-2xl lg:text-3xl font-black text-white mb-2">
                نحن نقود القرارات المالية الكبرى
              </h3>
              <p className="text-white/60">بثبات، ورؤية، واحتراف</p>
            </div>
          </div>
        </motion.div>
      </div>

       
    </section>);

}