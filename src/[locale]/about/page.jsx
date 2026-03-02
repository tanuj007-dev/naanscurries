"use client";

import dynamic from "@/src/compat/next-dynamic";
import { motion } from "framer-motion";
import Hero from "@/src/components/about/Hero";
import AboutStats from "@/src/components/about/AboutStats";
import AboutLocations from "@/src/components/about/AboutLocations";
import Team from "@/src/components/about/Team";

const AboutSection = dynamic(() => import("@/src/components/about/AboutSection"), {
  loading: () => <div className="min-h-[400px]" aria-hidden />,
});
const VisionMission = dynamic(() => import("@/src/components/about/VisionMission"), {
  loading: () => <div className="min-h-[320px]" aria-hidden />,
});
const Timeline = dynamic(() => import("@/src/components/about/Timeline"), {
  loading: () => <div className="min-h-[400px]" aria-hidden />,
});
const CTA = dynamic(() => import("@/src/components/about/CTA"), {
  loading: () => <div className="h-64" aria-hidden />,
});

import { Helmet } from 'react-helmet-async';

export default function AboutPage() {
  return (
    <motion.main
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>About Us | Naans & Curries</title>
        <meta name="description" content="At Naans & Curries, we bring the richness of Indian cuisine to your table — fresh, fiery, and full of soul." />
      </Helmet>
      <Hero />
      <AboutStats />
      <AboutSection />
      <Team />
      <AboutLocations />
    </motion.main>
  );
}
