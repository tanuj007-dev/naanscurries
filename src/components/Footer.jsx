"use client";

import { Link } from "@/src/compat/navigation";
import Image from "@/src/compat/next-image";
import { memo } from "react";
import { useTranslations } from "@/src/compat/next-intl";
import { LiaTripadvisor } from "react-icons/lia";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaArrowRight } from "react-icons/fa";

import logo from "./assets/image 1.png";

const footerNavConfig = [
  {
    titleKey: "quickLinks",
    links: [
      { href: "/", labelKey: "home" },
      { href: "/menu", labelKey: "menu" },
      { href: "/reservation", labelKey: "bookATable" },
      { href: "/blog", labelKey: "blog" },
      { href: "/about", labelKey: "about" },
      { href: "/contact", labelKey: "contact" },
    ]
  }
];

const socialLinks = [
  { href: "https://www.facebook.com/NaansCurries", ariaLabel: "Facebook", labelKey: "facebook", icon: FaFacebookF },
  { href: "https://www.instagram.com/naanslindora", ariaLabel: "Instagram", labelKey: "instagram", icon: FaInstagram },
  { href: "https://www.tripadvisor.com", ariaLabel: "TripAdvisor", labelKey: "tripadvisor", icon: LiaTripadvisor },
  { href: "https://wa.me/50622035555", ariaLabel: "WhatsApp", labelKey: "whatsapp", icon: FaWhatsapp },
];

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="relative z-20  w-full bg-[#0a0a0a] pt-32 pb-12 overflow-x-hidden overflow-y-visible text-[#e5e5e5]">
      {/* ─── Background Jaali Pattern ────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0 L45 35 L80 40 L45 45 L40 80 L35 45 L0 40 L35 35 Z' fill='%23DCB464'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}
      />

      {/* ─── Top Ornamental Border (Arch) – overlaps content above ────────────── */}
      <div className="absolute -top-4 left-0 w-full h-44 z-10 overflow-visible pointer-events-none">
        <svg viewBox="0 -45 1440 165" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_4px_24px_rgba(0,0,0,0.15)]" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="arch-gold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B8954A" />
              <stop offset="50%" stopColor="#E8C97A" />
              <stop offset="100%" stopColor="#B8954A" />
            </linearGradient>
            <linearGradient id="arch-fill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFBF7" />
              <stop offset="100%" stopColor="#FCF9F3" />
            </linearGradient>
            <filter id="arch-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Soft arch fill */}
          <path d="M0 120C240 120 480 0 720 0C960 0 1200 120 1440 120V0H0V120Z" fill="url(#arch-fill)" className="hidden md:block" />
          {/* Premium gold arch stroke with glow */}
          <path d="M0 120C240 120 480 20 720 20C960 20 1200 120 1440 120" stroke="url(#arch-gold)" strokeWidth="3" fill="none" strokeLinecap="round" filter="url(#arch-glow)" />
          <path d="M0 120C240 120 480 20 720 20C960 20 1200 120 1440 120" stroke="url(#arch-gold)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.85" />
          {/* Center medallion */}
          <g filter="url(#arch-glow)">
            <circle cx="720" cy="20" r="34" fill="#ffffff" stroke="url(#arch-gold)" strokeWidth="3" />
            <circle cx="720" cy="20" r="28" fill="none" stroke="url(#arch-gold)" strokeWidth="1.5" opacity="0.5" />
            <circle cx="720" cy="20" r="20" fill="none" stroke="url(#arch-gold)" strokeWidth="0.75" opacity="0.25" />
            <path d="M706 20 L720 4 L734 20 L720 36 Z" fill="url(#arch-gold)" />
            <circle r="4" fill="#E8C97A" opacity="0.6" cx="720" cy="14" />
          </g>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14 relative z-20">

        {/* ─── Hero Logo Center ────────────────────────────────────────────────── */}
        <div className="flex flex-col items-center mb-20">
          <div className="relative w-56 h-auto md:w-64 transition-transform duration-500 hover:scale-105">
            <Image
              src={logo}
              alt="Naans & Curries"
              width={300}
              height={100}
              className="w-full h-auto object-contain brightness-110"
            />
            
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {/* ─── Column 1: Quick Links ────────────────────────────────────────── */}
          {footerNavConfig.map((group) => (
            <div key={group.titleKey} className="flex flex-col">
              <h3 className="text-[#DCB464] text-lg uppercase tracking-widest font-normal mb-1 flex flex-col" style={{ fontFamily: "var(--font-ramillas)" }}>
                {t(group.titleKey)}
                <span className="w-12 h-px bg-[#DCB464]/40 mt-2"></span>
              </h3>
              <nav className="flex flex-col gap-3 mt-6">
                {group.links.map((link) => (
                  <Link
                    key={link.labelKey}
                    href={link.href}
                    className="text-sm text-[#e5e5e5]/70 hover:text-[#DCB464] transition-all duration-300 transform hover:translate-x-1"
                    style={{ fontFamily: "var(--font-futura)" }}
                  >
                    {t(link.labelKey)}
                  </Link>
                ))}
              </nav>
            </div>
          ))}

          {/* ─── Column 2: Social Media Links ──────────────────────────────────── */}
          <div className="flex flex-col">
            <h3 className="text-[#DCB464] text-lg uppercase tracking-widest font-normal mb-1 flex flex-col" style={{ fontFamily: "var(--font-ramillas)" }}>
              {t("followUs")}
              <span className="w-12 h-px bg-[#DCB464]/40 mt-2"></span>
            </h3>
            <div className="mt-6 flex flex-col gap-3">
              {socialLinks.map(({ href, ariaLabel, labelKey, icon: Icon }) => (
                <SocialLinkWithLabel key={ariaLabel} href={href} ariaLabel={ariaLabel} label={t(labelKey)}>
                  <Icon className="w-4 h-4 shrink-0" />
                </SocialLinkWithLabel>
              ))}
            </div>
          </div>

          {/* ─── Column 3: Contact Details ────────────────────────────────────── */}
          <div className="flex flex-col">
            <h3 className="text-[#DCB464] text-lg uppercase tracking-widest font-normal mb-1 flex flex-col" style={{ fontFamily: "var(--font-ramillas)" }}>
              {t("contactUs")}
              <span className="w-12 h-px bg-[#DCB464]/40 mt-2"></span>
            </h3>
            <div className="mt-6 flex flex-col gap-4">
              <a href="tel:+50622035555" className="group flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-[#DCB464]/60">Call Us</span>
                <span className="text-sm group-hover:text-[#DCB464] transition-colors">+506 2203 5555</span>
              </a>
              <a href="mailto:Info@Naans.cr" className="group flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-[#DCB464]/60">Email</span>
                <span className="text-sm group-hover:text-[#DCB464] transition-colors">Info@Naans.cr</span>
              </a>
              
            </div>
          </div>

          {/* ─── Column 4: Newsletter ─────────────────────────────────────────── */}
          <div className="flex flex-col">
            <h3 className="text-[#DCB464] text-lg uppercase tracking-widest font-normal mb-1 flex flex-col" style={{ fontFamily: "var(--font-ramillas)" }}>
              {t("newsletterTitle") || "Join Our Journey"}
              <span className="w-12 h-px bg-[#DCB464]/40 mt-2"></span>
            </h3>
            <p className="mt-6 text-sm text-[#e5e5e5]/60 mb-6 leading-relaxed" style={{ fontFamily: "var(--font-futura)" }}>
              Subscribe to stay updated on our seasonal menus and ethnic festivities.
            </p>
            <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-[#DCB464] transition-colors pr-12"
              />
              <button className="absolute right-1 w-10 h-10 bg-[#DCB464] text-white rounded-full flex items-center justify-center hover:bg-[#c4a055] transition-all hover:scale-105 group">
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
          </div>

        </div>

        {/* ─── Bottom Copyright ──────────────────────────────────────────────── */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-widest text-[#e5e5e5]/40" style={{ fontFamily: "var(--font-futura)" }}>
          <div>Â© 2026 Naans & Curries. {t("rights")}.</div>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-[#DCB464] transition-colors text-[10px]">Privacy Policy</Link>
            <Link href="/" className="hover:text-[#DCB464] transition-colors text-[10px]">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

function SocialLink({ href, ariaLabel, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-[#e5e5e5]/60 border border-white/10 transition-all duration-300 hover:bg-[#DCB464] hover:text-[#0a0a0a] hover:border-[#DCB464] hover:scale-110"
    >
      {children}
    </a>
  );
}

function SocialLinkWithLabel({ href, ariaLabel, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="group flex items-center gap-3 rounded-full  pr-4 pl-2  text-[#e5e5e5]/70   transition-all duration-300 hover:bg-[#DCB464] hover:text-[#0a0a0a] hover:border-[#DCB464] w-fit"
      style={{ fontFamily: "var(--font-futura)" }}
    >
      <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-[#e5e5e5]/60 border border-white/10 shrink-0 transition-colors duration-300 group-hover:bg-[#DCB464] group-hover:text-[#0a0a0a] group-hover:border-[#DCB464]">
        {children}
      </span>
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
}