'use client';
import React, { useState, useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { stages as stagesData, Stage } from './stages';
import { Modal } from './Modal';
import { ArrowLeft, ArrowRight, CheckCircle2, LayoutGrid, List } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
const accentColors = ['gold', 'teal', 'amber', 'emerald'];
const accentClasses = {
  gold: {
    border: 'border-t-gold',
    text: 'text-gold',
    bg: 'bg-gold',
    lightBg: 'bg-gold-light'
  },
  teal: {
    border: 'border-t-teal',
    text: 'text-teal',
    bg: 'bg-teal',
    lightBg: 'bg-teal-light'
  },
  amber: {
    border: 'border-t-amber',
    text: 'text-amber',
    bg: 'bg-amber',
    lightBg: 'bg-amber/20'
  },
  emerald: {
    border: 'border-t-emerald',
    text: 'text-emerald',
    bg: 'bg-emerald',
    lightBg: 'bg-emerald/20'
  }
};
const STAGE_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

export function Timeline({ locale }: { locale: string }) {
  const t = useTranslations('financingPath.timeline');
  const stages: Stage[] = useMemo(() => STAGE_IDS.map((id, i) => ({
    id,
    title: t(`stages.${id}.title`),
    shortDesc: t(`stages.${id}.shortDesc`),
    fullContent: t(`stages.${id}.fullContent`),
    bullets: (t.raw(`stages.${id}.bullets`) as string[]) ?? [],
    imageUrl: stagesData[i].imageUrl,
  })), [t]);
  const isRTL = locale === 'ar';
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const [selectedStage, setSelectedStage] = useState<Stage | null>(null);
  const [activeStageId, setActiveStageId] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'timeline' | 'grid'>('timeline');
  // Update active stage based on scroll
  useScroll({
    target: containerRef
  }).scrollYProgress.onChange((v) => {
    if (viewMode === 'timeline') {
      const stageIndex = Math.min(
        Math.floor(v * stages.length),
        stages.length - 1
      );
      if (stageIndex >= 0) {
        setActiveStageId(stages[stageIndex].id);
      }
    }
  });
  const scrollToStage = (id: number) => {
    const element = document.getElementById(`stage-${id}`);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };
  return (
    <section id="timeline" className="py-24 bg-white relative overflow-hidden p-[5%]">
      <div className=" mx-auto px-6 relative" ref={containerRef}>
        <div className="text-center mb-12">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="home-section-heading font-bold text-dark mb-4">

            {t('sectionTitle')} <span className="text-gold">{t('sectionTitleHighlight')}</span>
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.2
            }}
            className="text-gray-600 home-section-subtitle mx-auto mb-8">

            {t('subtitle')}
          </motion.p>

          {/* View Toggle */}
          <div className="flex justify-center items-center gap-2 bg-gray-100 p-1 rounded-lg inline-flex mx-auto">
            <button
              onClick={() => setViewMode('timeline')}
              className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${viewMode === 'timeline' ? 'bg-white text-dark shadow-sm' : 'text-gray-500 hover:text-dark'}`}>

              <List className="w-4 h-4" />
              {t('viewTimeline')}
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${viewMode === 'grid' ? 'bg-white text-dark shadow-sm' : 'text-gray-500 hover:text-dark'}`}>

              <LayoutGrid className="w-4 h-4" />
              {t('viewGrid')}
            </button>
          </div>
        </div>

        {viewMode === 'timeline' &&
        <>
            {/* Mini Navigation Dashboard */}
            <div className="sticky top-24 z-40 bg-white/90 backdrop-blur-sm py-4 mb-16 border-b border-gray-100 hidden md:block">
              <div className="flex justify-between items-center relative max-w-4xl mx-auto">
                <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -z-10 -translate-y-1/2" />
                {stages.map((stage, idx) => {
                const colorKey = accentColors[
                idx % accentColors.length] as
                keyof typeof accentClasses;
                const isActive =
                activeStageId === stage.id || activeStageId > stage.id;
                return (
                  <button
                    key={`nav-${stage.id}`}
                    onClick={() => scrollToStage(stage.id)}
                    className="cursor-pointer relative group flex flex-col items-center gap-2">

                      <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${isActive ? `${accentClasses[colorKey].bg} text-white shadow-md` : 'bg-white border-2 border-gray-300 text-gray-400 group-hover:border-gray-400'}`}>

                        {stage.id}
                      </div>
                      <span
                      className={`absolute -bottom-8 w-24 text-center text-xs font-medium transition-colors ${activeStageId === stage.id ? accentClasses[colorKey].text : 'text-gray-400 opacity-0 group-hover:opacity-100'}`}>

                        {stage.title.split(' ')[0]} {stage.title.split(' ')[1]}
                      </span>
                    </button>);

              })}
              </div>
            </div>

            {/* Center Line Background */}
            <div className="absolute left-1/2 top-[350px] bottom-0 w-0.5 bg-gray-200 hidden md:block -translate-x-1/2" />

            {/* Animated Gold Line */}
            <motion.div
            className="absolute left-1/2 top-[350px] w-1 bg-gradient-to-b from-gold via-teal to-amber hidden md:block -translate-x-1/2 origin-top shadow-sm"
            style={{
              height: lineHeight
            }} />


            <div className="relative z-10 flex flex-col gap-16 md:gap-32 mt-10">
              {stages.map((stage, index) => {
              const isEven = index % 2 === 0;
              const colorKey = accentColors[
              index % accentColors.length] as
              keyof typeof accentClasses;
              return (
                <div
                  id={`stage-${stage.id}`}
                  key={stage.id}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 relative">

                    {/* Mobile Line — RTL/LTR: line on inline-end side */}
                    <div className="absolute end-6 top-0 bottom-[-4rem] w-0.5 bg-gray-200 md:hidden" />

                    {/* Number Node */}
                    <motion.div
                    initial={{
                      scale: 0,
                      opacity: 0
                    }}
                    whileInView={{
                      scale: 1,
                      opacity: 1
                    }}
                    viewport={{
                      once: true,
                      margin: '-100px'
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      delay: 0.2
                    }}
                    className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white border-4 ${accentClasses[colorKey].text.replace('text-', 'border-')} text-dark font-bold text-2xl flex items-center justify-center z-20 hidden md:flex shadow-lg`}>

                      {stage.id}
                    </motion.div>

                    {/* Mobile Number Node */}
                    <motion.div
                    initial={{
                      scale: 0,
                      opacity: 0
                    }}
                    whileInView={{
                      scale: 1,
                      opacity: 1
                    }}
                    viewport={{
                      once: true
                    }}
                    className={`absolute end-3 top-6 w-8 h-8 rounded-full bg-white border-2 ${accentClasses[colorKey].text.replace('text-', 'border-')} text-dark font-bold flex items-center justify-center z-20 md:hidden shadow-sm`}>

                      {stage.id}
                    </motion.div>

                    {/* Content Card */}
                    <motion.div
                    initial={{
                      opacity: 0,
                      x: isEven ? 50 : -50
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0
                    }}
                    viewport={{
                      once: true,
                      margin: '-100px'
                    }}
                    transition={{
                      duration: 0.6
                    }}
                    className={`${isRTL ? 'text-right' : 'text-left'} ${isEven ? 'md:col-start-2 md:ps-16 lg:ps-24 md:text-start' : 'md:col-start-1 md:pe-16 lg:pe-24 md:text-end'}`}>

                      <div
                      className={`bg-white border border-gray-100 shadow-xl p-6 md:p-8 rounded-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden border-t-4 ${accentClasses[colorKey].border}`}>

                        {/* Watermark Number — RTL/LTR: inline-start */}
                        <div className="absolute start-0 -bottom-10 text-[150px] font-bold text-gray-50 z-0 select-none pointer-events-none">
                          0{stage.id}
                        </div>

                        <div className="relative z-10">
                          <div className="overflow-hidden rounded-lg mb-6 h-fit relative shadow-inner">
                            <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                            <Image
                              src={stage.imageUrl}
                              alt={stage.title}
                              width={500}
                              height={500}
                              className="w-full h-56 lg:h-64 xl:h-120 object-cover transform group-hover:scale-105 transition-transform duration-700" />

                          </div>
                          <h3
                          className={`text-2xl font-bold text-dark mb-3 group-hover:${accentClasses[colorKey].text} transition-colors`}>

                            {stage.title}
                          </h3>
                          <p className="text-gray-600 mb-6 font-medium">
                            {stage.shortDesc}
                          </p>
                          <button
                          dir="ltr"
                          onClick={() => setSelectedStage(stage)}
                          className={`cursor-pointer flex items-center gap-2 ${accentClasses[colorKey].text} font-bold hover:opacity-80 transition-opacity group/btn ${isRTL ? 'flex-row-reverse' : ''}`}>

                            <span>{t('fullDetails')}</span>
                            {isRTL ? <ArrowLeft className="w-4 h-4 shrink-0 transform group-hover/btn:translate-x-[-5px] transition-transform" /> : <ArrowRight className="w-4 h-4 shrink-0 transform group-hover/btn:-translate-x-[-5px] transition-transform" />}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </div>);

            })}
            </div>
          </>
        }

        {viewMode === 'grid' &&
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

            {stages.map((stage, index) => {
            const colorKey = accentColors[
            index % accentColors.length] as
            keyof typeof accentClasses;
            return (
              <motion.div
                key={stage.id}
                initial={{
                  opacity: 0,
                  y: 30
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: index * 0.1
                }}
                className={`bg-white rounded-xl shadow-lg border-t-4 ${accentClasses[colorKey].border} overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col`}>

                  <div className="relative mb-6 h-56 lg:h-64 xl:h-90 2xl:h-100 overflow-hidden">
                    <div
                    className={`absolute top-3 end-3 w-8 h-8 rounded-full ${accentClasses[colorKey].bg} text-white flex items-center justify-center font-bold z-20 shadow-md`}>

                      {stage.id}
                    </div>
                    <div className="absolute inset-0 bg-dark/20 z-10" />
                    <Image
                    src={stage.imageUrl}
                    alt={stage.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover object-bottom" />

                  </div>
                  <div className={`p-6 flex flex-col flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-xl font-bold text-dark mb-2 line-clamp-2">
                      {stage.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-1">
                      {stage.shortDesc}
                    </p>
                    <button
                    onClick={() => setSelectedStage(stage)}
                    className={`cursor-pointer w-full py-2 rounded-md ${accentClasses[colorKey].lightBg} ${accentClasses[colorKey].text} font-bold hover:opacity-80 transition-opacity text-sm`}>

                      {t('details')}
                    </button>
                  </div>
                </motion.div>);

          })}
          </motion.div>
        }
      </div>

      <Modal
        isOpen={!!selectedStage}
        onClose={() => setSelectedStage(null)}
        title={selectedStage?.title}>

        {selectedStage &&
        <div className="space-y-6">
            <div className="relative ">
              {/* Badge in modal */}
                  <div
              className={`absolute top-4 end-4 z-10 px-3 py-1 rounded-full ${accentClasses[accentColors[(selectedStage.id - 1) % accentColors.length] as keyof typeof accentClasses].bg} text-white font-bold text-sm shadow-md`}>

                {t('stageLabel')} {selectedStage.id}
              </div>
              <Image
                src={selectedStage.imageUrl}
                alt={selectedStage.title}
                width={500}
                height={500}
                className="w-full mb-6 h-56 lg:h-64 xl:h-90 2xl:h-130 object-cover rounded-lg shadow-sm" />

            </div>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              {selectedStage.fullContent}
            </p>
            <div
            className={`p-6 rounded-lg border ${accentClasses[accentColors[(selectedStage.id - 1) % accentColors.length] as keyof typeof accentClasses].lightBg} border-opacity-50`}>

              <h4
              className={`font-bold mb-4 text-lg ${accentClasses[accentColors[(selectedStage.id - 1) % accentColors.length] as keyof typeof accentClasses].text}`}>

                {t('activitiesTitle')}
              </h4>
              <ul className="space-y-3">
                {selectedStage.bullets.map((bullet, i) =>
              <li key={i} className={`flex ${isRTL ? 'justify-end' : 'justify-start'} items-center gap-3 text-gray-700 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <CheckCircle2
                  className={`w-5 h-5 shrink-0 mt-0.5 ${accentClasses[accentColors[(selectedStage.id - 1) % accentColors.length] as keyof typeof accentClasses].text}`} />

                    <span>{bullet}</span>
                  </li>
              )}
              </ul>
            </div>
          </div>
        }
      </Modal>
    </section>);

}