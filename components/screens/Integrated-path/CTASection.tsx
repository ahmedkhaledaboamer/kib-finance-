import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck, Award, Clock } from 'lucide-react';
interface CTASectionProps {
  onOpenContact: () => void;
}
export function CTASection({ onOpenContact }: CTASectionProps) {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-br from-kep-green-dark via-kep-green to-kep-green-dark">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay">
        <img
          src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1600"
          alt="CTA Background"
          className="w-full h-full object-cover" />

      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center text-white">
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
            className="text-3xl md:text-4xl lg:text-5xl font-cairo font-bold mb-8 leading-tight drop-shadow-lg">

            المسار الرأسمالي المتكامل نموذج تمويلي عالمي يضمن رحلة مالية راقية
          </motion.h2>

          <motion.div
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
            className="mb-16">

            <p className="font-bold text-kep-gold bg-black/20 inline-block px-6 py-3 rounded-2xl backdrop-blur-sm border border-white/10 text-xl md:text-2xl">
              كيه إي بي للتمويل ش.ذ.م.م ليست مجرد وسيط… بل شريك مالي استراتيجي
              يصنع للعميل مسارًا رأسماليًا يليق بطموحه.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.4,
              type: 'spring',
              bounce: 0.5
            }}
            className="relative inline-block">

            <button
              onClick={onOpenContact}
              className="px-12 py-6 bg-white text-kep-green-dark hover:bg-kep-cream rounded-2xl font-cairo font-bold text-2xl transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] flex items-center gap-4 group">

              <span>ابدأ مسارك الرأسمالي الآن</span>
              <ArrowLeft className="w-8 h-8 group-hover:-translate-x-3 transition-transform" />
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
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
              delay: 0.6
            }}
            className="mt-16 pt-10 border-t border-white/20 flex flex-wrap justify-center gap-8 md:gap-16">

            <div className="flex items-center gap-3 text-white/80">
              <ShieldCheck className="w-6 h-6 text-kep-gold" />
              <span className="font-bold text-lg">مرخصة رسمياً</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <Award className="w-6 h-6 text-kep-gold" />
              <span className="font-bold text-lg">شريك معتمد</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <Clock className="w-6 h-6 text-kep-gold" />
              <span className="font-bold text-lg">خبرة +15 سنة</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}