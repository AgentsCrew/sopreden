'use client';

import { useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import {
    Play,
    Pause,
    Volume2,
    VolumeX,
    ShieldCheck,
    CheckCircle2,
    Factory,
    Zap,
    Scale,
    Cpu,
    Wind,
    Eye,
    Layers,
    Sparkles,
    ArrowRight,
    FileText,
    MessageCircle,
    Warehouse,
    Repeat,
    Leaf
} from 'lucide-react';

export default function FactoryPage() {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [isQuoteOpen, setIsQuoteOpen] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    const steps = [
        {
            num: '01',
            icon: Scale,
            title: 'Pre-Cleaning & Destoning',
            subtitle: 'Dust, stem & heavy mineral removal',
            description: 'Multi-deck vibrating screens, permanent neodymium magnetic separators, and heavy-duty aspirators remove dust, field debris, stems, and mineral stones before seeds reach the dehullers.'
        },
        {
            num: '02',
            icon: Layers,
            title: 'Precision Size Calibration',
            subtitle: 'Calibrating raw seeds by millimeter',
            description: 'Cylindrical grading drums classify incoming seed lots by exact diameter fractions. This ensures every individual seed receives precisely the calibrated kinetic impact energy required to crack its specific hull thickness.'
        },
        {
            num: '03',
            icon: Zap,
            title: 'Centrifugal Impact Dehulling',
            subtitle: 'Gentle kinetic impact cracking',
            description: 'Seeds enter high-speed rotor impellers spinning against an elastomeric impact ring. The centrifugal kinetic force splits the outer fibrous pericarp cleanly without crushing or bruising the tender kernel meat.'
        },
        {
            num: '04',
            icon: Wind,
            title: 'Multi-Channel Air Aspiration',
            subtitle: 'Negative-pressure hull separation',
            description: 'High-velocity closed-circuit air streams lift and extract the lightweight outer hulls away from the heavier meat kernels, routing hulls directly to our on-site pelletizing line.'
        },
        {
            num: '05',
            icon: Repeat,
            title: 'Gravity Density Separation',
            subtitle: 'Vibrating density classification',
            description: 'Multi-deck vibrating gravity tables separate residual unhulled seeds from naked kernels based on specific gravity. Unhulled seeds are automatically recycled into a secondary gentle dehulling loop.'
        },
        {
            num: '06',
            icon: Eye,
            title: 'Optical Sortex Laser Sorting',
            subtitle: 'Bi-chromatic optical color inspection',
            description: 'High-speed optical cameras scan kernels in freefall. Compressed-air micro-ejectors reject discolored seeds, bitter particles, and microscopic hull fragments in milliseconds to achieve 99.9% purity.'
        }
    ];

    const boutiqueAdvantages = [
        {
            icon: Sparkles,
            title: 'Kernel Integrity vs. Destructive Grinding',
            desc: 'Mega-crushers grind and pulverize seeds purely for crude oil extraction. Sopreden’s facility uses gentle kinetic impact engineered exclusively for human-grade kernel preservation, delivering intact whole confectionery and bakery kernels.'
        },
        {
            icon: Cpu,
            title: 'Custom Client Calibration on Demand',
            desc: 'As an agile boutique processor, we can fine-tune rotor speeds, screen mesh dimensions, and optical camera thresholds to match each buyer’s exact specifications (e.g. strict broken limits < 3%, custom counts-per-ounce, bakery or confectionery grade).'
        },
        {
            icon: ShieldCheck,
            title: 'Small-Batch Agility & Zero Cross-Contamination',
            desc: 'Thorough sanitation and rapid changeovers enable us to switch smoothly between striped confectionery sunflower, black oil seeds, and "Lady Nails" pumpkin kernels without the weeks of downtime common in giant industrial mills.'
        },
        {
            icon: Leaf,
            title: 'Hyper-Local Danube Farm Proximity',
            desc: 'Located directly in the heart of Bulgaria’s fertile Dobrudzha sunflower basin, raw harvests arrive from regional grower cooperatives within hours of combining, preventing internal heat build-up and oxidative acidity.'
        }
    ];

    const specs = [
        { label: 'Raw Seed Intake Capacity', value: '40 – 60 MT / 24h', detail: 'Automated intake with dust suppression' },
        { label: 'Finished Kernel Output', value: '20 – 30 MT / 24h', detail: '500 – 750 MT / month of 99.9% pure bakery kernels' },
        { label: 'Optical Purity Standard', value: '99.9% Sortex Grade', detail: 'Sortex bi-chromatic optical camera verified' },
        { label: 'Optimal Moisture Retention', value: '6.5% – 7.5%', detail: 'Controlled storage moisture preventing mold and acidity' },
        { label: 'Broken Chips Fraction', value: '10 – 15 MT / 24h', detail: 'Clean high-protein meats for premium birdfeed' },
        { label: 'Eco-Husk Pelletizing', value: '15 – 20 MT / 24h', detail: 'Zero-waste: hulls compressed into 18 MJ/kg fuel pellets' },
        { label: 'Silo & Buffer Storage', value: '3,500+ MT Capacity', detail: 'Aerated flat stores and steel silos in Silistra' },
        { label: 'Export Packaging Line', value: '25kg Paper / 1000kg Big Bags', detail: 'Palletized, shrink-wrapped, and container-ready' }
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white text-gray-900 selection:bg-[#004d51] selection:text-white">
            <Header />

            <main className="flex-1">
                {/* Hero Header */}
                <section className="relative bg-gradient-to-r from-[#011a1c] via-[#00383b] to-[#004d51] py-20 lg:py-28 text-white overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,135,142,0.2),transparent_70%)]" />
                    <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-4xl space-y-5">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-amber-300 border border-white/20">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            <span>Specialized Mechanical Dehulling Line • Silistra, Bulgaria</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                            Boutique Dehulling & Optical Sorting Facility
                        </h1>

                        <p className="text-base sm:text-lg text-teal-100/90 leading-relaxed max-w-3xl mx-auto font-normal">
                            Where mechanical precision meets agricultural purity. Inside Sopreden’s dedicated seed processing plant in Silistra, transforming raw European sunflower and pumpkin harvests into 99.9% pure, undamaged confectionery and bakery kernels.
                        </p>

                        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                            <button
                                onClick={() => setIsQuoteOpen(true)}
                                className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-bold text-gray-950 shadow-lg hover:bg-amber-300 transition-all hover:scale-102"
                            >
                                <FileText className="h-4 w-4" />
                                <span>Request Contract Dehulling / Tolling Quote</span>
                            </button>
                            <a
                                href="#video-tour"
                                className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/25 px-5 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-all"
                            >
                                <Play className="h-4 w-4 text-amber-300" />
                                <span>Watch Production Video</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Featured Video Player Section */}
                <section id="video-tour" className="py-16 lg:py-24 bg-slate-900 text-white relative">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="max-w-4xl mx-auto text-center space-y-3 mb-10">
                            <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                                Live Facility Footage
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                                Real Industrial Dehulling in Action
                            </h2>
                            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
                                Watch our centrifugal impact dehulling and air aspiration line processing golden sunflower kernels at our Silistra plant.
                            </p>
                        </div>

                        {/* Video Player Card */}
                        <div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                            <div className="relative aspect-16/9 w-full">
                                <video
                                    ref={videoRef}
                                    src="/videos/sopreden2.mp4"
                                    poster="/images/site/store.jpg"
                                    autoPlay
                                    loop
                                    muted={isMuted}
                                    playsInline
                                    className="w-full h-full object-cover"
                                />

                                {/* Floating Video Controls Overlay */}
                                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 text-xs text-white">
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={togglePlay}
                                            className="p-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors flex items-center gap-1.5"
                                        >
                                            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                                            <span className="text-[11px] font-semibold">{isPlaying ? 'Pause' : 'Play'}</span>
                                        </button>
                                        <button
                                            onClick={toggleMute}
                                            className="p-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors flex items-center gap-1.5"
                                        >
                                            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4 text-amber-400" />}
                                            <span className="text-[11px] font-semibold">{isMuted ? 'Unmute' : 'Muted'}</span>
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-2 text-[11px] text-gray-300">
                                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                                        <span>Silistra Dehulling Unit • 1280x720 HD</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 4 Key Production Highlights Below Video */}
                        <div className="max-w-4xl mx-auto mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">40–60 MT</div>
                                <div className="text-xs text-gray-400 mt-1">Daily Seed Intake</div>
                            </div>
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">99.9%</div>
                                <div className="text-xs text-gray-400 mt-1">Optical Sortex Purity</div>
                            </div>
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                <div className="text-2xl sm:text-3xl font-extrabold text-teal-300">20–30 MT</div>
                                <div className="text-xs text-gray-400 mt-1">Clean Kernel Recovery</div>
                            </div>
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                <div className="text-2xl sm:text-3xl font-extrabold text-amber-300">100%</div>
                                <div className="text-xs text-gray-400 mt-1">Zero-Waste Pelletizing</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Boutique Advantage Section */}
                <section className="py-20 lg:py-28 bg-white">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
                            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#004d51]/10 px-3.5 py-1 text-xs font-semibold text-[#004d51]">
                                <Factory className="h-3.5 w-3.5" />
                                <span>The Competitive Edge</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
                                The Boutique Advantage: Why Precision Dehulling Wins
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                Why international bakers, snack producers, and feed manufacturers choose Sopreden’s specialized small-to-medium facility over massive generic oil crushers.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {boutiqueAdvantages.map((adv, idx) => {
                                const Icon = adv.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-teal-400/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex gap-5"
                                    >
                                        <div className="h-12 w-12 rounded-2xl bg-[#004d51] text-amber-300 flex items-center justify-center shrink-0 shadow-md">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                                                {adv.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                {adv.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* 6-Stage Engineering Process Section */}
                <section className="py-20 lg:py-28 bg-[#002f32] text-white relative overflow-hidden">
                    <div className="container mx-auto px-4 sm:px-6 relative z-10">
                        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
                            <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
                                Engineering Sequence
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                                The 6-Stage Precision Dehulling Process
                            </h2>
                            <p className="text-base sm:text-lg text-teal-100/90 leading-relaxed">
                                A closed-circuit, automated processing flow designed for maximum unbroken kernel recovery and 99.9% optical cleanliness.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {steps.map((st, i) => {
                                const Icon = st.icon;
                                return (
                                    <div
                                        key={i}
                                        className="p-7 rounded-3xl bg-[#00383b]/90 border border-teal-800/60 shadow-lg hover:border-amber-400/50 hover:bg-[#003f42] transition-all flex flex-col justify-between space-y-4 group"
                                    >
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <div className="h-12 w-12 rounded-2xl bg-amber-400/15 border border-amber-400/30 text-amber-300 flex items-center justify-center group-hover:scale-105 transition-transform">
                                                    <Icon className="h-6 w-6" />
                                                </div>
                                                <span className="text-3xl font-black text-teal-800/80 group-hover:text-amber-400/30 transition-colors">
                                                    {st.num}
                                                </span>
                                            </div>

                                            <h3 className="text-xl font-bold text-white tracking-tight">
                                                {st.title}
                                            </h3>
                                            <div className="text-xs font-semibold text-amber-300">
                                                {st.subtitle}
                                            </div>
                                            <p className="text-xs sm:text-sm text-teal-100/80 leading-relaxed">
                                                {st.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Facility Capacity & Technical Specifications Matrix */}
                <section className="py-20 lg:py-28 bg-slate-50">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
                            <div className="text-xs font-bold uppercase tracking-wider text-[#004d51]">
                                Operational Scale
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
                                Facility Capacity & Technical Specifications
                            </h2>
                            <p className="text-base text-gray-600">
                                Balanced throughput engineered for consistent delivery to commercial bakeries, confectionery producers, and wild bird packaging networks.
                            </p>
                        </div>

                        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-gray-200/80 shadow-xl overflow-hidden">
                            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                                <div className="p-8 sm:p-10 space-y-6">
                                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                        <Warehouse className="h-5 w-5 text-[#004d51]" />
                                        <span>Throughput & Storage</span>
                                    </h3>
                                    <div className="space-y-4">
                                        {specs.slice(0, 4).map((item, idx) => (
                                            <div key={idx} className="p-3.5 bg-slate-50 rounded-xl">
                                                <div className="text-xs text-gray-500 font-bold uppercase">{item.label}</div>
                                                <div className="text-lg font-extrabold text-[#004d51] mt-0.5">{item.value}</div>
                                                <div className="text-xs text-gray-600 mt-0.5">{item.detail}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-8 sm:p-10 space-y-6">
                                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                        <ShieldCheck className="h-5 w-5 text-emerald-600" />
                                        <span>Fractions, Byproducts & Packaging</span>
                                    </h3>
                                    <div className="space-y-4">
                                        {specs.slice(4).map((item, idx) => (
                                            <div key={idx} className="p-3.5 bg-slate-50 rounded-xl">
                                                <div className="text-xs text-gray-500 font-bold uppercase">{item.label}</div>
                                                <div className="text-lg font-extrabold text-amber-700 mt-0.5">{item.value}</div>
                                                <div className="text-xs text-gray-600 mt-0.5">{item.detail}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Lab Quality Checklist Banner */}
                            <div className="bg-slate-900 text-white p-6 sm:p-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="space-y-1 text-center md:text-left">
                                    <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                                        Laboratory Tested Prior to Sealing
                                    </div>
                                    <div className="text-sm sm:text-base font-semibold text-gray-200">
                                        NIR rapid moisture analysis (&lt; 7.0%), Aflatoxin screening (&lt; 4 ppb), and free fatty acid verification.
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsQuoteOpen(true)}
                                    className="shrink-0 rounded-xl bg-[#004d51] px-5 py-3 text-xs sm:text-sm font-bold text-white hover:bg-[#00383b] transition-colors shadow-md"
                                >
                                    Inquire with Production Desk
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Facility Imagery & Logistics Hub */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
                            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
                                Integrated Silistra Storage & Logistics
                            </h2>
                            <p className="text-base text-gray-600">
                                Our dehulling plant is co-located with high-capacity aerated grain stores, direct road transport docks, and proximity to Danube river terminals.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-md group">
                                <Image
                                    src="/images/site/store.jpg"
                                    alt="Sopreden Facility Silos"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <div className="text-xs font-bold uppercase text-amber-300">Intake & Storage</div>
                                    <div className="text-sm font-bold">Aerated Silos & Buffer Stores</div>
                                </div>
                            </div>

                            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-md group">
                                <Image
                                    src="/images/site/packaging.jpg"
                                    alt="Sopreden Packaging and Palletizing"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <div className="text-xs font-bold uppercase text-amber-300">Export Line</div>
                                    <div className="text-sm font-bold">Palletized 25kg & 1000kg Bags</div>
                                </div>
                            </div>

                            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-md group">
                                <Image
                                    src="/images/site/about_facility.jpg"
                                    alt="Sopreden Danube Logistics Center"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <div className="text-xs font-bold uppercase text-amber-300">Danube Hub</div>
                                    <div className="text-sm font-bold">Silistra Logistics Terminal</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final Call to Action */}
                <section className="py-16 bg-[#00383b] text-white">
                    <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl space-y-6">
                        <Factory className="h-12 w-12 text-amber-400 mx-auto" />
                        <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                            Ready to Source High-Purity Kernels or Book Tolling Capacity?
                        </h3>
                        <p className="text-base text-teal-100/90 leading-relaxed">
                            Contact our Silistra production desk to schedule a batch run, request lot samples, or arrange a facility inspection.
                        </p>
                        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                            <button
                                onClick={() => setIsQuoteOpen(true)}
                                className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-bold text-gray-950 shadow-md hover:bg-amber-300 transition-colors"
                            >
                                <FileText className="h-4 w-4" />
                                <span>Request Quotation</span>
                            </button>
                            <a
                                href="https://wa.me/359895411947?text=Hello%20Sopreden,%20I%20am%20interested%20in%20dehulling%20capacity%20and%20kernel%20purchasing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition-colors"
                            >
                                <MessageCircle className="h-4 w-4" />
                                <span>Chat with Production Desk</span>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <QuoteModal
                isOpen={isQuoteOpen}
                onClose={() => setIsQuoteOpen(false)}
                initialProduct="Sunflower Kernels (Bakery & Confectionery)"
            />

            <Footer />
        </div>
    );
}
