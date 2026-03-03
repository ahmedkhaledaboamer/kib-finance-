'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
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
        <div className="bg-cream rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          {/* Image Side */}
          <div className="md:w-1/2 relative home-image-full" dir={isRTL ? "rtl" : "ltr"}>
            <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=1600"
              alt={t('imageAlt')}
              className="absolute inset-0 w-full h-full object-cover"
              width={500}
              height={500}
              />

            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent md:bg-gradient-to-r md:from-dark/80 md:to-transparent" />

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
          <div dir={isRTL ? "rtl" : "ltr"} className="md:w-1/2 p-12 md:p-16 flex flex-col justify-center text-center md:text-right bg-white">
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
              className={`home-section-heading font-bold text-dark mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>

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
                className="inline-block bg-gradient-gold-amber text-white font-bold text-xl px-12 py-5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full md:w-auto text-center no-underline border-0 cursor-pointer"
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
                <a
                  href="#"
                  className="flex items-center gap-2 bg-emerald/10 text-emerald hover:bg-emerald hover:text-white px-4 py-2 rounded-full transition-colors text-sm font-bold">

                  <MessageCircle className="w-4 h-4" />
                  {t('whatsapp')}
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 bg-teal/10 text-teal-dark hover:bg-teal hover:text-white px-4 py-2 rounded-full transition-colors text-sm font-bold">

                  <Phone className="w-4 h-4" />
                  {t('call')}
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 bg-royal/10 text-royal hover:bg-royal hover:text-gray-900 px-4 py-2 rounded-full transition-colors text-sm font-bold">

                  <Mail className="w-4 h-4" />
                  {t('email')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
