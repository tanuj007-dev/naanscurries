"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import AnimateOnScroll from "./AnimateOnScroll";
import chefImg from "./assets/6814ab7c116be14a9b9f6e80_5e203041ac405c8fe66abe099ac1f5b1_single-img-13.avif";

// ─── Sub-Components ────────────────────────────────────────────────────────
function FieldWrapper({ label, children }) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-[12px] font-bold uppercase tracking-wider text-[#2C2C2C]" style={{ fontFamily: "var(--font-futura)" }}>
                {label}
            </label>
            {children}
        </div>
    );
}

function GoldDivider() {
    return (
        <div className="my-4 flex items-center justify-start gap-2">
            <div className="h-px w-8 bg-[#2C2C2C]/20" />
            <div className="flex items-center gap-1">
                <div className="h-1.5 w-1.5 rotate-45 border border-[#2C2C2C]/40" />
                <div className="h-2 w-2 rotate-45 bg-[#2C2C2C]/60" />
                <div className="h-1.5 w-1.5 rotate-45 border border-[#2C2C2C]/40" />
            </div>
            <div className="h-px w-8 bg-[#2C2C2C]/20" />
        </div>
    );
}

const inputClasses =
    "w-full rounded-none border border-[#2C2C2C]/30 bg-[#FAF7F2] px-4 py-3 text-[14px] text-[#2C2C2C] outline-none transition-all duration-300 font-futura placeholder:text-[#2C2C2C]/40 focus:border-[#2C2C2C]";

// ─── Main Component ─────────────────────────────────────────────────────────
export default function ContactForm() {
    const t = useTranslations("Contact");

    return (
        <section className="bg-[#E5DDD0] py-20 md:py-32 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-stretch">

                    {/* Left Side: Image */}
                    <div className="lg:col-span-5 h-[400px] lg:h-auto relative overflow-hidden">
                        <AnimateOnScroll variant="reveal" className="h-full">
                            <Image
                                src={chefImg}
                                alt="Our Chef"
                                fill
                                className="object-cover"
                            />
                        </AnimateOnScroll>
                    </div>

                    {/* Right Side: Form Content */}
                    <div className="lg:col-span-7 bg-[#FAF7F2] p-8 md:p-12 lg:p-20 flex flex-col justify-center">
                        <AnimateOnScroll variant="fadeIn" delay={0.2}>
                            <div className="text-left mb-12">
                                <p className="text-[14px] font-bold uppercase tracking-[0.4em] text-[#2C2C2C]" style={{ fontFamily: "var(--font-futura)" }}>
                                    {t("formSubtitle")}
                                </p>
                                <GoldDivider />
                                <h2 className="mt-4 text-xl md:text-2xl font-normal text-[#2C2C2C] leading-tight" style={{ fontFamily: "var(--font-ramillas)" }}>
                                    {t("formTitle")}
                                </h2>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FieldWrapper label={t("namePlaceholder")}>
                                        <input
                                            type="text"
                                            placeholder={t("namePlaceholder")}
                                            className={inputClasses}
                                        />
                                    </FieldWrapper>
                                    <FieldWrapper label={t("phonePlaceholder")}>
                                        <input
                                            type="tel"
                                            placeholder={t("phonePlaceholder")}
                                            className={inputClasses}
                                        />
                                    </FieldWrapper>
                                </div>

                                <FieldWrapper label={t("emailPlaceholder")}>
                                    <input
                                        type="email"
                                        placeholder={t("emailPlaceholder")}
                                        className={inputClasses}
                                    />
                                </FieldWrapper>

                                <FieldWrapper label={t("messagePlaceholder")}>
                                    <textarea
                                        placeholder={t("messagePlaceholder")}
                                        rows={4}
                                        className={`${inputClasses} resize-none`}
                                    />
                                </FieldWrapper>

                                <div className="flex flex-col items-center pt-8">
                                    <div className="border border-[#2C2C2C] rounded-sm p-1.5 flex transition-transform duration-300 hover:scale-[1.02]">
                                        <motion.button
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            className="rounded-sm bg-[#2C2C2C] px-14 py-4 text-[12px] font-bold uppercase tracking-[0.3em] cursor-pointer"
                                            style={{ fontFamily: "var(--font-futura)" }}
                                        >
                                            {t("sendButton")}
                                        </motion.button>
                                    </div>
                                </div>
                            </form>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
}
