"use client";

import Image from "@/src/compat/next-image";
import { useTranslations } from "@/src/compat/next-intl";
import { Link } from "@/src/compat/navigation";
import AnimateOnScroll from "./AnimateOnScroll";
import { isWordPressEnabled, useWordPressPosts } from "@/src/api/wordpress";

const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80";

export default function BlogFeatured() {
    const t = useTranslations("Blogs");
    const useWordPress = isWordPressEnabled();
    const { posts: wpPosts, loading: wpLoading } = useWordPressPosts(5);

    const cards = useWordPress && wpPosts.length >= 2
        ? wpPosts.slice(0, 2).map((p) => ({
            id: p.slug,
            slug: p.slug,
            image: p.featuredImageUrl || PLACEHOLDER_IMAGE,
            category: p.category,
            date: p.dateFormatted,
            title: p.title,
            description: p.excerpt || "",
        }))
        : [];

    if (!useWordPress) return null;
    if (!wpLoading && cards.length < 2) return null;

    return (
        <section className="bg-[#EFEDE7] px-6 md:px-12 lg:px-24 border-t border-b border-black/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 md:divide-x md:divide-black/10">
                {wpLoading ? (
                    <div className="col-span-full flex justify-center py-16">
                        <div className="h-10 w-10 rounded-full border-2 border-[#1a1a1a]/20 border-t-[#1a1a1a] animate-spin" aria-label="Loading" />
                    </div>
                ) : (
                    cards.map((card, idx) => (
                        <div key={card.id} className={`${idx === 0 ? 'md:pr-8 lg:pr-10' : 'md:pl-8 lg:pl-10'} py-16 md:py-24`}>
                            <AnimateOnScroll variant="reveal" delay={idx * 0.1}>
                                <Link href={`/blog/${card.slug}`} className="block group relative aspect-8/5 md:aspect-4/3 overflow-hidden rounded-lg cursor-pointer">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-10">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-[#FF4136] font-semibold text-[12px] md:text-[14px] uppercase tracking-wider" style={{ fontFamily: "var(--font-futura)" }}>
                                                ({card.category})
                                            </span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                            <span className="text-white/80 text-[12px] md:text-[14px] font-medium" style={{ fontFamily: "var(--font-futura)" }}>
                                                {card.date}
                                            </span>
                                        </div>

                                        <h2
                                            className="text-white text-2xl md:text-3xl lg:text-4xl leading-tight max-w-[90%]"
                                            style={{ fontFamily: "var(--font-ramillas)" }}
                                        >
                                            {card.title}
                                        </h2>
                                    </div>
                                </Link>
                            </AnimateOnScroll>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}
