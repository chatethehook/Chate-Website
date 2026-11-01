/**
 * @file blogger-api.js
 * @description Blogger API service — fetches posts through the /api/blogger Netlify Function proxy, with optional server-side label filtering and pagination.
 * @module services/blogger-api
 */

const API_URL = "/api/blogger";

export async function fetchArticles({
  maxResults,
  pageToken = "",
  label = null,
}) {
  const params = new URLSearchParams({ maxResults });
  if (pageToken) params.set("pageToken", pageToken);
  if (label) params.set("label", label);

  const response = await fetch(`${API_URL}?${params}`);

  if (!response.ok)
    throw new Error(`Failed to fetch articles: ${response.status}`);

  return response.json();
}

export async function fetchArticle(articleId) {
  const postId = articleId.split("post-").pop();

  const response = await fetch(`${API_URL}?id=${encodeURIComponent(postId)}`);

  if (!response.ok)
    throw new Error(`Failed to fetch article: ${response.status}`);

  return response.json();
}
