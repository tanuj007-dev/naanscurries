"use client";

import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

import imgCurrySpoon from "./assets/c7bde3c22a773bb2a632d4105cf92649301acd09 (1).jpg";
import imgSpices from "./assets/60fd69bda9d9bf5ce2e3c078410a18a0781c36ef.jpg";
import imgCurryBowl from "./assets/184feea337ba0d7e4ee23a1bf53ccd8167b3fe64.jpg";

export default function Tradition() {
  return (
    <section className="w-full bg-[#FDF4E7] px-6 py-16 md:px-10 md:py-20 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Main title */}
        <AnimateOnScroll variant="fadeUp" duration={0.7} className="text-center">
          <h2
            className="text-4xl uppercase leading-tight text-[#2D2D2D] md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-ramillas)" }}
          >
            <span className="block">Gift a Taste</span>
            <span className="block">of Tradition</span>
          </h2>
        </AnimateOnScroll>

        {/* Content Row */}
        <div className="mt-16 flex flex-col items-center justify-center gap-10 md:mt-24 md:flex-row md:items-center md:justify-between md:gap-4 lg:gap-12">

          {/* Left Text (Hidden on Mobile, or stacked? Screenshot implies desktop layout dominance) 
              We'll show it above or below on mobile, or hide if decoration. 
              Let's show it for completeness but style it nicely.
          */}
          <AnimateOnScroll variant="slideLeft" delay={0.1} className="hidden w-full flex-1 text-center md:block md:text-right">
            <span
              className="text-sm uppercase tracking-widest text-[#2D2D2D]/90 md:text-base lg:text-lg"
              style={{ fontFamily: "var(--font-ramillas)" }}
            >
              Share The Experience
            </span>
          </AnimateOnScroll>

          {/* Central Image Composition */}
          <AnimateOnScroll variant="scale" delay={0.1} duration={0.8} className="relative w-full max-w-lg md:w-[500px] lg:w-[600px]">
            {/* Main Central Image (Spices) */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-xl md:aspect-[16/10]">
              <Image
                src={imgSpices}
                alt="Indian spices – turmeric, chilies, cardamom, cumin"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 90vw, 500px"
              />
            </div>

            {/* Top-Left Overlap (Curry Spoon) */}
            <div className="absolute -left-2 -top-10 h-28 w-28 overflow-hidden rounded-lg shadow-lg md:-left-12 md:-top-16 md:h-40 md:w-40 lg:h-48 lg:w-48">
              <Image
                src={imgCurrySpoon}
                alt="Curry served in a bowl"
                fill
                className="object-cover object-center"
                sizes="200px"
              />
            </div>

            {/* Bottom-Right Overlap (Curry Bowl) */}
            <div className="absolute -bottom-10 -right-2 h-28 w-28 overflow-hidden rounded-lg shadow-lg md:-bottom-16 md:-right-12 md:h-40 md:w-40 lg:h-48 lg:w-48">
              <Image
                src={imgCurryBowl}
                alt="Traditional curry in copper bowl"
                fill
                className="object-cover object-center"
                sizes="200px"
              />
            </div>
          </AnimateOnScroll>

          {/* Right Text */}
          <AnimateOnScroll variant="slideRight" delay={0.1} className="hidden w-full flex-1 text-center md:block md:text-left">
            <span
              className="text-sm uppercase tracking-widest text-[#2D2D2D]/90 md:text-base lg:text-lg"
              style={{ fontFamily: "var(--font-ramillas)" }}
            >
              Flavours We Remember
            </span>
          </AnimateOnScroll>

          {/* Mobile Text Stack (Visible only on mobile) */}
          <div className="flex w-full items-center justify-between md:hidden">
            <span
              className="text-xs uppercase tracking-wider text-[#2D2D2D]/90"
              style={{ fontFamily: "var(--font-ramillas)" }}
            >
              Share The Experience
            </span>
            <span
              className="text-xs uppercase tracking-wider text-[#2D2D2D]/90"
              style={{ fontFamily: "var(--font-ramillas)" }}
            >
              Flavours We Remember
            </span>
          </div>

        </div>

        {/* Bottom Description */}
        <AnimateOnScroll variant="fadeUp" delay={0.3} duration={0.6} className="mt-20 flex flex-col items-center text-center md:mt-24">
          <p
            className="max-w-2xl text-sm leading-relaxed text-[#2D2D2D]/80 md:text-base"
            style={{ fontFamily: "var(--font-futura)" }}
          >
            Native Chefs, Special charcoal fired &quot;Tandoors&quot; (Clay Ovens) and
            exotic Indian ingredients, providing
          </p>

          <div className="mt-10">
            {/* Double-border button frame */}
            <div className="inline-block rounded-md border border-[#2d2d2d] p-1">
              <Link
                href="#order"
                className="flex items-center justify-center rounded-sm bg-[#2d2d2d] px-10 py-3 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#3d3d3d]"
                style={{ fontFamily: "var(--font-futura)" }}
              >
                Order Now
              </Link>
            </div>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
