"use client";

import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useLocale } from "@/src/compat/next-intl";
import MenuHero from "@/src/components/menu/Hero";
import ImageFlipBook from "@/src/components/ImageFlipBook";

// English menu (New folder)
import enPage1 from "@/src/components/assets/New folder/page1.webp";
import enPage2 from "@/src/components/assets/New folder/page2.jpg";
import enPage3 from "@/src/components/assets/New folder/page3.jpg";
import enPage4 from "@/src/components/assets/New folder/page4.jpg";
import enPage5 from "@/src/components/assets/New folder/page5.jpg";
import enPage6 from "@/src/components/assets/New folder/page6.jpg";
import enPage7 from "@/src/components/assets/New folder/page7.jpg";
import enPage8 from "@/src/components/assets/New folder/page8.jpg";
import enPage9 from "@/src/components/assets/New folder/page9.jpg";
import enPage10 from "@/src/components/assets/New folder/page10.jpg";
import enPage11 from "@/src/components/assets/New folder/page11.jpg";
import enPage12 from "@/src/components/assets/New folder/page12.jpg";
import enPage13 from "@/src/components/assets/New folder/page13.jpg";
import enPage14 from "@/src/components/assets/New folder/page14.jpg";
import enPage15 from "@/src/components/assets/New folder/page15.jpg";
import enPage16 from "@/src/components/assets/New folder/page16.jpg";
import enPage17 from "@/src/components/assets/New folder/page17.jpg";
import enPage18 from "@/src/components/assets/New folder/page18.jpg";
import enPage19 from "@/src/components/assets/New folder/page19.jpg";
import enPage20 from "@/src/components/assets/New folder/page20.jpg";
import enPage21 from "@/src/components/assets/New folder/page21.jpg";
import enPage22 from "@/src/components/assets/New folder/page22.webp";

// Spanish menu (spamenu)
import esPage1 from "@/src/components/assets/spamenu/page1.jpg";
import esPage2 from "@/src/components/assets/spamenu/page2.jpg";
import esPage3 from "@/src/components/assets/spamenu/page3.jpg";
import esPage4 from "@/src/components/assets/spamenu/page4.jpg";
import esPage5 from "@/src/components/assets/spamenu/page5.jpg";
import esPage6 from "@/src/components/assets/spamenu/page6.jpg";
import esPage7 from "@/src/components/assets/spamenu/page7.jpg";
import esPage8 from "@/src/components/assets/spamenu/page8.jpg";
import esPage9 from "@/src/components/assets/spamenu/page9.jpg";
import esPage10 from "@/src/components/assets/spamenu/page10.jpg";
import esPage11 from "@/src/components/assets/spamenu/page11.jpg";
import esPage12 from "@/src/components/assets/spamenu/page12.jpg";
import esPage13 from "@/src/components/assets/spamenu/page13.jpg";
import esPage14 from "@/src/components/assets/spamenu/page14.jpg";
import esPage15 from "@/src/components/assets/spamenu/page15.jpg";
import esPage16 from "@/src/components/assets/spamenu/page16.jpg";
import esPage17 from "@/src/components/assets/spamenu/page17.jpg";
import esPage18 from "@/src/components/assets/spamenu/page18.jpg";
import esPage19 from "@/src/components/assets/spamenu/page19.jpg";
import esPage20 from "@/src/components/assets/spamenu/page20.jpg";
import esPage21 from "@/src/components/assets/spamenu/page21.jpg";
import esPage22 from "@/src/components/assets/spamenu/page22.jpg";

const englishMenuPages = [
    enPage1, enPage2, enPage3, enPage4, enPage5, enPage6, enPage7, enPage8, enPage9, enPage10,
    enPage11, enPage12, enPage13, enPage14, enPage15, enPage16, enPage17, enPage18, enPage19, enPage20,
    enPage21, enPage22,
];

const spanishMenuPages = [
    esPage1, esPage2, esPage3, esPage4, esPage5, esPage6, esPage7, esPage8, esPage9, esPage10,
    esPage11, esPage12, esPage13, esPage14, esPage15, esPage16, esPage17, esPage18, esPage19, esPage20,
    esPage21, esPage22,
];

export default function MenuPage() {
    const locale = useLocale();
    const isSpanish = locale === "es";
    const menuPages = isSpanish ? spanishMenuPages : englishMenuPages;
    const menuTitle = isSpanish ? "Menú en Español" : "English Menu";
    const downloadUrl = isSpanish
        ? "/src/components/assets/MENU CON PORTADAS NC GAM ESP MAR 2026 (1).pdf"
        : "/src/components/assets/MENU WITH COVER NC GAM ENG MAR 2026.pdf";

    return (
        <>
            <Helmet>
                <title>{isSpanish ? "Nuestro Menú" : "Our Menu"} | Naans & Curries</title>
                <meta name="description" content={isSpanish ? "La comida en Naans & Curries se describe en una palabra: diversidad. Explora nuestras recetas tradicionales auténticas." : "The food at Naans & Curries best describes itself in one word: diversity. Explore our authentic traditional recipes and contemporary twists."} />
            </Helmet>
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-[#FCF9F3]"
            >
                <MenuHero />
                <section className="relative py-8 md:py-12 overflow-hidden bg-[#F4F1EA]">
                    {/* Textured Background Cover */}
                    <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper.png")' }} />

                    {/* Global Ornamental Jaali Pattern */}
                    <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0 L45 35 L80 40 L45 45 L40 80 L35 45 L0 40 L35 35 Z' fill='%231a1a1a'/%3E%3C/svg%3E")`,
                            backgroundSize: '80px 80px'
                        }}
                    />

                    <div className="relative z-10">
                        <h2
                            className="text-center text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] font-normal mb-10 md:mb-14 px-4"
                            style={{ fontFamily: "var(--font-ramillas)" }}
                        >
                            {menuTitle}
                        </h2>
                        <ImageFlipBook
                            pages={menuPages}
                            downloadUrl={downloadUrl}
                        />
                    </div>
                </section>
            </motion.main>
        </>
    );
}
