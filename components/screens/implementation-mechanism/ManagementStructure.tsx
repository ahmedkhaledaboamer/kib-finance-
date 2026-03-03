'use client';
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface Manager {
  title: string;
  role: string;
  responsibilities: string[];
  level: number;
  color: string;
}

const managerColors: string[] = [
  '#2563EB',
  '#4F46E5',
  '#06B6D4',
  '#7C3AED',
  '#DC2626',
  '#EA580C',
  '#0891B2',
  '#059669',
  '#D97706'
];

export function ManagementStructure({ isRTL }: { isRTL: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  const t = useTranslations('implementationMechanism.management');
  const managersFromMessages = t.raw('managers') as Omit<Manager, 'color'>[];
  const managers: Manager[] = managersFromMessages.map((m, index) => ({
    ...m,
    color: managerColors[index] ?? '#2563EB'
  }));

  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <section
      id="management"
      className="py-20 px-[5%]"
      style={{
        background: '#EFF6FF'
      }}
      dir={isRTL ? 'rtl' : 'ltr'}
      ref={ref}>

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full home-badge-text font-bold mb-4"
            style={{
              background: '#DBEAFE',
              color: '#2563EB'
            }}>

            {t('badge')}
          </div>
          <h2 className="home-section-heading font-black text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-gray-500 home-section-subtitle font-medium mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Management image */}
        <motion.div
          className="rounded-3xl overflow-hidden mb-12 home-image-full relative"
          initial={{
            opacity: 0,
            scale: 0.97
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
            duration: 0.7,
            delay: 0.2
          }}>

          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
            alt={t('imageAlt')}
            className="w-full h-full object-cover"
            width={500}
            height={500}
            />

          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background:
              'linear-gradient(135deg, rgba(37,99,235,0.7), rgba(79,70,229,0.6))'
            }}>

            <div className="text-center text-white">
              <p className="home-stat-number font-black mb-2">
                {t('overlayStatsNumber')}
              </p>
              <p className="home-section-subtitle font-bold">
                {t('overlayStatsLabel')}
              </p>
              <p className="home-small-label text-blue-200 font-medium mt-1">
                {t('overlayStatsSublabel')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {managers.map((manager, i) =>
          <motion.div
            key={manager.title}
            className={
              (isRTL
                ? 'text-center sm:text-right'
                : 'text-center sm:text-left') +
              ' bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer'
            }
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
              delay: 0.1 + i * 0.06
            }}
            onClick={() => setExpanded(expanded === i ? null : i)}>

              {/* Card header */}
              <div
              className="p-5"
              style={{
                borderRight: `4px solid ${manager.color}`
              }}>

                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div
                    className="inline-block px-2 py-0.5 rounded-full text-xs font-bold mb-2"
                    style={{
                      background: manager.color + '15',
                      color: manager.color
                    }}>

                      {t('levelLabel')} {manager.level}
                    </div>
                    <h3 className="font-black text-gray-900 text-base leading-tight">
                      {manager.title}
                    </h3>
                    <p className="text-gray-500 text-sm font-medium mt-1 leading-relaxed">
                      {manager.role}
                    </p>
                  </div>
                  <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-1"
                  style={{
                    background: manager.color + '15'
                  }}>

                    {expanded === i ?
                  <ChevronUpIcon
                    size={16}
                    style={{
                      color: manager.color
                    }} /> :


                  <ChevronDownIcon
                    size={16}
                    style={{
                      color: manager.color
                    }} />

                  }
                  </div>
                </div>
              </div>

              {/* Expandable responsibilities */}
              <motion.div
              initial={false}
              animate={{
                height: expanded === i ? 'auto' : 0,
                opacity: expanded === i ? 1 : 0
              }}
              transition={{
                duration: 0.3
              }}
              style={{
                overflow: 'hidden'
              }}>

                <div className="px-5 pb-5 pt-1 border-t border-gray-50">
                  <p className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wide">
                    {t('responsibilitiesLabel')}
                  </p>
                  <ul className="space-y-2">
                    {manager.responsibilities.map((r, ri) =>
                  <li
                    key={ri}
                    className="flex items-start gap-2 text-sm text-gray-600 font-medium">

                        <div
                      className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                      style={{
                        background: manager.color
                      }} />

                        {r}
                      </li>
                  )}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}