import React from 'react';
import {
  Building2,
  Twitter,
  Linkedin,
  Instagram,
  ArrowLeft } from
'lucide-react';
export function Footer() {
  return (
    <footer className="relative">
      {/* Photo Banner */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1578895101408-1a36b834405b?auto=format&fit=crop&q=80&w=2000"
          alt="أفق مدينة الرياض"
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/40 to-gray-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
              من قلب الرياض… إلى العالم
            </h3>
            <p className="text-white/80 mt-2 drop-shadow-md">
              نبني شراكات رأسمالية تتجاوز الحدود
            </p>
          </div>
        </div>
      </div>

      {/* Decorative color bar */}
      <div className="h-1.5 w-full flex">
        <div className="h-full flex-1 bg-gold" />
        <div className="h-full flex-1 bg-teal" />
        <div className="h-full flex-1 bg-amber" />
        <div className="h-full flex-1 bg-emerald" />
      </div>

      <div className="bg-gray-50 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 text-gold mb-6">
                <Building2 className="w-8 h-8 text-teal" />
                <span className="text-2xl font-bold tracking-wider text-dark">
                  كيه إي بي <span className="text-gold">للتمويل</span>
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                منظومة تمويل نخبوية تُدار بمعايير المؤسسات المالية العالمية.
                نقدم رحلة رأسمالية متكاملة تُدار بسرية، ودقة، واحتراف.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-teal hover:border-teal transition-colors">

                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-royal hover:border-royal transition-colors">

                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-rose hover:border-rose transition-colors">

                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Links Column */}
            <div>
              <h4 className="text-dark font-bold mb-6 text-lg">روابط سريعة</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#timeline"
                    className="text-gray-600 hover:text-teal transition-colors flex items-center gap-2 group">

                    <span className="w-1.5 h-1.5 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                    المسار التمويلي
                  </a>
                </li>
                <li>
                  <a
                    href="#who-its-for"
                    className="text-gray-600 hover:text-teal transition-colors flex items-center gap-2 group">

                    <span className="w-1.5 h-1.5 rounded-full bg-teal opacity-0 group-hover:opacity-100 transition-opacity" />
                    لمن هذه الخدمة
                  </a>
                </li>
                <li>
                  <a
                    href="#benefits"
                    className="text-gray-600 hover:text-teal transition-colors flex items-center gap-2 group">

                    <span className="w-1.5 h-1.5 rounded-full bg-amber opacity-0 group-hover:opacity-100 transition-opacity" />
                    المميزات
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-gray-600 hover:text-teal transition-colors flex items-center gap-2 group">

                    <span className="w-1.5 h-1.5 rounded-full bg-emerald opacity-0 group-hover:opacity-100 transition-opacity" />
                    الأسئلة الشائعة
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-dark font-bold mb-6 text-lg">تواصل معنا</h4>
              <ul className="space-y-4 text-gray-600">
                <li className="flex flex-col">
                  <span className="text-xs text-gray-400 mb-1">
                    البريد الإلكتروني
                  </span>
                  <span className="dir-ltr text-right font-medium">
                    info@kebfinance.com
                  </span>
                </li>
                <li className="flex flex-col">
                  <span className="text-xs text-gray-400 mb-1">
                    الهاتف الموحد
                  </span>
                  <span className="dir-ltr text-right font-medium">
                    +966 12 345 6789
                  </span>
                </li>
                <li className="flex flex-col">
                  <span className="text-xs text-gray-400 mb-1">
                    المقر الرئيسي
                  </span>
                  <span className="font-medium">
                    الرياض، المملكة العربية السعودية
                  </span>
                </li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div>
              <h4 className="text-dark font-bold mb-6 text-lg">
                النشرة المالية
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                اشترك ليصلك أحدث التحليلات والتقارير المالية.
              </p>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="w-full bg-white border border-gray-200 rounded-r-md px-4 py-2 text-sm focus:outline-none focus:border-teal" />

                <button
                  type="submit"
                  className="bg-teal text-white px-4 py-2 rounded-l-md hover:bg-teal-dark transition-colors">

                  <ArrowLeft className="w-4 h-4" />
                </button>
              </form>

              {/* Small office photo */}
              <div className="mt-6 rounded-lg overflow-hidden shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400"
                  alt="مكتبنا"
                  className="w-full h-28 object-cover" />

              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} كيه إي بي للتمويل ش.ذ.م.م. جميع
              الحقوق محفوظة.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-dark transition-colors">
                الشروط والأحكام
              </a>
              <a href="#" className="hover:text-dark transition-colors">
                سياسة الخصوصية
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>);

}