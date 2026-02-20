"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter, usePathname } from "@/navigation";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./assets/image 1.png";

// Overlay menu items
const getNavLinks = (t) => [
    { label: t('Navbar.home'), href: "/" },
    { label: t('Navbar.menu'), href: "/#menu" },
    { label: t('Navbar.blog'), href: "/#blog" },
    { label: t('Navbar.order'), href: "" },
    { label: t('Navbar.contact'), href: "/#contact" },
    { label: t('Navbar.about'), href: "" },
];

const getOverlayNavLinks = (t) => [
    { label: t('Navbar.home'), href: "/" },
    { label: t('Navbar.menu'), href: "/#menu" },
   { label: t('Navbar.about'), href: "" },
    { label: t('Navbar.reservation'), href: "/reservation" },
    { label: t('Navbar.orderOnline'), href: "#", hasDropdown: true },
    { label: t('Navbar.contact'), href: "/#contact" },
    { label: t('Navbar.blog'), href: "/#blog" },
];

const orderLocations = [
    { label: "SAN JOSE", href: "https://www.restaurantlogin.com/ordering/restaurant/menu?company_uid=2677c42b-0906-408c-8105-47b73b7407a1&restaurant_uid=722836f5-2112-46d8-bac1-8c4867524b3d&facebook=true" },
    { label: "COCO", href: "https://www.restaurantlogin.com/ordering/restaurant/menu?company_uid=2677c42b-0906-408c-8105-47b73b7407a1&restaurant_uid=d04c51ba-d3fc-4fe7-9bd4-fbd672dee922&facebook=true" },
    { label: "TAMARINDO", href: "https://www.restaurantlogin.com/ordering/restaurant/menu?company_uid=2677c42b-0906-408c-8105-47b73b7407a1&restaurant_uid=d2c5c08b-37f0-4532-ab6b-08c50f0ca2c5&facebook=true" },
    { label: "NUNCIATURA", href: "https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=532cc2dd-bd17-4e21-ad6c-970afadbc203&dine_in=true" },
    { label: "JACO", href: "https://www.fooodmenu.com/ordering/restaurant/menu?restaurant_uid=d968ec76-5fbf-4ccc-b6e7-fa155133a9f3" },
];

// ─── Animation variants ───────────────────────────────────────────────────────
const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const logoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] },
    },
};

// Menu overlay: fade in/out (ease-out)
const menuOverlayVariants = {
    closed: { opacity: 0, transition: { duration: 0.25, ease: "easeOut" } },
    open: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

const menuItemVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.1 + i * 0.08, duration: 0.4, ease: "easeOut" },
    }),
};

// Strip leading locale segment so router.replace never gets /en/... or /es/... (avoids /en/es/reservation)
function getPathWithoutLocale(pathname) {
    if (!pathname || typeof pathname !== 'string') return '/';
    const without = pathname.replace(/^\/(en|es)(\/|$)/, (_, __, after) => after || '/').trim() || '/';
    return without.startsWith('/') ? without : `/${without}`;
}

export default function Navbar() {
    const t = useTranslations();
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const pathForLocaleSwitch = getPathWithoutLocale(pathname);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [orderDropdownOpen, setOrderDropdownOpen] = useState(false);
    const [mobileOrderOpen, setMobileOrderOpen] = useState(false);
    const [langDropdownOpen, setLangDropdownOpen] = useState(false);
    const [mobileLangOpen, setMobileLangOpen] = useState(false);

    const timeoutRef = useRef(null);
    const langTimeoutRef = useRef(null);

    const navLinks = getNavLinks(t);
    const overlayNavLinks = getOverlayNavLinks(t);
    const currentLang = locale.toUpperCase();

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setOrderDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setOrderDropdownOpen(false);
        }, 150);
    };

    const handleLangMouseEnter = () => {
        if (langTimeoutRef.current) clearTimeout(langTimeoutRef.current);
        setLangDropdownOpen(true);
    };

    const handleLangMouseLeave = () => {
        langTimeoutRef.current = setTimeout(() => {
            setLangDropdownOpen(false);
        }, 150);
    };

    return (
        <>
            <motion.header
                className="w-full shrink-0 bg-transparent relative z-50"
                initial="hidden"
                animate="visible"
                variants={headerVariants}
            >
                {/* Mobile header: logo left, hamburger right */}
                <div className="flex items-center justify-between px-4 pt-4 pb-3 md:hidden">
                    <motion.div initial="hidden" animate="visible" variants={logoVariants}>
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="Naans & Curries - An Ethnic Indian Restaurant"
                                width={180}
                                height={50}
                                className="h-auto w-36 object-contain mix-blend-luminosity"
                                priority
                            />
                        </Link>
                    </motion.div>
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-black/70 transition-colors duration-200 hover:bg-black/85"
                        aria-label="Open menu"
                    >
                        <span className="flex flex-col gap-1.5">
                            <span className="h-0.5 w-5 bg-white" />
                            <span className="h-0.5 w-5 bg-white" />
                            <span className="h-0.5 w-5 bg-white" />
                        </span>
                    </button>
                </div>

                {/* Desktop header: grid with borders */}
                <div className="hidden md:grid w-full bg-transparent grid-cols-[1fr_auto_1fr] items-end gap-4 px-10 lg:px-14">
                    {/* Left nav */}
                    <nav className="flex items-center justify-start gap-6 border-b border-white/20 pb-4 lg:gap-8">
                        {navLinks.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`group relative text-[11px] font-medium uppercase tracking-widest transition-colors duration-200 lg:text-[12px] ${isActive
                                        ? "text-[#E89D42]"
                                        : "text-white/95 hover:text-white"
                                        }`}
                                    style={{ fontFamily: "var(--font-futura)" }}
                                >
                                    {item.label}
                                    <span
                                        className={`absolute -bottom-0.5 left-0 h-px transition-all duration-300 ${isActive
                                            ? "w-full bg-[#E89D42]"
                                            : "w-0 bg-white/80 group-hover:w-full"
                                            }`}
                                    />
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Center logo */}
                    <motion.div
                        className="flex flex-col items-center justify-center pb-0 pt-2"
                        initial="hidden"
                        animate="visible"
                        variants={logoVariants}
                    >
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="Naans & Curries - An Ethnic Indian Restaurant"
                                width={260}
                                height={72}
                                className="h-auto w-56 object-contain mix-blend-luminosity lg:w-64"
                                priority
                            />
                        </Link>
                    </motion.div>

                    {/* Right: Reservation link + Order Online + Language + hamburger */}
                    <div className="flex items-center justify-end gap-6 border-b border-white/20 pb-4 lg:gap-8">
                        <Link
                            href="/reservation"
                            className={`group relative text-[11px] font-semibold uppercase tracking-widest transition-colors duration-200 lg:text-[12px] ${pathname === "/reservation"
                                ? "text-[#E89D42]"
                                : "text-white hover:opacity-80"
                                }`}
                            style={{ fontFamily: "var(--font-futura)" }}
                        >
                            {t('Navbar.reservation')}
                            <span
                                className={`absolute -bottom-0.5 left-0 h-px transition-all duration-300 ${pathname === "/reservation"
                                    ? "w-full bg-[#E89D42]"
                                    : "w-0 bg-white/70 group-hover:w-full"
                                    }`}
                            />
                        </Link>

                        <span className="h-4 w-px bg-white/30" />

                        <div
                            className="relative"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button
                                className="text-[11px] font-semibold uppercase tracking-widest text-white transition-opacity duration-200 hover:opacity-80 lg:text-[12px] flex items-center gap-1 cursor-pointer"
                                style={{ fontFamily: "var(--font-futura)" }}
                            >
                                {t('Navbar.orderOnline')}
                                <svg className={`w-2.5 h-2.5 transition-transform duration-300 ${orderDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                    <path d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <AnimatePresence>
                                {orderDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        className="absolute right-0 top-full pt-4 min-w-[160px]"
                                    >
                                        <div className="bg-black/40 backdrop-blur-md border border-white/10 p-2 shadow-2xl">
                                            {orderLocations.map((loc) => (
                                                <Link
                                                    key={loc.label}
                                                    href={loc.href}
                                                    className="block px-4 py-2.5 text-[10px] font-bold tracking-[0.2em] text-white hover:text-[#E89D42] transition-colors duration-200 border-b border-white/5 last:border-0"
                                                    style={{ fontFamily: "var(--font-futura)" }}
                                                >
                                                    {loc.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <span className="h-4 w-px bg-white/30" />

                        {/* Language Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={handleLangMouseEnter}
                            onMouseLeave={handleLangMouseLeave}
                        >
                            <button
                                className="text-[11px] font-semibold uppercase tracking-widest text-white transition-opacity duration-200 hover:opacity-80 lg:text-[12px] flex items-center gap-1 cursor-pointer"
                                style={{ fontFamily: "var(--font-futura)" }}
                            >
                                {currentLang}
                                <svg className={`w-2 h-2 transition-transform duration-300 ${langDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                    <path d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <AnimatePresence>
                                {langDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        className="absolute right-0 top-full pt-4 min-w-[100px]"
                                    >
                                        <div className="bg-black/40 backdrop-blur-md border border-white/10 p-2 shadow-2xl">
                                            <button
                                                onClick={() => { router.replace(pathForLocaleSwitch, { locale: 'en' }); setLangDropdownOpen(false); }}
                                                className="block w-full text-left px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-white hover:text-[#E89D42] transition-colors duration-200 border-b border-white/5"
                                                style={{ fontFamily: "var(--font-futura)" }}
                                            >
                                                ENGLISH
                                            </button>
                                            <button
                                                onClick={() => { router.replace(pathForLocaleSwitch, { locale: 'es' }); setLangDropdownOpen(false); }}
                                                className="block w-full text-left px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-white hover:text-[#E89D42] transition-colors duration-200"
                                                style={{ fontFamily: "var(--font-futura)" }}
                                            >
                                                SPANISH
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <button
                            type="button"
                            className="ml-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-white/20 bg-white/5 transition-colors duration-200 hover:bg-white/10"
                            aria-label="Open menu"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="flex flex-col gap-1.5 align-middle">
                                <span className="h-px w-4 bg-white" />
                                <span className="h-px w-4 bg-white" />
                                <span className="h-px w-4 bg-white" />
                            </span>
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* ── FULL-SCREEN MENU OVERLAY ── */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-100 flex flex-col bg-[#E4DBD1]"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuOverlayVariants}
                    >
                        {/* Logo top left */}
                        <div className="absolute left-6 top-6 md:left-10 md:top-10 z-10">
                            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block">
                                <Image
                                    src={logo}
                                    alt="Naans & Curries - An Ethnic Indian Restaurant"
                                    width={160}
                                    height={44}
                                    className="h-auto w-28 object-contain md:w-36"
                                />
                            </Link>
                        </div>

                        {/* CLOSE button */}
                        <div className="absolute right-6 top-6 md:right-10 md:top-10">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-xs font-medium uppercase tracking-[0.2em] text-[#624630] transition-opacity hover:opacity-70 md:text-sm"
                                style={{ fontFamily: "var(--font-ramillas)" }}
                                aria-label="Close menu"
                            >
                                CLOSE
                            </button>
                        </div>

                        {/* Centered menu links */}
                        <div className="flex flex-1 flex-col items-center justify-center px-6 py-20">
                            <nav className="flex flex-col items-center justify-center gap-4 md:gap-3">
                                {overlayNavLinks.map((item, i) => (
                                    <motion.div
                                        key={item.label}
                                        custom={i}
                                        initial="closed"
                                        animate="open"
                                        exit="closed"
                                        variants={menuItemVariants}
                                        className="w-full text-center"
                                    >
                                        {item.hasDropdown ? (
                                            <div className="flex flex-col items-center">
                                                <button
                                                    onClick={() => setMobileOrderOpen(!mobileOrderOpen)}
                                                    className="flex items-center gap-3 text-2xl font-normal uppercase tracking-[0.12em] leading-relaxed text-[#624630] transition-opacity hover:opacity-80 md:text-3xl cursor-pointer"
                                                    style={{ fontFamily: "var(--font-ramillas)" }}
                                                >
                                                    {item.label}
                                                    <svg className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 ${mobileOrderOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                        <path d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                                <AnimatePresence>
                                                    {mobileOrderOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="overflow-hidden flex flex-col items-center gap-2 mt-2"
                                                        >
                                                            {orderLocations.map((loc) => (
                                                                <Link
                                                                    key={loc.label}
                                                                    href={loc.href}
                                                                    className="text-sm font-medium tracking-[0.15em] text-[#624630]/70 hover:text-[#E89D42] transition-colors md:text-base"
                                                                    style={{ fontFamily: "var(--font-futura)" }}
                                                                    onClick={() => setMobileMenuOpen(false)}
                                                                >
                                                                    {loc.label}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className={`block text-2xl font-normal uppercase tracking-[0.12em] leading-relaxed transition-opacity hover:opacity-80 md:text-3xl ${pathname === item.href
                                                    ? "text-[#E89D42]"
                                                    : "text-[#624630]"
                                                    }`}
                                                style={{ fontFamily: "var(--font-ramillas)" }}
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        )}
                                    </motion.div>
                                ))}

                                {/* Mobile Language Selection */}
                                <motion.div
                                    custom={overlayNavLinks.length}
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    variants={menuItemVariants}
                                    className="w-full text-center mt-4"
                                >
                                    <div className="flex flex-col items-center">
                                        <button
                                            onClick={() => setMobileLangOpen(!mobileLangOpen)}
                                            className="flex items-center gap-3 text-2xl font-normal uppercase tracking-[0.12em] leading-relaxed text-[#624630] transition-opacity hover:opacity-80 md:text-3xl cursor-pointer"
                                            style={{ fontFamily: "var(--font-ramillas)" }}
                                        >
                                            LANGUAGE ({currentLang})
                                            <svg className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 ${mobileLangOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                <path d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        <AnimatePresence>
                                            {mobileLangOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden flex flex-col items-center gap-2 mt-2"
                                                >
                                                    <button
                                                        onClick={() => { router.replace(pathForLocaleSwitch, { locale: 'en' }); setMobileLangOpen(false); setMobileMenuOpen(false); }}
                                                        className="text-sm font-medium tracking-[0.15em] text-[#624630]/70 hover:text-[#E89D42] transition-colors md:text-base"
                                                        style={{ fontFamily: "var(--font-futura)" }}
                                                    >
                                                        ENGLISH
                                                    </button>
                                                    <button
                                                        onClick={() => { router.replace(pathForLocaleSwitch, { locale: 'es' }); setMobileLangOpen(false); setMobileMenuOpen(false); }}
                                                        className="text-sm font-medium tracking-[0.15em] text-[#624630]/70 hover:text-[#E89D42] transition-colors md:text-base"
                                                        style={{ fontFamily: "var(--font-futura)" }}
                                                    >
                                                        SPANISH
                                                    </button>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
