import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  BarChart2Icon,
  FileTextIcon,
  CreditCardIcon,
  TargetIcon,
  MessageCircleIcon,
  CheckSquareIcon,
  ClockIcon } from
'lucide-react';
const units = [
{
  icon: BarChart2Icon,
  title: 'وحدة تحليل البيانات',
  description: 'تحليل الأرقام والتقارير المالية',
  detail:
  'تعمل على تحليل البيانات المالية الكمية والنوعية لدعم القرار التمويلي بدقة عالية',
  color: '#2563EB',
  bg: '#EFF6FF'
},
{
  icon: FileTextIcon,
  title: 'وحدة إعداد الملفات',
  description: 'صياغة الملفات التمويلية باحترافية',
  detail:
  'تتولى إعداد وصياغة الملفات التمويلية وفق أعلى المعايير المهنية العالمية',
  color: '#4F46E5',
  bg: '#EEF2FF'
},
{
  icon: CreditCardIcon,
  title: 'وحدة التقييم الائتماني',
  description: 'تقييم قدرة العميل على السداد',
  detail:
  'تُجري تقييمًا شاملًا للملاءة الائتمانية وقدرة العميل على الوفاء بالتزاماته',
  color: '#0891B2',
  bg: '#ECFEFF'
},
{
  icon: TargetIcon,
  title: 'وحدة المطابقة التمويلية',
  description: 'اختيار الجهة المناسبة',
  detail: 'تعمل على مطابقة احتياجات العميل مع أنسب الجهات التمويلية المتاحة',
  color: '#059669',
  bg: '#ECFDF5'
},
{
  icon: MessageCircleIcon,
  title: 'وحدة التفاوض',
  description: 'تحسين الشروط',
  detail:
  'تتفاوض باحترافية عالية للحصول على أفضل الشروط والمعدلات لصالح العميل',
  color: '#D97706',
  bg: '#FFFBEB'
},
{
  icon: CheckSquareIcon,
  title: 'وحدة الإغلاق المالي',
  description: 'اعتماد العقود',
  detail: 'تُشرف على مرحلة الإغلاق وتضمن سلامة العقود والبنود التعاقدية',
  color: '#DC2626',
  bg: '#FEF2F2'
},
{
  icon: ClockIcon,
  title: 'وحدة ما بعد التمويل',
  description: 'متابعة الالتزامات',
  detail: 'تتابع الالتزامات التمويلية وتراقب التدفقات وتقدم التوصيات الدورية',
  color: '#7C3AED',
  bg: '#F5F3FF'
}];

export function ExecutionUnits() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  return (
    <section
      id="units"
      className="py-20"
      style={{
        background:
        'linear-gradient(135deg, #F5F3FF 0%, #EEF2FF 50%, #EFF6FF 100%)'
      }}
      dir="rtl"
      ref={ref}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
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
          }}>

          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-4"
            style={{
              background: '#EEF2FF',
              color: '#4F46E5'
            }}>

            ثانيًا: وحدات التنفيذ
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            وحدات التنفيذ المتخصصة
          </h2>
          <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto">
            7 وحدات تنفيذية متخصصة تعمل بتناغم لضمان أعلى معايير الجودة في كل
            مرحلة
          </p>
        </motion.div>

        {/* Units grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {units.map((unit, i) =>
          <motion.div
            key={unit.title}
            className="rounded-2xl p-6 border border-white/60 shadow-sm hover:shadow-lg transition-shadow"
            style={{
              background: unit.bg
            }}
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
              delay: 0.1 + i * 0.07
            }}>

              <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm"
              style={{
                background: unit.color
              }}>

                <unit.icon size={22} className="text-white" />
              </div>
              <h3 className="font-black text-gray-900 text-base mb-1 leading-tight">
                {unit.title}
              </h3>
              <p
              className="font-bold text-sm mb-3"
              style={{
                color: unit.color
              }}>

                {unit.description}
              </p>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">
                {unit.detail}
              </p>
              <div
              className="mt-4 h-1 rounded-full"
              style={{
                background: `linear-gradient(to left, ${unit.color}, ${unit.color}40)`
              }} />

            </motion.div>
          )}

          {/* Summary card */}
          <motion.div
            className="rounded-2xl p-6 text-white shadow-lg sm:col-span-2 lg:col-span-3 xl:col-span-1"
            style={{
              background: 'linear-gradient(135deg, #2563EB, #4F46E5)'
            }}
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
              delay: 0.6
            }}>

            <div className="text-5xl font-black mb-2">7</div>
            <p className="text-xl font-bold mb-2">وحدات متخصصة</p>
            <p className="text-blue-200 text-sm font-medium leading-relaxed">
              تعمل بتكامل تام لضمان تنفيذ كل ملف بأعلى معايير الجودة والاحترافية
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="bg-white/10 rounded-xl p-2 text-center">
                <p className="text-lg font-black">100%</p>
                <p className="text-xs text-blue-200">جودة</p>
              </div>
              <div className="bg-white/10 rounded-xl p-2 text-center">
                <p className="text-lg font-black">24/7</p>
                <p className="text-xs text-blue-200">متابعة</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}