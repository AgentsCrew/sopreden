'use client';

import { useState } from 'react';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import { Link } from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import { ShieldCheck, Check, FileText, MessageCircle, ArrowLeft, Package, Sparkles, Truck, ChevronRight } from 'lucide-react';

interface ProductData {
    title: string;
    category: string;
    grade: string;
    purity: string;
    moisture: string;
    packaging: string;
    origin: string;
    shelfLife: string;
    description: string;
    longDescription: string;
    image: string;
    applications: string[];
    specifications: { label: string; value: string }[];
}

const productsData: Record<string, ProductData> = {
    'pumpkin-seeds': {
        title: "Pumpkin Seeds ('Lady Nails')",
        category: 'Pumpkin Seeds',
        grade: 'Food Grade & Snack Standard',
        purity: '99.5% Minimum',
        moisture: 'Max 8.5%',
        packaging: '25kg PP / Multi-wall paper bags, Big Bags (1000kg)',
        origin: 'Bulgaria (EU)',
        shelfLife: '12 Months (stored in dry, cool conditions < 18°C)',
        description: "We specialize in the renowned 'Lady Nails' variety. Characterized by uniform elongated shape, rich nutty aroma, and high zinc/magnesium density.",
        longDescription: "Sopreden's 'Lady Nails' pumpkin seeds represent the pinnacle of European seed cultivation. Grown in nutrient-rich soils in Northeast Bulgaria, each batch is mechanically dehulled, optically sorted by laser color cameras, and packed in nitrogen-flushed or heavy-duty woven bags. High in natural unsaturated fatty acids, proteins, and essential minerals, they are ideal for roasted snack lines, muesli blends, and cold-pressed botanical oils.",
        image: '/images/products/pumpkin_seeds.png',
        applications: [
            'Artisanal Bakery & Specialty Loaves',
            'Roasted, Salted & Seasoned Consumer Snack Packs',
            'Dietary Granola, Energy Bars & Health Cereals',
            'Cold-Pressed Gourmet Pumpkin Seed Oil Extraction'
        ],
        specifications: [
            { label: 'Species / Variety', value: 'Cucurbita pepo ("Lady Nails")' },
            { label: 'Physical Purity', value: 'Min 99.5%' },
            { label: 'Moisture Content', value: 'Max 8.5%' },
            { label: 'Imperfect / Broken Kernels', value: 'Max 3.0%' },
            { label: 'Foreign Matter', value: 'Max 0.1%' },
            { label: 'Aflatoxin (B1 + B2 + G1 + G2)', value: '< 4 ppb (EU compliant)' },
            { label: 'Microbiological Standards', value: 'Salmonella Absent / 25g, E. Coli < 10 cfu/g' }
        ]
    },
    'sunflower-kernels': {
        title: 'Sunflower Kernels (Bakery & Confectionery)',
        category: 'Sunflower Seeds',
        grade: 'Premium Confectionery (Jumbo / XXL) & Bakery',
        purity: '99.9% Optical Sortex Purity',
        moisture: 'Max 7.0%',
        packaging: '25kg Craft Paper Bags with PE liner, Big Bags',
        origin: 'Bulgaria (EU)',
        shelfLife: '12 Months in dry, ventilated storage (< 20°C)',
        description: 'Available in Bakery Grade and distinguished Confectionery Grade (Jumbo and XXL). Expertly sorted, 99.9% clean, uniform color, and free from bitter aftertaste.',
        longDescription: 'Our flagship sunflower kernels are celebrated among European master bakers and multinational snack conglomerates. Sourced from high-yielding oil and confection hybrid varieties, seeds undergo multi-stage hulling, aspiration, gravity separation, and Buhler Sortex optical sorting. The result is pure, undamaged kernels with exceptional shelf life and crisp texture.',
        image: '/images/products/sunflower_kernels.png',
        applications: [
            'Artisanal Bread, Rolls & Multi-grain Buns',
            'Nut & Seed Energy Clusters, Granola & Bars',
            'Pralines, Pastry Toppings & Confectionery Fillings',
            'Direct Consumption Roasted & Flavored Snacks'
        ],
        specifications: [
            { label: 'Botanical Name', value: 'Helianthus annuus' },
            { label: 'Kernel Purity', value: 'Min 99.9% (Sortex optical clean)' },
            { label: 'Moisture Level', value: 'Max 7.0%' },
            { label: 'Broken Kernels (< 1/2 size)', value: 'Bakery: Max 6-8%, Confectionery: Max 3%' },
            { label: 'Unshelled Seeds / Husks', value: 'Max 0.05%' },
            { label: 'Counts per Ounce', value: 'Confectionery: 550 - 650, Bakery: 650 - 750' },
            { label: 'Free Fatty Acids (FFA)', value: 'Max 1.5%' }
        ]
    },
    'sunflower-chips': {
        title: 'Sunflower Chips (Broken Fraction)',
        category: 'Sunflower Seeds',
        grade: 'Animal Feed & Birdfeed Standard',
        purity: '98.5% Clean Kernel Fraction',
        moisture: 'Max 8.0%',
        packaging: 'Bulk Vessel / Truckload, Big Bags (1000kg), 25kg/40kg bags',
        origin: 'Bulgaria (EU)',
        shelfLife: '9 Months in ventilated storage',
        description: 'A high-nutrient broken kernel derivative obtained during the dehulling process. Rich in essential vegetable lipids and protein, serving as the gold standard for birdfeed.',
        longDescription: 'Sunflower chips consist of clean, broken sunflower meat separated during the mechanical dehulling phase. Because they contain the full caloric, lipid, and protein profile of intact kernels at a favorable price point, they are highly sought after by commercial feed mills and bird-food packagers worldwide.',
        image: '/images/products/sunflower_chips.png',
        applications: [
            'Wild Bird Winter Feeding Blends & Suet Cakes',
            'Canary, Parakeet & Pet Bird Formulations',
            'Livestock Protein & Energy Supplementation',
            'High-Calorie Animal Compound Feeds'
        ],
        specifications: [
            { label: 'Composition', value: 'Clean crushed sunflower kernel meats' },
            { label: 'Crude Fat / Oil Content', value: 'Min 45.0%' },
            { label: 'Crude Protein', value: 'Min 20.0%' },
            { label: 'Moisture Content', value: 'Max 8.0%' },
            { label: 'Residual Shell / Hull Content', value: 'Max 4.0%' },
            { label: 'Free Fatty Acids', value: 'Max 2.0%' }
        ]
    },
    'stripped-sunflower': {
        title: 'Stripped Sunflower Seeds',
        category: 'Sunflower Seeds',
        grade: 'Pioneer, Badger, Jumbo & XXL',
        purity: '99.0% Minimum',
        moisture: 'Max 9.0%',
        packaging: '25kg woven PP bags, 500kg / 1000kg Big Bags',
        origin: 'Bulgaria (EU)',
        shelfLife: '12 Months',
        description: 'Offering a versatile range of striped varieties: from Pioneer and Badger for avian care, to Jumbo and XXL sizes for in-shell roasting, salting, and gourmet snacking.',
        longDescription: 'Bulgarian striped sunflower seeds are famous for their bold contrasting stripes, plump kernel fill, and thin easily cracked hulls. We supply both calibrated feed grades (ideal for wild birds and parrots) and jumbo-calibrated snacking grades that retain unmatched crispiness when roasted.',
        image: '/images/products/stripped_sunflower.png',
        applications: [
            'Roasted In-Shell Consumer Snack Packs',
            'Premium Wild Bird Food Mixtures',
            'Parrot & Exotic Pet Nutrition Blends',
            'Calibrated Seed Sourcing for Re-packers'
        ],
        specifications: [
            { label: 'Calibration / Sizing', value: 'Badger: 12-14mm, Jumbo XXL: > 14mm' },
            { label: 'Purity Level', value: 'Min 99.0%' },
            { label: 'Moisture Content', value: 'Max 9.0%' },
            { label: 'Hollow Seeds', value: 'Max 2.0%' },
            { label: 'Damaged / Insect-bitten Seeds', value: 'Max 1.0%' }
        ]
    },
    'sunflower-crude-oil': {
        title: 'Sunflower Crude & Refined Oil',
        category: 'Vegetable Oils',
        grade: 'Crude Degummed & Refined Edible',
        purity: 'FFA < 2.0% (Crude), FFA < 0.1% (Refined)',
        moisture: 'Max 0.2%',
        packaging: 'Flexitanks (24 MT), ISO Tank Containers, Bulk Vessels',
        origin: 'Bulgaria (EU)',
        shelfLife: '18 Months in food-grade sealed tanks',
        description: 'High-yield, golden first-press crude oil and fully refined deodorized sunflower oil. Suitable for culinary frying, food packaging, and industrial processing.',
        longDescription: 'Extracted through modern expeller pressing followed by solvent recovery, Sopreden’s crude sunflower oil boasts low phosphatides, clean golden hue, and high smoke stability. We supply both crude oil for destination refineries and fully refined edible oil for bottling and commercial food production.',
        image: '/images/site/sunflower_crude_oil_prod.jpg',
        applications: [
            'Industrial Deep Frying & Fish/Vegetable Canning',
            'Mayonnaise, Emulsions, Sauces & Dressings',
            'Bio-Diesel Feedstock & Technical Lubricants',
            'Retail Edible Oil Bottling Brands'
        ],
        specifications: [
            { label: 'Free Fatty Acids (Crude)', value: 'Max 2.0% (as Oleic)' },
            { label: 'Phosphorus Content', value: 'Max 15 ppm' },
            { label: 'Moisture and Volatile Matter', value: 'Max 0.2%' },
            { label: 'Insoluble Impurities', value: 'Max 0.05%' },
            { label: 'Color (Lovibond 5 1/4" cell)', value: 'Yellow: Max 20, Red: Max 2.0' },
            { label: 'Flash Point', value: 'Min 121°C' }
        ]
    },
    'palm-oil': {
        title: 'Versatile Palm Oil Solutions',
        category: 'Vegetable Oils',
        grade: 'RBD Palm Oil, Olein & Stearin Fractions',
        purity: 'Food Grade & Technical Grade',
        moisture: 'Max 0.1%',
        packaging: 'Flexitanks (24 MT), IBC Drums (1000L), 200L Steel Drums',
        origin: 'Certified Sustainable Origin',
        shelfLife: '24 Months in cool, ambient storage',
        description: 'Responsibly sourced, RSPO-traceable palm oil solutions. Tailored for food manufacturing (confectionery, dairy, popcorn, roasting) and technical bio-diesel production.',
        longDescription: 'Sopreden delivers a dependable supply chain of refined, bleached, and deodorized (RBD) palm oil products and specialized fractions. Our products meet strict sustainability criteria and provide consistent crystallization and melting behavior essential for chocolate spreads, commercial bakery fats, and clean-burning bio-diesel.',
        image: '/images/products/palm_oil.png',
        applications: [
            'Confectionery Fats & Chocolate Spread Fillings',
            'Dairy Alternatives, Shortenings & Margarines',
            'Commercial Industrial Frying & Snack Roasting',
            'Bio-Diesel Production & Technical Oleochemicals'
        ],
        specifications: [
            { label: 'Free Fatty Acids (FFA)', value: 'Max 0.1% (as Palmitic)' },
            { label: 'Iodine Value (Wijs)', value: 'RBD Palm Oil: 50 - 55, Olein: 56 - 60' },
            { label: 'Melting Point (Slip)', value: 'RBD Palm Oil: 33 - 39°C, Stearin: 48 - 54°C' },
            { label: 'Peroxide Value', value: 'Max 1.0 meq/kg' },
            { label: 'Moisture & Impurities', value: 'Max 0.1%' }
        ]
    }
};

export default function ProductDetailPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const [isQuoteOpen, setIsQuoteOpen] = useState(false);

    const product = productsData[slug];

    if (!product) {
        notFound();
    }

    const handleWhatsAppInquiry = () => {
        const text = `Hello Sopreden Trading Desk,%0A%0AI am interested in purchasing:${encodeURIComponent(product.title)}%0APlease provide current FOB / CIF quotation and lot availability.`;
        window.open(`https://wa.me/359895411947?text=${text}`, '_blank');
    };

    return (
        <div className="flex min-h-screen flex-col bg-white text-gray-900 selection:bg-[#004d51] selection:text-white">
            <Header />

            <main className="flex-1 py-8 lg:py-14">
                <div className="container mx-auto px-4 sm:px-6">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center space-x-2 text-xs text-gray-500 mb-8">
                        <Link href="/" className="hover:text-[#004d51] transition-colors">Home</Link>
                        <ChevronRight className="h-3 w-3 text-gray-400" />
                        <Link href="/products" className="hover:text-[#004d51] transition-colors">Products</Link>
                        <ChevronRight className="h-3 w-3 text-gray-400" />
                        <span className="font-semibold text-gray-900 truncate max-w-xs">{product.title}</span>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Left: Product Imagery & Certifications */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-slate-50 border border-gray-200 shadow-xl">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 500px"
                                    className="object-cover"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-[#004d51] shadow-xs">
                                        <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                                        <span>{product.category}</span>
                                    </span>
                                </div>
                            </div>

                            {/* Trust badges card */}
                            <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-5 space-y-3">
                                <div className="text-xs font-bold uppercase tracking-wider text-gray-500">
                                    Quality Assurances & Export Standards:
                                </div>
                                <div className="grid grid-cols-2 gap-3 text-xs text-gray-700">
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                                        <span>Non-GMO Verified</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                                        <span>HACCP & ISO 22000</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                                        <span>SGS Lab Inspection</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                                        <span>Full EU Traceability</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Technical Specs & Inquiry */}
                        <div className="lg:col-span-7 space-y-8">
                            <div className="space-y-3">
                                <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#004d51]">
                                    {product.grade}
                                </div>
                                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
                                    {product.title}
                                </h1>
                                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                    {product.longDescription}
                                </p>
                            </div>

                            {/* Technical Specifications Table */}
                            <div className="space-y-3">
                                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                    <FileText className="h-5 w-5 text-[#004d51]" />
                                    <span>Certified Technical Specifications</span>
                                </h3>
                                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
                                    <table className="min-w-full divide-y divide-gray-200 text-sm">
                                        <tbody className="divide-y divide-gray-100">
                                            {product.specifications.map((spec, i) => (
                                                <tr key={i} className={i % 2 === 0 ? 'bg-slate-50/60' : 'bg-white'}>
                                                    <td className="px-5 py-3 font-semibold text-gray-700 w-1/2">
                                                        {spec.label}
                                                    </td>
                                                    <td className="px-5 py-3 font-medium text-gray-900">
                                                        {spec.value}
                                                    </td>
                                                </tr>
                                            ))}
                                            <tr className="bg-slate-50/60">
                                                <td className="px-5 py-3 font-semibold text-gray-700">Export Packaging</td>
                                                <td className="px-5 py-3 font-medium text-gray-900">{product.packaging}</td>
                                            </tr>
                                            <tr className="bg-white">
                                                <td className="px-5 py-3 font-semibold text-gray-700">Country of Origin</td>
                                                <td className="px-5 py-3 font-medium text-gray-900">{product.origin}</td>
                                            </tr>
                                            <tr className="bg-slate-50/60">
                                                <td className="px-5 py-3 font-semibold text-gray-700">Shelf Life & Storage</td>
                                                <td className="px-5 py-3 font-medium text-gray-900">{product.shelfLife}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Commercial Applications */}
                            <div className="space-y-3">
                                <h3 className="text-lg font-bold text-gray-900">Recommended Industrial Applications</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                    {product.applications.map((app, i) => (
                                        <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-teal-50/50 border border-teal-100 text-sm text-gray-800">
                                            <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                                            <span>{app}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Direct Actions */}
                            <div className="pt-4 flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => setIsQuoteOpen(true)}
                                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#004d51] to-[#00666b] px-6 py-4 text-base font-bold text-white shadow-lg hover:from-[#00383b] hover:to-[#004d51] transition-all cursor-pointer"
                                >
                                    <FileText className="h-5 w-5 text-amber-300" />
                                    <span>Request Official Trade Quote</span>
                                </button>

                                <button
                                    onClick={handleWhatsAppInquiry}
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-4 text-base font-bold text-white shadow-md hover:bg-emerald-700 transition-all cursor-pointer"
                                >
                                    <MessageCircle className="h-5 w-5" />
                                    <span>Instant WhatsApp RFQ</span>
                                </button>
                            </div>

                            <div className="flex items-center gap-2 text-xs text-gray-500 pt-2">
                                <Truck className="h-4 w-4 text-[#004d51] shrink-0" />
                                <span>Direct delivery available across Europe, UK, Middle East, North Africa & the Americas under standard Incoterms.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <QuoteModal
                isOpen={isQuoteOpen}
                onClose={() => setIsQuoteOpen(false)}
                initialProduct={product.title}
            />

            <Footer />
        </div>
    );
}
