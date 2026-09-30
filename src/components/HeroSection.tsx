'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, FileText, ShieldCheck, ChevronRight, ChevronLeft, Globe, Anchor, Sparkles } from 'lucide-react';
import QuoteModal from './QuoteModal';

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isQuoteOpen, setIsQuoteOpen] = useState(false);

    const slides = [
        {
            title: 'A World of Quality in Every Seed',
            subtitle: 'International origination and export of premium bakery-grade sunflower kernels, confectionery cuts, and authentic "Lady Nails" pumpkin seeds.',
            badge: 'European Agricultural Commodities Merchant',
            image: '/images/site/hero_seaport.jpg',
            highlight: 'Direct Maritime & Danube River Shipments',
            ctaText: 'Explore Commodities',
            ctaHref: '#commodities'
        },
        {
            title: 'Direct Farm-to-Port Origination',
            subtitle: 'Deeply integrated with Bulgaria’s fertile Dobrudzha heartland, delivering certified Non-GMO oilseeds, crude vegetable oils, and custom fractions worldwide.',
            badge: 'Global Supply Chain & Multimodal Freight',
            image: '/images/site/hero_sunflowers.jpg',
            highlight: '257+ Ports & Global Destinations',
            ctaText: 'View Industrial Services',
            ctaHref: '/services'
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 7000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const stats = [
        { value: '257+', label: 'Global Destinations', detail: 'Ports & terminals served', icon: Globe },
        { value: '17', label: 'Multimodal Corridors', detail: 'Danube barge, sea & road', icon: Anchor },
        { value: '9,112+', label: 'Shipments Executed', detail: '99.4% on-time logistics', icon: ShieldCheck },
        { value: '875+', label: 'Silo & Storage Capacity', detail: 'Climate-controlled silos', icon: Sparkles },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-[#021e20] text-white">
            {/* Background Slides with Crossfade */}
            {slides.map((slide, idx) => (
                <div
                    key={slide.image}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                    }`}
                >
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        priority={idx === 0}
                        className="object-cover object-center transform transition-transform duration-10000 ease-out"
                    />
                    {/* Deep Emerald & Vignette Overlays for Maximum Contrast & Luxury */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#011b1d]/95 via-[#00383b]/85 to-black/60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#021e20] via-transparent to-black/40" />
                </div>
            ))}

            {/* Hero Main Content */}
            <div className="relative container mx-auto px-4 sm:px-6 pt-24 pb-20 lg:pt-32 lg:pb-36 z-10">
                <div className="max-w-3xl space-y-6">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 text-xs font-semibold text-amber-300 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>{slides[currentSlide].badge}</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                        {slides[currentSlide].title}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl text-teal-100/90 leading-relaxed max-w-2xl font-normal">
                        {slides[currentSlide].subtitle}
                    </p>

                    {/* CTA Actions */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                        <a
                            href={slides[currentSlide].ctaHref}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-base font-bold text-gray-950 shadow-lg shadow-amber-500/25 hover:from-amber-400 hover:to-amber-500 hover:shadow-amber-500/40 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <span>{slides[currentSlide].ctaText}</span>
                            <ArrowRight className="h-4 w-4" />
                        </a>

                        <button
                            onClick={() => setIsQuoteOpen(true)}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/25 px-6 py-3.5 text-base font-semibold text-white hover:bg-white/20 transition-all duration-200 hover:scale-[1.02]"
                        >
                            <FileText className="h-4 w-4 text-teal-300" />
                            <span>Request Trade Quote</span>
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="pt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-teal-200/80">
                        <span className="flex items-center gap-1.5">
                            <ShieldCheck className="h-4 w-4 text-emerald-400" /> Non-GMO & HACCP Compliant
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Anchor className="h-4 w-4 text-teal-300" /> FOB / CIF / DAP Delivery Terms
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Sparkles className="h-4 w-4 text-amber-400" /> Buhler Optical Sortex Quality
                        </span>
                    </div>
                </div>

                {/* Slider Controls */}
                <div className="mt-12 flex items-center gap-4">
                    <div className="flex gap-2">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentSlide(i)}
                                className={`h-2 transition-all rounded-full ${
                                    i === currentSlide ? 'w-8 bg-amber-400' : 'w-2 bg-white/30 hover:bg-white/60'
                                }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
                            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Floating Live KPI Metrics Bar */}
            <div className="relative z-20 border-t border-white/10 bg-[#011718]/90 backdrop-blur-md">
                <div className="container mx-auto px-4 sm:px-6 py-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {stats.map((st, i) => {
                            const Icon = st.icon;
                            return (
                                <div key={i} className="flex items-start gap-3.5 group">
                                    <div className="h-11 w-11 rounded-xl bg-[#004d51]/50 border border-teal-500/30 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-105 transition-transform">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                                            {st.value}
                                        </div>
                                        <div className="text-xs font-semibold text-teal-200">
                                            {st.label}
                                        </div>
                                        <div className="text-[11px] text-gray-400 hidden sm:block">
                                            {st.detail}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
        </section>
    );
}
