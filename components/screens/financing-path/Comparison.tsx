import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowLeft, Sparkles } from 'lucide-react';
const traditionalPath = [
{
  text: 'إعداد الملفات بشكل ذاتي بدون توجيه',
  negative: true
},
{
  text: 'التقديم لجهة واحدة فقط والانتظار',
  negative: true
},
{
  text: 'عدم وجود تفاوض على الشروط',
  negative: true
},
{
  text: 'غياب المتابعة بعد التقديم',
  negative: true
},
{
  text: 'شروط تمويلية قياسية بدون تحسين',
  negative: true
},
{
  text: 'لا يوجد دعم بعد صرف التمويل',
  negative: true
},
{
  text: 'مدة إنجاز طويلة وغير محددة',
  negative: true
}];

const executivePath = [
{
  text: 'تدقيق استراتيجي شامل وملف تنفيذي محكم',
  negative: false
},
{
  text: 'اختيار الجهة المثالية من بين عشرات الخيارات',
  negative: false
},
{
  text: 'تفاوض احترافي لتحسين كل بند',
  negative: false
},
{
  text: 'متابعة لحظة بلحظة حتى صدور القرار',
  negative: false
},
{
  text: 'شروط تمويلية محسّنة ومزايا حصرية',
  negative: false
},
{
  text: 'شراكة رأسمالية مستمرة بعد التمويل',
  negative: false
},
{
  text: 'متوسط إنجاز 15 يوم عمل فقط',
  negative: false
}];

type TabKey = 'compare' | 'traditional' | 'executive';
export function Comparison() {
  const [activeTab, setActiveTab] = useState<TabKey>('compare');
  const tabs: {
    key: TabKey;
    label: string;
    color: string;
  }[] = [
  {
    key: 'compare',
    label: 'مقارنة شاملة',
    color: 'bg-gold'
  },
  {
    key: 'traditional',
    label: 'المسار التقليدي',
    color: 'bg-gray-400'
  },
  {
    key: 'executive',
    label: 'المسار التنفيذي',
    color: 'bg-teal'
  }];

  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      {/* Background Photo with subtle overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2000"
          alt="Modern Office"
          className="w-full h-full object-cover opacity-[0.04]" />

      </div>

      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
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
            className="text-3xl md:text-4xl font-bold text-dark mb-4">

            الفرق بين <span className="text-gold">المسار التنفيذي</span> والمسار
            التقليدي
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              y: 15
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.15
            }}
            className="text-gray-500 text-lg max-w-2xl mx-auto">

            اكتشف لماذا يختار العملاء المميزون المسار التنفيذي بدلاً من الطرق
            التقليدية.
          </motion.p>
          <motion.div
            initial={{
              width: 0
            }}
            whileInView={{
              width: '60px'
            }}
            viewport={{
              once: true
            }}
            className="h-1 bg-gold mx-auto mt-4" />

        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-xl p-1.5 shadow-md border border-gray-100 gap-1">
            {tabs.map((tab) =>
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${activeTab === tab.key ? 'text-white shadow-sm' : 'text-gray-500 hover:text-dark'}`}>

                {activeTab === tab.key &&
              <motion.div
                layoutId="comparison-tab-bg"
                className={`absolute inset-0 ${tab.color} rounded-lg`}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 30
                }} />

              }
                <span className="relative z-10">{tab.label}</span>
              </button>
            )}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'compare' &&
          <motion.div
            key="compare"
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -20
            }}
            transition={{
              duration: 0.3
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Traditional Column */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden">
                {/* Column Photo */}
                <div className="relative h-44 overflow-hidden">
                  <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
                  alt="مستندات ورقية تقليدية"
                  className="w-full h-full object-cover grayscale opacity-60" />

                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
                  <div className="absolute bottom-4 right-6">
                    <h3 className="text-2xl font-bold text-gray-400">
                      المسار التقليدي
                    </h3>
                    <p className="text-sm text-gray-400">
                      الطريقة المعتادة للحصول على التمويل
                    </p>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  {traditionalPath.map((item, i) =>
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    x: 20
                  }}
                  animate={{
                    opacity: 1,
                    x: 0
                  }}
                  transition={{
                    delay: i * 0.08
                  }}
                  className="flex items-start gap-3">

                      <div className="w-6 h-6 rounded-full bg-rose/10 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5 text-rose" />
                      </div>
                      <span className="text-gray-500 leading-relaxed">
                        {item.text}
                      </span>
                    </motion.div>
                )}
                </div>
              </div>

              {/* Executive Column */}
              <div className="bg-white rounded-2xl shadow-lg border-2 border-gold/30 relative overflow-hidden">
                {/* Column Photo */}
                <div className="relative h-44 overflow-hidden">
                  <img
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=800"
                  alt="فريق تنفيذي محترف"
                  className="w-full h-full object-cover" />

                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-gold text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      الأفضل
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-6">
                    <h3 className="text-2xl font-bold text-dark">
                      المسار التنفيذي
                    </h3>
                    <p className="text-sm text-gray-500">
                      رحلة رأسمالية متكاملة بمعايير عالمية
                    </p>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  {executivePath.map((item, i) =>
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    x: -20
                  }}
                  animate={{
                    opacity: 1,
                    x: 0
                  }}
                  transition={{
                    delay: i * 0.08
                  }}
                  className="flex items-start gap-3">

                      <div className="w-6 h-6 rounded-full bg-emerald/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-emerald" />
                      </div>
                      <span className="text-dark leading-relaxed font-medium">
                        {item.text}
                      </span>
                    </motion.div>
                )}
                </div>
              </div>
            </motion.div>
          }

          {activeTab === 'traditional' &&
          <motion.div
            key="traditional"
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -20
            }}
            transition={{
              duration: 0.3
            }}
            className="max-w-2xl mx-auto">

              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 relative overflow-hidden">
                {/* Full-width photo */}
                <div className="relative h-52 overflow-hidden">
                  <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200"
                  alt="مستندات ورقية"
                  className="w-full h-full object-cover grayscale opacity-50" />

                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
                  <div className="absolute bottom-6 inset-x-0 text-center">
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3 shadow-md">
                      <X className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-500">
                      المسار التقليدي
                    </h3>
                    <p className="text-gray-400 mt-1">
                      تحديات ومخاطر تواجه معظم طالبي التمويل
                    </p>
                  </div>
                </div>
                <div className="p-10 space-y-5">
                  {traditionalPath.map((item, i) =>
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    x: 30
                  }}
                  animate={{
                    opacity: 1,
                    x: 0
                  }}
                  transition={{
                    delay: i * 0.1
                  }}
                  className="flex items-start gap-4 bg-rose/5 p-4 rounded-xl border border-rose/10">

                      <div className="w-8 h-8 rounded-full bg-rose/10 flex items-center justify-center shrink-0">
                        <X className="w-4 h-4 text-rose" />
                      </div>
                      <span className="text-gray-600 leading-relaxed">
                        {item.text}
                      </span>
                    </motion.div>
                )}
                </div>
              </div>
            </motion.div>
          }

          {activeTab === 'executive' &&
          <motion.div
            key="executive"
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -20
            }}
            transition={{
              duration: 0.3
            }}
            className="max-w-2xl mx-auto">

              <div className="bg-white rounded-2xl shadow-lg border-2 border-gold/20 relative overflow-hidden">
                {/* Full-width photo */}
                <div className="relative h-52 overflow-hidden">
                  <img
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=1200"
                  alt="اجتماع تنفيذي"
                  className="w-full h-full object-cover" />

                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
                  <div className="absolute bottom-6 inset-x-0 text-center">
                    <div className="w-16 h-16 rounded-full bg-gold-light flex items-center justify-center mx-auto mb-3 shadow-md">
                      <Sparkles className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark">
                      المسار التنفيذي
                    </h3>
                    <p className="text-gray-500 mt-1">
                      مزايا حصرية لعملاء الفئة العليا
                    </p>
                  </div>
                </div>
                <div className="p-10 space-y-5">
                  {executivePath.map((item, i) =>
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    x: -30
                  }}
                  animate={{
                    opacity: 1,
                    x: 0
                  }}
                  transition={{
                    delay: i * 0.1
                  }}
                  className="flex items-start gap-4 bg-emerald/5 p-4 rounded-xl border border-emerald/10">

                      <div className="w-8 h-8 rounded-full bg-emerald/10 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-emerald" />
                      </div>
                      <span className="text-dark leading-relaxed font-medium">
                        {item.text}
                      </span>
                    </motion.div>
                )}
                </div>
                <div className="px-10 pb-10 text-center">
                  <button
                  onClick={() =>
                  document.getElementById('cta-section')?.scrollIntoView({
                    behavior: 'smooth'
                  })
                  }
                  className="inline-flex items-center gap-2 bg-gradient-gold-amber text-white font-bold px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">

                    ابدأ مسارك التنفيذي
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </section>);

}