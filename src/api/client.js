/**
 * Base URL for the backend API. Resolved at request time so it works in dev, preview, and production.
 */
function getApiBase() {
  if (typeof import.meta !== "undefined" && import.meta.env?.VITE_API_URL) {
    return String(import.meta.env.VITE_API_URL).replace(/\/$/, "");
  }
  if (typeof window !== "undefined" && window.location?.hostname === "localhost") {
    return "http://localhost:4000";
  }
  if (typeof import.meta !== "undefined" && import.meta.env?.DEV) {
    return "http://localhost:4000";
  }
  return "";
}

export async function submitContact(data) {
  const base = getApiBase();
  const res = await fetch(`${base}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(json.error || "Failed to send message");
  return json;
}

export async function submitReservation(data) {
  const base = getApiBase();
  const res = await fetch(`${base}/api/reservation`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(json.error || "Failed to submit reservation");
  return json;
}
