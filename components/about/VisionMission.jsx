"use client";

import { useTranslations } from "next-intl";
import { useInView } from "@/hooks/useInView";

const getCards = (t) => [
  { titleKey: "ourVision", descKey: "ourVisionDesc" },
  { titleKey: "ourMission", descKey: "ourMissionDesc" },
  { titleKey: "ourValues", descKey: "ourValuesDesc" },
];

export default function VisionMission() {
  const t = useTranslations("About");
  const [ref, isInView] = useInView({ threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
  const cards = getCards(t);

  const baseTransition = "transition-all duration-500 ease-out";
  const visible = isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";

  return (
    <section
      ref={ref}
      className="px-6 py-20 md:py-28"
      aria-labelledby="vision-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="vision-heading"
          className={`mb-12 text-center text-3xl font-semibold tracking-tight md:text-4xl ${baseTransition} ${visible} will-change-[transform,opacity]`}
        >
          {t("visionMission")}
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={card.titleKey}
              className={`rounded-xl border border-foreground/10 bg-background p-6 shadow-sm ${baseTransition} ${visible} will-change-[transform,opacity] hover:scale-[1.02] hover:shadow-md`}
              style={{
                transitionDelay: isInView ? `${100 + i * 100}ms` : "0ms",
              }}
            >
              <h3 className="mb-3 text-xl font-semibold">{t(card.titleKey)}</h3>
              <p className="text-foreground/85 leading-relaxed">{t(card.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
