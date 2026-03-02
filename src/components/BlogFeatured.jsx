"use client";

import Image from "@/src/compat/next-image";
import { motion } from "framer-motion";
import { useTranslations } from "@/src/compat/next-intl";
import AnimateOnScroll from "./AnimateOnScroll";
import img1 from "./assets/69314e3ecbf9420b489d87e8_Rectangle 1531.png";
import img2 from "./assets/69314f29abd5b5a172edf491_Rectangle 1529 (1).png";

export default function BlogFeatured() {
    const t = useTranslations("Blogs");

    const cards = [
        {
            id: "large",
            image: img1,
            category: t("featuredLarge.category"),
            date: t("featuredLarge.date"),
            title: t("featuredLarge.title"),
            description: t("featuredLarge.description"),
        },
        {
            id: "small",
            image: img2,
            category: t("featuredSmall.category"),
            date: t("featuredSmall.date"),
            title: t("featuredSmall.title"),
            description: t("featuredSmall.description"),
        },
    ];

    return (
        <section className="bg-[#EFEDE7] px-6 md:px-12 lg:px-24 border-t border-b border-black/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 md:divide-x md:divide-black/10">
                {cards.map((card, idx) => (
                    <div key={card.id} className={`${idx === 0 ? 'md:pr-8 lg:pr-10' : 'md:pl-8 lg:pl-10'} py-16 md:py-24`}>
                        <AnimateOnScroll variant="reveal" delay={idx * 0.1}>
                            <div className="group relative aspect-16/10 md:aspect-4/3 overflow-hidden cursor-pointer">
                                {/* Image Background */}
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Dark Gradient Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                                {/* Content Overlaid at the Bottom */}
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
                            </div>
                        </AnimateOnScroll>
                    </div>
                ))}
            </div>
        </section>
    );
}
