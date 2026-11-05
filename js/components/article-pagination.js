/**
 * @file article-pagination.js
 * @description Renders the pagination bar markup for the Articles page — item range, page number buttons, and prev/next arrows. Blogger does not report a total article count, so the bar never needs one. It only knows the current page and whether a next page exists, and builds a sliding window around the current page:
 *
 *   page 1  ->  1 2
 *   page 2  ->  1 2 3
 *   page 3  ->  1 2 3 4
 *   page 4  ->  1 2 3 4 5
 *   page 5  ->  1 … 3 4 5 6
 *   page 6  ->  1 … 4 5 6 7
 *
 * Going backwards walks the exact same sequence in reverse.
 * @module components/article-pagination
 */

const ICON_ATTRIBUTES = `
  class="article-listing__page-icon"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"`;

const PREV_ICON = `<svg ${ICON_ATTRIBUTES}><path d="M15 18l-6-6 6-6" /></svg>`;
const NEXT_ICON = `<svg ${ICON_ATTRIBUTES}><path d="M9 18l6-6-6-6" /></svg>`;

/**
 * Returns the items to show, as 0-based page indexes and the string "ellipsis".
 * Page 1 (index 0) is always shown; the rest is a window that ends one page after the active page (or at the active page when it is the last one).
 */
export function buildPageItems(activePage, hasNextPage) {
  const windowStart = Math.max(
    0,
    hasNextPage ? activePage - 2 : activePage - 3,
  );
  const windowEnd = hasNextPage ? activePage + 1 : activePage;
  const items = [];

  if (windowStart > 0) items.push(0);
  if (windowStart > 1) items.push("ellipsis");

  for (let index = windowStart; index <= windowEnd; index += 1) {
    items.push(index);
  }

  return items;
}

export function renderArticlePagination({
  activePage,
  hasNextPage,
  startItem,
  endItem,
  totalItems = null,
}) {
  // Only one page of results: nothing to paginate.
  if (activePage === 0 && !hasNextPage) return "";

  const pageButtonsHtml = buildPageItems(activePage, hasNextPage)
    .map((item) => {
      if (item === "ellipsis") {
        return `<span class="article-listing__ellipsis" aria-hidden="true">…</span>`;
      }

      const isActive = item === activePage;

      return `
      <button
        type="button"
        class="article-listing__page${isActive ? " is-active" : ""}"
        data-page="${item}"
        aria-label="Go to article page ${item + 1}"
        ${isActive ? 'aria-current="page"' : ""}
      >
        ${item + 1}
      </button>`;
    })
    .join("");

  const rangeText = `${startItem}-${endItem}${totalItems ? ` of ${totalItems}` : ""} items`;

  return `
    <span class="article-listing__range">${rangeText}</span>
    <button
      type="button"
      class="article-listing__page article-listing__page--arrow"
      data-page="${activePage - 1}"
      aria-label="Previous article page"
      ${activePage === 0 ? "disabled" : ""}
    >${PREV_ICON}</button>
    ${pageButtonsHtml}
    <button
      type="button"
      class="article-listing__page article-listing__page--arrow"
      data-page="${activePage + 1}"
      aria-label="Next article page"
      ${hasNextPage ? "" : "disabled"}
    >${NEXT_ICON}</button>`;
}
