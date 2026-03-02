"use client";
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  ShieldCheckIcon,
  LockIcon,
  ScaleIcon,
  ZapIcon,
  BrainIcon,
  ClockIcon,
  HeartHandshakeIcon,
  StarIcon,
  LightbulbIcon,
  UserCheckIcon,
  TargetIcon,
  LeafIcon } from
'lucide-react';
const values = [
{
  icon: ShieldCheckIcon,
  title: 'النزاهة المهنية',
  desc: 'التعامل بشفافية كاملة في كل خطوة.',
  color: 'bg-gold/10 text-gold'
},
{
  icon: LockIcon,
  title: 'السرية التامة',
  desc: 'حماية معلومات العملاء كجزء من هويتنا.',
  color: 'bg-teal/10 text-teal'
},
{
  icon: ScaleIcon,
  title: 'الحوكمة الصارمة',
  desc: 'الالتزام بالسياسات والمعايير التنظيمية دون استثناء.',
  color: 'bg-coral/10 text-coral'
},
{
  icon: ZapIcon,
  title: 'الجودة التشغيلية',
  desc: 'تنفيذ كل ملف بأعلى درجات الدقة.',
  color: 'bg-emerald/10 text-emerald'
},
{
  icon: BrainIcon,
  title: 'المسؤولية المالية',
  desc: 'اتخاذ قرارات مبنية على تحليل وليس توقع.',
  color: 'bg-gold/10 text-gold'
},
{
  icon: ClockIcon,
  title: 'احترام الوقت',
  desc: 'تسليم النتائج ضمن إطار زمني واضح.',
  color: 'bg-teal/10 text-teal'
},
{
  icon: HeartHandshakeIcon,
  title: 'الثقة المتبادلة',
  desc: 'بناء علاقة قائمة على المصداقية والالتزام.',
  color: 'bg-coral/10 text-coral'
},
{
  icon: StarIcon,
  title: 'الاحتراف المؤسسي',
  desc: 'التعامل بمنهجية واضحة في كل مرحلة.',
  color: 'bg-emerald/10 text-emerald'
},
{
  icon: LightbulbIcon,
  title: 'الابتكار المستمر',
  desc: 'تطوير حلول جديدة تتناسب مع احتياجات السوق.',
  color: 'bg-gold/10 text-gold'
},
{
  icon: UserCheckIcon,
  title: 'خدمة العميل',
  desc: 'وضع مصلحة العميل في مقدمة كل قرار.',
  color: 'bg-teal/10 text-teal'
},
{
  icon: TargetIcon,
  title: 'الالتزام بالنتيجة',
  desc: 'العمل حتى الوصول إلى أفضل نتيجة ممكنة.',
  color: 'bg-coral/10 text-coral'
},
{
  icon: LeafIcon,
  title: 'الاستدامة',
  desc: 'تقديم حلول طويلة الأمد لا قصيرة المدى.',
  color: 'bg-emerald/10 text-emerald'
}];

export function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  return (
    <section id="benefits" className=" bg-cream overflow-hidden" ref={ref}>
      <div className=" p-[5%]">
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
            القيم المؤسسية
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-navy mb-4">
            قيم تُشكّل <span className="gradient-text">شخصية المؤسسة</span>
          </h2>
          <p className="text-gray-500   text-lg">
            قيم تحدد طريقة تعاملنا وتضبط سلوكنا المهني في كل خطوة
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {values.map((value, i) =>
          <motion.div
            key={i}
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
              delay: i * 0.06,
              duration: 0.5
            }}
            whileHover={{
              y: -4,
              boxShadow: '0 20px 40px rgba(15,23,42,0.1)'
            }}
            className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-default">

              <div
              className={`w-11 h-11 rounded-xl ${value.color} flex items-center justify-center mb-4`}>

                <value.icon size={20} />
              </div>
              <h3 className="font-bold text-navy mb-1.5 text-base">
                {value.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Wave divider → Stats (zinc-950) */}
      <div className="wave-divider mt-16">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">

          <path
            d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
            fill="#09090b" />

        </svg>
      </div>
    </section>);

}