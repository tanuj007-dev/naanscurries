"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Image from "@/src/compat/next-image";
import { useTranslations } from "@/src/compat/next-intl";
import { Link } from "@/src/compat/navigation";
import AnimateOnScroll from "./AnimateOnScroll";
import { isWordPressEnabled, getWordPressPosts } from "@/src/api/wordpress";
import { Filter, ChevronDown, Search } from "lucide-react";

const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80";

const SORT_OPTIONS = [
    { value: "date-desc", labelKey: "toolbar.sortNewest" },
    { value: "date-asc", labelKey: "toolbar.sortOldest" },
    { value: "title-asc", labelKey: "toolbar.sortTitleAZ" },
    { value: "title-desc", labelKey: "toolbar.sortTitleZA" },
];

function parseDate(dateStr) {
    if (!dateStr) return 0;
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? 0 : d.getTime();
}

export default function BlogGrid() {
    const t = useTranslations("Blogs");
    const [typeFilter, setTypeFilter] = useState("all");
    const [categoryFilter, setCategoryFilter] = useState("all");
    const [sortBy, setSortBy] = useState("date-desc");
    const [searchQuery, setSearchQuery] = useState("");
    const [openDropdown, setOpenDropdown] = useState(null);
    const dropdownRef = useRef(null);

    const [wpPosts, setWpPosts] = useState([]);
    const [wpLoading, setWpLoading] = useState(false);
    const [wpError, setWpError] = useState(null);
    const useWordPress = isWordPressEnabled();

    useEffect(() => {
        if (!useWordPress) return;
        setWpLoading(true);
        setWpError(null);
        getWordPressPosts(50)
            .then(setWpPosts)
            .catch((err) => setWpError(err.message || "Failed to load posts"))
            .finally(() => setWpLoading(false));
    }, [useWordPress]);

    const categories = useMemo(() => {
        const set = new Set(wpPosts.map((item) => item?.category).filter(Boolean));
        return ["all", ...Array.from(set)];
    }, [wpPosts]);

    const filteredAndSorted = useMemo(() => {
        let list = wpPosts.map((item) => ({ ...item }));
        if (categoryFilter && categoryFilter !== "all") {
            list = list.filter((item) => (item.category || "").toLowerCase() === categoryFilter.toLowerCase());
        }
        if (searchQuery.trim()) {
            const q = searchQuery.trim().toLowerCase();
            list = list.filter((item) => (item.title || "").toLowerCase().includes(q) || (item.category || "").toLowerCase().includes(q));
        }
        return [...list].sort((a, b) => {
            switch (sortBy) {
                case "date-desc":
                    return parseDate(b.date) - parseDate(a.date);
                case "date-asc":
                    return parseDate(a.date) - parseDate(b.date);
                case "title-asc":
                    return (a.title || "").localeCompare(b.title || "", undefined, { sensitivity: "base" });
                case "title-desc":
                    return (b.title || "").localeCompare(a.title || "", undefined, { sensitivity: "base" });
                default:
                    return 0;
            }
        });
    }, [wpPosts, categoryFilter, searchQuery, sortBy]);

    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setOpenDropdown(null);
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (!useWordPress) {
        return (
            <section className="bg-[#EFEDE7] pb-16 md:pb-24">
                <div className="px-6 md:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto py-20 text-center">
                        <p className="text-[#1a1a1a]/70 text-lg" style={{ fontFamily: "var(--font-futura)" }}>
                            {t("toolbar.wpNotConfigured") || "Blog is not configured. Set VITE_WORDPRESS_API_URL in .env to load posts from WordPress."}
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-[#EFEDE7] pb-16 md:pb-24">
            <AnimateOnScroll variant="fadeIn" delay={0.1}>
                <div className="border-b border-black/10 px-6 md:px-12 lg:px-24 mb-12 md:mb-16">
                    <div className="max-w-7xl mx-auto py-6 md:py-8 flex flex-wrap items-center justify-between gap-6" ref={dropdownRef}>
                        <div className="flex items-center gap-8 md:gap-12">
                            <Filter className="w-5 h-5 text-[#1a1a1a]/80 shrink-0" aria-hidden />

                            <div className="flex items-center gap-6 md:gap-10 flex-wrap">
                                <div className="relative">
                                    <button
                                        type="button"
                                        onClick={() => setOpenDropdown((v) => (v === "type" ? null : "type"))}
                                        className="flex items-center gap-2 text-[14px] md:text-[15px] font-medium text-[#1a1a1a]/80 hover:text-[#1a1a1a] transition-all group"
                                        style={{ fontFamily: "var(--font-futura)" }}
                                    >
                                        {typeFilter === "all" ? t("toolbar.type") : t("toolbar.typeArticle")}
                                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === "type" ? "rotate-180" : ""}`} />
                                    </button>
                                    {openDropdown === "type" && (
                                        <div className="absolute left-0 top-full mt-2 min-w-[140px] rounded-md border border-black/10 bg-[#FAF7F2] py-1 shadow-lg z-10">
                                            <button type="button" onClick={() => { setTypeFilter("all"); setOpenDropdown(null); }} className={`block w-full px-4 py-2 text-left text-[14px] ${typeFilter === "all" ? "font-semibold text-[#1a1a1a]" : "text-[#1a1a1a]/80 hover:bg-black/5"}`} style={{ fontFamily: "var(--font-futura)" }}>{t("toolbar.allTypes")}</button>
                                            <button type="button" onClick={() => { setTypeFilter("article"); setOpenDropdown(null); }} className={`block w-full px-4 py-2 text-left text-[14px] ${typeFilter === "article" ? "font-semibold text-[#1a1a1a]" : "text-[#1a1a1a]/80 hover:bg-black/5"}`} style={{ fontFamily: "var(--font-futura)" }}>{t("toolbar.typeArticle")}</button>
                                        </div>
                                    )}
                                </div>

                                <div className="relative">
                                    <button
                                        type="button"
                                        onClick={() => setOpenDropdown((v) => (v === "category" ? null : "category"))}
                                        className="flex items-center gap-2 text-[14px] md:text-[15px] font-medium text-[#1a1a1a]/80 hover:text-[#1a1a1a] transition-all group"
                                        style={{ fontFamily: "var(--font-futura)" }}
                                    >
                                        {categoryFilter === "all" ? t("toolbar.category") : categoryFilter}
                                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === "category" ? "rotate-180" : ""}`} />
                                    </button>
                                    {openDropdown === "category" && (
                                        <div className="absolute left-0 top-full mt-2 min-w-[160px] rounded-md border border-black/10 bg-[#FAF7F2] py-1 shadow-lg z-10">
                                            {categories.map((cat) => (
                                                <button
                                                    key={cat}
                                                    type="button"
                                                    onClick={() => {
                                                        setCategoryFilter(cat);
                                                        setOpenDropdown(null);
                                                    }}
                                                    className={`block w-full px-4 py-2 text-left text-[14px] ${categoryFilter === cat ? "font-semibold text-[#1a1a1a]" : "text-[#1a1a1a]/80 hover:bg-black/5"}`}
                                                    style={{ fontFamily: "var(--font-futura)" }}
                                                >
                                                    {cat === "all" ? t("toolbar.allCategories") : cat}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="relative">
                                    <button
                                        type="button"
                                        onClick={() => setOpenDropdown((v) => (v === "sort" ? null : "sort"))}
                                        className="flex items-center gap-2 text-[14px] md:text-[15px] font-medium text-[#1a1a1a]/80 hover:text-[#1a1a1a] transition-all group"
                                        style={{ fontFamily: "var(--font-futura)" }}
                                    >
                                        {t("toolbar.sortBy")}
                                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === "sort" ? "rotate-180" : ""}`} />
                                    </button>
                                    {openDropdown === "sort" && (
                                        <div className="absolute left-0 top-full mt-2 min-w-[180px] rounded-md border border-black/10 bg-[#FAF7F2] py-1 shadow-lg z-10">
                                            {SORT_OPTIONS.map((opt) => (
                                                <button
                                                    key={opt.value}
                                                    type="button"
                                                    onClick={() => {
                                                        setSortBy(opt.value);
                                                        setOpenDropdown(null);
                                                    }}
                                                    className={`block w-full px-4 py-2 text-left text-[14px] ${sortBy === opt.value ? "font-semibold text-[#1a1a1a]" : "text-[#1a1a1a]/80 hover:bg-black/5"}`}
                                                    style={{ fontFamily: "var(--font-futura)" }}
                                                >
                                                    {t(opt.labelKey)}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 md:gap-8 ml-auto flex-wrap">
                            <span className="text-[14px] md:text-[15px] text-[#1a1a1a]/50 whitespace-nowrap" style={{ fontFamily: "var(--font-futura)" }}>
                                {t("toolbar.showing", { count: filteredAndSorted.length })}
                            </span>
                            <div className="flex items-center gap-2 border-b border-[#1a1a1a]/20 pb-1 min-w-[140px] md:min-w-[180px]">
                                <Search className="w-4 h-4 text-[#1a1a1a]/50 shrink-0" aria-hidden />
                                <input
                                    type="search"
                                    placeholder={t("toolbar.searchPlaceholder")}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-transparent text-[14px] text-[#1a1a1a] placeholder:text-[#1a1a1a]/40 outline-none"
                                    style={{ fontFamily: "var(--font-futura)" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </AnimateOnScroll>

            <div className="px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
                    {wpLoading ? (
                        <div className="col-span-full flex items-center justify-center py-20">
                            <div className="flex flex-col items-center gap-3">
                                <div className="h-10 w-10 rounded-full border-2 border-[#1a1a1a]/20 border-t-[#1a1a1a] animate-spin" aria-label="Loading" />
                                <p className="text-[#1a1a1a]/60 text-sm" style={{ fontFamily: "var(--font-futura)" }}>
                                    {t("toolbar.loading") || "Loading posts…"}
                                </p>
                            </div>
                        </div>
                    ) : wpError ? (
                        <p className="col-span-full text-center text-red-600/90 py-12" style={{ fontFamily: "var(--font-futura)" }}>
                            {wpError}
                        </p>
                    ) : filteredAndSorted.length === 0 ? (
                        <p className="col-span-full text-center text-[#1a1a1a]/60 py-12" style={{ fontFamily: "var(--font-futura)" }}>
                            {t("toolbar.noResults")}
                        </p>
                    ) : (
                        filteredAndSorted.map((item, listIdx) => (
                            <AnimateOnScroll
                                key={item.slug}
                                variant="fadeUp"
                                delay={(listIdx % 3) * 0.1}
                                className="group"
                            >
                                <Link href={`/blog/${item.slug}`} className="block cursor-pointer">
                                    <div className="relative aspect-4/5 w-full overflow-hidden rounded-lg mb-6">
                                        <Image
                                            src={item.featuredImageUrl || PLACEHOLDER_IMAGE}
                                            alt={item?.title || "Blog"}
                                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                        />
                                    </div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-[#1a1a1a] font-bold text-[12px] md:text-[13px] tracking-wide uppercase" style={{ fontFamily: "var(--font-futura)" }}>
                                            ({item?.category || "Blog"})
                                        </span>
                                        <span className="text-[#1a1a1a]/30">•</span>
                                        <span className="text-[#1a1a1a]/60 text-[12px] md:text-[13px] font-medium" style={{ fontFamily: "var(--font-futura)" }}>
                                            {item?.dateFormatted || ""}
                                        </span>
                                    </div>
                                    <h3 className="text-[20px] md:text-[24px] lg:text-[26px] leading-[1.3] text-[#1a1a1a] font-normal transition-colors" style={{ fontFamily: "var(--font-ramillas)" }}>
                                        {item?.title || ""}
                                    </h3>
                                </Link>
                            </AnimateOnScroll>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
