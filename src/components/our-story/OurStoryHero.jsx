"use client";

import Image from "@/src/compat/next-image";
import { motion } from "framer-motion";
import { useTranslations } from "@/src/compat/next-intl";
import { Link } from "@/src/compat/navigation";
import AnimateOnScroll from "@/src/components/AnimateOnScroll";
import heroBg from "@/src/components/assets/6236ff282f52f61a6b0b4eee_dinesh-ramaswamy--b7ZwWYUUEA-unsplash.avif";

export default function OurStoryHero() {
  const t = useTranslations("OurStory");

  return (
    <section className="relative w-full pt-32 pb-16 md:pt-48 md:pb-24 px-6 md:px-12 lg:px-24 overflow-hidden min-h-[60vh] flex items-center">
      <div className="absolute inset-0 z-0 w-full">
        <Image
          src={heroBg}
          alt="Our Story"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#111111]/65" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
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
            <Link
              href="/about"
              className="text-[12px] md:text-[14px] font-medium uppercase tracking-[0.2em] text-[#FFF7ED]/80 hover:text-[#FFF7ED] transition-colors"
              style={{ fontFamily: "var(--font-futura)" }}
            >
              {t("aboutUs")}
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
          className="flex flex-col items-center"
        >
          <span className="text-[11px] lg:text-[13px] tracking-[0.4em] uppercase text-[#FFF7ED]/80 mb-4" style={{ fontFamily: "var(--font-ramillas)" }}>
            {t("subtitle")}
          </span>
          <h1
            className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px] leading-tight text-[#FFF7ED] font-normal"
            style={{ fontFamily: "var(--font-ramillas)" }}
          >
            {t("heading")}
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
