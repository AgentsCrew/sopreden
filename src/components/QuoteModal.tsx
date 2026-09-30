'use client';

import { useState } from 'react';
import { X, Send, CheckCircle2, MessageCircle, FileSpreadsheet, ShieldCheck } from 'lucide-react';

interface QuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialProduct?: string;
}

export default function QuoteModal({ isOpen, onClose, initialProduct = 'sunflower-kernels' }: QuoteModalProps) {
    const [product, setProduct] = useState(initialProduct);
    const [quantity, setQuantity] = useState('24 MT (1x 40ft Container)');
    const [incoterm, setIncoterm] = useState('CIF - Cost, Insurance & Freight');
    const [destination, setDestination] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [submitted, setSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleWhatsAppSubmit = () => {
        const text = `Hello Sopreden Trading Desk,%0A%0AI would like to request an official quotation:%0A- Product: ${encodeURIComponent(product)}%0A- Quantity: ${encodeURIComponent(quantity)}%0A- Incoterm: ${encodeURIComponent(incoterm)}%0A- Destination Port/City: ${encodeURIComponent(destination || 'Not specified')}%0A- Company: ${encodeURIComponent(company || 'Not specified')}%0A- Email: ${encodeURIComponent(email || 'Not specified')}%0A- Phone: ${encodeURIComponent(phone || 'Not specified')}`;
        window.open(`https://wa.me/359895411947?text=${text}`, '_blank');
        setSubmitted(true);
    };

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Trade Quote Request: ${product} (${quantity})`);
        const body = encodeURIComponent(`Dear Sopreden Trading Desk,\n\nPlease provide a binding quote with current CIF/FOB pricing for:\n\nProduct: ${product}\nQuantity: ${quantity}\nIncoterm: ${incoterm}\nDestination: ${destination}\n\nBuyer Details:\nCompany: ${company}\nContact Email: ${email}\nPhone: ${phone}\n\nThank you.`);
        window.location.href = `mailto:contact@sopreden.com?subject=${subject}&body=${body}`;
        setSubmitted(true);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-100">
                {/* Header */}
                <div className="relative bg-gradient-to-r from-[#00383b] to-[#004d51] p-6 text-white">
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 p-2 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
                        aria-label="Close modal"
                    >
                        <X className="h-5 w-5" />
                    </button>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1">
                        <FileSpreadsheet className="h-4 w-4" /> Instant Commodity RFQ
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight">Request an Official Trade Quotation</h3>
                    <p className="text-sm text-teal-100/90 mt-1">
                        Connect directly with our commodities trading desk in Silistra, Bulgaria.
                    </p>
                </div>

                {/* Body */}
                <div className="p-6 max-h-[80vh] overflow-y-auto">
                    {submitted ? (
                        <div className="text-center py-8 space-y-4">
                            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                                <CheckCircle2 className="h-8 w-8" />
                            </div>
                            <h4 className="text-2xl font-bold text-gray-900">RFQ Transmitted Successfully</h4>
                            <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
                                Your specifications have been forwarded to our commercial trading desk. An official contract offer with moisture/purity certificate details will be delivered to your inbox or WhatsApp shortly.
                            </p>
                            <div className="pt-4 flex justify-center gap-3">
                                <button
                                    onClick={() => { setSubmitted(false); onClose(); }}
                                    className="rounded-lg bg-[#004d51] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#00383b] transition-colors"
                                >
                                    Done
                                </button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleEmailSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                                        Select Commodity *
                                    </label>
                                    <select
                                        value={product}
                                        onChange={(e) => setProduct(e.target.value)}
                                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-900 focus:bg-white focus:border-[#004d51] focus:ring-1 focus:ring-[#004d51] outline-none transition-all"
                                    >
                                        <option value="Sunflower Kernels (Bakery & Confectionery)">Sunflower Kernels (Bakery & Confectionery)</option>
                                        <option value="Pumpkin Seeds ('Lady Nails')">Pumpkin Seeds ('Lady Nails')</option>
                                        <option value="Stripped Sunflower Seeds (Jumbo / XXL / Badger)">Stripped Sunflower Seeds (Jumbo / XXL / Badger)</option>
                                        <option value="Sunflower Chips (Broken Birdfeed Fraction)">Sunflower Chips (Broken Birdfeed Fraction)</option>
                                        <option value="Sunflower Crude & Refined Oil">Sunflower Crude & Refined Oil</option>
                                        <option value="Versatile Palm Oil Solutions">Versatile Palm Oil Solutions</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                                        Target Volume / Metric Tons *
                                    </label>
                                    <select
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-900 focus:bg-white focus:border-[#004d51] focus:ring-1 focus:ring-[#004d51] outline-none transition-all"
                                    >
                                        <option value="24 MT (1x 40ft Container / Truckload)">24 MT (1x 40ft Container / Truckload)</option>
                                        <option value="50 MT (2x Containers)">50 MT (2x Containers)</option>
                                        <option value="100 - 250 MT (Spot Bulk Allocation)">100 - 250 MT (Spot Bulk Allocation)</option>
                                        <option value="500 - 1,500 MT (Barge / Vessel Parcel)">500 - 1,500 MT (Barge / Vessel Parcel)</option>
                                        <option value="3,000+ MT (Long-term Annual Contract)">3,000+ MT (Long-term Annual Contract)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                                        Preferred Incoterm *
                                    </label>
                                    <select
                                        value={incoterm}
                                        onChange={(e) => setIncoterm(e.target.value)}
                                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-900 focus:bg-white focus:border-[#004d51] focus:ring-1 focus:ring-[#004d51] outline-none transition-all"
                                    >
                                        <option value="CIF - Cost, Insurance & Freight (Discharge Port)">CIF - Cost, Insurance & Freight</option>
                                        <option value="FOB - Port of Varna / Port of Constanța">FOB - Port of Varna / Constanța</option>
                                        <option value="FOB - Danube River Port Silistra">FOB - Danube River Port Silistra</option>
                                        <option value="DAP - Delivered at Place (Buyer's Warehouse)">DAP - Delivered at Place (Warehouse)</option>
                                        <option value="CFR - Cost & Freight">CFR - Cost & Freight</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                                        Destination Port or City *
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Rotterdam, Hamburg, Genoa, Mersin..."
                                        value={destination}
                                        onChange={(e) => setDestination(e.target.value)}
                                        required
                                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-900 focus:bg-white focus:border-[#004d51] focus:ring-1 focus:ring-[#004d51] outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="border-t border-gray-100 pt-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">
                                    Buyer Contact Details
                                </span>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Company Name *"
                                            value={company}
                                            onChange={(e) => setCompany(e.target.value)}
                                            required
                                            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 focus:bg-white focus:border-[#004d51] focus:ring-1 focus:ring-[#004d51] outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Business Email *"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 focus:bg-white focus:border-[#004d51] focus:ring-1 focus:ring-[#004d51] outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            placeholder="Phone / WhatsApp *"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 focus:bg-white focus:border-[#004d51] focus:ring-1 focus:ring-[#004d51] outline-none transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-xs text-gray-500 py-1">
                                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                                <span>All quotes adhere to international GAFTA & FOSFA trading rules with official SGS lab inspection certificates.</span>
                            </div>

                            <div className="pt-2 flex flex-col sm:flex-row gap-3">
                                <button
                                    type="submit"
                                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#004d51] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00383b] transition-all"
                                >
                                    <Send className="h-4 w-4" /> Submit via Email RFQ
                                </button>
                                <button
                                    type="button"
                                    onClick={handleWhatsAppSubmit}
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition-all"
                                >
                                    <MessageCircle className="h-4 w-4" /> Fast WhatsApp RFQ
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
