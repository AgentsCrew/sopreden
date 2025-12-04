import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

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
                </nav>
            </div>
        </header>
    );
}
