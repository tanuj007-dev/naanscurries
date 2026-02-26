"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Hero from "@/components/about/Hero";
import AboutStats from "@/components/about/AboutStats";
import AboutLocations from "@/components/about/AboutLocations";
import Team from "@/components/about/Team";

const AboutSection = dynamic(() => import("@/components/about/AboutSection"), {
  loading: () => <div className="min-h-[400px]" aria-hidden />,
});
const VisionMission = dynamic(() => import("@/components/about/VisionMission"), {
  loading: () => <div className="min-h-[320px]" aria-hidden />,
});
const Timeline = dynamic(() => import("@/components/about/Timeline"), {
  loading: () => <div className="min-h-[400px]" aria-hidden />,
});
const CTA = dynamic(() => import("@/components/about/CTA"), {
  loading: () => <div className="h-64" aria-hidden />,
});

export default function AboutPage() {
  return (
    <motion.main
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <AboutStats />
      <AboutSection />
      <Team />
      <AboutLocations />
    </motion.main>
  );
}
