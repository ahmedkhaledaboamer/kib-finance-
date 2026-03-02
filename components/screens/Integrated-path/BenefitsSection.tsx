import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Building2,
  FileCheck,
  Handshake,
  Scale,
  Shield,
  CheckCircle2,
  XCircle,
  Quote } from
'lucide-react';
const benefitCards = [
{
  title: 'تعظيم القيمة',
  desc: 'تعظيم القيمة المالية للشركة قبل التوجه لجهات التمويل',
  icon: TrendingUp,
  color: 'from-kep-green to-kep-green-light',
  textColor: 'text-kep-green'
},
{
  title: 'هيكل رأسمالي متين',
  desc: 'بناء هيكل رأسمالي يقلل التكلفة ويرفع الكفاءة',
  icon: Building2,
  color: 'from-kep-navy to-kep-navy-light',
  textColor: 'text-kep-navy'
},
{
  title: 'ملف ائتماني احترافي',
  desc: 'تجهيز ملف ائتماني احترافي يعكس قوة النشاط',
  icon: FileCheck,
  color: 'from-kep-gold to-kep-gold-dark',
  textColor: 'text-kep-gold'
},
{
  title: 'الجهة التمويلية المثلى',
  desc: 'اختيار الجهة التمويلية الأنسب بشروط تفضيلية',
  icon: Handshake,
  color: 'from-kep-orange to-kep-orange-light',
  textColor: 'text-kep-orange'
},
{
  title: 'إدارة التفاوض والإغلاق',
  desc: 'إدارة عملية التفاوض والإغلاق المالي باحترافية',
  icon: Scale,
  color: 'from-kep-purple to-kep-purple-light',
  textColor: 'text-kep-purple'
},
{
  title: 'دعم مالي مستمر',
  desc: 'دعم مالي واستراتيجي مستمر بعد الحصول على التمويل',
  icon: Shield,
  color: 'from-kep-green-light to-kep-green',
  textColor: 'text-kep-green-light'
}];

export function BenefitsSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Parts A & B: Header and Cards */}
      <div className="py-24 bg-kep-cream/40 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Part A: Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{
                opacity: 0,
                y: -20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kep-green/10 text-kep-green font-bold text-sm mb-6">

              <Shield className="w-4 h-4" />
              القيمة المضافة
            </motion.div>
            <motion.h2
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              className="text-4xl md:text-5xl font-cairo font-bold text-kep-navy mb-6">

              لماذا المسار الرأسمالي المتكامل؟
            </motion.h2>
            <motion.p
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.2
              }}
              className="text-gray-600 text-lg md:text-xl leading-relaxed">

              نحن لا نبحث لك عن تمويل فحسب، بل نصنع لك مساراً رأسمالياً يضمن نمو
              أعمالك واستقرارها المالي على المدى الطويل.
            </motion.p>
          </div>

          {/* Part B: Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{
                    opacity: 0,
                    y: 30
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  viewport={{
                    once: true,
                    margin: '-50px'
                  }}
                  transition={{
                    delay: idx * 0.1
                  }}
                  className="bg-white rounded-2xl shadow-xl shadow-gray-200/40 overflow-hidden group hover:shadow-2xl transition-shadow duration-300">

                  <div
                    className={`h-2 w-full bg-gradient-to-r ${card.color}`} />

                  <div className="p-8">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center mb-6 ${card.textColor} group-hover:scale-110 transition-transform`}>

                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-cairo font-bold text-kep-navy mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{card.desc}</p>
                  </div>
                </motion.div>);

            })}
          </div>
        </div>
      </div>

      {/* Part C: Before/After Comparison */}
      <div className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-cairo font-bold text-kep-navy">
              الفرق الذي نصنعه
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative">
            {/* VS Divider (Desktop) */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center z-20 border border-gray-100">
              <span className="font-cairo font-bold text-gray-400 text-sm">
                VS
              </span>
            </div>

            {/* Right Column (Before) */}
            <motion.div
              initial={{
                opacity: 0,
                x: 50
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              className="bg-red-50/50 rounded-3xl p-8 border border-red-100">

              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-red-100">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                  <XCircle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-cairo font-bold text-red-900">
                  بدون المسار الرأسمالي
                </h3>
              </div>
              <ul className="space-y-6">
                {[
                'تقديم عشوائي لجهات تمويل متعددة',
                'ملف مالي غير مكتمل أو ضعيف',
                'شروط تمويلية غير مدروسة',
                'غياب المتابعة بعد التمويل'].
                map((item, i) =>
                <li
                  key={i}
                  className="flex items-start gap-4 text-red-800/80 font-medium text-lg">

                    <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                )}
              </ul>
            </motion.div>

            {/* Left Column (After) */}
            <motion.div
              initial={{
                opacity: 0,
                x: -50
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              className="bg-kep-green/5 rounded-3xl p-8 border border-kep-green/20 relative overflow-hidden shadow-xl shadow-kep-green/5">

              <div className="absolute top-0 left-0 w-32 h-32 bg-kep-green/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-kep-green/20 relative z-10">
                <div className="w-12 h-12 rounded-full bg-kep-green text-white flex items-center justify-center shadow-lg shadow-kep-green/30">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-cairo font-bold text-kep-green-dark">
                  مع المسار الرأسمالي
                </h3>
              </div>
              <ul className="space-y-6 relative z-10">
                {[
                'تقديم مدروس للجهة الأنسب',
                'ملف رأسمالي احترافي ومتكامل',
                'شروط تمويلية محسّنة ومفاوض عليها',
                'شراكة مالية مستمرة بعد الإغلاق'].
                map((item, i) =>
                <li
                  key={i}
                  className="flex items-start gap-4 text-kep-navy font-bold text-lg">

                    <CheckCircle2 className="w-6 h-6 text-kep-green shrink-0 mt-0.5" />
                    {item}
                  </li>
                )}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Part D: Quote Block */}
      <div className="py-24 bg-gradient-to-br from-kep-navy-dark via-kep-navy to-kep-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-subtle" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            className="max-w-4xl mx-auto text-center">

            <Quote className="w-20 h-20 text-kep-gold/30 mx-auto mb-8 rotate-180" />
            <p className="text-3xl md:text-4xl lg:text-5xl font-cairo font-bold text-white leading-tight mb-10">
              «المسار الرأسمالي المتكامل غيّر طريقة تعاملنا مع التمويل بالكامل.
              لم نحصل فقط على تمويل، بل حصلنا على شريك مالي حقيقي.»
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-1 bg-kep-gold rounded-full" />
              <p className="text-kep-gold font-medium text-xl">
                مدير تنفيذي — شركة رائدة في قطاع المقاولات
              </p>
              <div className="w-12 h-1 bg-kep-gold rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Part E: Full Width Image */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <motion.img
          initial={{
            scale: 1.1
          }}
          whileInView={{
            scale: 1
          }}
          transition={{
            duration: 1.5
          }}
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600"
          alt="Success"
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-t from-kep-navy via-kep-navy/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center p-6">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}>

            <h2 className="text-4xl md:text-6xl font-cairo font-bold text-white mb-6 drop-shadow-lg">
              نصنع مساراً يليق بطموحك
            </h2>
            <div className="w-24 h-2 bg-kep-green mx-auto rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>);

}