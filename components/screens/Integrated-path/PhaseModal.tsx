import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Target, CheckCircle2, Sparkles } from 'lucide-react';
import { PhaseData } from './phases';
interface PhaseModalProps {
  phase: PhaseData | null;
  isOpen: boolean;
  onClose: () => void;
}
export function PhaseModal({ phase, isOpen, onClose }: PhaseModalProps) {
  if (!phase) return null;
  const Icon = phase.icon;
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
          className="fixed inset-0 bg-kep-navy/80 backdrop-blur-md z-50" />

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
          className="fixed top-4 bottom-4 left-4 right-4 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-3xl md:h-auto md:max-h-[90vh] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          dir="rtl">

            <div className="relative h-48 md:h-64 shrink-0">
              <img
              src={phase.image}
              alt={phase.title}
              className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-kep-navy/90 to-transparent" />
              <button
              onClick={onClose}
              className="absolute top-4 end-4 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full transition-colors">

                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-6 start-6 end-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div
                  className={`p-2 rounded-lg bg-white/20 backdrop-blur-md`}>

                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-kep-gold font-bold tracking-wider text-sm">
                    المرحلة {phase.id}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-cairo font-bold mb-1">
                  {phase.title.split(':')[1]?.trim() || phase.title}
                </h2>
                <p className="text-white/80 font-medium">{phase.subtitle}</p>
              </div>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto flex-1 bg-kep-cream/30">
              <div className="space-y-8">
                {/* Goal */}
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-kep-orange/10 text-kep-orange rounded-lg shrink-0 mt-1">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-cairo font-bold text-kep-navy mb-2">
                        هدف المرحلة
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {phase.goal}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tasks */}
                <div>
                  <h3 className="text-xl font-cairo font-bold text-kep-navy mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-kep-gold" />
                    ما يتم تنفيذه
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {phase.tasks.map((task, idx) =>
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 20
                    }}
                    animate={{
                      opacity: 1,
                      x: 0
                    }}
                    transition={{
                      delay: idx * 0.1
                    }}
                    key={idx}
                    className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-50">

                        <CheckCircle2 className="w-5 h-5 text-kep-green shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">
                          {task}
                        </span>
                      </motion.div>
                  )}
                  </div>
                </div>

                {/* Output */}
                <div className="bg-gradient-to-r from-kep-green/10 to-transparent p-6 rounded-xl border-s-4 border-kep-green">
                  <h3 className="text-lg font-cairo font-bold text-kep-green-dark mb-2">
                    المخرج النهائي
                  </h3>
                  <p className="text-gray-800 font-medium text-lg">
                    {phase.output}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      }
    </AnimatePresence>);

}