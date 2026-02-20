import dynamic from "next/dynamic";
import Hero from "@/components/about/Hero";

const AboutSection = dynamic(() => import("@/components/about/AboutSection"), {
  loading: () => <div className="min-h-[400px]" aria-hidden />,
});
const Stats = dynamic(() => import("@/components/about/Stats"), {
  loading: () => <div className="h-48" aria-hidden />,
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

export const metadata = {
  title: "About Us – Naans & Curries",
  description:
    "Our story, vision, and mission. Authentic Indian cuisine and warm hospitality since the beginning.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSection />
      <Stats />
      <VisionMission />
      <Timeline />
      <CTA />
    </main>
  );
}
