import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUpIcon, LayersIcon, UsersIcon, AwardIcon } from 'lucide-react';
interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: React.ElementType;
  color: string;
}
const stats: StatItem[] = [
{
  value: 10,
  suffix: '',
  label: 'مراحل تنفيذية',
  sublabel: 'مسار متكامل من البداية للنهاية',
  icon: LayersIcon,
  color: '#2563EB'
},
{
  value: 7,
  suffix: '',
  label: 'وحدات متخصصة',
  sublabel: 'تعمل بتناغم وتكامل',
  icon: TrendingUpIcon,
  color: '#4F46E5'
},
{
  value: 10,
  suffix: '',
  label: 'مديرين تنفيذيين',
  sublabel: 'خبرة عالمية وكفاءة عالية',
  icon: UsersIcon,
  color: '#06B6D4'
},
{
  value: 100,
  suffix: '%',
  label: 'معايير عالمية',
  sublabel: 'لا تقبل التنازل في الجودة',
  icon: AwardIcon,
  color: '#F59E0B'
}];

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
export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  return (
    <section className="py-20 relative overflow-hidden px-[5%]" dir="rtl" ref={ref}>
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
            المنظومة بالأرقام
          </h2>
          <p className="text-amber-100 text-lg font-medium">
            أرقام تعكس قوة المنظومة التشغيلية لكيه إي بي للتمويل
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
            "المؤسسة التي تمتلك هيكلًا إداريًا واضحًا، وصلاحيات دقيقة، ومسارًا
            تنفيذيًا محكمًا،
            <br className="hidden sm:block" />
            هي المؤسسة القادرة على تقديم تمويل آمن، مستدام، وذو قيمة
            استراتيجية."
          </p>
        </motion.div>
      </div>
    </section>);

}