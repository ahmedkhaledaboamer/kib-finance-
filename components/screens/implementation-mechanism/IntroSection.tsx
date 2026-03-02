import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  LayersIcon,
  TargetIcon,
  ShieldIcon,
  BarChart2Icon,
  ZapIcon,
  EyeIcon } from
'lucide-react';
import Image from 'next/image';
export function IntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  const pillars = [
  {
    icon: LayersIcon,
    label: 'القيادة',
    color: '#2563EB'
  },
  {
    icon: ShieldIcon,
    label: 'الحوكمة',
    color: '#4F46E5'
  },
  {
    icon: BarChart2Icon,
    label: 'التحليل',
    color: '#06B6D4'
  },
  {
    icon: TargetIcon,
    label: 'المخاطر',
    color: '#EF4444'
  },
  {
    icon: ZapIcon,
    label: 'التنفيذ',
    color: '#F59E0B'
  },
  {
    icon: EyeIcon,
    label: 'المتابعة',
    color: '#10B981'
  }];

  return (
    <section className="py-20 bg-white px-[5%]" dir="rtl" ref={ref}>
      <div className=" mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
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
            }}>

            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6"
              style={{
                background: '#EFF6FF',
                color: '#2563EB'
              }}>

              <LayersIcon size={14} />
              المقدمة
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
              نموذج تشغيلي عالمي
              <br />
              <span
                style={{
                  color: '#2563EB'
                }}>

                متكامل ومحكم
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
              يعتمد نجاح كيه إي بي للتمويل ش.ذ.م.م على منظومة تشغيل مؤسسية تُدار
              وفق نموذج عالمي يجمع بين القيادة والحوكمة والتحليل والمخاطر
              والتنفيذ والمتابعة.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-8 font-medium">
              هذا النموذج لا يقوم على "خطوات تشغيلية"، بل على سلسلة مراكز قرار
              تعمل بتناغم، حيث يتحرك الملف عبر مستويات قيادية واضحة، وكل مستوى
              يمتلك صلاحيات محددة، ومسؤوليات دقيقة، ومعايير أداء لا تقبل
              التنازل.
            </p>
            <div className="flex flex-wrap gap-3">
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold"
                style={{
                  background: '#EFF6FF',
                  color: '#2563EB'
                }}>

                كل قرار يُبنى على بيانات
              </div>
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold"
                style={{
                  background: '#F0FDF4',
                  color: '#16A34A'
                }}>

                كل إجراء بمعايير عالمية
              </div>
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold"
                style={{
                  background: '#FFFBEB',
                  color: '#D97706'
                }}>

                كل نتيجة بثقة مجلس الإدارة
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
                <p className="font-black text-gray-800 text-sm">
                  {pillar.label}
                </p>
              </motion.div>
            )}

            {/* Image */}
            <motion.div
              className="col-span-2 sm:col-span-3 rounded-2xl overflow-hidden h-140 mt-2"
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
                alt="فريق العمل"
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