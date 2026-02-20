"use client";

import { Link } from "@/navigation";
import Image from "next/image";
import { memo } from "react";
import { useTranslations } from "next-intl";
import AnimateOnScroll from "./AnimateOnScroll";

import logo from "./assets/image 1.png";

const footerNavConfig = [
  { href: "/", labelKey: "home" },
  { href: "#menu", labelKey: "menu" },
  { href: "/reservation", labelKey: "bookATable" },
  { href: "#blog", labelKey: "blog" },
  { href: "#order", labelKey: "order" },
];

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="w-full bg-[#262626] px-6 py-12 md:px-10 md:py-16 lg:px-14 lg:py-20 text-[#e5e5e5]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr]">

          {/* ── Left Column: Logo & Socials ──────────────────────────────── */}
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col items-start">
              {/* Logo Area */}
              <div className="relative w-48 h-auto mb-2 md:w-56">
                <Image
                  src={logo}
                  alt="Naans & Curries - An Ethnic Indian Restaurant"
                  width={250}
                  height={80}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Social Icons */}
              <div className="mt-8 flex gap-5">
                <SocialLink href="" ariaLabel="Facebook">
                  <FacebookIcon />
                </SocialLink>
                <SocialLink href="" ariaLabel="TripAdvisor">
                  <TripAdvisorIcon />
                </SocialLink>
                <SocialLink href="" ariaLabel="Instagram">
                  <InstagramIcon />
                </SocialLink>
              </div>
            </div>

            {/* Copyright (Desktop Position) */}
            <div className="hidden mt-16 text-xs text-[#e5e5e5]/60 md:block" style={{ fontFamily: "var(--font-futura)" }}>
              © Naans & Curries 2026. {t("rights")}.
            </div>
          </div>

          {/* ── Middle Column: Navigation ────────────────────────────────── */}
          <div className="flex flex-col items-start pt-2 md:pt-4">
            <nav className="flex flex-col gap-4">
              {footerNavConfig.map((item) => (
                <Link
                  key={item.labelKey}
                  href={item.href}
                  className="text-base text-[#e5e5e5] hover:text-[#DCB464] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-futura)" }}
                >
                  {t(item.labelKey)}
                </Link>
              ))}
            </nav>
          </div>

          {/* ── Right Column: Contact & WhatsApp Badge ────────────────────── */}
          <div className="flex flex-col items-start justify-between h-full pt-2 md:items-end md:pt-4">
            {/* Contact Info */}
            <div className="flex flex-col items-start gap-4 md:items-end">
              <a
                href="mailto:reserve@naans.cr"
                className="flex items-center gap-3 text-sm text-[#e5e5e5] hover:text-[#DCB464] transition-colors"
                style={{ fontFamily: "var(--font-futura)" }}
              >
                <span className="sr-only">Email</span>
                <EnvelopeIcon />
                reserve@naans.cr
              </a>
              <a
                href="tel:+50622035555"
                className="flex items-center gap-3 text-sm text-[#e5e5e5] hover:text-[#DCB464] transition-colors"
                style={{ fontFamily: "var(--font-futura)" }}
              >
                <span className="sr-only">Phone</span>
                <PhoneIcon />
                +50622035555
              </a>
            </div>

            {/* Circular Badge */}
            <div className="relative mt-12 md:mt-0">
              <div className="relative flex h-32 w-32 items-center justify-center">
                {/* Rotating Text */}
                <div className="absolute inset-0 animate-spin-slow">
                  <svg viewBox="0 0 100 100" className="h-full w-full">
                    <defs>
                      <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                    </defs>
                    <text className="fill-[#e5e5e5] text-[10px] font-medium uppercase tracking-[0.2em]" style={{ fontFamily: "var(--font-futura)" }}>
                      <textPath href="#circlePath">
                        Call us for booking a table quickly •
                      </textPath>
                    </text>
                  </svg>
                </div>

                {/* WhatsApp Icon */}
                <a
                  href="https://wa.me/50622035555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E89D42] text-white transition-transform hover:scale-110"
                >
                  <WhatsAppIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright (Mobile Position) */}
          <div className="mt-8 block text-xs text-[#e5e5e5]/60 md:hidden" style={{ fontFamily: "var(--font-futura)" }}>
            © Naans & Curries 2026. {t("rights")}.
          </div>

        </div>
      </div>
    </footer>
  );
}

// ─── Subcomponents ──────────────────────────────────────────────────────────

function SocialLink({ href, ariaLabel, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="text-[#e5e5e5] transition-transform hover:scale-110 hover:text-white"
    >
      {children}
    </a>
  );
}

const FacebookIcon = memo(() => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
));

const TripAdvisorIcon = memo(() => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-8c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3zm10 0c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3z" /><circle cx="10" cy="12" r="1" /><circle cx="20" cy="12" r="1" /></svg>
));

const InstagramIcon = memo(() => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
));

const EnvelopeIcon = memo(() => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
));

const PhoneIcon = memo(() => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
));

const WhatsAppIcon = memo(() => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
));
