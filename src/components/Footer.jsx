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
    ]
  },
  {
    titleKey: "experience",
    links: [
      { href: "/menu", labelKey: "order" },
      { href: "/reservation", labelKey: "dining" },
      { href: "/blog", labelKey: "gallery" },
    ]
  }
];

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="relative w-full bg-[#0a0a0a] pt-24 pb-12 overflow-hidden text-[#e5e5e5]">
      {/* ─── Background Jaali Pattern ────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0 L45 35 L80 40 L45 45 L40 80 L35 45 L0 40 L35 35 Z' fill='%23DCB464'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}
      />

      {/* ─── Top Ornamental Border (Arch) ────────────────────────────────────── */}
      <div className="absolute top-0 left-0 w-full h-32 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full preserve-3d">
          <path d="M0 120C240 120 480 0 720 0C960 0 1200 120 1440 120V0H0V120Z" fill="#FCF9F3" className="hidden md:block" />
          <path d="M0 120C240 120 480 20 720 20C960 20 1200 120 1440 120" stroke="#DCB464" strokeWidth="2" fill="transparent" />
          {/* Ornamental Centerpiece */}
          <circle cx="720" cy="20" r="25" fill="#0a0a0a" stroke="#DCB464" strokeWidth="2" />
          <path d="M710 20 L720 10 L730 20 L720 30 Z" fill="#DCB464" />
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
            <div className="mt-2 text-center text-[10px] uppercase tracking-[0.5em] text-[#DCB464]/80 font-medium">
              Ethnic Indian Restaurant
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {/* ─── Column 1 & 2: Navigation Links ────────────────────────────────── */}
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
              <a href="mailto:reserve@naans.cr" className="group flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-[#DCB464]/60">Email</span>
                <span className="text-sm group-hover:text-[#DCB464] transition-colors">reserve@naans.cr</span>
              </a>
              <div className="flex gap-4 mt-2">
                <SocialLink href="https://www.facebook.com/NaansCurries" ariaLabel="Facebook">
                  <FaFacebookF className="w-4 h-4" />
                </SocialLink>
                <SocialLink href="https://www.instagram.com/naanslindora" ariaLabel="Instagram">
                  <FaInstagram className="w-4 h-4" />
                </SocialLink>
                <SocialLink href="https://www.tripadvisor.com" ariaLabel="TripAdvisor">
                  <LiaTripadvisor className="w-5 h-5" />
                </SocialLink>
                <SocialLink href="https://wa.me/50622035555" ariaLabel="WhatsApp">
                  <FaWhatsapp className="w-4 h-4" />
                </SocialLink>
              </div>
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
