"use client";

import { motion } from "framer-motion";

/**
 * AnimateOnScroll – wraps children in a Framer Motion element that
 * animates when it enters the viewport.
 *
 * Props:
 *   variant  – "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale" | "reveal"
 *   delay    – number (seconds), default 0
 *   duration – number (seconds), default 0.6
 *   className – forwarded to the motion div
 *   as       – HTML tag to render (default "div")
 *   threshold – visibility threshold (0 to 1)
 */

const variants = {
    fadeUp: {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    slideLeft: {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 },
    },
    slideRight: {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0 },
    },
    scale: {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    },
    reveal: {
        hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    },
};

export default function AnimateOnScroll({
    children,
    variant = "fadeUp",
    delay = 0,
    duration = 0.8,
    className = "",
    as: Tag = "div",
    threshold = 0.1,
    once = true,
}) {
    // We use motion[Tag] to support different HTML elements
    const MotionTag = motion[Tag] || motion.div;

    return (
        <MotionTag
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "-10% 0px -10% 0px", amount: threshold }}
            variants={variants[variant]}
            transition={{
                duration,
                delay,
                ease: [0.215, 0.61, 0.355, 1], // Better easeOutCubic
            }}
            // GPU hint: only transform + opacity animated → no layout shift
            style={{ willChange: "transform, opacity, filter" }}
        >
            {children}
        </MotionTag>
    );
}
