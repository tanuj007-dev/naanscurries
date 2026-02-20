"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import AnimateOnScroll from "./AnimateOnScroll";
import rootedBg from "./assets/35fc7f6b329a49530e87b98caae919b3dc83dba8.jpg";

export default function Rooted() {
  const t = useTranslations("Rooted");
  return (
    <section className="w-full px-4 py-6 bg-[#FDF4E7] md:px-8 md:py-10 lg:px-6 lg:py-8">
      <div className="relative mx-auto h-[500px] w-full max-w-[1440px] overflow-hidden rounded-xl md:h-[650px] lg:h-[750px]">
        {/* 1. Full-width background image */}
        <Image
          src={rootedBg}
          alt="Rooted in Experience - Naans & Curries"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 100vw"
        />

        {/* 3. Overlay & Styling */}
        {/* Dark translucent overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Gradient for extra text contrast at top and bottom */}
        <div className="absolute inset-0 " />

        {/* 4. Decorative Elements - Floating circular shapes */}
        {/* Using light grey/beige tone (#EAE0D5) with opacity */}
        <div
          className="absolute left-[10%] top-[-5%] h-32 w-32 rounded-full bg-[#EAE0D5]/20 blur-sm md:h-48 md:w-48"
          aria-hidden="true"
        />
        <div
          className="absolute left-[25%] top-[5%] h-16 w-16 rounded-full bg-[#EAE0D5]/15 blur-sm md:h-24 md:w-24"
          aria-hidden="true"
        />
        <div
          className="absolute left-[50%] top-[-10%] h-56 w-56 rounded-full bg-[#EAE0D5]/10 blur-xl md:h-72 md:w-72"
          aria-hidden="true"
        />
        <div
          className="absolute right-[15%] top-[10%] h-20 w-20 rounded-full bg-[#EAE0D5]/20 blur-md md:h-28 md:w-28"
          aria-hidden="true"
        />
        <div
          className="absolute right-[-5%] top-[-5%] h-40 w-40 rounded-full bg-[#EAE0D5]/15 blur-lg md:h-56 md:w-56"
          aria-hidden="true"
        />

        {/* Content Container - Edge-to-edge content within max-width */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1300px] flex-col justify-between px-6 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16">

          {/* 2. Text Position & Alignment - Top Left Heading */}
          <div className="flex flex-col items-start">
            <AnimateOnScroll variant="slideRight" duration={0.8}>
              <h2
                className="text-left uppercase leading-[0.8] tracking-tighter text-[#FAF6F0]
                           text-[13vw] md:text-6xl md:leading-[0.85] md:tracking-tight"
                style={{ fontFamily: "var(--font-ramillas)" }}
              >
                <span className="block">{t("rootedIn")}</span>
                <span className="block">{t("experience")}</span>
              </h2>
            </AnimateOnScroll>
          </div>

          <div className="flex w-full max-w-2xl flex-col items-start">
            <AnimateOnScroll variant="fadeUp" delay={0.2} duration={0.8}>
              <p
                className="text-left text-base leading-relaxed text-[#F0EAE0] md:text-lg lg:text-xl font-light"
                style={{ fontFamily: "var(--font-futura)" }}
              >
                {t("description")}
              </p>
            </AnimateOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
