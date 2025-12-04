'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useActionState } from 'react';
import { submitContactForm } from '@/actions/contact';

const initialState = {
    success: false,
    message: '',
    error: ''
};

export default function ContactPage() {
    const t = useTranslations('Contact');
    const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

    return (
        <div className="flex min-h-screen flex-col bg-white text-black">
            <Header />
            <main className="flex-1 py-12">
                <div className="container mx-auto px-4">
                    <div className="mb-12 text-center">
                        <h1 className="mb-4 text-4xl font-bold tracking-tighter">{t('title')}</h1>
                        <p className="text-lg text-gray-600">{t('subtitle')}</p>
                    </div>
                    <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
                        <div>
                            <h2 className="mb-6 text-2xl font-bold">Get in Touch</h2>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    <strong>Address:</strong><br />
                                    {t('info.address')}
                                </p>
                                <p>
                                    <strong>Email:</strong><br />
                                    <a href={`mailto:${t('info.email')}`} className="hover:underline">{t('info.email')}</a>
                                </p>
                                <p>
                                    <strong>Phone:</strong><br />
                                    <a href={`tel:${t('info.phone')}`} className="hover:underline">{t('info.phone')}</a>
                                </p>
                            </div>
                        </div>
                        <form action={formAction} className="space-y-4">
                            {state.success && (
                                <div className="rounded-md bg-green-50 p-4 text-sm text-green-700">
                                    {state.message}
                                </div>
                            )}
                            {state.error && (
                                <div className="rounded-md bg-red-50 p-4 text-sm text-red-700">
                                    {state.error}
                                </div>
                            )}
                            <div>
                                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                                    {t('form.name')}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full rounded-md border border-gray-300 p-3 outline-none focus:border-black"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                                    {t('form.email')}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full rounded-md border border-gray-300 p-3 outline-none focus:border-black"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                                    {t('form.message')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    className="w-full rounded-md border border-gray-300 p-3 outline-none focus:border-black"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isPending}
                                className="w-full rounded-md bg-black py-3 font-medium text-white transition-colors hover:bg-gray-800 disabled:opacity-50"
                            >
                                {isPending ? 'Sending...' : t('form.submit')}
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
