import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

export default function NewsPage() {
    const t = useTranslations('News');
    const keys = ['benefits-seeds', 'sustainability-palm-oil', 'sunflower-kernel-bakery', 'sunflower-crude-oil'] as const;

    return (
        <div className="flex min-h-screen flex-col bg-white text-black">
            <Header />
            <main className="flex-1 py-12">
                <div className="container mx-auto px-4">
                    <div className="mb-12 text-center">
                        <h1 className="mb-4 text-4xl font-bold tracking-tighter">{t('title')}</h1>
                        <p className="text-lg text-gray-600">{t('subtitle')}</p>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {keys.map((key) => (
                            <Link key={key} href={`/news/${key}`} className="group flex flex-col overflow-hidden rounded-lg border border-black/10 bg-white transition-all hover:border-black">
                                <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                                    <Image
                                        src={t(`items.${key}.image`)}
                                        alt={t(`items.${key}.title`)}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col p-6">
                                    <div className="mb-2 text-xs font-medium text-gray-500">{t(`items.${key}.date`)}</div>
                                    <h3 className="mb-2 text-xl font-bold tracking-tight">{t(`items.${key}.title`)}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
