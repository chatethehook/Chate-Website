/**
 * @file layout.js
 * @description Renders and mounts the layout components, including the navbar and footer.
 * @module components/layout
 */

import { renderNavbar, initNavbar } from "./navbar.js";
import { renderFooter } from "./footer.js";

export function mountLayout() {
  const currentPath = window.location.pathname;

  const navbarEl = document.getElementById("navbar");
  if (navbarEl) {
    navbarEl.innerHTML = renderNavbar(currentPath);
    initNavbar(navbarEl);
  }

  const footerEl = document.getElementById("footer");
  if (footerEl) {
    footerEl.innerHTML = renderFooter();
  }
}
