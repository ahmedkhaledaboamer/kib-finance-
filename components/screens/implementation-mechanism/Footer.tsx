import React from 'react';
import {
  TrendingUpIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon } from
'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #2563EB, #4F46E5)'
                }}>

                <TrendingUpIcon size={24} className="text-white" />
              </div>
              <div>
                <p className="font-black text-xl leading-tight">
                  كيه إي بي للتمويل
                </p>
                <p className="text-blue-400 text-sm font-medium">
                  KEB Finance LLC
                </p>
              </div>
            </div>
            <p className="text-gray-400 font-medium leading-relaxed mb-4 max-w-sm">
              منظومة تشغيل عالمية تُدار بهيكل قيادي موحّد وصلاحيات دقيقة ومسار
              تنفيذي قائم على البيانات
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors">

                <LinkedinIcon size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-sky-500 flex items-center justify-center transition-colors">

                <TwitterIcon size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-pink-600 flex items-center justify-center transition-colors">

                <InstagramIcon size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-black text-base mb-5 text-white">
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {[
              'الرئيسية',
              'آلية التنفيذ',
              'الهيكل الإداري',
              'وحدات التنفيذ',
              'تواصل معنا'].
              map((link) =>
              <li key={link}>
                  <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 font-medium transition-colors text-sm flex items-center gap-2">

                    <span className="w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                    {link}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-black text-base mb-5 text-white">تواصل معنا</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <PhoneIcon
                  size={16}
                  className="text-blue-400 mt-0.5 flex-shrink-0" />

                <div>
                  <p className="text-gray-400 text-xs font-medium mb-0.5">
                    الهاتف
                  </p>
                  <p className="text-white text-sm font-semibold">
                    +971 XX XXX XXXX
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MailIcon
                  size={16}
                  className="text-blue-400 mt-0.5 flex-shrink-0" />

                <div>
                  <p className="text-gray-400 text-xs font-medium mb-0.5">
                    البريد الإلكتروني
                  </p>
                  <p className="text-white text-sm font-semibold">
                    info@kebfinance.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPinIcon
                  size={16}
                  className="text-blue-400 mt-0.5 flex-shrink-0" />

                <div>
                  <p className="text-gray-400 text-xs font-medium mb-0.5">
                    الموقع
                  </p>
                  <p className="text-white text-sm font-semibold">
                    الإمارات العربية المتحدة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-6 rounded-full" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm font-medium">
            © {currentYear} كيه إي بي للتمويل ش.ذ.م.م — جميع الحقوق محفوظة
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-300 text-sm font-medium transition-colors">

              سياسة الخصوصية
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-300 text-sm font-medium transition-colors">

              الشروط والأحكام
            </a>
          </div>
        </div>
      </div>
    </footer>);

}