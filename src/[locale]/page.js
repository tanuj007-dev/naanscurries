/**
 * Home page – App Router (Server Component by default).
 *
 * Strategy:
 *  • Herosection: statically imported (above-the-fold, critical path).
 *  • All other sections: lazy-loaded via @/src/compat/next-dynamic so they are
 *    code-split into separate JS chunks. ssr:true keeps HTML streaming
 *    intact for SEO; loading fallbacks show shimmer skeletons.
 */

import dynamic from "@/src/compat/next-dynamic";
import { Helmet } from 'react-helmet-async';
import Herosection from "@/src/components/Herosection";
import SectionSkeleton from "@/src/components/SectionSkeleton";

// ─── Lazy-loaded below-the-fold sections ────────────────────────────────────
const TheSpirit = dynamic(() => import("@/src/components/TheSpirit"), {
  loading: () => <SectionSkeleton height="h-[620px]" />,
});

const SignatureMenu = dynamic(() => import("@/src/components/SignatureMenu"), {
  loading: () => <SectionSkeleton height="h-[500px]" />,
});

const AuthRestaurant = dynamic(
  () => import("@/src/components/AuthRestaurant"),
  { loading: () => <SectionSkeleton height="h-[560px]" /> }
);

const Catering = dynamic(() => import("@/src/components/Catering"), {
  loading: () => <SectionSkeleton height="h-[600px]" />,
});

const Tradition = dynamic(() => import("@/src/components/Tradition"), {
  loading: () => <SectionSkeleton height="h-[560px]" />,
});

const Rooted = dynamic(() => import("@/src/components/Rooted"), {
  loading: () => <SectionSkeleton height="h-[700px]" />,
});

const HomeBlogs = dynamic(() => import("@/src/components/HomeBlogs"), {
  loading: () => <SectionSkeleton height="h-[480px]" />,
});

const OurLocations = dynamic(() => import("@/src/components/OurLocations"), {
  loading: () => <SectionSkeleton height="h-[500px]" />,
});



// Footer is now handled globally in layout.js

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Naans & Curries – An Ethnic Indian Restaurant</title>
        <meta name="description" content="Best Indian restaurant in Costa Rica. Traditional flavors, modern hospitality." />
      </Helmet>
      {/* Above-the-fold: statically imported, no lazy load */}
      <Herosection />

      {/* Below-the-fold: lazy-loaded chunks */}
      <TheSpirit />
      <SignatureMenu />
      <AuthRestaurant />
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
