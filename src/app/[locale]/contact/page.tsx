import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MapAndContactSection from '@/components/MapAndContactSection';
import { Mail, Phone, Clock, MessageCircle } from 'lucide-react';

export const metadata = {
    title: 'Contact Us & Global Trading Desk | Sopreden Trading',
    description: 'Get in touch with Sopreden Trading in Silistra, Bulgaria. Direct phone, email, WhatsApp, and official RFQ inquiry form.'
};

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col bg-white text-gray-900 selection:bg-[#004d51] selection:text-white">
            <Header />

            <main className="flex-1">
                {/* Header Banner */}
                <div className="relative bg-gradient-to-r from-[#011a1c] via-[#00383b] to-[#004d51] py-20 text-white overflow-hidden">
                    <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-3xl space-y-4">
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-amber-300 border border-white/15">
                            <Clock className="h-3.5 w-3.5" />
                            <span>Operating Across Multiple Time Zones</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                            Contact Our Trading Desk
                        </h1>
                        <p className="text-base sm:text-lg text-teal-100/90 leading-relaxed">
                            Want to discuss spot allocations, forward agricultural contracts, or freight logistics? We are available via phone, email, and WhatsApp.
                        </p>
                    </div>
                </div>

                <MapAndContactSection />
            </main>

            <Footer />
        </div>
    );
}
