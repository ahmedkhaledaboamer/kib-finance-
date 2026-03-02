"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, PenTool, Settings, Activity, BarChart3 } from 'lucide-react';
import { useTranslations } from 'next-intl';
const icons = [Search, PenTool, Settings, Activity, BarChart3];
export function ProcessSection() {
  const t = useTranslations('servicesPage.process');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'center center']
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const stepsRaw = t.raw('steps') as { title: string; subtitle: string; shortDesc: string; desc: string }[];
  const steps = stepsRaw.map((s, i) => ({ id: i + 1, ...s, icon: icons[i] }));

  return (
    <section
      ref={containerRef}
      className="  bg-[#FDF8F0] relative overflow-hidden">

      <div className=" p-[5%] relative z-10">
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
            className="home-section-heading font-black text-[#1E3A5F] mb-4">

            {t('heading')} <span className="text-[#D4AF37]">{t('headingHighlight')}</span>
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

                  <h3 className="home-body-large font-bold text-[#1E3A5F] mb-1">
                    {step.title}
                  </h3>
                  <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-3 block">
                    {step.subtitle}
                  </span>
                  <p className="home-small-label text-gray-800 font-medium mb-2">
                    {step.shortDesc}
                  </p>
                  <p className="home-small-label text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>);

            })}
          </div>
        </div>
      </div>
    </section>);

}