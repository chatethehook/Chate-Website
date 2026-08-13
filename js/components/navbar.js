/**
 * @file navbar.js
 * @description Renders the navigation bar of the website, including logo,
 * social media links, and primary nav menu with active-link highlighting.
 * @module components/navbar
 */

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/profile.php?id=61557409119325",
    icon: "fa-facebook",
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/chate_thehook",
    icon: "fa-instagram",
    label: "Instagram",
  },
  {
    href: "https://www.youtube.com/@Chate_TheHook",
    icon: "fa-youtube",
    label: "YouTube",
  },
  {
    href: "https://www.tiktok.com/@chate_thehook",
    icon: "fa-tiktok",
    label: "TikTok",
  },
  { href: "https://t.me/chatethehook", icon: "fa-telegram", label: "Telegram" },
  {
    href: "https://www.linkedin.com/company/%E1%80%81%E1%80%BB%E1%80%AD%E1%80%90%E1%80%BA-the-hook/",
    icon: "fa-linkedin",
    label: "LinkedIn",
  },
];

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/events.html", label: "Events" },
  { href: "/articles.html", label: "Articles" },
  { href: "/videos.html", label: "Videos" },
];

export function renderSocialLinks() {
  return SOCIAL_LINKS.map(
    ({ href, icon, label }) => `
    <a class="social-media text-decoration-none" href="${href}" target="_blank" rel="noopener noreferrer" aria-label="${label}">
      <i class="fa-brands ${icon}" aria-hidden="true"></i>
    </a>`,
  ).join("");
}

function renderNavLinks(currentPath) {
  return NAV_LINKS.map(({ href, label }) => {
    const isActive = currentPath === href;

    return `
      <a
        class="site-nav__link${isActive ? " site-nav__link--active" : ""}"
        href="${href}"
        ${isActive ? 'aria-current="page"' : ""}
      >
        ${label}
      </a>
    `;
  }).join("");
}

export function navbar(currentPath) {
  return `
    <header class="site-header">
      <div class="site-header__container">

        <div class="site-header__social">
          ${renderSocialLinks()}
        </div>

        <div class="site-header__menu">
          <button
            class="custom-navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarOffcanvas"
            aria-controls="navbarOffcanvas"
            aria-label="Open navigation menu"
          >
            <span class="menu-bar menu-bar-1"></span>
            <span class="menu-bar menu-bar-2"></span>
            <span class="menu-bar menu-bar-3"></span>
          </button>
        </div>

        <div class="site-header__brand">
          <a href="/" class="site-header__logo-link" aria-label="ချိတ်-The Hook home">
            <img
              class="site-header__logo"
              src="assets/logos/logo-transparent.webp"
              alt="ချိတ်-The Hook"
            >
          </a>
        </div>

        <nav class="site-header__navigation" aria-label="Main navigation">
          <div class="site-nav">
            ${renderNavLinks(currentPath)}
          </div>
        </nav>

      </div>

      <div
        class="offcanvas offcanvas-end nav-offcanvas"
        tabindex="-1"
        id="navbarOffcanvas"
        aria-labelledby="navbarOffcanvasLabel"
      >
        <div class="offcanvas-header">
          <a href="/" class="site-header__mobile-logo-link" aria-label="ချိတ်-The Hook home">
            <img
              class="site-header__mobile-logo"
              src="assets/logos/logo-transparent.webp"
              alt="ချိတ်-The Hook"
            >
          </a>

          <h2 class="offcanvas-title" id="navbarOffcanvasLabel">
            ချိတ်-The Hook
          </h2>

          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close navigation menu"
          ></button>
        </div>

        <div class="offcanvas-body">
          <nav class="mobile-nav-links" aria-label="Mobile navigation">
            ${renderNavLinks(currentPath)}
          </nav>
          <div class="mobile-social-links">
            ${renderSocialLinks()}
          </div>
          <div class="mobile-copyright">
            <p>
              © 2026
              <a href="/">ချိတ်-The Hook</a>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </header>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  const navbarContainer = document.querySelector("#navbar-container");

  if (navbarContainer) {
    navbarContainer.innerHTML = renderNavbar(currentPath);
  }

  const toggler = document.querySelector(".custom-navbar-toggler");
  const offcanvas = document.querySelector("#navbarOffcanvas");

  if (toggler && offcanvas) {
    offcanvas.addEventListener("show.bs.offcanvas", () => {
      toggler.classList.add("is-open");
    });

    offcanvas.addEventListener("hide.bs.offcanvas", () => {
      toggler.classList.remove("is-open");
    });
  }
});
