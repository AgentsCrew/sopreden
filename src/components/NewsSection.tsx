'use client';

import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { Newspaper, Calendar, ArrowRight, Clock } from 'lucide-react';

interface NewsItem {
    slug: string;
    title: string;
    date: string;
    tag: string;
    image: string;
    readTime: string;
    excerpt: string;
}

const newsItems: NewsItem[] = [
    {
        slug: 'benefits-seeds',
        title: 'Discover the Benefits of Sopreden’s Premium Seed Selection',
        date: '16 May 2023',
        tag: 'Product Spotlight',
        image: '/images/site/news_seeds.jpg',
        readTime: '4 min read',
        excerpt: 'In the world of agriculture and modern food production, seed quality dictates the entire value chain. Sopreden offers an elite selection that commands high acclaim across European food manufacturing.'
    },
    {
        slug: 'sustainability-palm-oil',
        title: 'Sopreden’s Commitment to Sustainability: A Look into Our Palm Oil Production',
        date: '16 May 2023',
        tag: 'ESG & Sustainability',
        image: '/images/site/news_palm_oil.png',
        readTime: '5 min read',
        excerpt: 'Sustainability is no longer a corporate buzzword—it is an economic imperative. Discover how Sopreden ensures responsible sourcing, zero deforestation, and verifiable chain-of-custody traceability.'
    },
    {
        slug: 'sunflower-kernel-bakery',
        title: 'Sopreden’s Sunflower Kernel Bakery Grade: A New Favorite in the Baking Industry',
        date: '16 May 2023',
        tag: 'Bakery Industry',
        image: '/images/site/news_bakery.jpg',
        readTime: '3 min read',
        excerpt: 'Commercial bakeries demand kernels that don’t scorch in industrial ovens and maintain crunchiness in multi-grain loaves. Here is why master bakers across Europe choose Sopreden.'
    },
    {
        slug: 'sunflower-crude-oil',
        title: 'Sopreden Introduces Sunflower Crude Oil to Its Product Line',
        date: '16 May 2023',
        tag: 'Commodity Expansion',
        image: '/images/site/news_crude_oil.jpg',
        readTime: '4 min read',
        excerpt: 'Agribusiness expansion announcement: Sopreden scales its portfolio with high-yield first-press Sunflower Crude Oil tailored for regional refineries and international flexitank export.'
    }
];

export default function NewsSection() {
    return (
        <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                    <div className="space-y-3 max-w-2xl">
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#004d51]/10 px-3.5 py-1 text-xs font-semibold text-[#004d51]">
                            <Newspaper className="h-3.5 w-3.5" />
                            <span>Agri-Market Insights & Company Updates</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
                            Latest Agricultural News
                        </h2>
                        <p className="text-base text-gray-600 leading-relaxed">
                            Stay updated on European harvest conditions, seed processing innovations, and international trade intelligence from our commercial desk.
                        </p>
                    </div>

                    <Link
                        href="/news"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#004d51] hover:text-[#00383b] shrink-0 group"
                    >
                        <span>View All Articles</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* News Grid (2x2 on desktop) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {newsItems.map((article) => (
                        <article
                            key={article.slug}
                            className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-200/80 shadow-xs hover:shadow-xl hover:border-teal-500/30 transition-all duration-300"
                        >
                            {/* Image with Tag & Date Badge */}
                            <div className="relative aspect-16/10 w-full overflow-hidden bg-gray-100">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                                <div className="absolute top-3 left-3">
                                    <span className="inline-block rounded-full bg-white/90 backdrop-blur-md px-2.5 py-0.5 text-[11px] font-bold text-[#004d51] shadow-xs">
                                        {article.tag}
                                    </span>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="p-5 flex flex-1 flex-col justify-between space-y-4">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3 text-xs text-gray-500">
                                        <span className="flex items-center gap-1 font-medium">
                                            <Calendar className="h-3 w-3 text-amber-500" />
                                            {article.date}
                                        </span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="h-3 w-3 text-gray-400" />
                                            {article.readTime}
                                        </span>
                                    </div>

                                    <h3 className="text-base font-bold text-gray-900 group-hover:text-[#004d51] transition-colors line-clamp-2 leading-snug">
                                        <Link href={`/news/${article.slug}`}>
                                            {article.title}
                                        </Link>
                                    </h3>

                                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                                        {article.excerpt}
                                    </p>
                                </div>

                                <div className="pt-2 border-t border-gray-100">
                                    <Link
                                        href={`/news/${article.slug}`}
                                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004d51] hover:text-[#00383b] transition-colors"
                                    >
                                        <span>Read Full Article</span>
                                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
