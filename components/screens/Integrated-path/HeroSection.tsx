import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronDown } from 'lucide-react';
interface HeroSectionProps {
  onOpenContact: () => void;
}
export function HeroSection({ onOpenContact }: HeroSectionProps) {
  const titleWords = ['المسار', 'الرأسمالي', 'المتكامل'];
  return (
    <section
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-kep-navy"
      id="path">

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-kep-navy-dark via-kep-navy to-kep-navy-dark opacity-95 z-10" />
        <div className="absolute inset-0 bg-grid-pattern z-10 opacity-20" />

        {/* Subtle Animated Orb */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 30, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-kep-green/10 rounded-full blur-[120px] z-10" />


        <motion.img
          initial={{
            scale: 1.1,
            opacity: 0
          }}
          animate={{
            scale: 1,
            opacity: 0.3
          }}
          transition={{
            duration: 2,
            ease: 'easeOut'
          }}
          src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=1600"
          alt="Capital Growth"
          className="w-full h-full object-cover" />

      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <motion.div
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
                type: 'spring',
                bounce: 0.4
              }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-kep-gold font-medium text-sm md:text-base mb-8 shadow-lg">

              <span className="w-2 h-2 rounded-full bg-kep-gold animate-pulse" />
              منظومة تمويل مُبتكرة تُصمَّم لخلق قيمة رأسمالية مستدامة
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-cairo font-bold leading-tight mb-8 flex flex-wrap gap-x-4 gap-y-2">
              {titleWords.map((word, i) =>
              <motion.span
                key={i}
                initial={{
                  opacity: 0,
                  y: 50,
                  rotateX: -90
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + i * 0.15,
                  type: 'spring',
                  damping: 12
                }}
                className={
                i === 2 ?
                'text-transparent bg-clip-text bg-gradient-to-r from-kep-gold to-kep-orange' :
                ''
                }>

                  {word}
                </motion.span>
              )}
            </h1>

            <motion.div
              initial={{
                opacity: 0,
                x: 50
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.8
              }}
              className="space-y-5 text-gray-300 text-lg md:text-xl leading-relaxed mb-12 relative">

              <p>
                يعتمد المسار الرأسمالي المتكامل على إطار مالي متقدم يجمع بين
                التحليل العميق، والهندسة الرأسمالية، وإدارة القيمة، والتخطيط
                الاستراتيجي.
              </p>
              <p className="text-white font-bold text-xl">
                إنه ليس مجرد "مسار تمويل"… بل منظومة رأسمالية كاملة تُدار
                بمنهجية مؤسسات مالية كبرى.
              </p>
            </motion.div>

            <motion.div
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
                delay: 1
              }}
              className="flex flex-wrap gap-5">

              <button
                onClick={onOpenContact}
                className="px-8 py-4 bg-gradient-to-r from-kep-green to-kep-green-light text-white rounded-xl font-cairo font-bold text-xl transition-all shadow-lg shadow-kep-green/30 hover:scale-[1.02] hover:brightness-110 hover:shadow-xl hover:shadow-kep-green/40 flex items-center gap-3 group">

                <span>ابدأ مسارك الرأسمالي</span>
                <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" />
              </button>
              <a
                href="#timeline"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-xl font-cairo font-bold text-xl transition-all hover:-translate-y-1 flex items-center gap-2 group">

                استكشف المراحل
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              rotateY: -15
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateY: 0
            }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              type: 'spring'
            }}
            className="hidden lg:block relative perspective-1000">

            <div className="absolute inset-0 bg-gradient-to-tr from-kep-green via-kep-navy to-kep-gold rounded-3xl blur-3xl opacity-20 animate-pulse" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl transform-gpu hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-kep-navy-dark via-kep-navy/40 to-transparent opacity-90 z-10" />
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
                alt="Financial Analysis"
                className="w-full h-[600px] object-cover" />


              {/* Elegant Glassmorphism Stats Bar */}
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
                  delay: 1.5,
                  duration: 0.8
                }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 z-20 shadow-2xl flex justify-between items-center divide-x divide-x-reverse divide-white/10">

                <div className="px-4 text-center flex-1">
                  <div className="text-kep-gold font-bold text-xl mb-1">
                    +500
                  </div>
                  <div className="text-white/80 text-xs font-medium">عميل</div>
                </div>
                <div className="px-4 text-center flex-1">
                  <div className="text-kep-gold font-bold text-xl mb-1">
                    98%
                  </div>
                  <div className="text-white/80 text-xs font-medium">
                    موافقة
                  </div>
                </div>
                <div className="px-4 text-center flex-1">
                  <div className="text-kep-gold font-bold text-xl mb-1">
                    +15
                  </div>
                  <div className="text-white/80 text-xs font-medium">
                    سنة خبرة
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#principles"
        initial={{
          opacity: 0,
          y: -20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          delay: 2,
          duration: 1
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/80 transition-colors z-20 group">

        <span className="text-xs font-medium tracking-widest">
          اكتشف المزيد
        </span>
        <motion.div
          animate={{
            y: [0, 8, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}>

          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>);

}