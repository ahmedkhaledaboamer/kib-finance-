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
const legacyVisionItems = [
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
import { useTranslations } from 'next-intl';
import Image from 'next/image';
const visionItems = [
{
  icon: CrownIcon,
  key: 'financialLeadership',
  color: 'text-gold',
  bg: 'bg-gold'
},
{
  icon: HeartIcon,
  key: 'strategicPartnerships',
  color: 'text-teal',
  bg: 'bg-teal'
},
{
  icon: GlobeIcon,
  key: 'regionalExpansion',
  color: 'text-coral',
  bg: 'bg-coral'
},
{
  icon: LightbulbIconLocal,
  key: 'innovativeSolutions',
  color: 'text-emerald',
  bg: 'bg-emerald'
},
{
  icon: TrendingUpIcon,
  key: 'sustainableFinance',
  color: 'text-gold',
  bg: 'bg-gold'
},
{
  icon: ZapIconLocal,
  key: 'operationalStrength',
  color: 'text-teal',
  bg: 'bg-teal'
},
{
  icon: BuildingIcon,
  key: 'institutionalPresence',
  color: 'text-coral',
  bg: 'bg-coral'
},
{
  icon: RefreshCwIcon,
  key: 'continuousDevelopment',
  color: 'text-emerald',
  bg: 'bg-emerald'
},
{
  icon: BarChart2Icon,
  key: 'marketLeadership',
  color: 'text-gold',
  bg: 'bg-gold'
},
{
  icon: NetworkIcon,
  key: 'economicImpact',
  color: 'text-teal',
  bg: 'bg-teal'
},
{
  icon: EyeIcon,
  key: 'futureReadiness',
  color: 'text-coral',
  bg: 'bg-coral'
},
{
  icon: GlobeIcon,
  key: 'globalExpansion',
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

const legacyGovernanceItems = [
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
const governanceItems = [
{
  icon: ClipboardCheckIcon,
  key: 'clearFramework'
},
{
  icon: ShieldIcon,
  key: 'internalControl'
},
{
  icon: BarChart2Icon,
  key: 'advancedRiskManagement'
},
{
  icon: LayersIcon,
  key: 'fullCompliance'
}];

export function WhyUs() {
  const t = useTranslations('financeHome.whyUs');
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  return (
    <section id="why-us" className=" relative overflow-hidden" ref={ref}>
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

      <div className="  p-[5%] relative z-10">
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

          <span className="inline-block text-teal home-badge-text font-bold tracking-widest uppercase mb-3 border border-teal/30 rounded-full px-4 py-1">
            {t('badge')}
          </span>
          <h2 className="home-section-heading font-black text-white mb-4">
            {t('title')} <span className="gradient-text-gold">{t('titleHighlight')}</span>
          </h2>
          <p className="text-white/50 home-section-subtitle">
            {t('subtitle')}
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
            className="flex flex-col items-center justify-center md:items-start md:justify-start bg-white/5 border border-white/10 rounded-2xl p-4 cursor-default hover:bg-white/8 transition-colors">

              <div
              className={`w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 ${item.bg}/20 rounded-xl flex items-center justify-center mb-3`}>

                <item.icon size={20} className={item.color} />
              </div>
              <h3 className="text-white font-bold home-small-label mb-1">
                {t(`vision.${item.key}.title`)}
              </h3>
              <p className="text-white/40 home-small-label leading-relaxed text-center md:text-left">
                {t(`vision.${item.key}.desc`)}
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
            <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
              <span className="inline-block text-gold home-badge-text font-bold tracking-widest uppercase mb-3 border border-gold/30 rounded-full px-4 py-1">
                {t('governanceSection.badge')}
              </span>
              <h3 className="home-section-heading font-black text-white mb-4">
                {t('governanceSection.title')}
                <br />
                <span className="gradient-text-gold">{t('governanceSection.titleHighlight')}</span>
              </h3>
              <p className="text-white/50 leading-relaxed home-body-large mb-6 text-center md:text-left">
                {t('governanceSection.description')}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {governanceItems.map((g, i) =>
                <div key={i} className="flex items-center justify-center flex-col md:flex-row md:items-start md:justify-start gap-3">
                    <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-teal/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <g.icon size={14} className="text-teal" />
                    </div>
                    <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
                      <div className="text-white font-semibold home-small-label">
                        {t(`governance.${g.key}.title`)}
                      </div>
                      <div className="text-white/40 home-small-label mt-0.5 text-center md:text-left">
                        {t(`governance.${g.key}.desc`)}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden home-image-tall">
              <Image
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80"
                alt="حوكمة كيه إي بي"
                className="w-full h-full object-cover"
                width={500}
                height={500}
                />

              <div className="absolute inset-0 bg-gradient-to-l from-navy/60 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>

       
    </section>);

}