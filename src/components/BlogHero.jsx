"use client";

import Image from "@/src/compat/next-image";
import { motion } from "framer-motion";
import { useTranslations } from "@/src/compat/next-intl";
import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";
import heroBg from "./assets/blogsimg/665fc45f9853a90e11d0298e_Photo 1-p-2000.jpg";

export default function BlogHero() {
    const t = useTranslations("Blogs");
    const common = useTranslations("Navbar");

    return (
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-6 md:px-12 lg:px-24 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroBg}
                    alt="Blog Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Subtle light overlay to match the premium theme */}
                <div className="absolute inset-0 bg-[#111111]/60 " />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto text-center">
                {/* Breadcrumb row */}
                <AnimateOnScroll variant="fadeIn" delay={0.2}>
                    <div className="flex items-center justify-center gap-3 mb-8 md:mb-12">
                        <Link
                            href="/"
                            className="text-[12px] md:text-[14px] font-medium uppercase tracking-[0.2em] text-[#FFF7ED]/60 hover:text-[#FFF7ED] transition-colors"
                            style={{ fontFamily: "var(--font-futura)" }}
                        >
                            {common("home")}
                        </Link>
                        <span className="text-[#FFF7ED]/30">â€”</span>
                        <span
                            className="text-[12px] md:text-[14px] font-medium uppercase tracking-[0.2em] text-[#FFF7ED]"
                            style={{ fontFamily: "var(--font-futura)" }}
                        >
                            {t("ourBlogs")}
                        </span>
                    </div>
                </AnimateOnScroll>

                {/* Heading row */}
                <motion.h1
                    className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px] leading-[1.1] text-[#FFF7ED] font-normal"
                    style={{ fontFamily: "var(--font-ramillas)" }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                >
                    {t("latestInsights")}
                </motion.h1>
            </div>
        </section>
    );
}
