import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Modal } from './Modal';
import { MessageCircle, Phone, Mail } from 'lucide-react';
export function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section
      id="cta-section"
      className="relative py-24 bg-white overflow-hidden">

      {/* Decorative top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-teal to-amber opacity-50" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-cream rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          {/* Image Side */}
          <div className="md:w-1/2 relative min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=1600"
              alt="Executive Handshake"
              className="absolute inset-0 w-full h-full object-cover" />

            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent md:bg-gradient-to-r md:from-dark/80 md:to-transparent" />

            <div className="absolute bottom-8 right-8 text-white z-10">
              <h3 className="text-2xl font-bold mb-2">
                خطوتك القادمة تبدأ هنا
              </h3>
              <p className="text-white/80">
                نحن في انتظارك لبناء مسارك الرأسمالي.
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-center text-center md:text-right bg-white">
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
              className="text-3xl md:text-5xl font-bold text-dark mb-6">

              مستعد للارتقاء بأعمالك؟
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
              className="text-lg text-gray-600 mb-10 leading-relaxed">

              ادخل في شراكة رأسمالية حقيقية تُدار بسرية تامة، وتُنفّذ بثقة
              كاملة، وتُغلق بنتيجة تتجاوز التوقع.
            </motion.p>

            <motion.button
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
                delay: 0.4
              }}
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-gold-amber text-white font-bold text-xl px-12 py-5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 self-center md:self-start w-full md:w-auto mb-10">

              طلب استشارة تنفيذية
            </motion.button>

            {/* Quick Contact Options */}
            <div>
              <p className="text-sm text-gray-500 mb-4 font-medium">
                أو تواصل معنا مباشرة عبر:
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="#"
                  className="flex items-center gap-2 bg-emerald/10 text-emerald hover:bg-emerald hover:text-white px-4 py-2 rounded-full transition-colors text-sm font-bold">

                  <MessageCircle className="w-4 h-4" />
                  واتساب
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 bg-teal/10 text-teal-dark hover:bg-teal hover:text-white px-4 py-2 rounded-full transition-colors text-sm font-bold">

                  <Phone className="w-4 h-4" />
                  اتصال
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 bg-royal/10 text-royal hover:bg-royal hover:text-white px-4 py-2 rounded-full transition-colors text-sm font-bold">

                  <Mail className="w-4 h-4" />
                  إيميل
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="طلب استشارة تنفيذية">

        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            setIsModalOpen(false);
          }}>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-gray-700 font-medium text-sm">
                الاسم الكامل
              </label>
              <input
                type="text"
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-dark focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors" />

            </div>
            <div className="space-y-2">
              <label className="text-gray-700 font-medium text-sm">
                اسم الشركة
              </label>
              <input
                type="text"
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-dark focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors" />

            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-gray-700 font-medium text-sm">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-dark focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors" />

            </div>
            <div className="space-y-2">
              <label className="text-gray-700 font-medium text-sm">
                رقم الهاتف
              </label>
              <input
                type="tel"
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-dark focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-left"
                dir="ltr" />

            </div>
          </div>
          <div className="space-y-2">
            <label className="text-gray-700 font-medium text-sm">
              حجم التمويل المطلوب (تقريبياً)
            </label>
            <select className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-dark focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors appearance-none">
              <option>أقل من 10 مليون ريال</option>
              <option>10 - 50 مليون ريال</option>
              <option>50 - 100 مليون ريال</option>
              <option>أكثر من 100 مليون ريال</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-gray-700 font-medium text-sm">
              تفاصيل إضافية
            </label>
            <textarea
              rows={4}
              className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-dark focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none">
            </textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-gold-amber text-white font-bold text-lg py-4 rounded-md shadow-md hover:shadow-lg transition-all duration-300">

            إرسال الطلب
          </button>
        </form>
      </Modal>
    </section>);

}