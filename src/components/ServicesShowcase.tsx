'use client';

import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { Layers, Droplets, Sparkles, Ship, ShieldCheck, FileCheck, ArrowRight } from 'lucide-react';

export default function ServicesShowcase() {
    const services = [
        {
            icon: Layers,
            title: 'Specialized Sunflower Processing',
            desc: 'Multi-stage dehulling, gravity separation, and high-precision Buhler optical sorting to achieve 99.9% kernel purity for bakery and confectionery clients.',
            image: '/images/site/store.jpg',
            highlight: 'Sortex Optical Technology'
        },
        {
            icon: Droplets,
            title: 'Versatile Palm Oil Solutions',
            desc: 'Expansive, responsibly sourced selection of refined palm oil, stearin, and olein fractions for dairy, sweets, and high-efficiency bio-diesel manufacture.',
            image: '/images/site/palm_oil_main.jpg',
            highlight: 'RSPO & Sustainability Verified'
        },
        {
            icon: Sparkles,
            title: 'Premium Seed Origination',
            desc: 'Meticulously selected and treated "Lady Nails" pumpkin seeds and calibrated striped varieties, ensuring uncompromised grade uniformity.',
            image: '/images/site/pumpkin_kernel.jpg',
            highlight: 'Bulgarian Farm Direct'
        },
        {
            icon: Ship,
            title: 'Multimodal Port & River Logistics',
            desc: 'Direct Danube river barge charters from Silistra, maritime vessel loading via Port of Varna / Port of Constanța, and international container transport.',
            image: '/images/site/hero_seaport.jpg',
            highlight: '17 Multimodal Trade Corridors'
        },
        {
            icon: ShieldCheck,
            title: 'Laboratory Quality Assurance',
            desc: 'Stringent pre-shipment inspection, moisture control (<7%), aflatoxin screening, and certified European sanitary documentation with every lot.',
            image: '/images/site/wheat_bg.jpg',
            highlight: 'Independent SGS Certification'
        },
        {
            icon: FileCheck,
            title: 'Trade Contracts & Forward Incoterms',
            desc: 'Flexible commercial trade execution including FOB, CIF, CFR, and DAP delivery structures with responsive trading desk support across global time zones.',
            image: '/images/site/packaging.jpg',
            highlight: 'GAFTA & FOSFA Standards'
        }
    ];

    return (
        <section className="py-20 lg:py-28 bg-[#002f32] text-white relative overflow-hidden">
            {/* Background geometric accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-amber-300 border border-white/15">
                        <Ship className="h-3.5 w-3.5" />
                        <span>Supply Chain & Trade Infrastructure</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                        Comprehensive Industrial & Logistics Services
                    </h2>

                    <p className="text-base sm:text-lg text-teal-100/90 leading-relaxed">
                        Beyond commodity origination, Sopreden provides end-to-end processing, optical grading, multimodal freight coordination, and contract execution for global buyers.
                    </p>
                </div>

                {/* Services 3x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((srv, idx) => {
                        const Icon = srv.icon;
                        return (
                            <div
                                key={idx}
                                className="group relative flex flex-col overflow-hidden rounded-2xl bg-[#00383b]/90 border border-teal-800/60 shadow-lg hover:border-amber-400/50 hover:bg-[#003f42] transition-all duration-300"
                            >
                                {/* Photo Banner */}
                                <div className="relative h-48 w-full overflow-hidden bg-teal-950">
                                    <Image
                                        src={srv.image}
                                        alt={srv.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#00383b] via-transparent to-black/30" />

                                    <div className="absolute top-3 left-3">
                                        <span className="inline-flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-amber-300 border border-white/10">
                                            {srv.highlight}
                                        </span>
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="p-6 flex flex-1 flex-col space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0 group-hover:scale-105 transition-transform">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <h3 className="text-lg font-bold text-white tracking-tight">
                                            {srv.title}
                                        </h3>
                                    </div>

                                    <p className="text-sm text-teal-100/80 leading-relaxed flex-1">
                                        {srv.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Logistics Banner */}
                <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#012224] to-[#004144] p-8 border border-teal-700/40 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="space-y-1 text-center lg:text-left">
                        <h4 className="text-xl font-bold text-white">
                            Looking to Structure a Custom FOB or CIF Commodity Trade?
                        </h4>
                        <p className="text-sm text-teal-200">
                            Our Silistra trading team responds with detailed indicative pricing, demurrage rates, and volume allocations.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 shrink-0">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3 text-sm font-bold text-gray-950 shadow-md hover:bg-amber-300 transition-colors"
                        >
                            <span>Contact Trading Desk</span>
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
                        >
                            <span>Detailed Logistics Guide</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
