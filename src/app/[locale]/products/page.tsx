import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {
    const t = useTranslations('Products');
    const keys = ['pumpkin-seeds', 'sunflower-chips', 'stripped-sunflower', 'sunflower-kernels', 'palm-oil'] as const;

    return (
        <div className="flex min-h-screen flex-col bg-white text-black">
            <Header />
            <main className="flex-1 py-12">
                <div className="container mx-auto px-4">
                    <div className="mb-12 text-center">
                        <h1 className="mb-4 text-4xl font-bold tracking-tighter">{t('title')}</h1>
                        <p className="text-lg text-gray-600">{t('subtitle')}</p>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {keys.map((key) => (
                            <ProductCard
                                key={key}
                                title={t(`items.${key}.title`)}
                                description={t(`items.${key}.description`)}
                                image={t(`items.${key}.image`)}
                                link={`/products/${key}`}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
