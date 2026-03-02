import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

export const useTranslations = (namespace) => {
    const { t } = useTranslation();
    const translate = (key) => {
        const fullKey = namespace ? `${namespace}.${key}` : key;
        return t(fullKey);
    };
    translate.raw = (key) => {
        const fullKey = namespace ? `${namespace}.${key}` : key;
        return t(fullKey, { returnObjects: true });
    };
    return translate;
};

export const useLocale = () => {
    const { locale } = useParams();
    return locale || 'en';
};

export const NextIntlClientProvider = ({ children, locale, messages }) => {
    // Standard React-Router-i18next provider-less approach or bridge
    return <>{children}</>;
};
