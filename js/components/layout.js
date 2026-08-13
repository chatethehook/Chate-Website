/**
 * @file layout.js
 * @description Renders and mounts the layout components, including the navbar and footer.
 * @module components/layout
 */

import { renderNavbar } from "./navbar.js";
// import { renderFooter } from "./footer.js";

export function mountLayout() {
  const navbarEl = document.getElementById("navbar");
  const footerEl = document.getElementById("footer");

  if (navbarEl)
    navbarEl.innerHTML = renderNavbar(window.location.pathname) || "";
  if (footerEl) footerEl.innerHTML = renderFooter() || "";
}
