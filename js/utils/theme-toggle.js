/**
 * @file theme-toggle.js
 * @description This is for hanndling theme change through the whole based on users' preference.
 * @module utils/theme-toggle
 */

function applyTheme(theme) {
  const isDark = theme === "dark";

  document.documentElement.dataset.theme = theme;
  syncThemeAwareImages();

  document.querySelectorAll(".theme-toggle").forEach((toggle) => {
    toggle.setAttribute(
      "aria-label",
      isDark ? "Switch to light theme" : "Switch to dark theme",
    );
    toggle.setAttribute("aria-pressed", String(isDark));
  });
}

export function syncThemeAwareImages() {
  const logoAttribute =
    document.documentElement.dataset.theme === "dark"
      ? "data-logo-dark"
      : "data-logo-light";

  document.querySelectorAll(`img[${logoAttribute}]`).forEach((image) => {
    image.src = image.getAttribute(logoAttribute);
  });
}

export function initThemeToggle() {
  const savedTheme = localStorage.getItem("chate-theme") || "light";

  applyTheme(savedTheme);

  document.querySelectorAll(".theme-toggle").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.dataset.theme;
      const nextTheme = currentTheme === "dark" ? "light" : "dark";

      localStorage.setItem("chate-theme", nextTheme);
      applyTheme(nextTheme);
    });
  });
}
