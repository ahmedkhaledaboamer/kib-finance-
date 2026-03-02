"use client";
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  ArrowLeftIcon,
  BuildingIcon,
  TrendingUpIcon,
  ShieldIcon,
  GlobeIcon,
  FileTextIcon,
  BarChart2Icon,
  XIcon,
  CheckCircleIcon,
  PhoneIcon } from
'lucide-react';
import { ContactModal } from './ContactModal';
interface Service {
  icon: React.ElementType;
  title: string;
  desc: string;
  image: string;
  color: string;
  accent: string;
  bg: string;
  fullDesc: string;
  features: string[];
}
const services: Service[] = [
{
  icon: BuildingIcon,
  title: 'التمويل المؤسسي',
  desc: 'حلول تمويلية متكاملة للشركات والمؤسسات الكبرى بمعايير مهنية عالية.',
  image:
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
  color: 'from-navy to-navy-light',
  accent: 'text-gold',
  bg: 'bg-gold/10',
  fullDesc:
  'نقدم حلول التمويل المؤسسي المصممة خصيصًا للشركات والمؤسسات الكبرى التي تسعى إلى تحقيق أهدافها التوسعية والتشغيلية. نعمل كشريك استراتيجي يفهم متطلبات كل مؤسسة ويصمم هيكل التمويل الأمثل لها، مع ضمان أفضل الشروط والأسعار من خلال شبكتنا الواسعة من الجهات التمويلية.',
  features: [
  'تمويل رأس المال العامل والتشغيلي',
  'قروض التوسع والاستثمار طويل الأمد',
  'تمويل الاستحواذ والاندماج',
  'هيكلة التمويل المتعدد المصادر',
  'التفاوض مع البنوك والجهات التمويلية']

},
{
  icon: TrendingUpIcon,
  title: 'تمويل المشاريع',
  desc: 'دعم المشاريع الاستثمارية من مرحلة التخطيط حتى التنفيذ الكامل.',
  image:
  'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
  color: 'from-teal to-teal-dark',
  accent: 'text-teal',
  bg: 'bg-teal/10',
  fullDesc:
  'نرافق المشاريع الاستثمارية في كل مراحلها، من دراسة الجدوى وهيكلة التمويل، وصولًا إلى إغلاق الصفقة وبدء التنفيذ. خبرتنا الواسعة في تمويل المشاريع تمكّننا من تقديم حلول مبتكرة تتناسب مع طبيعة كل مشروع وحجمه وقطاعه.',
  features: [
  'دراسة الجدوى المالية والاقتصادية',
  'هيكلة تمويل المشاريع الكبرى',
  'تمويل القطاع العقاري والبنية التحتية',
  'مشاريع الطاقة والصناعة',
  'متابعة المشروع حتى الإغلاق الكامل']

},
{
  icon: ShieldIcon,
  title: 'إدارة المخاطر',
  desc: 'تقييم شامل للمخاطر المالية وتصميم استراتيجيات الحماية المناسبة.',
  image:
  'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&q=80',
  color: 'from-coral to-coral-light',
  accent: 'text-coral',
  bg: 'bg-coral/10',
  fullDesc:
  'ندرك أن إدارة المخاطر هي ركيزة أساسية في أي قرار تمويلي ناجح. فريقنا المتخصص يقوم بتحليل شامل لكل أنواع المخاطر المالية والتشغيلية، ويضع استراتيجيات واضحة للتخفيف منها وحماية أصول العميل وضمان استمرارية نشاطه.',
  features: [
  'تقييم المخاطر الائتمانية والمالية',
  'تحليل مخاطر السوق والسيولة',
  'وضع سياسات إدارة المخاطر',
  'اختبارات الضغط والسيناريوهات',
  'تقارير المخاطر الدورية والتوصيات']

},
{
  icon: GlobeIcon,
  title: 'التمويل الدولي',
  desc: 'فتح قنوات تمويلية خارجية تدعم مشاريع العملاء على المستوى الدولي.',
  image:
  'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&q=80',
  color: 'from-emerald to-teal',
  accent: 'text-emerald',
  bg: 'bg-emerald/10',
  fullDesc:
  'نمتلك شبكة علاقات دولية واسعة مع المؤسسات المالية والبنوك الإقليمية والعالمية، مما يمكّننا من فتح قنوات تمويلية خارجية لعملائنا. نساعد الشركات على الوصول إلى أسواق رأس المال الدولية والحصول على تمويل بشروط تنافسية.',
  features: [
  'التمويل من البنوك الإقليمية والدولية',
  'صناديق الاستثمار والأسهم الخاصة',
  'التمويل الإسلامي الدولي',
  'خطابات الاعتماد والضمانات الدولية',
  'تمويل التجارة الخارجية والصادرات']

},
{
  icon: FileTextIcon,
  title: 'الاستشارات المالية',
  desc: 'تقديم استشارات مالية متخصصة مبنية على تحليل دقيق للبيانات والأرقام.',
  image:
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
  color: 'from-gold to-gold-light',
  accent: 'text-gold',
  bg: 'bg-gold/10',
  fullDesc:
  'خدمة الاستشارات المالية لدينا تقدم تحليلًا عميقًا وموضوعيًا للوضع المالي للشركة، وتضع خارطة طريق واضحة لتحقيق الأهداف المالية. نعتمد على البيانات والأرقام الحقيقية في كل توصياتنا، بعيدًا عن التخمين أو التوقعات غير المدروسة.',
  features: [
  'التحليل المالي الشامل للشركة',
  'تقييم الأصول والمحافظ الاستثمارية',
  'إعداد الخطط المالية الاستراتيجية',
  'استشارات الاستثمار وتوزيع الأصول',
  'تقارير الأداء المالي والمقارنة المعيارية']

},
{
  icon: BarChart2Icon,
  title: 'إعادة هيكلة الديون',
  desc: 'إعادة تنظيم الالتزامات المالية لتحسين التدفق النقدي وتقليل الأعباء.',
  image:
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  color: 'from-navy-mid to-navy',
  accent: 'text-teal',
  bg: 'bg-teal/10',
  fullDesc:
  'نساعد الشركات التي تواجه ضغوطًا في التزاماتها المالية على إعادة هيكلة ديونها بطريقة تحسّن التدفق النقدي وتقلل الأعباء المالية. نتفاوض نيابةً عن العميل مع الجهات الدائنة للوصول إلى حلول مستدامة تضمن استمرارية الأعمال.',
  features: [
  'تحليل هيكل الديون الحالي',
  'التفاوض مع البنوك والدائنين',
  'إعادة جدولة القروض والالتزامات',
  'دمج الديون وتخفيض تكلفتها',
  'خطة التعافي المالي طويل الأمد']

}];

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onContact: () => void;
}
function ServiceModal({ service, onClose, onContact }: ServiceModalProps) {
  return (
    <AnimatePresence>
      {service &&
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        dir="rtl">

          {/* Backdrop */}
          <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          className="absolute inset-0 bg-navy/85 backdrop-blur-sm"
          onClick={onClose} />


          {/* Modal */}
          <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
            y: 24
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            scale: 0.92,
            y: 24
          }}
          transition={{
            type: 'spring',
            damping: 28,
            stiffness: 320
          }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">

            {/* Hero image */}
            <div className="relative h-52 flex-shrink-0 overflow-hidden">
              <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover" />

              <div
              className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-75`} />


              {/* Icon + title overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div
                className={`w-11 h-11 ${service.bg} backdrop-blur-sm rounded-xl flex items-center justify-center mb-3`}>

                  <service.icon size={22} className={service.accent} />
                </div>
                <h2 className="text-2xl font-black text-white">
                  {service.title}
                </h2>
              </div>

              {/* Close button */}
              <button
              onClick={onClose}
              className="absolute top-4 left-4 w-9 h-9 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-white transition-colors">

                <XIcon size={16} />
              </button>
            </div>

            {/* Gold accent line */}
            <div className="h-1 bg-gradient-to-l from-gold to-gold-light flex-shrink-0" />

            {/* Content */}
            <div className="p-6 overflow-y-auto flex-1">
              {/* Description */}
              <p className="text-gray-600 leading-loose text-base mb-6">
                {service.fullDesc}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-navy font-bold text-base mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 bg-gold rounded-full inline-block" />
                  ما يشمله هذا الملف
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature, i) =>
                <motion.li
                  key={i}
                  initial={{
                    opacity: 0,
                    x: 16
                  }}
                  animate={{
                    opacity: 1,
                    x: 0
                  }}
                  transition={{
                    delay: 0.15 + i * 0.07
                  }}
                  className="flex items-start gap-3">

                      <CheckCircleIcon
                    size={17}
                    className="text-teal flex-shrink-0 mt-0.5" />

                      <span className="text-gray-600 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </motion.li>
                )}
                </ul>
              </div>

              {/* CTA */}
              <div className="flex gap-3 pt-2 border-t border-gray-100">
                <motion.button
                whileHover={{
                  scale: 1.03
                }}
                whileTap={{
                  scale: 0.97
                }}
                onClick={() => {
                  onClose();
                  onContact();
                }}
                className="flex-1 bg-gradient-to-l from-gold to-gold-light text-navy font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-gold/25 text-sm">

                  <PhoneIcon size={15} />
                  احصل على استشارة في هذه الخدمة
                </motion.button>
                <motion.button
                whileHover={{
                  scale: 1.03
                }}
                whileTap={{
                  scale: 0.97
                }}
                onClick={onClose}
                className="px-5 py-3.5 border-2 border-gray-200 text-gray-500 font-semibold rounded-2xl text-sm hover:border-gray-300 transition-colors">

                  إغلاق
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      }
    </AnimatePresence>);

}
export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <>
      <section
        id="services"
        className="py-24 relative overflow-hidden"
        ref={ref}>

        {/* Background image with blur overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm" />
          {/* subtle gold gradient tint */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-teal/5" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <motion.div
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
            }}
            className="text-center mb-16">

            <span className="inline-block text-gold font-bold text-sm tracking-widest uppercase mb-3 border border-gold/30 rounded-full px-4 py-1">
              خدماتنا
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              حلول تمويلية <span className="gradient-text-gold">متخصصة</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              نصمم حلولاً تمويلية دقيقة تتناسب مع طبيعة كل نشاط ومتطلبات كل
              مرحلة
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 40
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
                delay: i * 0.1,
                duration: 0.6
              }}
              whileHover={{
                y: -8,
                scale: 1.02
              }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedService(service)}>

                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                  <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-70`} />

                  <div
                  className={`absolute top-4 right-4 w-10 h-10 ${service.bg} backdrop-blur-sm rounded-xl flex items-center justify-center`}>

                    <service.icon size={20} className={service.accent} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-white font-bold text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <div
                  className={`flex items-center gap-2 ${service.accent} text-sm font-semibold group-hover:gap-3 transition-all`}>

                    <span>اعرف أكثر</span>
                    <ArrowLeftIcon size={14} />
                  </div>
                </div>

                {/* Hover ring */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ring-1 ring-inset ring-white/20" />
              </motion.div>
            )}
          </div>
        </div>

        {/* Wave */}
        <div className="wave-divider mt-16 relative z-10">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">

            <path
              d="M0 80L48 72C96 64 192 48 288 40C384 32 480 32 576 37.3C672 43 768 53 864 56C960 59 1056 53 1152 48C1248 43 1344 37 1392 34.7L1440 32V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0Z"
              fill="#FEF3C7" />

          </svg>
        </div>
      </section>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onContact={() => setContactOpen(true)} />


      {/* Contact Modal (triggered from service modal CTA) */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)} />

    </>);

}