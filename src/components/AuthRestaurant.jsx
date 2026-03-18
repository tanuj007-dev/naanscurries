"use client";

import Image from "@/src/compat/next-image";
import { useTranslations } from "@/src/compat/next-intl";
import { Link } from "@/src/compat/navigation";
import AnimateOnScroll from "./AnimateOnScroll";

import restaurantImg from "./assets/dcf85e625eb89d680ed6ba526ad66fd03bc8c633.jpg";
import certificate2020 from "./assets/certificates/2020.webp";
import certificate2021 from "./assets/certificates/2021.webp";
import certificate2022 from "./assets/certificates/2022.webp";
import certificate1 from "./assets/certificates/certificate1.png";
import certificate2 from "./assets/certificates/certificate2.png";
import certificate3 from "./assets/certificates/certificate3.png";
import certificate4 from "./assets/certificates/certificate4.png";
import certificate5 from "./assets/certificates/certificate5.png";

export default function AuthRestaurant() {
  const t = useTranslations("AuthRestaurant");
  const certificates = [
    { src: certificate2020, alt: "Certificate 2020" },
    { src: certificate2021, alt: "Certificate 2021" },
    { src: certificate2022, alt: "Certificate 2022" },
    { src: certificate1, alt: "Certificate 1" },
    { src: certificate2, alt: "Certificate 2" },
    { src: certificate3, alt: "Certificate 3" },
    { src: certificate4, alt: "Certificate 4" },
    { src: certificate5, alt: "Certificate 5" },
  ];
  return (
    <section className="grid w-full grid-cols-1 bg-[#FDF4E7] lg:grid-cols-2">
      {/* Left column â€“ text, button, Tripadvisor badges */}
      <AnimateOnScroll
        variant="slideLeft"
        duration={0.7}
        className="flex flex-col justify-center px-6 py-12 md:px-10 md:py-16 lg:px-14 lg:py-20"
      >
        <h2
          className="text-3xl uppercase leading-tight text-[#2d2d2d] md:text-4xl lg:text-[44px]"
          style={{ fontFamily: "var(--font-ramillas)" }}
        >
          {t("title")}
        </h2>

        <div className="mt-6 flex flex-col gap-4 text-[#2d2d2d]/90">
          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: "var(--font-futura)" }}
          >
            {t("p1")}
          </p>

          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: "var(--font-futura)" }}
          >
            {t("p2")}
          </p>

          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: "var(--font-futura)" }}
          >
            {t("p3")}
          </p>
        </div>

        <div className="mt-10 flex justify-center md:justify-start">
          <div className="inline-block rounded-md border border-[#2d2d2d] p-1">
            <Link
              href="/about"
              className="flex items-center justify-center rounded-sm bg-[#2d2d2d] px-8 py-3 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#3d3d3d]"
              style={{ fontFamily: "var(--font-futura)" }}
            >
              {t("thoughtsCurator")}
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex flex-wrap items-center gap-4 md:gap-5">
            {certificates.map((c) => (
              <div
                key={c.alt}
                className="relative h-[72px] w-[72px] overflow-hidden rounded-md bg-white/40 ring-1 ring-black/5 md:h-[62px] md:w-[62px] md:bg-transparent md:ring-0"
              >
                <Image
                  src={c.src}
                  alt={c.alt}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 72px, 84px"
                />
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>

      {/* Right column â€“ restaurant interior image */}
      <AnimateOnScroll
        variant="slideRight"
        duration={0.7}
        className="flex items-center justify-center p-6 md:p-10 lg:p-14"
      >
        <div className="relative aspect-square w-full overflow-hidden rounded-[32px] md:aspect-4/3 lg:h-full lg:w-full">
          <Image
            src={restaurantImg}
            alt="Naans & Curries restaurant interior â€“ dining table and elegant setting"
            fill
            className="object-cover object-center transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={80}
          />
        </div>
      </AnimateOnScroll>
    </section>
  );
}
