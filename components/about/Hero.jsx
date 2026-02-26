"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import AnimateOnScroll from "@/app/components/AnimateOnScroll";
import heroBg from "@/app/components/assets/6236ff282f52f61a6b0b4eee_dinesh-ramaswamy--b7ZwWYUUEA-unsplash.avif";

export default function Hero() {
  const t = useTranslations("About");

  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-6 md:px-12 lg:px-24 overflow-hidden min-h-[6  0vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="About Us Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for consistent premium look and text contrast */}
        <div className="absolute inset-0 bg-[#111111]/60 " />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
        {/* Breadcrumb row */}
        <AnimateOnScroll variant="fadeIn" delay={0.2}>
          <div className="flex items-center justify-center gap-3 mb-8 md:mb-12">
            <Link
              href="/"
              className="text-[12px] md:text-[14px] font-medium uppercase tracking-[0.2em] text-[#FFF7ED]/70 hover:text-[#FFF7ED] transition-colors"
              style={{ fontFamily: "var(--font-futura)" }}
            >
              {t("home")}
            </Link>
            <span className="text-[#FFF7ED]/30">—</span>
            <span
              className="text-[12px] md:text-[14px] font-bold uppercase tracking-[0.2em] text-[#FFF7ED]"
              style={{ fontFamily: "var(--font-futura)" }}
            >
              {t("title")}
            </span>
          </div>
        </AnimateOnScroll>

        {/* Center-aligned Heading Design - Single Line */}
        <div className="flex flex-col items-center justify-center mt-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
            className="flex items-center justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16"
          >
            {/* Left Tagline */}
            <span className="hidden md:block text-[11px] lg:text-[13px] tracking-[0.4em] uppercase text-[#FFF7ED] whitespace-nowrap mb-2" style={{ fontFamily: "var(--font-ramillas)" }}>
              Since 1996
            </span>

            {/* Main Single Line Heading */}
            <h1
              className="text-[50px] sm:text-[70px] md:text-[90px] lg:text-[120px] leading-tight text-[#FFF7ED] font-normal uppercase whitespace-nowrap"
              style={{ fontFamily: "var(--font-ramillas)" }}
            >
              Our Story
            </h1>

            {/* Right Tagline */}
            <span className="hidden md:block text-[11px] lg:text-[13px] tracking-[0.4em] uppercase text-[#FFF7ED] whitespace-nowrap mb-2" style={{ fontFamily: "var(--font-ramillas)" }}>
              In Every Bite
            </span>
          </motion.div>

          {/* Mobile Taglines */}
          <div className="flex md:hidden items-center gap-4 mt-4 opacity-60">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#FFF7ED]" style={{ fontFamily: "var(--font-ramillas)" }}>
              Since 1996
            </span>
            <span className="h-px w-4 bg-[#FFF7ED]/30" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#FFF7ED]" style={{ fontFamily: "var(--font-ramillas)" }}>
              In Every Bite
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
