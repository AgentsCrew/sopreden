import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Check if the product exists in translations
    const validSlugs = ['pumpkin-seeds', 'sunflower-chips', 'stripped-sunflower', 'sunflower-kernels', 'palm-oil'];

    if (!validSlugs.includes(slug)) {
        notFound();
    }

    return (
        <ProductDetailContent slug={slug} />
    );
}

function ProductDetailContent({ slug }: { slug: string }) {
    const t = useTranslations('Products');

    return (
        <div className="flex min-h-screen flex-col bg-white text-black">
            <Header />
            <main className="flex-1 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid gap-12 md:grid-cols-2">
                        <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
                            <Image
                                src={t(`items.${slug}.image`)}
                                alt={t(`items.${slug}.title`)}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h1 className="mb-6 text-4xl font-bold tracking-tighter">{t(`items.${slug}.title`)}</h1>
                            <p className="text-lg leading-relaxed text-gray-600">{t(`items.${slug}.description`)}</p>
                            <div className="mt-8">
                                <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-black px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                                    Request Quote
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
