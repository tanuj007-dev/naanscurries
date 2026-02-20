"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import AnimateOnScroll from "./AnimateOnScroll";

import diningImage from "./assets/0292db1ee2e191c2e4e62f9095453ae8d15c0fa7.jpg";
import curryRiceIcon from "./assets/emojione-monotone_curry-rice.png";

const menuKeys = [
  { titleKey: "mainMenu", descKey: "mainMenuDesc" },
  { titleKey: "dessertMenu", descKey: "dessertMenuDesc" },
  { titleKey: "executiveLunch", descKey: "executiveLunchDesc" },
  { titleKey: "chefsTasting", descKey: "chefsTastingDesc" },
];

export default function SignatureMenu() {
  const t = useTranslations("SignatureMenu");
  return (
    <section className="grid w-full grid-cols-1 md:grid-cols-2">
      {/* ── Left Column: Signature Menu (Orange with Dark Border) ─────────── */}
      <AnimateOnScroll
        variant="slideLeft"
        duration={0.7}
        className="flex h-full flex-col bg-[#2d2d2d] p-3 md:p-4"
      >
        <div className="relative flex h-full flex-col justify-between rounded-[4px] bg-[#C68D48] px-6 py-10 md:px-8 md:py-12 lg:px-12 lg:py-16">

          {/* Vector Icon: Absolute Top Right relative to the orange card */}
          <div className="absolute right-5 top-6 opacity-80 md:right-8 md:top-10">
            <Image
              src={curryRiceIcon}
              alt="Signature Icon"
              width={48}
              height={48}
              className="h-10 w-10 object-contain md:h-12 md:w-12"
            />
          </div>

          {/* Heading */}
          <h2
            className="max-w-md text-4xl uppercase leading-tight text-[#2d2d2d] md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-ramillas)" }}
          >
            <span className="block">{t("signature")}</span>
            <span className="block">{t("menu")}</span>
          </h2>

          <div className="mt-10 flex flex-col md:mt-12">
            {menuKeys.map((item, i) => (
              <AnimateOnScroll
                key={item.titleKey}
                variant="fadeUp"
                delay={i * 0.1}
                duration={0.5}
                className="border-t border-[#2d2d2d]/30 py-6 first:border-none first:pt-0"
              >
                <h3
                  className="text-lg font-normal text-[#2d2d2d] md:text-xl"
                  style={{ fontFamily: "var(--font-futura)" }}
                >
                  {t(item.titleKey)}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed text-[#2d2d2d]/90 md:text-[15px]"
                  style={{ fontFamily: "var(--font-futura)" }}
                >
                  {t(item.descKey)}
                </p>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="mt-10">
            <div className="inline-flex w-full rounded-md border border-[#2d2d2d] p-1">
              <Link
                href="#menu"
                className="flex w-full items-center justify-center rounded-sm bg-[#2d2d2d] py-3 text-sm font-medium uppercase tracking-wide text-white transition-all duration-300 hover:bg-[#3d3d3d]"
                style={{ fontFamily: "var(--font-futura)" }}
              >
                {t("viewFullMenu")}
              </Link>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* ── Right Column: Info + Image ──────────────────────────────────── */}
      <div className="flex h-full flex-col">

        {/* Top: Wedding Catering Info (Beige) */}
        <AnimateOnScroll
          variant="slideRight"
          duration={0.7}
          className="flex flex-1 flex-col justify-center bg-[#FDF4E7] px-8 py-12 md:px-10 md:py-16 lg:px-14 lg:py-20"
        >
          <h2
            className="text-3xl uppercase leading-tight text-[#2d2d2d] md:text-4xl lg:text-[44px]"
            style={{ fontFamily: "var(--font-ramillas)" }}
          >
            {t("weddingHeading")}
          </h2>

          <p
            className="mt-6 text-base leading-relaxed text-[#2d2d2d]/80 md:text-lg"
            style={{ fontFamily: "var(--font-futura)" }}
          >
            {t("weddingDesc")}
          </p>

          <div className="mt-10">
            <div className="inline-block rounded-md border border-[#2d2d2d] p-1">
              <Link
                href="#wedding-catering"
                className="flex items-center justify-center rounded-sm bg-[#2d2d2d] px-8 py-3 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#3d3d3d]"
                style={{ fontFamily: "var(--font-futura)" }}
              >
                {t("contactWedding")}
              </Link>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Bottom: Image */}
        <AnimateOnScroll
          variant="scale"
          duration={0.8}
          className="relative flex-1 min-h-[300px] w-full overflow-hidden"
        >
          <Image
            src={diningImage}
            alt="Elegant dining table setting for wedding catering"
            fill
            className="object-cover object-center transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={85}
          />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
