import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import InteractiveCommodities from '@/components/InteractiveCommodities';
import NaturalIngredientsSection from '@/components/NaturalIngredientsSection';
import ServicesShowcase from '@/components/ServicesShowcase';
import NewsSection from '@/components/NewsSection';
import MapAndContactSection from '@/components/MapAndContactSection';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col bg-white text-gray-900 selection:bg-[#004d51] selection:text-white">
            <Header />
            <main className="flex-1">
                <HeroSection />
                <InteractiveCommodities />
                <NaturalIngredientsSection />
                <ServicesShowcase />
                <NewsSection />
                <MapAndContactSection />
            </main>
            <Footer />
        </div>
    );
}
