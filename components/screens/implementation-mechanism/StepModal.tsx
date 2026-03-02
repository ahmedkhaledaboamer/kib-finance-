import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, UserIcon, CheckCircleIcon, ImageIcon } from 'lucide-react';
interface StepData {
  number: number;
  title: string;
  subtitle: string;
  manager: string;
  actions: string[];
  image: string;
  color: string;
}
interface StepModalProps {
  step: StepData | null;
  onClose: () => void;
}
export function StepModal({ step, onClose }: StepModalProps) {
  if (!step) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
        style={{
          backgroundColor: 'rgba(0,0,0,0.6)'
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
          className="relative bg-white rounded-3xl max-w-5xl shadow-2xl w-full max-h-[90vh] overflow-y-auto"
          initial={{
            opacity: 0,
            scale: 0.85,
            y: 40
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            scale: 0.85,
            y: 40
          }}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 300
          }}
          onClick={(e) => e.stopPropagation()}
          dir="rtl">

          {/* Header image */}
          <div className="relative h-52 rounded-t-3xl overflow-hidden">
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-full object-cover" />

            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to bottom, ${step.color}99, ${step.color}dd)`
              }} />

            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg"
                  style={{
                    backgroundColor: step.color
                  }}>

                  {step.number}
                </div>
                <div>
                  <p className="text-white/80 text-sm font-medium">
                    المرحلة {step.number} من 10
                  </p>
                  <h2 className="text-white text-xl font-bold leading-tight">
                    {step.title}
                  </h2>
                </div>
              </div>
            </div>
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 left-4 w-9 h-9 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="إغلاق">

              <XIcon size={18} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-5">
            {/* Subtitle */}
            <div
              className="flex items-center gap-2 p-3 rounded-xl"
              style={{
                backgroundColor: step.color + '15'
              }}>

              <span
                className="text-sm font-bold"
                style={{
                  color: step.color
                }}>

                {step.subtitle}
              </span>
            </div>

            {/* Manager */}
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor: step.color + '20'
                }}>

                <UserIcon
                  size={20}
                  style={{
                    color: step.color
                  }} />

              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">
                  المسؤول التنفيذي
                </p>
                <p className="text-gray-800 font-bold">{step.manager}</p>
              </div>
            </div>

            {/* Actions */}
            <div>
              <h3 className="text-gray-800 font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircleIcon
                  size={20}
                  style={{
                    color: step.color
                  }} />

                الإجراءات التنفيذية
              </h3>
              <div className="space-y-2">
                {step.actions.map((action, i) =>
                <motion.div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl border border-gray-100"
                  initial={{
                    opacity: 0,
                    x: 20
                  }}
                  animate={{
                    opacity: 1,
                    x: 0
                  }}
                  transition={{
                    delay: i * 0.08
                  }}>

                    <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{
                      backgroundColor: step.color
                    }}>

                      {i + 1}
                    </div>
                    <span className="text-gray-700 font-medium">{action}</span>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Progress indicator */}
            <div className="pt-2">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                <span>تقدم المسار التنفيذي</span>
                <span>{step.number}/10</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(to left, ${step.color}, #06B6D4)`
                  }}
                  initial={{
                    width: 0
                  }}
                  animate={{
                    width: `${step.number / 10 * 100}%`
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3
                  }} />

              </div>
            </div>

            {/* PDF note */}
            <div className="flex items-center gap-2 p-3 bg-amber-50 rounded-xl border border-amber-100">
              <ImageIcon size={16} className="text-amber-500 flex-shrink-0" />
              <p className="text-amber-700 text-sm font-medium">
                تحميل ملف PDF للمسار التنفيذي — قريبًا
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>);

}