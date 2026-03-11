"use client";

import { Link } from "@/src/compat/navigation";
import { useTranslations } from "@/src/compat/next-intl";
import { memo, useState, useCallback, useEffect } from "react";
import dynamic from "@/src/compat/next-dynamic";
import AnimateOnScroll from "./AnimateOnScroll";

// Dynamic import for the Map component
const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-[#E5DDD0]/50 animate-pulse" />
});

const locationData = [
  {
    name: "MOMENTUM, LINDORA, SANTA ANA, SAN JOSE, COSTA RICA",
    phones: "+506 2282 0001, +506 2282 5470",
    coordinates: [9.9530950, -84.1951776],
  },
  {
    name: "LINCOLN PLAZA, SAN JOSE, COSTA RICA",
    phones: "+506 2282 0002",
    coordinates: [9.9624837, -84.0553243],
  },
  {
    name: "PINARES, SAN JOSE, COSTA RICA",
    phones: "+506 2282 0003",
    coordinates: [9.9106425, -84.0172641],
  },
  {
    name: "ESCAZU, SAN JOSE, COSTA RICA",
    phones: "+506 2282 0004",
    coordinates: [9.9304, -84.1484],
  },
  {
    name: "ALAJUELA, COSTA RICA",
    phones: "+506 2282 0005",
    coordinates: [10.0163, -84.2140],
  },
  {
    name: "HEREDIA, COSTA RICA",
    phones: "+506 2282 0006",
    coordinates: [9.9981, -84.1197],
  },
  {
    name: "CARTAGO, COSTA RICA",
    phones: "+506 2282 0007",
    coordinates: [9.8644, -83.9194],
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
  const [mounted, setMounted] = useState(false);
  const [activeCoords, setActiveCoords] = useState([9.93, -84.10]);
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onLocationClick = useCallback((coords) => {
    setActiveCoords(coords);
    setZoom(14);
  }, []);

  if (!mounted) {
    return (
      <section className="w-full bg-[#FFF7ED]">
        <div className="mx-auto grid max-w-8xl grid-cols-1 lg:grid-cols-[1fr_1.2fr]">
          <div className="h-[450px] lg:h-[600px] bg-[#E5DDD0]/50 animate-pulse" />
          <div className="p-10">Loading Locations...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-[#FFF7ED]">
      <div className="mx-auto grid max-w-8xl grid-cols-1 lg:grid-cols-[1fr_1.2fr]">
        {/* Left column â€“ Leaflet Map */}
        <AnimateOnScroll
          variant="slideLeft"
          duration={0.7}
          className="relative h-[450px] shrink-0 overflow-hidden lg:h-auto lg:min-h-[600px]"
        >
          <div className="absolute inset-0 h-full w-full z-0">
            <LeafletMap
              locationData={locationData}
              activeCoords={activeCoords}
              zoom={zoom}
              onLocationClick={onLocationClick}
            />
          </div>
        </AnimateOnScroll>

        {/* Right column â€“ text */}
        <AnimateOnScroll
          variant="slideRight"
          duration={0.7}
          className="flex flex-col px-6 py-12 md:px-10 md:py-16 lg:border-l lg:border-[#2a2a2a]/15 lg:px-14 lg:py-20"
        >
          <h2
            className="text-3xl font-normal uppercase leading-tight text-[#2a2a2a] md:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-ramillas)" }}
          >
            {t("our")} {t("locations")}
          </h2>
          <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-6 max-w-4xl">
            <p className="max-w-xl text-base leading-relaxed text-[#4A4A4A]">
              {t("description")}
            </p>
            <Link
              href="/contact"
              className="inline-block shrink-0 rounded-md border border-[#2a2a2a]/20 bg-[#333333] px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#444444] hover:scale-[1.02]"
            >
              {t("contactUs")}
            </Link>
          </div>

          {/* Locations list â€“ staggered */}
          <ul className="mt-10 flex flex-col">
            {locationData.map((loc, index) => (
              <AnimateOnScroll
                key={loc.name}
                variant="fadeUp"
                delay={index * 0.06}
                duration={0.45}
                as="li"
                className="cursor-pointer group"
                onClick={() => onLocationClick(loc.coordinates)}
              >
                {index > 0 && (
                  <hr className="mb-4 border-0 border-b border-[#2a2a2a]/25" />
                )}
                <p className="text-xs font-medium uppercase tracking-wide text-[#4A4A4A] md:text-sm group-hover:text-[#E89D42] transition-colors">
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
