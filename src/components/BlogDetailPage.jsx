"use client";

import { useEffect } from "react";
import Image from "@/src/compat/next-image";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "@/src/compat/navigation";
import { useTranslations } from "@/src/compat/next-intl";
import { Helmet } from "react-helmet-async";
import { Facebook, Instagram, Twitter, Share2 } from "lucide-react";

import img1 from "./assets/blogsimg/69314f8f2a074f849ba0c0b6_Rectangle 1530-p-1600.png";
import img2 from "./assets/blogsimg/69355cd071a7628e5798398c_Rectangle 1531 (1)-p-1600.png";
import img3 from "./assets/blogsimg/6931512625107e42cd2ce9ba_Rectangle 1528 (1)-p-1600.png";
import img4 from "./assets/blogsimg/693151b368e87df00632c496_Rectangle 1527 (1)-p-1600.png";
import img5 from "./assets/blogsimg/693151e81644662eb19e4211_Rectangle 1526 (1)-p-1600.png";
import img6 from "./assets/blogsimg/6931542bffbc709a3f5dfa27_Rectangle 1525-p-1600.png";
import img7 from "./assets/blogsimg/69315691a712f43d6372db89_Rectangle 1524 (1)-p-1600.png";
import img8 from "./assets/blogsimg/693157b135d4f2884f23ef1d_Rectangle 1523-p-1600.png";
import img9 from "./assets/blogsimg/693158675d8fb5575ebc88e8_Rectangle 1522 (1)-p-1600.png";

const gridImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default function BlogDetailPage() {
    const { slug, locale } = useParams();
    const navigate = useNavigate();
    const t = useTranslations("Blogs");

    // Scroll to top when opening this page or when switching to another/related blog
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [slug]);

    const index = parseInt(slug, 10);
    const gridItems = t.raw("gridItems");
    const isValid = !isNaN(index) && index >= 0 && index < 9 && Array.isArray(gridItems) && gridItems[index];
    const item = isValid ? gridItems[index] : null;
    const heroImage = isValid ? gridImages[index] : gridImages[0];

    if (!item) {
        navigate(`/${locale || "en"}/blog`);
        return null;
    }

    return (
        <>
            <Helmet>
                <title>{item.title} | Naans & Curries Blog</title>
                <meta name="description" content={item.title} />
            </Helmet>

            <main className="min-h-screen bg-[#EFEDE7]">
                {/* ── Top section: Back link, date/category, title ── */}
                <section className="px-6 md:px-12 lg:px-24 pt-24 md:pt-32 pb-8 md:pb-12">
                    <div className="max-w-7xl mx-auto">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-[14px] md:text-[15px] font-medium text-[#1a1a1a]/80 hover:text-[#1a1a1a] transition-colors mb-8"
                            style={{ fontFamily: "var(--font-futura)" }}
                        >
                            <span aria-hidden>←</span>
                            {t("detail.backToHome")}
                        </Link>

                        <p className="text-[12px] md:text-[13px] font-semibold uppercase tracking-wider text-[#1a1a1a]/70 mb-4" style={{ fontFamily: "var(--font-futura)" }}>
                            {item.date} / ({item.category})
                        </p>

                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-[#1a1a1a] font-normal max-w-7xl"
                            style={{ fontFamily: "var(--font-ramillas)" }}
                        >
                            {item.title}
                        </h1>
                    </div>
                </section>

                {/* ── Hero image ── */}
                <section className="w-full px-6 md:px-12 lg:px-24 pb-12 md:pb-16">
                    <div className="max-w-7xl mx-auto relative aspect-21/9 md:aspect-3/1 overflow-hidden rounded-lg">
                        <Image
                            src={heroImage}
                            alt={item.title}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                </section>

                {/* ── Content: Share sidebar + body ── */}
                <section className="px-6 md:px-12 lg:px-28 pb-24 md:pb-32">
                   

                        {/* Right: Body content */}
                        <div className="order-1 lg:order-2 max-w-7xl">
                            <p className="text-[15px] md:text-[16px] leading-[1.75] text-[#1a1a1a] mb-6" style={{ fontFamily: "var(--font-futura)" }}>
                                {t("detail.paragraph1")}
                            </p>
                            <p className="text-[15px] md:text-[16px] leading-[1.75] text-[#1a1a1a] mb-10" style={{ fontFamily: "var(--font-futura)" }}>
                                {t("detail.paragraph2")}
                            </p>

                            <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] font-normal mb-6" style={{ fontFamily: "var(--font-ramillas)" }}>
                                {t("detail.subheading1")}
                            </h2>
                            <p className="text-[15px] md:text-[16px] leading-[1.75] text-[#1a1a1a] mb-10" style={{ fontFamily: "var(--font-futura)" }}>
                                {t("detail.paragraph1")}
                            </p>

                            <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] font-normal mb-6" style={{ fontFamily: "var(--font-ramillas)" }}>
                                {t("detail.subheading2")}
                            </h2>
                            <p className="text-[15px] md:text-[16px] leading-[1.75] text-[#1a1a1a] mb-10" style={{ fontFamily: "var(--font-futura)" }}>
                                {t("detail.paragraph3")}
                            </p>

                            {/* In-content image */}
                            <div className="relative aspect-16/10 w-full overflow-hidden rounded-lg my-10">
                                <Image
                                    src={img5}
                                    alt=""
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>

                            <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] font-normal mb-6 mt-12" style={{ fontFamily: "var(--font-ramillas)" }}>
                                {t("detail.subheading3")}
                            </h2>
                            <p className="text-[15px] md:text-[16px] leading-[1.75] text-[#1a1a1a]" style={{ fontFamily: "var(--font-futura)" }}>
                                {t("detail.paragraph3")}
                            </p>
                        </div>
                     
                </section>

                {/* ── More Related Insights ── */}
                <section className="px-6 md:px-12 lg:px-24 pb-24 md:pb-32 border-t border-[#1a1a1a]/10">
                    <div className="max-w-7xl mx-auto pt-16 md:pt-20">
                        <h2
                            className="text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] font-normal mb-12 md:mb-16"
                            style={{ fontFamily: "var(--font-ramillas)" }}
                        >
                            {t("relatedTitle")}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                            {[1, 2].map((offset) => {
                                const relatedIndex = (index + offset) % 9;
                                const related = gridItems[relatedIndex];
                                const relatedImg = gridImages[relatedIndex];
                                return (
                                    <Link
                                        key={relatedIndex}
                                        href={`/blog/${relatedIndex}`}
                                        className="group block"
                                    >
                                        <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg mb-4">
                                            <Image
                                                src={relatedImg}
                                                alt={related.title}
                                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <p className="text-[12px] md:text-[13px] font-semibold uppercase tracking-wide text-[#1a1a1a]/70 mb-2" style={{ fontFamily: "var(--font-futura)" }}>
                                            ({related.category}) · {related.date}
                                        </p>
                                        <h3 className="text-[20px] md:text-[22px] lg:text-[24px] leading-snug text-[#1a1a1a] font-normal transition-colors group-hover:text-[#FF4136]" style={{ fontFamily: "var(--font-ramillas)" }}>
                                            {related.title}
                                        </h3>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
