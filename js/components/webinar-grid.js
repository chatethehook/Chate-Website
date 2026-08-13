/**
 * @file webinar-grid.js
 * @description Renders a grid of webinar cards based on the provided series data.
 * @module components/webinar-grid
 */

function renderWebinarCard(entry) {
  const mediaHtml =
    entry.mediaType === "video"
      ? `
        <iframe
          class="responsive-iframe lazy-iframe"
          data-src="${entry.mediaSrc}"
          title="${entry.title}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>`
      : `
        <img
          class="img-fluid rounded"
          src="${entry.mediaSrc}"
          alt="${entry.title}"
          loading="lazy"
        />
      `;

  const presenterHtml = entry.presenter
    ? `<p class="textorange m-0">${entry.presenter}</p>`
    : "";
  const notesHtml = entry.notes
    .map((note) => `<p class="m-1">${note}</p>`)
    .join("");

  return `
    <div class="col-12 col-sm-6 col-lg-4 col-xl-3 pb-3">
      ${mediaHtml}
      <h2 class="m-0">
        ${entry.title}&nbsp;
        <span class="textaccent">
          <p class="d-inline m-0 text-right">${entry.date}</p>
        </span>
      </h2>
      ${presenterHtml}
      ${notesHtml}
    </div>`;
}

export function renderWebinarGrid(series) {
  const cardsHtml = series.entries.map(renderWebinarCard).join("");

  return `
    <div class="justify-content-center p-2 d-flex">
      <h1 class="text-center">
        ${series.titleMain}
        <span class="textaccent text-center">${series.titleAccent}</span>
      </h1>
    </div>
    <div class="row m-2">
      ${cardsHtml}
    </div>`;
}
