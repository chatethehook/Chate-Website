/**
 * @file series-controller.js
 * @description Controller for managing the active series based on URL hash and renderSeriesing the corresponding content.
 * @module controllers/series-controller
 */

import { initializeLazyIframes } from "../utils/lazy-load.js";

export function initializeSeriesController({
  defaultKey,
  validKeys,
  buttons,
  series,
  container,
  renderSeries,
}) {
  if (!container) return;

  function getActiveKey() {
    const hash = location.hash.replace("#", "");
    return validKeys.has(hash) ? hash : defaultKey;
  }

  function update() {
    const activeKey = getActiveKey();

    Object.entries(buttons).forEach(([key, button]) => {
      button?.classList.toggle("clicked", key === activeKey);
    });

    container.innerHTML = renderSeries(series[activeKey]);
    initializeLazyIframes();
  }

  Object.entries(buttons).forEach(([key, button]) => {
    button?.addEventListener("click", () => {
      location.hash = key;
    });
  });

  window.addEventListener("hashchange", update);
  update();
}
