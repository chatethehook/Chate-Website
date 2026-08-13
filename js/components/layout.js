/**
 * @file layout.js
 * @description Renders and mounts the layout components, including the navbar and footer.
 * @module components/layout
 */

import { navbar } from "./navbar.js";
import { footer } from "./footer.js";

export function mountLayout() {
  const navbarEl = document.getElementById("navbar");
  const footerEl = document.getElementById("footer");

  if (navbarEl) navbarEl.innerHTML = navbar() || "";
  if (footerEl) footerEl.innerHTML = footer() || "";
}
