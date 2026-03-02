"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, PenTool, Settings, Activity, BarChart3 } from 'lucide-react';
export function ProcessSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'center center']
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const steps = [
  {
    id: 1,
    title: 'التحليل',
    subtitle: 'Analysis',
    shortDesc: 'تحليل دقيق لاحتياجاتك المالية',
    desc: 'نبدأ بفهم عميق لوضعك المالي وأهدافك',
    icon: Search
  },
  {
    id: 2,
    title: 'التصميم',
    subtitle: 'Design',
    shortDesc: 'تصميم حل تمويلي مخصص',
    desc: 'نصمم حلاً فريداً يتناسب مع احتياجاتك',
    icon: PenTool
  },
  {
    id: 3,
    title: 'التنفيذ',
    subtitle: 'Execution',
    shortDesc: 'تنفيذ احترافي وسريع',
    desc: 'ننفذ بسرعة ودقة مع ضمان الامتثال الكامل',
    icon: Settings
  },
  {
    id: 4,
    title: 'المتابعة',
    subtitle: 'Follow-up',
    shortDesc: 'متابعة مستمرة وإدارة مؤسسية',
    desc: 'نقدم متابعة مستمرة وتقارير دورية',
    icon: Activity
  },
  {
    id: 5,
    title: 'التقييم',
    subtitle: 'Evaluation',
    shortDesc: 'تقييم شامل للنتائج',
    desc: 'نقيّم النتائج ونطور الحلول باستمرار',
    icon: BarChart3
  }];

  return (
    <section
      ref={containerRef}
      className="py-24 bg-[#FDF8F0] relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
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
            className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4">

            كيف <span className="text-[#D4AF37]">نعمل</span>
          </motion.h2>
          <motion.div
            initial={{
              scale: 0
            }}
            whileInView={{
              scale: 1
            }}
            viewport={{
              once: true
            }}
            className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full" />

        </div>

        <div className="relative">
          {/* Animated SVG Path for Desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-2 z-0">
            <svg width="100%" height="100%" preserveAspectRatio="none">
              <line
                x1="100%"
                y1="50%"
                x2="0%"
                y2="50%"
                stroke="#E5E7EB"
                strokeWidth="2"
                strokeDasharray="8 8" />

              <motion.line
                x1="100%"
                y1="50%"
                x2="0%"
                y2="50%"
                stroke="url(#gradient)"
                strokeWidth="3"
                style={{
                  pathLength
                }} />

              <defs>
                <linearGradient id="gradient" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
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
                    delay: index * 0.2
                  }}
                  className="relative flex flex-col items-center text-center group bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">

                  {/* Mobile Connecting Line */}
                  {index !== steps.length - 1 &&
                  <div className="lg:hidden absolute top-24 bottom-[-3rem] w-0.5 bg-gray-200 z-0">
                      <motion.div
                      initial={{
                        scaleY: 0
                      }}
                      whileInView={{
                        scaleY: 1
                      }}
                      viewport={{
                        once: true
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3
                      }}
                      className="w-full h-full bg-gradient-to-b from-[#D4AF37] to-[#059669] origin-top" />

                    </div>
                  }

                  <motion.div
                    whileInView={{
                      y: [0, -10, 0]
                    }}
                    viewport={{
                      once: true
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2 + 0.3
                    }}
                    whileHover={{
                      y: -10
                    }}
                    className="w-20 h-20 rounded-full bg-white shadow-xl border-4 border-[#FDF8F0] flex items-center justify-center mb-6 relative z-10 group-hover:border-[#D4AF37] transition-colors duration-300">

                    <Icon className="w-8 h-8 text-[#1E3A5F] group-hover:text-[#D4AF37] transition-colors duration-300" />
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#1E3A5F] text-white flex items-center justify-center font-bold border-2 border-white shadow-sm text-sm">
                      {step.id}
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-1">
                    {step.title}
                  </h3>
                  <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-3 block">
                    {step.subtitle}
                  </span>
                  <p className="text-gray-800 font-medium mb-2 text-sm">
                    {step.shortDesc}
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>);

            })}
          </div>
        </div>
      </div>
    </section>);

}