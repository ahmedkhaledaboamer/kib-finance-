'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <AnimatePresence>
      {isVisible &&
      <motion.button
        initial={{
          opacity: 0,
          scale: 0.5,
          y: 20
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0
        }}
        exit={{
          opacity: 0,
          scale: 0.5,
          y: 20
        }}
        onClick={scrollToTop}
        className="fixed bottom-8 left-8 z-50 p-3 bg-teal text-white rounded-full shadow-lg hover:bg-teal-dark hover:shadow-xl transition-all duration-300 group"
        aria-label="العودة للأعلى">

          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      }
    </AnimatePresence>);

}