"use client";

import Image from "@/src/compat/next-image";
import { useTranslations } from "@/src/compat/next-intl";
import { Link } from "@/src/compat/navigation";
import AnimateOnScroll from "./AnimateOnScroll";
import { isWordPressEnabled, useWordPressPosts } from "@/src/api/wordpress";

const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80";

function clampWords(text, maxWords) {
  const clean = String(text || "").replace(/\s+/g, " ").trim();
  if (!clean) return "";
  const words = clean.split(" ");
  if (words.length <= maxWords) return clean;
  return words.slice(0, maxWords).join(" ") + "…";
}

export default function HomeBlogs() {
  const t = useTranslations("HomeBlogs");
  const useWordPress = isWordPressEnabled();
  const { posts: wpPosts, loading: wpLoading } = useWordPressPosts(10);

  const blogPosts = useWordPress && wpPosts.length > 0
    ? wpPosts.slice(0, 3).map((p) => ({
        image: p.featuredImageUrl || PLACEHOLDER_IMAGE,
        alt: p.title,
        title: p.title,
        intro: p.excerpt || "",
        slug: p.slug,
      }))
    : [];

  if (!useWordPress || blogPosts.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-[#FFF7ED] px-6 py-16 md:px-10 md:py-20 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-7xl">

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
                  href="/blog"
                  className="flex items-center justify-center rounded-sm bg-[#2d2d2d] px-8 py-2.5 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#3d3d3d]"
                  style={{ fontFamily: "var(--font-futura)" }}
                >
                  {t("viewAll")}
                </Link>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {wpLoading ? (
          <div className="mt-12 flex justify-center py-12">
            <div className="h-8 w-8 rounded-full border-2 border-[#2d2d2d]/20 border-t-[#2d2d2d] animate-spin" aria-label="Loading" />
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-12">
            {blogPosts.map((post, i) => (
              <AnimateOnScroll
                key={post.slug}
                variant="fadeUp"
                delay={i * 0.15}
                duration={0.6}
                className="flex h-full flex-col items-start"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-gray-200">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    quality={85}
                  />
                </div>

                <h3
                  className="mt-6 text-xl font-normal leading-tight text-[#2d2d2d] md:text-2xl line-clamp-2 min-h-[2.6em]"
                  style={{ fontFamily: "var(--font-ramillas)" }}
                >
                  {post.title}
                </h3>

                <p
                  className="mt-3 text-sm leading-relaxed text-[#2d2d2d]/80 line-clamp-3 min-h-[4.5em]"
                  style={{ fontFamily: "var(--font-futura)" }}
                >
                  {clampWords(post.intro, 22)}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm font-medium text-[#E89D42] transition-colors duration-200 hover:text-[#c48231] mt-auto pt-4"
                  style={{ fontFamily: "var(--font-ramillas)" }}
                >
                  {t("readMore")}
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        )}

        <div className="mt-10 md:hidden">
          <div className="inline-block w-full rounded-md border border-[#2d2d2d] p-1">
            <Link
              href="/blog"
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
