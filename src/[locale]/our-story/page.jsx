"use client";

import { motion } from "framer-motion";
import OurStoryHero from "@/src/components/our-story/OurStoryHero";
import OurStoryContent from "@/src/components/our-story/OurStoryContent";
import { Helmet } from "react-helmet-async";

export default function OurStoryPage() {
  return (
    <motion.main
      className="min-h-screen w-full overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Our Story | Naans & Curries</title>
        <meta name="description" content="Discover the story behind Naans & Curries — from our first eatery to the passion, tradition, and flavors we bring to your table." />
      </Helmet>
      <OurStoryHero />
      <OurStoryContent />
    </motion.main>
  );
}
