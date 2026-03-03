'use client';
import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, ExternalLinkIcon } from 'lucide-react';
import { StepModal } from './StepModal';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface StepData {
  number: number;
  title: string;
  subtitle: string;
  manager: string;
  actions: string[];
  image: string;
  color: string;
}

const stepMeta = [
  {
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80',
    color: '#2563EB'
  },
  {
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
    color: '#4F46E5'
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    color: '#0891B2'
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    color: '#DC2626'
  },
  {
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&q=80',
    color: '#7C3AED'
  },
  {
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
    color: '#059669'
  },
  {
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
    color: '#D97706'
  },
  {
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80',
    color: '#EA580C'
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    color: '#0F766E'
  },
  {
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80',
    color: '#2563EB'
  }
];

function StepCard({
  step,
  index,
  onOpen,
  isRTL
}: {step: StepData;index: number;onOpen: (s: StepData) => void;isRTL: boolean;}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  const isEven = index % 2 === 0;
  return (
    <motion.div
      ref={ref}
      className="relative h-full"
      dir={isRTL ? 'rtl' : 'ltr'}
      initial={{
        opacity: 0,
        x: isEven ? 60 : -60
      }}
      animate={
      isInView ?
      {
        opacity: 1,
        x: 0
      } :
      {}
      }
      transition={{
        duration: 0.6,
        delay: 0.1
      }}>

      <div
        className="h-full step-card bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden cursor-pointer group"
        onClick={() => onOpen(step)}>

        <div className="flex flex-col sm:flex-row h-full">
          {/* Image */}
          <div className="relative sm:w-48 h-44 sm:h-auto shrink-0 overflow-hidden">
            <Image
              src={step.image}
              alt={step.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              width={500}
              height={500}
              />

            <div
              className="absolute inset-0 opacity-60"
              style={{
                background: `linear-gradient(135deg, ${step.color}80, transparent)`
              }} />

            {/* Step number badge */}
            <motion.div
              className="absolute top-3 right-3 w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg pulse-ring"
              style={{
                background: step.color
              }}
              initial={{
                scale: 0
              }}
              animate={
              isInView ?
              {
                scale: 1
              } :
              {}
              }
              transition={{
                delay: 0.3,
                type: 'spring',
                stiffness: 300
              }}>

              {step.number}
            </motion.div>
          </div>

          {/* Content */}
          <div
            className={
              isRTL
                ? 'flex-1 p-5 text-center sm:text-right'
                : 'flex-1 p-5 text-center sm:text-left'
            }>
            <div
              className="inline-block px-2.5 py-1 rounded-full text-xs font-bold mb-2"
              style={{
                background: step.color + '15',
                color: step.color
              }}>

              {step.subtitle}
            </div>
            <h3 className="font-black text-gray-900 text-lg leading-tight mb-1">
              {step.title}
            </h3>
            <p className="text-gray-500 text-sm font-medium mb-3">
              <span className="font-bold text-gray-600">
                {/* label handled in StepModal / translations */}
              </span>
              {step.manager}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4 justify-center sm:justify-start">
              {step.actions.map((action, ai) =>
              <span
                key={ai}
                className="px-2.5 py-1 rounded-lg text-xs font-semibold"
                style={{
                  background: step.color + '10',
                  color: step.color
                }}>

                  {action}
                </span>
              )}
            </div>
            <button
              className="flex items-center justify-center sm:justify-start gap-1.5 text-sm font-bold transition-all group-hover:gap-2.5"
              style={{
                color: step.color
              }}>

              <ExternalLinkIcon size={14} />
              {/* button label handled via section copy */}
              {!isRTL ? <ArrowRightIcon size={14} /> : <ArrowLeftIcon size={14} />}
            </button>
          </div>
        </div>
      </div>
    </motion.div>);

}
export function ProcessSteps({ isRTL }: { isRTL: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  const t = useTranslations('implementationMechanism.process');
  const stepsFromMessages = t.raw('steps') as Omit<StepData, 'number' | 'image' | 'color'>[];
  const steps: StepData[] = stepsFromMessages.map((s, index) => ({
    ...s,
    number: index + 1,
    image: stepMeta[index].image,
    color: stepMeta[index].color
  }));
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const [selectedStep, setSelectedStep] = useState<StepData | null>(null);
  return (
    <section id="process" className="py-20 bg-white px-[5%]" dir={isRTL ? 'rtl' : 'ltr'} ref={ref}>
      <div className=" mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={
          isInView ?
          {
            opacity: 1,
            y: 0
          } :
          {}
          }
          transition={{
            duration: 0.6
          }}>

          <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-4"
          style={{
            background: '#EFF6FF',
            color: '#2563EB'
          }}>

            {t('badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            {t('title')}
            <br />
            <span
              style={{
                color: '#2563EB'
              }}>

              {t('titleHighlight')}
            </span>
          </h2>
          <p className="text-gray-500 text-lg font-medium mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto py-2">
          {steps.map((step) =>
          <button
            key={step.number}
            onClick={() => setSelectedStep(step)}
            className="cursor-pointer shrink-0 w-8 h-8 rounded-full text-xs font-black text-white transition-transform hover:scale-110 shadow-md"
            style={{
              background: step.color
            }}
            title={step.title}>

              {step.number}
            </button>
          )}
        </div>

        {/* Steps with connecting line */}
        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute right-6 top-0 bottom-0 w-0.5 bg-gray-100 hidden sm:block">
            <motion.div
              className="absolute top-0 right-0 w-full process-line rounded-full"
              style={{
                height: lineHeight
              }} />

          </div>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
            {steps.map((step, i) =>
            <div key={step.number} className="sm:pr-16 h-full">
                <StepCard step={step} index={i} onOpen={setSelectedStep} isRTL={isRTL} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Step modal */}
      {selectedStep &&
      <StepModal step={selectedStep} onClose={() => setSelectedStep(null)} isRTL={isRTL} />
      }
    </section>);

}