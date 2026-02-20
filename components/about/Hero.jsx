"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import aboutHeroImage from "@/app/components/assets/6899dde6ee6b691e5741363f_about (1).webp";

export default function Hero() {
  const t = useTranslations("About");
  const [mounted, setMounted] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const t = requestAnimationFrame(() => {
      requestAnimationFrame(() => setMounted(true));
    });
    return () => cancelAnimationFrame(t);
  }, []);

  const headingStyle = {
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateX(0)" : "translateX(-24px)",
    transition: "opacity 0.7s ease-out 0.1s, transform 0.7s ease-out 0.1s",
  };
  const paragraphStyle = {
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateX(0)" : "translateX(-20px)",
    transition: "opacity 0.6s ease-out 0.25s, transform 0.6s ease-out 0.25s",
  };

  return (
    <section
      className="relative flex min-h-[70vh] w-full overflow-hidden sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-[85vh] flex-col"
      aria-label="About us hero"
    >
      <div className="h-24 md:h-32" />

      {/* Background image – responsive: show full composition, no aggressive crop */}
      <div className="absolute inset-0">
        <Image
          src={aboutHeroImage}
          alt="Naans & Curries – from our kitchen to yours"
          fill
          className="object-cover object-[55%_50%] sm:object-[52%_50%] md:object-[50%_50%]"
          priority
          sizes="100vw"
        />
        {/* Dark overlay (stronger on left for text contrast) */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/25"
          aria-hidden
        />
      </div>

      {/* Left-aligned text – contained in left half like screenshot */}
      <div className="relative z-10 flex w-full max-w-full flex-col justify-center px-5 py-16 text-left sm:px-8 sm:py-20 md:max-w-[48%] md:px-10 md:py-24 lg:max-w-[42%] lg:pl-14 lg:pr-0 xl:pl-20">
        <h1
          className="font-bold uppercase leading-tight text-white will-change-transform text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl"
          style={{ ...headingStyle, fontFamily: "var(--font-ramillas)" }}
        >
          <span className="block">{t("heroLine1")}</span>
          <span className="block">{t("heroLine2")}</span>
          <span className="block">{t("heroLine3")}</span>
        </h1>
        <p
          className="mt-4 max-w-md text-base leading-relaxed text-white/95 sm:mt-5 sm:text-lg"
          style={paragraphStyle}
        >
          {t("heroDescription")}
        </p>
      </div>

      {/* Right side: pagination dots + plus button (vertically centered) */}
      <div className="absolute right-4 top-1/2 z-10 flex -translate-y-1/2 flex-col items-center gap-5 sm:right-6 md:right-8 lg:right-10">
        {/* Pagination dots */}
        <div className="flex flex-col gap-3">
          {[0, 1].map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveSlide(i)}
              className={`h-2.5 w-2.5 rounded-full shadow-md transition-all duration-300 ${activeSlide === i ? "bg-red-600 scale-110" : "bg-stone-700/90"
                }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        {/* Plus / Explore button */}
        <button
          type="button"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-white bg-white/10 text-white transition-all duration-300 hover:bg-white hover:text-black"
          aria-label={t("exploreMore")}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </section>
  );
}
