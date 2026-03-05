"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Users, Target, Globe, Award } from 'lucide-react';
import { useTranslations } from 'next-intl';
const icons = [ShieldCheck, Clock, Users, Target, Globe, Award];
export function WhyChooseUs({ locale }: { locale: string }) {
  const isRTL = locale === 'ar';
  const t = useTranslations('servicesPage.whyChooseUs');
  const featuresRaw = t.raw('features') as { title: string; desc: string }[];
  const features = featuresRaw.map((f, i) => ({ ...f, icon: icons[i] }));

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return (
    <section className="  bg-[#ECFDF5] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#059669 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}>
      </div>

      <div className=" p-[5%] relative z-10">
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
            className="home-section-heading font-black text-[#1E3A5F] mb-4">

            {t('heading')} <span className="text-[#D4AF37]">{t('headingHighlight')}</span>
          </motion.h2>

          <motion.div
            initial={{
              scaleX: 0
            }}
            whileInView={{
              scaleX: 1
            }}
            viewport={{
              once: true
            }}
            className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mb-6" />


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
              delay: 0.1
            }}
            className="home-section-subtitle text-gray-600">

            {t('subtitle')}
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-50px'
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;
            const numStr = `0${index + 1}`;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group overflow-hidden">

                {/* Numbered Watermark */}
                <div className={`absolute top-4 ${!isRTL ? 'right-6' : 'left-6'} text-5xl font-extrabold text-[#059669]/10 select-none pointer-events-none`}>
                  {numStr}
                </div>

                <div className="w-14 h-14 rounded-full bg-[#ECFDF5] flex items-center justify-center mb-6 group-hover:bg-[#059669] transition-colors duration-300 relative z-10">
                  <Icon className="w-7 h-7 text-[#059669] group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="home-body-large font-bold text-[#1E3A5F] mb-3 relative z-10">
                  {feature.title}
                </h3>
                <p className="home-small-label text-gray-600 leading-relaxed relative z-10">
                  {feature.desc}
                </p>

                {/* Hover Bottom Border */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300 ease-out" />
              </motion.div>);

          })}
        </motion.div>
      </div>
    </section>);

}