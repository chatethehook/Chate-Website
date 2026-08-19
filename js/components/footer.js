/**
 * @file footer.js
 * @description Renders the footer section of the website, including logo,
 * social links, and grouped navigation columns.
 * @module components/footer
 */

import { renderSocialLinks } from "./navbar.js";

const EVENT_LINKS = [
  { label: "Advising", href: "/advising.html" },
  { label: "Above & Beyond", href: "/events.html#above-and-beyond" },
  { label: "Stepping Stone", href: "/events.html#stepping-stone" },
  {
    label: '<span lang="my">ကျောင်းလျှောက်ကြမယ်</span>',
    href: "/events.html#kyaung-shaut",
  },
];

const ARTICLE_LINKS = [
  { label: "Scholarships", href: "/articles.html#scholarships" },
  {
    label: "Testing and Curriculum",
    href: "/articles.html#testing-and-curriculum",
  },
  { label: "UK", href: "/articles.html#uk" },
  { label: "US", href: "/articles.html#us" },
  { label: "All Articles", href: "/articles.html#all-articles" },
];

const VIDEO_LINKS = [
  {
    label: '<span lang="my">စုတုပြု</span> Series',
    href: "/videos.html#su-tu-pyu",
  },
  { label: "Scholars' Diaries", href: "/videos.html#scholars-diaries" },
];

function renderFooterLinks(links) {
  return links
    .map(
      ({ label, href }) => `
        <a class="site-footer__link" href="${href}">
          ${label}
        </a>
      `,
    )
    .join("");
}

export function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="site-footer__container px-4 py-5">

        <div class="row g-4">

          <div class="col-12 col-sm-6 col-md-3">
            <div class="site-footer__brand">
              <img
                class="site-footer__logo"
                src="assets/logos/logo-transparent.webp"
                alt="ချိတ်-The Hook"
              >

              <h3 class="site-footer__tagline">
                <span class="site-footer__tagline--chate">Chate</span>
                Your Dreams
              </h3>

              <div class="site-footer__social">
                ${renderSocialLinks()}
              </div>
            </div>
          </div>

          <div class="col-6 col-md-2">
            <h3 class="site-footer__heading">Events</h3>
            <nav class="site-footer__links" aria-label="Events">
              ${renderFooterLinks(EVENT_LINKS)}
            </nav>
          </div>

          <div class="col-6 col-md-2">
            <h3 class="site-footer__heading">Articles</h3>
            <nav class="site-footer__links" aria-label="Articles">
              ${renderFooterLinks(ARTICLE_LINKS)}
            </nav>
          </div>

          <div class="col-6 col-md-2">
            <h3 class="site-footer__heading">Videos</h3>
            <nav class="site-footer__links" aria-label="Videos">
              ${renderFooterLinks(VIDEO_LINKS)}
            </nav>
          </div>

        </div>

        <div class="site-footer__divider"></div>

        <div class="site-footer__copyright">
          <p>
            © 2026
            <a
              href="https://github.com/chatethehook/Chate-Website"
              title="The Hook Official Website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span lang="my">ချိတ် - The Hook</span> Official Website
            </a>
            <span class="site-footer__credit">by</span>
            <a
              href="https://chatethehook.com/"
              title="The Hook"
            >
              <span lang="my">ချိတ် - The Hook</span>
            </a>
          </p>
        </div>

      </div>
    </footer>
  `;
}
