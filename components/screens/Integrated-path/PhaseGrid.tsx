"use client"
import React from 'react'
import {
  SearchIcon,
  Building2Icon,
  ShieldIcon,
  BarChart3Icon,
  TargetIcon,
  PresentationIcon,
  Settings2Icon,
  CheckCircle2Icon,
  HandshakeIcon,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { PhaseCard } from '@/components/screens/Integrated-path/PhaseCard'
const phases = [
  {
    phase: 1,
    title: 'الاستكشاف والتقييم',
    subtitle: 'Phase 01 — Discovery',
    description:
      'تحليل شامل للوضع المالي الحالي وتحديد الفرص الاستثمارية المتاحة في السوق.',
    details: [
      'تقييم الوضع المالي الحالي للعميل',
      'تحليل الأهداف الاستثمارية قصيرة وطويلة المدى',
      'دراسة الفرص المتاحة في السوق المحلي والدولي',
      'تحديد مستوى المخاطرة المقبول',
    ],
    gradient: 'linear-gradient(135deg, #ff6b35, #f7931e)',
    glowColor: '#ff6b35',
    Icon: SearchIcon,
  },
  {
    phase: 2,
    title: 'هيكلة رأس المال',
    subtitle: 'Phase 02 — Structure',
    description:
      'بناء هيكل مالي متين يضمن تحقيق أقصى عائد مع إدارة المخاطر بكفاءة عالية.',
    details: [
      'تصميم هيكل رأس المال الأمثل',
      'توزيع الأصول عبر فئات متعددة',
      'تحديد نسب التمويل والاستثمار',
      'وضع خطة التدفق النقدي',
    ],
    gradient: 'linear-gradient(135deg, #00c9b1, #00e676)',
    glowColor: '#00c9b1',
    Icon: Building2Icon,
  },
  {
    phase: 3,
    title: 'إدارة المخاطر',
    subtitle: 'Phase 03 — Protection',
    description:
      'منظومة متكاملة لحماية رأس المال وضمان الاستدامة في مواجهة تقلبات السوق.',
    details: [
      'تحليل وتصنيف المخاطر المحتملة',
      'وضع استراتيجيات التحوط المناسبة',
      'إنشاء صناديق الطوارئ والاحتياطي',
      'مراقبة مستمرة لمؤشرات الخطر',
    ],
    gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    glowColor: '#8b5cf6',
    Icon: ShieldIcon,
  },
  {
    phase: 4,
    title: 'التحليل والبيانات',
    subtitle: 'Phase 04 — Analytics',
    description:
      'استخدام أحدث أدوات التحليل المالي والذكاء الاصطناعي لاتخاذ قرارات مدروسة.',
    details: [
      'تحليل البيانات المالية التاريخية',
      'نمذجة السيناريوهات المستقبلية',
      'تقارير الأداء الدورية والمفصلة',
      'لوحات متابعة تفاعلية في الوقت الفعلي',
    ],
    gradient: 'linear-gradient(135deg, #f59e0b, #f97316)',
    glowColor: '#f59e0b',
    Icon: BarChart3Icon,
  },
  {
    phase: 5,
    title: 'تحديد الأهداف',
    subtitle: 'Phase 05 — Targeting',
    description:
      'رسم خارطة طريق واضحة بأهداف قابلة للقياس وجداول زمنية محددة للإنجاز.',
    details: [
      'تحديد الأهداف المالية الذكية SMART',
      'وضع مؤشرات الأداء الرئيسية KPIs',
      'إنشاء جداول زمنية للإنجاز',
      'مراجعة وتحديث الأهداف دورياً',
    ],
    gradient: 'linear-gradient(135deg, #ef4444, #f97316)',
    glowColor: '#ef4444',
    Icon: TargetIcon,
  },
  {
    phase: 6,
    title: 'عرض الفرص',
    subtitle: 'Phase 06 — Presentation',
    description:
      'تقديم الفرص الاستثمارية المنتقاة بشكل احترافي مع تحليل شامل للعوائد.',
    details: [
      'إعداد ملفات الفرص الاستثمارية',
      'تحليل العائد على الاستثمار ROI',
      'مقارنة البدائل الاستثمارية المتاحة',
      'جلسات عرض تفاعلية مع الخبراء',
    ],
    gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    glowColor: '#06b6d4',
    Icon: PresentationIcon,
  },
  {
    phase: 7,
    title: 'التشغيل والتنفيذ',
    subtitle: 'Phase 07 — Operations',
    description:
      'تنفيذ الخطة الاستثمارية بدقة عالية مع إدارة العمليات اليومية باحترافية.',
    details: [
      'تنفيذ الصفقات الاستثمارية المعتمدة',
      'إدارة المحفظة الاستثمارية يومياً',
      'متابعة الأداء وإعداد التقارير',
      'تحسين العمليات وتقليل التكاليف',
    ],
    gradient: 'linear-gradient(135deg, #7c3aed, #a855f7)',
    glowColor: '#7c3aed',
    Icon: Settings2Icon,
  },
  {
    phase: 8,
    title: 'التحقق والإنجاز',
    subtitle: 'Phase 08 — Completion',
    description:
      'التحقق من تحقيق الأهداف المرسومة وتوثيق النجاحات لبناء مسار مستقبلي أقوى.',
    details: [
      'مراجعة شاملة لتحقيق الأهداف',
      'توثيق الدروس المستفادة',
      'احتفال بالإنجازات المحققة',
      'تحديث الخطة للمرحلة التالية',
    ],
    gradient: 'linear-gradient(135deg, #10b981, #06b6d4)',
    glowColor: '#10b981',
    Icon: CheckCircle2Icon,
  },
  {
    phase: 9,
    title: 'الشراكة الاستراتيجية',
    subtitle: 'Phase 09 — Partnership',
    description:
      'بناء علاقات استراتيجية طويلة الأمد تفتح آفاقاً جديدة للنمو والتوسع.',
    details: [
      'تطوير شبكة الشركاء الاستراتيجيين',
      'التفاوض على اتفاقيات الشراكة',
      'إنشاء تحالفات استثمارية مشتركة',
      'توسيع نطاق الفرص عبر الحدود',
    ],
    gradient: 'linear-gradient(135deg, #f43f5e, #ec4899)',
    glowColor: '#f43f5e',
    Icon: HandshakeIcon,
  },
]
export function PhaseGrid() {
  return (
    <section
      className="relative py-24 px-[5%]"
      style={{
        background: '#ffffff',
      }}
      dir="rtl"
    >
      {/* Section header */}
      <div className=" mx-auto mb-16 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
            style={{
              fontFamily: 'Cairo, sans-serif',
              background:
                'linear-gradient(135deg, rgba(255,107,53,0.15), rgba(255,200,0,0.15))',
              border: '1px solid rgba(255,165,0,0.4)',
              color: '#c2710c',
            }}
          >
            المراحل التسع
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{
              fontFamily: 'Cairo, sans-serif',
              color: '#1a1a2e',
            }}
          >
            خارطة طريق
            <span
              className="mx-3"
              style={{
                background: 'linear-gradient(135deg, #ff6b35, #f59e0b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              النجاح
            </span>
          </h2>
          <p
            className="text-lg mx-auto"
            style={{
              fontFamily: 'Tajawal, sans-serif',
              color: 'rgba(0,0,0,0.5)',
            }}
          >
            كل مرحلة مصممة بعناية لتبني على السابقة وتمهد للتالية، في رحلة
            متكاملة نحو تحقيق أهدافك المالية
          </p>
        </motion.div>
      </div>

      {/* Mosaic grid */}
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto">
        {/* Phase 1 - large */}
        <div className="lg:col-span-2">
          <PhaseCard {...phases[0]} index={0} />
        </div>
        {/* Phase 2 */}
        <PhaseCard {...phases[1]} index={1} />
        {/* Phase 3 */}
        <PhaseCard {...phases[2]} index={2} />
        {/* Phase 4 - large */}
        <div className="lg:col-span-2">
          <PhaseCard {...phases[3]} index={3} />
        </div>
        {/* Phase 5 */}
        <PhaseCard {...phases[4]} index={4} />
        {/* Phase 6 */}
        <PhaseCard {...phases[5]} index={5} />
        {/* Phase 7 */}
        <PhaseCard {...phases[6]} index={6} />
        {/* Phase 8 - large */}
        <div className="lg:col-span-2">
          <PhaseCard {...phases[7]} index={7} />
        </div>
        {/* Phase 9 */}
        <PhaseCard {...phases[8]} index={8} />
      </div>
    </section>
  )
}
