import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { ShieldCheck, CheckCircle2, ArrowRight, Phone, Mail, Globe, MapPin, Award, Sparkles } from 'lucide-react';

export const metadata = {
    title: 'About Us | Sopreden Trading',
    description: 'Learn about Sopreden Trading: our agricultural origination network in Northeast Bulgaria, Danube river logistics, and leadership team.'
};

export default function AboutPage() {
    const stats = [
        {
            value: '257',
            label: 'Unique Destinations',
            sub: 'Active global delivery footprint',
            icon: '/images/site/map_icon.png'
        },
        {
            value: '17',
            label: 'Transport Options',
            sub: 'Multimodal logistics network',
            icon: '/images/site/ship_icon.png'
        },
        {
            value: '9,112',
            label: 'Orders Worldwide',
            sub: 'Delivered contracts & spot deals',
            icon: '/images/site/earth_icon.png'
        },
        {
            value: '875',
            label: 'Partner Warehouses',
            sub: 'Silo storage capacity network',
            icon: '/images/site/warehouse_icon.png'
        }
    ];

    const team = [
        {
            name: 'Alex Nordmann',
            role: 'CEO & Founder',
            bio: 'Over 18 years in international commodities trading, grain origination, and maritime freight execution across the Black Sea and Danube basin.',
            initials: 'AN',
            color: 'from-teal-600 to-[#004d51]'
        },
        {
            name: 'Ella Møller',
            role: 'Project & Logistics Manager',
            bio: 'Coordinates multimodal container lines, river barge charters, customs clearance, and just-in-time logistics to international processing plants.',
            initials: 'EM',
            color: 'from-amber-600 to-amber-700'
        },
        {
            name: 'Sven Olsen',
            role: 'Customer Service & Commercial Desk',
            bio: 'Direct interface for commercial buyers in the bakery, confectionery, and birdfeed sectors; managing contract terms and sample allocations.',
            initials: 'SO',
            color: 'from-emerald-600 to-teal-700'
        },
        {
            name: 'Cooper',
            role: 'Office & Operations Assistant',
            bio: 'Oversees documentation workflows, quality certificates of analysis (COA), export documentation, and trading desk support.',
            initials: 'CO',
            color: 'from-blue-600 to-cyan-700'
        }
    ];

    const exportProducts = [
        'Bakery Grade Sunflower Kernels',
        'Confectionery Jumbo & XXL Sunflower Kernels',
        'Sunflower Chips (Broken Birdfeed Fraction)',
        'Sunflower Husk Fuel Pellets',
        'Baked & Roasted Sunflower Seeds',
        "Authentic 'Lady Nails' Pumpkin Seeds"
    ];

    const importProducts = [
        'Raw Sunflower Seed Feedstock for Crushing & Dehulling',
        'Crude Vegetable Oil Fractions',
        'Specialized Bio-Diesel Precursors'
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white text-gray-900 selection:bg-[#004d51] selection:text-white">
            <Header />

            <main className="flex-1">
                {/* Hero Banner with About Us Image */}
                <section className="relative min-h-[420px] lg:min-h-[500px] flex items-center justify-center text-white overflow-hidden">
                    <Image
                        src="/images/site/about_hero.jpg"
                        alt="Sopreden Trading Fields and Operations"
                        fill
                        priority
                        className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#011a1c]/90 via-[#00383b]/80 to-black/60" />

                    <div className="relative container mx-auto px-4 sm:px-6 py-20 text-center max-w-3xl space-y-4 z-10">
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-amber-300 border border-white/15">
                            <Sparkles className="h-3.5 w-3.5" />
                            <span>Who We Are & What Drives Us</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                            ABOUT SOPREDEN
                        </h1>
                        <p className="text-base sm:text-lg text-teal-100/90 leading-relaxed font-normal">
                            A premier agricultural trading merchant rooted in Bulgaria’s fertile Northeast region, bridging local grain mastery with global food and energy demand.
                        </p>
                    </div>
                </section>

                {/* 4 Stat Cards Floating Section */}
                <section className="relative -mt-16 z-20 container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((st, i) => (
                            <div
                                key={i}
                                className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-xl hover:shadow-2xl hover:border-teal-500/40 transition-all text-center flex flex-col items-center space-y-3"
                            >
                                <div className="relative h-12 w-12 flex items-center justify-center">
                                    <Image
                                        src={st.icon}
                                        alt={st.label}
                                        width={48}
                                        height={48}
                                        className="object-contain"
                                    />
                                </div>
                                <div className="text-3xl sm:text-4xl font-extrabold text-[#004d51] tracking-tight">
                                    {st.value}
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-gray-900">{st.label}</div>
                                    <div className="text-xs text-gray-500">{st.sub}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Main Story: We are a Company... */}
                <section className="py-20 lg:py-28 bg-white">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                            {/* Photo */}
                            <div className="lg:col-span-5 relative">
                                <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-2xl border border-gray-200 bg-gray-100">
                                    <Image
                                        src="/images/site/store.jpg"
                                        alt="Sopreden Facility and Silos"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 hidden sm:block p-4 rounded-2xl bg-[#004d51] text-white shadow-xl max-w-xs">
                                    <div className="text-xs text-amber-300 font-bold uppercase tracking-wider">Danube Hub</div>
                                    <div className="text-sm font-semibold">Silistra, Bulgaria</div>
                                </div>
                            </div>

                            {/* Narrative */}
                            <div className="lg:col-span-7 space-y-6">
                                <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#004d51]">
                                    Company Origination Story
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
                                    Decades of Experience in European Commodities Trade
                                </h2>
                                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                    Based in Bulgaria's Northeast region—famed as the nation’s agricultural breadbasket—Sopreden Trading specializes in international trade with seeds, nuts, and agricultural commodities.
                                </p>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    Every key team member brings abundant, seasoned experience from the largest and most dynamic agribusiness conglomerates in the Black Sea and Danube basin. We maintain long-standing strategic partnerships with regional leaders in the sunflower sector and enjoy excellent, direct relationships with regional producers.
                                </p>

                                {/* Export & Import Lists */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                                    <div className="space-y-3">
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-[#004d51] flex items-center gap-1.5">
                                            <Award className="h-4 w-4" /> Products We Export:
                                        </h4>
                                        <ul className="space-y-1.5 text-xs sm:text-sm text-gray-700">
                                            {exportProducts.map((p, i) => (
                                                <li key={i} className="flex items-center gap-2">
                                                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                                                    <span>{p}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-amber-700 flex items-center gap-1.5">
                                            <Sparkles className="h-4 w-4" /> Products We Import:
                                        </h4>
                                        <ul className="space-y-1.5 text-xs sm:text-sm text-gray-700">
                                            {importProducts.map((p, i) => (
                                                <li key={i} className="flex items-center gap-2">
                                                    <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0" />
                                                    <span>{p}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Leadership Section */}
                <section className="py-20 bg-slate-50 border-t border-gray-100">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
                            <div className="text-xs font-bold uppercase tracking-wider text-[#004d51]">
                                Commercial & Operational Leadership
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
                                Meet the Team
                            </h2>
                            <p className="text-base text-gray-600">
                                Dedicated specialists combining international grain trading knowledge with responsive client support.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {team.map((member, i) => (
                                <div
                                    key={i}
                                    className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-xs hover:shadow-xl hover:border-teal-500/40 transition-all text-center flex flex-col justify-between"
                                >
                                    <div className="space-y-4">
                                        {/* Elegant Monogram Avatar */}
                                        <div className={`mx-auto h-24 w-24 rounded-full bg-gradient-to-tr ${member.color} text-white flex items-center justify-center text-2xl font-black shadow-lg shadow-teal-950/15`}>
                                            {member.initials}
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                                            <div className="text-xs font-semibold text-[#004d51] uppercase tracking-wider mt-0.5">
                                                {member.role}
                                            </div>
                                        </div>

                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            {member.bio}
                                        </p>
                                    </div>

                                    {/* Contact channels */}
                                    <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-gray-500">
                                        <a
                                            href="mailto:contact@sopreden.com"
                                            className="p-2 rounded-full hover:bg-teal-50 hover:text-[#004d51] transition-colors"
                                            aria-label={`Email ${member.name}`}
                                        >
                                            <Mail className="h-4 w-4" />
                                        </a>
                                        <a
                                            href="tel:+359895411947"
                                            className="p-2 rounded-full hover:bg-teal-50 hover:text-[#004d51] transition-colors"
                                            aria-label={`Call ${member.name}`}
                                        >
                                            <Phone className="h-4 w-4" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Facility Banner Showcase */}
                <section className="relative py-20 bg-[#002f32] text-white overflow-hidden">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                            <div className="lg:col-span-5 space-y-5">
                                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                                    Let’s Plan Your Next Commodity Trade
                                </h3>
                                <p className="text-sm sm:text-base text-teal-100/90 leading-relaxed">
                                    Whether you require a trial 24 MT container load or a multi-thousand-ton seasonal contract, we deliver transparent execution, flexible payment terms, and continuous lot sampling.
                                </p>
                                <div className="pt-2">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-bold text-gray-950 shadow-md hover:bg-amber-300 transition-colors"
                                    >
                                        <span>Book a Consultation</span>
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>

                            <div className="lg:col-span-7 relative">
                                <div className="relative aspect-16/9 w-full overflow-hidden rounded-3xl shadow-2xl border border-teal-700/50">
                                    <Image
                                        src="/images/site/about_facility.jpg"
                                        alt="Sopreden Trading Grain Logistics Facility"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
