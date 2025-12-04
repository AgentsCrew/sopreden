import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
    const t = useTranslations('About');

    return (
        <div className="flex min-h-screen flex-col bg-white text-black">
            <Header />
            <main className="flex-1 py-12">
                <div className="container mx-auto px-4">
                    <div className="mb-12 text-center">
                        <h1 className="mb-4 text-4xl font-bold tracking-tighter">{t('title')}</h1>
                        <p className="text-lg text-gray-600">{t('subtitle')}</p>
                    </div>
                    <div className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-gray-700">
                        <p>{t('content')}</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
