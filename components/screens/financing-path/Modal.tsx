import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}
export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
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
          className="fixed inset-0 bg-dark/60 backdrop-blur-sm z-[100]" />

          <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 pointer-events-none">
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
              damping: 25,
              stiffness: 300
            }}
            className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl pointer-events-auto">

              <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-100 p-5 flex justify-between items-center z-20">
                <h3 className="text-xl font-bold text-dark">{title}</h3>
                <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-rose hover:bg-rose/10 rounded-full transition-colors">

                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6 md:p-8">{children}</div>
            </motion.div>
          </div>
        </>
      }
    </AnimatePresence>);

}