"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Landmark } from 'lucide-react';
export function ClosingSection() {
  return (
    <section className="py-24 bg-[#1E3A5F] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0F2439]/50 to-transparent pointer-events-none"></div>

      {/* Subtle Dot Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        <motion.div
          animate={{
            y: [0, -10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}>

          <Landmark className="w-16 h-16 text-[#D4AF37]/30 mb-8" />
        </motion.div>

        {/* Top Gold Line */}
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
          transition={{
            duration: 1,
            delay: 0.2
          }}
          className="w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mb-8 origin-center" />


        <motion.div
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
            duration: 0.8
          }}
          className="relative bg-[#162A45] rounded-2xl p-8 md:p-14 border-r-4 border-[#D4AF37] shadow-2xl w-full">

          <Quote className="absolute top-8 right-8 w-16 h-16 text-[#D4AF37] opacity-10 rotate-180" />

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-[#D4AF37] rounded-full"></div>
              <h3 className="text-2xl font-bold text-white tracking-wide">
                الخاتمة
              </h3>
            </div>

            <p className="text-xl md:text-3xl text-white leading-relaxed font-medium">
              وفي ختام هذه المنظومة من الخدمات، يؤكد مجلس إدارة كيه إي بي
              للتمويل ش.ذ.م.م أن كل خدمة نقدمها ليست مجرد منتج مالي، بل حل
              استراتيجي يُصمَّم بدقة، ويُنفَّذ باحتراف، ويُدار بمعايير مؤسسية
              تضمن أعلى درجات الجودة والامتثال. نحن نعمل لنمنح عملاءنا القدرة
              على النمو، والتوسع، والاستقرار، من خلال حلول تمويلية تُبنى على
              تحليل عميق، ورؤية واضحة، وخبرة تشغيلية واسعة. ومع كل خدمة نقدمها،
              نثبت أن التمويل ليس معاملة… بل شراكة طويلة الأمد تُدار بعقلية مجلس
              إدارة.
            </p>
          </div>
        </motion.div>

        {/* Bottom Gold Line */}
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
          transition={{
            duration: 1,
            delay: 0.4
          }}
          className="w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mt-8 origin-center" />

      </div>
    </section>);

}