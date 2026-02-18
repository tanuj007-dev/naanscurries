"use client";

import { motion } from "framer-motion";

/**
 * AnimateOnScroll – wraps children in a Framer Motion element that
 * animates when it enters the viewport.
 *
 * Props:
 *   variant  – "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale"
 *   delay    – number (seconds), default 0
 *   duration – number (seconds), default 0.6
 *   className – forwarded to the motion div
 *   as       – HTML tag to render (default "div")
 */

const variants = {
    fadeUp: {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    slideLeft: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    },
    slideRight: {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    },
    scale: {
        hidden: { opacity: 0, scale: 0.92 },
        visible: { opacity: 1, scale: 1 },
    },
};

export default function AnimateOnScroll({
    children,
    variant = "fadeUp",
    delay = 0,
    duration = 0.6,
    className = "",
    as: Tag = "div",
}) {
    const MotionTag = motion[Tag] ?? motion.div;

    return (
        <MotionTag
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={variants[variant]}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1], // cubic-bezier ease-out
            }}
            // GPU hint: only transform + opacity animated → no layout shift
            style={{ willChange: "transform, opacity" }}
        >
            {children}
        </MotionTag>
    );
}
