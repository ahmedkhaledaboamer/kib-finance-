"use client";
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  ArrowLeftIcon,
  PhoneIcon,
  MailIcon,
  SparklesIcon, 
  ArrowRightIcon} from
'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function ContactCTA({ locale }: { locale: string }) {
  const isRTL = locale === "ar";
  const t = useTranslations('financeHome.contactCta');
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  return (
    <>
      <section
        id="contact"
        className="  bg-amber-50 relative overflow-hidden"
        ref={ref}>

        {/* Subtle background pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal/8 rounded-full blur-3xl" />
        </div>

        <div className=" px-[5%] pt-[5%] relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <motion.div
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
              }}
              className="flex flex-col items-center justify-center md:items-start md:justify-start"
              >

              <span className="inline-flex items-center gap-2 text-gold home-badge-text font-bold tracking-widest uppercase mb-4 border border-gold/30 rounded-full px-4 py-1.5 bg-gold/5">
                <SparklesIcon size={13} />
                {t('badge')}
              </span>
              <h2 className="text-center md:text-left home-section-heading font-black text-navy mb-5 leading-tight">
                {t('title')}
                <br />
                <span className="gradient-text-gold">{t('titleHighlight')}</span>
              </h2>
              <p className="text-gray-600 text-center md:text-left home-body-large leading-relaxed mb-8">
                {t('subtitle')}
              </p>

              {/* Quick info */}
              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: PhoneIcon,
                    label: t('phoneLabel'),
                    value: '+971 00 000 0000',
                    color: 'text-gold bg-gold/10'
                  },
                  {
                    icon: MailIcon,
                    label: t('emailLabel'),
                    value: 'info@kebfinancing.com',
                    color: 'text-teal bg-teal/10'
                  }
                ].map((item, i) =>
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    x: 20
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
                    delay: 0.2 + i * 0.1
                  }}
                  className="flex items-center gap-4">

                    <div
                    className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>

                      <item.icon size={16} />
                    </div>
                    <div>
                      <div className="text-gray-400 home-small-label">{item.label}</div>
                      <div
                      className="text-navy font-semibold home-small-label"
                      dir="ltr">

                        {item.value}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
              <Link href="/implementation-mechanism">
              <motion.button
                whileHover={{
                  scale: 1.04,
                  x: -4
                }}
                whileTap={{
                  scale: 0.97
                }}
                className="cursor-pointer group inline-flex items-center gap-3 bg-gradient-to-l from-gold to-gold-light text-navy font-bold px-8 py-4 rounded-2xl shadow-xl shadow-gold/30 home-body-large">

                {t('cta')}
                <motion.span className="group-hover:-translate-x-1 transition-transform">
                  {!isRTL ? <ArrowRightIcon size={18} /> : <ArrowLeftIcon size={18} />}
                </motion.span>
              </motion.button>
              </Link>
            </motion.div>

            {/* Right: image card */}
            <motion.div
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
              }}
              className="relative w-3/5 mx-auto">

              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/imges/home/017.webp"
                  alt="تواصل مع كيه إي بي"
                  className="w-full  home-image-full object-cover"
                  width={500}
                  height={500}
                  />

                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent rounded-3xl" />
              </div>

              {/* Floating stat */}
              <motion.div
                animate={{
                  y: [0, -6, 0]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute -bottom-5 right-8 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center">
                    <PhoneIcon size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-navy font-black home-small-label">
                      {t('responseTitle')}
                    </div>
                    <div className="text-gold font-black home-body-large">
                      {t('responseValue')}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Wave → Footer (zinc-950) */}
        <div className="wave-divider mt-20">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">

            <path
              d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
              fill="#09090b" />

          </svg>
        </div>
      </section>

    </>);

}