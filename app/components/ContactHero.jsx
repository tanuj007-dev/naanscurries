"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";
import heroBg from "./assets/665d311e86f37eac6b33e24c_Photo 1-p-2000.jpg";

export default function ContactHero() {
    const t = useTranslations("Contact");
    const common = useTranslations("Navbar");

    return (
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-6 md:px-12 lg:px-24 overflow-hidden min-h-[60vh] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroBg}
                    alt="Contact Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark overlay to make text pop and match the aesthetic */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
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
                        <span className="text-[#FFF7ED]/30">—</span>
                        <span
                            className="text-[12px] md:text-[14px] font-medium uppercase tracking-[0.2em] text-[#FFF7ED]"
                            style={{ fontFamily: "var(--font-futura)" }}
                        >
                            {t("title")}
                        </span>
                    </div>
                </AnimateOnScroll>

                {/* Heading row */}
                <motion.h1
                    className="text-[40px] sm:text-[56px] md:text-[72px] lg:text-[100px] leading-[1.05] text-[#FFF7ED] font-normal tracking-tight uppercase flex flex-col items-center"
                    style={{ fontFamily: "var(--font-ramillas)" }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                >
                    <span>{t("heroLine1")}</span>
                    <span>{t("heroLine2")}</span>
                </motion.h1>
            </div>
        </section>
    );
}
