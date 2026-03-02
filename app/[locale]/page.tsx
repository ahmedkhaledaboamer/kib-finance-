import { HomePageContent } from "@/components/screens/home/HomePageContent";
import { getLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("page");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Page() {
  const locale = await getLocale();
  return (
    <section>
      <HomePageContent locale={locale} />
    </section>
  );
}
