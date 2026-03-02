"use client";
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { CheckCircleIcon, AwardIcon, BuildingIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0,
      duration: 0.6,
      ease: 'easeOut' as const
    }
  }
};
const identityItems = [
  {
    num: '01',
    titleKey: 'identity.1.title',
    descKey: 'identity.1.desc'
  },
  {
    num: '02',
    titleKey: 'identity.2.title',
    descKey: 'identity.2.desc'
  },
  {
    num: '03',
    titleKey: 'identity.3.title',
    descKey: 'identity.3.desc'
  },
  {
    num: '04',
    titleKey: 'identity.4.title',
    descKey: 'identity.4.desc'
  },
  {
    num: '05',
    titleKey: 'identity.5.title',
    descKey: 'identity.5.desc'
  },
  {
    num: '06',
    titleKey: 'identity.6.title',
    descKey: 'identity.6.desc'
  }
];

export function About({ locale }: { locale: string }) {
  const isRTL = locale === "ar";
  const t = useTranslations('financeHome.about');
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  return (
    <section id="about" className=" bg-white overflow-hidden" ref={ref}>
      <div className=" px-[5%] pt-[5%]">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16">

          <span className="inline-block text-gold home-badge-text font-bold tracking-widest uppercase mb-3 border border-gold/30 rounded-full px-4 py-1">
            {t('badge')}
          </span>
          <h2 className="home-section-heading font-black text-navy mb-4">
            {t('title')} <span className="gradient-text">{t('titleHighlight')}</span>
          </h2>
          <p className="text-gray-500 leading-relaxed home-body-large">
            {t('paragraph1')}
          </p>
          <p className="text-gray-500 leading-relaxed home-body-large mt-4">
            {t('paragraph2')}
          </p>
        </motion.div>

        {/* Main content: images + text */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Images collage */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative">

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden home-image-card shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80"
                    alt="فريق كيه إي بي"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    width={500}
                    height={500}
                    />

                </div>
                <div className="rounded-2xl overflow-hidden home-image-card shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80"
                    alt="مكتب كيه إي بي"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    width={500}
                    height={500}
                    />

                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-2xl overflow-hidden home-image-card shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                    alt="اجتماع تمويلي"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    width={500}
                    height={500}
                    />

                </div>
                <div className="rounded-2xl overflow-hidden home-image-card shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80"
                    alt="احترافية كيه إي بي"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    width={500}
                    height={500}
                    />

                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{
                y: [0, -8, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute -bottom-6 right-8 bg-zinc-900 border border-white/10 rounded-2xl p-4 shadow-2xl">

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold/20 rounded-xl flex items-center justify-center">
                  <AwardIcon size={30} className="text-gold" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm md:text-base lg:text-lg xl:text-xl">
                    {t('floatingBadgeTitle')}
                  </div>
                  <div className="text-gold text-xs md:text-sm lg:text-base xl:text-lg">
                    {t('floatingBadgeSubtitle')}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col gap-6 items-center justify-center md:items-start md:justify-start">

              <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-teal/10 rounded-2xl flex items-center justify-center">
                <BuildingIcon size={24} className="text-teal" />
              </div>
              <div>
              <div className="home-body-large text-gray-400">
                {t('introLabel')}
              </div>
              <div className="font-bold text-navy home-body-large">
                {t('introCompanyName')}
              </div>
              </div>
            </div>

            <p className={`text-gray-600 leading-loose mb-6 home-body-large text-center md:text-${!isRTL ? 'left' : 'right'} `}>
              {t('introParagraph1')}
            </p>
            <p className={`text-gray-600 leading-loose mb-8 home-body-large text-center md:text-${!isRTL ? 'left' : 'right'}`}>
              {t('introParagraph2')}
            </p>

            <div className="space-y-3">
              {['bullet1', 'bullet2', 'bullet3', 'bullet4'].map((key, i) =>
                <motion.div
                key={i}
                custom={3 + i}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="flex items-start gap-3">

                  <CheckCircleIcon
                  size={25}
                  className="text-teal mt-0.5 md:mt-3 flex-shrink-0" />

                  <span className="text-gray-600 home-body-large">
                    {t(key as 'bullet1')}
                  </span>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Identity grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {identityItems.map((item, i) =>
          <motion.div
            key={i}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            whileHover={{
              y: -4,
              boxShadow: '0 20px 40px rgba(15,23,42,0.08)'
            }}
            className={`bg-white border border-gray-100 rounded-2xl p-6 cursor-default shadow-sm hover:shadow-lg transition-shadow ${!isRTL ? 'text-center md:text-left' : 'text-center md:text-right'}`}>

              <div className="text-3xl font-black text-gold/20 mb-3">
                {item.num}
              </div>
              <h3 className="font-bold text-navy mb-2 home-body-large">
                {t(item.titleKey as any)}
              </h3>
              <p className="text-gray-500 leading-relaxed home-small-label">
                {t(item.descKey as any)}
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Wave divider → Services (zinc-950) */}
      <div className="wave-divider mt-16">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">

          <path
            d="M0 0L48 8C96 16 192 32 288 40C384 48 480 48 576 42.7C672 37 768 27 864 24C960 21 1056 27 1152 32C1248 37 1344 43 1392 45.3L1440 48V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z"
            fill="#09090b" />

        </svg>
      </div>
    </section>);

}