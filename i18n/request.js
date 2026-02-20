import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'es'];

export default getRequestConfig(async ({ requestLocale }) => {
    // requestLocale is the [locale] segment from the URL (may be a promise in next-intl v4)
    const requested = typeof requestLocale === 'string' ? requestLocale : await requestLocale;
    const currentLocale = requested || 'en';

    if (!locales.includes(currentLocale)) notFound();

    return {
        locale: currentLocale,
        messages: (await import(`../messages/${currentLocale}.json`)).default
    };
});

