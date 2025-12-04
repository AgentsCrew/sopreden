import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ServicesPage() {
    const t = useTranslations('Services');
    const keys = ['specialized-sunflower', 'palm-oil-solutions', 'premium-seed'] as const;

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
                            <div key={key} className="flex flex-col rounded-lg border border-black/10 bg-white p-6 transition-all hover:border-black">
                                <h3 className="mb-4 text-xl font-bold tracking-tight">{t(`items.${key}.title`)}</h3>
                                <p className="text-sm text-gray-600">{t(`items.${key}.description`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
