import React, { useEffect } from 'react';
import { Outlet, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';

const Layout = () => {
    const { locale } = useParams();
    const { i18n } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (locale && (locale === 'en' || locale === 'es')) {
            i18n.changeLanguage(locale);
            document.documentElement.lang = locale;
        } else if (location.pathname === '/') {
            navigate('/en', { replace: true });
        }
    }, [locale, i18n, navigate, location.pathname]);

    // Scroll to top when route changes (e.g. footer link click)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="antialiased min-h-screen flex flex-col">
            <div className="absolute top-0 left-0 w-full z-50">
                <Navbar />
            </div>
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
