"use client";

import Image from "@/src/compat/next-image";
import { useTranslations } from "@/src/compat/next-intl";
import { Link } from "@/src/compat/navigation";
import AnimateOnScroll from "./AnimateOnScroll";



export default function TheSpirit() {
  const t = useTranslations("TheSpirit");
  return (
    <section className="relative flex min-h-[450px] w-full flex-col justify-center overflow-hidden border-[8px] border-[#FFF1DF] bg-[#1a1210] md:min-h-[500px] lg:min-h-[600px]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/djcwt7f6d/image/upload/v1773225703/1508320562_NaansAndCurriesSlider1_mpawt1.jpg"
          alt="Indian dining"
          fill
          className="object-cover object-center md:object-[center_30%]"
          sizes="100vw"
          priority
          quality={90}
        />
        {/* Dynamic Overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent md:from-black/70 md:via-black/20" aria-hidden />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20" aria-hidden />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 mx-auto w-full max-w-8xl px-6 py-12 md:px-12 md:py-20 lg:px-16">
        <AnimateOnScroll variant="slideLeft" duration={0.7}>
          <h2
            className="max-w-3xl text-3xl font-normal uppercase leading-tight text-[#FFF7ED] md:text-4xl lg:text-[72px]"
            style={{ fontFamily: "var(--font-ramillas)" }}
          >
            <span className="block">{t("title1")}</span>
            <span className="block">{t("title2")}</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={0.15} duration={0.6}>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#FFF7ED]/95 md:text-lg">
            {t("description")}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={0.3} duration={0.6}>
          <div className="mt-8">
            <div className="inline-flex rounded-xl border border-[#E89D42] p-1.5 transition-transform duration-300 hover:scale-[1.02]">
              <Link
                href="/reservation"
                className="inline-flex items-center justify-center rounded-lg bg-[#E89D42] px-8 py-3 text-lg font-medium text-[#1c1c1c] transition-opacity duration-200 hover:opacity-90"
                style={{ fontFamily: "var(--font-futura)" }}
              >
                {t("reservation")}
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
