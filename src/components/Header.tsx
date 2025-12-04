import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Header() {
    const t = useTranslations('Navigation');

    return (
        <header className="w-full border-b border-black/10 bg-white py-4">
            <div className="container mx-auto flex items-center justify-between px-4">
                <Link href="/" className="text-2xl font-bold tracking-tighter">
                    SOPREDEN
                </Link>
                <nav className="hidden space-x-8 md:flex">
                    <Link href="/" className="text-sm font-medium hover:text-gray-600">
                        {t('home')}
                    </Link>
                    <Link href="/products" className="text-sm font-medium hover:text-gray-600">
                        {t('products')}
                    </Link>
                    <Link href="/services" className="text-sm font-medium hover:text-gray-600">
                        {t('services')}
                    </Link>
                    <Link href="/about" className="text-sm font-medium hover:text-gray-600">
                        {t('about')}
                    </Link>
                    <Link href="/news" className="text-sm font-medium hover:text-gray-600">
                        {t('news')}
                    </Link>
                    <Link href="/contact" className="text-sm font-medium hover:text-gray-600">
                        {t('contact')}
                    </Link>
                    <div className="relative group">
                        <button className="flex items-center space-x-2 text-sm font-medium hover:text-gray-600 focus:outline-none">
                            <div className="relative h-4 w-6 overflow-hidden rounded-sm border border-gray-200">
                                <Image
                                    src="/images/flags/gb.svg"
                                    alt="English"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span>EN</span>
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            <div className="py-1">
                                <span className="flex items-center px-4 py-2 text-sm text-black font-bold cursor-default bg-gray-50">
                                    <div className="relative mr-3 h-4 w-6 overflow-hidden rounded-sm border border-gray-200">
                                        <Image src="/images/flags/gb.svg" alt="English" fill className="object-cover" />
                                    </div>
                                    English
                                </span>
                                <span className="flex items-center px-4 py-2 text-sm text-gray-400 cursor-not-allowed">
                                    <div className="relative mr-3 h-4 w-6 overflow-hidden rounded-sm border border-gray-200">
                                        <Image src="/images/flags/bg.svg" alt="Bulgarian" fill className="object-cover" />
                                    </div>
                                    Български
                                </span>
                                <span className="flex items-center px-4 py-2 text-sm text-gray-400 cursor-not-allowed">
                                    <div className="relative mr-3 h-4 w-6 overflow-hidden rounded-sm border border-gray-200">
                                        <Image src="/images/flags/fr.svg" alt="French" fill className="object-cover" />
                                    </div>
                                    Français
                                </span>
                                <span className="flex items-center px-4 py-2 text-sm text-gray-400 cursor-not-allowed">
                                    <div className="relative mr-3 h-4 w-6 overflow-hidden rounded-sm border border-gray-200">
                                        <Image src="/images/flags/es.svg" alt="Spanish" fill className="object-cover" />
                                    </div>
                                    Español
                                </span>
                                <span className="flex items-center px-4 py-2 text-sm text-gray-400 cursor-not-allowed">
                                    <div className="relative mr-3 h-4 w-6 overflow-hidden rounded-sm border border-gray-200">
                                        <Image src="/images/flags/de.svg" alt="German" fill className="object-cover" />
                                    </div>
                                    Deutsch
                                </span>
                                <span className="flex items-center px-4 py-2 text-sm text-gray-400 cursor-not-allowed">
                                    <div className="relative mr-3 h-4 w-6 overflow-hidden rounded-sm border border-gray-200">
                                        <Image src="/images/flags/it.svg" alt="Italian" fill className="object-cover" />
                                    </div>
                                    Italiano
                                </span>
                                <span className="flex items-center px-4 py-2 text-sm text-gray-400 cursor-not-allowed">
                                    <div className="relative mr-3 h-4 w-6 overflow-hidden rounded-sm border border-gray-200">
                                        <Image src="/images/flags/ro.svg" alt="Romanian" fill className="object-cover" />
                                    </div>
                                    Română
                                </span>
                                <span className="flex items-center px-4 py-2 text-sm text-gray-400 cursor-not-allowed">
                                    <div className="relative mr-3 h-4 w-6 overflow-hidden rounded-sm border border-gray-200">
                                        <Image src="/images/flags/gr.svg" alt="Greek" fill className="object-cover" />
                                    </div>
                                    Ελληνικά
                                </span>
                                <span className="flex items-center px-4 py-2 text-sm text-gray-400 cursor-not-allowed">
                                    <div className="relative mr-3 h-4 w-6 overflow-hidden rounded-sm border border-gray-200">
                                        <Image src="/images/flags/nl.svg" alt="Dutch" fill className="object-cover" />
                                    </div>
                                    Nederlands
                                </span>
                                <span className="flex items-center px-4 py-2 text-sm text-gray-400 cursor-not-allowed">
                                    <div className="relative mr-3 h-4 w-6 overflow-hidden rounded-sm border border-gray-200">
                                        <Image src="/images/flags/sa.svg" alt="Arabic" fill className="object-cover" />
                                    </div>
                                    العربية
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
