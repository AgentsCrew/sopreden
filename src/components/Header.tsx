'use client';

import { useState, useEffect } from 'react';
import { Link, usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Phone, Mail, Clock, ChevronDown, Menu, X, MessageCircle, FileText, ArrowRight } from 'lucide-react';
import QuoteModal from './QuoteModal';

export default function Header() {
    const t = useTranslations('Navigation');
    const common = useTranslations('Common');
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [langDropdownOpen, setLangDropdownOpen] = useState(false);
    const [isQuoteOpen, setIsQuoteOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: '/', label: t('home') },
        { href: '/products', label: t('products'), badge: '6 Types' },
        { href: '/services', label: t('services') },
        { href: '/about', label: t('about') },
        { href: '/news', label: t('news') },
        { href: '/contact', label: t('contact') },
    ];

    const languages = [
        { code: 'en', label: 'English', flag: '/images/flags/gb.svg', active: true },
        { code: 'bg', label: 'Български', flag: '/images/flags/bg.svg', active: false },
        { code: 'fr', label: 'Français', flag: '/images/flags/fr.svg', active: false },
        { code: 'de', label: 'Deutsch', flag: '/images/flags/de.svg', active: false },
        { code: 'es', label: 'Español', flag: '/images/flags/es.svg', active: false },
        { code: 'ro', label: 'Română', flag: '/images/flags/ro.svg', active: false },
        { code: 'it', label: 'Italiano', flag: '/images/flags/it.svg', active: false },
    ];

    return (
        <>
            <header className="sticky top-0 z-40 w-full transition-all duration-300">
                {/* Top Notification / Trading Desk Bar */}
                <div className="bg-[#002f32] text-xs text-teal-100 border-b border-teal-900/40">
                    <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-2 text-xs">
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="font-medium text-white/90 hidden sm:inline">
                                    Trading Desk Silistra (EET):
                                </span>
                                <span className="text-teal-200 flex items-center gap-1">
                                    <Clock className="h-3 w-3 inline" /> 08:00 - 17:00
                                </span>
                            </div>
                            <div className="hidden lg:flex items-center space-x-4 border-l border-teal-800/80 pl-4">
                                <a
                                    href="tel:+359895411947"
                                    className="flex items-center gap-1.5 hover:text-white transition-colors"
                                >
                                    <Phone className="h-3 w-3 text-amber-400" />
                                    <span>+359 89 541 1947</span>
                                </a>
                                <a
                                    href="mailto:contact@sopreden.com"
                                    className="flex items-center gap-1.5 hover:text-white transition-colors"
                                >
                                    <Mail className="h-3 w-3 text-amber-400" />
                                    <span>contact@sopreden.com</span>
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <a
                                href="https://wa.me/359895411947?text=Hello%20Sopreden%20Trading,%20I'm%20interested%20in%20agricultural%20commodities"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600/30 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300 hover:bg-emerald-600/50 transition-colors"
                            >
                                <MessageCircle className="h-3 w-3 text-emerald-400" />
                                <span>WhatsApp Desk</span>
                            </a>

                            {/* Language Switcher */}
                            <div className="relative">
                                <button
                                    onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                                    className="flex items-center space-x-1.5 rounded-md px-2 py-1 text-xs hover:bg-teal-900/60 focus:outline-none transition-colors"
                                    aria-expanded={langDropdownOpen}
                                >
                                    <div className="relative h-3 w-4.5 overflow-hidden rounded-xs">
                                        <Image
                                            src="/images/flags/gb.svg"
                                            alt="English"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <span className="font-semibold text-white">EN</span>
                                    <ChevronDown className="h-3 w-3 text-teal-300" />
                                </button>

                                {langDropdownOpen && (
                                    <div
                                        className="absolute right-0 mt-2 w-44 rounded-xl bg-white shadow-xl ring-1 ring-black/10 py-1.5 text-gray-900 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                                        onMouseLeave={() => setLangDropdownOpen(false)}
                                    >
                                        <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                                            Select Language
                                        </div>
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => setLangDropdownOpen(false)}
                                                className={`w-full flex items-center px-3 py-2 text-xs transition-colors ${
                                                    lang.active
                                                        ? 'bg-teal-50 font-bold text-[#004d51]'
                                                        : 'text-gray-600 hover:bg-gray-50'
                                                }`}
                                            >
                                                <div className="relative mr-2.5 h-3 w-4.5 overflow-hidden rounded-xs border border-gray-200">
                                                    <Image
                                                        src={lang.flag}
                                                        alt={lang.label}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <span className="flex-1 text-left">{lang.label}</span>
                                                {lang.active && (
                                                    <span className="h-1.5 w-1.5 rounded-full bg-[#004d51]"></span>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Navigation Bar */}
                <div
                    className={`w-full transition-all duration-300 ${
                        scrolled
                            ? 'bg-white/95 backdrop-blur-md shadow-md py-3.5 border-b border-gray-100'
                            : 'bg-white py-4.5 border-b border-gray-100/80'
                    }`}
                >
                    <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group focus:outline-none">
                            <div className="relative h-11 w-32 sm:h-12 sm:w-36 transition-transform group-hover:scale-[1.02]">
                                <Image
                                    src="/images/site/logo.png"
                                    alt="Sopreden Trading"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <span className="hidden xl:inline-block pl-3 border-l border-gray-200 text-[11px] font-medium uppercase tracking-widest text-gray-500 leading-tight">
                                Agricultural Commodities<br />
                                <span className="text-[#004d51] font-semibold">Danube Trade Hub</span>
                            </span>
                        </Link>

                        {/* Desktop Nav Links */}
                        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`relative px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
                                            isActive
                                                ? 'text-[#004d51] bg-[#004d51]/8'
                                                : 'text-gray-700 hover:text-[#004d51] hover:bg-gray-50'
                                        }`}
                                    >
                                        <span>{item.label}</span>
                                        {item.badge && (
                                            <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-100 text-amber-800">
                                                {item.badge}
                                            </span>
                                        )}
                                        {isActive && (
                                            <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#004d51] rounded-full" />
                                        )}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Header Action Button */}
                        <div className="hidden md:flex items-center space-x-3">
                            <button
                                onClick={() => setIsQuoteOpen(true)}
                                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#004d51] to-[#00666b] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#004d51]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[#004d51]/30 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <FileText className="h-4 w-4 text-amber-300" />
                                <span>{common('requestQuote')}</span>
                                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>

                        {/* Mobile Menu Hamburger */}
                        <div className="flex items-center space-x-2 lg:hidden">
                            <button
                                onClick={() => setIsQuoteOpen(true)}
                                className="inline-flex items-center rounded-lg bg-[#004d51] p-2 text-white shadow-sm hover:bg-[#00383b]"
                                aria-label="Request quote"
                            >
                                <FileText className="h-4 w-4" />
                            </button>
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700 hover:bg-gray-100 focus:outline-none"
                                aria-label="Toggle navigation menu"
                            >
                                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Drawer */}
                {mobileMenuOpen && (
                    <div className="fixed inset-0 z-50 lg:hidden flex">
                        <div
                            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
                            onClick={() => setMobileMenuOpen(false)}
                        />
                        <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl flex flex-col justify-between p-6 overflow-y-auto animate-in slide-in-from-right duration-250">
                            <div>
                                <div className="flex items-center justify-between pb-5 border-b border-gray-100">
                                    <div className="relative h-9 w-28">
                                        <Image
                                            src="/images/site/logo.png"
                                            alt="Sopreden Trading"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <button
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>

                                <nav className="mt-6 flex flex-col space-y-1">
                                    {navItems.map((item) => {
                                        const isActive = pathname === item.href;
                                        return (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-semibold ${
                                                    isActive
                                                        ? 'bg-[#004d51] text-white'
                                                        : 'text-gray-800 hover:bg-gray-50'
                                                }`}
                                            >
                                                <span>{item.label}</span>
                                                {item.badge && (
                                                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                                                        isActive ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-800'
                                                    }`}>
                                                        {item.badge}
                                                    </span>
                                                )}
                                            </Link>
                                        );
                                    })}
                                </nav>

                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <button
                                        onClick={() => { setMobileMenuOpen(false); setIsQuoteOpen(true); }}
                                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#004d51] py-3 text-sm font-semibold text-white shadow-md hover:bg-[#00383b]"
                                    >
                                        <FileText className="h-4 w-4 text-amber-300" />
                                        <span>{common('requestQuote')}</span>
                                    </button>
                                </div>
                            </div>

                            {/* Drawer Footer Details */}
                            <div className="pt-6 border-t border-gray-100 text-xs text-gray-600 space-y-3">
                                <a href="tel:+359895411947" className="flex items-center gap-2 font-medium text-gray-900">
                                    <Phone className="h-4 w-4 text-[#004d51]" /> +359 89 541 1947
                                </a>
                                <a href="mailto:contact@sopreden.com" className="flex items-center gap-2 font-medium text-gray-900">
                                    <Mail className="h-4 w-4 text-[#004d51]" /> contact@sopreden.com
                                </a>
                                <div className="text-[11px] text-gray-400">
                                    Docho Mihaylov 1, Silistra, Bulgaria
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* Interactive Quote RFQ Modal */}
            <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
        </>
    );
}
