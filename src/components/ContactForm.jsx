"use client";

import { useState } from "react";
import Image from "@/src/compat/next-image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "@/src/compat/next-intl";
import { useRouter } from "@/src/compat/navigation";
import AnimateOnScroll from "./AnimateOnScroll";
import ReactCountryFlag from "react-country-flag";
import { ChevronDown, Check } from "lucide-react";
import chefImg from "./assets/6814ab7c116be14a9b9f6e80_5e203041ac405c8fe66abe099ac1f5b1_single-img-13.avif";
import { submitContact } from "@/src/api/client";

const phoneCountries = [
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

// â”€â”€â”€ Sub-Components â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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
        <div className="my-4 flex items-center justify-start gap-2">
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
    "w-full rounded-none border border-[#2C2C2C]/30 bg-[#FAF7F2] px-4 py-3 text-[14px] text-[#2C2C2C] outline-none transition-all duration-300 font-futura placeholder:text-[#2C2C2C]/40 focus:border-[#2C2C2C]";

function ContactSuccessOverlay({ t }) {
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
                    {t("redirecting")}
                </motion.p>
            </div>
        </motion.div>
    );
}

function ContactPhoneInput({ placeholder }) {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [selectedCountry, setSelectedCountry] = useState(phoneCountries.find((c) => c.iso === "CR") || phoneCountries[0]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handlePhoneChange = (e) => {
        setPhoneNumber(e.target.value.replace(/\D/g, ""));
    };

    return (
        <div className="relative">
            <div className="flex w-full border border-[#2C2C2C]/30 bg-[#FAF7F2] transition-all duration-300 focus-within:border-[#2C2C2C]">
                <button
                    type="button"
                    onClick={() => setDropdownOpen((o) => !o)}
                    className="flex items-center gap-1.5 border-r border-[#2C2C2C]/10 pl-3 pr-2 py-3 hover:bg-[#2C2C2C]/5 transition-colors"
                    style={{ fontFamily: "var(--font-futura)" }}
                >
                    <ReactCountryFlag countryCode={selectedCountry.iso} svg style={{ width: "22px", height: "16px" }} title={selectedCountry.name} />
                    <ChevronDown size={14} className={`text-[#2C2C2C]/60 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                <span className="flex items-center pl-2 text-[14px] text-[#2C2C2C]/80 pointer-events-none" style={{ fontFamily: "var(--font-futura)" }}>
                    {selectedCountry.code}
                </span>
                <input
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder={placeholder}
                    className="flex-1 min-w-0 rounded-none bg-transparent px-3 py-3 text-[14px] text-[#2C2C2C] outline-none font-futura placeholder:text-[#2C2C2C]/40"
                />
            </div>
            {dropdownOpen && (
                <>
                    <div className="fixed inset-0 z-10" onClick={() => setDropdownOpen(false)} aria-hidden />
                    <div className="absolute left-0 top-full z-20 mt-1 max-h-56 w-64 overflow-y-auto border border-[#2C2C2C]/15 bg-[#FAF7F2] shadow-lg">
                        {phoneCountries.map((c) => (
                            <button
                                key={c.iso}
                                type="button"
                                onClick={() => {
                                    setSelectedCountry(c);
                                    setDropdownOpen(false);
                                }}
                                className="flex w-full items-center gap-3 px-3 py-2.5 text-left hover:bg-[#2C2C2C]/5 transition-colors"
                            >
                                <ReactCountryFlag countryCode={c.iso} svg style={{ width: "20px", height: "14px" }} />
                                <span className="text-[13px] text-[#2C2C2C]" style={{ fontFamily: "var(--font-futura)" }}>{c.name}</span>
                                <span className="ml-auto text-[12px] text-[#2C2C2C]/60">{c.code}</span>
                            </button>
                        ))}
                    </div>
                </>
            )}
            <input type="hidden" name="phone" value={`${selectedCountry.code}${phoneNumber}`} readOnly />
        </div>
    );
}

// Main Component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export default function ContactForm() {
    const t = useTranslations("Contact");
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);
        const form = e.target;
        const name = (form.querySelector('input[name="name"]')?.value || "").trim();
        const email = (form.querySelector('input[name="email"]')?.value || "").trim();
        const phone = (form.querySelector('input[name="phone"]')?.value || "").trim();
        const message = (form.querySelector('textarea[name="message"]')?.value || "").trim();
        if (!name || !email) {
            setError(t("errorRequired") || "Name and email are required.");
            return;
        }
        setSubmitting(true);
        try {
            await submitContact({ name, email, phone: phone || undefined, message: message || undefined });
            setSuccess(true);
            form.reset();
            setTimeout(() => router.push("/"), 4000);
        } catch (err) {
            setError(err.message || t("errorSend") || "Failed to send. Try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="bg-[#E5DDD0] py-20 md:py-32 px-6 md:px-12 lg:px-24 relative">
            <AnimatePresence>
                {success && <ContactSuccessOverlay t={t} />}
            </AnimatePresence>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-stretch">

                    {/* Left Side: Image – height matches right column, image fills with object-cover */}
                    <div className="lg:col-span-5 min-h-[400px] lg:min-h-0 relative overflow-hidden">
                        <div className="absolute inset-0">
                            <AnimateOnScroll variant="reveal" className="h-full w-full">
                                <Image
                                    src={chefImg}
                                    alt="Our Chef"
                                    className="h-full w-full object-cover object-center"
                                />
                            </AnimateOnScroll>
                        </div>
                    </div>

                    {/* Right Side: Form Content */}
                    <div className="lg:col-span-7 bg-[#FAF7F2] p-8 md:p-12 lg:p-20 flex flex-col justify-center">
                        <AnimateOnScroll variant="fadeIn" delay={0.2}>
                            <div className="text-left mb-12">
                                <p className="text-[14px] font-bold uppercase tracking-[0.4em] text-[#2C2C2C]" style={{ fontFamily: "var(--font-futura)" }}>
                                    {t("formSubtitle")}
                                </p>
                                <GoldDivider />
                                <h2 className="mt-4 text-xl md:text-2xl font-normal text-[#2C2C2C] leading-tight" style={{ fontFamily: "var(--font-ramillas)" }}>
                                    {t("formTitle")}
                                </h2>
                            </div>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                {error && (
                                    <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded px-4 py-2" style={{ fontFamily: "var(--font-futura)" }}>
                                        {error}
                                    </p>
                                )}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FieldWrapper label={t("namePlaceholder")}>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder={t("namePlaceholder")}
                                            className={inputClasses}
                                            required
                                            disabled={submitting}
                                        />
                                    </FieldWrapper>
                                    <FieldWrapper label={t("phonePlaceholder")}>
                                        <ContactPhoneInput placeholder={t("phonePlaceholder")} />
                                    </FieldWrapper>
                                </div>

                                <FieldWrapper label={t("emailPlaceholder")}>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder={t("emailPlaceholder")}
                                        className={inputClasses}
                                        required
                                        disabled={submitting}
                                    />
                                </FieldWrapper>

                                <FieldWrapper label={t("messagePlaceholder")}>
                                    <textarea
                                        name="message"
                                        placeholder={t("messagePlaceholder")}
                                        rows={4}
                                        className={`${inputClasses} resize-none`}
                                        disabled={submitting}
                                    />
                                </FieldWrapper>

                                <div className="flex flex-col items-center pt-8">
                                    <div className="border border-[#2C2C2C] rounded-sm p-1.5 flex transition-transform duration-300 hover:scale-[1.02]">
                                        <motion.button
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            disabled={submitting}
                                            className="rounded-sm bg-[#2C2C2C] px-14 py-4 text-[12px] font-bold uppercase tracking-[0.3em] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                                            style={{ fontFamily: "var(--font-futura)" }}
                                        >
                                            {submitting ? (t("sending") || "Sending…") : t("sendButton")}
                                        </motion.button>
                                    </div>
                                </div>
                            </form>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
}
