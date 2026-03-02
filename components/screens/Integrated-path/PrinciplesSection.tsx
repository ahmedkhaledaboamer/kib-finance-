import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Scale,
  ShieldCheck,
  Handshake,
  Infinity } from
'lucide-react';
const principles = [
{
  id: 1,
  title: 'تعظيم القيمة قبل التمويل',
  desc: 'نبني قيمة مالية حقيقية قبل التوجه لأي جهة تمويلية',
  icon: TrendingUp,
  color: 'text-kep-green',
  bg: 'bg-kep-green/10',
  borderHover: 'group-hover:border-kep-green',
  shadowHover: 'hover:shadow-kep-green/20'
},
{
  id: 2,
  title: 'هندسة رأس مال متوازن ومستدام',
  desc: 'تصميم هيكل رأسمالي يحقق التوازن بين النمو والاستقرار',
  icon: Scale,
  color: 'text-kep-navy',
  bg: 'bg-kep-navy/10',
  borderHover: 'group-hover:border-kep-navy',
  shadowHover: 'hover:shadow-kep-navy/20'
},
{
  id: 3,
  title: 'هوية ائتمانية قوية وجاهزة للعرض المؤسسي',
  desc: 'صياغة صورة ائتمانية تعكس قوة النشاط الحقيقية',
  icon: ShieldCheck,
  color: 'text-kep-gold',
  bg: 'bg-kep-gold/10',
  borderHover: 'group-hover:border-kep-gold',
  shadowHover: 'hover:shadow-kep-gold/20'
},
{
  id: 4,
  title: 'مواءمة دقيقة بين احتياج العميل وبرامج التمويل',
  desc: 'اختيار البرنامج التمويلي الأنسب لكل حالة بدقة',
  icon: Handshake,
  color: 'text-kep-orange',
  bg: 'bg-kep-orange/10',
  borderHover: 'group-hover:border-kep-orange',
  shadowHover: 'hover:shadow-kep-orange/20'
},
{
  id: 5,
  title: 'شراكة رأسمالية طويلة المدى بعد الإغلاق',
  desc: 'دعم مالي واستراتيجي مستمر يتجاوز لحظة التمويل',
  icon: Infinity,
  color: 'text-kep-purple',
  bg: 'bg-kep-purple/10',
  borderHover: 'group-hover:border-kep-purple',
  shadowHover: 'hover:shadow-kep-purple/20'
}];

export function PrinciplesSection() {
  return (
    <section
      className="py-32 bg-white relative overflow-hidden"
      id="principles">

      {/* Animated SVG Background */}
      <div className="absolute inset-0 bg-dots-pattern opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-kep-navy/5 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-kep-cream text-kep-gold mb-6 rotate-3 shadow-sm">

            <ShieldCheck className="w-8 h-8" />
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
            className="text-4xl md:text-5xl font-cairo font-bold text-kep-navy mb-6 leading-tight">

            المبادئ الأساسية للمسار
          </motion.h2>
          <motion.div
            initial={{
              opacity: 0,
              width: 0
            }}
            whileInView={{
              opacity: 1,
              width: '100px'
            }}
            viewport={{
              once: true
            }}
            className="h-1.5 bg-gradient-to-r from-kep-green to-kep-gold mx-auto rounded-full mb-6" />

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
            className="text-gray-600 text-lg md:text-xl">

            خمسة ركائز أساسية نعتمد عليها لبناء مسار رأسمالي متين ومستدام لشركتك
          </motion.p>
        </div>

        <div className="relative">
          <div className="flex flex-wrap justify-center gap-8 relative z-10">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={principle.id}
                  initial={{
                    opacity: 0,
                    y: 50,
                    scale: 0.9
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1
                  }}
                  viewport={{
                    once: true,
                    margin: '-50px'
                  }}
                  transition={{
                    delay: index * 0.15,
                    type: 'spring',
                    bounce: 0.4
                  }}
                  className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] relative group h-full">

                  <div
                    className={`relative h-full bg-white rounded-3xl p-6 shadow-lg shadow-gray-100 border-2 border-transparent ${principle.borderHover} ${principle.shadowHover} transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-2`}>

                    <div className="absolute top-4 start-4 text-gray-200 font-cairo font-black text-4xl opacity-30 transition-all">
                      0{principle.id}
                    </div>

                    <div
                      className={`w-20 h-20 rounded-2xl ${principle.bg} ${principle.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10`}>

                      <Icon className="w-10 h-10" />
                    </div>

                    <h3 className="text-xl font-cairo font-bold text-kep-navy mb-4 leading-snug relative z-10">
                      {principle.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed relative z-10 mt-auto">
                      {principle.desc}
                    </p>
                  </div>
                </motion.div>);

            })}
          </div>
        </div>
      </div>
    </section>);

}