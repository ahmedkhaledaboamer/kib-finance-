'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ShieldCheckIcon,
  DatabaseIcon,
  TrendingUpIcon,
  UsersIcon,
  ClockIcon,
  StarIcon
} from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const standardMeta = [
  { icon: ShieldCheckIcon, color: '#2563EB' },
  { icon: DatabaseIcon, color: '#4F46E5' },
  { icon: TrendingUpIcon, color: '#06B6D4' },
  { icon: UsersIcon, color: '#059669' },
  { icon: ClockIcon, color: '#D97706' },
  { icon: StarIcon, color: '#7C3AED' }
];

interface QualityStandard {
  title: string;
  description: string;
}

export function QualitySection({ isRTL }: { isRTL: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  const t = useTranslations('implementationMechanism.quality');
  const standardsFromMessages = t.raw('standards') as QualityStandard[];
  const standards = standardsFromMessages.map((s, index) => ({
    ...s,
    ...standardMeta[index]
  }));
  return (
    <section className="py-20 bg-white px-[5%] overflow-x-hidden" dir={isRTL ? 'rtl' : 'ltr'} ref={ref}>
      <div className=" mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative rounded-3xl overflow-hidden h-80 lg:h-full min-h-80 order-2 lg:order-1"
            initial={{
              opacity: 0,
              x: -40
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
              duration: 0.7
            }}>

            <img    
              src="/imges/implementation-mechanism/4.webp"
              alt="Quality standards"
              className="w-full h-full object-cover"
              width={500}
              height={500}
              />

            <div
              className="absolute inset-0" />

            {/* Overlay card */}
            <div className="absolute bottom-6 right-6 left-6 bg-white/95 rounded-2xl p-5 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: '#EFF6FF'
                  }}>

                  <ShieldCheckIcon
                    size={20}
                    style={{
                      color: '#2563EB'
                    }} />

                </div>
                <div>
                  <p className="font-black text-gray-900 text-sm">
                    {t('overlay.badge')}
                  </p>
                  <p className="text-gray-500 text-xs font-medium">
                    {t('overlay.subtitle')}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div
                  className="text-center p-2 rounded-xl"
                  style={{
                    background: '#EFF6FF'
                  }}>

                  <p className="font-black text-blue-600 text-lg">10</p>
                  <p className="text-gray-500 text-xs">
                    {t('overlay.stagesLabel')}
                  </p>
                </div>
                <div
                  className="text-center p-2 rounded-xl"
                  style={{
                    background: '#ECFDF5'
                  }}>

                  <p className="font-black text-green-600 text-lg">7</p>
                  <p className="text-gray-500 text-xs">
                    {t('overlay.unitsLabel')}
                  </p>
                </div>
                <div
                  className="text-center p-2 rounded-xl"
                  style={{
                    background: '#FFFBEB'
                  }}>

                  <p className="font-black text-amber-600 text-lg">100%</p>
                  <p className="text-gray-500 text-xs">
                    {t('overlay.qualityLabel')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Standards */}
          <motion.div
            className={
              (isRTL
                ? 'text-center lg:text-right'
                : 'text-center lg:text-left') + ' order-1 lg:order-2'
            }
            initial={{
              opacity: 0,
              x: 40
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
              duration: 0.7
            }}>

            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6"
              style={{
                background: '#EFF6FF',
                color: '#2563EB'
              }}>

              {t('badge')}
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 leading-tight">
              {t('title')}
              <br />
              <span
                style={{
                  color: '#2563EB'
                }}>

                {t('titleHighlight')}
              </span>
            </h2>
            <p className="text-gray-500 text-base font-medium mb-8 leading-relaxed">
              {t('paragraph')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {standards.map((standard, i) =>
              <motion.div
                key={standard.title}
                className="p-4 rounded-2xl border border-gray-100"
                style={{
                  background: standard.color + '06'
                }}
                initial={{
                  opacity: 0
                }}
                animate={
                isInView ?
                {
                  opacity: 1
                } :
                {}
                }
                transition={{
                  delay: 0.2 + i * 0.08
                }}>

                  <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 mx-auto sm:mx-0"
                  style={{
                    background: standard.color + '20'
                  }}>

                    <standard.icon
                    size={18}
                    style={{
                      color: standard.color
                    }} />

                  </div>
                  <h3 className="font-black text-gray-800 text-sm mb-1">
                    {standard.title}
                  </h3>
                  <p className="text-gray-500 text-xs font-medium leading-relaxed">
                    {standard.description}
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}