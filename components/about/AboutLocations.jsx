"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@/navigation";
import AnimateOnScroll from "@/app/components/AnimateOnScroll";

// Import images (reusing existing assets)
import img1 from "@/app/components/assets/6810a426c4d987a212ed94be_0e3a3c6614fe0b3f3e4473e38b101f1d_insta (3).avif";
import img2 from "@/app/components/assets/184feea337ba0d7e4ee23a1bf53ccd8167b3fe64.jpg";
import img3 from "@/app/components/assets/6810a42725f7d96992577294_2e164ec57bd8fdbd081d91ad09b93724_insta (1).avif";
import img4 from "@/app/components/assets/6810a42a1871af67a17abda2_20534442d9c17200ff7e11663791e4d6_insta (2).avif";
import img5 from "@/app/components/assets/6810a42a5e81b074c89f266d_b5ff9770e2d4d5a735075e8b201ff04a_insta (4).avif";
import img6 from "@/app/components/assets/6810a42aa0b407f9adb5a163_4f1a40eea348a5f378ddcd402dcbf413_insta (5).avif";
import img7 from "@/app/components/assets/665fc45f8858be3714c7c9ee_Photo 2-p-800.jpg";

const getLocations = (t) => [
    {
        name: t("locationMomentum"),
        desc: t("locationMomentumDesc"),
        phone: "+506 2282 0001, +506 2282 5470",
        email: "lindora@naanscurries.com",
        address: "MOMENTUM, LINDORA, SANTA ANA, SAN JOSE, COSTA RICA",
        image: img1,
    },
    {
        name: t("locationLincoln"),
        desc: t("locationLincolnDesc"),
        phone: "+506 2282 0002",
        email: "lincoln@naanscurries.com",
        address: "LINCOLN PLAZA, SAN JOSE, COSTA RICA",
        image: img2,
    },
    {
        name: t("locationPinares"),
        desc: t("locationPinaresDesc"),
        phone: "+506 2282 0003",
        email: "pinares@naanscurries.com",
        address: "PINARES, SAN JOSE, COSTA RICA",
        image: img3,
    },
    {
        name: t("locationEscazu"),
        desc: t("locationEscazuDesc"),
        phone: "+506 2282 0004",
        email: "escazu@naanscurries.com",
        address: "ESCAZU, SAN JOSE, COSTA RICA",
        image: img4,
    },
    {
        name: t("locationAlajuela"),
        desc: t("locationAlajuelaDesc"),
        phone: "+506 2282 0005",
        email: "alajuela@naanscurries.com",
        address: "ALAJUELA, COSTA RICA",
        image: img5,
    },
    {
        name: t("locationHeredia"),
        desc: t("locationHerediaDesc"),
        phone: "+506 2282 0006",
        email: "heredia@naanscurries.com",
        address: "HEREDIA, COSTA RICA",
        image: img6,
    },
    {
        name: t("locationCartago"),
        desc: t("locationCartagoDesc"),
        phone: "+506 2282 0007",
        email: "cartago@naanscurries.com",
        address: "CARTAGO, COSTA RICA",
        image: img7,
    },
];

export default function AboutLocations() {
    const t = useTranslations("About");
    const locations = getLocations(t);
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [visibleCount, setVisibleCount] = useState(2);

    useEffect(() => {
        const handleResize = () => {
            setVisibleCount(window.innerWidth >= 1024 ? 2 : 1);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const totalSlides = locations.length;

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setIndex((prevIndex) => {
            let next = prevIndex + newDirection;
            if (next < 0) next = totalSlides - visibleCount;
            if (next > totalSlides - visibleCount) next = 0;
            return next;
        });
    };

    return (
        <section className="bg-[#E5DDD0] py-24 overflow-hidden">
            <div className=" mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <AnimateOnScroll variant="fadeUp">
                        <h2
                            className="text-[42px] md:text-[56px] lg:text-[72px] leading-[1.1] text-[#2C2C2C] mb-6 font-normal max-w-6xl mx-auto"
                            style={{ fontFamily: "var(--font-ramillas)" }}
                        >
                            {t("locationsSliderTitle")}
                        </h2>
                        <p
                            className="text-[16px] md:text-[18px] leading-relaxed text-[#2C2C2C]/70 max-w-4xl mx-auto"
                            style={{ fontFamily: "var(--font-futura)" }}
                        >
                            {t("locationsSliderDesc")}
                        </p>
                    </AnimateOnScroll>
                </div>

                {/* Slider Container */}
                <div className="relative">
                    <motion.div
                        className="flex gap-6 md:gap-8"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={(e, { offset, velocity }) => {
                            if (offset.x > 100) paginate(-1);
                            else if (offset.x < -100) paginate(1);
                        }}
                    >
                        <AnimatePresence initial={false} mode="popLayout" custom={direction}>
                            <motion.div
                                key={index}
                                custom={direction}
                                initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full"
                            >
                                {locations.slice(index, index + visibleCount).map((loc, i) => (
                                    <div key={loc.name + i} className="flex-1 bg-white flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow duration-300">
                                        {/* Text Content */}
                                        <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col">
                                            <h3 className="text-[28px] md:text-[36px] text-[#2C2C2C] mb-4 font-normal" style={{ fontFamily: "var(--font-ramillas)" }}>
                                                {loc.name}
                                            </h3>
                                            <p className="text-[14px] md:text-[16px] text-[#2C2C2C]/60 mb-8 leading-relaxed font-medium" style={{ fontFamily: "var(--font-futura)" }}>
                                                {loc.desc}
                                            </p>

                                            <div className="space-y-4 mb-10 mt-auto">
                                                <div className="flex items-center gap-4 text-[#2C2C2C]/80">
                                                    <div className="bg-[#FCF9F3] p-2 rounded-full"><Phone size={14} className="text-[#C68853]" /></div>
                                                    <span className="text-[13px] font-bold" style={{ fontFamily: "var(--font-futura)" }}>{loc.phone}</span>
                                                </div>
                                                <div className="flex items-center gap-4 text-[#2C2C2C]/80">
                                                    <div className="bg-[#FCF9F3] p-2 rounded-full"><Mail size={14} className="text-[#C68853]" /></div>
                                                    <span className="text-[13px] font-bold" style={{ fontFamily: "var(--font-futura)" }}>{loc.email}</span>
                                                </div>
                                                <div className="flex items-start gap-4 text-[#2C2C2C]/80">
                                                    <div className="bg-[#FCF9F3] p-2 rounded-full mt-1"><MapPin size={14} className="text-[#C68853]" /></div>
                                                    <span className="text-[13px] font-bold leading-snug" style={{ fontFamily: "var(--font-futura)" }}>{loc.address}</span>
                                                </div>
                                            </div>

                                            <div className="inline-block border border-[#2C2C2C]/30 p-[6px] rounded-[10px] transition-transform duration-300 hover:scale-[1.02]">
                                                <Link
                                                    href="/contact"
                                                    className="flex items-center justify-center rounded-[4px] bg-[#C68853] px-10 py-3.5 text-[12px] font-bold uppercase tracking-[0.2em] text-[#FCF9F3] transition-all duration-300 hover:bg-[#A66D3B]"
                                                    style={{ fontFamily: "var(--font-futura)" }}
                                                >
                                                    {t("contactUs")}
                                                </Link>
                                            </div>
                                        </div>
                                        {/* Image */}
                                        <div className="relative w-full md:w-[40%] lg:w-[45%] h-[300px] md:h-auto overflow-hidden">
                                            <Image
                                                src={loc.image}
                                                alt={loc.name}
                                                fill
                                                className="object-cover transition-transform duration-700 hover:scale-110"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                    {/* Controls */}
                    <div className="flex justify-center gap-4 mt-12">
                        <button
                            onClick={() => paginate(-1)}
                            className="bg-[#C68853] text-white p-3 rounded-full hover:bg-[#A66D3B] transition-colors shadow-lg shadow-[#C68853]/20"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => paginate(1)}
                            className="bg-[#C68853] text-white p-3 rounded-full hover:bg-[#A66D3B] transition-colors shadow-lg shadow-[#C68853]/20"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
