"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, Landmark } from 'lucide-react';
import { ServiceItem, servicesData } from '@/data/services';
interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: ServiceItem | null;
}
export function ContactFormModal({
  isOpen,
  onClose,
  preselectedService
}: ContactFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceId: '',
    message: ''
  });
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        serviceId: preselectedService.id.toString()
      }));
    }
  }, [preselectedService]);
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      // Close modal after showing success message
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceId: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };
  const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>

  {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <AnimatePresence>
      {isOpen &&
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
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
          className="absolute inset-0 bg-[#0F2439]/90 backdrop-blur-md" />


          {/* Modal Content */}
          <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            y: 20
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
            y: 20
          }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          role="dialog"
          aria-modal="true">

            {/* Gold Top Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] via-[#D4AF37] to-[#059669] z-20" />

            {/* Header */}
            <div className="bg-[#1E3A5F] p-6 sm:p-8 text-white relative shrink-0 overflow-hidden">
              {/* Diagonal Line Pattern Overlay */}
              <div
              className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage:
                'repeating-linear-gradient(45deg, white, white 1px, transparent 1px, transparent 10px)'
              }} />


              <button
              onClick={onClose}
              className="absolute top-6 left-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10">

                <X className="w-5 h-5" />
              </button>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <Landmark className="w-6 h-6 text-[#D4AF37]" />
                  <h2 className="text-2xl sm:text-3xl font-bold">
                    طلب خدمة تمويل
                  </h2>
                </div>
                <p className="text-gray-300 pr-9">
                  يرجى تعبئة النموذج أدناه وسيقوم فريقنا بالتواصل معك في أقرب
                  وقت.
                </p>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 overflow-y-auto max-h-[70vh]">
              {isSuccess ?
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              className="flex flex-col items-center justify-center py-12 text-center relative">

                  {/* Confetti Animation */}
                  <motion.div
                initial={{
                  scale: 0,
                  opacity: 1,
                  x: 0,
                  y: 0
                }}
                animate={{
                  scale: 2,
                  opacity: 0,
                  x: -50,
                  y: -50
                }}
                transition={{
                  duration: 1,
                  ease: 'easeOut'
                }}
                className="absolute top-1/4 left-1/3 w-4 h-4 rounded-full bg-[#D4AF37]" />

                  <motion.div
                initial={{
                  scale: 0,
                  opacity: 1,
                  x: 0,
                  y: 0
                }}
                animate={{
                  scale: 1.5,
                  opacity: 0,
                  x: 50,
                  y: -80
                }}
                transition={{
                  duration: 1,
                  ease: 'easeOut',
                  delay: 0.1
                }}
                className="absolute top-1/4 right-1/3 w-3 h-3 rounded-full bg-[#059669]" />

                  <motion.div
                initial={{
                  scale: 0,
                  opacity: 1,
                  x: 0,
                  y: 0
                }}
                animate={{
                  scale: 2.5,
                  opacity: 0,
                  x: 20,
                  y: -30
                }}
                transition={{
                  duration: 1.2,
                  ease: 'easeOut',
                  delay: 0.2
                }}
                className="absolute top-1/3 right-1/4 w-5 h-5 rounded-full bg-[#1E3A5F]" />


                  <CheckCircle className="w-20 h-20 text-[#059669] mb-6 relative z-10" />
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-2">
                    تم إرسال طلبك بنجاح!
                  </h3>
                  <p className="text-gray-600">
                    سنتواصل معك قريباً لمناقشة تفاصيل التمويل.
                  </p>
                </motion.div> :

            <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                    htmlFor="name"
                    className="block text-sm font-bold text-[#1E3A5F]">

                        الاسم الكامل <span className="text-red-500">*</span>
                      </label>
                      <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="أدخل اسمك الكامل" />

                    </div>
                    <div className="space-y-2">
                      <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-[#1E3A5F]">

                        رقم الهاتف <span className="text-red-500">*</span>
                      </label>
                      <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    dir="ltr"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white text-start"
                    placeholder="+971 XX XXX XXXX" />

                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                  htmlFor="email"
                  className="block text-sm font-bold text-[#1E3A5F]">

                      البريد الإلكتروني <span className="text-red-500">*</span>
                    </label>
                    <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  dir="ltr"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white text-start"
                  placeholder="example@domain.com" />

                  </div>

                  <div className="space-y-2">
                    <label
                  htmlFor="serviceId"
                  className="block text-sm font-bold text-[#1E3A5F]">

                      الخدمة المطلوبة <span className="text-red-500">*</span>
                    </label>
                    <select
                  id="serviceId"
                  name="serviceId"
                  required
                  value={formData.serviceId}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white appearance-none">

                      <option value="" disabled>
                        اختر الخدمة المناسبة
                      </option>
                      {servicesData.map((service) =>
                  <option key={service.id} value={service.id}>
                          {service.id} - {service.titleAr}
                        </option>
                  )}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label
                  htmlFor="message"
                  className="block text-sm font-bold text-[#1E3A5F]">

                      رسالتك (اختياري)
                    </label>
                    <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                  placeholder="أضف أي تفاصيل إضافية حول احتياجاتك التمويلية..." />

                  </div>

                  <div className="pt-4 border-t border-gray-100 flex justify-end gap-4">
                    <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 rounded-lg font-bold text-gray-600 hover:bg-gray-200 transition-colors">

                      إلغاء
                    </button>
                    <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 rounded-lg font-bold bg-[#D4AF37] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white transition-colors shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">

                      {isSubmitting ?
                  <span className="animate-pulse">جاري الإرسال...</span> :

                  <>
                          إرسال الطلب
                          <Send className="w-4 h-4" />
                        </>
                  }
                    </button>
                  </div>
                </form>
            }
            </div>
          </motion.div>
        </div>
      }
    </AnimatePresence>);

}