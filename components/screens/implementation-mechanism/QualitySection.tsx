import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ShieldCheckIcon,
  DatabaseIcon,
  TrendingUpIcon,
  UsersIcon,
  ClockIcon,
  StarIcon } from
'lucide-react';
const standards = [
{
  icon: ShieldCheckIcon,
  title: 'الحوكمة والامتثال',
  description:
  'كل ملف يمر عبر مراجعة امتثال صارمة تضمن التوافق مع المتطلبات التنظيمية',
  color: '#2563EB'
},
{
  icon: DatabaseIcon,
  title: 'القرارات المبنية على البيانات',
  description:
  'لا يُتخذ أي قرار تمويلي دون تحليل بيانات شامل ودقيق من وحدة التحليل',
  color: '#4F46E5'
},
{
  icon: TrendingUpIcon,
  title: 'إدارة المخاطر الاستباقية',
  description:
  'تُقيَّم المخاطر قبل اتخاذ القرار وتُوضع خطط تخفيف فعّالة لكل ملف',
  color: '#06B6D4'
},
{
  icon: UsersIcon,
  title: 'تجربة عميل استثنائية',
  description:
  'مدير تجربة العملاء يضمن تواصلًا احترافيًا ومتابعة مستمرة في كل مرحلة',
  color: '#059669'
},
{
  icon: ClockIcon,
  title: 'الكفاءة التشغيلية',
  description: 'مسار تنفيذي محكم يضمن سرعة الإنجاز دون التنازل عن الجودة',
  color: '#D97706'
},
{
  icon: StarIcon,
  title: 'معايير عالمية',
  description:
  'كل إجراء يُنفَّذ وفق أعلى المعايير المهنية الدولية في صناعة التمويل',
  color: '#7C3AED'
}];

export function QualitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  return (
    <section className="py-20 bg-white" dir="rtl" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative rounded-3xl overflow-hidden h-80 lg:h-full min-h-80 order-2 lg:order-1"
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
              duration: 0.7
            }}>

            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
              alt="معايير الجودة"
              className="w-full h-full object-cover" />

            <div
              className="absolute inset-0"
              style={{
                background:
                'linear-gradient(135deg, rgba(37,99,235,0.3), rgba(79,70,229,0.2))'
              }} />

            {/* Overlay card */}
            <div className="absolute bottom-6 right-6 left-6 bg-white/95 rounded-2xl p-5 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: '#EFF6FF'
                  }}>

                  <ShieldCheckIcon
                    size={20}
                    style={{
                      color: '#2563EB'
                    }} />

                </div>
                <div>
                  <p className="font-black text-gray-900 text-sm">
                    ضمان الجودة
                  </p>
                  <p className="text-gray-500 text-xs font-medium">
                    معايير لا تقبل التنازل
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div
                  className="text-center p-2 rounded-xl"
                  style={{
                    background: '#EFF6FF'
                  }}>

                  <p className="font-black text-blue-600 text-lg">10</p>
                  <p className="text-gray-500 text-xs">مراحل</p>
                </div>
                <div
                  className="text-center p-2 rounded-xl"
                  style={{
                    background: '#ECFDF5'
                  }}>

                  <p className="font-black text-green-600 text-lg">7</p>
                  <p className="text-gray-500 text-xs">وحدات</p>
                </div>
                <div
                  className="text-center p-2 rounded-xl"
                  style={{
                    background: '#FFFBEB'
                  }}>

                  <p className="font-black text-amber-600 text-lg">100%</p>
                  <p className="text-gray-500 text-xs">جودة</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Standards */}
          <motion.div
            className="order-1 lg:order-2"
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

            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6"
              style={{
                background: '#EFF6FF',
                color: '#2563EB'
              }}>

              معايير الجودة والتميز
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 leading-tight">
              معايير لا تقبل
              <br />
              <span
                style={{
                  color: '#2563EB'
                }}>

                التنازل
              </span>
            </h2>
            <p className="text-gray-500 text-base font-medium mb-8 leading-relaxed">
              هذا النظام التنفيذي ليس مجرد تنظيم إداري، بل بنية تشغيل عالمية
              تضمن أن كل ملف يُدار بمعايير احترافية، وكل قرار يُتخذ بناءً على
              تحليل.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {standards.map((standard, i) =>
              <motion.div
                key={standard.title}
                className="p-4 rounded-2xl border border-gray-100"
                style={{
                  background: standard.color + '06'
                }}
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
                  delay: 0.2 + i * 0.08
                }}>

                  <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                  style={{
                    background: standard.color + '20'
                  }}>

                    <standard.icon
                    size={18}
                    style={{
                      color: standard.color
                    }} />

                  </div>
                  <h3 className="font-black text-gray-800 text-sm mb-1">
                    {standard.title}
                  </h3>
                  <p className="text-gray-500 text-xs font-medium leading-relaxed">
                    {standard.description}
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}