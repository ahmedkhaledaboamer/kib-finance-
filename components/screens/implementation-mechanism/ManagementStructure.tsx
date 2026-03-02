import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
interface Manager {
  title: string;
  role: string;
  responsibilities: string[];
  level: number;
  color: string;
}
const managers: Manager[] = [
{
  title: 'مجلس الإدارة',
  role: 'تحديد الاتجاه الاستراتيجي للمؤسسة',
  responsibilities: [
  'اعتماد السياسات العليا',
  'مراقبة الأداء المؤسسي',
  'الإشراف على الحوكمة',
  'اعتماد الخطط المالية',
  'مراجعة تقارير المخاطر'],

  level: 1,
  color: '#2563EB'
},
{
  title: 'الرئيس التنفيذي',
  role: 'تحويل رؤية مجلس الإدارة إلى واقع تشغيلي',
  responsibilities: [
  'قيادة المؤسسة',
  'اتخاذ القرارات العليا',
  'اعتماد الملفات الكبرى',
  'الإشراف على الإدارات التنفيذية',
  'تمثيل الشركة أمام الجهات التمويلية'],

  level: 2,
  color: '#4F46E5'
},
{
  title: 'الرئيس التنفيذي للعمليات',
  role: 'قيادة نظام التشغيل المؤسسي بالكامل',
  responsibilities: [
  'إدارة المسار التنفيذي',
  'ضمان انسيابية الملفات',
  'مراقبة جودة التنفيذ',
  'معالجة العوائق التشغيلية',
  'تحسين الأداء المؤسسي'],

  level: 2,
  color: '#06B6D4'
},
{
  title: 'المدير العام',
  role: 'إدارة الإدارات التشغيلية والفنية',
  responsibilities: [
  'متابعة الإنتاجية',
  'مراقبة الأداء',
  'رفع التقارير للإدارة العليا',
  'ضمان الالتزام بالسياسات'],

  level: 3,
  color: '#7C3AED'
},
{
  title: 'مدير الامتثال والحوكمة',
  role: 'حماية المؤسسة من المخاطر التنظيمية',
  responsibilities: [
  'مراجعة الملفات',
  'مراقبة الالتزام',
  'إعداد تقارير الحوكمة',
  'متابعة التغيرات التنظيمية'],

  level: 3,
  color: '#DC2626'
},
{
  title: 'مدير المخاطر',
  role: 'تقييم المخاطر قبل اتخاذ القرار',
  responsibilities: [
  'تحليل المخاطر',
  'إعداد تقارير المخاطر',
  'وضع خطط التخفيف',
  'مراجعة الملفات الحساسة'],

  level: 3,
  color: '#EA580C'
},
{
  title: 'مدير الشؤون المالية',
  role: 'قيادة التحليل المالي',
  responsibilities: [
  'تحليل البيانات',
  'إعداد التوقعات',
  'مراجعة التدفقات',
  'دعم القرارات التمويلية'],

  level: 3,
  color: '#0891B2'
},
{
  title: 'مدير تطوير الأعمال',
  role: 'فتح قنوات تمويلية جديدة',
  responsibilities: [
  'بناء العلاقات',
  'تطوير الشراكات',
  'دراسة الفرص',
  'دعم توسع الشركة'],

  level: 3,
  color: '#059669'
},
{
  title: 'مدير العمليات',
  role: 'تنفيذ المسار التشغيلي',
  responsibilities: [
  'إدارة فرق التنفيذ',
  'متابعة الملفات',
  'ضمان جودة الإجراءات',
  'تحسين الأداء'],

  level: 3,
  color: '#D97706'
},
{
  title: 'مدير تجربة العملاء',
  role: 'ضمان تجربة عميل احترافية',
  responsibilities: [
  'إدارة التواصل',
  'متابعة العملاء',
  'حل التحديات',
  'ضمان رضا العميل'],

  level: 3,
  color: '#7C3AED'
}];

export function ManagementStructure() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <section
      id="management"
      className="py-20"
      style={{
        background: '#EFF6FF'
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
              background: '#DBEAFE',
              color: '#2563EB'
            }}>

            الهيكل الإداري العالمي
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            أولًا: الهيكل الإداري العالمي
          </h2>
          <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto">
            منظومة قيادية متكاملة تضمن أن كل قرار يُتخذ بمسؤولية واضحة وصلاحيات
            محددة
          </p>
        </motion.div>

        {/* Management image */}
        <motion.div
          className="rounded-3xl overflow-hidden mb-12 h-64 sm:h-80 relative"
          initial={{
            opacity: 0,
            scale: 0.97
          }}
          animate={
          isInView ?
          {
            opacity: 1,
            scale: 1
          } :
          {}
          }
          transition={{
            duration: 0.7,
            delay: 0.2
          }}>

          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
            alt="الهيكل الإداري"
            className="w-full h-full object-cover" />

          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background:
              'linear-gradient(135deg, rgba(37,99,235,0.7), rgba(79,70,229,0.6))'
            }}>

            <div className="text-center text-white">
              <p className="text-4xl font-black mb-2">10</p>
              <p className="text-xl font-bold">مديرين تنفيذيين</p>
              <p className="text-blue-200 font-medium mt-1">
                يقودون منظومة التشغيل
              </p>
            </div>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {managers.map((manager, i) =>
          <motion.div
            key={manager.title}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer"
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
              delay: 0.1 + i * 0.06
            }}
            onClick={() => setExpanded(expanded === i ? null : i)}>

              {/* Card header */}
              <div
              className="p-5"
              style={{
                borderRight: `4px solid ${manager.color}`
              }}>

                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div
                    className="inline-block px-2 py-0.5 rounded-full text-xs font-bold mb-2"
                    style={{
                      background: manager.color + '15',
                      color: manager.color
                    }}>

                      المستوى {manager.level}
                    </div>
                    <h3 className="font-black text-gray-900 text-base leading-tight">
                      {manager.title}
                    </h3>
                    <p className="text-gray-500 text-sm font-medium mt-1 leading-relaxed">
                      {manager.role}
                    </p>
                  </div>
                  <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                  style={{
                    background: manager.color + '15'
                  }}>

                    {expanded === i ?
                  <ChevronUpIcon
                    size={16}
                    style={{
                      color: manager.color
                    }} /> :


                  <ChevronDownIcon
                    size={16}
                    style={{
                      color: manager.color
                    }} />

                  }
                  </div>
                </div>
              </div>

              {/* Expandable responsibilities */}
              <motion.div
              initial={false}
              animate={{
                height: expanded === i ? 'auto' : 0,
                opacity: expanded === i ? 1 : 0
              }}
              transition={{
                duration: 0.3
              }}
              style={{
                overflow: 'hidden'
              }}>

                <div className="px-5 pb-5 pt-1 border-t border-gray-50">
                  <p className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wide">
                    المسؤوليات
                  </p>
                  <ul className="space-y-2">
                    {manager.responsibilities.map((r, ri) =>
                  <li
                    key={ri}
                    className="flex items-start gap-2 text-sm text-gray-600 font-medium">

                        <div
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{
                        background: manager.color
                      }} />

                        {r}
                      </li>
                  )}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}