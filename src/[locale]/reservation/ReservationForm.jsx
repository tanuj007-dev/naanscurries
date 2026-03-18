"use client";

import { useState, useId } from "react";
import Image from "@/src/compat/next-image";
import { useTranslations } from "@/src/compat/next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "@/src/compat/navigation";
import ReactCountryFlag from "react-country-flag";
import { Search, ChevronDown, Check } from "lucide-react";


// Assets
import bannerImg from "@/src/components/assets/banner-image-3.jpg";
import { submitReservation } from "@/src/api/client";


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

const countries = [
    { name: "Costa Rica", code: "+506", iso: "CR" },
    { name: "United States", code: "+1", iso: "US" },
    { name: "Canada", code: "+1", iso: "CA" },
    { name: "United Kingdom", code: "+44", iso: "GB" },
    { name: "India", code: "+91", iso: "IN" },
    { name: "Australia", code: "+61", iso: "AU" },
    { name: "Germany", code: "+49", iso: "DE" },
    { name: "France", code: "+33", iso: "FR" },
    { name: "Spain", code: "+34", iso: "ES" },
    { name: "Mexico", code: "+52", iso: "MX" },
    { name: "Panama", code: "+507", iso: "PA" },
    { name: "Colombia", code: "+57", iso: "CO" },
].sort((a, b) => a.name.localeCompare(b.name));


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

function SuccessOverlay({ t }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-200 flex items-center justify-center bg-[#E5DDD0]/95 backdrop-blur-md"
        >
            <div className="text-center px-6">
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.2 }}
                    className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#2C2C2C] text-[#E89D42]"
                >
                    <Check size={48} strokeWidth={3} />
                </motion.div>

                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mb-4 text-4xl md:text-6xl font-normal text-[#2C2C2C]"
                    style={{ fontFamily: "var(--font-ramillas)" }}
                >
                    {t("thankYou")}
                </motion.h2>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mb-8 text-lg text-[#2C2C2C]/70"
                    style={{ fontFamily: "var(--font-futura)" }}
                >
                    {t("successMessage")}
                </motion.p>

                <div className="mx-auto h-0.5 max-w-[200px] overflow-hidden bg-[#2C2C2C]/10">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3.5, ease: "linear", delay: 0.8 }}
                        className="h-full bg-[#E89D42]"
                    />
                </div>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-4 text-[10px] uppercase tracking-widest text-[#2C2C2C]/40"
                    style={{ fontFamily: "var(--font-futura)" }}
                >
                    Redirecting to menu...
                </motion.p>
            </div>
        </motion.div>
    );
}

function PhoneInput({ value, onChange, placeholder, required }) {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [selectedCountry, setSelectedCountry] = useState(countries.find(c => c.iso === "CR") || countries[0]);

    const filteredCountries = countries.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.code.includes(search)
    );

    const handleSelect = (country) => {
        setSelectedCountry(country);
        setIsOpen(false);
        setSearch("");
    };

    const handleInputChange = (e) => {
        const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
        onChange({ target: { name: "phone", value } });
    };

    return (
        <div className="relative w-full">
            <div className="flex w-full border border-[#2C2C2C]/30 bg-[#E5DDD0] transition-all duration-300 focus-within:border-[#2C2C2C]">
                {/* Flag Selector */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 border-r border-[#2C2C2C]/10 px-3 hover:bg-[#2C2C2C]/5 transition-colors"
                >
                    <ReactCountryFlag
                        countryCode={selectedCountry.iso}
                        svg
                        style={{ width: '24px', height: '18px' }}
                        title={selectedCountry.name}
                    />
                    <ChevronDown size={14} className={`text-[#2C2C2C]/60 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dial Code Prefix */}
                <div className="flex items-center pl-2 text-[14px] text-[#2C2C2C] font-futura pointer-events-none">
                    {selectedCountry.code}
                </div>

                {/* Input */}
                <input
                    type="text"
                    name="phone"
                    value={value}
                    onChange={handleInputChange}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder={placeholder}
                    required={required}
                    className="flex-1 rounded-none bg-transparent px-3 py-3 text-[14px] text-[#2C2C2C] outline-none font-futura placeholder:text-[#2C2C2C]/40"
                />
            </div>

            {/* Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute left-0 top-full z-50 mt-2 w-72 overflow-hidden border border-[#2C2C2C]/20 bg-white shadow-2xl"
                        >
                            <div className="p-2">
                                <div className="relative flex items-center border-b border-[#2C2C2C]/10 pb-2 mb-1">
                                    <Search size={14} className="absolute left-2 text-[#2C2C2C]/40" />
                                    <input
                                        type="text"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        placeholder="Search country..."
                                        className="w-full pl-8 pr-2 py-2 text-[13px] outline-none font-futura"
                                        autoFocus
                                    />
                                </div>
                                <div className="max-h-60 overflow-y-auto custom-scrollbar">
                                    {filteredCountries.map((c) => (
                                        <button
                                            key={c.iso}
                                            type="button"
                                            onClick={() => handleSelect(c)}
                                            className="flex w-full items-center justify-between px-3 py-2.5 hover:bg-[#FAF7F2] transition-colors group"
                                        >
                                            <div className="flex items-center gap-3">
                                                <ReactCountryFlag
                                                    countryCode={c.iso}
                                                    svg
                                                    style={{ width: '20px', height: '14px' }}
                                                />
                                                <div className="flex flex-col items-start">
                                                    <span className="text-[13px] font-medium text-[#2C2C2C] group-hover:text-[#E89D42] transition-colors">{c.name}</span>
                                                    <span className="text-[11px] text-[#2C2C2C]/50">{c.code}</span>
                                                </div>
                                            </div>
                                            {selectedCountry.iso === c.iso && (
                                                <Check size={14} className="text-[#E89D42]" />
                                            )}
                                        </button>
                                    ))}
                                    {filteredCountries.length === 0 && (
                                        <div className="px-3 py-4 text-center text-[12px] text-[#2C2C2C]/40 font-futura">
                                            No countries found
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function ReservationForm() {
    const t = useTranslations("Reservation");
    const router = useRouter();
    const locations = t.raw("locations");
    const id = useId();
    const uid = (name) => `${id}-${name}`;
    const [form, setForm] = useState({ location: locations[0], name: "", email: "", phone: "", guests: "", date: "", time: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const [showCustomGuests, setShowCustomGuests] = useState(false);

    const today = new Date().toISOString().split("T")[0];
    const personOptions = Array.from({ length: 10 }, (_, i) => `${i + 1} ${i === 0 ? t("person") : t("persons")}`);

    const handleChange = (e) => {
        if (e.target.name === "guests" && e.target.value === "Other") {
            setShowCustomGuests(true);
            setForm({ ...form, guests: "" });
        } else {
            setForm({ ...form, [e.target.name]: e.target.value });
        }
    };
    const getFormValue = (formEl, name) => {
        const el = formEl.querySelector(`[name="${name}"]`);
        return (el?.value ?? "").trim();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formEl = e.currentTarget;
        const rawDate = getFormValue(formEl, "date");
        const dateNorm = rawDate ? rawDate.split("T")[0] : "";
        const payload = {
            location: getFormValue(formEl, "location") || form.location || (locations && locations[0]) || "",
            name: getFormValue(formEl, "name"),
            email: getFormValue(formEl, "email"),
            phone: getFormValue(formEl, "phone") || form.phone || "",
            guests: getFormValue(formEl, "guests") || "",
            date: dateNorm,
            time: getFormValue(formEl, "time") || "",
            message: getFormValue(formEl, "message") || "",
        };
        setSubmitting(true);
        setSubmitError(null);
        try {
            await submitReservation(payload);
            setSubmitted(true);
            setForm({ location: locations[0], name: "", email: "", phone: "", guests: "", date: "", time: "", message: "" });
            setShowCustomGuests(false);
            setTimeout(() => {
                router.push("/");
            }, 4000);
        } catch (err) {
            setSubmitError(err.message || t("errorSubmit") || "Failed to submit. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <motion.div variants={pageVariants} initial="hidden" animate="visible" className="min-h-screen bg-[#111111]">
            <AnimatePresence>
                {submitted && <SuccessOverlay t={t} />}
            </AnimatePresence>

            {/* ── Hero Section ────────────────────────────────────────────────── */}
            <section className="relative min-h-[50vh] w-full overflow-hidden md:min-h-[60vh]">
                {/* Background image – fills section */}
                <div className="absolute inset-0">
                    <Image
                        src={bannerImg}
                        alt="Reserved table at Naans & Curries"
                        priority
                        className="h-full w-full object-cover object-center brightness-[0.7]"
                    />
                </div>
                {/* Dark gradient overlay for readability */}
                <div className="absolute inset-0 bg-linear-to-t from-[#111111] via-[#111111]/40 to-transparent" />
                {/* Bottom strip: solid dark background with title */}
                <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center justify-center px-4 py-12 md:py-16 text-center">
                    <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#FFF7ED]" style={{ fontFamily: "var(--font-futura)" }}>
                        {t("reserveATable")}
                    </p>
                    <GoldDivider />
                    <h1 className="mt-2 text-4xl font-normal text-[#FFF7ED] md:text-7xl lg:text-8xl" style={{ fontFamily: "var(--font-ramillas)" }}>
                        {t("reservationForm")}
                    </h1>
                </div>
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
                                {t("bookingRequest")} <span className="font-bold">+506 83030123</span> {t("bookingRequestOr")}
                            </p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="mb-6">
                            <FieldWrapper label={t("selectLocation")}>
                                <div className="relative">
                                    <select name="location" value={form.location} onChange={handleChange} required className={selectClasses}>
                                        {locations.map((loc) => (
                                            <option key={loc} value={loc} className="bg-[#E5DDD0]">
                                                {loc}
                                            </option>
                                        ))}
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
                                <PhoneInput
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder={t("phoneNumber")}
                                    required
                                />
                            </FieldWrapper>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            <FieldWrapper label={t("noOfGuests")}>
                                <div className="relative">
                                    {!showCustomGuests ? (
                                        <select name="guests" value={form.guests} onChange={handleChange} required className={selectClasses}>
                                            <option value="" disabled>{t("noOfGuests")}</option>
                                            {personOptions.map((p) => <option key={p} value={p} className="bg-[#E5DDD0]">{p}</option>)}
                                            <option value="Other" className="bg-[#E5DDD0]">{t("other")}</option>
                                        </select>
                                    ) : (
                                        <div className="flex gap-2">
                                            <input
                                                type="number"
                                                name="guests"
                                                value={form.guests}
                                                onChange={handleChange}
                                                placeholder={t("noOfGuests")}
                                                min="1"
                                                required
                                                className={`${inputClasses} flex-1`}
                                                autoFocus
                                            />
                                            <button
                                                type="button"
                                                onClick={() => { setShowCustomGuests(false); setForm({ ...form, guests: "" }); }}
                                                className="border border-[#2C2C2C]/30 bg-[#2C2C2C] px-3 text-white transition-colors hover:bg-[#1A1A1A]"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    )}
                                    {!showCustomGuests && <ChevronIcon />}
                                </div>
                            </FieldWrapper>
                            <FieldWrapper label={t("date")}>
                                <input type="date" name="date" value={form.date} onChange={handleChange} min={today} required className={`${inputClasses} scheme-light`} />
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

                        {submitError && (
                            <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded px-4 py-2" style={{ fontFamily: "var(--font-futura)" }}>
                                {submitError}
                            </p>
                        )}

                        <div className="flex flex-col items-center pt-8">
                            <div className="border border-[#2C2C2C] rounded-sm p-1.5 flex transition-transform duration-300 hover:scale-[1.02]">
                                <motion.button
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={submitting}
                                    className="rounded-sm bg-[#2d2d2d] px-14 py-4 text-[12px] font-bold uppercase tracking-[0.3em] text-white transition-colors hover:bg-[#1A1A1A] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                                    style={{ fontFamily: "var(--font-futura)" }}
                                >
                                    {submitting ? (t("submitting") || "Sending…") : t("reserveTable")}
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
