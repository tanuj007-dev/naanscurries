"use client";

import Image from "@/src/compat/next-image";
import { useTranslations } from "@/src/compat/next-intl";
import AnimateOnScroll from "./AnimateOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



const NAV_PREV = "catering-swiper-prev";
const NAV_NEXT = "catering-swiper-next";

export default function Catering() {
  const t = useTranslations("Catering");

  const locations = [
    { image: "https://res.cloudinary.com/dpelqhchv/image/upload/v1773142397/1_1_xdr4cy.webp", alt: t("lindoraTitle"), title: t("lindoraTitle"), description: t("lindoraDesc") },
    { image: "https://res.cloudinary.com/dpelqhchv/image/upload/v1773142397/5_vestpb.webp", alt: t("pinaresTitle"), title: t("pinaresTitle"), description: t("pinaresDesc") },
    { image: "https://res.cloudinary.com/dpelqhchv/image/upload/v1773142398/3_bydekl.webp", alt: t("lincolnTitle"), title: t("lincolnTitle"), description: t("lincolnDesc") },
    { image: "https://res.cloudinary.com/dpelqhchv/image/upload/v1773142398/4_iuumjq.webp", alt: t("nunciaturaTitle"), title: t("nunciaturaTitle"), description: t("nunciaturaDesc") },
    { image: "https://res.cloudinary.com/dpelqhchv/image/upload/v1773142398/7_ajja0a.webp", alt: t("tamarindoTitle"), title: t("tamarindoTitle"), description: t("tamarindoDesc") },
    { image: "https://res.cloudinary.com/dpelqhchv/image/upload/v1773142398/2_x8agcv.webp", alt: t("cocoTitle"), title: t("cocoTitle"), description: t("cocoDesc") },
    { image: "https://res.cloudinary.com/dpelqhchv/image/upload/v1773142510/8_ofdrk1.webp", alt: t("jacoTitle"), title: t("jacoTitle"), description: t("jacoDesc") },
  ];

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
              <span className="block text-2xl">{t("cateringThe")}</span>
              <span className="block">{t("naansWay")}</span>
            </h2>
            <div
              className="mt-4 flex gap-4 text-[10px] uppercase tracking-widest text-[#2D2D2D]/90 font-medium"
              style={{ fontFamily: "var(--font-ramillas)" }}
            >
              <span>{t("exceptionalFood")}</span>
              <span>•</span>
              <span>{t("anywhere")}</span>
            </div>
          </div>

          {/* Desktop Header (Row) */}
          <div className="hidden w-full max-w-5xl items-center justify-between md:flex">

            <div className="flex-1 text-right">
              <span
                className="text-sm uppercase tracking-widest text-[#2D2D2D]/80 font-semibold"
                style={{ fontFamily: "var(--font-ramillas)" }}
              >
                {t("exceptionalFood")}
              </span>
            </div>

            <div className="mx-8 flex flex-col items-center text-center lg:mx-12">
              <h2
                className="flex flex-col items-center text-[#2D2D2D]"
                style={{ fontFamily: "var(--font-ramillas)" }}
              >
                <span className="text-3xl uppercase leading-none lg:text-4xl">{t("cateringThe")}</span>
                <span className="mt-1 text-4xl uppercase leading-none lg:text-5xl">{t("naansWay")}</span>
              </h2>
            </div>

            <div className="flex-1 text-left">
              <span
                className="text-sm uppercase tracking-widest text-[#2D2D2D]/80 font-semibold"
                style={{ fontFamily: "var(--font-ramillas)" }}
              >
                {t("anywhere")}
              </span>
            </div>
          </div>

        </AnimateOnScroll>

        {/* Places Slider */}
        <AnimateOnScroll variant="fadeUp" duration={0.6} delay={0.2} className="mt-10 md:mt-20">
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={24}
              slidesPerView={1}
              slidesPerGroup={1}
              breakpoints={{
                640: { slidesPerView: 2, slidesPerGroup: 2 },
                1024: { slidesPerView: 3, slidesPerGroup: 3 },
              }}
              navigation={{
                prevEl: `.${NAV_PREV}`,
                nextEl: `.${NAV_NEXT}`,
              }}
              pagination={{ clickable: true }}
              className="overflow-visible pb-12 md:pb-0"
            >
              {locations.map((loc, i) => (
                <SwiperSlide key={`${loc.title}-${i}`}>
                  <div className="flex flex-col items-start h-full">
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
                      <Image
                        src={loc.image}
                        alt={loc.alt}
                        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={85}
                      />
                    </div>
                    <div className="mt-6 flex flex-col items-start text-left flex-1">
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
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom navigation buttons */}
            <button
              type="button"
              aria-label="Previous locations"
              className={`${NAV_PREV} absolute left-0 top-[calc(50%-3rem)] z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#2D2D2D]/30 bg-[#E5DDD0] text-[#2D2D2D] transition-colors hover:border-[#2D2D2D] hover:bg-[#2D2D2D] hover:text-white md:flex`}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next locations"
              className={`${NAV_NEXT} absolute right-0 top-[calc(50%-3rem)] z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#2D2D2D]/30 bg-[#E5DDD0] text-[#2D2D2D] transition-colors hover:border-[#2D2D2D] hover:bg-[#2D2D2D] hover:text-white md:flex`}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Space for Swiper's default pagination bullets */}
        </AnimateOnScroll>

      </div>
      <style jsx global>{`
        .swiper-pagination {
          display: flex !important;
          justify-content: center;
          gap: 8px;
          bottom: -12px !important;
        }
        @media (min-width: 768px) {
          .swiper-pagination {
            display: none !important;
          }
        }
        .swiper-pagination-bullet {
          background: #000 !important;
          opacity: 0.2;
          width: 8px;
          height: 8px;
          margin: 0 !important;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
