/**
 * @file articles.js
 * @description Controller for the Articles page — wires the Blogger API service, the article-card component, category filters, token-based pagination, caching, and hash routing.
 * @module pages/articles
 */

import { mountLayout } from "../components/layout.js";
import { hideLoadingOverlay } from "../components/loading-overlay.js";
import { renderSeriesHeading } from "../components/series-heading.js";
import { fetchArticles } from "../services/blogger-api.js";
import {
  renderArticleCards,
  renderArticleCardSkeletons,
} from "../components/article-card.js";
import { resolveActiveKey } from "../utils/hash-routing.js";
import { escapeHtml } from "../utils/article-utils.js";
import { renderArticlePagination } from "../components/article-pagination.js";

const PAGE_SIZE = 12;
const DEFAULT_HASH = "scholarships";

const CACHE_STORAGE_KEY = "articles-page-cache-v2";
const CACHE_TTL = 10 * 60 * 1000;
const MAX_CACHED_PAGES = 10;

const ARTICLE_FILTERS = [
  { key: "scholarships", label: "Scholarships" },
  { key: "testing-and-curriculum", label: "Testing & Curriculum" },
  { key: "uk", label: "UK" },
  { key: "us", label: "US" },
  { key: "about-chate", label: "About ချိတ်" },
  { key: "all-articles", label: "All Articles" },
];

const ARTICLE_SERIES = {
  scholarships: { label: "Scholarships", heading: "Scholarships" },
  "testing-and-curriculum": {
    label: "Testing & Curriculum",
    heading: "Testing & Curriculum",
  },
  uk: { label: "UK", heading: "UK" },
  us: { label: "US", heading: "US" },
  "about-chate": {
    label: "About ချိတ် - The Hook",
    heading: "About ချိတ် - The Hook",
  },
  "all-articles": { label: null, heading: "Articles" },
};

const VALID_KEYS = new Set(Object.keys(ARTICLE_SERIES));
const stateByKey = new Map();

function createState() {
  return { createdAt: Date.now(), pages: [{ token: "" }], totalItems: null };
}

/** Keeps only what the article cards need, so memory and cache stay small. */
function slimArticle({ id, title, published, labels, content }) {
  const image = new DOMParser()
    .parseFromString(content || "", "text/html")
    .querySelector("img");
  const src = image?.getAttribute("src");

  return {
    id,
    title,
    published,
    labels,
    content: src ? `<img src="${escapeHtml(src)}">` : "",
  };
}

/** Returns page `index`, creating its placeholder from the previous page's token. */
function getPage(state, index) {
  if (index < 0) return null;
  if (index === 0) return state.pages[0];

  const previous = state.pages[index - 1];

  if (!previous?.nextToken) return null;

  state.pages[index] ??= { token: previous.nextToken };
  return state.pages[index];
}

/**
 * Loads one page. Concurrent calls for the same page share one request.
 * Resolves to the page, or to null when the page turned out to be empty (in which case the previous page becomes the last one).
 */
function loadPage(state, activeKey, index) {
  const page = getPage(state, index);

  if (!page) return Promise.resolve(null);
  if (page.items) return Promise.resolve(page);

  if (!page.request) {
    page.request = fetchArticles({
      maxResults: PAGE_SIZE,
      pageToken: page.token,
      label: ARTICLE_SERIES[activeKey].label,
    })
      .then((response) => {
        const items = (response.items || []).map(slimArticle);

        if (!items.length && index > 0) {
          state.pages.length = index;
          state.pages[index - 1].nextToken = "";
          state.totalItems = index * PAGE_SIZE;
          return null;
        }

        page.items = items;
        page.nextToken = response.nextPageToken || "";

        if (!page.nextToken) {
          state.totalItems = index * PAGE_SIZE + items.length;
        }

        return page;
      })
      .finally(() => {
        page.request = null;
      });
  }

  return page.request;
}

function readCacheStore() {
  try {
    const store = JSON.parse(sessionStorage.getItem(CACHE_STORAGE_KEY));
    return store && typeof store === "object" ? store : {};
  } catch {
    return {};
  }
}

function loadCachedState(activeKey) {
  const entry = readCacheStore()[activeKey];

  if (
    !entry ||
    Date.now() - entry.createdAt > CACHE_TTL ||
    !Array.isArray(entry.pages) ||
    !entry.pages.length ||
    entry.pages.some((page) => page.items && !Array.isArray(page.items))
  ) {
    return null;
  }

  return {
    createdAt: entry.createdAt,
    totalItems: entry.totalItems ?? null,
    pages: entry.pages.map(({ token, items, nextToken }) =>
      items ? { token, items, nextToken } : { token },
    ),
  };
}

function saveCachedState(activeKey, state) {
  const entry = {
    createdAt: state.createdAt,
    totalItems: state.totalItems,
    pages: state.pages
      .slice(0, MAX_CACHED_PAGES)
      .map(({ token, items, nextToken }) =>
        items ? { token, items, nextToken } : { token },
      ),
  };

  const store = {};
  const existing = readCacheStore();

  Object.keys(existing).forEach((key) => {
    if (Date.now() - existing[key]?.createdAt <= CACHE_TTL) {
      store[key] = existing[key];
    }
  });
  store[activeKey] = entry;

  try {
    sessionStorage.setItem(CACHE_STORAGE_KEY, JSON.stringify(store));
  } catch {
    // Storage full or unavailable: keep only this category, or give up quietly.
    try {
      sessionStorage.setItem(
        CACHE_STORAGE_KEY,
        JSON.stringify({ [activeKey]: entry }),
      );
    } catch {
      console.warn("Articles cache could not be saved:", error);
    }
  }
}

/** Memory first, then sessionStorage, otherwise a fresh state. Expired states are dropped. */
function getState(activeKey) {
  const existing = stateByKey.get(activeKey);

  if (existing && Date.now() - existing.createdAt <= CACHE_TTL) {
    return existing;
  }

  const state = loadCachedState(activeKey) ?? createState();
  stateByKey.set(activeKey, state);
  return state;
}

async function initArticlesPage() {
  try {
    await mountLayout();
  } catch (err) {
    console.error("Failed to mount layout:", err);
  }

  const articlesPanel = document.getElementById("article-cards");
  const articleHeading = document.getElementById("article-heading");
  const pagination = document.getElementById("article-pagination");

  let currentKey = DEFAULT_HASH;
  let currentIndex = -1;
  let requestedIndex = 0;
  let navigationId = 0;

  function renderHeading(activeKey) {
    articleHeading.innerHTML = renderSeriesHeading({
      titleMain: "All",
      titleAccent: ARTICLE_SERIES[activeKey].heading,
      filters: ARTICLE_FILTERS,
    });

    ARTICLE_FILTERS.forEach(({ key }) => {
      const button = document.getElementById(`${key}-button`);
      button?.classList.toggle("is-active", key === activeKey);
      button?.addEventListener("click", () => {
        location.hash = key;
      });
    });
  }

  function renderPagination(state, activeIndex) {
    const page = state.pages[activeIndex];
    const startItem = activeIndex * PAGE_SIZE + 1;

    pagination.innerHTML = renderArticlePagination({
      activePage: activeIndex,
      hasNextPage: Boolean(page?.nextToken),
      startItem,
      endItem: startItem + (page?.items?.length || 0) - 1,
      totalItems: state.totalItems,
    });
  }

  function scrollToListingTop() {
    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    articleHeading.scrollIntoView({
      block: "start",
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  async function showPage(activeKey, index, { scroll = false } = {}) {
    const navigation = ++navigationId;
    const state = getState(activeKey);
    const page = getPage(state, index);

    requestedIndex = index;

    if (!page) {
      hideLoadingOverlay();
      return;
    }

    if (!page.items) {
      articlesPanel.innerHTML = renderArticleCardSkeletons(PAGE_SIZE);
      pagination.setAttribute("aria-busy", "true");
    }

    try {
      const loadedPage = await loadPage(state, activeKey, index);

      if (navigation !== navigationId) return;

      // The page was empty, so the previous page is the real last page.
      if (!loadedPage) {
        await showPage(activeKey, index - 1, { scroll });
        return;
      }

      currentKey = activeKey;
      currentIndex = index;
      articlesPanel.innerHTML = renderArticleCards(loadedPage.items);
      renderPagination(state, index);
      saveCachedState(activeKey, state);

      if (scroll) scrollToListingTop();
    } catch (error) {
      if (navigation !== navigationId) return;

      console.error("Failed to load articles:", error);
      articlesPanel.innerHTML = `<p class="series-state series-state--error">Articles could not be loaded right now. <button type="button" class="series-state__retry" data-retry>Try again</button></p>`;
    } finally {
      if (navigation === navigationId) {
        pagination.removeAttribute("aria-busy");
        hideLoadingOverlay();
      }
    }
  }

  function updateArticlesPage() {
    const activeKey = resolveActiveKey(VALID_KEYS, DEFAULT_HASH);

    currentKey = activeKey;
    currentIndex = -1;
    pagination.innerHTML = "";

    renderHeading(activeKey);
    showPage(activeKey, 0);
  }

  // One delegated listener instead of re-binding on every render.
  pagination.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-page]");

    if (!button || button.disabled) return;

    const index = Number(button.dataset.page);

    if (!Number.isInteger(index) || index === currentIndex) return;

    showPage(currentKey, index, { scroll: true });
  });

  articlesPanel.addEventListener("click", (event) => {
    if (event.target.closest("[data-retry]")) {
      showPage(currentKey, requestedIndex);
    }
  });

  window.addEventListener("hashchange", updateArticlesPage);
  updateArticlesPage();
}

initArticlesPage();
