'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
const faqs = [
{
  id: 1,
  question: 'ما هو المسار التمويلي التنفيذي؟',
  answer:
  'هو إطار مخصص للعملاء الذين تتطلب احتياجاتهم المالية معالجة دقيقة ورؤية استراتيجية. لا نقدم تمويلاً تقليدياً، بل رحلة رأسمالية متكاملة تُدار بسرية واحترافية تستند إلى منهجيات المؤسسات المالية الكبرى.'
},
{
  id: 2,
  question: 'كم تستغرق عملية الحصول على التمويل؟',
  answer:
  'تختلف المدة بناءً على حجم التمويل وتعقيد الهيكل المالي، ولكن في المتوسط، وبفضل علاقاتنا المباشرة مع صناع القرار، نختصر الوقت بشكل كبير مقارنة بالمسارات التقليدية، بمتوسط إنجاز يصل إلى 15 يوماً بعد اكتمال الملف.'
},
{
  id: 3,
  question: 'هل تضمنون الحصول على الموافقة التمويلية؟',
  answer:
  'من خلال "التدقيق الاستراتيجي الشامل" في المرحلة الأولى، نحدد بدقة فرص النجاح. إذا قررنا المضي قدماً، فإن نسبة نجاح ملفاتنا تتجاوز 95% بفضل الإعداد المتقن والاختيار الدقيق للجهة التمويلية المناسبة.'
},
{
  id: 4,
  question: 'ما هي أنواع الشركات التي تخدمونها؟',
  answer:
  'نخدم الشركات المتوسطة والكبرى، مشاريع التوسع والنمو، الشركات متعددة الجنسيات العاملة في السوق المحلي، والشركات الساعية لإعادة الهيكلة المالية.'
},
{
  id: 5,
  question: 'كيف تضمنون سرية بياناتنا المالية؟',
  answer:
  'نلتزم بأعلى معايير السرية والخصوصية. يتم توقيع اتفاقية عدم إفصاح (NDA) صارمة قبل الاطلاع على أي مستند، وتُدار كافة البيانات عبر أنظمة آمنة ومغلقة.'
}];

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);
  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
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

            الأسئلة <span className="text-gold">الشائعة</span>
          </motion.h2>
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
            className="h-1 bg-gold mx-auto" />

        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Side Photo — Consultant */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="lg:w-5/12 w-full">

            <div className="sticky top-32 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800"
                  alt="استشاري مالي يقدم المشورة"
                  className="w-full h-72 lg:h-80 object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                <div className="absolute bottom-6 right-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-1">فريق استشاري متخصص</h3>
                  <p className="text-white/80 text-sm">
                    نجيب على جميع استفساراتكم بشفافية تامة
                  </p>
                </div>
              </div>

              {/* Second smaller photo */}
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800"
                  alt="مصافحة شراكة"
                  className="w-full h-48 object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white text-sm font-bold">
                        +95% نسبة نجاح
                      </span>
                    </div>
                    <div className="bg-gold/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white text-sm font-bold">
                        15 يوم متوسط
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="lg:w-7/12 w-full space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  key={faq.id}
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
                    delay: index * 0.1
                  }}
                  className={`border rounded-lg overflow-hidden transition-colors duration-300 ${isOpen ? 'border-gold bg-gold-light/20' : 'border-gray-200 bg-white hover:border-gold/50'}`}>

                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 flex justify-between items-center text-right focus:outline-none">

                    <span
                      className="font-bold text-dark text-lg pr-4 border-r-4 border-transparent"
                      style={{
                        borderColor: isOpen ? '#C9A227' : 'transparent'
                      }}>

                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-6 h-6 text-gold shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />

                  </button>
                  <AnimatePresence>
                    {isOpen &&
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0
                      }}
                      animate={{
                        height: 'auto',
                        opacity: 1
                      }}
                      exit={{
                        height: 0,
                        opacity: 0
                      }}
                      transition={{
                        duration: 0.3
                      }}>

                        <div className="px-6 pb-5 pt-0 text-gray-600 leading-relaxed pr-8">
                          {faq.answer}
                        </div>
                      </motion.div>
                    }
                  </AnimatePresence>
                </motion.div>);

            })}
          </div>
        </div>
      </div>
    </section>);

}