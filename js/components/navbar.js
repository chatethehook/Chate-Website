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
    <a class="nav-link ${isActive ? "active" : ""}" ${isActive ? 'aria-current="page"' : ""} href="${href}">
      <h3 class="header-links">${label}</h3>
    </a>`;
  }).join("");
}

export function navbar() {
  const currentPath = window.location.pathname;

  return `
<a href="/">
  <img class="logo" src="assets/logos/logo-transparent.webp" alt="Organization Logo">
</a>
<hr>
<div class="container-fluid">
  <div class="row align-items-center">
    <div class="col-6 col-lg-4 mt-3">
      ${renderSocialLinks()}
    </div>
    <div class="col-6 col-lg-8">
      <nav class="navbar navbar-expand-lg navbar-transparent navbar-light sticky-top p-0" aria-label="Main navigation">
        <div class="container-fluid px-0 justify-content-end">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarOffcanvas"
            aria-controls="navbarOffcanvas"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="offcanvas offcanvas-end offcanvas-lg nav-offcanvas"
            tabindex="-1"
            id="navbarOffcanvas"
            aria-labelledby="navbarOffcanvasLabel"
          >
            <div class="offcanvas-header d-lg-none py-0">
              <a href="/" class="w-30 h-30">
                <img class="logo" src="assets/logos/logo-transparent.webp" alt="Organization Logo">
              </a>
              <h3 class="offcanvas-title fw-semibold" id="navbarOffcanvasLabel">ချိတ်-The Hook</h3>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                data-bs-target="#navbarOffcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body justify-content-lg-center">
              <div class="navbar-nav ms-auto text-end text-lg-center">
                ${renderNavLinks(currentPath)}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</div>`;
}
