/**
 * @file article-modal.js
 * @description Renders the modal markup for a single Blogger article post, used in conjunction with the article card.
 * @module components/article-modal
 */

import { formatDate, formatLabels } from "../utils/article-utils.js";
import DOMPurify from "dompurify";

export function createArticleModal(article, index) {
  const modalId = `article-modal-${index}`;
  const titleId = `article-modal-title-${index}`;
  const safeTitle = DOMPurify.sanitize(article.title, { ALLOWED_TAGS: [] });

  return `
    <div
      class="modal fade"
      id="${modalId}"
      tabindex="-1"
      aria-labelledby="${titleId}"
      aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="${titleId}">
              ${safeTitle}
            </h1>
            <button
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close">
            </button>
          </div>

          <div class="modal-body">
            <div class="mb-2">
              <span class="fw-semibold m-2 textaccent">
                ${formatDate(article.published)}
              </span>
              <span class="fw-semibold m-2 mt-0 text-body-secondary">
                ${formatLabels(article.labels)}
              </span>
            </div>

            ${DOMPurify.sanitize(article.content)}
          </div>
        </div>
      </div>
    </div>
  `;
}
