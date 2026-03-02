"use client";
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowLeftIcon,
  PlayIcon,
  TrendingUpIcon,
  ShieldCheckIcon,
  UsersIcon,
  ChevronLeftIcon,
  ChevronRightIcon } from
'lucide-react';
import { ContactModal } from './ContactModal';
const slides = [
{
  image:
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
  headline: 'كيه إي بي للتمويل',
  subheadline: 'شريكك الاستراتيجي في عالم التمويل',
  highlight: 'ريادة مالية بمعايير عالمية'
},
{
  image:
  'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&q=80',
  headline: 'حلول تمويلية متخصصة',
  subheadline: 'نصمم حلولاً دقيقة تتناسب مع طبيعة نشاطك',
  highlight: 'خبرة تشغيلية عميقة'
},
{
  image:
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80',
  headline: 'شراكات استراتيجية',
  subheadline: 'علاقات طويلة الأمد مع البنوك والجهات التمويلية',
  highlight: 'شبكة تمويلية واسعة'
}];

const stats = [
{
  icon: TrendingUpIcon,
  value: '+500',
  label: 'ملف تمويلي ناجح',
  color: 'text-gold'
},
{
  icon: ShieldCheckIcon,
  value: '+15',
  label: 'سنة خبرة',
  color: 'text-teal'
},
{
  icon: UsersIcon,
  value: '+200',
  label: 'عميل راضٍ',
  color: 'text-coral'
},
{
  icon: TrendingUpIcon,
  value: '98%',
  label: 'نسبة نجاح',
  color: 'text-emerald'
}];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const slide = slides[current];
  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: 'easeOut'
      }
    })
  };
  return (
    <section
      id="hero"
      className="relative p-[5%] min-h-screen w-full flex flex-col justify-center items-center overflow-hidden">

      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          y
        }}>

        {slides.map((s, i) =>
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: i === current ? 1 : 0
          }}
          transition={{
            duration: 1.2
          }}>

            <img
            src={s.image}
            alt=""
            className="w-full h-full object-cover scale-110" />

          </motion.div>
        )}
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-l from-zinc-950/95 via-zinc-950/80 to-zinc-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
      </motion.div>

      {/* Floating shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute -top-20 -left-20 w-96 h-96 border border-gold/10 rounded-full" />

        <motion.div
          animate={{
            rotate: -360
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute top-1/4 -left-10 w-64 h-64 border border-teal/10 rounded-full" />

        <motion.div className="absolute top-1/3 left-1/4 w-2 h-2 bg-gold/40 rounded-full animate-float" />
        <motion.div className="absolute top-1/2 left-1/3 w-3 h-3 bg-teal/30 rounded-full animate-float-delayed" />
        <motion.div className="absolute top-1/4 left-2/3 w-2 h-2 bg-coral/30 rounded-full animate-float" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex-1 flex flex-col justify-center items-center px-4 sm:px-6 pt-28 pb-20"
        style={{
          opacity
        }}>

        <div className="flex flex-col items-center justify-center">
          {/* Badge */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              delay: 0.2
            }}
            className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-2 mb-6">

            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-gold text-sm font-semibold">
              {slide.highlight}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            key={`headline-${current}`}
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.7,
              ease: 'easeOut',
              delay: 0.2
            }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">

            <span className="gradient-text-gold">
              {slide.headline.split(' ').slice(0, 2).join(' ')}
            </span>
            {slide.headline.split(' ').length > 2 &&
            <span> {slide.headline.split(' ').slice(2).join(' ')}</span>
            }
          </motion.h1>

          {/* Sub */}
          <motion.p
            key={`sub-${current}`}
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.5
            }}
            className="text-xl text-white/70 mb-8 leading-relaxed  ">

            {slide.subheadline}
          </motion.p>

          {/* CTAs */}
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
              delay: 0.7
            }}
            className="flex flex-wrap gap-4">

            <motion.button
              whileHover={{
                scale: 1.05,
                x: -4
              }}
              whileTap={{
                scale: 0.95
              }}
              onClick={() => setModalOpen(true)}
              className="group flex items-center gap-3 bg-gradient-to-l from-gold to-gold-light text-navy font-bold px-8 py-4 rounded-2xl shadow-xl shadow-gold/30 text-base">

              طلب استشارة مجانية
              <motion.span className="group-hover:-translate-x-1 transition-transform">
                <ArrowLeftIcon size={18} />
              </motion.span>
            </motion.button>

            <motion.a
              href="#about"
              whileHover={{
                scale: 1.05
              }}
              whileTap={{
                scale: 0.95
              }}
              className="flex items-center gap-3 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/10 transition-colors text-base">

              <PlayIcon size={16} className="text-gold" />
              اعرف أكثر عنا
            </motion.a>
          </motion.div>
        </div>

       

        {/* Slide dots */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex justify-center items-center gap-2">
          {slides.map((_, i) =>
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 testimonial-dot ${i === current ? 'active bg-gold w-6' : 'bg-white/30 w-2'}`} />

          )}
        </div>
      </motion.div>

      {/* Stats Strip */}
      <div className="relative w-full z-10 bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="px-4 sm:px-6 py-6">
          <div className="  grid grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center text-center">
            {stats.map((stat, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.8 + i * 0.1
              }}
              className="flex flex-col items-center gap-3">

                <div
                className={`w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center ${stat.color}`}>

                  <stat.icon size={20} />
                </div>
                <div>
                  <div className={`text-2xl font-black ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-xs">{stat.label}</div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
 

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>);

}