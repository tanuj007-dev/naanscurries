"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useInView } from "@/hooks/useInView";

const defaultImageSrc = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80";

export default function AboutSection() {
  const t = useTranslations("About");
  const [ref, isInView] = useInView({ threshold: 0.15, rootMargin: "0px 0px -60px 0px" });

  const transitionClass = "duration-700 ease-out";
  const textOpacity = isInView ? "opacity-100" : "opacity-0";
  const textTranslate = isInView ? "translate-x-0" : "-translate-x-12";
  const imageOpacity = isInView ? "opacity-100" : "opacity-0";
  const imageTranslate = isInView ? "translate-x-0" : "translate-x-12";

  return (
    <section
      ref={ref}
      className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:gap-16 md:py-24"
      aria-labelledby="about-heading"
    >
      <div
        className={`transition-all ${transitionClass} ${textOpacity} ${textTranslate} will-change-[transform,opacity]`}
      >
        <h2 id="about-heading" className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
          {t("ourStory")}
        </h2>
        <p className="mb-4 text-foreground/85 leading-relaxed">
          {t("ourStoryP1")}
        </p>
        <p className="text-foreground/85 leading-relaxed">
          {t("ourStoryP2")}
        </p>
      </div>
      <div
        className={`relative aspect-4/3 overflow-hidden rounded-lg transition-all ${transitionClass} ${imageOpacity} ${imageTranslate} will-change-[transform,opacity] md:aspect-3/2`}
      >
        <Image
          src={defaultImageSrc}
          alt="Restaurant interior or team"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={false}
        />
      </div>
    </section>
  );
}
