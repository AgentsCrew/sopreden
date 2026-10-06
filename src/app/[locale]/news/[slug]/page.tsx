'use client';

import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import { Link } from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Clock, ChevronRight, ArrowLeft, Share2, Tag, ArrowRight } from 'lucide-react';

interface ArticleData {
    title: string;
    date: string;
    tag: string;
    readTime: string;
    image: string;
    content: string[];
    relatedSlug: string;
    relatedTitle: string;
}

const articlesData: Record<string, ArticleData> = {
    'new-website-launch': {
        title: 'Sopreden Launches Next-Gen Digital Trading Hub & Interactive Platform',
        date: '06 Oct 2026',
        tag: 'Digital Innovation',
        readTime: '3 min read',
        image: '/images/site/store.jpg',
        content: [
            'Today marks a transformative milestone for Sopreden Trading with the official unveiling of our next-generation digital trading platform. Engineered from the ground up for international grain traders, food manufacturers, and commercial brokers, the new portal delivers an unprecedented standard of transparency, speed, and market utility.',
            'Why is the new platform a game-changer? First and foremost is our all-new Instant Commodity RFQ Builder. Instead of waiting days for back-and-forth emails, commodity buyers can select products, volume, packaging specifications (from 25kg multi-wall bags to 1000kg Big Bags or bulk flexitanks), and request exact delivery terms (FOB Port of Varna, CIF Mediterranean/European terminals, or DAP overland) with rapid trade desk response.',
            'Second, the site introduces complete transparency into our processing capabilities. Prospective clients can explore our boutique Silistra dehulling plant with live production footage, detailed technical flowcharts of our 6-stage centrifugal impact line, and exact Sortex optical purity metrics (99.9% whole-kernel guarantee).',
            'Finally, the entire experience is built on a state-of-the-art Next.js performance architecture, delivering sub-second page transitions, full mobile responsiveness, seamless multilingual support across 7 European languages, and instant direct WhatsApp communication with our live trading desk in Silistra.'
        ],
        relatedSlug: 'new-dehulling-plant-operational',
        relatedTitle: 'New High-Precision Dehulling Plant in Silistra Operating Since July'
    },
    'new-dehulling-plant-operational': {
        title: 'New High-Precision Dehulling Plant in Silistra Operating Since July',
        date: '15 Jul 2026',
        tag: 'Facility Expansion',
        readTime: '4 min read',
        image: '/images/site/sunflower_bakery_premium.jpg',
        content: [
            'Sopreden Trading is proud to announce that our newly expanded, high-precision seed dehulling and optical sorting facility in Silistra, Bulgaria has been in continuous commercial operation since July 2026. This purpose-built plant represents a major leap forward in European seed processing, catering specifically to human-grade bakery and confectionery standards.',
            'With a daily intake capacity of 40 to 60 metric tons of raw oilseeds and pumpkin harvests, the plant yields 20 to 30 metric tons of 99.9% pure, undamaged kernels every 24 hours. Located strategically in the heart of the Dobrudzha agricultural basin directly on the Danube river, freshly harvested seeds arrive at our intake silos within hours of cutting, eliminating oxidative rancidity and preserving natural moisture balance.',
            'Unlike industrial mega-crushers that pulverize raw seeds solely for crude oil yield, Sopreden’s facility uses gentle kinetic centrifugal impact rotors combined with closed-circuit air aspiration and bi-chromatic Sortex laser sorting. This engineering sequence guarantees an exceptionally low broken count (< 3%), zero hull contamination, and intact kernel geometry.',
            'In addition to producing our own premium bakery and confectionery kernels, the Silistra facility is actively taking on contract processing (tolling) for partner agricultural producers. Furthermore, operating as a zero-waste facility, all separated outer hulls are immediately compressed on-site into high-density 18 MJ/kg eco-fuel pellets.'
        ],
        relatedSlug: 'new-website-launch',
        relatedTitle: 'Sopreden Launches Next-Gen Digital Trading Hub & Interactive Platform'
    },
    'benefits-seeds': {
        title: 'Discover the Benefits of Sopreden’s Premium Seed Selection',
        date: '16 May 2023',
        tag: 'Product Spotlight',
        readTime: '4 min read',
        image: '/images/site/news_seeds.jpg',
        content: [
            'In the world of agriculture and modern food production, seed quality dictates the entire value chain. Sopreden, a name synonymous with excellence, offers a premium seed selection that stands out for its superior purity, uniform moisture calibration, and outstanding nutritional density.',
            'Our flagship selection centers on Bulgarian-grown "Lady Nails" pumpkin seeds and high-oil hybrid sunflower seeds. By working hand-in-hand with leading agricultural cooperatives across the Dobrudzha plain, we ensure that every seed lot is cultivated under strict European agronomic standards with zero harmful chemical residues.',
            'For commercial food producers, bakers, and snack roasters, choosing Sopreden translates directly into tangible manufacturing advantages: lower broken rates, higher oven yield, crisp texture retention, and complete batch-to-batch consistency.',
            'Furthermore, our products are checked for microbiological safety, moisture thresholds (< 7%), and heavy metals by independent inspection authorities (SGS / Bureau Veritas) prior to export.'
        ],
        relatedSlug: 'sunflower-kernel-bakery',
        relatedTitle: 'Sopreden’s Sunflower Kernel Bakery Grade: A New Favorite in the Baking Industry'
    },
    'sustainability-palm-oil': {
        title: 'Sopreden’s Commitment to Sustainability: A Look into Our Palm Oil Production',
        date: '16 May 2023',
        tag: 'ESG & Sustainability',
        readTime: '5 min read',
        image: '/images/site/palm_oil_main.jpg',
        content: [
            'In an era where environmental stewardship is not merely a marketing claim but an indispensable commercial requirement, Sopreden Trading is proud to emphasize its unwavering dedication to responsible palm oil sourcing and supply chain transparency.',
            'Palm oil remains one of the world’s most versatile vegetable lipids, delivering unmatched thermal stability, neutral flavor, and efficient yield per hectare. However, safeguarding tropical ecosystems and biodiversity requires rigorous chain-of-custody protocols.',
            'Sopreden works exclusively with accredited mills that adhere to the Roundtable on Sustainable Palm Oil (RSPO) principles. Our partners operate under strict No Deforestation, No Peat, No Exploitation (NDPE) policies, providing full traceability back to point of origination.',
            'Whether allocated for industrial biscuit cream fillings, confectionery spreads, or clean-burning European bio-diesel refining, our palm oil solutions enable industrial clients to satisfy stringent EU ESG and deforestation-free supply chain mandates.'
        ],
        relatedSlug: 'sunflower-crude-oil',
        relatedTitle: 'Sopreden Introduces Sunflower Crude Oil to Its Product Line'
    },
    'sunflower-kernel-bakery': {
        title: 'Sopreden’s Sunflower Kernel Bakery Grade: A New Favorite in the Baking Industry',
        date: '16 May 2023',
        tag: 'Bakery Industry',
        readTime: '3 min read',
        image: '/images/site/news_bakery.jpg',
        content: [
            'The industrial and artisanal baking sector is constantly evolving, with master bakers seeking premium seeds that retain their signature golden color, pleasant nuttiness, and distinctive crunch through demanding dough proofing and high-temperature oven baking.',
            'Sopreden has introduced a specialized Bakery Grade Sunflower Kernel specification specifically engineered for European bakeries. Unlike generic commodity seeds, our bakery grade undergoes dual optical Sortex screening to eliminate husk particles, dust, and undersized kernels.',
            'The result is a uniform count-per-ounce seed with low moisture content (< 7%) that resists rancidity and prevents surface scorching on artisan loaves, bagels, and seed-crusted rye rolls.',
            'Packaged in multi-wall kraft paper bags with food-grade protective liners or 1000kg Big Bags, our bakery kernels are supplied on demand across Germany, France, the Benelux region, and the UK.'
        ],
        relatedSlug: 'benefits-seeds',
        relatedTitle: 'Discover the Benefits of Sopreden’s Premium Seed Selection'
    },
    'sunflower-crude-oil': {
        title: 'Sopreden Introduces Sunflower Crude Oil to Its Product Line',
        date: '16 May 2023',
        tag: 'Commodity Expansion',
        readTime: '4 min read',
        image: '/images/site/news_crude_oil.jpg',
        content: [
            'Sopreden Trading is pleased to announce a strategic expansion of its liquid commodities portfolio with the official launch of Sunflower Crude Oil (First Press Expeller & Solvent Extracted) for European and global markets.',
            'Leveraging strong ties with premier crushing facilities in Bulgaria’s Northeast sunflower belt, we now supply consistent volumes of high-yielding crude sunflower oil with free fatty acid levels strictly under 2.0% and phosphorus content below 15 ppm.',
            'We provide versatile logistics structures including dedicated 24,000-liter sanitary flexitank containers, food-grade road tankers, and coastal vessel parcel chartering from Danube and Black Sea ports (Port of Varna and Port of Constanța).',
            'Our commercial desk is currently quoting spot cargo allocations and structured quarterly forward contracts under FOSFA standard delivery terms.'
        ],
        relatedSlug: 'sustainability-palm-oil',
        relatedTitle: 'Sopreden’s Commitment to Sustainability: A Look into Our Palm Oil Production'
    }
};

export default function NewsDetailPage() {
    const params = useParams();
    const slug = params?.slug as string;

    const article = articlesData[slug];

    if (!article) {
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col bg-white text-gray-900 selection:bg-[#004d51] selection:text-white">
            <Header />

            <main className="flex-1 py-10 lg:py-16">
                <article className="container mx-auto px-4 sm:px-6 max-w-4xl">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center space-x-2 text-xs text-gray-500 mb-6">
                        <Link href="/" className="hover:text-[#004d51] transition-colors">Home</Link>
                        <ChevronRight className="h-3 w-3 text-gray-400" />
                        <Link href="/news" className="hover:text-[#004d51] transition-colors">News</Link>
                        <ChevronRight className="h-3 w-3 text-gray-400" />
                        <span className="font-semibold text-gray-900 truncate max-w-xs">{article.title}</span>
                    </nav>

                    {/* Metadata Header */}
                    <div className="space-y-4 mb-8">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-[#004d51] border border-teal-100">
                                <Tag className="h-3 w-3" />
                                {article.tag}
                            </span>
                            <span className="text-xs text-gray-500 flex items-center gap-1.5 font-medium">
                                <Calendar className="h-3.5 w-3.5 text-amber-500" />
                                {article.date}
                            </span>
                            <span className="text-xs text-gray-500 flex items-center gap-1.5">
                                <Clock className="h-3.5 w-3.5" />
                                {article.readTime}
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
                            {article.title}
                        </h1>

                        <div className="text-sm font-semibold text-gray-500">
                            Published by <span className="text-[#004d51] font-bold">Sopreden Commodity Desk</span>, Silistra
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative aspect-16/9 w-full overflow-hidden rounded-3xl bg-gray-100 shadow-xl mb-10 border border-gray-200">
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>

                    {/* Article Body */}
                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 leading-relaxed text-base sm:text-lg">
                        {article.content.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    {/* Next article link */}
                    <div className="mt-14 pt-8 border-t border-gray-200">
                        <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                            Next Market Article:
                        </div>
                        <Link
                            href={`/news/${article.relatedSlug}`}
                            className="group flex items-center justify-between p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#004d51] hover:bg-teal-50/50 transition-all"
                        >
                            <span className="text-base font-bold text-gray-900 group-hover:text-[#004d51] transition-colors">
                                {article.relatedTitle}
                            </span>
                            <ArrowRight className="h-5 w-5 text-[#004d51] shrink-0 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* Back to news */}
                    <div className="mt-8 text-center">
                        <Link
                            href="/news"
                            className="inline-flex items-center gap-2 text-sm font-bold text-[#004d51] hover:underline"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            <span>Return to All Market News</span>
                        </Link>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
