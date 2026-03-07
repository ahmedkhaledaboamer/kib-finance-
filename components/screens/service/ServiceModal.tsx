"use client";
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { ServiceItem } from '@/components/screens/service/services';
import Image from 'next/image';
interface ServiceModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
  locale: string;
}
export function ServiceModal({
  service,
  isOpen,
  onClose,
  locale,
}: ServiceModalProps) {
  const t = useTranslations('servicesPage.modal');
  const tService = useTranslations('servicesPage.serviceItems');
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

  if (!service) return null;

  const Icon = service.icon;
  const categoryLabel = t(`categories.${service.category}`) || service.category;
  const title = tService(`${service.id}.title`);
  const desc = tService(`${service.id}.desc`);
  const items = (tService.raw(`${service.id}.items`) as string[]) || [];
  const isRTL = locale === "ar";

  return (
    <AnimatePresence>
      {isOpen &&
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
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
          className="absolute inset-0 bg-[#0F2439]/80 backdrop-blur-sm" />


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
          transition={{
            type: 'spring',
            duration: 0.5
          }}
          className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title">

            {/* Close Button */}
            <button
            onClick={onClose}
            className="cursor-pointer absolute top-4 left-4 z-20 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-colors"
            aria-label="Close modal">

              <X className="w-6 h-6" />
            </button>

            {/* Header Image */}
            <div className="relative h-64 sm:h-72 w-full shrink-0 overflow-hidden">
              <Image
                src={service.image}
                alt={title}
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F] via-[#1E3A5F]/60 to-transparent" />

              {/* Diagonal Line Pattern Overlay */}
              <div
              className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage:
                'repeating-linear-gradient(45deg, white, white 1px, transparent 1px, transparent 10px)'
              }} />


              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white relative z-10">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 bg-[#D4AF37] rounded-xl text-[#1E3A5F]">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#D4AF37] font-medium text-sm">
                        {t('serviceNumber')} {service.id}
                      </span>
                      <span className="bg-[#D4AF37]/20 text-[#D4AF37] text-xs px-2 py-0.5 rounded-full border border-[#D4AF37]/30">
                        {categoryLabel}
                      </span>
                    </div>
                    <h2
                    id="modal-title"
                    className="text-3xl sm:text-4xl font-bold">

                      {title}
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 overflow-y-auto">
              <p className={`text-xl text-gray-700 mb-8 leading-relaxed font-medium px-2 border-[#D4AF37]  ${!isRTL ? 'border-l-4 border-[#D4AF37]' : 'border-r-4 border-[#D4AF37]'}`}>
                {desc}
              </p>

              <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">
                {t('includes')}
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {items.map((item, idx) =>
              <motion.li
                key={idx}
                initial={{
                  opacity: 0,
                  x: 20
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  delay: 0.2 + idx * 0.1
                }}
                className="flex items-start gap-3 p-4 bg-[#F1F5F9] rounded-lg border border-gray-100">

                    <CheckCircle2 className="w-6 h-6 text-[#059669] shrink-0" />
                    <span className="text-gray-800 font-medium">{item}</span>
                  </motion.li>
              )}
              </ul>
            </div>

            {/* Footer */}
            <div className="p-6 sm:p-8 bg-gray-50 border-t border-gray-100 mt-auto flex flex-col sm:flex-row justify-end gap-4 shrink-0">
              <button
              onClick={onClose}
              className="cursor-pointer px-6 py-3 rounded-lg font-bold text-gray-600 hover:bg-gray-200 transition-colors">

                {t('close')}
              </button>
              <Link
              href="/implementation-mechanism"
              className="cursor-pointer px-8 py-3 rounded-lg font-bold bg-[#1E3A5F] text-white hover:bg-[#D4AF37] hover:text-[#1E3A5F] transition-colors shadow-lg shadow-[#1E3A5F]/20 flex items-center justify-center gap-2">
                {t('requestService')}
              </Link>
            </div>
          </motion.div>
        </div>
      }
    </AnimatePresence>);

}