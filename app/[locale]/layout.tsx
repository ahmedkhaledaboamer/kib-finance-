import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import ScrollToTop from "@/components/scroll-to-top";

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();
  setRequestLocale(locale);

  const isRTL = locale === "ar";
  const dir = isRTL ? "rtl" : "ltr";
  const lang = locale === "ar" ? "ar" : locale === "fr" ? "fr" : "en";

  return (
    <NextIntlClientProvider messages={messages}>
      <div dir={dir} lang={lang} className="min-h-svh text-start">
        <Navbar />
        <section className="min-h-svh">{children}</section>
        <Footer />
        <ScrollToTop />
      </div>
    </NextIntlClientProvider>
  );
}
