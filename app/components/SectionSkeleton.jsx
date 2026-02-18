/**
 * SectionSkeleton – lightweight shimmer placeholder shown while
 * lazy-loaded sections are being fetched. No JS required.
 */
export default function SectionSkeleton({ height = "h-96" }) {
    return (
        <div
            className={`w-full ${height} skeleton`}
            role="status"
            aria-label="Loading section…"
        />
    );
}
