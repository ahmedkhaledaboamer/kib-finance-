import { ServicesPageContent } from "@/components/screens/service/ServicesPageContent";
import { getLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("page.services");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ServicesPage() {
  const locale = await getLocale();
  return <ServicesPageContent locale={locale} />;
}
