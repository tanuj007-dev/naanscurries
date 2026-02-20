"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reusable Intersection Observer hook for scroll-triggered animations.
 * Returns [ref, isInView] – attach ref to the element to observe.
 * @param {Object} options
 * @param {boolean} [options.triggerOnce=true] Once true, stay true (no exit animation)
 * @param {number} [options.threshold=0.1] Amount of element visible (0-1) to trigger
 * @param {string} [options.rootMargin="0px 0px -50px 0px"] Root margin (e.g. to trigger earlier)
 */
export function useInView(options = {}) {
  const {
    triggerOnce = true,
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
  } = options;

  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [triggerOnce, threshold, rootMargin]);

  return [ref, isInView];
}
