'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  LayersIcon,
  TargetIcon,
  ShieldIcon,
  BarChart2Icon,
  ZapIcon,
  EyeIcon
} from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function IntroSection({ isRTL }: { isRTL: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  const t = useTranslations('implementationMechanism.intro');
  const pillarLabels = t.raw('pillars') as string[];
  const chips = t.raw('chips') as string[];

  const pillars = [
    {
      icon: LayersIcon,
      label: pillarLabels[0],
      color: '#2563EB'
    },
    {
      icon: ShieldIcon,
      label: pillarLabels[1],
      color: '#4F46E5'
    },
    {
      icon: BarChart2Icon,
      label: pillarLabels[2],
      color: '#06B6D4'
    },
    {
      icon: TargetIcon,
      label: pillarLabels[3],
      color: '#EF4444'
    },
    {
      icon: ZapIcon,
      label: pillarLabels[4],
      color: '#F59E0B'
    },
    {
      icon: EyeIcon,
      label: pillarLabels[5],
      color: '#10B981'
    }
  ];

  return (
    <section className="py-20 bg-white px-[5%]" dir={isRTL ? 'rtl' : 'ltr'} ref={ref}>
      <div className=" mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            className={isRTL ? 'text-center lg:text-right' : 'text-center lg:text-left'}
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full home-badge-text font-bold mb-6"
              style={{
                background: '#EFF6FF',
                color: '#2563EB'
              }}>

              <LayersIcon size={14} />
              {t('badge')}
            </div>
            <h2 className="home-section-heading font-black text-gray-900 mb-6 leading-tight">
              {t('title')}
              <br />
              <span
                style={{
                  color: '#2563EB'
                }}>

                {t('titleHighlight')}
              </span>
            </h2>
            <p className="text-gray-600 home-body-large leading-relaxed mb-6 font-medium">
              {t('paragraph1')}
            </p>
            <p className="text-gray-500 home-body-large leading-relaxed mb-8 font-medium">
              {t('paragraph2')}
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-xl home-small-label font-bold"
                style={{
                  background: '#EFF6FF',
                  color: '#2563EB'
                }}>

                {chips[0]}
              </div>
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-xl home-small-label font-bold"
                style={{
                  background: '#F0FDF4',
                  color: '#16A34A'
                }}>

                {chips[1]}
              </div>
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-xl home-small-label font-bold"
                style={{
                  background: '#FFFBEB',
                  color: '#D97706'
                }}>

                {chips[2]}
              </div>
            </div>
          </motion.div>

          {/* Pillars grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
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
              duration: 0.7,
              delay: 0.2
            }}>

            {pillars.map((pillar, i) =>
            <motion.div
              key={pillar.label}
              className="p-5 rounded-2xl text-center border border-gray-100 shadow-sm"
              style={{
                background: pillar.color + '08'
              }}
              initial={{
                opacity: 0,
                y: 20
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
                delay: 0.3 + i * 0.08
              }}>

                <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{
                  background: pillar.color + '20'
                }}>

                  <pillar.icon
                  size={22}
                  style={{
                    color: pillar.color
                  }} />

                </div>
                <p className="font-black text-gray-800 home-small-label">
                  {pillar.label}
                </p>
              </motion.div>
            )}

            {/* Image */}
            <motion.div
              className="col-span-2 sm:col-span-3 rounded-2xl overflow-hidden home-image-full mt-2"
              initial={{
                opacity: 0,
                scale: 0.95
              }}
              animate={
              isInView ?
              {
                opacity: 1,
                scale: 1
              } :
              {}
              }
              transition={{
                delay: 0.7
              }}>

              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt={t('imageAlt')}
                className="w-full h-full object-cover"
                width={500}
                height={500}
                />

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>);

}