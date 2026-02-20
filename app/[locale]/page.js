/**
 * Home page – App Router (Server Component by default).
 *
 * Strategy:
 *  • Herosection: statically imported (above-the-fold, critical path).
 *  • All other sections: lazy-loaded via next/dynamic so they are
 *    code-split into separate JS chunks. ssr:true keeps HTML streaming
 *    intact for SEO; loading fallbacks show shimmer skeletons.
 */

import dynamic from "next/dynamic";
import Herosection from "@/app/components/Herosection";
import SectionSkeleton from "@/app/components/SectionSkeleton";

// ─── Lazy-loaded below-the-fold sections ────────────────────────────────────
const TheSpirit = dynamic(() => import("@/app/components/TheSpirit"), {
  loading: () => <SectionSkeleton height="h-[620px]" />,
});

const SignatureMenu = dynamic(() => import("@/app/components/SignatureMenu"), {
  loading: () => <SectionSkeleton height="h-[500px]" />,
});

const AuthResturant = dynamic(
  () => import("@/app/components/AuthResturant"),
  { loading: () => <SectionSkeleton height="h-[560px]" /> }
);

const Catering = dynamic(() => import("@/app/components/Catering"), {
  loading: () => <SectionSkeleton height="h-[600px]" />,
});

const Tradition = dynamic(() => import("@/app/components/Tradition"), {
  loading: () => <SectionSkeleton height="h-[560px]" />,
});

const Rooted = dynamic(() => import("@/app/components/Rooted"), {
  loading: () => <SectionSkeleton height="h-[700px]" />,
});

const HomeBlogs = dynamic(() => import("@/app/components/HomeBlogs"), {
  loading: () => <SectionSkeleton height="h-[480px]" />,
});

const OurLocations = dynamic(() => import("@/app/components/OurLocations"), {
  loading: () => <SectionSkeleton height="h-[500px]" />,
});



// Footer is now handled globally in layout.js

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/* Above-the-fold: statically imported, no lazy load */}
      <Herosection />

      {/* Below-the-fold: lazy-loaded chunks */}
      <TheSpirit />
      <SignatureMenu />
      <AuthResturant />
      <Catering />
      <Tradition />
      <Rooted />
      <div className="bg-[#F8F5EF]">
        <HomeBlogs />
      </div>
      <OurLocations />
    </>
  );
}
