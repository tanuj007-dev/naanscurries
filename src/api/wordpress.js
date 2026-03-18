/**
 * WordPress REST API client for headless blog.
 * Set VITE_WORDPRESS_API_URL in .env (e.g. https://yoursite.com or https://blog.yoursite.com).
 * No trailing slash.
 */

import { useState, useEffect } from "react";

const WP_BASE =
  typeof import.meta !== "undefined" && import.meta.env?.VITE_WORDPRESS_API_URL
    ? import.meta.env.VITE_WORDPRESS_API_URL.replace(/\/$/, "")
    : "";

export function isWordPressEnabled() {
  return Boolean(WP_BASE);
}

function stripHtml(html) {
  if (!html) return "";
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? "" : d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function mapPost(raw) {
  const embedded = raw._embedded || {};
  const featuredMedia = embedded["wp:featuredmedia"] && embedded["wp:featuredmedia"][0];
  const terms = embedded["wp:term"] || [];
  const categories = Array.isArray(terms[0]) ? terms[0] : [];
  const categoryName = raw.categories && raw.categories[0]
    ? (categories.find((t) => t.id === raw.categories[0])?.name || "Blog")
    : "Blog";

  return {
    id: raw.id,
    slug: raw.slug,
    title: stripHtml(raw.title?.rendered || ""),
    excerpt: stripHtml(raw.excerpt?.rendered || ""),
    content: raw.content?.rendered || "",
    date: raw.date,
    dateFormatted: formatDate(raw.date),
    category: categoryName,
    featuredImageUrl: featuredMedia?.source_url || null,
  };
}

/**
 * Fetch all published posts (for list and featured).
 * @param {number} perPage
 * @returns {Promise<{ slug: string, title: string, excerpt: string, dateFormatted: string, category: string, featuredImageUrl: string | null }[]>}
 */
export async function getWordPressPosts(perPage = 20) {
  if (!WP_BASE) return [];
  const res = await fetch(
    `${WP_BASE}/wp-json/wp/v2/posts?per_page=${perPage}&_embed&orderby=date&order=desc`
  );
  if (!res.ok) throw new Error("Failed to fetch posts");
  const data = await res.json();
  return Array.isArray(data) ? data.map(mapPost) : [];
}

/**
 * Fetch a single post by slug (for detail page).
 * @param {string} slug
 * @returns {Promise<{ slug: string, title: string, excerpt: string, content: string, dateFormatted: string, category: string, featuredImageUrl: string | null } | null>}
 */
export async function getWordPressPostBySlug(slug) {
  if (!WP_BASE || !slug) return null;
  const res = await fetch(
    `${WP_BASE}/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed`
  );
  if (!res.ok) throw new Error("Failed to fetch post");
  const data = await res.json();
  const raw = Array.isArray(data) && data[0] ? data[0] : null;
  return raw ? mapPost(raw) : null;
}

/**
 * React hook: fetch WordPress posts once. Returns { posts, loading, error }.
 * When WordPress is not configured, posts is [] and loading is false.
 */
export function useWordPressPosts(perPage = 20) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isWordPressEnabled()) return;
    setLoading(true);
    setError(null);
    getWordPressPosts(perPage)
      .then(setPosts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [perPage]);

  return { posts, loading, error };
}
