import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeftIcon, PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  return (
    <section
      id="cta"
      className="py-20 relative overflow-hidden px-[5%]"
      dir="rtl"
      ref={ref}>

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80"
          alt="تواصل معنا"
          className="w-full h-full object-cover"
          width={500}
          height={500}
          />

        <div
          className="absolute inset-0"
          style={{
            background:
            'linear-gradient(135deg, rgba(37,99,235,0.93) 0%, rgba(79,70,229,0.90) 60%, rgba(6,182,212,0.85) 100%)'
          }} />

      </div>

      <div className="relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            className="text-white"
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

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6 bg-white/15 border border-white/25">
              ابدأ رحلتك التمويلية
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight">
              هل أنت مستعد
              <br />
              <span className="text-cyan-300">لتمويل مؤسسي</span>
              <br />
              بمعايير عالمية؟
            </h2>
            <p className="text-blue-100 text-lg font-medium mb-8 leading-relaxed">
              فريقنا التنفيذي المتخصص يعمل على مدار الساعة لتقديم أفضل الحلول
              التمويلية المناسبة لاحتياجاتك
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-blue-100">
                <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                  <PhoneIcon size={16} className="text-cyan-300" />
                </div>
                <span className="font-medium">+971 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3 text-blue-100">
                <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                  <MailIcon size={16} className="text-cyan-300" />
                </div>
                <span className="font-medium">info@kebfinance.com</span>
              </div>
              <div className="flex items-center gap-3 text-blue-100">
                <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                  <MapPinIcon size={16} className="text-cyan-300" />
                </div>
                <span className="font-medium">الإمارات العربية المتحدة</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/implementation-mechanism#form"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-black text-lg shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #F59E0B, #EF4444)'
                }}>

                ابدأ طلبك الآن
                <ArrowLeftIcon size={18} />
              </Link>
              <Link
                href="#process"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-black text-lg border-2 border-white/40 text-white hover:bg-white/10 transition-all">

                استعرض المراحل
              </Link>
            </div>
          </motion.div>

          {/* Feature cards */}
          <motion.div
            className="grid grid-cols-2 gap-4"
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
            }}>

            <div className="col-span-2 rounded-2xl overflow-hidden h-48">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80"
                alt="فريق التفاوض"
                className="w-full h-full object-cover"
                width={500}
                height={500}
                />

            </div>
            <div
              className="p-5 rounded-2xl text-center"
              style={{
                background: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>

              <p className="text-3xl font-black text-cyan-300 mb-1">24h</p>
              <p className="text-white text-sm font-bold">وقت الاستجابة</p>
            </div>
            <div
              className="p-5 rounded-2xl text-center"
              style={{
                background: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>

              <p className="text-3xl font-black text-amber-300 mb-1">100%</p>
              <p className="text-white text-sm font-bold">سرية تامة</p>
            </div>
            <div
              className="p-5 rounded-2xl text-center"
              style={{
                background: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>

              <p className="text-3xl font-black text-green-300 mb-1">10+</p>
              <p className="text-white text-sm font-bold">سنوات خبرة</p>
            </div>
            <div
              className="p-5 rounded-2xl text-center"
              style={{
                background: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>

              <p className="text-3xl font-black text-pink-300 mb-1">500+</p>
              <p className="text-white text-sm font-bold">ملف ناجح</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}