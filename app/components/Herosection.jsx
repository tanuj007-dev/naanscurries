
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import heroBg from "./assets/d24d00acea2544bb511586a4c76f73b148012df9 (1).png";
import logo from "./assets/image 1.png";

const navLinks = [
  "Home",
  "About Us",
  "Menu",
  "Book A Table",
  "Blog",
  "Order",
];

const socials = [
  {
    label: "Instagram",
    href: "#",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "Facebook",
    href: "#",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "X (Twitter)",
    href: "#",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
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

const headlineContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const headlineWord = {
  hidden: { opacity: 0, y: 40, skewY: 3 },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const socialVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, delay: 0.7 + i * 0.1, ease: "easeOut" },
  }),
};

const sidebarLineVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "64px",
    opacity: 1,
    transition: { duration: 0.8, delay: 1.0, ease: "easeInOut" },
  },
};

const descVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.85, ease: "easeOut" },
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

export default function Herosection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative min-h-[85vh] md:min-h-screen w-full overflow-hidden  ">
      {/* ── Background image (LCP priority) ─────────────────────────────── */}
      <div className="absolute inset-0">
        <Image
          src={heroBg}
          alt="Naans & Curries restaurant dining"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={85}
        />
        {/* Dark warm overlay: Darker on desktop for better text contrast */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/55" aria-hidden />
      </div>

      {/* ── Main content wrapper ─────────────────────────────────────────── */}
      <div className="relative z-10 flex min-h-[85vh] md:min-h-screen flex-col">

        {/* ── HEADER ──────────────────────────────────────────────────────── */}
        <motion.header
          className="w-full shrink-0 bg-transparent"
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

        {/* ── HERO HEADLINE ────────────────────────────────────────────────── */}
        <div className="flex flex-1 flex-col items-center justify-center px-4 py-2 text-center sm:py-12">
          <motion.div
            className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-0 sm:gap-2"
            initial="hidden"
            animate="visible"
            variants={headlineContainer}
          >
            {/* Top row: "FLAVORS" */}
            <motion.h1
              className="text-[36px] font-normal uppercase ml-0 md:ml-12 leading-none text-[#FFF7ED] drop-shadow-sm
                         sm:text-[60px] md:text-[85px] lg:text-[115px]"
              variants={headlineWord}
              style={{
                fontFamily: "var(--font-ramillas)",
                willChange: "transform, opacity"
              }}
            >
              Flavors
            </motion.h1>

            {/* Bottom row: [Best Indian Restaurant] [THAT STAY] [In Costa Rica] */}
            <div className="flex flex-col items-center justify-center gap-1 mr-0 md:mr-18 sm:gap-2 md:flex-row md:items-center md:gap-4 lg:gap-6">

              {/* Left wing */}
              <motion.p
                className="hidden font-medium uppercase tracking-[0.25em] text-[#FFF7ED] md:block md:text-[13px] lg:text-[15px] lg:tracking-[0.3em]"
                variants={headlineWord}
                style={{ fontFamily: "var(--font-T)", willChange: "transform, opacity" }}
              >
                Best Indian Restaurant
              </motion.p>

              {/* Center giant text */}
              <motion.h1
                className="text-[36px] font-normal uppercase leading-none text-[#FFF7ED] drop-shadow-sm
                           sm:text-[60px] md:text-[85px] lg:text-[115px]"
                variants={headlineWord}
                style={{
                  fontFamily: "var(--font-ramillas)",
                  willChange: "transform, opacity"
                }}
              >
                That Stay
              </motion.h1>

              {/* Right wing */}
              <motion.p
                className="hidden font-medium uppercase tracking-[0.25em] text-[#FFF7ED] md:block md:text-[13px] lg:text-[15px] lg:tracking-[0.3em]"
                variants={headlineWord}
                style={{ fontFamily: "var(--font-T)", willChange: "transform, opacity" }}
              >
                In Costa Rica
              </motion.p>
            </div>

            {/* Mobile stacked fallback (hidden on md+) for the side texts - slightly larger */}
            <motion.div
              className="mt-1 flex flex-col items-center gap-0.5 md:hidden"
              variants={headlineWord}
              style={{ willChange: "transform, opacity" }}
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#FFF7ED]/85" style={{ fontFamily: "var(--font-T)" }}>
                Best Indian Restaurant
              </p>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#FFF7ED]/85" style={{ fontFamily: "var(--font-T)" }}>
                In Costa Rica
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* ── BOTTOM SECTION ───────────────────────────────────────────────── */}

        {/* Mobile bottom bar (hidden on md+) */}
        <div className="md:hidden flex flex-col items-center gap-4 px-5 pb-6 pt-0">
          {/* Social icons – horizontal row - larger for mobile */}
          <motion.div
            className="flex items-center gap-5"
            initial="hidden"
            animate="visible"
          >
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="rounded-full border border-white/50 p-2 text-white/90 transition-all duration-200 hover:border-white hover:text-white"
                aria-label={social.label}
                custom={i}
                variants={socialVariants}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            className="text-center text-[13px] leading-relaxed text-white/90 max-w-sm"
            initial="hidden"
            animate="visible"
            variants={descVariants}
            style={{ fontFamily: "var(--font-futura)" }}
          >
            At Naans Curries, every dish is a tribute to tradition and every
            moment is crafted for today. We bring together the warmth of Indian
            hospitality, the richness of timeless flavors, and the pace of
            modern life.
          </motion.p>
        </div>

        {/* Desktop: Sidebar (Left) & Description (Right) */}

        {/* Social Sidebar: Left (Vertical) */}
        <div className="hidden md:flex absolute bottom-0 left-10 lg:left-14 flex-col items-center gap-5 pb-10 lg:pb-12">
          <div className="flex flex-col gap-5">
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="group relative flex items-center justify-center p-1 text-white/60 transition-colors duration-200 hover:text-white"
                aria-label={social.label}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={socialVariants}
              >
                <svg className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
              </motion.a>
            ))}
          </div>

          {/* Vertical white line */}
          <motion.div
            className="w-px bg-white/30"
            initial="hidden"
            animate="visible"
            variants={sidebarLineVariants}
            style={{ transformOrigin: "top" }}
          />
        </div>

        {/* Description: Right */}
        <motion.div
          className="hidden md:block absolute bottom-12 right-10 max-w-xs text-right lg:right-14 lg:max-w-[18rem]"
          initial="hidden"
          animate="visible"
          variants={descVariants}
        >
          <p
            className="text-[13px] leading-relaxed text-white/90 lg:text-[14px]"
            style={{ fontFamily: "var(--font-futura)" }}
          >
            At Naans Curries, every dish is a tribute to tradition and every
            moment is crafted for today. We bring together the warmth of Indian
            hospitality, the richness of timeless flavors, and the pace of
            modern life.
          </p>
        </motion.div>

      </div>

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
    </section>
  );
}
