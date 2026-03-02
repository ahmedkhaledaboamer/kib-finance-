"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  XIcon,
  CheckCircleIcon,
  SendIcon,
  PhoneIcon,
  MailIcon,
  UserIcon,
  MessageSquareIcon } from
'lucide-react';
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };
  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    }, 300);
  };
  return (
    <AnimatePresence>
      {isOpen &&
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
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
          className="absolute inset-0 bg-navy/80 modal-backdrop"
          onClick={handleClose} />


          {/* Modal */}
          <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 20
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
            y: 20
          }}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 300
          }}
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden z-10"
          dir="rtl">

            {/* Header */}
            <div className="bg-gradient-to-l from-navy to-navy-light px-6 py-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">
                  طلب استشارة مجانية
                </h2>
                <p className="text-gold text-sm mt-0.5">
                  سيتواصل معك فريقنا خلال 24 ساعة
                </p>
              </div>
              <button
              onClick={handleClose}
              className="text-white/60 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10">

                <XIcon size={20} />
              </button>
            </div>

            {/* Gold accent line */}
            <div className="h-1 bg-gradient-to-l from-gold to-gold-light" />

            <div className="p-6">
              <AnimatePresence mode="wait">
                {!submitted ?
              <motion.form
                key="form"
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1
                }}
                exit={{
                  opacity: 0
                }}
                onSubmit={handleSubmit}
                className="space-y-4">

                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">
                        الاسم الكامل <span className="text-coral">*</span>
                      </label>
                      <div className="relative">
                        <UserIcon
                      size={16}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-navy/40" />

                        <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        name: e.target.value
                      }))
                      }
                      placeholder="أدخل اسمك الكامل"
                      className="w-full pr-9 pl-4 py-3 border border-gray-200 rounded-xl text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all text-sm" />

                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">
                        رقم الهاتف <span className="text-coral">*</span>
                      </label>
                      <div className="relative">
                        <PhoneIcon
                      size={16}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-navy/40" />

                        <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        phone: e.target.value
                      }))
                      }
                      placeholder="+971 XX XXX XXXX"
                      className="w-full pr-9 pl-4 py-3 border border-gray-200 rounded-xl text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all text-sm"
                      dir="ltr" />

                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">
                        البريد الإلكتروني
                      </label>
                      <div className="relative">
                        <MailIcon
                      size={16}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-navy/40" />

                        <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        email: e.target.value
                      }))
                      }
                      placeholder="example@email.com"
                      className="w-full pr-9 pl-4 py-3 border border-gray-200 rounded-xl text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all text-sm"
                      dir="ltr" />

                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">
                        رسالتك
                      </label>
                      <div className="relative">
                        <MessageSquareIcon
                      size={16}
                      className="absolute right-3 top-3.5 text-navy/40" />

                        <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        message: e.target.value
                      }))
                      }
                      placeholder="أخبرنا عن احتياجاتك التمويلية..."
                      className="w-full pr-9 pl-4 py-3 border border-gray-200 rounded-xl text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all text-sm resize-none" />

                      </div>
                    </div>

                    <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{
                    scale: 1.02
                  }}
                  whileTap={{
                    scale: 0.98
                  }}
                  className="w-full bg-gradient-to-l from-gold to-gold-light text-navy font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-gold/30 disabled:opacity-70 transition-all">

                      {loading ?
                  <div className="w-5 h-5 border-2 border-navy/30 border-t-navy rounded-full animate-spin" /> :

                  <>
                          <SendIcon size={16} />
                          إرسال الطلب
                        </>
                  }
                    </motion.button>
                  </motion.form> :

              <motion.div
                key="success"
                initial={{
                  opacity: 0,
                  scale: 0.8
                }}
                animate={{
                  opacity: 1,
                  scale: 1
                }}
                className="py-8 text-center">

                    <motion.div
                  initial={{
                    scale: 0
                  }}
                  animate={{
                    scale: 1
                  }}
                  transition={{
                    type: 'spring',
                    delay: 0.1
                  }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">

                      <CheckCircleIcon size={40} className="text-emerald" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-navy mb-2">
                      تم إرسال طلبك بنجاح!
                    </h3>
                    <p className="text-gray-500 text-sm mb-6">
                      سيتواصل معك فريق كيه إي بي خلال 24 ساعة
                    </p>
                    <motion.button
                  whileHover={{
                    scale: 1.02
                  }}
                  whileTap={{
                    scale: 0.98
                  }}
                  onClick={handleClose}
                  className="bg-navy text-white font-semibold px-8 py-3 rounded-xl">

                      إغلاق
                    </motion.button>
                  </motion.div>
              }
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      }
    </AnimatePresence>);

}