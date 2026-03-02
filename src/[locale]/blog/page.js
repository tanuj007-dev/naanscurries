"use client";

import BlogHero from "@/src/components/BlogHero";
import BlogFeatured from "@/src/components/BlogFeatured";
import BlogGrid from "@/src/components/BlogGrid";
import { LazyMotion, domMax, m } from "framer-motion";
import { Helmet } from 'react-helmet-async';

export default function BlogPage() {
    return (
        <>
            <Helmet>
                <title>Our Blogs | Naans & Curries</title>
                <meta name="description" content="Stay updated with the latest insights and culinary stories from Naans & Curries." />
            </Helmet>
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
        </>
    );
}
