"use client";

import Image from "@/src/compat/next-image";
import { useTranslations } from "@/src/compat/next-intl";
import AnimateOnScroll from "./AnimateOnScroll";

// Import assets
import insta1 from "./assets/6810a426c4d987a212ed94be_0e3a3c6614fe0b3f3e4473e38b101f1d_insta (3).avif";
import insta2 from "./assets/6810a42725f7d96992577294_2e164ec57bd8fdbd081d91ad09b93724_insta (1).avif";
import insta3 from "./assets/6810a42a1871af67a17abda2_20534442d9c17200ff7e11663791e4d6_insta (2).avif";
import insta4 from "./assets/6810a42a5e81b074c89f266d_b5ff9770e2d4d5a735075e8b201ff04a_insta (4).avif";
import insta5 from "./assets/6810a42aa0b407f9adb5a163_4f1a40eea348a5f378ddcd402dcbf413_insta (5).avif";

export default function ContactGallery() {
    const t = useTranslations("Contact");

    const images = [
        { src: insta3, delay: 0.1, className: "col-span-2 row-span-2 relative h-[300px] md:h-auto" },
        { src: insta2, delay: 0.2, className: "col-span-1 row-span-1 relative h-[150px] md:h-[400px]" },
        { src: insta1, delay: 0.3, className: "col-span-1 row-span-1 relative h-[150px] md:h-[400px]" },
        { src: insta4, delay: 0.4, className: "col-span-1 row-span-1 relative h-[150px] md:h-[400px]" },
        { src: insta5, delay: 0.5, className: "col-span-1 row-span-1 relative h-[150px] md:h-[400px]" },
    ];

    return (
        <section className="bg-[#FAF7F2] pb-20 md:pb-32 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((img, idx) => (
                        <AnimateOnScroll
                            key={idx}
                            variant="fadeUp"
                            delay={img.delay}
                            className={img.className}
                        >
                            <div className="w-full h-full overflow-hidden group">
                                <Image
                                    src={img.src}
                                    alt={`Gallery Image ${idx + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700"
                                />
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
