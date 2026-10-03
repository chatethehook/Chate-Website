/**
 * @file theme-toggle.js
 * @description This is for hanndling theme change through the whole based on users' preference.
 * @module utils/theme-toggle
 */

function applyTheme(theme) {
  const isDark = theme === "dark";

  document.documentElement.dataset.theme = theme;

  document.querySelectorAll(".theme-toggle").forEach((toggle) => {
    toggle.setAttribute(
      "aria-label",
      isDark ? "Switch to light theme" : "Switch to dark theme",
    );
    toggle.setAttribute("aria-pressed", String(isDark));
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
