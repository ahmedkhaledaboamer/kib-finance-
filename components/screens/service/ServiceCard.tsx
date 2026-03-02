"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { ServiceItem } from '@/data/services';
interface ServiceCardProps {
  service: ServiceItem;
  onClick: (service: ServiceItem) => void;
  index: number;
}
const categoryMap: Record<string, string> = {
  corporate: 'شركات',
  projects: 'مشاريع',
  realestate: 'عقاري',
  islamic: 'إسلامي',
  investment: 'استثمار',
  advisory: 'استشارات'
};
export function ServiceCard({ service, onClick, index }: ServiceCardProps) {
  const Icon = service.icon;
  const categoryLabel = categoryMap[service.category] || service.category;
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-50px'
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05
      }}
      onClick={() => onClick(service)}
      className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl cursor-pointer transition-all duration-300 flex flex-col min-h-[380px] border border-gray-100">

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>

      {/* Top Gold Accent */}
      <div className="absolute top-0 right-0 h-[3px] bg-[#D4AF37] w-full scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 ease-out z-40" />

      {/* Shimmer Effect */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite] z-30 pointer-events-none" />

      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden shrink-0">
        <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-[#1E3A5F] font-bold shadow-sm">
          {service.id}
        </div>

        {/* Category Pill */}
        <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[#1E3A5F] text-xs font-bold shadow-sm">
          {categoryLabel}
        </div>

        <img
          src={service.image}
          alt={service.titleAr}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" />


        {/* Dark Overlay that fades in */}
        <div className="absolute inset-0 bg-[#1E3A5F]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex items-center justify-center z-10">
          <span className="text-white font-bold text-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            اقرأ المزيد <ArrowLeft className="w-5 h-5" />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col relative z-20 bg-white transition-colors duration-300 group-hover:bg-gray-50/50">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-[#F1F5F9] rounded-lg text-[#1E3A5F] group-hover:bg-[#1E3A5F] group-hover:text-[#D4AF37] transition-colors duration-300">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[#1E3A5F] group-hover:text-[#D4AF37] transition-colors duration-300">
            {service.titleAr}
          </h3>
        </div>

        <p className="text-gray-600 mb-6 flex-1 line-clamp-2">
          {service.descAr}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-[#059669] font-medium group-hover:text-[#1E3A5F] transition-colors duration-300">
          <span>التفاصيل</span>
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-2 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>);

}