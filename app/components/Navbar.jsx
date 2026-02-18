"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./assets/image 1.png";

const navLinks = [
    "Home",
    "About Us",
    "Menu",
    "Book A Table",
    "Blog",
    "Order",
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

// Menu overlay variants
const menuOverlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1, transition: { duration: 0.3 } },
};

const menuContainerVariants = {
    closed: {
        y: "-100%",
        transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
    open: {
        y: "0%",
        transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
};

const menuItemVariants = {
    closed: { opacity: 0, y: 30 },
    open: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.3 + i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
};

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                        <Image
                            src={logo}
                            alt="Naans & Curries - An Ethnic Indian Restaurant"
                            width={180}
                            height={50}
                            className="h-auto w-36 object-contain mix-blend-luminosity"
                            priority
                        />
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
                <div className="hidden md:grid w-full grid-cols-[1fr_auto_1fr] items-end gap-4 px-10 lg:px-14">
                    {/* Left nav */}
                    <nav className="flex items-center justify-start gap-6 border-b border-white/20 pb-4 lg:gap-8">
                        {navLinks.map((label) => (
                            <a
                                key={label}
                                href="#"
                                className="group relative text-[11px] font-medium uppercase tracking-widest text-white/95 transition-colors duration-200 hover:text-white lg:text-[12px]"
                                style={{ fontFamily: "var(--font-futura)" }}
                            >
                                {label}
                                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white/80 transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </nav>

                    {/* Center logo */}
                    <motion.div
                        className="flex flex-col items-center justify-center pb-0 pt-2"
                        initial="hidden"
                        animate="visible"
                        variants={logoVariants}
                    >
                        <Image
                            src={logo}
                            alt="Naans & Curries - An Ethnic Indian Restaurant"
                            width={260}
                            height={72}
                            className="h-auto w-56 object-contain mix-blend-luminosity lg:w-64"
                            priority
                        />
                    </motion.div>

                    {/* Right: links + hamburger */}
                    <div className="flex items-center justify-end gap-6 border-b border-white/20 pb-4 lg:gap-10">
                        <a
                            href="#reservation"
                            className="text-[11px] font-semibold uppercase tracking-widest text-white transition-opacity duration-200 hover:opacity-80 lg:text-[12px]"
                            style={{ fontFamily: "var(--font-futura)" }}
                        >
                            Reservation
                        </a>
                        <span className="h-4 w-px bg-white/30" />
                        <a
                            href="#order"
                            className="text-[11px] font-semibold uppercase tracking-widest text-white transition-opacity duration-200 hover:opacity-80 lg:text-[12px]"
                            style={{ fontFamily: "var(--font-futura)" }}
                        >
                            Order Online
                        </a>
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

            {/* ── MOBILE MENU OVERLAY ───────────────────────────────────────────── */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 flex flex-col bg-black/95 text-[#FFF7ED]"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuOverlayVariants}
                    >
                        {/* Close Button / Header */}
                        <div className="flex items-center justify-between px-6 pt-6 pb-4">
                            <div className="text-xl font-medium tracking-widest text-white/90" style={{ fontFamily: "var(--font-ramillas)" }}>
                                MENU
                            </div>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all hover:bg-white hover:text-black"
                                aria-label="Close menu"
                            >
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Menu Links */}
                        <motion.div
                            className="flex flex-1 flex-col justify-center px-10 gap-6"
                            variants={menuContainerVariants}
                        >
                            {navLinks.map((label, i) => (
                                <motion.a
                                    key={label}
                                    href="#"
                                    custom={i}
                                    variants={menuItemVariants}
                                    className="text-4xl font-normal uppercase tracking-wide text-[#FFF7ED] transition-colors hover:text-[#D4AF37]"
                                    style={{ fontFamily: "var(--font-ramillas)" }}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {label}
                                </motion.a>
                            ))}

                            <motion.div
                                custom={navLinks.length}
                                variants={menuItemVariants}
                                className="mt-8 flex flex-col gap-4 border-t border-white/20 pt-8"
                            >
                                <a href="#reservation" className="text-sm font-medium uppercase tracking-[0.2em] text-white/80" style={{ fontFamily: "var(--font-futura)" }}>
                                    Book A Table
                                </a>
                                <a href="#order" className="text-sm font-medium uppercase tracking-[0.2em] text-white/80" style={{ fontFamily: "var(--font-futura)" }}>
                                    Order Online
                                </a>
                            </motion.div>
                        </motion.div>

                        {/* Background Element Decor */}
                        <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/3 translate-y-1/3 rounded-full bg-[#D4AF37]/10 blur-[100px]" />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
