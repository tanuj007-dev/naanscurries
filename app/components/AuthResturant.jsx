"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import AnimateOnScroll from "./AnimateOnScroll";

import restaurantImg from "./assets/dcf85e625eb89d680ed6ba526ad66fd03bc8c633.jpg";
import tripadvisorBadges from "./assets/Frame 43 (1).png";

export default function AuthResturant() {
  const t = useTranslations("AuthResturant");
  return (
    <section className="grid w-full grid-cols-1 bg-[#FDF4E7] lg:grid-cols-2">
      {/* Left column – text, button, Tripadvisor badges */}
      <AnimateOnScroll
        variant="slideLeft"
        duration={0.7}
        className="flex flex-col justify-center px-6 py-12 md:px-10 md:py-16 lg:px-14 lg:py-20"
      >
        <h2
          className="text-3xl uppercase leading-tight text-[#2d2d2d] md:text-4xl lg:text-[44px]"
          style={{ fontFamily: "var(--font-ramillas)" }}
        >
          {t("title")}
        </h2>

        <div className="mt-6 flex flex-col gap-4 text-[#2d2d2d]/90">
          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: "var(--font-futura)" }}
          >
            {t("p1")}
          </p>

          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: "var(--font-futura)" }}
          >
            {t("p2")}
          </p>
        </div>

        <div className="mt-10 flex justify-center md:justify-start">
          <div className="inline-block rounded-md border border-[#2d2d2d] p-1">
            <Link
              href="#curator"
              className="flex items-center justify-center rounded-sm bg-[#2d2d2d] px-8 py-3 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#3d3d3d]"
              style={{ fontFamily: "var(--font-futura)" }}
            >
              {t("thoughtsCurator")}
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <Image
            src={tripadvisorBadges}
            alt="Tripadvisor Travellers' Choice and Certificate of Excellence awards"
            width={640}
            height={120}
            className="h-auto w-full object-contain object-left md:w-auto md:max-w-[80%]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </AnimateOnScroll>

      {/* Right column – restaurant interior image */}
      <AnimateOnScroll
        variant="slideRight"
        duration={0.7}
        className="flex items-center justify-center p-6 md:p-10 lg:p-14"
      >
        <div className="relative aspect-square w-full overflow-hidden rounded-[32px] md:aspect-[4/3] lg:h-full lg:w-full">
          <Image
            src={restaurantImg}
            alt="Naans & Curries restaurant interior – dining table and elegant setting"
            fill
            className="object-cover object-center transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={80}
          />
        </div>
      </AnimateOnScroll>
    </section>
  );
}
