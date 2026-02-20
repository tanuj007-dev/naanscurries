import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.js');


/** @type {import('next').NextConfig} */
const nextConfig = {
  // ─── Image Optimization ────────────────────────────────────────────────────
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
    // Modern formats: AVIF first (best compression), WebP fallback
    formats: ["image/avif", "image/webp"],
    // Responsive breakpoints aligned with Tailwind defaults
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimise layout shift: images are served with correct dimensions
    minimumCacheTTL: 31536000, // 1 year
  },

  // ─── Compiler ──────────────────────────────────────────────────────────────
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === "production",
  },

  // ─── Experimental ──────────────────────────────────────────────────────────
  experimental: {
    // Optimise CSS output (removes unused Tailwind classes at build time)
    optimizeCss: true,
    // Scroll restoration between navigations
    scrollRestoration: true,
  },
};

export default withNextIntl(nextConfig);

