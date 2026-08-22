/**
 * @file video-grid.js
 * @description Renders a grid of video cards based on the provided series data.
 * @module components/video-grid
 */

const MYANMAR_SCRIPT_PATTERN = /[\u1000-\u109F]+/g;

/**
 * Wraps any Myanmar-script substrings in a given string with
 * <span lang="my">...</span> so Myanmar Sagar renders correctly.
 */
function wrapMyanmarScript(text) {
  if (!text) return "";
  return text.replace(
    MYANMAR_SCRIPT_PATTERN,
    (match) => `<span lang="my">${match}</span>`,
  );
}

function renderVideoCard(entry) {
  const secondaryHtml = entry.secondaryLine
    ? `<p class="video-grid__secondary">${wrapMyanmarScript(entry.secondaryLine)}</p>`
    : "";

  const notesHtml = entry.notes
    .map((note) => `<p class="video-grid__note">${wrapMyanmarScript(note)}</p>`)
    .join("");

  return `
    <div class="video-grid__col">
      <div class="video-grid__card">
        <div class="video-grid__frame">
          <iframe
            class="video-grid__iframe lazy-iframe"
            data-src="${entry.videoSrc}"
            title="${entry.title}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <h3 class="video-grid__title">${wrapMyanmarScript(entry.title)}</h3>
        <p class="video-grid__role">
          ${wrapMyanmarScript(entry.rolePrefix)} <span class="video-grid__name">${wrapMyanmarScript(entry.personName)}</span>
        </p>
        ${secondaryHtml}
        ${notesHtml}
      </div>
    </div>`;
}

export function renderVideoGrid(series) {
  const cardsHtml = series.entries.map(renderVideoCard).join("");

  return `
    <div class="video-grid__heading-row">
      <h2 class="video-grid__heading">
        ${wrapMyanmarScript(series.titleMain)}
        <span class="video-grid__highlight">${wrapMyanmarScript(series.titleAccent)}</span>
      </h2>
      <nav class="video-grid__series-nav" aria-label="Video category filter">
        <button id="su-tu-pyu-button" class="selector" type="button">
          <span class="fw-bold" lang="my">စုတုပြု</span>
        </button>
        <button id="scholars-diaries-button" class="selector" type="button">
          <span class="fw-bold">Scholars' Diaries</span>
        </button>
      </nav>
    </div>
    <div class="video-grid__row">
      ${cardsHtml}
    </div>`;
}

/**
 * Lazily loads video-grid iframes: copies data-src -> src only when
 * the iframe scrolls into view, so videos don't all load up front.
 * Call this once after renderVideoGrid()'s HTML has been inserted into the DOM.
 */
export function initLazyVideoGrid(container) {
  if (!container) return;

  const iframes = container.querySelectorAll(".lazy-iframe[data-src]");

  if (iframes.length === 0) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const iframe = entry.target;
        iframe.src = iframe.dataset.src;
        iframe.removeAttribute("data-src");
        obs.unobserve(iframe);
      });
    },
    { rootMargin: "200px" },
  );

  iframes.forEach((iframe) => observer.observe(iframe));
}
