"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { memo } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

import imgMap from "./assets/our_locations_map_v3.png";

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
    <section className="w-full bg-[#FFF7ED] border-t border-[#2a2a2a]/10">
      <div className="mx-auto grid max-w-8xl grid-cols-1 lg:grid-cols-[1fr_1.2fr]">
        {/* Left column – image */}
        <AnimateOnScroll
          variant="slideLeft"
          duration={0.7}
          className="relative h-[400px] shrink-0 overflow-hidden lg:h-auto lg:min-h-[500px]"
        >
          <Image
            src={imgMap}
            alt="Map showing Naans & Curries locations in Costa Rica"
            fill
            className="object-contain p-4 lg:p-8 transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 1008px) 100vw, 50vw"
            quality={90}
          />
        </AnimateOnScroll>

        {/* Right column – text */}
        <AnimateOnScroll
          variant="slideRight"
          duration={0.7}
          className="flex flex-col px-6 py-12 md:px-10 md:py-16 lg:border-l lg:border-[#2a2a2a]/15 lg:px-14 lg:py-20"
        >
          <h2
            className="text-3xl font-normal uppercase leading-tight text-[#2a2a2a] md:text-4xl lg:text-5xl whitespace-nowrap"
            style={{ fontFamily: "var(--font-ramillas)" }}
          >
            {t("our")} {t("locations")}
          </h2>
          <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-6 max-w-4xl">
            <p className="max-w-xl text-base leading-relaxed text-[#4A4A4A]">
              {t("description")}
            </p>
            <Link
              href="#contact"
              className="inline-block shrink-0 rounded-md border border-[#2a2a2a]/20 bg-[#333333] px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#444444] hover:scale-[1.02]"
            >
              {t("contactUs")}
            </Link>
          </div>

          {/* Locations list – staggered */}
          <ul className="mt-10 flex flex-col">
            {locations.map((loc, index) => (
              <AnimateOnScroll
                key={loc.name}
                variant="fadeUp"
                delay={index * 0.06}
                duration={0.45}
                as="li"
              >
                {index > 0 && (
                  <hr className="mb-4 border-0 border-b border-[#2a2a2a]/25" />
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
      </div>
    </section>
  );
}
