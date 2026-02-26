"use client";

import BlogHero from "@/app/components/BlogHero";
import BlogFeatured from "@/app/components/BlogFeatured";
import BlogGrid from "@/app/components/BlogGrid";
import { LazyMotion, domMax, m } from "framer-motion";

export default function BlogPage() {
    return (
        <LazyMotion features={domMax}>
            <m.main
                className="min-h-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Blog Hero Section */}
                <BlogHero />

                {/* Featured Articles Grid */}
                <BlogFeatured />

                {/* Main Blog Grid */}
                <BlogGrid />

                {/* Spacing for a cleaner look */}
                <div className="h-24 md:h-32 bg-[#EFEDE7]" />
            </m.main>
        </LazyMotion>
    );
}
