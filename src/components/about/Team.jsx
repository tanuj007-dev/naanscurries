"use client";

import Image from "@/src/compat/next-image";
import { useTranslations } from "@/src/compat/next-intl";
import { motion } from "framer-motion";
import { Facebook } from "lucide-react";
import AnimateOnScroll from "@/src/components/AnimateOnScroll";

// Team member images
import member1 from "@/src/components/assets/666002fc5dcc333c0946b9f7_Chef 10-p-500.jpg";
import member2 from "@/src/components/assets/666002fd7a3a770e9edb378a_Chef 11-p-500.jpg";
import member3 from "@/src/components/assets/666002fef2c94603ece07c42_Chef 12-p-500.jpg";

export default function Team() {
    const t = useTranslations("About"); 

    const team = [
        { name: t("teamMember2"), role: t("teamRole2"), image: member1, showSocial: false },
        { name: t("teamMember1"), role: t("teamRole1"), image: member2, showSocial: true },
        { name: t("teamMember3"), role: t("teamRole3"), image: member3, showSocial: false },
    ];

    return (
        <section className="relative bg-[#DCD6CE] py-24 lg:py-32 overflow-hidden">
            {/* Background vertical lines */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
                <div className="max-w-7xl mx-auto h-full grid grid-cols-4 lg:grid-cols-6 px-6">
                    {[...Array(7)].map((_, i) => (
                        <div key={i} className="border-r border-black" />
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Header Content */}
                <div className="mb-20">
                    <AnimateOnScroll variant="fadeUp" duration={0.8}>
                        <h2
                            className="text-[40px] md:text-[48px] lg:text-[56px] leading-[1.1] text-[#1A1A1A] mb-12 max-w-3xl font-medium"
                            style={{ fontFamily: "var(--font-ramillas)" }}
                        >
                            {t("teamHeading")}
                        </h2>
                    </AnimateOnScroll>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                        <AnimateOnScroll variant="fadeUp" delay={0.2} duration={0.8}>
                            <p
                                className="text-[15px] md:text-[16px] leading-relaxed text-[#1A1A1A]/70"
                                style={{ fontFamily: "var(--font-futura)" }}
                            >
                                {t("teamDesc1")}
                            </p>
                        </AnimateOnScroll>
                        <AnimateOnScroll variant="fadeUp" delay={0.3} duration={0.8}>
                            <p
                                className="text-[15px] md:text-[16px] leading-relaxed text-[#1A1A1A]/70"
                                style={{ fontFamily: "var(--font-futura)" }}
                            >
                                {t("teamDesc2")}
                            </p>
                        </AnimateOnScroll>
                    </div>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <AnimateOnScroll
                            key={index}
                            variant="reveal"
                            delay={index * 0.2}
                            duration={1}
                            className="relative group cursor-pointer"
                        >
                            <div className="relative aspect-4/5 overflow-hidden grayscale contrast-[1.1] transition-all duration-700 group-hover:grayscale-0">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                                />

                                {/* Overlay Content */}
                                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex items-center justify-between gap-4">
                                        <div>
                                            <h3 className="text-white text-xl font-medium leading-none mb-1" style={{ fontFamily: "var(--font-ramillas)" }}>
                                                {member.name}
                                            </h3>
                                            <p className="text-white/70 text-sm uppercase tracking-wider" style={{ fontFamily: "var(--font-futura)" }}>
                                                {member.role}
                                            </p>
                                        </div>
                                        {member.showSocial && (
                                            <div className="h-10 w-10 bg-[#FF8B53] rounded-full flex items-center justify-center text-black">
                                                <Facebook size={18} fill="currentColor" stroke="none" />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Persistent text for middle one as per screenshot */}
                                {(member.showSocial || index === 1) && (
                                    <div className="absolute bottom-10 left-8 md:left-10 group-hover:opacity-0 transition-opacity duration-300">
                                        <h3 className="text-white text-xl font-medium leading-none mb-1" style={{ fontFamily: "var(--font-ramillas)" }}>
                                            {member.name}
                                        </h3>
                                        <p className="text-white/70 text-sm uppercase tracking-wider" style={{ fontFamily: "var(--font-futura)" }}>
                                            {member.role}
                                        </p>
                                    </div>
                                )}
                                {member.showSocial && (
                                    <div className="absolute bottom-10 right-8 md:right-10 h-10 w-10 bg-[#FF8B53] rounded-full flex items-center justify-center text-black group-hover:opacity-0 transition-opacity duration-300">
                                        <Facebook size={18} fill="currentColor" stroke="none" />
                                    </div>
                                )}
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
