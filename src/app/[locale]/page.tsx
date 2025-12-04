import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const t = useTranslations('Hero');

  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
        <section className="flex max-w-4xl flex-col items-center gap-8 py-20">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl">
            {t('title')}
          </h1>
          <p className="max-w-2xl text-lg text-gray-600 sm:text-xl">
            {t('subtitle')}
          </p>
          <Link
            href="/products"
            className="rounded-full bg-black px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-gray-800"
          >
            {t('cta')}
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
