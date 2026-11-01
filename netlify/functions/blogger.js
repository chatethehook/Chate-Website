/**
 * @file blogger.js
 * @description Netlify Function that proxies requests to the Blogger API so the API key stays on the server.
 * @module netlify/functions/blogger
 */

const BASE_URL =
  "https://www.googleapis.com/blogger/v3/blogs/136726928350551179/posts";

export default async function proxyBloggerRequest(req) {
  const url = new URL(req.url);
  const params = new URLSearchParams({ key: process.env.BLOGGER_API_KEY });

  const id = url.searchParams.get("id");
  let target = BASE_URL;

  if (id) {
    if (!/^\d+$/.test(id)) return new Response("Bad request", { status: 400 });
    target = `${BASE_URL}/${id}`;
  } else {
    const max = Math.max(
      1,
      Math.min(Number(url.searchParams.get("maxResults")) || 12, 20),
    );
    params.set("maxResults", max);

    const pageToken = url.searchParams.get("pageToken");
    const label = url.searchParams.get("label");
    if (pageToken) params.set("pageToken", pageToken);
    if (label) params.set("label", label);
  }

  const res = await fetch(`${target}?${params}`);

  return new Response(res.body, {
    status: res.status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=300",
    },
  });
}

export const config = { path: "/api/blogger" };
