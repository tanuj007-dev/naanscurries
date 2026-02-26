import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'es'];

export default getRequestConfig(async (params) => {
    // Collect the locale safely
    let locale = typeof params === 'string' ? params : (await params.requestLocale) || params.locale;

    // Final fallback
    if (!locale || typeof locale !== 'string') locale = 'en';
    if (!locales.includes(locale)) locale = 'en';

    console.log('DEBUG: Resolved locale:', locale);

    try {
        const messages = (await import(`../messages/${locale}.json`)).default;
        return {
            locale,
            messages
        };
    } catch (error) {
        console.error('DEBUG: Failed to load messages for', locale, error);
        return {
            locale: 'en',
            messages: (await import(`../messages/en.json`)).default
        };
    }
});

