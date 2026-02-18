"use client";

import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

import restaurantImg from "./assets/dcf85e625eb89d680ed6ba526ad66fd03bc8c633.jpg";
import tripadvisorBadges from "./assets/Frame 43 (1).png";

export default function AuthResturant() {
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
          Authentic Indian Restaurant in San José &amp; Tamarindo, Costa Rica
        </h2>

        <div className="mt-6 flex flex-col gap-4 text-[#2d2d2d]/90">
          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: "var(--font-futura)" }}
          >
            Welcome to Naans &amp; Curries, the best Indian restaurant in Costa Rica,
            offering a wide variety of traditional Indian dishes with bold flavors
            and fresh ingredients. Located in San José and Tamarindo, we serve
            locals and tourists looking for authentic Indian food, whether you
            crave rich curries, tender tandoori, or satisfying vegetarian and
            vegan options. Whether you&apos;re in the mood for spicy butter
            chicken, paneer tikka, or garlic naan fresh from the tandoor, our
            chefs deliver a truly flavorful experience. We also provide Indian
            food catering services across Costa Rica, perfect for weddings,
            corporate events, or private gatherings. Stop by our restaurants or
            order online for quick Indian curry delivery in Costa Rica.
          </p>

          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: "var(--font-futura)" }}
          >
            Discover why our guests say we&apos;re the best Indian restaurant in
            San José. High-quality ethnic ingredients, skillful preparation by
            highly skilled chefs from India, and the process of serving from the
            foundation, but the experience at Naans &amp; Curries is designed to
            extend beyond the plate. The fundamental formula of the Naans &amp;
            Curries dishes is eternal. It consistently works according to the same
            script written centuries ago.
          </p>
        </div>

        <div className="mt-10">
          {/* Double-border button frame */}
          <div className="inline-block rounded-md border border-[#2d2d2d] p-1">
            <Link
              href="#curator"
              className="flex items-center justify-center rounded-sm bg-[#2d2d2d] px-8 py-3 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#3d3d3d]"
              style={{ fontFamily: "var(--font-futura)" }}
            >
              Thoughts of the Curator
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <Image
            src={tripadvisorBadges}
            alt="Tripadvisor Travellers' Choice and Certificate of Excellence awards"
            width={640}
            height={120}
            className="h-auto w-auto max-w-full object-contain object-left md:max-w-[80%]"
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
