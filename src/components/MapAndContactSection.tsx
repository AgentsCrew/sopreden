'use client';

import { useActionState, useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { submitContactForm } from '@/actions/contact';

const initialState = {
    success: false,
    message: '',
    error: ''
};

export default function MapAndContactSection() {
    const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        product: 'Sunflower Kernels (Bakery & Confectionery)',
        quantity: '24 MT',
        message: ''
    });

    const handleWhatsAppDirect = () => {
        const text = `Hello Sopreden Trading Desk,%0A%0AI would like to submit an inquiry:%0A- Name: ${encodeURIComponent(formData.name || 'Trader')}%0A- Product: ${encodeURIComponent(formData.product)}%0A- Quantity: ${encodeURIComponent(formData.quantity)}%0A- Message: ${encodeURIComponent(formData.message || 'Please send current price sheet.')}`;
        window.open(`https://wa.me/359895411947?text=${text}`, '_blank');
    };

    return (
        <section id="contact" className="py-20 lg:py-28 bg-slate-50 relative">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-semibold text-emerald-800">
                        <Clock className="h-3.5 w-3.5" />
                        <span>Trading Desk Available Worldwide</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
                        Let’s Discuss Your Next Commodity Trade
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                        Due to the differing time zones of our global clients, we strive to be available almost around the clock. Contact us for CIF/FOB pricing, contract terms, or sample dispatch.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Left: Contact Channels & Map */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* Quick Contact Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                            <a
                                href="tel:+359895411947"
                                className="group p-5 rounded-2xl bg-white border border-gray-200/80 shadow-xs hover:shadow-md hover:border-[#004d51] transition-all flex items-center gap-4"
                            >
                                <div className="h-12 w-12 rounded-xl bg-teal-50 text-[#004d51] group-hover:bg-[#004d51] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold uppercase tracking-wider text-gray-400">Direct Sales Line</div>
                                    <div className="text-base font-bold text-gray-900 group-hover:text-[#004d51] transition-colors">
                                        +359 89 541 1947
                                    </div>
                                    <div className="text-xs text-gray-500">Mon - Fri: 08:00 - 17:00 (EET)</div>
                                </div>
                            </a>

                            <button
                                type="button"
                                onClick={handleWhatsAppDirect}
                                className="group w-full p-5 rounded-2xl bg-white border border-gray-200/80 shadow-xs hover:shadow-md hover:border-emerald-600 transition-all flex items-center gap-4 text-left cursor-pointer"
                            >
                                <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                                    <MessageCircle className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">Instant Messaging</div>
                                    <div className="text-base font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                                        WhatsApp Fast Connect
                                    </div>
                                    <div className="text-xs text-gray-500">Fast quotes & live lot photos</div>
                                </div>
                            </button>

                            <a
                                href="mailto:contact@sopreden.com"
                                className="group p-5 rounded-2xl bg-white border border-gray-200/80 shadow-xs hover:shadow-md hover:border-[#004d51] transition-all flex items-center gap-4"
                            >
                                <div className="h-12 w-12 rounded-xl bg-teal-50 text-[#004d51] group-hover:bg-[#004d51] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold uppercase tracking-wider text-gray-400">Email Inquiries</div>
                                    <div className="text-base font-bold text-gray-900 group-hover:text-[#004d51] transition-colors">
                                        contact@sopreden.com
                                    </div>
                                    <div className="text-xs text-gray-500">Official RFQs & tender bids</div>
                                </div>
                            </a>
                        </div>

                        {/* Interactive Google Map of Silistra HQ */}
                        <div className="rounded-2xl overflow-hidden border border-gray-200/80 shadow-md bg-white">
                            <div className="p-4 bg-white border-b border-gray-100 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-[#004d51]" />
                                    <span className="text-xs font-bold text-gray-900">
                                        Docho Mihaylov 1, Silistra, Bulgaria
                                    </span>
                                </div>
                                <a
                                    href="https://maps.google.com/?q=Docho+Mihaylov+1+Silistra+Bulgaria"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs font-semibold text-[#004d51] hover:underline"
                                >
                                    Open in Maps
                                </a>
                            </div>
                            <div className="relative h-64 w-full bg-gray-100">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2864.2078077572774!2d27.25774447594968!3d44.12033567108381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b021d513567b27%3A0xd757f1c31a1be89b!2z0YPQuy4g4oCe0JTQvtGH0L4g0JzQuNGF0LDQudC70L7QsuKAnCAxLCA3NTAwINCh0LjQu9C40YHRgtGA0LAg0KbQtdC90YLRitGALCDQodC40LvQuNGB0YLRgNCw!5e0!3m2!1sbg!2sbg!4v1686156401027!5m2!1sbg!2sbg"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Sopreden Trading Headquarters"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact & RFQ Form */}
                    <div className="lg:col-span-7">
                        <div className="rounded-3xl bg-white p-8 sm:p-10 border border-gray-200/80 shadow-xl">
                            <div className="space-y-2 mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                                    Send an Official Trade Inquiry
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Complete the form below to receive a formal contract offer and availability status.
                                </p>
                            </div>

                            {state?.success && (
                                <div className="mb-6 rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-sm text-emerald-800 flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-bold">Trade inquiry successfully delivered!</div>
                                        <div>{state.message || "A Sopreden commodities trader will contact you with availability and price indications."}</div>
                                    </div>
                                </div>
                            )}

                            {state?.error && (
                                <div className="mb-6 rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-800 flex items-start gap-3">
                                    <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-bold">Notice:</div>
                                        <div>{state.error}</div>
                                    </div>
                                </div>
                            )}

                            <form action={formAction} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                                            Your Name / Company Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                            placeholder="e.g. John Smith (Global Agri Ltd.)"
                                            className="w-full rounded-xl border border-gray-300 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none focus:bg-white focus:border-[#004d51] focus:ring-2 focus:ring-[#004d51]/20 transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                                            Business Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                            placeholder="name@company.com"
                                            className="w-full rounded-xl border border-gray-300 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none focus:bg-white focus:border-[#004d51] focus:ring-2 focus:ring-[#004d51]/20 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="product" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                                            Commodity Interest
                                        </label>
                                        <select
                                            id="product"
                                            value={formData.product}
                                            onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                                            className="w-full rounded-xl border border-gray-300 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none focus:bg-white focus:border-[#004d51] focus:ring-2 focus:ring-[#004d51]/20 transition-all"
                                        >
                                            <option value="Sunflower Kernels (Bakery & Confectionery)">Sunflower Kernels (Bakery & Confectionery)</option>
                                            <option value="Pumpkin Seeds ('Lady Nails')">Pumpkin Seeds ('Lady Nails')</option>
                                            <option value="Stripped Sunflower Seeds (Jumbo & XXL)">Stripped Sunflower Seeds (Jumbo & XXL)</option>
                                            <option value="Sunflower Chips (Birdfeed)">Sunflower Chips (Birdfeed)</option>
                                            <option value="Sunflower Crude Oil">Sunflower Crude Oil</option>
                                            <option value="Versatile Palm Oil Solutions">Versatile Palm Oil Solutions</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="quantity" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                                            Estimated Volume (MT)
                                        </label>
                                        <input
                                            type="text"
                                            id="quantity"
                                            placeholder="e.g. 24 MT, 100 MT, 500 MT"
                                            value={formData.quantity}
                                            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                                            className="w-full rounded-xl border border-gray-300 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none focus:bg-white focus:border-[#004d51] focus:ring-2 focus:ring-[#004d51]/20 transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                                        Trade Specifications & Delivery Port *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Please mention target destination port (CIF) or preferred border point (DAP), packaging requirements (25kg bags, Big Bags, Bulk), and target shipment period..."
                                        className="w-full rounded-xl border border-gray-300 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none focus:bg-white focus:border-[#004d51] focus:ring-2 focus:ring-[#004d51]/20 transition-all"
                                    ></textarea>
                                </div>

                                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                                    <button
                                        type="submit"
                                        disabled={isPending}
                                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#004d51] to-[#00666b] py-3.5 px-6 text-sm font-bold text-white shadow-md hover:from-[#00383b] hover:to-[#004d51] disabled:opacity-50 transition-all cursor-pointer"
                                    >
                                        <Send className="h-4 w-4" />
                                        <span>{isPending ? 'Transmitting RFQ...' : 'Submit Trade Inquiry'}</span>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={handleWhatsAppDirect}
                                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition-all cursor-pointer"
                                    >
                                        <MessageCircle className="h-4 w-4" />
                                        <span>Send via WhatsApp</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
