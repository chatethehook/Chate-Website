/**
 * @file lazy-load.js
 * @description Provides a utility function to initialize lazy loading for iframes.
 * @module utils/lazy-load
 */

export function initializeLazyIframes() {
  const iframes = document.querySelectorAll(".lazy-iframe");

  if (!iframes.length) return;

  if (!("IntersectionObserver" in window)) {
    iframes.forEach((iframe) => {
      const src = iframe.dataset.src;

      if (src) {
        iframe.src = src;
        iframe.removeAttribute("data-src");
      }
    });

    return;
  }

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (!isIntersecting) return;

        const src = target.dataset.src;

        if (!src) return;

        target.src = src;
        target.removeAttribute("data-src");

        observer.unobserve(target);
      });
    },
    {
      rootMargin: "200px",
    },
  );

  iframes.forEach((iframe) => observer.observe(iframe));
}
