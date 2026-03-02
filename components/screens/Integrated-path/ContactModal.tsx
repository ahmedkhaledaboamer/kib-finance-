import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };
  return (
    <AnimatePresence>
      {isOpen &&
      <>
          <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          onClick={onClose}
          className="fixed inset-0 bg-kep-navy/60 backdrop-blur-sm z-50" />

          <motion.div
          initial={{
            opacity: 0,
            y: 100,
            scale: 0.95
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          exit={{
            opacity: 0,
            y: 100,
            scale: 0.95
          }}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 300
          }}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
          dir="rtl">

            <div className="h-1.5 w-full bg-gradient-to-r from-kep-green via-kep-gold to-kep-green-light" />
            <div className="p-6">
              <button
              onClick={onClose}
              className="absolute top-4 end-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">

                <X className="w-5 h-5" />
              </button>

              <h2 className="text-2xl font-cairo font-bold text-kep-navy mb-2">
                ابدأ مسارك الرأسمالي
              </h2>
              <p className="text-gray-600 mb-6 text-sm">
                دعنا نناقش كيف يمكننا بناء هيكل رأسمالي مستدام لشركتك.
              </p>

              {isSubmitted ?
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              className="flex flex-col items-center justify-center py-12 text-center">

                  <CheckCircle className="w-16 h-16 text-kep-green mb-4" />
                  <h3 className="text-xl font-bold text-kep-navy mb-2">
                    تم استلام طلبك بنجاح!
                  </h3>
                  <p className="text-gray-600">
                    سيتواصل معك أحد خبرائنا الماليين قريباً.
                  </p>
                </motion.div> :

            <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1">

                      الاسم الكامل
                    </label>
                    <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kep-green focus:border-transparent outline-none transition-all"
                  placeholder="أدخل اسمك الكامل" />

                  </div>
                  <div>
                    <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1">

                      رقم الهاتف
                    </label>
                    <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kep-green focus:border-transparent outline-none transition-all text-right"
                  placeholder="05x xxx xxxx"
                  dir="ltr" />

                  </div>
                  <div>
                    <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1">

                      البريد الإلكتروني
                    </label>
                    <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kep-green focus:border-transparent outline-none transition-all"
                  placeholder="example@company.com" />

                  </div>
                  <div>
                    <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1">

                      رسالتك
                    </label>
                    <textarea
                  id="message"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kep-green focus:border-transparent outline-none transition-all resize-none"
                  placeholder="نبذة مختصرة عن احتياجك التمويلي...">
                </textarea>
                  </div>
                  <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-kep-green to-kep-green-light text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">

                    أرسل طلبك
                  </button>
                </form>
            }
            </div>
          </motion.div>
        </>
      }
    </AnimatePresence>);

}