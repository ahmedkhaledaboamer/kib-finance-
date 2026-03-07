import { Hero } from '@/components/screens/financing-path/Hero';
import { Stats } from '@/components/screens/financing-path/Stats';
import { Timeline } from '@/components/screens/financing-path/Timeline';
import { WhoItsFor } from '@/components/screens/financing-path/WhoItsFor';
import { Benefits } from '@/components/screens/financing-path/Benefits';
import { Comparison } from '@/components/screens/financing-path/Comparison';
import { FAQ } from '@/components/screens/financing-path/FAQ';
import { CTASection } from '@/components/screens/financing-path/CTASection';
import { getLocale, getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'financingPath' });
  return { title: t('pageTitle'), description: t('pageDescription') };
}

export default async function FinancingPathPage() {
  const locale = await getLocale()
  return (
      <main>
        <Hero locale={locale} />
        <Stats />
        <Timeline locale={locale} />
        <WhoItsFor />
        <Benefits />
        <Comparison locale={locale}/>
        <FAQ locale={locale} />
        <CTASection locale={locale} />
      </main>);

}