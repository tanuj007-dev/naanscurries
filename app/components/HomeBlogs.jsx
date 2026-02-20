"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import AnimateOnScroll from "./AnimateOnScroll";

import imgBlog1 from "./assets/6176b32ee97e494d40468191567022c0bf2c6e83.png";
import imgBlog2 from "./assets/8902b192982736cc227423a7f0c1478803c911b7.png";

const blogConfig = [
  { image: imgBlog1, titleKey: "blog1Title", introKey: "blog1Intro", href: "#blog-vegan" },
  { image: imgBlog2, titleKey: "blog2Title", introKey: "blog2Intro", href: "#blog-street-food" },
  { image: imgBlog1, titleKey: "blog3Title", introKey: "blog3Intro", href: "#blog-spices" },
];

export default function HomeBlogs() {
  const t = useTranslations("HomeBlogs");
  const blogPosts = blogConfig.map((p) => ({
    ...p,
    alt: t(p.titleKey),
    title: t(p.titleKey),
    intro: t(p.introKey),
  }));
  return (
    <section className="w-full bg-[#FFF7ED] px-6 py-16 md:px-10 md:py-20 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <AnimateOnScroll variant="fadeUp" duration={0.6}>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <h2
              className="max-w-md text-4xl uppercase leading-none text-[#2d2d2d] md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-ramillas)" }}
            >
              <span className="block">{t("latestBlog")}</span>
              <span className="block">{t("articles")}</span>
            </h2>

            <div className="hidden md:block">
              <div className="inline-block rounded-md border border-[#2d2d2d] p-1">
                <Link
                  href="#blog"
                  className="flex items-center justify-center rounded-sm bg-[#2d2d2d] px-8 py-2.5 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#3d3d3d]"
                  style={{ fontFamily: "var(--font-futura)" }}
                >
                  {t("viewAll")}
                </Link>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Blog Grid - Updated to 3 columns on large screens */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-12">
          {blogPosts.map((post, i) => (
            <AnimateOnScroll
              key={post.title}
              variant="fadeUp"
              delay={i * 0.15}
              duration={0.6}
              className="flex flex-col items-start"
            >
              {/* Image Card */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gray-200">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  quality={85}
                />
              </div>

              {/* Content */}
              <h3
                className="mt-6 text-xl font-normal leading-tight text-[#2d2d2d] md:text-2xl"
                style={{ fontFamily: "var(--font-ramillas)" }}
              >
                {post.title}
              </h3>

              <p
                className="mt-3 text-sm leading-relaxed text-[#2d2d2d]/80 line-clamp-3"
                style={{ fontFamily: "var(--font-futura)" }}
              >
                {post.intro}
              </p>

              <Link
                href={post.href}
                className="mt-4 inline-flex items-center text-sm font-medium text-[#E89D42] transition-colors duration-200 hover:text-[#c48231]"
                style={{ fontFamily: "var(--font-ramillas)" }}
              >
                {t("readMore")}
                <span className="ml-1 text-lg leading-none">→</span>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <div className="inline-block w-full rounded-md border border-[#2d2d2d] p-1">
            <Link
              href="#blog"
              className="flex w-full items-center justify-center rounded-sm bg-[#2d2d2d] py-3 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#3d3d3d]"
              style={{ fontFamily: "var(--font-futura)" }}
            >
              {t("viewAll")}
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
