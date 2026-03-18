"use client";

import Image from "@/src/compat/next-image";
import { useTranslations } from "@/src/compat/next-intl";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/src/components/AnimateOnScroll";
import { Link } from "@/src/compat/navigation";

import img1 from "@/src/components/assets/665fc56eb1a11bee9137d307_Photo 2-p-800.jpg";
import img2 from "@/src/components/assets/665fc45f8858be3714c7c9ee_Photo 2-p-800.jpg";

function SectionLabel({ text }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="h-px w-8 bg-[#2C2C2C]/20" />
      <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#2C2C2C]/60" style={{ fontFamily: "var(--font-futura)" }}>
        {text}
      </span>
      <div className="h-px w-12 bg-[#2C2C2C]/20" />
    </div>
  );
}

function DoubleBorderButton({ href, children }) {
  return (
    <div className="inline-block border border-[#2C2C2C] p-[6px] rounded-[10px] transition-transform duration-300 hover:scale-[1.02]">
      <Link
        href={href}
        className="flex items-center justify-center rounded-[4px] bg-[#2C2C2C] px-12 py-4 text-[12px] font-bold uppercase tracking-[0.3em] text-[#FCF9F3] transition-all duration-300 hover:opacity-90"
        style={{ fontFamily: "var(--font-futura)" }}
      >
        {children}
      </Link>
    </div>
  );
}

export default function AboutSection() {
  const t = useTranslations("About");

  return (
    <section className="bg-[#FCF9F3] py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-12 space-y-32">

        {/* Part 1: History */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          <AnimateOnScroll variant="reveal" className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-[2px]">
            <Image
              src={img1}
              alt="Our first eatery"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </AnimateOnScroll>

          <AnimateOnScroll variant="slideRight" delay={0.2} className="flex flex-col items-start text-left">
            <SectionLabel text={t("storyLabel")} />
            <h2
              className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] leading-[1.1] text-[#2C2C2C] mb-8 font-normal"
              style={{ fontFamily: "var(--font-ramillas)" }}
            >
              {t("storyTitle")}
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-relaxed text-[#1E1E1E] mb-10 max-w-xl"
              style={{ fontFamily: "var(--font-futura)" }}
            >
              {t("storyDesc")}
            </p>
            <DoubleBorderButton href="/our-story">
              {t("readStory")}
            </DoubleBorderButton>
          </AnimateOnScroll>
        </div>

        {/* Part 2: Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          <AnimateOnScroll variant="slideLeft" className="flex flex-col items-start text-left order-2 lg:order-1">
            <SectionLabel text={t("serviceLabel")} />
            <h2
              className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] leading-[1.1] text-[#2C2C2C] mb-8 font-normal"
              style={{ fontFamily: "var(--font-ramillas)" }}
            >
              {t("serviceTitle")}
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-relaxed text-[#1E1E1E] mb-10 max-w-xl"
              style={{ fontFamily: "var(--font-futura)" }}
            >
              {t("serviceDesc")}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 md:gap-12 mb-12 w-full">
              <div className="flex flex-col">
                <span className="text-[28px] md:text-[36px] text-[#1E1E1E] mb-1" style={{ fontFamily: "var(--font-ramillas)" }}>24k+</span>
                <span className="text-[10px] md:text-[12px] uppercase tracking-wider text-[#1E1E1E]/50 font-bold" style={{ fontFamily: "var(--font-futura)" }}>{t("statsCustomers")}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[28px] md:text-[36px] text-[#1E1E1E] mb-1" style={{ fontFamily: "var(--font-ramillas)" }}>4k+</span>
                <span className="text-[10px] md:text-[12px] uppercase tracking-wider text-[#1E1E1E]/50 font-bold" style={{ fontFamily: "var(--font-futura)" }}>{t("statsEvents")}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[28px] md:text-[36px] text-[#2C2C2C] mb-1" style={{ fontFamily: "var(--font-ramillas)" }}>20k+</span>
                <span className="text-[10px] md:text-[12px] uppercase tracking-wider text-[#2C2C2C]/50 font-bold" style={{ fontFamily: "var(--font-futura)" }}>{t("statsOrders")}</span>
              </div>
            </div>

            <DoubleBorderButton href="/reservation">
              {t("reservationLabel")}
            </DoubleBorderButton>
          </AnimateOnScroll>

          <AnimateOnScroll variant="reveal" delay={0.2} className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-[2px] order-1 lg:order-2">
            <Image
              src={img2}
              alt="Private event"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </AnimateOnScroll>
        </div>

      </div>
    </section>
  );
}
