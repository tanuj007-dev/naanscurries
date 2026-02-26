"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import AnimateOnScroll from "@/app/components/AnimateOnScroll";

// Import images
import breakfastImg from "@/app/components/assets/665f1378463f94bcdea9a76d_Menu - Photo 6-p-800.jpg";
import mainCourseImg from "@/app/components/assets/665f137ac39ceb52a9a03ef4_Menu - Photo 7-p-800.jpg";
import drinkImg from "@/app/components/assets/665f13785f3d0d071b262fbe_Menu - Photo 8-p-800.jpg";
import dessertImg from "@/app/components/assets/665f1377a6b8f51f36221093_Menu - Photo 9-p-800.jpg";

export default function MenuList() {
    const t = useTranslations("Menu");

    const menuSections = [
        {
            title: t("breakfastTitle"),
            description: t("breakfastDesc"),
            image: breakfastImg,
            isReverse: false,
            items: [
                { name: t("items.applePancakes"), price: "$25", desc: t("items.applePancakesDesc") },
                { name: t("items.greekYogurt"), price: "$40", desc: t("items.greekYogurtDesc") },
                { name: t("items.classicBreakfast"), price: "$60", desc: t("items.classicBreakfastDesc") },
                { name: t("items.avocadoToast"), price: "$60", desc: t("items.avocadoToastDesc") },
                { name: t("items.pancakesWaffles"), price: "$80", desc: t("items.pancakesWafflesDesc") },
            ],
        },
        {
            title: t("mainCourseTitle"),
            description: t("mainCourseDesc"),
            image: mainCourseImg,
            isReverse: true,
            items: [
                { name: t("items.chickenTeriyaki"), price: "$60", desc: t("items.chickenTeriyakiDesc") },
                { name: t("items.tandooriChicken"), price: "$170", desc: t("items.tandooriChickenDesc") },
                { name: t("items.classicMenu"), price: "$50", desc: t("items.classicMenuDesc") },
                { name: t("items.chickenShawarma"), price: "$80", desc: t("items.chickenShawarmaDesc") },
                { name: t("items.mediterraneanOmelet"), price: "$75", desc: t("items.mediterraneanOmeletDesc") },
            ],
        },
        {
            title: t("drinkTitle"),
            description: t("drinkDesc"),
            image: drinkImg,
            isReverse: false,
            items: [
                { name: t("items.tropicalSunset"), price: "$40", desc: t("items.tropicalSunsetDesc") },
                { name: t("items.berryBurst"), price: "$25", desc: t("items.berryBurstDesc") },
                { name: t("items.springSide"), price: "$30", desc: t("items.springSideDesc") },
                { name: t("items.mangoLassi"), price: "$20", desc: t("items.mangoLassiDesc") },
                { name: t("items.masalaChai"), price: "$15", desc: t("items.masalaChaiDesc") },
            ],
        },
        {
            title: t("dessertTitle"),
            description: t("dessertDesc"),
            image: dessertImg,
            isReverse: true,
            items: [
                { name: t("items.chocolateCake"), price: "$30", desc: t("items.chocolateCakeDesc") },
                { name: t("items.vanillaIceCream"), price: "$25", desc: t("items.vanillaIceCreamDesc") },
                { name: t("items.strawberryMuffins"), price: "$40", desc: t("items.strawberryMuffinsDesc") },
                { name: t("items.mangoCheesecake"), price: "$35", desc: t("items.mangoCheesecakeDesc") },
                { name: t("items.gulabJamun"), price: "$25", desc: t("items.gulabJamunDesc") },
            ],
        },
    ];

    return (
        <section className=" max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-24 bg-[#FCF9F3] border-t border-[#2C2C2C]/10">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <AnimateOnScroll variant="fadeUp">
                    <span className="text-[14px] tracking-[0.2em] uppercase text-[#2C2C2C]/60 mb-2 block" style={{ fontFamily: "var(--font-futura)" }}>
                        Menu
                    </span>
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-px w-12 bg-[#2C2C2C]/20"></div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 border border-[#2C2C2C]/40 rotate-45"></div>
                            <div className="w-3.5 h-3.5 bg-[#2C2C2C]/60 rotate-45"></div>
                            <div className="w-2 h-2 border border-[#2C2C2C]/40 rotate-45"></div>
                        </div>
                        <div className="h-px w-12 bg-[#2C2C2C]/20"></div>
                    </div>
                    <h2 className="text-[40px] md:text-[56px] lg:text-[64px] text-[#2C2C2C] mb-6 leading-tight" style={{ fontFamily: "var(--font-ramillas)" }}>
                        {t("introTitle")}
                    </h2>
                    <p className="text-[16px] md:text-[18px] text-[#2C2C2C]/70 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-futura)" }}>
                        {t("introDescription")}
                    </p>
                </AnimateOnScroll>
            </div>

            {/* Menu Sections */}
            <div className="space-y-24">
                {menuSections.map((section, idx) => (
                    <div key={idx} className={`flex flex-col ${section.isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center`}>
                        {/* Content */}
                        <div className="flex-1 w-full">
                            <AnimateOnScroll variant={section.isReverse ? "slideLeft" : "slideRight"} threshold={0.2}>
                                <h3 className="text-[32px] md:text-[48px] text-[#2C2C2C] mb-4" style={{ fontFamily: "var(--font-ramillas)" }}>
                                    {section.title}
                                </h3>
                                <p className="text-[16px] text-[#2C2C2C]/60 mb-8" style={{ fontFamily: "var(--font-futura)" }}>
                                    {section.description}
                                </p>
                            </AnimateOnScroll>

                            <div className="space-y-7">
                                {section.items.map((item, itemIdx) => (
                                    <AnimateOnScroll
                                        key={itemIdx}
                                        variant="reveal"
                                        delay={0.1 * itemIdx}
                                        threshold={0.1}
                                    >
                                        <div className="group">
                                            <div className="flex items-baseline justify-between gap-4 mb-2">
                                                <h4 className="text-[20px] md:text-[24px] text-[#2C2C2C] group-hover:text-[#E89D42] transition-colors duration-300" style={{ fontFamily: "var(--font-ramillas)" }}>
                                                    {item.name}
                                                </h4>
                                                <div className="flex-1 border-b border-dotted border-[#2C2C2C]/20 mb-1"></div>
                                                <span className="text-[18px] md:text-[20px] text-[#2C2C2C]" style={{ fontFamily: "var(--font-ramillas)" }}>
                                                    {item.price}
                                                </span>
                                            </div>
                                            <p className="text-[14px] md:text-[15px] text-[#2C2C2C]/50 leading-relaxed max-w-md" style={{ fontFamily: "var(--font-futura)" }}>
                                                {item.desc}
                                            </p>
                                        </div>
                                    </AnimateOnScroll>
                                ))}
                            </div>
                        </div>

                        {/* Image */}
                        <div className="flex-1 w-full">
                            <AnimateOnScroll variant={section.isReverse ? "fadeRight" : "fadeLeft"} delay={0.2}>
                                <div className="relative aspect-4/5 overflow-hidden rounded-sm shadow-2xl">
                                    <Image
                                        src={section.image}
                                        alt={section.title}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
