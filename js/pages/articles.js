/**
 * @file articles.js
 * @description Controller for the Articles page — wires the Blogger API service,
 * the article-card component, filter buttons, "load more" pagination, and hash routing.
 * @module pages/articles
 */

import { mountLayout } from "../components/layout.js";
import { fetchArticles } from "../services/blogger-api.js";
import { renderArticleCards } from "../components/article-card.js";

async function initArticlesPage() {
  try {
    await mountLayout();
  } catch (err) {
    console.error("Failed to mount layout:", err);
  }

  const INITIAL_COUNT = 8;
  const LOAD_MORE_COUNT = 8;
  const DEFAULT_HASH = "scholarships";

  const filterButtons = {
    scholarships: document.getElementById("scholarships-button"),
    "testing-and-curriculum": document.getElementById(
      "testing-and-curriculum-button",
    ),
    uk: document.getElementById("uk-button"),
    us: document.getElementById("us-button"),
    "about-chate": document.getElementById("about-chate-button"),
    "all-articles": document.getElementById("all-articles-button"),
  };

  const articlesPanel = document.getElementById("articles-panel");
  const headerText = document.getElementById("articles-header-text");
  const moreButton = document.getElementById("moreContent");

  const articleSeries = {
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

  let articles = [];
  let nextPageToken = "";

  function getActiveKey() {
    const hash = location.hash.replace("#", "");
    return articleSeries[hash] ? hash : DEFAULT_HASH;
  }

  function highlightActiveButton(activeKey) {
    Object.entries(filterButtons).forEach(([key, button]) => {
      button?.classList.toggle("clicked", key === activeKey);
    });
  }

  async function loadPage(activeKey, { reset }) {
    if (reset) {
      articles = [];
      nextPageToken = "";
      articlesPanel.innerHTML = "";
      moreButton.disabled = false;
      headerText.textContent = articleSeries[activeKey].heading;
    }

    const { items = [], nextPageToken: newToken } = await fetchArticles({
      maxResults: reset ? INITIAL_COUNT : LOAD_MORE_COUNT,
      pageToken: nextPageToken,
      label: articleSeries[activeKey].label,
    });

    articles = articles.concat(items);
    nextPageToken = newToken || "";
    moreButton.disabled = !nextPageToken;

    articlesPanel.innerHTML = renderArticleCards(articles);
  }

  function update() {
    const activeKey = getActiveKey();
    highlightActiveButton(activeKey);
    loadPage(activeKey, { reset: true });
  }

  Object.entries(filterButtons).forEach(([key, button]) => {
    button?.addEventListener("click", () => {
      location.hash = key;
    });
  });

  moreButton.addEventListener("click", () => {
    loadPage(getActiveKey(), { reset: false });
  });

  window.addEventListener("hashchange", update);
  update();
}

initArticlesPage();
