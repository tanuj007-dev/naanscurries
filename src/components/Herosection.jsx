"use client";


import { motion } from "framer-motion";
import { useTranslations, useLocale } from "@/src/compat/next-intl";
import { LiaTripadvisor } from "react-icons/lia";


const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/naanslindora?igshid=YmMyMTA2M2Y%3D",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/NaansCurries?mibextid=LQQJ4d",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "Tripadvisor",
    href: "https://www.tripadvisor.com/Restaurant_Review-g1122840-d5039529-Reviews-Naans_Curries_Lindora-Santa_Ana_San_Jose_Metro_Province_of_San_Jose.html",
    icon: LiaTripadvisor,
  },
];

// â”€â”€â”€ Animation variants â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const headlineContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const headlineWord = {
  hidden: { opacity: 0, y: 40, skewY: 3 },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const socialVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, delay: 0.7 + i * 0.1, ease: "easeOut" },
  }),
};

const sidebarLineVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "64px",
    opacity: 1,
    transition: { duration: 0.8, delay: 1.0, ease: "easeInOut" },
  },
};

const descVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.85, ease: "easeOut" },
  },
};

export default function Herosection() {
  const t = useTranslations("Home");
  const locale = useLocale();
  return (
    <section className="relative min-h-[85vh] md:min-h-screen w-full overflow-hidden  ">
      {/* â”€â”€ Background image (LCP priority) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="https://res.cloudinary.com/dpelqhchv/video/upload/v1773140439/Naans_Curries_Best_Indian_Restaurant_In_San_Jose_Costa_Rica_Orde_iw1zeo.mp4" type="video/mp4" />
        </video>
        {/* Dark warm overlay: Darker on desktop for better text contrast */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/45" aria-hidden />
      </div>

      {/* â”€â”€ Main content wrapper â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div className="relative z-10 flex min-h-[85vh] md:min-h-screen flex-col">

        {/* Header is now handled globally in layout.js */}
        <div className="h-24 md:h-32" />


        {/* â”€â”€ HERO HEADLINE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <div className="flex flex-1 flex-col items-center justify-center px-4 py-2 text-center sm:py-12">
          <motion.div
            className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-0 sm:gap-2"
            initial="hidden"
            animate="visible"
            variants={headlineContainer}
          >
            {/* Top row: "FLAVORS" */}
            <motion.h1
              className={`text-[36px] font-normal uppercase leading-none text-[#FFF7ED] drop-shadow-sm
                         sm:text-[60px] md:text-[85px] lg:text-[115px] whitespace-nowrap ${locale === "es" ? "md:ml-0" : "md:ml-12"}`}
              variants={headlineWord}
              style={{
                fontFamily: "var(--font-ramillas)",
                willChange: "transform, opacity"
              }}
            >
              {t("flavors")}
            </motion.h1>

            {/* Bottom row: [Best Indian Restaurant] [THAT STAY] [In Costa Rica] */}
            <div className={`flex flex-col items-center justify-center gap-1 sm:gap-2 md:flex-row md:items-center md:gap-4 lg:gap-6 ${locale === "es" ? "md:mr-0" : "md:mr-16"}`}>

              {/* Left wing */}
              <motion.p
                className="hidden font-medium uppercase tracking-[0.25em] text-[#FFF7ED] md:block md:text-[13px] lg:text-[15px] lg:tracking-[0.3em] whitespace-nowrap shrink-0"
                variants={headlineWord}
                style={{ fontFamily: "var(--font-T)", willChange: "transform, opacity" }}
              >
                {t("bestIndianRestaurant")}
              </motion.p>

              {/* Center giant text */}
              <motion.h1
                className="text-[36px] font-normal uppercase leading-none text-[#FFF7ED] drop-shadow-sm
                           sm:text-[60px] md:text-[85px] lg:text-[115px] whitespace-nowrap"
                variants={headlineWord}
                style={{
                  fontFamily: "var(--font-ramillas)",
                  willChange: "transform, opacity"
                }}
              >
                {t("thatStay")}
              </motion.h1>

              {/* Right wing */}
              <motion.p
                className="hidden font-medium uppercase tracking-[0.25em] text-[#FFF7ED] md:block md:text-[13px] lg:text-[15px] lg:tracking-[0.3em] whitespace-nowrap shrink-0"
                variants={headlineWord}
                style={{ fontFamily: "var(--font-T)", willChange: "transform, opacity" }}
              >
                {t("inCostaRica")}
              </motion.p>
            </div>

            {/* Mobile stacked fallback (hidden on md+) for the side texts - slightly larger */}
            <motion.div
              className="mt-1 flex flex-col items-center gap-0.5 md:hidden"
              variants={headlineWord}
              style={{ willChange: "transform, opacity" }}
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#FFF7ED]/85" style={{ fontFamily: "var(--font-T)" }}>
                {t("bestIndianRestaurant")}
              </p>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#FFF7ED]/85" style={{ fontFamily: "var(--font-T)" }}>
                {t("inCostaRica")}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* â”€â”€ BOTTOM SECTION â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}

        {/* Mobile bottom bar (hidden on md+) */}
        <div className="md:hidden flex flex-col items-center gap-4 px-5 pb-6 pt-0">
          {/* Social icons â€“ horizontal row - larger for mobile */}
          <motion.div
            className="flex items-center gap-5"
            initial="hidden"
            animate="visible"
          >
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="rounded-full border border-white/50 p-2 text-white/90 transition-all duration-200 hover:border-white hover:text-white"
                aria-label={social.label}
                custom={i}
                variants={socialVariants}
              >
                {social.icon ? (
                  <social.icon className="h-5 w-5" />
                ) : (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                )}
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            className="text-center text-[13px] leading-relaxed text-white/90 max-w-sm"
            initial="hidden"
            animate="visible"
            variants={descVariants}
            style={{ fontFamily: "var(--font-futura)" }}
          >
            {t("heroDescription")}
          </motion.p>
        </div>

        {/* Desktop: Sidebar (Left) & Description (Right) */}

        {/* Social Sidebar: Left (Vertical) */}
        <div className="hidden md:flex absolute bottom-0 left-10 lg:left-14 flex-col items-center gap-5 pb-10 lg:pb-12">
          {/* Vertical white line */}
          <motion.div
            className="w-px bg-white/30"
            initial="hidden"
            animate="visible"
            variants={sidebarLineVariants}
            style={{ transformOrigin: "bottom" }}
          />

          <div className="flex flex-col gap-5">
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="group relative flex items-center justify-center p-1 text-white/60 transition-colors duration-200 hover:text-white"
                aria-label={social.label}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={socialVariants}
              >
                {social.icon ? (
                  <social.icon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                ) : (
                  <svg className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                )}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Description: Center */}
        <motion.div
          className="hidden md:block absolute bottom-16 left-1/2 -translate-x-1/2 max-w-2xl text-center"
          initial="hidden"
          animate="visible"
          variants={descVariants}
        >
          <p
            className="text-[13px] leading-relaxed text-white/90 lg:text-[15px]"
            style={{ fontFamily: "var(--font-futura)" }}
          >
            At Naans Curries, every dish is a tribute to tradition and every
            moment is crafted for today. We bring together the warmth of Indian
            hospitality, the richness of timeless flavors, and the pace of
            modern life.
          </p>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-px h-12 bg-linear-to-b from-white to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 rotate-90 origin-left mt-8 whitespace-nowrap" style={{ fontFamily: "var(--font-futura)" }}>
          SCROLL
        </span>
      </motion.div> */}

    </section>
  );
}
