"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { memo } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

import imgCurry from "./assets/04b48f2acb6666394f6f4e71af236802867f3c88.jpg";

const locationData = [
  {
    name: "MOMENTUM, LINDORA, SANTA ANA, SAN JOSE, COSTA RICA",
    phones: "+506 2282 0001, +506 2282 5470",
  },
  {
    name: "LINCOLN PLAZA, SAN JOSE, COSTA RICA",
    phones: "+506 2282 0002",
  },
  {
    name: "PINARES, SAN JOSE, COSTA RICA",
    phones: "+506 2282 0003",
  },
  {
    name: "ESCAZU, SAN JOSE, COSTA RICA",
    phones: "+506 2282 0004",
  },
  {
    name: "ALAJUELA, COSTA RICA",
    phones: "+506 2282 0005",
  },
  {
    name: "HEREDIA, COSTA RICA",
    phones: "+506 2282 0006",
  },
  {
    name: "CARTAGO, COSTA RICA",
    phones: "+506 2282 0007",
  },
];

const PhoneIcon = memo(function PhoneIcon() {
  return (
    <svg
      className="h-4 w-4 text-[#2a2a2a]"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
});

export default function OurLocations() {
  const t = useTranslations("OurLocations");
  const locations = locationData;
  return (
    <section className="w-full bg-[#FFF7ED]">
      <div className="mx-auto grid max-w-8xl grid-cols-1 lg:grid-cols-[1fr_1fr]">
        {/* Left column – text */}
        <AnimateOnScroll
          variant="slideLeft"
          duration={0.7}
          className="flex flex-col px-6 py-16 md:px-10 md:py-20 lg:border-r lg:border-[#2a2a2a]/15 lg:px-14 lg:py-24"
        >
          <h2
            className="text-3xl font-normal uppercase leading-tight text-[#2a2a2a] md:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-ramillas)" }}
          >
            <span className="block">{t("our")}</span>
            <span className="block">{t("locations")}</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-[#4A4A4A]">
            {t("description")}
          </p>
          <Link
            href="#contact"
            className="mt-8 inline-block shrink-0 rounded-md border border-[#2a2a2a]/20 bg-[#333333] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#444444] hover:scale-[1.02]"
          >
            {t("contactUs")}
          </Link>

          {/* Locations list – staggered */}
          <ul className="mt-12 flex flex-col">
            {locations.map((loc, index) => (
              <AnimateOnScroll
                key={loc.name}
                variant="fadeUp"
                delay={index * 0.06}
                duration={0.45}
                as="li"
              >
                {index > 0 && (
                  <hr className="mb-5 border-0 border-b border-[#2a2a2a]/25" />
                )}
                <p className="text-xs font-medium uppercase tracking-wide text-[#4A4A4A] md:text-sm">
                  {loc.name}
                </p>
                <p className="mt-1 flex items-center gap-2 text-sm text-[#4A4A4A] md:text-base">
                  <span className="shrink-0" aria-hidden>
                    <PhoneIcon />
                  </span>
                  <span>{loc.phones}</span>
                </p>
              </AnimateOnScroll>
            ))}
          </ul>
        </AnimateOnScroll>

        {/* Right column – image */}
        <AnimateOnScroll
          variant="slideRight"
          duration={0.7}
          className="relative h-[420px] shrink-0 overflow-hidden lg:h-auto lg:min-h-[400px]"
        >
          <Image
            src={imgCurry}
            alt="Indian curry in golden bowl with traditional serving ware"
            fill
            className="object-cover object-[70%_55%] transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 1008px) 100vw, 50vw"
            quality={80}
          />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
