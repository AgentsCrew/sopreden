import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesShowcase from '@/components/ServicesShowcase';
import Image from 'next/image';
import { Ship, Anchor, Truck, Train, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';

export const metadata = {
    title: 'Industrial Services & Multimodal Logistics | Sopreden Trading',
    description: 'Explore Sopreden’s comprehensive grain processing, optical sorting, Danube river freight, and international export logistics.'
};

export default function ServicesPage() {
    const multimodalRoutes = [
        {
            mode: 'Danube River Barges',
            icon: Ship,
            route: 'Silistra Hub ➔ Central & Western Europe',
            desc: 'Bulk agricultural barges operating along the Danube waterway directly into Austria, Germany, and Hungary with high cargo efficiency.'
        },
        {
            mode: 'Black Sea Maritime Vessels',
            icon: Anchor,
            route: 'Port of Varna & Port of Constanța ➔ Global Ports',
            desc: 'Handysize, coaster vessels and standard container shipments into the Mediterranean, Middle East, North Africa, and the Americas.'
        },
        {
            mode: 'Overland Fleet (Road Transport)',
            icon: Truck,
            route: 'Bulgaria ➔ All European Union & Balkans',
            desc: 'Dedicated refrigerated, curtain-sided, and walking-floor trucks delivering 24 MT loads directly to factory doors (DAP terms).'
        },
        {
            mode: 'Rail Freight Network',
            icon: Train,
            route: 'Balkan Rail Corridors ➔ Inland Terminals',
            desc: 'High-volume hopper wagon transport connecting major inland silo networks with regional processing plants.'
        }
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white text-gray-900 selection:bg-[#004d51] selection:text-white">
            <Header />

            <main className="flex-1">
                {/* Header Banner */}
                <div className="relative bg-gradient-to-r from-[#011a1c] via-[#00383b] to-[#004d51] py-20 text-white overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,135,142,0.2),transparent_70%)]" />
                    <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-3xl space-y-4">
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-amber-300 border border-white/15">
                            <Ship className="h-3.5 w-3.5" />
                            <span>International Agribusiness Services</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                            Services & Multimodal Logistics
                        </h1>
                        <p className="text-base sm:text-lg text-teal-100/90 leading-relaxed">
                            Connecting European agricultural production with global commercial processors through advanced optical processing, precision quality control, and multimodal trade routes.
                        </p>
                    </div>
                </div>

                {/* 6 Core Industrial Services */}
                <ServicesShowcase />

                {/* Multimodal Transport Grid */}
                <section className="py-20 lg:py-24 bg-slate-50 border-t border-gray-100">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
                            <div className="text-xs font-bold uppercase tracking-wider text-[#004d51]">
                                Strategic Danube & Maritime Corridors
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
                                17 Multimodal Transport Corridors
                            </h2>
                            <p className="text-base text-gray-600 leading-relaxed">
                                Headquartered along the Danube in Silistra, our logistics team coordinates seamless intermodal transitions across water, road, and rail.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {multimodalRoutes.map((route, i) => {
                                const Icon = route.icon;
                                return (
                                    <div
                                        key={i}
                                        className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-xs hover:shadow-lg hover:border-teal-500/40 transition-all flex flex-col justify-between space-y-4"
                                    >
                                        <div className="space-y-3">
                                            <div className="h-12 w-12 rounded-xl bg-teal-50 text-[#004d51] flex items-center justify-center">
                                                <Icon className="h-6 w-6" />
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900">{route.mode}</h3>
                                            <div className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md inline-block">
                                                {route.route}
                                            </div>
                                            <p className="text-xs text-gray-600 leading-relaxed">
                                                {route.desc}
                                            </p>
                                        </div>

                                        <div className="pt-2 border-t border-gray-100 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                                            <CheckCircle2 className="h-3.5 w-3.5" />
                                            <span>Active Trade Route</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Dehulling Facility Callout Banner */}
                <section className="py-14 bg-gradient-to-r from-[#011a1c] via-[#00383b] to-[#004d51] text-white">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
                            <div className="space-y-2 text-center md:text-left">
                                <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
                                    Dedicated Processing Infrastructure
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                                    Boutique Dehulling & Optical Sorting Plant
                                </h3>
                                <p className="text-sm text-teal-100/90 max-w-xl">
                                    Discover how our 6-stage centrifugal impact dehulling and Sortex optical cleaning line produces 99.9% clean bakery and confectionery sunflower kernels.
                                </p>
                            </div>
                            <Link
                                href="/factory"
                                className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-bold text-gray-950 shadow-md hover:bg-amber-300 transition-colors"
                            >
                                <span>Explore Dehulling Plant</span>
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-[#00383b] text-white">
                    <div className="container mx-auto px-4 sm:px-6 text-center max-w-2xl space-y-5">
                        <ShieldCheck className="h-10 w-10 text-amber-300 mx-auto" />
                        <h3 className="text-3xl font-extrabold tracking-tight">
                            Need a Custom Freight & Commodity Proposal?
                        </h3>
                        <p className="text-sm sm:text-base text-teal-100/90 leading-relaxed">
                            Our trading team evaluates optimal Incoterms, container availability, and river draft conditions to guarantee cost-effective, on-time delivery.
                        </p>
                        <div className="pt-2">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-bold text-gray-950 shadow-md hover:bg-amber-300 transition-colors"
                            >
                                <span>Inquire with Trade Desk</span>
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
