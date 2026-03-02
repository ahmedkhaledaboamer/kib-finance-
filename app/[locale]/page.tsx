import { HomePageContent } from "@/components/screens/home/HomePageContent";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("page");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Page() {
  return (
    <section>
      <HomePageContent />
    </section>
  );
}
