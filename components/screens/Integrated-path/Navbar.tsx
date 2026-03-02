import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';
interface NavbarProps {
  onOpenContact: () => void;
}
export function Navbar({ onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'المسار',
    href: '#path'
  },
  {
    name: 'المبادئ',
    href: '#principles'
  },
  {
    name: 'المراحل',
    href: '#timeline'
  }];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-kep-green via-kep-gold to-kep-purple z-50 origin-left"
        style={{
          scaleX
        }} />


      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3 mt-1' : 'bg-transparent py-6 mt-1'}`}
        dir="rtl">

        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-kep-green to-kep-navy rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-kep-green/50 group-hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <span className="text-white font-cairo font-bold text-2xl relative z-10">
                  K
                </span>
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-cairo font-bold text-xl md:text-2xl leading-none transition-colors duration-300 ${isScrolled ? 'text-kep-navy' : 'text-white'}`}>

                  كيه إي بي للتمويل
                </span>
                <span
                  className={`text-xs font-medium tracking-[0.2em] transition-colors duration-300 mt-1 ${isScrolled ? 'text-gray-500' : 'text-gray-300'}`}>

                  KEP FINANCE
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-8">
                {navLinks.map((link) =>
                <li key={link.name}>
                    <a
                    href={link.href}
                    className={`font-cairo font-bold text-lg hover:text-kep-gold transition-colors relative group ${isScrolled ? 'text-gray-700' : 'text-gray-100'}`}>

                      {link.name}
                      <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-kep-gold transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                )}
              </ul>
              <button
                onClick={onOpenContact}
                className={`px-8 py-3 rounded-full font-cairo font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg relative overflow-hidden group ${isScrolled ? 'bg-kep-green text-white hover:brightness-110 hover:shadow-kep-green/40' : 'bg-white text-kep-navy hover:bg-gray-50 hover:shadow-white/20'}`}>

                <span className="relative z-10">ابدأ الآن</span>
              </button>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 relative z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>

              {isMobileMenuOpen ?
              <X
                className={`w-7 h-7 ${isScrolled || isMobileMenuOpen ? 'text-kep-navy' : 'text-white'}`} /> :


              <Menu
                className={`w-7 h-7 ${isScrolled ? 'text-kep-navy' : 'text-white'}`} />

              }
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 absolute top-full left-0 right-0 shadow-2xl">

          <div className="p-6 flex flex-col gap-4">
            {navLinks.map((link, i) =>
            <motion.a
              initial={{
                opacity: 0,
                x: -20
              }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : -20
              }}
              transition={{
                delay: i * 0.1
              }}
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-kep-navy font-cairo font-bold text-xl p-3 hover:bg-kep-cream rounded-xl transition-colors">

                {link.name}
              </motion.a>
            )}
            <motion.button
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : 20
              }}
              transition={{
                delay: 0.3
              }}
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-4 bg-gradient-to-r from-kep-green to-kep-green-light text-white rounded-xl font-cairo font-bold text-xl mt-4 shadow-lg">

              ابدأ الآن
            </motion.button>
          </div>
        </motion.div>
      </header>
    </>);

}