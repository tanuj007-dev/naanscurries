"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { useInView } from "@/hooks/useInView";

export default function CTA() {
  const t = useTranslations("About");
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const visible = isInView ? "opacity-100" : "opacity-0";
  const transition = "transition-all duration-600 ease-out";

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-6 py-20 md:py-28"
      aria-labelledby="cta-heading"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-amber-800/15 to-orange-900/20"
        aria-hidden
      />
      <div className="relative mx-auto max-w-2xl text-center">
        <h2
          id="cta-heading"
          className={`mb-4 text-3xl font-semibold tracking-tight md:text-4xl ${transition} ${visible}`}
        >
          {t("ctaHeading")}
        </h2>
        <p className={`mb-8 text-foreground/85 ${transition} ${visible}`} style={{ transitionDelay: "100ms" }}>
          {t("ctaDescription")}
        </p>
        <div className={`${transition} ${visible}`} style={{ transitionDelay: "200ms" }}>
          <Link
            href="/reservation"
            className="inline-block rounded-lg bg-foreground px-8 py-3.5 text-background transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-foreground/20 focus:outline-none focus:ring-2 focus:ring-foreground/50 focus:ring-offset-2"
          >
            {t("bookATable")}
          </Link>
        </div>
      </div>
    </section>
  );
}
