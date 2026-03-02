"use client";

import { useTranslations } from "@/src/compat/next-intl";
import AnimateOnScroll from "./AnimateOnScroll";

export default function ContactLocations() {
    const t = useTranslations("Contact");
    const locations = t.raw("locations");

    return (
        <section className="bg-[#FAF7F2] py-16 md:py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Section Heading */}
                <AnimateOnScroll variant="fadeIn">
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#2C2C2C] uppercase mb-12 md:mb-16"
                        style={{ fontFamily: "var(--font-ramillas)" }}
                    >
                        {t("officeLocation")}
                    </h2>
                </AnimateOnScroll>

                {/* Locations Table/List */}
                <div className="flex flex-col border-t border-[#2C2C2C]/10">
                    {locations.map((loc, idx) => (
                        <AnimateOnScroll
                            key={idx}
                            variant="fadeUp"
                            delay={idx * 0.05}
                            className="border-b border-[#2C2C2C]/10 py-6 md:py-8"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-center">
                                {/* Name / Address */}
                                <div className="md:col-span-7">
                                    <h3
                                        className="text-[16px] md:text-[18px] font-normal text-[#2C2C2C] uppercase leading-tight"
                                        style={{ fontFamily: "var(--font-ramillas)" }}
                                    >
                                        {loc.name}
                                    </h3>
                                </div>

                                {/* Contact Info */}
                                <div className="md:col-span-3">
                                    <div
                                        className="text-[14px] leading-relaxed text-[#2C2C2C]/70"
                                        style={{ fontFamily: "var(--font-futura)" }}
                                    >
                                        <p>{loc.phone}</p>
                                    </div>
                                </div>

                                {/* Link */}
                                <div className="md:col-span-2 md:text-right">
                                    <a
                                        href="#"
                                        className="inline-block text-[12px] font-bold uppercase tracking-[0.2em] text-[#2C2C2C] hover:text-[#BE140A] transition-colors relative group"
                                        style={{ fontFamily: "var(--font-futura)" }}
                                    >
                                        {t("getDirections")}
                                        <span className="absolute -bottom-1 left-0 w-full h-px bg-[#2C2C2C] transform origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-300" />
                                    </a>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
