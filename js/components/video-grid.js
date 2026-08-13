/**
 * @file video-grid.js
 * @description Renders a grid of video cards based on the provided series data.
 * @module components/video-grid
 */

function renderVideoCard(entry) {
  const secondaryHtml = entry.secondaryLine
    ? `<p class="textaccent m-1">${entry.secondaryLine}</p>`
    : "";
  const notesHtml = entry.notes
    .map((note) => `<p class="m-1">${note}</p>`)
    .join("");

  return `
    <div class="col-12 col-sm-6 col-lg-4 col-xl-3 pb-3">
      <iframe
        class="responsive-iframe lazy-iframe"
        data-src="${entry.videoSrc}"
        title="${entry.title}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h2 class="m-0">${entry.title}&nbsp;</h2>
      <p class="textorange m-0">${entry.rolePrefix} <span class="fw-bold">${entry.personName}</span></p>
      ${secondaryHtml}
      ${notesHtml}
    </div>`;
}

export function renderVideoGrid(series) {
  const cardsHtml = series.entries.map(renderVideoCard).join("");

  return `
    <div class="justify-content-center p-2 d-flex">
      <h1>
        ${series.titleMain}
        <span class="textaccent text-center">${series.titleAccent}</span>
      </h1>
    </div>
    <div class="row m-2">
      ${cardsHtml}
    </div>`;
}
