'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { ArrowRight, Check, FileText, Layers, Sparkles, X, ShieldCheck, Package } from 'lucide-react';
import QuoteModal from './QuoteModal';

interface ProductItem {
    id: string;
    slug: string;
    title: string;
    category: 'sunflower' | 'pumpkin' | 'oils';
    grade: string;
    purity: string;
    moisture: string;
    packaging: string;
    description: string;
    longDescription: string;
    image: string;
    applications: string[];
}

const products: ProductItem[] = [
    {
        id: 'pumpkin-seeds',
        slug: 'pumpkin-seeds',
        title: "Pumpkin Seeds ('Lady Nails')",
        category: 'pumpkin',
        grade: 'Food Grade & Snack Standard',
        purity: '99.5% Min',
        moisture: 'Max 8.5%',
        packaging: '25kg PP bags, Big Bags (1000kg)',
        description: "We specialize in the renowned 'Lady Nails' variety. Characterized by uniform elongated shape, rich nutty aroma, and high zinc/magnesium density.",
        longDescription: "Sopreden's 'Lady Nails' pumpkin seeds represent the pinnacle of European seed cultivation. Grown in nutrient-rich soils, each batch is mechanically dehulled, optically sorted by laser color cameras, and packed in nitrogen-flushed or heavy-duty woven bags.",
        image: '/images/products/pumpkin_seeds.png',
        applications: ['Artisanal Bakery & Confectionery', 'Roasted & Salted Snack Packs', 'Dietary Supplements & Granola', 'Cold-Pressed Pumpkin Seed Oil']
    },
    {
        id: 'sunflower-kernels',
        slug: 'sunflower-kernels',
        title: 'Sunflower Kernels (Bakery & Confectionery)',
        category: 'sunflower',
        grade: 'Premium Confectionery (Jumbo / XXL) & Bakery',
        purity: '99.9% Optical Purity',
        moisture: 'Max 7.0%',
        packaging: '25kg craft paper bags, Big Bags',
        description: 'Available in Bakery Grade and distinguished Confectionery Grade (Jumbo and XXL). Expertly sorted, 99.9% clean, uniform color, and free from bitter aftertaste.',
        longDescription: 'Our flagship sunflower kernels are celebrated among European master bakers and multinational snack conglomerates. Sourced from high-yielding oil and confection hybrid varieties with multi-stage Sortex optical sorting.',
        image: '/images/products/sunflower_kernels.png',
        applications: ['Artisanal Bread & Multi-grain Buns', 'Energy Bars & Healthy Snacks', 'Pralines & Pastry Fillings', 'Direct Consumption Snack Industry']
    },
    {
        id: 'sunflower-chips',
        slug: 'sunflower-chips',
        title: 'Sunflower Chips (Broken Fraction)',
        category: 'sunflower',
        grade: 'Animal Feed & Birdfeed Standard',
        purity: '98.5% Clean Kernel Fraction',
        moisture: 'Max 8.0%',
        packaging: 'Bulk, Big Bags, 25kg/40kg bags',
        description: 'A high-nutrient broken kernel derivative obtained during dehulling. Rich in essential vegetable lipids and protein, serving as the gold standard for birdfeed.',
        longDescription: 'Sunflower chips consist of clean, broken sunflower meat separated during mechanical dehulling. Contains the full caloric and protein profile of intact kernels at a favorable price point.',
        image: '/images/products/sunflower_chips.png',
        applications: ['Wild Bird Feed Mixes', 'Canary & Parakeet Formulations', 'Livestock Protein Supplementation', 'High-Calorie Compound Feeds']
    },
    {
        id: 'stripped-sunflower',
        slug: 'stripped-sunflower',
        title: 'Stripped Sunflower Seeds',
        category: 'sunflower',
        grade: 'Pioneer, Badger, Jumbo & XXL',
        purity: '99.0% Min',
        moisture: 'Max 9.0%',
        packaging: '25kg bags, 500kg/1000kg Big Bags',
        description: 'Offering a versatile range of striped varieties: from Pioneer and Badger for avian care, to Jumbo and XXL sizes for in-shell roasting and snacking.',
        longDescription: 'Bulgarian striped sunflower seeds are famous for their bold contrasting stripes, plump kernel fill, and thin easily cracked hulls. We supply calibrated feed grades and jumbo snacking grades.',
        image: '/images/products/stripped_sunflower.png',
        applications: ['Roasted In-Shell Snack Packs', 'Premium Wild Bird Blends', 'Parrot & Exotic Pet Nutrition', 'Calibrated Seed Distribution']
    },
    {
        id: 'sunflower-crude-oil',
        slug: 'sunflower-crude-oil',
        title: 'Sunflower Crude & Refined Oil',
        category: 'oils',
        grade: 'Crude Degummed & Refined Edible',
        purity: 'FFA < 2.0% (Crude), FFA < 0.1% (Refined)',
        moisture: 'Max 0.2%',
        packaging: 'Flexitanks (24 MT), ISO Tanks, Bulk Vessels',
        description: 'High-yield, golden first-press crude oil and fully refined deodorized sunflower oil. Suitable for culinary frying, food packaging, and industrial processing.',
        longDescription: 'Extracted through modern expeller pressing followed by solvent recovery, Sopreden’s crude sunflower oil boasts low phosphatides, clean golden hue, and high smoke stability.',
        image: '/images/site/sunflower_crude_oil_prod.jpg',
        applications: ['Industrial Deep Frying & Canning', 'Mayonnaise, Sauces & Dressings', 'Biodiesel Feedstock Production', 'Edible Oil Bottling Brands']
    },
    {
        id: 'palm-oil',
        slug: 'palm-oil',
        title: 'Versatile Palm Oil Solutions',
        category: 'oils',
        grade: 'RBD Palm Oil, Olein & Stearin Fractions',
        purity: 'Food Grade & Technical Grade',
        moisture: 'Max 0.1%',
        packaging: 'Flexitanks, IBC Drums (1000L), Steel Drums',
        description: 'Responsibly sourced, RSPO-traceable palm oil solutions. Tailored for food manufacturing (confectionery, dairy, popcorn) and technical bio-diesel production.',
        longDescription: 'Sopreden delivers a dependable supply chain of refined, bleached, and deodorized (RBD) palm oil products and specialized fractions with consistent melting behavior.',
        image: '/images/products/palm_oil.png',
        applications: ['Confectionery & Biscuit Fillings', 'Dairy Alternatives & Margarines', 'Commercial Snack Roasting & Popcorn', 'Bio-Diesel & Technical Formulations']
    }
];

export default function InteractiveCommodities() {
    const [selectedCategory, setSelectedCategory] = useState<'all' | 'sunflower' | 'pumpkin' | 'oils'>('all');
    const [activeSpecProduct, setActiveSpecProduct] = useState<ProductItem | null>(null);
    const [isQuoteOpen, setIsQuoteOpen] = useState(false);
    const [quoteProduct, setQuoteProduct] = useState('Sunflower Kernels (Bakery & Confectionery)');

    const filtered = selectedCategory === 'all'
        ? products
        : products.filter((p) => p.category === selectedCategory);

    const handleOpenQuote = (productTitle: string) => {
        setQuoteProduct(productTitle);
        setIsQuoteOpen(true);
    };

    return (
        <section id="commodities" className="py-20 lg:py-28 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-[#004d51]/10 px-3.5 py-1 text-xs font-semibold text-[#004d51]">
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>Certified European Agricultural Portfolio</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
                        Our Agricultural Commodities
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                        Meticulously sorted, optical Sortex cleaned, and moisture-controlled to exact industrial specifications. Available for spot delivery or forward trade contracts.
                    </p>

                    {/* Filter Tabs */}
                    <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
                        {[
                            { key: 'all', label: 'All Commodities' },
                            { key: 'sunflower', label: 'Sunflower Kernels & Chips' },
                            { key: 'pumpkin', label: "Pumpkin Seeds ('Lady Nails')" },
                            { key: 'oils', label: 'Vegetable & Crude Oils' },
                        ].map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setSelectedCategory(tab.key as any)}
                                className={`rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                                    selectedCategory === tab.key
                                        ? 'bg-[#004d51] text-white shadow-md shadow-[#004d51]/20 scale-105'
                                        : 'bg-white text-gray-700 border border-gray-200 hover:border-[#004d51] hover:text-[#004d51]'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map((item) => (
                        <div
                            key={item.id}
                            className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-200/80 shadow-xs hover:shadow-xl hover:border-teal-500/40 transition-all duration-300"
                        >
                            {/* Product Image */}
                            <div className="relative aspect-square w-full overflow-hidden bg-slate-50">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#004d51] shadow-xs">
                                        {item.category === 'pumpkin' ? 'Pumpkin' : item.category === 'oils' ? 'Oils' : 'Sunflower'}
                                    </span>
                                </div>

                                {/* Grade Chip */}
                                <div className="absolute bottom-3 left-4 right-4">
                                    <span className="text-xs font-semibold text-white/95 drop-shadow-xs line-clamp-1">
                                        {item.grade}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col p-6 space-y-4">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-[#004d51] transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed flex-1">
                                    {item.description}
                                </p>

                                {/* Technical Specs Highlights */}
                                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100 text-xs">
                                    <div className="bg-slate-50 p-2.5 rounded-lg">
                                        <span className="text-gray-400 block text-[10px] uppercase font-bold">Purity</span>
                                        <span className="font-bold text-gray-800">{item.purity}</span>
                                    </div>
                                    <div className="bg-slate-50 p-2.5 rounded-lg">
                                        <span className="text-gray-400 block text-[10px] uppercase font-bold">Moisture</span>
                                        <span className="font-bold text-gray-800">{item.moisture}</span>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="pt-2 flex items-center gap-2">
                                    <button
                                        onClick={() => setActiveSpecProduct(item)}
                                        className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-gray-200 bg-white py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors"
                                    >
                                        <Layers className="h-3.5 w-3.5 text-[#004d51]" />
                                        <span>Quick Specs</span>
                                    </button>

                                    <button
                                        onClick={() => handleOpenQuote(item.title)}
                                        className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#004d51] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#00383b] transition-colors shadow-xs"
                                    >
                                        <FileText className="h-3.5 w-3.5 text-amber-300" />
                                        <span>Quote</span>
                                    </button>

                                    <Link
                                        href={`/products/${item.slug}`}
                                        className="p-2.5 rounded-xl text-gray-400 hover:text-[#004d51] hover:bg-teal-50 transition-colors"
                                        aria-label={`View full details of ${item.title}`}
                                    >
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA to Full Catalog */}
                <div className="mt-14 text-center">
                    <Link
                        href="/products"
                        className="inline-flex items-center gap-2 rounded-xl bg-white border border-gray-300 px-6 py-3.5 text-sm font-bold text-gray-900 shadow-xs hover:border-[#004d51] hover:text-[#004d51] transition-all hover:scale-102"
                    >
                        <span>View Full Commodity Catalog & Technical Sheets</span>
                        <ArrowRight className="h-4 w-4 text-[#004d51]" />
                    </Link>
                </div>
            </div>

            {/* Quick Specs Modal */}
            {activeSpecProduct && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
                    <div className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-100">
                        {/* Header */}
                        <div className="bg-[#004d51] p-6 text-white relative">
                            <button
                                onClick={() => setActiveSpecProduct(null)}
                                className="absolute right-4 top-4 p-2 text-white/80 hover:text-white rounded-full hover:bg-white/10"
                            >
                                <X className="h-5 w-5" />
                            </button>
                            <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                                Product Specification Sheet
                            </span>
                            <h3 className="text-2xl font-bold mt-1">{activeSpecProduct.title}</h3>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
                            <p className="text-sm text-gray-700 leading-relaxed">
                                {activeSpecProduct.longDescription}
                            </p>

                            <div className="grid grid-cols-2 gap-3 text-sm">
                                <div className="p-3 bg-gray-50 rounded-xl">
                                    <span className="text-xs text-gray-500 font-bold uppercase block">Purity Standard</span>
                                    <span className="font-semibold text-gray-900">{activeSpecProduct.purity}</span>
                                </div>
                                <div className="p-3 bg-gray-50 rounded-xl">
                                    <span className="text-xs text-gray-500 font-bold uppercase block">Moisture Limit</span>
                                    <span className="font-semibold text-gray-900">{activeSpecProduct.moisture}</span>
                                </div>
                                <div className="p-3 bg-gray-50 rounded-xl">
                                    <span className="text-xs text-gray-500 font-bold uppercase block">Grade & Calibration</span>
                                    <span className="font-semibold text-gray-900">{activeSpecProduct.grade}</span>
                                </div>
                                <div className="p-3 bg-gray-50 rounded-xl">
                                    <span className="text-xs text-gray-500 font-bold uppercase block">Export Packaging</span>
                                    <span className="font-semibold text-gray-900">{activeSpecProduct.packaging}</span>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                                    Primary Commercial Applications:
                                </h4>
                                <ul className="space-y-1.5">
                                    {activeSpecProduct.applications.map((app, i) => (
                                        <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                                            <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                                            <span>{app}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-2 flex gap-3">
                                <button
                                    onClick={() => {
                                        const pName = activeSpecProduct.title;
                                        setActiveSpecProduct(null);
                                        handleOpenQuote(pName);
                                    }}
                                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#004d51] py-3 text-sm font-semibold text-white hover:bg-[#00383b] transition-colors"
                                >
                                    <FileText className="h-4 w-4 text-amber-300" />
                                    <span>Request Quote for this Product</span>
                                </button>
                                <Link
                                    href={`/products/${activeSpecProduct.slug}`}
                                    onClick={() => setActiveSpecProduct(null)}
                                    className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                                >
                                    Full Details
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <QuoteModal
                isOpen={isQuoteOpen}
                onClose={() => setIsQuoteOpen(false)}
                initialProduct={quoteProduct}
            />
        </section>
    );
}
