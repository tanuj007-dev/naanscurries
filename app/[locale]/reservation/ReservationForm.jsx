"use client";

import { useState, useId } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";


// Assets
import bannerImg from "@/app/components/assets/banner-image-3.jpg";


// ─── Constants ───────────────────────────────────────────────────────────────
const timeOptions = (() => {
    const times = [];
    for (let hour = 8; hour <= 23; hour++) {
        const h = hour > 12 ? hour - 12 : hour;
        const suffix = hour >= 12 ? "pm" : "am";
        times.push(`${String(h).padStart(2, "0")}:00 ${suffix}`);
        times.push(`${String(h).padStart(2, "0")}:30 ${suffix}`);
    }
    return times;
})();


// ─── Animation Variants ──────────────────────────────────────────────────────
const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// ─── Components ──────────────────────────────────────────────────────────────
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
        <div className="my-4 flex items-center justify-center gap-2">
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
    "w-full rounded-none border border-[#2C2C2C]/30 bg-[#E5DDD0] px-4 py-3 text-[14px] text-[#2C2C2C] outline-none transition-all duration-300 font-futura placeholder:text-[#2C2C2C]/40 focus:border-[#2C2C2C] accent-[#E89D42]";

const selectClasses =
    "w-full rounded-none border border-[#2C2C2C]/30 bg-[#E5DDD0] px-4 py-3 text-[14px] text-[#2C2C2C] outline-none transition-all duration-300 appearance-none cursor-pointer font-futura focus:border-[#2C2C2C] accent-[#E89D42]";

function SuccessToast({ message, onDismiss }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-8 left-1/2 z-100 -translate-x-1/2 rounded-full border border-[#E89D42]/30 bg-[#1A1A1A] px-8 py-3 text-[13px] text-white shadow-2xl"
            style={{ fontFamily: "var(--font-futura)" }}
        >
            <div className="flex items-center gap-3">
                <span className="text-[#E89D42]">✓</span>
                {message}
                <button onClick={onDismiss} className="ml-2 hover:text-[#E89D42]">✕</button>
            </div>
        </motion.div>
    );
}

export default function ReservationForm() {
    const t = useTranslations("Reservation");
    const id = useId();
    const uid = (name) => `${id}-${name}`;
    const [form, setForm] = useState({ location: "Lindora Plaza", name: "", email: "", phone: "", guests: "", date: "", time: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const personOptions = Array.from({ length: 10 }, (_, i) => `${i + 1} ${i === 0 ? t("person") : t("persons")}`);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setForm({ location: "Lindora Plaza", name: "", email: "", phone: "", guests: "", date: "", time: "", message: "" });
    };

    return (
        <motion.div variants={pageVariants} initial="hidden" animate="visible" className="min-h-screen bg-[#111111]">
            <AnimatePresence>
                {submitted && <SuccessToast message={t("successMessage")} onDismiss={() => setSubmitted(false)} />}
            </AnimatePresence>

            {/* ── Hero Section ────────────────────────────────────────────────── */}
            <section className="relative flex min-h-[42vh] w-full flex-col overflow-hidden md:min-h-[65vh]">
                <Image
                    src={bannerImg}
                    alt="Reservation Hero"
                    fill
                    className="object-cover brightness-[0.6]"
                    priority
                />

                <div className="h-16 md:h-32" />


                <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 text-center">
                    <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#FFF7ED]" style={{ fontFamily: "var(--font-futura)" }}>
                        {t("reserveATable")}
                    </p>
                    <GoldDivider />
                    <h1 className="mt-2 text-5xl font-normal text-[#FFF7ED] md:text-7xl lg:text-8xl" style={{ fontFamily: "var(--font-ramillas)" }}>
                        {t("reservationForm")}
                    </h1>
                </div>
                {/* Scroll hint line */}

            </section>

            {/* ── Form Section ────────────────────────────────────────────────── */}
            <section className="bg-[#E5DDD0] px-6 py-20 lg:py-32">
                <div className="mx-auto max-w-5xl">
                    <div className="mb-16 text-center">
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#2C2C2C]" style={{ fontFamily: "var(--font-futura)" }}>
                            {t("reservation")}
                        </p>
                        <GoldDivider />
                        <h2 className="mt-4 text-4xl font-normal text-[#2C2C2C] md:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-ramillas)" }}>
                            {t("reserveATable")}
                        </h2>
                        <div className="mx-auto mt-6 max-w-2xl text-[14px] leading-relaxed text-[#2C2C2C]" style={{ fontFamily: "var(--font-futura)" }}>
                            <p style={{ fontFamily: "var(--font-futura)" }}>
                                {t("policyText")}
                            </p>
                            <p className="mt-4 text-[#2C2C2C]" style={{ fontFamily: "var(--font-futura)" }}>
                                {t("bookingRequest")} <span className="font-bold">+88-123-123456</span> {t("bookingRequestOr")}
                            </p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="mb-6">
                            <FieldWrapper label={t("selectLocation")}>
                                <div className="relative">
                                    <select name="location" value={form.location} onChange={handleChange} required className={selectClasses}>
                                        <option value="Lindora Plaza" className="bg-[#E5DDD0]">{t("locationLindora")}</option>
                                        <option value="City Center" className="bg-[#E5DDD0]">{t("locationCityCenter")}</option>
                                    </select>
                                    <ChevronIcon />
                                </div>
                            </FieldWrapper>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            <FieldWrapper label={t("name")}>
                                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder={t("yourName")} required className={inputClasses} />
                            </FieldWrapper>
                            <FieldWrapper label={t("email")}>
                                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder={t("yourEmail")} required className={inputClasses} />
                            </FieldWrapper>
                            <FieldWrapper label={t("mobileNumber")}>
                                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder={t("phoneNumber")} required className={inputClasses} />
                            </FieldWrapper>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            <FieldWrapper label={t("noOfGuests")}>
                                <div className="relative">
                                    <select name="guests" value={form.guests} onChange={handleChange} required className={selectClasses}>
                                        {personOptions.map((p) => <option key={p} value={p} className="bg-[#E5DDD0]">{p}</option>)}
                                    </select>
                                    <ChevronIcon />
                                </div>
                            </FieldWrapper>
                            <FieldWrapper label={t("date")}>
                                <input type="date" name="date" value={form.date} onChange={handleChange} required className={`${inputClasses} scheme-light`} />
                            </FieldWrapper>
                            <FieldWrapper label={t("time")}>
                                <div className="relative">
                                    <select name="time" value={form.time} onChange={handleChange} required className={selectClasses}>
                                        {timeOptions.map((opt) => <option key={opt} value={opt} className="bg-[#E5DDD0]">{opt}</option>)}
                                    </select>
                                    <ChevronIcon />
                                </div>
                            </FieldWrapper>
                        </div>

                        <FieldWrapper label={t("specialInstructions")}>
                            <textarea name="message" value={form.message} onChange={handleChange} placeholder={t("specialRequest")} rows={4} className={`${inputClasses} resize-none`} />
                        </FieldWrapper>

                        <div className="flex flex-col items-center pt-8">
                            <div className="border border-[#2C2C2C] rounded-sm p-1.5 flex transition-transform duration-300 hover:scale-[1.02]">
                                <motion.button
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="rounded-sm bg-[#2d2d2d] px-14 py-4 text-[12px] font-bold uppercase tracking-[0.3em] text-white transition-colors hover:bg-[#1A1A1A] cursor-pointer"
                                    style={{ fontFamily: "var(--font-futura)" }}
                                >
                                    {t("reserveTable")}
                                </motion.button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

        </motion.div >

    );
}

function ChevronIcon() {
    return (
        <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#2C2C2C]" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 10l5 5 5-5z" />
        </svg>
    );
}
