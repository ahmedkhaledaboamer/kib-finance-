import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-[#051A2E] text-gray-300 pt-16 pb-8 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-kep-green via-kep-gold to-kep-purple opacity-50" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-kep-green rounded-lg flex items-center justify-center">
                <span className="text-white font-cairo font-bold text-xl">
                  K
                </span>
              </div>
              <span className="font-cairo font-bold text-2xl text-white">
                كيه إي بي للتمويل
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              شريك مالي استراتيجي يصنع للعميل مسارًا رأسماليًا يليق بطموحه، من
              خلال منظومة تمويل مُبتكرة تُصمَّم لخلق قيمة رأسمالية مستدامة.
            </p>
          </div>

          <div>
            <h3 className="text-white font-cairo font-bold text-lg mb-6">
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#path"
                  className="hover:text-kep-gold hover:underline underline-offset-4 transition-all">

                  المسار الرأسمالي
                </a>
              </li>
              <li>
                <a
                  href="#principles"
                  className="hover:text-kep-gold hover:underline underline-offset-4 transition-all">

                  المبادئ الأساسية
                </a>
              </li>
              <li>
                <a
                  href="#timeline"
                  className="hover:text-kep-gold hover:underline underline-offset-4 transition-all">

                  مراحل المسار
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-cairo font-bold text-lg mb-6">
              تواصل معنا
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-kep-gold shrink-0 mt-0.5" />
                <span>المملكة العربية السعودية، الرياض</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-kep-gold shrink-0" />
                <span dir="ltr">+966 50 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-kep-gold shrink-0" />
                <span>info@kepfinance.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>© 2026 كيه إي بي للتمويل ش.ذ.م.م. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>);

}