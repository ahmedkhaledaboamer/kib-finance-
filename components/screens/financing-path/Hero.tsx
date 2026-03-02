'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Shield, Clock, Handshake, ArrowLeft } from 'lucide-react';
export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-dark">

      {/* Parallax Background — fully visible */}
      <motion.div
        style={{
          y
        }}
        className="absolute inset-0 w-full h-[120%]">

        <img
          src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=2000"
          alt="برج المملكة - الرياض"
          className="w-full h-full object-cover" />

        {/* Gradient: transparent at top so image shows, dark at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-dark/50 to-dark" />
        {/* Subtle gold tint at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gold/5 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{
          opacity
        }}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20">

        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{
              opacity: 0,
              y: -15
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.3
            }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-bold mb-10 border border-white/15">

            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            المسار التنفيذي VIP
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.2, 0.65, 0.3, 0.9]
            }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold mb-8 leading-[1.15] text-white">

            المسار التمويلي
            <br />
            <span className="text-gradient-gold">التنفيذي</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.7,
              delay: 0.9
            }}
            className="text-lg md:text-xl text-gray-300 mb-14 max-w-2xl mx-auto leading-relaxed">

            منظومة تمويل نخبوية تُدار بمعايير المؤسسات المالية العالمية.
            <br className="hidden md:block" />
            مسار مخصص للعملاء الذين تتطلب احتياجاتهم المالية معالجة دقيقة ورؤية
            استراتيجية.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: 1.2
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">

            <button
              onClick={() =>
              document.getElementById('cta-section')?.scrollIntoView({
                behavior: 'smooth'
              })
              }
              className="relative overflow-hidden group bg-gradient-gold-amber text-white font-bold text-lg px-10 py-4 rounded-xl shadow-gold-subtle hover:shadow-gold-hover hover:-translate-y-0.5 transition-all duration-300">

              <span className="relative z-10 flex items-center gap-2">
                طلب استشارة تنفيذية
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 -translate-x-full bg-white/20 group-hover:animate-shine z-0" />
            </button>

            <button
              onClick={() =>
              document.getElementById('timeline')?.scrollIntoView({
                behavior: 'smooth'
              })
              }
              className="text-white/80 hover:text-white font-bold text-lg px-8 py-4 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300">

              استكشف المسار
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: 1.5
            }}
            className="flex flex-wrap justify-center gap-3">

            <div className="flex items-center gap-2 bg-white/8 backdrop-blur-sm px-4 py-2.5 rounded-lg border border-white/10 text-sm text-gray-300">
              <div className="w-7 h-7 rounded-md bg-gold/20 flex items-center justify-center">
                <Shield className="w-3.5 h-3.5 text-gold" />
              </div>
              <span>سرية تامة 100%</span>
            </div>
            <div className="flex items-center gap-2 bg-white/8 backdrop-blur-sm px-4 py-2.5 rounded-lg border border-white/10 text-sm text-gray-300">
              <div className="w-7 h-7 rounded-md bg-teal/20 flex items-center justify-center">
                <Clock className="w-3.5 h-3.5 text-teal" />
              </div>
              <span>8 مراحل دقيقة</span>
            </div>
            <div className="flex items-center gap-2 bg-white/8 backdrop-blur-sm px-4 py-2.5 rounded-lg border border-white/10 text-sm text-gray-300">
              <div className="w-7 h-7 rounded-md bg-amber/20 flex items-center justify-center">
                <Handshake className="w-3.5 h-3.5 text-amber" />
              </div>
              <span>شراكة مستمرة</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{
          opacity
        }}
        animate={{
          y: [0, 8, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: 'easeInOut'
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">

        <div className="flex flex-col items-center gap-2">
          <span className="text-white/40 text-xs font-medium">
            اكتشف المزيد
          </span>
          <ChevronDown className="w-6 h-6 text-gold/70" />
        </div>
      </motion.div>

      {/* Bottom fade to white (smooth transition to next section) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20" />
    </section>);

}