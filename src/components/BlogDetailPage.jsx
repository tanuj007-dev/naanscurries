"use client";

import { useEffect, useState } from "react";
import Image from "@/src/compat/next-image";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "@/src/compat/navigation";
import { useTranslations } from "@/src/compat/next-intl";
import { Helmet } from "react-helmet-async";
import { isWordPressEnabled, getWordPressPostBySlug, getWordPressPosts } from "@/src/api/wordpress";

const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80";

export default function BlogDetailPage() {
    const { slug, locale } = useParams();
    const navigate = useNavigate();
    const t = useTranslations("Blogs");
    const [wpPost, setWpPost] = useState(null);
    const [wpLoading, setWpLoading] = useState(false);
    const [wpRelated, setWpRelated] = useState([]);

    const useWordPress = isWordPressEnabled();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [slug]);

    useEffect(() => {
        if (!useWordPress || !slug) return;
        setWpLoading(true);
        getWordPressPostBySlug(slug)
            .then((post) => {
                setWpPost(post);
                if (post) return getWordPressPosts(5);
                return [];
            })
            .then((posts) => setWpRelated(posts.filter((p) => p.slug !== slug).slice(0, 2)))
            .catch(() => setWpPost(null))
            .finally(() => setWpLoading(false));
    }, [useWordPress, slug]);

    if (!useWordPress || !slug) {
        navigate(`/${locale || "en"}/blog`);
        return null;
    }

    if (wpLoading) {
        return (
            <main className="min-h-screen bg-[#EFEDE7] flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                    <div className="h-10 w-10 rounded-full border-2 border-[#1a1a1a]/20 border-t-[#1a1a1a] animate-spin" aria-label="Loading" />
                    <p className="text-[#1a1a1a]/60 text-sm" style={{ fontFamily: "var(--font-futura)" }}>
                        {t("detail.loading") || "Loading…"}
                    </p>
                </div>
            </main>
        );
    }

    if (!wpPost) {
        navigate(`/${locale || "en"}/blog`);
        return null;
    }

    const item = wpPost;
    const heroImage = item.featuredImageUrl || PLACEHOLDER_IMAGE;

    return (
        <>
            <Helmet>
                <title>{item.title} | Naans & Curries Blog</title>
                <meta name="description" content={item.title} />
            </Helmet>

            <main className="min-h-screen bg-[#EFEDE7]">
                <section className="px-6 md:px-12 lg:px-24 pt-24 md:pt-32 pb-8 md:pb-12">
                    <div className="max-w-7xl mx-auto">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-[14px] md:text-[15px] font-medium text-[#1a1a1a]/80 hover:text-[#1a1a1a] transition-colors mb-8"
                            style={{ fontFamily: "var(--font-futura)" }}
                        >
                            <span aria-hidden>←</span>
                            {t("detail.backToHome")}
                        </Link>

                        <p className="text-[12px] md:text-[13px] font-semibold uppercase tracking-wider text-[#1a1a1a]/70 mb-4" style={{ fontFamily: "var(--font-futura)" }}>
                            {item.dateFormatted} / ({item.category})
                        </p>

                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-[#1a1a1a] font-normal max-w-7xl"
                            style={{ fontFamily: "var(--font-ramillas)" }}
                        >
                            {item.title}
                        </h1>
                    </div>
                </section>

                <section className="w-full px-6 md:px-12 lg:px-24 pb-12 md:pb-16">
                    <div className="max-w-7xl mx-auto relative aspect-21/9 md:aspect-3/1 overflow-hidden rounded-lg">
                        <Image
                            src={heroImage}
                            alt={item.title}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                </section>

                <section className="px-6 md:px-12 lg:px-24 pb-24 md:pb-32">
                    <div className="mx-auto max-w-7xl">
                        {item.content ? (
                            <article
                                className="blog-detail-content text-[#1a1a1a]"
                                style={{ fontFamily: "var(--font-futura)" }}
                                dangerouslySetInnerHTML={{ __html: item.content }}
                            />
                        ) : (
                            <p className="text-[#1a1a1a]/70" style={{ fontFamily: "var(--font-futura)" }}>
                                {t("detail.noContent") || "No content available."}
                            </p>
                        )}
                    </div>
                </section>

                <section className="px-6 md:px-12 lg:px-24 pb-24 md:pb-32 border-t border-[#1a1a1a]/10">
                    <div className="max-w-7xl mx-auto pt-16 md:pt-20">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] font-normal mb-12 md:mb-16" style={{ fontFamily: "var(--font-ramillas)" }}>
                            {t("relatedTitle")}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                            {wpRelated.length > 0 ? (
                                wpRelated.map((related) => (
                                    <Link key={related.slug} href={`/blog/${related.slug}`} className="group block">
                                        <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg mb-4">
                                            <Image
                                                src={related.featuredImageUrl || PLACEHOLDER_IMAGE}
                                                alt={related.title}
                                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <p className="text-[12px] md:text-[13px] font-semibold uppercase tracking-wide text-[#1a1a1a]/70 mb-2" style={{ fontFamily: "var(--font-futura)" }}>
                                            ({related.category}) · {related.dateFormatted}
                                        </p>
                                        <h3 className="text-[20px] md:text-[22px] lg:text-[24px] leading-snug text-[#1a1a1a] font-normal transition-colors group-hover:text-[#FF4136]" style={{ fontFamily: "var(--font-ramillas)" }}>
                                            {related.title}
                                        </h3>
                                    </Link>
                                ))
                            ) : (
                                <p className="col-span-full text-[#1a1a1a]/60" style={{ fontFamily: "var(--font-futura)" }}>
                                    {t("noRelated") || "No related posts."}
                                </p>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
