"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { useInView } from "@/hooks/useInView";

const getStats = (t) => [
  { value: 15, suffix: "+", labelKey: "yearsExperience" },
  { value: 50, suffix: "+", labelKey: "signatureDishes" },
  { value: 100, suffix: "K+", labelKey: "happyGuests" },
  { value: 3, suffix: "", labelKey: "locations" },
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

function StatItem({ value: target, suffix, labelKey, t, isInView, startCount }) {
  const label = t(labelKey);
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || !startCount || hasAnimated.current) return;
    hasAnimated.current = true;
    animateValue(0, target, 1600, setDisplayValue);
  }, [isInView, startCount, target]);

  return (
    <div className="text-center">
      <div className="mb-1 text-3xl font-semibold tabular-nums md:text-4xl">
        {displayValue}
        {suffix}
      </div>
      <div className="text-sm text-foreground/70 md:text-base">{label}</div>
    </div>
  );
}

export default function Stats() {
  const t = useTranslations("About");
  const [ref, isInView] = useInView({ threshold: 0.2 });
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
      className="border-y border-foreground/10 bg-background px-6 py-16 md:py-20"
      aria-label="Statistics"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
        {stats.map((stat) => (
          <StatItem
            key={stat.labelKey}
            value={stat.value}
            suffix={stat.suffix}
            labelKey={stat.labelKey}
            t={t}
            isInView={isInView}
            startCount={startCount}
          />
        ))}
      </div>
    </section>
  );
}
