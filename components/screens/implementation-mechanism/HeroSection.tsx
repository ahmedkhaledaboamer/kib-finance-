import React from 'react';
import { motion } from 'framer-motion';
import {
  ChevronDownIcon,
  PlayCircleIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  ZapIcon } from
'lucide-react';
import Link from 'next/link';
export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      dir="rtl">

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
          alt="آلية التنفيذ"
          className="w-full h-full object-cover" />

        <div
          className="absolute inset-0"
          style={{
            background:
            'linear-gradient(160deg, rgba(10,15,40,0.93) 0%, rgba(37,99,235,0.80) 50%, rgba(6,182,212,0.70) 100%)'
          }} />

        {/* Animated mesh overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
            'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />

      </div>

      {/* Floating shapes */}
      <motion.div
        className="absolute top-32 left-20 w-64 h-64 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, #06B6D4, transparent)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity
        }} />

      <motion.div
        className="absolute bottom-32 right-20 w-48 h-48 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, #F59E0B, transparent)'
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          delay: 2
        }} />


      {/* Content */}
      <div className="relative z-10  mx-auto px-4 sm:px-6 text-center text-white pt-20">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-bold border border-white/30"
          style={{
            background: 'rgba(255,255,255,0.15)'
          }}
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.7
          }}>

          <ZapIcon size={14} className="text-amber-300" />
          <span>منظومة تشغيل عالمية</span>
          <ZapIcon size={14} className="text-amber-300" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6"
          initial={{
            opacity: 0,
            y: 40
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.15
          }}>

          آلية التنفيذ
          <br />
          <span className="text-cyan-300">المؤسسية</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-blue-100 font-medium mx-auto mb-4 leading-relaxed"
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
            delay: 0.3
          }}>

          كيه إي بي للتمويل ش.ذ.م.م
        </motion.p>

        <motion.p
          className="text-base sm:text-lg text-blue-200 font-medium mx-auto mb-10 leading-relaxed"
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
            delay: 0.45
          }}>

          منظومة تشغيل عالمية تُدار بهيكل قيادي موحّد… وصلاحيات دقيقة… ومسار
          تنفيذي قائم على البيانات
        </motion.p>

        {/* Feature pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.55
          }}>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold">
            <ShieldCheckIcon size={14} className="text-cyan-300" />
            القيادة والحوكمة
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold">
            <TrendingUpIcon size={14} className="text-amber-300" />
            التحليل والمخاطر
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold">
            <ZapIcon size={14} className="text-green-300" />
            التنفيذ والمتابعة
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
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
            delay: 0.65
          }}>

          <Link
            href="/implementation-mechanism#form"
            className="px-8 py-4 rounded-2xl text-white font-black text-lg shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #F59E0B, #EF4444)'
            }}>

            ابدأ طلبك الآن
          </Link>
          <a
            href="#process"
            className="px-8 py-4 rounded-2xl font-black text-lg border-2 border-white/40 text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">

            <PlayCircleIcon size={20} />
            استعرض المراحل
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 mx-auto"
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
            delay: 0.8
          }}>

          <div className="text-center p-3 rounded-2xl bg-white/10 border border-white/20">
            <p className="text-3xl font-black text-cyan-300">10</p>
            <p className="text-xs text-blue-200 font-medium mt-1">
              مراحل تنفيذية
            </p>
          </div>
          <div className="text-center p-3 rounded-2xl bg-white/10 border border-white/20">
            <p className="text-3xl font-black text-amber-300">7</p>
            <p className="text-xs text-blue-200 font-medium mt-1">
              وحدات متخصصة
            </p>
          </div>
          <div className="text-center p-3 rounded-2xl bg-white/10 border border-white/20">
            <p className="text-3xl font-black text-green-300">10</p>
            <p className="text-xs text-blue-200 font-medium mt-1">
              مديرين تنفيذيين
            </p>
          </div>
          <div className="text-center p-3 rounded-2xl bg-white/10 border border-white/20">
            <p className="text-3xl font-black text-pink-300">100%</p>
            <p className="text-xs text-blue-200 font-medium mt-1">
              معايير عالمية
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
        animate={{
          y: [0, 8, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}>

        <span className="text-xs font-medium">اسحب للأسفل</span>
        <ChevronDownIcon size={20} />
      </motion.div>
    </section>);

}