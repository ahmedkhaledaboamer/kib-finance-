"use client";
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  TrendingUpIcon,
  GlobeIcon,
  ShieldIcon,
  BarChart2Icon,
  BuildingIcon,
  NetworkIcon,
  EyeIcon,
  RefreshCwIcon,
  CrownIcon,
  HeartIcon,
  ClipboardCheckIcon,
  LayersIcon } from
'lucide-react';
const visionItems = [
{
  icon: CrownIcon,
  title: 'ريادة مالية',
  desc: 'أن نكون المرجع الأول في حلول التمويل المتخصصة.',
  color: 'text-gold',
  bg: 'bg-gold'
},
{
  icon: HeartIcon,
  title: 'شراكات استراتيجية',
  desc: 'بناء علاقات طويلة الأمد مع العملاء والجهات التمويلية.',
  color: 'text-teal',
  bg: 'bg-teal'
},
{
  icon: GlobeIcon,
  title: 'توسع إقليمي',
  desc: 'توسيع نطاق خدماتنا داخل الدولة وخارجها.',
  color: 'text-coral',
  bg: 'bg-coral'
},
{
  icon: LightbulbIconLocal,
  title: 'حلول مبتكرة',
  desc: 'تطوير منتجات تمويلية تتناسب مع التحولات الاقتصادية.',
  color: 'text-emerald',
  bg: 'bg-emerald'
},
{
  icon: TrendingUpIcon,
  title: 'تمويل مستدام',
  desc: 'تقديم حلول تدعم النمو طويل الأمد وتقلل المخاطر.',
  color: 'text-gold',
  bg: 'bg-gold'
},
{
  icon: ZapIconLocal,
  title: 'قوة تشغيلية',
  desc: 'بناء منظومة تعتمد على الدقة والسرعة والامتثال.',
  color: 'text-teal',
  bg: 'bg-teal'
},
{
  icon: BuildingIcon,
  title: 'حضور مؤسسي',
  desc: 'تعزيز مكانة الشركة ككيان مالي موثوق.',
  color: 'text-coral',
  bg: 'bg-coral'
},
{
  icon: RefreshCwIcon,
  title: 'تطوير مستمر',
  desc: 'تحسين الأنظمة والعمليات بشكل دائم.',
  color: 'text-emerald',
  bg: 'bg-emerald'
},
{
  icon: BarChart2Icon,
  title: 'قيادة السوق',
  desc: 'أن نصبح الخيار الأول للشركات والمشاريع الاستثمارية.',
  color: 'text-gold',
  bg: 'bg-gold'
},
{
  icon: NetworkIcon,
  title: 'تأثير اقتصادي',
  desc: 'المساهمة في دعم الاقتصاد الوطني وتعزيز بيئة الأعمال.',
  color: 'text-teal',
  bg: 'bg-teal'
},
{
  icon: EyeIcon,
  title: 'جاهزية مستقبلية',
  desc: 'الاستعداد للتغيرات الاقتصادية والتقنية القادمة.',
  color: 'text-coral',
  bg: 'bg-coral'
},
{
  icon: GlobeIcon,
  title: 'توسع عالمي',
  desc: 'فتح قنوات تمويلية خارجية تدعم مشاريع العملاء الدولية.',
  color: 'text-emerald',
  bg: 'bg-emerald'
}];

// Inline icon components to avoid import issues
function LightbulbIconLocal({
  size,
  className



}: {size: number;className?: string;}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}>

      <line x1="9" y1="18" x2="15" y2="18" />
      <line x1="10" y1="22" x2="14" y2="22" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
    </svg>);

}
function ZapIconLocal({
  size,
  className



}: {size: number;className?: string;}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}>

      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>);

}
const governanceItems = [
{
  icon: ClipboardCheckIcon,
  title: 'إطار تنظيمي واضح',
  desc: 'هيكل إداري يحدد الصلاحيات والمسؤوليات بدقة.'
},
{
  icon: ShieldIcon,
  title: 'رقابة داخلية مستمرة',
  desc: 'متابعة دقيقة لضمان الالتزام بالمعايير.'
},
{
  icon: BarChart2Icon,
  title: 'إدارة مخاطر متقدمة',
  desc: 'تقييم شامل للمخاطر قبل اتخاذ أي قرار تمويلي.'
},
{
  icon: LayersIcon,
  title: 'امتثال تنظيمي كامل',
  desc: 'التوافق مع الأنظمة المحلية والدولية.'
}];

export function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  return (
    <section id="why-us" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background image with blur overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-zinc-950/85 backdrop-blur-sm" />
        {/* subtle teal gradient tint */}
        <div className="absolute inset-0 bg-gradient-to-tl from-teal/8 via-transparent to-gold/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
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
            الرؤية المؤسسية
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            لماذا <span className="gradient-text-gold">كيه إي بي؟</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            رؤية تُبنى على الاستدامة… وتتحرك نحو الريادة… وتُدار بمعايير عالمية
          </p>
        </motion.div>

        {/* Vision Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {visionItems.map((item, i) =>
          <motion.div
            key={i}
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
              delay: i * 0.05,
              duration: 0.5
            }}
            whileHover={{
              y: -4
            }}
            className="bg-white/5 border border-white/10 rounded-2xl p-4 cursor-default hover:bg-white/8 transition-colors">

              <div
              className={`w-9 h-9 ${item.bg}/20 rounded-xl flex items-center justify-center mb-3`}>

                <item.icon size={18} className={item.color} />
              </div>
              <h3 className="text-white font-bold text-sm mb-1">
                {item.title}
              </h3>
              <p className="text-white/40 text-xs leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          )}
        </div>

        {/* Governance Section */}
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
            delay: 0.4,
            duration: 0.6
          }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12">

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-gold font-bold text-sm tracking-widest uppercase mb-3 border border-gold/30 rounded-full px-4 py-1">
                نظام الحوكمة
              </span>
              <h3 className="text-3xl font-black text-white mb-4">
                حوكمة تُحكم القرار
                <br />
                <span className="gradient-text-gold">وتضمن الامتثال</span>
              </h3>
              <p className="text-white/50 leading-relaxed mb-6">
                نعمل وفق إطار حوكمة مؤسسية صارم يضمن أن كل قرار يُتخذ بمعايير
                مهنية عالية وشفافية كاملة.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {governanceItems.map((g, i) =>
                <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <g.icon size={14} className="text-teal" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">
                        {g.title}
                      </div>
                      <div className="text-white/40 text-xs mt-0.5">
                        {g.desc}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-72">
              <img
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80"
                alt="حوكمة كيه إي بي"
                className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-l from-navy/60 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Wave → ContactCTA (amber-50) */}
      <div className="wave-divider mt-16 relative z-10">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">

          <path
            d="M0 40L48 36C96 32 192 24 288 22.7C384 21 480 27 576 32C672 37 768 43 864 42.7C960 43 1056 37 1152 32C1248 27 1344 21 1392 18.7L1440 16V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0Z"
            fill="#fffbeb" />

        </svg>
      </div>
    </section>);

}