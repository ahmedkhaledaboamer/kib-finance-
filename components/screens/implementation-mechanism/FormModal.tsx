import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  XIcon,
  CheckCircleIcon,
  SendIcon,
  PhoneIcon,
  UserIcon,
  MessageSquareIcon,
  BriefcaseIcon } from
'lucide-react';
interface FormModalProps {
  onClose: () => void;
}
export function FormModal({ onClose }: FormModalProps) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const services = [
  'تمويل تجاري',
  'تمويل عقاري',
  'تمويل مشاريع',
  'تمويل شخصي',
  'استشارات تمويلية',
  'أخرى'];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'الاسم مطلوب';
    if (!form.phone.trim()) newErrors.phone = 'رقم الهاتف مطلوب';
    if (!form.service) newErrors.service = 'يرجى اختيار نوع الخدمة';
    if (!form.message.trim()) newErrors.message = 'الرسالة مطلوبة';
    return newErrors;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    setSuccess(true);
  };
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
        style={{
          backgroundColor: 'rgba(0,0,0,0.65)'
        }}
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        exit={{
          opacity: 0
        }}
        onClick={onClose}>

        <motion.div
          className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
          initial={{
            opacity: 0,
            scale: 0.85,
            y: 50
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            scale: 0.85,
            y: 50
          }}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 280
          }}
          onClick={(e) => e.stopPropagation()}
          dir="rtl">

          {/* Header */}
          <div
            className="relative p-6 text-white"
            style={{
              background: 'linear-gradient(135deg, #2563EB, #4F46E5)'
            }}>

            <button
              onClick={onClose}
              className="absolute top-4 left-4 w-9 h-9 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors"
              aria-label="إغلاق">

              <XIcon size={18} />
            </button>
            <h2 className="text-2xl font-black mb-1">ابدأ طلبك الآن</h2>
            <p className="text-blue-100 text-sm font-medium">
              فريقنا التنفيذي سيتواصل معك خلال 24 ساعة
            </p>
          </div>

          <div className="p-6">
            {success ?
            <motion.div
              className="text-center py-8"
              initial={{
                opacity: 0,
                scale: 0.8
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              transition={{
                type: 'spring',
                damping: 20
              }}>

                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon size={40} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-black text-gray-800 mb-2">
                  تم إرسال طلبك!
                </h3>
                <p className="text-gray-500 font-medium mb-6">
                  سيتواصل معك فريقنا التنفيذي في أقرب وقت ممكن
                </p>
                <button
                onClick={onClose}
                className="px-8 py-3 rounded-2xl text-white font-bold transition-opacity hover:opacity-90"
                style={{
                  background: 'linear-gradient(135deg, #2563EB, #4F46E5)'
                }}>

                  إغلاق
                </button>
              </motion.div> :

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">
                    الاسم الكامل
                  </label>
                  <div className="relative">
                    <UserIcon
                    size={16}
                    className="absolute top-3.5 right-3 text-gray-400" />

                    <input
                    type="text"
                    value={form.name}
                    onChange={(e) => {
                      setForm((f) => ({
                        ...f,
                        name: e.target.value
                      }));
                      setErrors((er) => ({
                        ...er,
                        name: ''
                      }));
                    }}
                    placeholder="أدخل اسمك الكامل"
                    className={`w-full pr-9 pl-4 py-3 rounded-xl border text-right font-medium text-gray-800 placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-blue-300 ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:border-blue-400'}`} />

                  </div>
                  {errors.name &&
                <p className="text-red-500 text-xs mt-1 font-medium">
                      {errors.name}
                    </p>
                }
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">
                    رقم الهاتف
                  </label>
                  <div className="relative">
                    <PhoneIcon
                    size={16}
                    className="absolute top-3.5 right-3 text-gray-400" />

                    <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => {
                      setForm((f) => ({
                        ...f,
                        phone: e.target.value
                      }));
                      setErrors((er) => ({
                        ...er,
                        phone: ''
                      }));
                    }}
                    placeholder="+971 XX XXX XXXX"
                    className={`w-full pr-9 pl-4 py-3 rounded-xl border text-right font-medium text-gray-800 placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-blue-300 ${errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:border-blue-400'}`} />

                  </div>
                  {errors.phone &&
                <p className="text-red-500 text-xs mt-1 font-medium">
                      {errors.phone}
                    </p>
                }
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">
                    نوع الخدمة
                  </label>
                  <div className="relative">
                    <BriefcaseIcon
                    size={16}
                    className="absolute top-3.5 right-3 text-gray-400" />

                    <select
                    value={form.service}
                    onChange={(e) => {
                      setForm((f) => ({
                        ...f,
                        service: e.target.value
                      }));
                      setErrors((er) => ({
                        ...er,
                        service: ''
                      }));
                    }}
                    className={`w-full pr-9 pl-4 py-3 rounded-xl border text-right font-medium text-gray-800 outline-none transition-all focus:ring-2 focus:ring-blue-300 appearance-none ${errors.service ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:border-blue-400'}`}>

                      <option value="">اختر نوع الخدمة</option>
                      {services.map((s) =>
                    <option key={s} value={s}>
                          {s}
                        </option>
                    )}
                    </select>
                  </div>
                  {errors.service &&
                <p className="text-red-500 text-xs mt-1 font-medium">
                      {errors.service}
                    </p>
                }
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">
                    الرسالة
                  </label>
                  <div className="relative">
                    <MessageSquareIcon
                    size={16}
                    className="absolute top-3.5 right-3 text-gray-400" />

                    <textarea
                    value={form.message}
                    onChange={(e) => {
                      setForm((f) => ({
                        ...f,
                        message: e.target.value
                      }));
                      setErrors((er) => ({
                        ...er,
                        message: ''
                      }));
                    }}
                    placeholder="اكتب رسالتك هنا..."
                    rows={3}
                    className={`w-full pr-9 pl-4 py-3 rounded-xl border text-right font-medium text-gray-800 placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-blue-300 resize-none ${errors.message ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:border-blue-400'}`} />

                  </div>
                  {errors.message &&
                <p className="text-red-500 text-xs mt-1 font-medium">
                      {errors.message}
                    </p>
                }
                </div>

                <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl text-white font-black text-lg flex items-center justify-center gap-2 transition-opacity hover:opacity-90 disabled:opacity-70"
                style={{
                  background: 'linear-gradient(135deg, #2563EB, #4F46E5)'
                }}>

                  {loading ?
                <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      جاري الإرسال...
                    </> :

                <>
                      <SendIcon size={18} />
                      إرسال الطلب
                    </>
                }
                </button>
              </form>
            }
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>);

}