"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronDown } from 'lucide-react';
export function HeroSection() {
  const [text, setText] = useState('');
  const fullText =
  'حلول مالية متخصصة تُصمَّم بدقة… وتُنفَّذ باحتراف… وتُدار بمعايير مجلس الإدارة';
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like scale */}
      <motion.div
        initial={{
          scale: 1.1
        }}
        animate={{
          scale: 1
        }}
        transition={{
          duration: 1.5,
          ease: 'easeOut'
        }}
        className="absolute inset-0 z-0">

        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80"
          alt="Dubai Financial District"
          className="w-full h-full object-cover" />

        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-[#1E3A5F]/85 mix-blend-multiply"></div>
        {/* Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F] via-[#1E3A5F]/50 to-transparent opacity-90"></div>
      </motion.div>

      {/* Floating Animated Shapes - Existing */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-1/4 right-[10%] w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl z-0" />

      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
        className="absolute bottom-1/4 left-[10%] w-80 h-80 bg-[#059669]/10 rounded-full blur-3xl z-0" />


      {/* New Geometric Decorations */}
      <motion.div
        initial={{
          rotate: 45
        }}
        animate={{
          rotate: 405
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="absolute top-[20%] left-[15%] w-24 h-24 border border-[#D4AF37]/20 z-0" />


      <div
        className="absolute bottom-[20%] right-[15%] w-32 h-32 opacity-20 z-0"
        style={{
          backgroundImage:
          'radial-gradient(circle, #D4AF37 2px, transparent 2px)',
          backgroundSize: '16px 16px'
        }} />


      {/* Tiny Floating Particles */}
      <motion.div
        animate={{
          y: [0, -15, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-[40%] left-[30%] w-2 h-2 rounded-full bg-[#D4AF37]/30 z-0" />

      <motion.div
        animate={{
          y: [0, 20, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
        className="absolute top-[60%] right-[25%] w-2 h-2 rounded-full bg-[#D4AF37]/30 z-0" />

      <motion.div
        animate={{
          y: [0, -25, 0]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
        className="absolute top-[30%] left-[60%] w-2 h-2 rounded-full bg-[#D4AF37]/30 z-0" />


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl">
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
              delay: 0.2
            }}>

            <span className="inline-block py-1.5 px-4 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30 text-sm font-bold mb-6 tracking-wider backdrop-blur-sm">
              كيه إي بي للتمويل ش.ذ.م.م
            </span>
          </motion.div>

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
              delay: 0.4
            }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">

            خدماتنا{' '}
            <span className="text-[#D4AF37] relative">
              للتمويل
              <motion.span
                initial={{
                  scaleX: 0
                }}
                animate={{
                  scaleX: 1
                }}
                transition={{
                  duration: 0.8,
                  delay: 1.2
                }}
                className="absolute -bottom-2 right-0 w-full h-2 bg-[#D4AF37]/30 rounded-full origin-right" />

            </span>
          </motion.h1>

          <motion.h2
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.6
            }}
            className="text-xl md:text-2xl text-gray-200 font-medium mb-8 leading-relaxed border-r-4 border-[#D4AF37] pr-4 h-16 md:h-auto">

            {text}
            <motion.span
              animate={{
                opacity: [1, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 0.8
              }}
              className="inline-block w-1 h-6 bg-[#D4AF37] mr-1 align-middle" />

          </motion.h2>

          <motion.p
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
            }}
            className="text-lg text-gray-300 mb-10 leading-relaxed max-w-2xl">

            تقدّم كيه إي بي للتمويل ش.ذ.م.م منظومة خدمات مالية متكاملة صُممت
            لتلبية احتياجات الشركات، المؤسسات، رواد الأعمال، والمشاريع
            الاستثمارية داخل الدولة وخارجها. نحن لا نوفّر خدمات تقليدية، بل
            حلولًا تمويلية مُحكمة تُبنى على تحليل دقيق، ورؤية استراتيجية، وخبرة
            تشغيلية واسعة.
          </motion.p>

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
            className="flex flex-wrap gap-4">

            <button
              onClick={() =>
              document.getElementById('services-grid')?.scrollIntoView({
                behavior: 'smooth'
              })
              }
              className="bg-[#D4AF37] hover:bg-white text-[#1E3A5F] px-8 py-4 rounded-md font-bold text-lg transition-all duration-300 flex items-center gap-2 group shadow-lg shadow-[#D4AF37]/20">

              استكشف خدماتنا
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>

            {/* New Secondary CTA */}
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1E3A5F] px-8 py-4 rounded-md font-bold text-lg transition-all duration-300 flex items-center gap-2">
              تواصل معنا
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 2,
          duration: 1
        }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 cursor-pointer hover:text-white transition-colors z-20"
        onClick={() =>
        document.getElementById('services-grid')?.scrollIntoView({
          behavior: 'smooth'
        })
        }>

        <span className="text-sm font-medium tracking-widest uppercase">
          اكتشف المزيد
        </span>
        <motion.div
          animate={{
            y: [0, 8, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: 'easeInOut'
          }}>

          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Animated Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] overflow-hidden z-20">
        <motion.div
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="w-[200%] h-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      </div>
    </section>);

}