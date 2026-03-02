"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "@/src/compat/next-intl";
import { useInView } from "@/src/hooks/useInView";
import { motion } from "framer-motion";

const getStats = (t) => [
    { value: 24, suffix: "k+", label: t("statsCustomers") },
    { value: 4, suffix: "k+", label: t("statsEvents") },
    { value: 20, suffix: "k+", label: t("statsOrders") },
];

function animateValue(from, to, duration, onUpdate, onComplete) {
    const start = performance.now();
    const diff = to - from;

    function step(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - (1 - progress) * (1 - progress);
        const current = Math.round(from + diff * easeOut);
        onUpdate(current);
        if (progress < 1) requestAnimationFrame(step);
        else onComplete?.();
    }

    requestAnimationFrame(step);
}

function StatCard({ value: target, suffix, label, isInView, startCount, delay }) {
    const [displayValue, setDisplayValue] = useState(0);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!isInView || !startCount || hasAnimated.current) return;
        hasAnimated.current = true;
        setTimeout(() => {
            animateValue(0, target, 1600, setDisplayValue);
        }, delay * 1000);
    }, [isInView, startCount, target, delay]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay }}
            className="bg-white px-6 py-10 md:py-8 text-center shadow-sm flex flex-col items-center justify-center min-w-[200px] w-full"
        >
            <div className="text-[42px] md:text-[56px] lg:text-[64px] text-[#2C2C2C] leading-none mb-3 tabular-nums font-normal" style={{ fontFamily: "var(--font-ramillas)" }}>
                {displayValue}{suffix}
            </div>
            <div className="text-[10px] md:text-[12px] uppercase tracking-[0.2em] text-[#2C2C2C]/50 font-bold" style={{ fontFamily: "var(--font-futura)" }}>
                {label}
            </div>
        </motion.div>
    );
}

export default function AboutStats() {
    const t = useTranslations("About");
    const [ref, isInView] = useInView({ threshold: 0.1 });
    const [startCount, setStartCount] = useState(false);
    const started = useRef(false);
    const stats = getStats(t);

    useEffect(() => {
        if (isInView && !started.current) {
            started.current = true;
            setStartCount(true);
        }
    }, [isInView]);

    return (
        <section
            ref={ref}
            className="relative z-30 px-6 -mt-24 md:-mt-32 lg:-mt-12 -mb-20 md:-mb-24 lg:-mb-18"
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-6 lg:gap-8">
                {stats.map((stat, idx) => (
                    <StatCard
                        key={idx}
                        value={stat.value}
                        suffix={stat.suffix}
                        label={stat.label}
                        isInView={isInView}
                        startCount={startCount}
                        delay={idx * 0.15}
                    />
                ))}
            </div>
        </section>
    );
}
