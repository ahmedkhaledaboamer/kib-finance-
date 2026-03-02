"use client";
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { CheckCircleIcon, AwardIcon, BuildingIcon } from 'lucide-react';
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};
const identityItems = [
{
  num: '01',
  title: 'كيان مالي مستقل',
  desc: 'نمتلك بنية مؤسسية واضحة وصلاحيات تشغيلية محددة.'
},
{
  num: '02',
  title: 'شريك استراتيجي',
  desc: 'نرافق العميل في كل مرحلة من مراحل نموه المالي.'
},
{
  num: '03',
  title: 'خبرة تشغيلية عميقة',
  desc: 'معرفة واسعة بالقطاع المالي والتمويلي عبر سنوات من الخبرة.'
},
{
  num: '04',
  title: 'شبكة تمويلية واسعة',
  desc: 'علاقات قوية مع البنوك والجهات التمويلية داخل الدولة وخارجها.'
},
{
  num: '05',
  title: 'حلول متخصصة',
  desc: 'تصميم حلول تمويلية دقيقة تتناسب مع طبيعة كل نشاط.'
},
{
  num: '06',
  title: 'التزام مؤسسي',
  desc: 'العمل وفق سياسات واضحة ومعايير ثابتة لا تتغير.'
}];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  return (
    <section id="about" className="py-24 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16">

          <span className="inline-block text-gold font-bold text-sm tracking-widest uppercase mb-3 border border-gold/30 rounded-full px-4 py-1">
            الهوية المؤسسية
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-navy mb-4">
            من نحن؟ وما الذي <span className="gradient-text">نُمثّله؟</span>
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed text-lg">
            كيه إي بي للتمويل ش.ذ.م.م ليست مجرد شركة تعمل في مجال الوساطة
            المالية، بل هي كيان مؤسسي متكامل يقوم على رؤية واضحة، وقيم ثابتة،
            ونظام حوكمة صارم.
          </p>
        </motion.div>

        {/* Main content: images + text */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Images collage */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative">

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-48 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80"
                    alt="فريق كيه إي بي"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />

                </div>
                <div className="rounded-2xl overflow-hidden h-32 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80"
                    alt="مكتب كيه إي بي"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />

                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-2xl overflow-hidden h-32 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                    alt="اجتماع تمويلي"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />

                </div>
                <div className="rounded-2xl overflow-hidden h-48 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80"
                    alt="احترافية كيه إي بي"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />

                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{
                y: [0, -8, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute -bottom-6 right-8 bg-zinc-900 border border-white/10 rounded-2xl p-4 shadow-2xl">

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold/20 rounded-xl flex items-center justify-center">
                  <AwardIcon size={20} className="text-gold" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">
                    مؤسسة موثوقة
                  </div>
                  <div className="text-gold text-xs">
                    +15 سنة في القطاع المالي
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-teal/10 rounded-2xl flex items-center justify-center">
                <BuildingIcon size={24} className="text-teal" />
              </div>
              <div>
                <div className="text-sm text-gray-400">المقدمة</div>
                <div className="font-bold text-navy">
                  كيه إي بي للتمويل ش.ذ.م.م
                </div>
              </div>
            </div>

            <p className="text-gray-600 leading-loose mb-6 text-base">
              نحن نؤمن بأن التمويل ليس خدمة تُقدّم، بل مسؤولية تُدار، وشراكة
              تُبنى، وقرار استراتيجي يُحدد مستقبل الشركات والمشاريع.
            </p>
            <p className="text-gray-600 leading-loose mb-8 text-base">
              اعتمد مجلس الإدارة إطارًا فكريًا شاملًا يحدد هويتنا المؤسسية،
              ويضبط قيمنا، ويُحكم آليات الحوكمة، ويضع الأسس التي تُبنى عليها كل
              علاقة، وكل خدمة، وكل قرار.
            </p>

            <div className="space-y-3">
              {[
              'حضور مهني قوي يعكس قوة الشركة وثقة السوق',
              'قدرة تحليلية عالية — قراءة دقيقة للأرقام والمخاطر',
              'سرية تشغيلية — حماية كاملة لكل معلومة',
              'رؤية طويلة الأمد — ننظر للعميل كشريك لا كمعاملة'].
              map((item, i) =>
              <motion.div
                key={i}
                custom={3 + i}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="flex items-start gap-3">

                  <CheckCircleIcon
                  size={18}
                  className="text-teal mt-0.5 flex-shrink-0" />

                  <span className="text-gray-600 text-sm">{item}</span>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Identity grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {identityItems.map((item, i) =>
          <motion.div
            key={i}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            whileHover={{
              y: -4,
              boxShadow: '0 20px 40px rgba(15,23,42,0.08)'
            }}
            className="bg-white border border-gray-100 rounded-2xl p-6 cursor-default shadow-sm hover:shadow-lg transition-shadow">

              <div className="text-3xl font-black text-gold/20 mb-3">
                {item.num}
              </div>
              <h3 className="font-bold text-navy mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Wave divider → Services (zinc-950) */}
      <div className="wave-divider mt-16">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">

          <path
            d="M0 0L48 8C96 16 192 32 288 40C384 48 480 48 576 42.7C672 37 768 27 864 24C960 21 1056 27 1152 32C1248 37 1344 43 1392 45.3L1440 48V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z"
            fill="#09090b" />

        </svg>
      </div>
    </section>);

}