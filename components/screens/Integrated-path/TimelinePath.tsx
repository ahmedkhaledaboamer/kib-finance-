import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { phases, PhaseData } from '../data/phases';
interface TimelinePathProps {
  onOpenPhase: (phase: PhaseData) => void;
}
export function TimelinePath({ onOpenPhase }: TimelinePathProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePhase, setActivePhase] = useState(1);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });
  // Update active phase based on scroll
  useEffect(() => {
    return scrollYProgress.onChange((v) => {
      const phase = Math.min(9, Math.max(1, Math.ceil(v * 9)));
      setActivePhase(phase);
    });
  }, [scrollYProgress]);
  const getThemeColor = (theme: string) => {
    switch (theme) {
      case 'green':
        return 'bg-kep-green text-kep-green border-kep-green';
      case 'gold':
        return 'bg-kep-gold text-kep-gold border-kep-gold';
      case 'navy':
        return 'bg-kep-navy text-kep-navy border-kep-navy';
      case 'orange':
        return 'bg-kep-orange text-kep-orange border-kep-orange';
      case 'purple':
        return 'bg-kep-purple text-kep-purple border-kep-purple';
      default:
        return 'bg-kep-green text-kep-green border-kep-green';
    }
  };
  const getThemeGradient = (theme: string) => {
    switch (theme) {
      case 'green':
        return 'from-kep-green to-kep-green-light';
      case 'gold':
        return 'from-kep-gold to-kep-gold-dark';
      case 'navy':
        return 'from-kep-navy to-kep-navy-light';
      case 'orange':
        return 'from-kep-orange to-kep-orange-light';
      case 'purple':
        return 'from-kep-purple to-kep-purple-light';
      default:
        return 'from-kep-green to-kep-green-light';
    }
  };
  return (
    <section
      className="py-32 bg-white relative"
      id="timeline"
      ref={containerRef}>

      {/* Sticky Progress Indicator */}
      <div className="sticky top-24 z-30 flex justify-center mb-12 pointer-events-none">
        <motion.div
          initial={{
            opacity: 0,
            y: -20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          className="bg-white/90 backdrop-blur-md shadow-lg border border-gray-100 rounded-full px-6 py-2 flex items-center gap-3">

          <span className="font-cairo font-bold text-kep-navy">
            المرحلة {activePhase} من ٩
          </span>
          <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-kep-green to-kep-gold"
              style={{
                width: `${activePhase / 9 * 100}%`
              }}
              layout />

          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-cairo font-bold text-kep-navy mb-6">
            مراحل المسار الرأسمالي
          </h2>
          <p className="text-gray-600 text-xl">
            رحلة متكاملة تبدأ من تحليل القيمة وتنتهي بشراكة مستدامة
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* SVG Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 w-full bg-gradient-to-b from-kep-green via-kep-gold to-kep-purple origin-top"
              style={{
                scaleY: scrollYProgress
              }} />

          </div>

          {/* Mobile Line */}
          <div className="md:hidden absolute top-0 bottom-0 right-8 w-1.5 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 w-full bg-gradient-to-b from-kep-green via-kep-gold to-kep-purple origin-top"
              style={{
                scaleY: scrollYProgress
              }} />

          </div>

          <div className="space-y-16 md:space-y-32">
            {phases.map((phase, index) => {
              const isEven = index % 2 === 1;
              const Icon = phase.icon;
              const isActive = activePhase === phase.id;
              const themeClasses = getThemeColor(phase.theme);
              const gradientClass = getThemeGradient(phase.theme);
              return (
                <div
                  key={phase.id}
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>

                  {/* Center Node */}
                  <div className="absolute right-8 translate-x-1/2 md:right-auto md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-20">
                    <motion.div
                      initial={{
                        scale: 0
                      }}
                      whileInView={{
                        scale: 1
                      }}
                      viewport={{
                        once: true,
                        margin: '-100px'
                      }}
                      className={`w-14 h-14 md:w-20 md:h-20 rounded-full bg-white border-4 shadow-xl flex items-center justify-center relative ${themeClasses.split(' ')[2]} ${isActive ? 'animate-pulse-glow' : ''}`}>

                      <div
                        className={`absolute inset-1 rounded-full bg-gradient-to-br ${gradientClass} opacity-10`} />

                      <Icon
                        className={`w-6 h-6 md:w-8 md:h-8 ${themeClasses.split(' ')[1]} relative z-10`} />

                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-1/2 pl-20 pr-4 md:px-16 ${isEven ? 'md:text-right' : 'md:text-right'}`}>

                    <motion.div
                      initial={{
                        opacity: 0,
                        x: isEven ? -50 : 50,
                        y: 20
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        y: 0
                      }}
                      viewport={{
                        once: true,
                        margin: '-50px'
                      }}
                      transition={{
                        type: 'spring',
                        bounce: 0.3,
                        duration: 0.8
                      }}
                      className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-500 relative">

                      {/* Top Accent Bar */}
                      <div
                        className={`h-2 w-full bg-gradient-to-r ${gradientClass}`} />


                      <div className="h-56 overflow-hidden relative">
                        <motion.img
                          src={phase.image}
                          alt={phase.title}
                          className="w-full h-[120%] object-cover group-hover:scale-105 transition-transform duration-700"
                          style={{
                            y: useTransform(
                              scrollYProgress,
                              [0, 1],
                              ['-10%', '10%']
                            )
                          }} />

                        <div className="absolute inset-0 bg-gradient-to-t from-kep-navy/90 via-kep-navy/20 to-transparent" />

                        {/* Phase Badge */}
                        <div
                          className={`absolute bottom-4 start-4 px-4 py-1.5 rounded-full bg-gradient-to-r ${gradientClass} text-white font-cairo font-bold text-lg shadow-lg`}>

                          المرحلة {phase.id}
                        </div>
                      </div>

                      <div className="p-8">
                        <h3 className="text-2xl font-cairo font-bold text-kep-navy mb-3">
                          {phase.title.split(':')[1]?.trim() || phase.title}
                        </h3>
                        <p
                          className={`font-bold mb-4 ${themeClasses.split(' ')[1]}`}>

                          {phase.subtitle}
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed line-clamp-2">
                          {phase.goal}
                        </p>

                        <button
                          onClick={() => onOpenPhase(phase)}
                          className={`flex items-center gap-2 font-bold transition-colors group/btn ${themeClasses.split(' ')[1]} hover:opacity-70`}>

                          المزيد من التفاصيل
                          <ArrowLeft className="w-5 h-5 group-hover/btn:-translate-x-2 transition-transform" />
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </div>);

            })}
          </div>
        </div>
      </div>
    </section>);

}