'use server';

import { getTranslations } from 'next-intl/server';

interface ContactState {
    success?: boolean;
    error?: string;
    message?: string;
}

export async function submitContactForm(prevState: ContactState, formData: FormData): Promise<ContactState> {
    const t = await getTranslations('Contact');

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
        return {
            success: false,
            error: t('form.error_missing_fields')
        };
    }

    const apiUrl = process.env.VAVA_EMAIL_API_URL;

    if (!apiUrl) {
        console.error('VAVA_EMAIL_API_URL is not defined');
        return {
            success: false,
            error: 'System configuration error. Please contact support.'
        };
    }

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                heading: `New Contact from ${name}`,
                replyTo: email,
                emailBody: message,
                origin: 'sopreden.com', // Or dynamically get if needed, but hardcoded is safer for server action
                category: 'general'
            }),
        });

        const result = await response.json();

        if (!response.ok || !result.success) {
            console.error('Vava Email API Error:', result);
            return {
                success: false,
                error: t('form.error_sending_failed')
            };
        }

        return {
            success: true,
            message: t('form.success_message')
        };

    } catch (error) {
        console.error('Network error submitting contact form:', error);
        return {
            success: false,
            error: t('form.error_generic')
        };
    }
}
