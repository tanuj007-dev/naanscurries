"use client";

import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

import imgLindora from "./assets/76c975a39abb9fcc828ffb2648c6188e5d26ea73.png";
import imgPinares from "./assets/ea51741453ba46b48af6b340fcba353385063106.png";
import imgLincoln from "./assets/5d59d954c42cda282cba9d813cd813f04885a686.png";

const locations = [
  {
    image: imgLindora,
    alt: "Catering display with silver bowls and Indian dishes – Naans & Curries Lindora",
    title: "Naans & Curries Lindora",
    description:
      "At Naans & Curries Lindora You can enjoy different ambiance; private saloon for group and events dining, green lawn fresh breeze seating, or cozy and relaxed sofa seating.",
  },
  {
    image: imgPinares,
    alt: "Chef cooking in kitchen with flames – Naans & Curries Pinares",
    title: "Naans & Curries Pinares",
    description:
      "At Naans & Curries Pinares You can enjoy outdoor terrace seating with view of mountains or inside cozy seating for the cold evenings.",
  },
  {
    image: imgLincoln,
    alt: "Fresh Indian bread cooking – Naans & Curries Lincoln Plaza",
    title: "Naans & Curries Lincoln Plaza",
    description:
      "At Naans & Curries Lincoln Plaza Enjoy the contemporary Indian vibe. Breezy terrace or nature theme indoors, perfect for your mood.",
  },
];

export default function Catering() {
  return (
    <section className="w-full bg-[#E5DDD0] px-6 py-16 md:px-10 md:py-20 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Header Section */}
        <AnimateOnScroll variant="fadeUp" duration={0.7} className="flex flex-col items-center">

          {/* Mobile Header (Stack) */}
          <div className="flex flex-col items-center text-center md:hidden pb-10">
            <h2
              className="text-3xl uppercase leading-tight text-[#2D2D2D]"
              style={{ fontFamily: "var(--font-ramillas)" }}
            >
              <span className="block text-2xl">Catering The</span>
              <span className="block">Naans Curries Way</span>
            </h2>
            <div
              className="mt-4 flex gap-4 text-[10px] uppercase tracking-widest text-[#2D2D2D]/90 font-medium"
              style={{ fontFamily: "var(--font-ramillas)" }}
            >
              <span>Exceptional Food</span>
              <span>•</span>
              <span>Anywhere</span>
            </div>
          </div>

          {/* Desktop Header (Row) */}
          <div className="hidden w-full max-w-5xl items-center justify-between md:flex">

            {/* Left Decorator */}
            <div className="flex-1 text-right">
              <span
                className="text-sm uppercase tracking-widest text-[#2D2D2D]/80 font-semibold"
                style={{ fontFamily: "var(--font-ramillas)" }}
              >
                Exceptional Food
              </span>
            </div>

            {/* Center Heading */}
            <div className="mx-8 flex flex-col items-center text-center lg:mx-12">
              <h2
                className="flex flex-col items-center text-[#2D2D2D]"
                style={{ fontFamily: "var(--font-ramillas)" }}
              >
                <span className="text-3xl uppercase leading-none lg:text-4xl">Catering The</span>
                <span className="mt-1 text-4xl uppercase leading-none lg:text-5xl">Naans Curries Way</span>
              </h2>
            </div>

            {/* Right Decorator */}
            <div className="flex-1 text-left">
              <span
                className="text-sm uppercase tracking-widest text-[#2D2D2D]/80 font-semibold"
                style={{ fontFamily: "var(--font-ramillas)" }}
              >
                Anywhere
              </span>
            </div>
          </div>

        </AnimateOnScroll>

        {/* Grid Section */}
        <div className="mt-10 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-3 md:gap-8 lg:gap-12">
          {locations.map((loc, i) => (
            <AnimateOnScroll
              key={loc.title}
              variant="fadeUp"
              delay={i * 0.15}
              duration={0.6}
              className="flex flex-col items-start"
            >
              {/* Image Container */}
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-200">
                <Image
                  src={loc.image}
                  alt={loc.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={85}
                />
              </div>

              {/* Text Content */}
              <div className="mt-6 flex flex-col items-start text-left">
                <h3
                  className="text-xl font-normal text-[#2D2D2D]"
                  style={{ fontFamily: "var(--font-ramillas)" }}
                >
                  {loc.title}
                </h3>
                <p
                  className="mt-3 text-sm leading-relaxed text-[#2D2D2D]/80 md:text-[15px]"
                  style={{ fontFamily: "var(--font-futura)" }}
                >
                  {loc.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
