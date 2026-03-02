import React from 'react';
import { Link as RouterLink, useNavigate, useLocation, useParams } from 'react-router-dom';

export const Link = ({ href, locale, ...props }) => {
    const params = useParams();
    const currentLocale = locale || params.locale || 'en';

    // Convert absolute path to include locale if needed
    let to = href;
    if (to.startsWith('/') && !to.startsWith('/en') && !to.startsWith('/es')) {
        to = `/${currentLocale}${to === '/' ? '' : to}`;
    }

    return <RouterLink {...props} to={to} />;
};

export const useRouter = () => {
    const navigate = useNavigate();
    const params = useParams();
    const currentLocale = params.locale || 'en';

    return {
        push: (url, options) => {
            let to = url;
            const locale = options?.locale || currentLocale;
            if (to.startsWith('/') && !to.startsWith('/en') && !to.startsWith('/es')) {
                to = `/${locale}${to === '/' ? '' : to}`;
            }
            navigate(to);
        },
        replace: (url, options) => {
            let to = url;
            const locale = options?.locale || currentLocale;
            if (to.startsWith('/') && !to.startsWith('/en') && !to.startsWith('/es')) {
                to = `/${locale}${to === '/' ? '' : to}`;
            }
            navigate(to, { replace: true });
        },
        back: () => navigate(-1),
    };
};

export const usePathname = () => {
    const { pathname } = useLocation();
    // We want the pathname without the locale segment similarly to what Next.js does for scoped pathnames
    return pathname.replace(/^\/(en|es)/, '') || '/';
};
