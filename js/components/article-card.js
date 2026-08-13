/**
 * @file article-card.js
 * @description Renders the article card markup for a single Blogger article post, including the thumbnail, title, date, labels, and a button to open the modal.
 * @module components/article-card
 */

import {
  formatDate,
  formatLabels,
  extractThumbnail,
} from "../utils/article-utils.js";
import { createArticleModal } from "./article-modal.js";

function renderArticleCard(article, index) {
  const image = extractThumbnail(article.content);
  const date = formatDate(article.published);
  const labels = formatLabels(article.labels);

  return `
    <div class="card border-0 article m-0 mx-0 col-12 col-sm-6 col-md-4 col-lg-3">
      <img src="${image}" class="card-img-top rounded mt-2 mb-0" alt="${article.title}" loading="lazy" />
      <div class="card-body">
        <h5 class="card-title">${article.title}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${date}</h6>
        <h6 class="card-subtitle mb-2 text-body-secondary">${labels}</h6>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#article-modal-${index}">Read</button>
      </div>
    </div>
    ${createArticleModal(article, index)}
  `;
}

export function renderArticleCards(articles) {
  return articles.map(renderArticleCard).join("");
}
