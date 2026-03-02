"use client";

import Image from "@/src/compat/next-image";
import { useTranslations } from "@/src/compat/next-intl";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimateOnScroll from "@/src/components/AnimateOnScroll";

// Import Menu Hero Image
import menuHeroBg from "@/src/components/assets/66df5f33a7f75b5e8c4bff8e_pexels-fidel-2814828.webp";

export default function MenuHero() {
    const t = useTranslations("Menu");
    const common = useTranslations("Navbar");

    return (
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-6 md:px-12 lg:px-24 overflow-hidden min-h-[60vh] flex items-center justify-center text-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={menuHeroBg}
                    alt="Menu Background"
                    fill
                    priority
                    className="object-cover"
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/60 z-10" />
            </div>

            <div className="relative z-20 max-w-4xl mx-auto">
                {/* Breadcrumb row */}
                <AnimateOnScroll variant="fadeIn" delay={0.2}>
                    <div className="flex items-center justify-center gap-3 mb-8 md:mb-12">
                        <Link
                            href="/"
                            className="text-[12px] md:text-[14px] font-medium uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
                            style={{ fontFamily: "var(--font-futura)" }}
                        >
                            {common("home")}
                        </Link>
                        <span className="text-white/30">â€”</span>
                        <span
                            className="text-[12px] md:text-[14px] font-medium uppercase tracking-[0.2em] text-white"
                            style={{ fontFamily: "var(--font-futura)" }}
                        >
                            {common("menu")}
                        </span>
                    </div>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fadeUp" duration={1}>
                    <h1
                        className="text-[48px] md:text-[72px] lg:text-[100px] leading-none text-white mb-8 font-normal"
                        style={{ fontFamily: "var(--font-ramillas)" }}
                    >
                        {t("heroTitle")}
                    </h1>
                </AnimateOnScroll>

                <AnimateOnScroll variant="fadeUp" delay={0.3} duration={1}>
                    <p
                        className="text-[16px] md:text-[18px] lg:text-[22px] leading-relaxed text-white/90 max-w-4xl mx-auto"
                        style={{ fontFamily: "var(--font-futura)" }}
                    >
                        {t("heroDescription")}
                    </p>
                </AnimateOnScroll>
            </div>
        </section>
    );
}
