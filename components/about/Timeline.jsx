"use client";

import { useTranslations } from "next-intl";
import { useInView } from "@/hooks/useInView";

const getItems = (t) => [
  { year: "2009", titleKey: "timeline2009Title", descKey: "timeline2009Desc" },
  { year: "2012", titleKey: "timeline2012Title", descKey: "timeline2012Desc" },
  { year: "2016", titleKey: "timeline2016Title", descKey: "timeline2016Desc" },
  { year: "2020", titleKey: "timeline2020Title", descKey: "timeline2020Desc" },
  { year: "2024", titleKey: "timeline2024Title", descKey: "timeline2024Desc" },
];

export default function Timeline() {
  const t = useTranslations("About");
  const [ref, isInView] = useInView({ threshold: 0.1, rootMargin: "0px 0px -60px 0px" });
  const items = getItems(t);

  const baseTransition = "transition-all duration-600 ease-out";

  return (
    <section
      ref={ref}
      className="border-t border-foreground/10 px-6 py-20 md:py-28"
      aria-labelledby="timeline-heading"
    >
      <div className="mx-auto max-w-2xl">
        <h2
          id="timeline-heading"
          className="mb-14 text-center text-3xl font-semibold tracking-tight md:text-4xl"
        >
          {t("timelineTitle")}
        </h2>
        <div className="relative">
          {/* vertical line */}
          <div
            className="absolute left-[11px] top-0 bottom-0 w-px bg-foreground/20 md:left-4"
            aria-hidden
          />
          {items.map((item, i) => {
            const visible = isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6";
            return (
              <div
                key={item.year + item.titleKey}
                className={`relative flex gap-6 pb-12 last:pb-0 ${baseTransition} ${visible} will-change-[transform,opacity]`}
                style={{
                  transitionDelay: isInView ? `${150 + i * 120}ms` : "0ms",
                }}
              >
                <div
                  className="relative z-10 h-6 w-6 shrink-0 rounded-full border-2 border-foreground/30 bg-background md:h-8 md:w-8"
                  aria-hidden
                />
                <div className="pt-0.5">
                  <span className="text-sm font-medium text-foreground/70">{item.year}</span>
                  <h3 className="mt-1 text-lg font-semibold">{t(item.titleKey)}</h3>
                  <p className="mt-1 text-foreground/85">{t(item.descKey)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
