import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Menu, X } from 'lucide-react';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'المسار التمويلي',
    href: '#timeline',
    color: 'bg-gold'
  },
  {
    name: 'لمن هذه الخدمة',
    href: '#who-its-for',
    color: 'bg-teal'
  },
  {
    name: 'المميزات',
    href: '#benefits',
    color: 'bg-amber'
  },
  {
    name: 'الأسئلة الشائعة',
    href: '#faq',
    color: 'bg-emerald'
  }];

  return (
    <>
      <motion.nav
        initial={{
          y: -100
        }}
        animate={{
          y: 0
        }}
        transition={{
          duration: 0.8,
          ease: 'easeOut'
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-gold/10' : 'bg-transparent py-6'}`}>

        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-3 text-gold">
            <Building2 className="w-8 h-8 text-teal" />
            <span className="text-2xl font-bold tracking-wider text-dark">
              كيه إي بي <span className="text-gold">للتمويل</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-dark transition-colors relative group flex items-center gap-2">

                <span
                className={`w-2 h-2 rounded-full ${link.color} opacity-0 group-hover:opacity-100 transition-opacity`} />

                {link.name}
              </a>
            )}
            <button
              onClick={() =>
              document.getElementById('cta-section')?.scrollIntoView({
                behavior: 'smooth'
              })
              }
              className="px-6 py-2 bg-gradient-gold-amber text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 rounded-sm shadow-md">

              تواصل معنا
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-dark p-2"
            onClick={() => setIsMobileMenuOpen(true)}>

            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen &&
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
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-dark/40 backdrop-blur-sm z-[60] md:hidden" />

            <motion.div
            initial={{
              x: '100%'
            }}
            animate={{
              x: 0
            }}
            exit={{
              x: '100%'
            }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 200
            }}
            className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-white z-[70] shadow-2xl flex flex-col md:hidden">

              <div className="p-6 flex justify-between items-center border-b border-gray-100">
                <span className="text-xl font-bold text-dark">القائمة</span>
                <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-dark bg-gray-50 rounded-full">

                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col p-6 gap-6">
                {navLinks.map((link) =>
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-700 flex items-center gap-3">

                    <span className={`w-3 h-3 rounded-full ${link.color}`} />
                    {link.name}
                  </a>
              )}
              </div>

              <div className="mt-auto p-6 border-t border-gray-100">
                <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById('cta-section')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
                className="w-full py-4 bg-gradient-gold-amber text-white font-bold rounded-md shadow-md">

                  تواصل معنا
                </button>
              </div>
            </motion.div>
          </>
        }
      </AnimatePresence>
    </>);

}