"use client";
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  ArrowLeftIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  SparklesIcon } from
'lucide-react';
import { ContactModal } from './ContactModal';
export function ContactCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <section
        id="contact"
        className="py-24 bg-amber-50 relative overflow-hidden"
        ref={ref}>

        {/* Subtle background pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal/8 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <motion.div
              initial={{
                opacity: 0,
                x: 40
              }}
              animate={
              isInView ?
              {
                opacity: 1,
                x: 0
              } :
              {}
              }
              transition={{
                duration: 0.7
              }}>

              <span className="inline-flex items-center gap-2 text-gold font-bold text-sm tracking-widest uppercase mb-4 border border-gold/30 rounded-full px-4 py-1.5 bg-gold/5">
                <SparklesIcon size={13} />
                استشارة مجانية
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-navy mb-5 leading-tight">
                ابدأ رحلتك
                <br />
                <span className="gradient-text-gold">التمويلية اليوم</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
                فريقنا من الخبراء جاهز لمساعدتك في تصميم الحل التمويلي الأمثل
                لنشاطك. تواصل معنا الآن واحصل على استشارة مجانية.
              </p>

              {/* Quick info */}
              <div className="space-y-4 mb-8">
                {[
                {
                  icon: PhoneIcon,
                  label: 'اتصل بنا',
                  value: '+971 00 000 0000',
                  color: 'text-gold bg-gold/10'
                },
                {
                  icon: MailIcon,
                  label: 'راسلنا',
                  value: 'info@kebfinancing.com',
                  color: 'text-teal bg-teal/10'
                },
                {
                  icon: ClockIcon,
                  label: 'ساعات العمل',
                  value: 'الأحد – الخميس: 9 ص – 6 م',
                  color: 'text-coral bg-coral/10'
                }].
                map((item, i) =>
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    x: 20
                  }}
                  animate={
                  isInView ?
                  {
                    opacity: 1,
                    x: 0
                  } :
                  {}
                  }
                  transition={{
                    delay: 0.2 + i * 0.1
                  }}
                  className="flex items-center gap-4">

                    <div
                    className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>

                      <item.icon size={16} />
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs">{item.label}</div>
                      <div
                      className="text-navy font-semibold text-sm"
                      dir="ltr">

                        {item.value}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              <motion.button
                whileHover={{
                  scale: 1.04,
                  x: -4
                }}
                whileTap={{
                  scale: 0.97
                }}
                onClick={() => setModalOpen(true)}
                className="group inline-flex items-center gap-3 bg-gradient-to-l from-gold to-gold-light text-navy font-bold px-8 py-4 rounded-2xl shadow-xl shadow-gold/30 text-base">

                احصل على استشارة مجانية
                <motion.span className="group-hover:-translate-x-1 transition-transform">
                  <ArrowLeftIcon size={18} />
                </motion.span>
              </motion.button>
            </motion.div>

            {/* Right: image card */}
            <motion.div
              initial={{
                opacity: 0,
                x: -40
              }}
              animate={
              isInView ?
              {
                opacity: 1,
                x: 0
              } :
              {}
              }
              transition={{
                duration: 0.7,
                delay: 0.2
              }}
              className="relative">

              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80"
                  alt="تواصل مع كيه إي بي"
                  className="w-full h-80 object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent rounded-3xl" />
              </div>

              {/* Floating stat */}
              <motion.div
                animate={{
                  y: [0, -6, 0]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute -bottom-5 right-8 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center">
                    <PhoneIcon size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-navy font-black text-sm">
                      استجابة خلال
                    </div>
                    <div className="text-gold font-black text-lg">24 ساعة</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Wave → Footer (zinc-950) */}
        <div className="wave-divider mt-20">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">

            <path
              d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
              fill="#09090b" />

          </svg>
        </div>
      </section>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>);

}