import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InteractiveCommodities from '@/components/InteractiveCommodities';
import { ShieldCheck, Truck, Award, Sparkles } from 'lucide-react';

export const metadata = {
    title: 'Our Products | Sopreden Trading',
    description: 'Explore our certified agricultural commodities: Sunflower Kernels (Bakery & Confectionery), Pumpkin Seeds, Sunflower Chips, Stripped Sunflower, Crude Sunflower Oil, and Palm Oil fractions.'
};

export default function ProductsPage() {
    return (
        <div className="flex min-h-screen flex-col bg-white text-gray-900 selection:bg-[#004d51] selection:text-white">
            <Header />
            <main className="flex-1">
                {/* Hero Header Banner */}
                <div className="relative bg-gradient-to-r from-[#011a1c] via-[#00383b] to-[#004d51] py-20 text-white overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,135,142,0.15),transparent_70%)]" />
                    <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-3xl space-y-4">
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-amber-300 border border-white/15">
                            <Sparkles className="h-3.5 w-3.5" />
                            <span>Export-Grade Agricultural Commodities</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                            Our Agricultural Products
                        </h1>
                        <p className="text-base sm:text-lg text-teal-100/90 leading-relaxed">
                            Precision sorted, optically cleaned, and moisture-controlled to exact industrial tolerances. Sourced directly from Europe's fertile agricultural basin for global food, snack, and feed manufacturers.
                        </p>

                        {/* Top Highlights */}
                        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-teal-200">
                            <span className="flex items-center gap-1.5">
                                <ShieldCheck className="h-4 w-4 text-emerald-400" /> Non-GMO & HACCP Standards
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Award className="h-4 w-4 text-amber-400" /> 99.9% Optical Purity
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Truck className="h-4 w-4 text-teal-300" /> Container & Bulk Vessel Logistics
                            </span>
                        </div>
                    </div>
                </div>

                {/* Interactive Filterable Catalog */}
                <InteractiveCommodities />
            </main>
            <Footer />
        </div>
    );
}
