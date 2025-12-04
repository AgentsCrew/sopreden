import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const validSlugs = ['benefits-seeds', 'sustainability-palm-oil', 'sunflower-kernel-bakery', 'sunflower-crude-oil'];

    if (!validSlugs.includes(slug)) {
        notFound();
    }

    return (
        <NewsDetailContent slug={slug} />
    );
}

function NewsDetailContent({ slug }: { slug: string }) {
    const t = useTranslations('News');

    return (
        <div className="flex min-h-screen flex-col bg-white text-black">
            <Header />
            <main className="flex-1 py-12">
                <div className="container mx-auto max-w-4xl px-4">
                    <div className="mb-8">
                        <div className="mb-4 text-sm font-medium text-gray-500">{t(`items.${slug}.date`)}</div>
                        <h1 className="mb-6 text-4xl font-bold tracking-tighter">{t(`items.${slug}.title`)}</h1>
                    </div>
                    <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
                        <Image
                            src={t(`items.${slug}.image`)}
                            alt={t(`items.${slug}.title`)}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="prose prose-lg max-w-none text-gray-700">
                        {/* In a real app, this would be the full content. For now we reuse description or add placeholder content */}
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
