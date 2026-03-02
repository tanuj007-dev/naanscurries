"use client";

import Image from "@/src/compat/next-image";
import { motion } from "framer-motion";
import { useTranslations } from "@/src/compat/next-intl";
import AnimateOnScroll from "./AnimateOnScroll";

// Import all blog images
import img1 from "./assets/blogsimg/69314f8f2a074f849ba0c0b6_Rectangle 1530-p-1600.png";
import img2 from "./assets/blogsimg/69355cd071a7628e5798398c_Rectangle 1531 (1)-p-1600.png";
import img3 from "./assets/blogsimg/6931512625107e42cd2ce9ba_Rectangle 1528 (1)-p-1600.png";
import img4 from "./assets/blogsimg/693151b368e87df00632c496_Rectangle 1527 (1)-p-1600.png";
import img5 from "./assets/blogsimg/693151e81644662eb19e4211_Rectangle 1526 (1)-p-1600.png";
import img6 from "./assets/blogsimg/6931542bffbc709a3f5dfa27_Rectangle 1525-p-1600.png";
import img7 from "./assets/blogsimg/69315691a712f43d6372db89_Rectangle 1524 (1)-p-1600.png";
import img8 from "./assets/blogsimg/693157b135d4f2884f23ef1d_Rectangle 1523-p-1600.png";
import img9 from "./assets/blogsimg/693158675d8fb5575ebc88e8_Rectangle 1522 (1)-p-1600.png";

import { Filter, ChevronDown, Search } from "lucide-react";

export default function BlogGrid() {
    const t = useTranslations("Blogs");

    // Map images to the keys in translations
    const gridImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

    return (
        <section className="bg-[#EFEDE7] pb-16 md:pb-24">
            {/* Filtering Toolbar */}
            <AnimateOnScroll variant="fadeIn" delay={0.1}>
                <div className="border-b border-black/10 px-6 md:px-12 lg:px-24 mb-12 md:mb-16">
                    <div className="max-w-7xl mx-auto py-6 md:py-8 flex flex-wrap items-center justify-between gap-6">
                        {/* Left side: Filter Icon and Menus */}
                        <div className="flex items-center gap-8 md:gap-12">
                            <Filter className="w-5 h-5 text-[#1a1a1a]/80 cursor-pointer hover:text-[#1a1a1a] transition-colors" />

                            <div className="flex items-center gap-6 md:gap-10">
                                <button className="flex items-center gap-2 text-[14px] md:text-[15px] font-medium text-[#1a1a1a]/80 hover:text-[#1a1a1a] transition-all group" style={{ fontFamily: "var(--font-futura)" }}>
                                    {t("toolbar.type")}
                                    <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                                </button>

                                <button className="flex items-center gap-2 text-[14px] md:text-[15px] font-medium text-[#1a1a1a]/80 hover:text-[#1a1a1a] transition-all group" style={{ fontFamily: "var(--font-futura)" }}>
                                    {t("toolbar.category")}
                                    <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                                </button>

                                <button className="text-[14px] md:text-[15px] font-medium text-[#1a1a1a]/80 hover:text-[#1a1a1a] transition-all" style={{ fontFamily: "var(--font-futura)" }}>
                                    {t("toolbar.sortBy")}
                                </button>
                            </div>
                        </div>

                        {/* Right side: Entries count and Search */}
                        <div className="flex items-center gap-8 md:gap-12 ml-auto">
                            <span className="text-[14px] md:text-[15px] text-[#1a1a1a]/50" style={{ fontFamily: "var(--font-futura)" }}>
                                {t("toolbar.showing", { count: 14 })}
                            </span>

                            <Search className="w-5 h-5 text-[#1a1a1a]/80 cursor-pointer hover:text-[#1a1a1a] transition-colors" />
                        </div>
                    </div>
                </div>
            </AnimateOnScroll>

            <div className="px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
                    {(() => {
                        const gridItems = t.raw("gridItems");
                        if (!Array.isArray(gridItems)) return null;

                        return gridItems.slice(0, 9).map((item, idx) => (
                            <AnimateOnScroll
                                key={idx}
                                variant="fadeUp"
                                delay={(idx % 3) * 0.1}
                                className="group cursor-pointer"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-4/5 overflow-hidden mb-6">
                                    <Image
                                        src={gridImages[idx]}
                                        alt={item?.title || "Blog Image"}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                {/* Meta Info */}
                                <div className="flex items-center gap-2 mb-3">
                                    <span
                                        className="text-[#1a1a1a] font-bold text-[12px] md:text-[13px] tracking-wide uppercase"
                                        style={{ fontFamily: "var(--font-futura)" }}
                                    >
                                        ({item?.category || "RESTAURANT"})
                                    </span>
                                    <span className="text-[#1a1a1a]/30">â€¢</span>
                                    <span
                                        className="text-[#1a1a1a]/60 text-[12px] md:text-[13px] font-medium"
                                        style={{ fontFamily: "var(--font-futura)" }}
                                    >
                                        {item?.date || "March 09, 2025"}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3
                                    className="text-[20px] md:text-[24px] lg:text-[26px] leading-[1.3] text-[#1a1a1a] font-normal transition-colors group-hover:text-[#FF4136]"
                                    style={{ fontFamily: "var(--font-ramillas)" }}
                                >
                                    {item?.title || ""}
                                </h3>
                            </AnimateOnScroll>
                        ));
                    })()}
                </div>
            </div>
        </section>
    );
}
