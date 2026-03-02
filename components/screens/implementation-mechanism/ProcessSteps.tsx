import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowLeftIcon, ExternalLinkIcon } from 'lucide-react';
import { StepModal } from './StepModal';
import Image from 'next/image';
interface StepData {
  number: number;
  title: string;
  subtitle: string;
  manager: string;
  actions: string[];
  image: string;
  color: string;
}
const steps: StepData[] = [
{
  number: 1,
  title: 'مركز الاستقبال التنفيذي',
  subtitle: 'نقطة البداية',
  manager: 'مدير العمليات',
  actions: ['تسجيل الملف', 'تحديد نوع الخدمة', 'تعيين مسؤول الملف'],
  image:
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80',
  color: '#2563EB'
},
{
  number: 2,
  title: 'مركز الامتثال الأولي',
  subtitle: 'التحقق',
  manager: 'مدير الامتثال',
  actions: [
  'مراجعة الهوية',
  'مراجعة المستندات',
  'التأكد من التوافق التنظيمي'],

  image:
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
  color: '#4F46E5'
},
{
  number: 3,
  title: 'مركز التحليل المالي والائتماني',
  subtitle: 'التحليل',
  manager: 'مدير المالية + مدير الائتمان',
  actions: ['تحليل التدفقات', 'تقييم الالتزامات', 'قياس القدرة على السداد'],
  image:
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  color: '#0891B2'
},
{
  number: 4,
  title: 'غرفة المخاطر',
  subtitle: 'تقييم المخاطر',
  manager: 'مدير المخاطر',
  actions: ['تحديد مستوى المخاطرة', 'إعداد تقرير المخاطر', 'رفع التوصيات'],
  image:
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  color: '#DC2626'
},
{
  number: 5,
  title: 'وحدة إعداد الملفات',
  subtitle: 'إعداد الملف التنفيذي',
  manager: 'مدير العمليات',
  actions: ['صياغة الملف', 'معالجة نقاط الضعف', 'تجهيز النسخة النهائية'],
  image:
  'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&q=80',
  color: '#7C3AED'
},
{
  number: 6,
  title: 'مركز المطابقة التمويلية',
  subtitle: 'المطابقة',
  manager: 'مدير تطوير الأعمال',
  actions: ['اختيار الجهة المناسبة', 'فتح القناة التمويلية', 'اعتماد الجهة'],
  image:
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
  color: '#059669'
},
{
  number: 7,
  title: 'قناة التقديم الرسمي',
  subtitle: 'التقديم',
  manager: 'مدير العمليات',
  actions: ['رفع الملف', 'متابعة الطلب', 'الرد على الاستفسارات'],
  image:
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
  color: '#D97706'
},
{
  number: 8,
  title: 'غرفة التفاوض التنفيذي',
  subtitle: 'التفاوض',
  manager: 'مدير التفاوض',
  actions: ['تحسين الشروط', 'تقليل المخاطر', 'رفع قيمة العميل'],
  image:
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80',
  color: '#EA580C'
},
{
  number: 9,
  title: 'مجلس الإغلاق المالي',
  subtitle: 'الإغلاق',
  manager: 'COO + مدير الإغلاق',
  actions: ['مراجعة العقود', 'اعتماد البنود', 'توقيع الإغلاق'],
  image:
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  color: '#0F766E'
},
{
  number: 10,
  title: 'مركز المتابعة اللاحقة',
  subtitle: 'ما بعد التمويل',
  manager: 'مدير تجربة العملاء',
  actions: ['متابعة الالتزامات', 'مراقبة التدفقات', 'تقديم التوصيات'],
  image:
  'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80',
  color: '#2563EB'
}];

function StepCard({
  step,
  index,
  onOpen




}: {step: StepData;index: number;onOpen: (s: StepData) => void;}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  const isEven = index % 2 === 0;
  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{
        opacity: 0,
        x: isEven ? 60 : -60
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
        duration: 0.6,
        delay: 0.1
      }}>

      <div
        className="step-card bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden cursor-pointer group"
        onClick={() => onOpen(step)}>

        <div className="flex flex-col sm:flex-row">
          {/* Image */}
          <div className="relative sm:w-48 h-44 sm:h-auto flex-shrink-0 overflow-hidden">
            <Image
              src={step.image}
              alt={step.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              width={500}
              height={500}
              />

            <div
              className="absolute inset-0 opacity-60"
              style={{
                background: `linear-gradient(135deg, ${step.color}80, transparent)`
              }} />

            {/* Step number badge */}
            <motion.div
              className="absolute top-3 right-3 w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg pulse-ring"
              style={{
                background: step.color
              }}
              initial={{
                scale: 0
              }}
              animate={
              isInView ?
              {
                scale: 1
              } :
              {}
              }
              transition={{
                delay: 0.3,
                type: 'spring',
                stiffness: 300
              }}>

              {step.number}
            </motion.div>
          </div>

          {/* Content */}
          <div className="flex-1 p-5">
            <div
              className="inline-block px-2.5 py-1 rounded-full text-xs font-bold mb-2"
              style={{
                background: step.color + '15',
                color: step.color
              }}>

              {step.subtitle}
            </div>
            <h3 className="font-black text-gray-900 text-lg leading-tight mb-1">
              {step.title}
            </h3>
            <p className="text-gray-500 text-sm font-medium mb-3">
              <span className="font-bold text-gray-600">المسؤول: </span>
              {step.manager}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {step.actions.map((action, ai) =>
              <span
                key={ai}
                className="px-2.5 py-1 rounded-lg text-xs font-semibold"
                style={{
                  background: step.color + '10',
                  color: step.color
                }}>

                  {action}
                </span>
              )}
            </div>
            <button
              className="flex items-center gap-1.5 text-sm font-bold transition-all group-hover:gap-2.5"
              style={{
                color: step.color
              }}>

              <ExternalLinkIcon size={14} />
              عرض التفاصيل
              <ArrowLeftIcon size={14} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>);

}
export function ProcessSteps() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const [selectedStep, setSelectedStep] = useState<StepData | null>(null);
  return (
    <section id="process" className="py-20 bg-white px-[5%]" dir="rtl" ref={ref}>
      <div className=" mx-auto px-4 sm:px-6">
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
              background: '#EFF6FF',
              color: '#2563EB'
            }}>

            آلية التنفيذ المؤسسية
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            ثالثًا: كيف يتحرك الملف
            <br />
            <span
              style={{
                color: '#2563EB'
              }}>

              داخل المؤسسة؟
            </span>
          </h2>
          <p className="text-gray-500 text-lg font-medium mx-auto">
            10 مراحل تنفيذية متكاملة — انقر على أي مرحلة لعرض التفاصيل الكاملة
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {steps.map((step) =>
          <button
            key={step.number}
            onClick={() => setSelectedStep(step)}
            className="flex-shrink-0 w-8 h-8 rounded-full text-xs font-black text-white transition-transform hover:scale-110 shadow-md"
            style={{
              background: step.color
            }}
            title={step.title}>

              {step.number}
            </button>
          )}
        </div>

        {/* Steps with connecting line */}
        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute right-6 top-0 bottom-0 w-0.5 bg-gray-100 hidden sm:block">
            <motion.div
              className="absolute top-0 right-0 w-full process-line rounded-full"
              style={{
                height: lineHeight
              }} />

          </div>

          <div className="space-y-6">
            {steps.map((step, i) =>
            <div key={step.number} className="sm:pr-16">
                <StepCard step={step} index={i} onOpen={setSelectedStep} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Step modal */}
      {selectedStep &&
      <StepModal step={selectedStep} onClose={() => setSelectedStep(null)} />
      }
    </section>);

}