"use client";

import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

import spiritBg from "./assets/e9bd551d7f6c0e4ee8f75946f827d4dd13d04138.jpg";

export default function TheSpirit() {
  return (
    <section className="relative min-h-[560px] w-full overflow-hidden border-[8px] border-[#FFF1DF] bg-black md:min-h-[620px] lg:min-h-[700px]">
      {/* Background image */}
      <div className="absolute inset-0 rounded-lg">
        <Image
          src={spiritBg}
          alt="Indian dining – traditional dishes and thali"
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={80}
        />
        <div className="absolute inset-0 bg-[#1a1210]/60" aria-hidden />
      </div>

      {/* Content – left-aligned */}
      <div className="relative z-10 mx-auto flex max-w-8xl flex-col justify-center px-8 py-16 md:px-12 md:py-20 lg:px-16">
        <AnimateOnScroll variant="slideLeft" duration={0.7}>
          <h2
            className="max-w-3xl text-3xl font-normal uppercase leading-tight text-[#FFF7ED] md:text-4xl lg:text-[72px]"
            style={{ fontFamily: "var(--font-ramillas)" }}
          >
            <span className="block">The Spirit of</span>
            <span className="block">Indian Dining</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={0.15} duration={0.6}>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#FFF7ED]/95 md:text-lg">
            Good food, good service, a very pleasant dining experience.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={0.3} duration={0.6}>
          <div className="mt-8">
            {/* Double-border frame effect button */}
            <div className="inline-flex rounded-xl border border-[#E89D42] p-1.5 transition-transform duration-300 hover:scale-[1.02]">
              <Link
                href="#reservation"
                className="inline-flex items-center justify-center rounded-lg bg-[#E89D42] px-8 py-3 text-lg font-medium text-[#1c1c1c] transition-opacity duration-200 hover:opacity-90"
                style={{ fontFamily: "var(--font-futura)" }}
              >
                Reservation
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
