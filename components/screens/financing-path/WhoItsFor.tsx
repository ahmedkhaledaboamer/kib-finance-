'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Building, Globe2, Briefcase } from 'lucide-react';
import { useTranslations } from 'next-intl';

function useCriteria() {
  const t = useTranslations('financingPath.whoItsFor');
  return [
    { icon: Building, title: t('criteria1Title'), desc: t('criteria1Desc'), color: 'gold', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400' },
    { icon: TrendingUp, title: t('criteria2Title'), desc: t('criteria2Desc'), color: 'teal', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400' },
    { icon: Globe2, title: t('criteria3Title'), desc: t('criteria3Desc'), color: 'amber', image: 'https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?auto=format&fit=crop&q=80&w=400' },
    { icon: Briefcase, title: t('criteria4Title'), desc: t('criteria4Desc'), color: 'emerald', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400' },
  ];
}

const colorClasses = {
  gold: {
    bg: 'bg-gold-light',
    text: 'text-gold-dark',
    dot: 'bg-gold',
    border: 'border-gold/30'
  },
  teal: {
    bg: 'bg-teal-light',
    text: 'text-teal-dark',
    dot: 'bg-teal',
    border: 'border-teal/30'
  },
  amber: {
    bg: 'bg-amber/20',
    text: 'text-amber',
    dot: 'bg-amber',
    border: 'border-amber/30'
  },
  emerald: {
    bg: 'bg-emerald/20',
    text: 'text-emerald',
    dot: 'bg-emerald',
    border: 'border-emerald/30'
  }
};
export function WhoItsFor() {
  const t = useTranslations('financingPath.whoItsFor');
  const criteria = useCriteria();
  return (
    <section
      id="who-its-for"
      className="py-24 bg-cream relative border-y border-gray-200 overflow-hidden p-[5%]">

      <div className=" mx-auto px-6">
        <div className="text-center mb-16">
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

            {t('title')} <span className="text-teal">{t('titleHighlight')}</span>
          </motion.h2>
          <motion.div
            initial={{
              width: 0
            }}
            whileInView={{
              width: '60px'
            }}
            viewport={{
              once: true
            }}
            className="h-1 bg-teal mx-auto" />

        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Cards Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 order-2 lg:order-1">
            {criteria.map((item, index) => {
              const colors =
              colorClasses[item.color as keyof typeof colorClasses];
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
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow group relative overflow-hidden">

                  {/* Card Photo */}
                  <div className="relative overflow-hidden home-image-card">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                    <div
                      className={`absolute top-3 right-3 w-10 h-10 rounded-lg flex items-center justify-center ${colors.bg} shadow-sm`}>

                      <item.icon className={`w-5 h-5 ${colors.text}`} />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Decorative dot */}
                    <div
                      className={`absolute top-3 left-3 w-2.5 h-2.5 rounded-full ${colors.dot} opacity-50`} />

                    <h3 className="home-body-large font-bold text-dark mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed home-body-large">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>);

            })}
          </div>

          {/* Large Side Photo */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="lg:w-1/3 w-full order-1 lg:order-2">

            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white home-image-tall">
                <div className="absolute inset-0 border-4 border-teal rounded-2xl z-10 pointer-events-none opacity-50" />
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1600"
                  alt={t('imageAlt1')}
                  className="w-full h-full object-cover" />

              </div>
              {/* Second supporting photo */}
              <div className="relative rounded-xl overflow-hidden shadow-lg home-image-card">
                <img
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
                  alt={t('imageAlt2')}
                  className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
                <div className="absolute bottom-3 right-4 left-4">
                  <p className="text-white home-badge-text font-bold">
                    {t('badgeText')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}