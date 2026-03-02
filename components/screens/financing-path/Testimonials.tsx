import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
const testimonials = [
{
  id: 1,
  name: 'أحمد السالم',
  role: 'الرئيس التنفيذي، مجموعة السالم',
  image:
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
  quote:
  'المسار التنفيذي لم يكن مجرد خدمة تمويلية، بل كان شراكة استراتيجية حقيقية. الدقة في تحليل وضعنا المالي والسرعة في الإنجاز تجاوزت كل توقعاتنا.',
  accent: 'gold',
  companyImage:
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=300'
},
{
  id: 2,
  name: 'سارة العبدالله',
  role: 'المدير المالي، شركة التقنية المتقدمة',
  image:
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
  quote:
  'الاحترافية والسرية التامة التي تعامل بها فريق كيه إي بي جعلتنا نشعر بالثقة في كل خطوة. حصلنا على شروط تمويلية لم نكن لنحصل عليها بمفردنا.',
  accent: 'teal',
  companyImage:
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=300'
},
{
  id: 3,
  name: 'خالد المنصور',
  role: 'رئيس مجلس الإدارة، المنصور القابضة',
  image:
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200',
  quote:
  'منهجية العمل لديهم تضاهي كبرى المؤسسات المالية العالمية. الملف التنفيذي الذي تم إعداده كان نقطة التحول في مفاوضاتنا مع جهات التمويل.',
  accent: 'amber',
  companyImage:
  'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&q=80&w=300'
}];

const accentBorders = {
  gold: 'border-t-gold',
  teal: 'border-t-teal',
  amber: 'border-t-amber'
};
export function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Photo with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2000"
          alt="قاعة اجتماعات تنفيذية"
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-light-warm/95" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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

            ماذا يقول <span className="text-teal">عملاؤنا</span>
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
            className="h-1 bg-teal mx-auto" />

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) =>
          <motion.div
            key={testimonial.id}
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
            }}
            transition={{
              delay: index * 0.2
            }}
            className={`bg-white rounded-xl shadow-lg border-t-4 ${accentBorders[testimonial.accent as keyof typeof accentBorders]} relative group hover:-translate-y-2 transition-transform duration-300 overflow-hidden`}>

              {/* Company photo at top of card */}
              <div className="relative h-28 overflow-hidden">
                <img
                src={testimonial.companyImage}
                alt="مقر الشركة"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
              </div>

              <div className="p-8 pt-4 relative">
                <Quote className="absolute top-2 left-6 w-10 h-10 text-gray-100 group-hover:text-gray-200 transition-colors" />

                <div className="flex items-center gap-4 mb-5 relative z-10">
                  <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md -mt-10" />

                  <div>
                    <h4 className="font-bold text-dark text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4 relative z-10">
                  {[...Array(5)].map((_, i) =>
                <Star key={i} className="w-4 h-4 fill-amber text-amber" />
                )}
                </div>

                <p className="text-gray-600 leading-relaxed relative z-10 italic text-sm">
                  "{testimonial.quote}"
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}