'use client';

import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { ShieldCheck, Award, Eye, Sprout, ArrowRight } from 'lucide-react';

export default function NaturalIngredientsSection() {
    const highlights = [
        {
            icon: Sprout,
            title: '100% Danube Heartland Sourcing',
            desc: 'Cultivated in the mineral-rich soils of Northeast Bulgaria, providing optimal natural oil yield and seed fullness.'
        },
        {
            icon: Eye,
            title: 'Buhler Optical Color Sorting',
            desc: 'Dual-pass optical cameras inspect every seed, eliminating foreign matter, broken husks, and micro-defects.'
        },
        {
            icon: Award,
            title: 'Confectionery & Bakery Standards',
            desc: 'Custom-calibrated counts for international industrial bakers and premium roasted snack producers.'
        },
        {
            icon: ShieldCheck,
            title: 'Full Farm-to-Port Traceability',
            desc: 'HACCP & ISO compliant protocols accompanied by independent laboratory analysis certificates.'
        }
    ];

    return (
        <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left Column: Visual Story & Floating Cutout */}
                    <div className="lg:col-span-5 relative order-2 lg:order-1">
                        <div className="relative mx-auto max-w-md lg:max-w-none">
                            {/* Decorative background circle */}
                            <div className="absolute -top-10 -left-10 h-72 w-72 rounded-full bg-teal-100/60 blur-3xl pointer-events-none" />
                            <div className="absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-amber-100/60 blur-3xl pointer-events-none" />

                            {/* Base card with facility photography */}
                            <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-2xl border border-gray-100 bg-gray-100">
                                <Image
                                    src="/images/site/store.jpg"
                                    alt="Sopreden Grain Sourcing & Warehousing"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 text-white">
                                    <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
                                        Headquarters & Silos
                                    </div>
                                    <div className="text-lg font-bold">
                                        Silistra Danube Agricultural Center
                                    </div>
                                </div>
                            </div>

                            {/* Floating Seed Bowl Cutout */}
                            <div className="absolute -bottom-10 -right-6 sm:-right-8 w-44 sm:w-56 aspect-square filter drop-shadow-2xl transition-transform hover:scale-105 duration-300">
                                <Image
                                    src="/images/site/sunflower_bowl.png"
                                    alt="Pure Sunflower Seeds"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Floating Quality Badge */}
                            <div className="absolute -top-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-gray-100 max-w-[200px]">
                                <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider">
                                    <ShieldCheck className="h-4 w-4" />
                                    <span>Purity 99.9%</span>
                                </div>
                                <div className="text-xs text-gray-600 mt-1 font-medium">
                                    Optical sortex tested kernels & seeds
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Editorial Text */}
                    <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-800">
                            <Sprout className="h-3.5 w-3.5" />
                            <span>Uncompromising Bulgarian Agricultural Heritage</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
                            Only Pure, High-Grade Natural Commodities
                        </h2>

                        <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                            <p>
                                Welcome to <strong>Sopreden</strong> – your dependable European origin for premium sunflower commodities, palm oil fractions, and selected pumpkin seeds. Our commitment to sustainable agriculture and strict trade execution delivers only the finest natural harvests directly to international processors.
                            </p>
                            <p>
                                We specialize in precision-graded sunflower kernels designed for diverse industry standards: from bakery-grade cuts tailored for commercial baking and birdfeed, to hand-selected confectionery Jumbo and XXL kernels that command high value in retail snack manufacturing.
                            </p>
                            <p className="text-sm sm:text-base text-gray-500">
                                Furthermore, our responsibly sourced palm oil selections serve both the confectionery food industry and the technical bio-diesel sector, backed by reliable maritime vessel and Danube river logistics.
                            </p>
                        </div>

                        {/* 4 Feature Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {highlights.map((h, i) => {
                                const Icon = h.icon;
                                return (
                                    <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-teal-200 transition-colors">
                                        <div className="flex items-center gap-2.5 mb-1.5">
                                            <div className="h-7 w-7 rounded-lg bg-[#004d51]/10 text-[#004d51] flex items-center justify-center shrink-0">
                                                <Icon className="h-4 w-4" />
                                            </div>
                                            <h4 className="text-sm font-bold text-gray-900">{h.title}</h4>
                                        </div>
                                        <p className="text-xs text-gray-600 leading-relaxed pl-9">
                                            {h.desc}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="pt-2">
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 text-sm font-bold text-[#004d51] hover:text-[#00383b] group"
                            >
                                <span>Discover Our Origination Network in Silistra</span>
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
