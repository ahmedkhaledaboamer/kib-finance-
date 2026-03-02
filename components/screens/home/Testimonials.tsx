"use client";
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  QuoteIcon,
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon } from
'lucide-react';
const testimonials = [
{
  name: 'محمد الشمري',
  role: 'الرئيس التنفيذي',
  company: 'مجموعة الشمري للاستثمار',
  text: 'كيه إي بي غيّرت مفهوم التمويل بالنسبة لنا. لم نكن نتوقع أن نحصل على هذا المستوى من الاحترافية والسرعة في إنجاز ملفاتنا التمويلية.',
  rating: 5,
  avatar: 'م',
  color: 'from-gold to-gold-light'
},
{
  name: 'سارة العتيبي',
  role: 'المدير المالي',
  company: 'شركة العتيبي للتطوير العقاري',
  text: 'تعاملنا مع كيه إي بي في ملف إعادة هيكلة الديون، وكانت النتيجة أفضل بكثير مما توقعناه. فريق متخصص وعلاقات قوية مع البنوك.',
  rating: 5,
  avatar: 'س',
  color: 'from-teal to-teal-dark'
},
{
  name: 'خالد المنصوري',
  role: 'مؤسس ومدير عام',
  company: 'المنصوري للمقاولات والبناء',
  text: 'ساعدونا في الحصول على تمويل مشروعنا الكبير خلال وقت قياسي. الخبرة والشبكة التمويلية لديهم لا مثيل لها في السوق.',
  rating: 5,
  avatar: 'خ',
  color: 'from-coral to-coral-light'
},
{
  name: 'نورة الزهراني',
  role: 'نائب الرئيس للشؤون المالية',
  company: 'مجموعة الزهراني الصناعية',
  text: 'الاستشارات المالية التي قدمتها كيه إي بي أسهمت في إعادة هيكلة محفظتنا الاستثمارية بشكل جذري وتحقيق نمو ملحوظ.',
  rating: 5,
  avatar: 'ن',
  color: 'from-emerald to-teal'
}];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  const [current, setCurrent] = useState(0);
  const prev = () =>
  setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  return (
    <section
      id="testimonials"
      className="py-24 bg-stone-50 overflow-hidden"
      ref={ref}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={
          isInView ?
          {
            opacity: 1,
            y: 0
          } :
          {}
          }
          transition={{
            duration: 0.6
          }}
          className="text-center mb-16">

          <span className="inline-block text-teal font-bold text-sm tracking-widest uppercase mb-3 border border-teal/30 rounded-full px-4 py-1">
            آراء عملائنا
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-navy mb-4">
            ثقة <span className="gradient-text">تتحدث عنها</span> الأرقام
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            شركاؤنا يشاركوننا قصص نجاحهم
          </p>
        </motion.div>

        {/* Featured testimonial (large) */}
        <div className="relative mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{
                opacity: 0,
                x: 40
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              exit={{
                opacity: 0,
                x: -40
              }}
              transition={{
                duration: 0.4,
                ease: 'easeOut'
              }}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12 relative overflow-hidden">

              {/* Decorative quote */}
              <div className="absolute top-6 left-8 opacity-5">
                <QuoteIcon size={120} className="text-navy" />
              </div>

              {/* Gold accent bar */}
              <div
                className={`absolute top-0 right-0 w-1.5 h-full bg-gradient-to-b ${testimonials[current].color} rounded-l-none rounded-r-3xl`} />


              <div className="grid lg:grid-cols-3 gap-8 items-center relative z-10">
                {/* Avatar + info */}
                <div className="flex flex-col items-center text-center lg:border-l lg:border-gray-100 lg:pl-8">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center text-white text-3xl font-black mb-4 shadow-lg`}>

                    {testimonials[current].avatar}
                  </div>
                  <div className="font-black text-navy text-lg">
                    {testimonials[current].name}
                  </div>
                  <div className="text-gray-500 text-sm mt-1">
                    {testimonials[current].role}
                  </div>
                  <div className="text-teal text-sm font-semibold mt-0.5">
                    {testimonials[current].company}
                  </div>
                  {/* Stars */}
                  <div className="flex gap-1 mt-3">
                    {Array.from({
                      length: testimonials[current].rating
                    }).map((_, i) =>
                    <StarIcon
                      key={i}
                      size={14}
                      className="text-gold fill-gold" />

                    )}
                  </div>
                </div>

                {/* Quote */}
                <div className="lg:col-span-2">
                  <QuoteIcon size={32} className="text-gold/40 mb-4" />
                  <p className="text-gray-700 text-xl leading-loose font-medium">
                    {testimonials[current].text}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-navy hover:border-navy transition-all">

              <ChevronRightIcon size={16} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) =>
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-gold w-6' : 'bg-gray-300 w-2'}`} />

              )}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-navy hover:border-navy transition-all">

              <ChevronLeftIcon size={16} />
            </button>
          </div>
        </div>

        {/* Mini cards row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) =>
          <motion.button
            key={i}
            onClick={() => setCurrent(i)}
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={
            isInView ?
            {
              opacity: 1,
              y: 0
            } :
            {}
            }
            transition={{
              delay: 0.3 + i * 0.08
            }}
            className={`text-start p-4 rounded-2xl border-2 transition-all duration-300 ${i === current ? 'border-gold bg-gold/5 shadow-md' : 'border-gray-100 bg-white hover:border-gray-200'}`}>

              <div
              className={`w-8 h-8 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-black mb-2`}>

                {t.avatar}
              </div>
              <div className="font-bold text-navy text-sm">{t.name}</div>
              <div className="text-gray-400 text-xs mt-0.5 truncate">
                {t.company}
              </div>
            </motion.button>
          )}
        </div>
      </div>

      {/* Wave → WhyUs (zinc-950) */}
      <div className="wave-divider mt-16">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">

          <path
            d="M0 0L48 8C96 16 192 32 288 40C384 48 480 48 576 42.7C672 37 768 27 864 24C960 21 1056 27 1152 32C1248 37 1344 43 1392 45.3L1440 48V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z"
            fill="#09090b" />

        </svg>
      </div>
    </section>);

}