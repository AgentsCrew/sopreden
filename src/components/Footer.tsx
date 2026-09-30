'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, ArrowUp, ShieldCheck, Globe2, ChevronRight, MessageCircle } from 'lucide-react';

export default function Footer() {
    const t = useTranslations('Footer');
    const common = useTranslations('Common');
    const nav = useTranslations('Navigation');

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const commodities = [
        { name: "Pumpkin Seeds ('Lady Nails')", href: '/products/pumpkin-seeds' },
        { name: 'Sunflower Kernels (Bakery & Confectionery)', href: '/products/sunflower-kernels' },
        { name: 'Sunflower Chips (Broken Birdfeed)', href: '/products/sunflower-chips' },
        { name: 'Stripped Sunflower Seeds (Jumbo & XXL)', href: '/products/stripped-sunflower' },
        { name: 'Sunflower Crude & Refined Oil', href: '/products/sunflower-crude-oil' },
        { name: 'Versatile Palm Oil Solutions', href: '/products/palm-oil' },
    ];

    const quickLinks = [
        { name: nav('home'), href: '/' },
        { name: nav('products'), href: '/products' },
        { name: nav('services'), href: '/services' },
        { name: nav('about'), href: '/about' },
        { name: nav('news'), href: '/news' },
        { name: nav('contact'), href: '/contact' },
    ];

    return (
        <footer className="w-full bg-[#021d1f] text-gray-300 border-t border-teal-950/80">
            {/* Top Quality Banner */}
            <div className="bg-[#002f32] border-b border-teal-900/60 py-6">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                        <div className="flex items-center space-x-3">
                            <div className="h-10 w-10 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 shrink-0">
                                <ShieldCheck className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-white">EU Certified Quality</h4>
                                <p className="text-xs text-teal-200/80">Optical sortex grading, moisture control & Non-GMO traceability</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <div className="h-10 w-10 rounded-xl bg-emerald-400/10 flex items-center justify-center text-emerald-400 shrink-0">
                                <Globe2 className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-white">Global Multimodal Logistics</h4>
                                <p className="text-xs text-teal-200/80">Delivering to 257+ destinations via Danube barges, Black Sea vessels & trucks</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <div className="h-10 w-10 rounded-xl bg-teal-400/10 flex items-center justify-center text-teal-400 shrink-0">
                                <Clock className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-white">Proactive Trading Desk</h4>
                                <p className="text-xs text-teal-200/80">Rapid FOB / CIF price quotes & transparent contract execution</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Links */}
            <div className="container mx-auto px-4 sm:px-6 py-14 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
                    {/* Brand Info */}
                    <div className="lg:col-span-4 space-y-5">
                        <div className="relative h-12 w-40">
                            <Image
                                src="/images/site/logo.png"
                                alt="Sopreden Trading"
                                fill
                                className="object-contain brightness-0 invert"
                            />
                        </div>
                        <p className="text-sm leading-relaxed text-gray-400 pr-4">
                            {t('description')}
                        </p>
                        <div className="inline-flex items-center gap-2 rounded-lg bg-teal-950/80 border border-teal-800/40 px-3.5 py-2 text-xs text-teal-200">
                            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                            <span>{common('certifications')}</span>
                        </div>
                        <div className="pt-2">
                            <a
                                href="https://wa.me/359895411947"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600/20 border border-emerald-500/30 px-4 py-2 text-xs font-semibold text-emerald-300 hover:bg-emerald-600/30 transition-all"
                            >
                                <MessageCircle className="h-4 w-4 text-emerald-400" />
                                <span>Direct Trader WhatsApp: +359 89 541 1947</span>
                            </a>
                        </div>
                    </div>

                    {/* Core Commodities */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                            {t('commodities')}
                        </h4>
                        <ul className="space-y-2.5 text-sm">
                            {commodities.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="group flex items-center text-gray-400 hover:text-white transition-colors"
                                    >
                                        <ChevronRight className="h-3 w-3 mr-1.5 text-amber-400 transition-transform group-hover:translate-x-1" />
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Navigation */}
                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                            {t('quickLinks')}
                        </h4>
                        <ul className="space-y-2.5 text-sm">
                            {quickLinks.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="group flex items-center text-gray-400 hover:text-white transition-colors"
                                    >
                                        <ChevronRight className="h-3 w-3 mr-1.5 text-teal-400 transition-transform group-hover:translate-x-1" />
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Direct Contact & Headquarters */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                            {t('contactInfo')}
                        </h4>
                        <div className="space-y-3 text-sm text-gray-400">
                            <div className="flex items-start gap-3">
                                <MapPin className="h-4 w-4 text-amber-400 shrink-0 mt-1" />
                                <div>
                                    <p className="text-white font-medium">Headquarters & Danube Hub</p>
                                    <p>Docho Mihaylov 1, 7500 Silistra, Bulgaria</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="h-4 w-4 text-amber-400 shrink-0" />
                                <a href="tel:+359895411947" className="text-white hover:text-amber-300 transition-colors">
                                    +359 89 541 1947
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="h-4 w-4 text-amber-400 shrink-0" />
                                <a href="mailto:contact@sopreden.com" className="text-white hover:text-amber-300 transition-colors">
                                    contact@sopreden.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="h-4 w-4 text-amber-400 shrink-0" />
                                <span>Mon - Fri: 08:00 - 17:00 (EET)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#011415] border-t border-teal-950 py-6 text-xs text-gray-500">
                <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                        © {new Date().getFullYear()} <strong className="text-gray-300 font-semibold">Sopreden Trading</strong>. {common('allRightsReserved')}
                    </div>
                    <div className="flex items-center space-x-6 text-gray-400">
                        <span>{t('legal')}</span>
                        <button
                            onClick={scrollToTop}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-teal-950/80 px-3 py-1.5 text-xs text-gray-300 hover:bg-[#004d51] hover:text-white transition-all"
                            aria-label="Back to top"
                        >
                            <ArrowUp className="h-3.5 w-3.5" />
                            <span>Top</span>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
