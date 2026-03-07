'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
export function CTASection({ locale }: { locale: string }) {
  const t = useTranslations('financingPath.cta');
  const isRTL = locale === "ar";
  return (
    <section
      id="cta-section"
      className="relative py-24 bg-white overflow-hidden p-[5%]"
      dir={!isRTL ? "rtl" : "ltr"}>

      {/* Decorative top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-teal to-amber opacity-50" />

      <div className="mx-auto px-6">
        <div className="bg-cream rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 border border-gray-100">
          
          {/* Image Side - grid row gives equal height so no empty space below image */}
          <div className="relative min-h-[clamp(15rem,22vw,30rem)]" dir={isRTL ? "rtl" : "ltr"}>
          <Image
              src="/imges/financing-path/040.webp"
              alt={t('imageAlt')}
              className="absolute inset-0 w-full h-full object-cover "
              width={500}
              height={500}
              />

            <div className="absolute inset-0  to-transparent bg-gradient-to-t from-black to-transparent" />

            <div className={`absolute bottom-8 ${!isRTL ? 'left-8' : 'right-8'} text-white z-10`}>
              <h3 className={`home-body-large font-bold mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('imageTitle')}
              </h3>
              <p className={`text-white/80 home-body-large ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('imageSubtitle')}
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div dir={isRTL ? "rtl" : "ltr"} className="p-12 md:p-16 flex flex-col justify-center text-center md:text-right bg-white">
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
              className={`texr-xl md:text-2xl lg:text-3xl font-bold text-dark mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>

              {t('heading')}
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
              className={`home-body-large text-gray-600 mb-10 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>

              {t('paragraph')}
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.4
              }}
              className="self-center md:self-start w-full md:w-auto mb-10">
              <Link
                href="/implementation-mechanism"
                className="inline-block bg-gradient-gold-amber text-white font-bold md:text-xl text-base md:px-12 px-8 md:py-5 py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full md:w-auto text-center no-underline border-0 cursor-pointer"
                style={{ color: 'white' }}>
                {t('ctaButton')}
              </Link>
            </motion.div>

            {/* Quick Contact Options */}
            <div>
              <p className={`text-sm text-gray-500 mb-4 font-medium ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('contactLabel')}
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  href="tel:+971521068882"
                  className="flex items-center gap-2 bg-teal/10 text-teal-dark hover:bg-teal hover:text-white px-4 py-2 rounded-full transition-colors text-sm font-bold">

                  <Phone className="w-4 h-4" />
                  {t('call')}
                </Link>
                <Link
                  href="mailto:info@shazmlc.com"
                  className="flex items-center gap-2 text-cyan-950 hover:text-white hover:border-cyan-700 bg-emerald-100/50 hover:bg-cyan-950 px-4 py-2 rounded-full transition-colors text-sm font-bold">

                  <Mail className="w-4 h-4" />
                  {t('email')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
