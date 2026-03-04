'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Zap, Target } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

function useBenefits() {
  const t = useTranslations('financingPath.benefits');
  return [
    { icon: Clock, title: t('benefit1Title'), desc: t('benefit1Desc'), color: 'gold', image: '/imges/financing-path/0445.webp' },
    { icon: Target, title: t('benefit2Title'), desc: t('benefit2Desc'), color: 'teal', image: '/imges/financing-path/0446.webp' },
    { icon: Zap, title: t('benefit3Title'), desc: t('benefit3Desc'), color: 'amber', image: '/imges/financing-path/0447.webp' },
    { icon: ShieldCheck, title: t('benefit4Title'), desc: t('benefit4Desc'), color: 'emerald', image: '/imges/financing-path/0448.webp' },
  ];
}

const borderColors = {
  gold: 'border-s-gold',
  teal: 'border-s-teal',
  amber: 'border-s-amber',
  emerald: 'border-s-emerald'
};
const bgColors = {
  gold: 'bg-gold',
  teal: 'bg-teal',
  amber: 'bg-amber',
  emerald: 'bg-emerald'
};
const iconBgColors = {
  gold: 'bg-gold-light',
  teal: 'bg-teal-light',
  amber: 'bg-amber/20',
  emerald: 'bg-emerald/20'
};
export function Benefits() {
  const t = useTranslations('financingPath.benefits');
  const benefits = useBenefits();
  return (
    <section id="benefits" className="py-24 bg-white text-dark relative p-[5%]">
      <div className=" mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Text and Photos Column */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="lg:w-1/3">

            <h2 className="home-section-heading font-bold mb-6 text-dark leading-tight">
              {t('title')} <br />
              <span className="text-gradient-gold">{t('titleHighlight')}</span>
            </h2>
            <p className="home-body-large text-gray-600 mb-8 leading-relaxed">
              {t('intro')}
            </p>

            {/* Stacked photos */}
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl ">
                <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-teal/20 mix-blend-multiply z-10" />
                <Image
                  src="/imges/financing-path/06.jpg"
                  alt={t('imageAlt1')}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover" />

              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl overflow-hidden shadow-md home-image-card">
                  <Image
                    src="/imges/financing-path/015.jpg"
                    alt={t('imageAlt2')}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover" />

                </div>
                <div className="rounded-xl overflow-hidden shadow-md home-image-card">
                  <Image
                    src="/imges/financing-path/036.jpg"
                    alt={t('imageAlt3')}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover" />

                </div>
              </div>
            </div>
          </motion.div>

          {/* Cards Column — each with a photo */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const bColor =
              borderColors[benefit.color as keyof typeof borderColors];
              const bgColor = bgColors[benefit.color as keyof typeof bgColors];
              const iconBg =
              iconBgColors[benefit.color as keyof typeof iconBgColors];
              return (
                <motion.div
                  key={index}
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
                  className={`bg-cream rounded-xl shadow-sm border-s-4 ${bColor} hover:-translate-y-2 hover:shadow-md transition-all duration-300 relative overflow-hidden group`}>

                  {/* Card Photo */}
                  <div className="relative overflow-hidden ">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"   style={{ height: 'clamp(14rem,20vw,24rem)' }}  />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />
                    <div
                      className={`absolute top-3 right-3 w-10 h-10 rounded-lg ${iconBg} flex items-center justify-center shadow-sm`}>

                      <benefit.icon className="w-5 h-5 text-dark opacity-80" />
                    </div>
                  </div>

                  <div className="p-6 pt-2">
                    <h3 className="home-body-large font-bold mb-2 text-dark">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 home-body-large">{benefit.desc}</p>
                  </div>

                  {/* Decorative progress bar at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                    <div
                      className={`h-full ${bgColor} w-0 group-hover:w-full transition-all duration-700 ease-out`} />

                  </div>
                </motion.div>);

            })}
          </div>
        </div>
      </div>
    </section>);

}