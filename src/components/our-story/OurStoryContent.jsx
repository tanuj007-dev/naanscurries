"use client";

import Image from "@/src/compat/next-image";
import { useTranslations } from "@/src/compat/next-intl";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/src/components/AnimateOnScroll";
import { Link } from "@/src/compat/navigation";

import imgFirstEatery from "@/src/components/assets/665fc56eb1a11bee9137d307_Photo 2-p-800.jpg";
import imgPrivateEvent from "@/src/components/assets/665fc45f8858be3714c7c9ee_Photo 2-p-800.jpg";
import imgChef from "@/src/components/assets/666002fc5dcc333c0946b9f7_Chef 10-p-500.jpg";
import imgSpices from "@/src/components/assets/60fd69bda9d9bf5ce2e3c078410a18a0781c36ef.jpg";
import imgDining from "@/src/components/assets/0292db1ee2e191c2e4e62f9095453ae8d15c0fa7.jpg";

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

export default function OurStoryContent() {
  const t = useTranslations("OurStory");

  return (
    <div className="w-full bg-[#FCF9F3] overflow-x-hidden">
      {/* Intro block */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-12 text-center">
        <AnimateOnScroll variant="fadeUp">
          <p
            className="text-[18px] md:text-[22px] leading-relaxed text-[#1E1E1E]"
            style={{ fontFamily: "var(--font-futura)" }}
          >
            {t("intro")}
          </p>
        </AnimateOnScroll>
      </section>

      {/* Section 1: The Beginning — image left */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimateOnScroll variant="reveal" className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-xl">
            <Image
              src={imgFirstEatery}
              alt="Our first eatery"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </AnimateOnScroll>
          <AnimateOnScroll variant="slideRight" delay={0.15}>
            <SectionLabel text={t("beginningLabel")} />
            <h2
              className="text-[32px] md:text-[44px] lg:text-[52px] leading-[1.1] text-[#2C2C2C] mb-6 font-normal"
              style={{ fontFamily: "var(--font-ramillas)" }}
            >
              {t("beginningTitle")}
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-relaxed text-[#1E1E1E] mb-6"
              style={{ fontFamily: "var(--font-futura)" }}
            >
              {t("beginningDesc")}
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-relaxed text-[#1E1E1E]/90"
              style={{ fontFamily: "var(--font-futura)" }}
            >
              {t("beginningDesc2")}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Full-width image strip */}
      <section className="w-full py-8">
        <AnimateOnScroll variant="reveal" className="relative w-full aspect-[21/9] max-h-[420px] overflow-hidden">
          <Image
            src={imgSpices}
            alt="Spices and tradition"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#2C2C2C]/40 flex items-center justify-center">
            <p
              className="text-[24px] md:text-[32px] lg:text-[40px] text-white text-center max-w-3xl px-6 font-normal italic"
              style={{ fontFamily: "var(--font-ramillas)" }}
            >
              {t("quote")}
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Section 2: The Passion — image right */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimateOnScroll variant="slideLeft" className="order-2 lg:order-1">
            <SectionLabel text={t("passionLabel")} />
            <h2
              className="text-[32px] md:text-[44px] lg:text-[52px] leading-[1.1] text-[#2C2C2C] mb-6 font-normal"
              style={{ fontFamily: "var(--font-ramillas)" }}
            >
              {t("passionTitle")}
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-relaxed text-[#1E1E1E]"
              style={{ fontFamily: "var(--font-futura)" }}
            >
              {t("passionDesc")}
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="reveal" delay={0.15} className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-xl order-1 lg:order-2">
            <Image
              src={imgPrivateEvent}
              alt="Private dining experience"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 3: The Kitchen — image left, chef */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimateOnScroll variant="reveal" className="relative aspect-[3/4] max-w-md overflow-hidden rounded-lg shadow-xl">
            <Image
              src={imgChef}
              alt="Our kitchen"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </AnimateOnScroll>
          <AnimateOnScroll variant="slideRight" delay={0.15}>
            <SectionLabel text={t("kitchenLabel")} />
            <h2
              className="text-[32px] md:text-[44px] lg:text-[52px] leading-[1.1] text-[#2C2C2C] mb-6 font-normal"
              style={{ fontFamily: "var(--font-ramillas)" }}
            >
              {t("kitchenTitle")}
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-relaxed text-[#1E1E1E]"
              style={{ fontFamily: "var(--font-futura)" }}
            >
              {t("kitchenDesc")}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 4: Today — full story CTA */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <Image src={imgDining} alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-[#111111]/75" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <AnimateOnScroll variant="fadeUp">
            <SectionLabel text={t("todayLabel")} />
            <h2
              className="text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] text-[#FCF9F3] mb-6 font-normal"
              style={{ fontFamily: "var(--font-ramillas)" }}
            >
              {t("todayTitle")}
            </h2>
            <p
              className="text-[16px] md:text-[18px] leading-relaxed text-[#FCF9F3]/90 mb-10"
              style={{ fontFamily: "var(--font-futura)" }}
            >
              {t("todayDesc")}
            </p>
            <div className="inline-block border border-[#FCF9F3] p-[6px] rounded-[10px] transition-transform duration-300 hover:scale-[1.02]">
              <Link
                href="/reservation"
                className="flex items-center justify-center rounded-[4px] bg-[#FCF9F3] px-12 py-4 text-[12px] font-bold uppercase tracking-[0.3em] text-[#2C2C2C] transition-all duration-300 hover:opacity-90"
                style={{ fontFamily: "var(--font-futura)" }}
              >
                {t("bookTable")}
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
